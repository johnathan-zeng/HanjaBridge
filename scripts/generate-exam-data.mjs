import { readFile, writeFile } from "node:fs/promises";

const hskPath = new URL("../data/hsk-complete.min.json", import.meta.url);
const outputPath = new URL("../data/exam-data.js", import.meta.url);

const topikFiles = [1, 2, 3, 4, 5, 6].map((level) => ({
  level,
  path: `/tmp/topik-level-${level}.html`
}));
const topikFrequencyPath = new URL("../data/topik-6000.csv", import.meta.url);
const topikEnglishFiles = [1, 2, 3, 4, 5, 6].map((part) => new URL(`../data/eohwi-6000/${part}.js`, import.meta.url));

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function slug(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9가-힣一-龥]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeForKey(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function parseTopik(html, level) {
  const cards = [...html.matchAll(/<a class="group[\s\S]*?href="\/en\/vocabulary\/word\/([^"]+)\/">([\s\S]*?)<\/a>/g)];
  return cards.map((match) => {
    const fields = [...match[2].matchAll(/<p class="[^"]*">([\s\S]*?)<\/p>/g)]
      .map((item) => decodeHtml(item[1].replace(/<[^>]+>/g, "")));

    return {
      id: `topik-${level}-${match[1] || slug(fields[0])}`,
      source: "topik",
      sourceLabel: `TOPIK ${level}`,
      korean: fields[0] || "",
      koreanReading: fields[1] || "",
      english: fields[2] || "TOPIK vocabulary",
      hanja: "",
      simplified: "",
      pinyin: "",
      bridge: "Exam vocabulary entry without a confirmed Hanja or Chinese equivalent.",
      decks: [`topik-${level}`],
      tags: ["TOPIK", `TOPIK ${level}`, "exam-only"],
      examples: [],
      characters: []
    };
  });
}

function parseCsvLine(line) {
  const values = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];
    if (char === "\"" && quoted && next === "\"") {
      value += "\"";
      index += 1;
    } else if (char === "\"") {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      values.push(value);
      value = "";
    } else {
      value += char;
    }
  }

  values.push(value);
  return values;
}

function parseTopikFrequency(csv) {
  return csv
    .split(/\r?\n/)
    .slice(1)
    .map(parseCsvLine)
    .filter(([korean]) => korean)
    .map(([korean, hanja], index) => {
      const rank = index + 1;
      const band = Math.min(6, Math.ceil(rank / 1000));
      const hasHanja = /[一-龥]/.test(hanja || "");

      return {
        id: `topik-6000-${rank}-${slug(korean)}`,
        source: "topik-frequency",
        sourceLabel: `TOPIK 6000 rank ${rank}`,
        korean,
        koreanReading: "",
        english: "Meaning not imported yet",
        hanja: hasHanja ? hanja : "",
        simplified: "",
        pinyin: "",
        bridge: hasHanja
          ? "Korean frequency/TOPIK-prep entry with Hanja from the imported 6000-word sheet."
          : "Korean frequency/TOPIK-prep entry without a confirmed Hanja or Chinese equivalent.",
        decks: ["topik-6000", `topik-frequency-${band}`],
        tags: ["TOPIK 6000", `frequency ${rank}`, `band ${band}`, hasHanja ? "has hanja" : "korean-only"],
        examples: [],
        characters: hasHanja ? [...hanja].filter((char) => /[一-龥]/.test(char)).map((char) => ({
          char,
          simplified: "",
          koreanSound: "",
          koreanMeaning: "",
          pinyin: "",
          meaning: "",
          radical: "",
          strokes: "",
          grade: "",
          frequency: rank,
          variants: ""
        })) : []
      };
    });
}

function parseTopikEnglish(js) {
  const definitions = new Map();
  const pattern = /word_set1_arr\[idx\]\.push\('([\s\S]*?)'\);\s*word_set2_arr\[idx\]\.push\('([\s\S]*?)'\);/g;
  for (const match of js.matchAll(pattern)) {
    const english = decodeHtml(match[1]).replace(/\\'/g, "'").trim();
    const korean = decodeHtml(match[2]).replace(/\\'/g, "'").trim();
    if (korean && english && !definitions.has(korean)) {
      definitions.set(korean, english);
    }
  }
  return definitions;
}

async function loadTopikEnglish() {
  const definitions = new Map();
  for (const file of topikEnglishFiles) {
    try {
      const partDefinitions = parseTopikEnglish(await readFile(file, "utf8"));
      for (const [korean, english] of partDefinitions) {
        if (!definitions.has(korean)) definitions.set(korean, english);
      }
    } catch {
      // Keep generation usable if an optional source file is missing.
    }
  }
  return definitions;
}

function withTopikEnglish(entry, definitions) {
  const english = definitions.get(entry.korean);
  if (!english) return null;
  return {
    ...entry,
    english,
    bridge: entry.hanja
      ? "Korean frequency/TOPIK-prep entry with English definition and Hanja from imported sources."
      : "Korean frequency/TOPIK-prep entry with English definition. CN/Hanja link is optional and pending.",
    tags: entry.tags.filter((tag) => tag !== "korean-only").concat("KO/EN")
  };
}

function dedupeEntries(items, keyFor) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keyFor(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function hskLevelTags(levels) {
  return levels
    .filter((level) => /^n[1-7]$/.test(level))
    .map((level) => level === "n7" ? "hsk-new-7-9" : `hsk-new-${level.slice(1)}`);
}

function parseHsk(items) {
  return items
    .filter((item) => hskLevelTags(item.l || []).length)
    .map((item) => {
      const form = item.f?.[0] || {};
      const numeric = form.i?.n || "";
      const pinyin = form.i?.y || numeric;
      const meanings = form.m || [];
      const levelDecks = hskLevelTags(item.l || []);
      const readableLevels = levelDecks.map((deck) => deck.replace("hsk-new-", "HSK "));

      return {
        id: `hsk-${slug(item.s)}`,
        source: "hsk",
        sourceLabel: readableLevels.join(", "),
        korean: "",
        koreanReading: "",
        hanja: form.t || item.s,
        simplified: item.s,
        pinyin,
        english: meanings[0] || "HSK vocabulary",
        bridge: "Chinese exam vocabulary entry without a confirmed Korean equivalent.",
        decks: levelDecks,
        tags: ["HSK 3.0", ...readableLevels, ...(item.p || [])],
        examples: [],
        characters: [...item.s].length === 1 ? [{
          char: form.t || item.s,
          simplified: item.s,
          koreanSound: "",
          koreanMeaning: "",
          pinyin,
          meaning: meanings[0] || "",
          radical: item.r || "",
          strokes: "",
          grade: "",
          frequency: item.q || "",
          variants: form.t && form.t !== item.s ? item.s : ""
        }] : []
      };
    });
}

const topikEntries = [];
for (const file of topikFiles) {
  try {
    const html = await readFile(file.path, "utf8");
    topikEntries.push(...parseTopik(html, file.level));
  } catch {
    topikEntries.push({
      id: `topik-${file.level}-unavailable`,
      source: "topik",
      sourceLabel: `TOPIK ${file.level}`,
      korean: `TOPIK ${file.level}`,
      koreanReading: "",
      english: "Word list unavailable during import",
      hanja: "",
      simplified: "",
      pinyin: "",
      bridge: "This level page was not reachable when the local exam data was generated.",
      decks: [`topik-${file.level}`],
      tags: ["TOPIK", `TOPIK ${file.level}`, "source unavailable"],
      examples: [],
      characters: []
    });
  }
}

try {
  const topikFrequencyCsv = await readFile(topikFrequencyPath, "utf8");
  const topikEnglish = await loadTopikEnglish();
  const seenKorean = new Set(topikEntries.map((entry) => entry.korean));
  topikEntries.push(
    ...dedupeEntries(
      parseTopikFrequency(topikFrequencyCsv)
      .filter((entry) => !seenKorean.has(entry.korean))
      .map((entry) => withTopikEnglish(entry, topikEnglish))
      .filter(Boolean),
      (entry) => `${normalizeForKey(entry.korean)}|${normalizeForKey(entry.english)}|${normalizeForKey(entry.hanja)}`
    )
  );
} catch {
  topikEntries.push({
    id: "topik-6000-unavailable",
    source: "topik-frequency",
    sourceLabel: "TOPIK 6000",
    korean: "TOPIK 6000",
    koreanReading: "",
    english: "Frequency list unavailable during import",
    hanja: "",
    simplified: "",
    pinyin: "",
    bridge: "The TOPIK/frequency CSV was not reachable when the local exam data was generated.",
    decks: ["topik-6000"],
    tags: ["TOPIK 6000", "source unavailable"],
    examples: [],
    characters: []
  });
}

const hskEntries = parseHsk(JSON.parse(await readFile(hskPath, "utf8")));
const payload = {
  generatedAt: new Date().toISOString(),
  sources: {
    hsk: "drkameleon/complete-hsk-vocabulary complete.min.json, MIT",
    topik: "MyTOPIK public level pages scraped from locally downloaded HTML"
  },
  entries: [...topikEntries, ...hskEntries]
};

await writeFile(
  outputPath,
  `window.EXAM_WORD_DATA = ${JSON.stringify(payload)};\n`
);

console.log(`Wrote ${payload.entries.length} exam entries (${topikEntries.length} TOPIK, ${hskEntries.length} HSK).`);
