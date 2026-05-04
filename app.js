const baseEntries = [
  {
    id: "hakgyo",
    korean: "학교",
    hanja: "學校",
    simplified: "学校",
    pinyin: "xue2 xiao4",
    koreanReading: "hak-gyo",
    english: "school",
    bridge: "A place where learning is gathered and organized.",
    decks: ["topik-1", "hsk-1"],
    tags: ["education", "daily word", "noun"],
    examples: [
      { korean: "저는 학교에 가요.", chinese: "我去学校。", english: "I go to school." },
      { korean: "학교가 집에서 가까워요.", chinese: "学校离家很近。", english: "The school is close to home." }
    ],
    characters: [
      { char: "學", simplified: "学", koreanSound: "학", koreanMeaning: "배우다", pinyin: "xue2", meaning: "learn, study", radical: "子", strokes: 16, grade: "8급", frequency: "high", variants: "学" },
      { char: "校", simplified: "校", koreanSound: "교", koreanMeaning: "학교", pinyin: "xiao4", meaning: "school, institution", radical: "木", strokes: 10, grade: "준7급", frequency: "high", variants: "校" }
    ]
  },
  {
    id: "haksaeng",
    korean: "학생",
    hanja: "學生",
    simplified: "学生",
    pinyin: "xue2 sheng1",
    koreanReading: "hak-saeng",
    english: "student",
    bridge: "A living person whose role is study.",
    decks: ["topik-1", "hsk-1"],
    tags: ["education", "person", "noun"],
    examples: [
      { korean: "그 학생은 중국어를 배워요.", chinese: "那个学生学中文。", english: "That student studies Chinese." }
    ],
    characters: [
      { char: "學", simplified: "学", koreanSound: "학", koreanMeaning: "배우다", pinyin: "xue2", meaning: "learn, study", radical: "子", strokes: 16, grade: "8급", frequency: "high", variants: "学" },
      { char: "生", simplified: "生", koreanSound: "생", koreanMeaning: "나다, 삶", pinyin: "sheng1", meaning: "life, birth, student", radical: "生", strokes: 5, grade: "8급", frequency: "high", variants: "生" }
    ]
  },
  {
    id: "hanguk",
    korean: "한국",
    hanja: "韓國",
    simplified: "韩国",
    pinyin: "han2 guo2",
    koreanReading: "han-guk",
    english: "Korea",
    bridge: "The Korean country or nation.",
    decks: ["topik-1", "hsk-2"],
    tags: ["place", "identity", "noun"],
    examples: [
      { korean: "한국 문화를 좋아해요.", chinese: "我喜欢韩国文化。", english: "I like Korean culture." }
    ],
    characters: [
      { char: "韓", simplified: "韩", koreanSound: "한", koreanMeaning: "한국", pinyin: "han2", meaning: "Korean, Korea", radical: "韋", strokes: 17, grade: "준5급", frequency: "high", variants: "韩" },
      { char: "國", simplified: "国", koreanSound: "국", koreanMeaning: "나라", pinyin: "guo2", meaning: "country, nation", radical: "囗", strokes: 11, grade: "8급", frequency: "high", variants: "国" }
    ]
  },
  {
    id: "munhwa",
    korean: "문화",
    hanja: "文化",
    simplified: "文化",
    pinyin: "wen2 hua4",
    koreanReading: "mun-hwa",
    english: "culture",
    bridge: "Writing, refinement, and transformation shared by a society.",
    decks: ["topik-2", "hsk-3"],
    tags: ["society", "abstract", "noun"],
    examples: [
      { korean: "한자 문화권에는 공통점이 있어요.", chinese: "汉字文化圈有共同点。", english: "The Chinese-character cultural sphere has common traits." }
    ],
    characters: [
      { char: "文", simplified: "文", koreanSound: "문", koreanMeaning: "글월", pinyin: "wen2", meaning: "writing, culture", radical: "文", strokes: 4, grade: "8급", frequency: "high", variants: "文" },
      { char: "化", simplified: "化", koreanSound: "화", koreanMeaning: "되다", pinyin: "hua4", meaning: "change, transform", radical: "匕", strokes: 4, grade: "7급", frequency: "high", variants: "化" }
    ]
  },
  {
    id: "sigan",
    korean: "시간",
    hanja: "時間",
    simplified: "时间",
    pinyin: "shi2 jian1",
    koreanReading: "si-gan",
    english: "time",
    bridge: "An interval between moments.",
    decks: ["topik-1", "hsk-1"],
    tags: ["daily word", "abstract", "noun"],
    examples: [
      { korean: "시간이 없어요.", chinese: "没有时间。", english: "There is no time." }
    ],
    characters: [
      { char: "時", simplified: "时", koreanSound: "시", koreanMeaning: "때", pinyin: "shi2", meaning: "time, hour", radical: "日", strokes: 10, grade: "8급", frequency: "high", variants: "时" },
      { char: "間", simplified: "间", koreanSound: "간", koreanMeaning: "사이", pinyin: "jian1", meaning: "between, interval", radical: "門", strokes: 12, grade: "7급", frequency: "high", variants: "间" }
    ]
  },
  {
    id: "jeongbo",
    korean: "정보",
    hanja: "情報",
    simplified: "情报",
    pinyin: "qing2 bao4",
    koreanReading: "jeong-bo",
    english: "information",
    bridge: "A reported state, feeling, or situation made knowable.",
    decks: ["topik-3", "hsk-5"],
    tags: ["technology", "news", "noun"],
    examples: [
      { korean: "새 정보를 저장했어요.", chinese: "我保存了新的情报。", english: "I saved the new information." }
    ],
    characters: [
      { char: "情", simplified: "情", koreanSound: "정", koreanMeaning: "뜻, 감정", pinyin: "qing2", meaning: "feeling, condition", radical: "心", strokes: 11, grade: "5급", frequency: "medium", variants: "情" },
      { char: "報", simplified: "报", koreanSound: "보", koreanMeaning: "알리다", pinyin: "bao4", meaning: "report, inform", radical: "土", strokes: 12, grade: "5급", frequency: "medium", variants: "报" }
    ]
  },
  {
    id: "gyeongje",
    korean: "경제",
    hanja: "經濟",
    simplified: "经济",
    pinyin: "jing1 ji4",
    koreanReading: "gyeong-je",
    english: "economy",
    bridge: "Managing flows and resources so a society can function.",
    decks: ["topik-4", "hsk-4"],
    tags: ["society", "money", "noun"],
    examples: [
      { korean: "경제 뉴스가 어렵지만 중요해요.", chinese: "经济新闻很难但是很重要。", english: "Economic news is difficult but important." }
    ],
    characters: [
      { char: "經", simplified: "经", koreanSound: "경", koreanMeaning: "지나다, 다스리다", pinyin: "jing1", meaning: "manage, pass through", radical: "糸", strokes: 13, grade: "5급", frequency: "medium", variants: "经" },
      { char: "濟", simplified: "济", koreanSound: "제", koreanMeaning: "건너다, 구제하다", pinyin: "ji4", meaning: "settle, aid, cross", radical: "水", strokes: 17, grade: "4급", frequency: "medium", variants: "济" }
    ]
  },
  {
    id: "daehak",
    korean: "대학",
    hanja: "大學",
    simplified: "大学",
    pinyin: "da4 xue2",
    koreanReading: "dae-hak",
    english: "university",
    bridge: "A great or advanced place of study.",
    decks: ["topik-2", "hsk-1"],
    tags: ["education", "campus", "noun"],
    examples: [
      { korean: "대학에서 역사와 중국어를 공부해요.", chinese: "我在大学学习历史和中文。", english: "I study history and Chinese at university." }
    ],
    characters: [
      { char: "大", simplified: "大", koreanSound: "대", koreanMeaning: "크다", pinyin: "da4", meaning: "big, great", radical: "大", strokes: 3, grade: "8급", frequency: "high", variants: "大" },
      { char: "學", simplified: "学", koreanSound: "학", koreanMeaning: "배우다", pinyin: "xue2", meaning: "learn, study", radical: "子", strokes: 16, grade: "8급", frequency: "high", variants: "学" }
    ]
  }
];

const examEntries = (window.EXAM_WORD_DATA?.entries || []).filter((entry) => {
  return !baseEntries.some((baseEntry) => baseEntry.id === entry.id);
});

const entries = [...baseEntries, ...examEntries];
const MAX_VISIBLE_RESULTS = 120;

const decks = [
  { id: "all", track: "all", name: "All / 全部 / 전체", description: "Curated bridge entries plus imported EN/CN/KO exam word lists.", filter: () => true },
  { id: "saved", track: "saved", name: "Saved / 收藏 / 저장", description: "Custom EN/CN/KO deck from dictionary saves.", filter: (entry, state) => state.saved.has(entry.id) },
  { id: "topik-6000", track: "topik", name: "Korean 6000 / 韩语6000 / 한국어6000", description: "Frequency-ranked TOPIK-prep list, not exam-level placement.", filter: (entry) => entry.decks.includes("topik-6000") },
  { id: "topik-1", track: "topik", name: "TOPIK 1 sample / 样本 / 샘플", description: "Public level-page entries with EN/CN/KO placeholders.", filter: (entry) => entry.decks.includes("topik-1") },
  { id: "topik-2", track: "topik", name: "TOPIK 2 sample / 样本 / 샘플", description: "Public level-page entries with EN/CN/KO placeholders.", filter: (entry) => entry.decks.includes("topik-2") },
  { id: "topik-3", track: "topik", name: "TOPIK 3 sample / 样本 / 샘플", description: "Public level-page entries with EN/CN/KO placeholders.", filter: (entry) => entry.decks.includes("topik-3") },
  { id: "topik-4", track: "topik", name: "TOPIK 4 sample / 样本 / 샘플", description: "Public level-page entries with EN/CN/KO placeholders.", filter: (entry) => entry.decks.includes("topik-4") },
  { id: "topik-5", track: "topik", name: "TOPIK 5 sample / 样本 / 샘플", description: "Public level-page entries with EN/CN/KO placeholders.", filter: (entry) => entry.decks.includes("topik-5") },
  { id: "topik-6", track: "topik", name: "TOPIK 6 sample / 样本 / 샘플", description: "Public level-page entries with EN/CN/KO placeholders.", filter: (entry) => entry.decks.includes("topik-6") },
  { id: "hsk-new-1", track: "hsk", name: "HSK 3.0 L1 / 一级 / 1급", description: "Complete imported HSK EN/CN entries with KO placeholders.", filter: (entry) => entry.decks.includes("hsk-new-1") },
  { id: "hsk-new-2", track: "hsk", name: "HSK 3.0 L2 / 二级 / 2급", description: "Complete imported HSK EN/CN entries with KO placeholders.", filter: (entry) => entry.decks.includes("hsk-new-2") },
  { id: "hsk-new-3", track: "hsk", name: "HSK 3.0 L3 / 三级 / 3급", description: "Complete imported HSK EN/CN entries with KO placeholders.", filter: (entry) => entry.decks.includes("hsk-new-3") },
  { id: "hsk-new-4", track: "hsk", name: "HSK 3.0 L4 / 四级 / 4급", description: "Complete imported HSK EN/CN entries with KO placeholders.", filter: (entry) => entry.decks.includes("hsk-new-4") },
  { id: "hsk-new-5", track: "hsk", name: "HSK 3.0 L5 / 五级 / 5급", description: "Complete imported HSK EN/CN entries with KO placeholders.", filter: (entry) => entry.decks.includes("hsk-new-5") },
  { id: "hsk-new-6", track: "hsk", name: "HSK 3.0 L6 / 六级 / 6급", description: "Complete imported HSK EN/CN entries with KO placeholders.", filter: (entry) => entry.decks.includes("hsk-new-6") },
  { id: "hsk-new-7-9", track: "hsk", name: "HSK 3.0 L7-9 / 七九级 / 7-9급", description: "Complete imported advanced HSK EN/CN entries with KO placeholders.", filter: (entry) => entry.decks.includes("hsk-new-7-9") }
];

const state = {
  activeId: entries[0].id,
  query: "",
  collectionIds: null,
  activeDeck: "all",
  activeTrack: "all",
  chineseScript: localStorage.getItem("bridgeLexiconChineseScript") || "simplified",
  hideConfident: localStorage.getItem("bridgeLexiconHideConfident") === "true",
  review: null,
  saved: new Set(JSON.parse(localStorage.getItem("bridgeLexiconSaved") || "[]")),
  srs: JSON.parse(localStorage.getItem("bridgeLexiconSrs") || "{}"),
  reviewed: Number(localStorage.getItem("bridgeLexiconReviewed") || 0)
};

const elements = {
  tabs: document.querySelectorAll(".tab"),
  views: document.querySelectorAll(".view"),
  searchInput: document.querySelector("#searchInput"),
  scriptButtons: document.querySelectorAll(".script-button"),
  entryList: document.querySelector("#entryList"),
  entryPage: document.querySelector("#entryPage"),
  resultCount: document.querySelector("#resultCount"),
  savedCount: document.querySelector("#savedCount"),
  dueCount: document.querySelector("#dueCount"),
  reviewedCount: document.querySelector("#reviewedCount"),
  reviewCard: document.querySelector("#reviewCard"),
  deckList: document.querySelector("#deckList"),
  activeDeckLabel: document.querySelector("#activeDeckLabel"),
  trackButtons: document.querySelectorAll(".track-button"),
  newQuestionButton: document.querySelector("#newQuestionButton"),
  collectionGrid: document.querySelector("#collectionGrid"),
  clearSavedButton: document.querySelector("#clearSavedButton"),
  hideConfidentButton: document.querySelector("#hideConfidentButton")
};

function normalize(value) {
  return String(value).toLowerCase().replace(/\s+/g, " ").trim();
}

function primaryText(entry) {
  if (entry.source === "hsk") return chineseText(entry) || entry.english;
  return entry.korean || chineseText(entry) || entry.english;
}

function chineseText(entry) {
  if (state.chineseScript === "traditional") return entry.hanja || entry.simplified || "";
  return entry.simplified || entry.hanja || "";
}

function characterChineseText(character) {
  if (state.chineseScript === "traditional") return character.char || character.simplified || "";
  return character.simplified || character.char || "";
}

function readingText(entry) {
  return [entry.koreanReading, entry.pinyin].filter(Boolean).join(" · ");
}

function sourceText(entry) {
  if (entry.source === "topik-frequency") return "Korean 6000 frequency";
  if (entry.source === "topik") return entry.sourceLabel || "TOPIK sample";
  if (entry.source === "hsk") return entry.sourceLabel || "HSK 3.0";
  return entry.decks.map((deck) => deck.toUpperCase()).join(", ");
}

function sourceDetailText(entry) {
  if (entry.source === "topik-frequency") {
    const rankTag = entry.tags.find((tag) => tag.startsWith("frequency "));
    return rankTag ? `Korean 6000 frequency #${rankTag.replace("frequency ", "")}` : "Korean 6000 frequency";
  }
  return entry.sourceLabel || sourceText(entry);
}

function enText(entry) {
  if (entry.english && entry.english !== "Meaning not imported yet") return entry.english;
  return "EN pending";
}

function cnText(entry) {
  return chineseText(entry) || "中文待补";
}

function koText(entry) {
  return entry.korean || "한국어 보완 필요";
}

function triad(entry) {
  return {
    en: enText(entry),
    cn: cnText(entry),
    ko: koText(entry)
  };
}

function languageGrid(entry) {
  const item = triad(entry);
  return `
    <div class="language-grid">
      <div><span>EN</span><strong>${item.en}</strong></div>
      <div><span>CN ${state.chineseScript === "traditional" ? "繁" : "简"}</span><strong class="script-text">${item.cn}</strong></div>
      <div><span>KO</span><strong>${item.ko}</strong></div>
    </div>
  `;
}

function previewEntries(groupEntries) {
  const names = groupEntries.slice(0, 6).map((entry) => primaryText(entry)).join(", ");
  if (!groupEntries.length) return "No entries yet";
  return groupEntries.length > 6 ? `${names}, ...` : names;
}

function searchableText(entry) {
  return normalize([
    entry.korean,
    entry.hanja,
    entry.simplified,
    entry.pinyin,
    entry.koreanReading,
    entry.english,
    entry.bridge,
    entry.sourceLabel,
    entry.tags.join(" "),
    entry.decks.join(" "),
    ...entry.examples.flatMap((example) => [example.korean, example.chinese, example.english]),
    ...entry.characters.flatMap((character) => [
      character.char,
      character.simplified,
      character.koreanSound,
      character.koreanMeaning,
      character.pinyin,
      character.meaning,
      character.radical,
      character.grade,
      character.frequency,
      character.variants
    ])
  ].join(" "));
}

function filteredEntries() {
  if (state.collectionIds) {
    return entries.filter((entry) => state.collectionIds.includes(entry.id));
  }

  const query = normalize(state.query);
  return query ? entries.filter((entry) => searchableText(entry).includes(query)) : entries;
}

function activeEntry() {
  return entries.find((entry) => entry.id === state.activeId) || filteredEntries()[0] || entries[0];
}

function saveState() {
  localStorage.setItem("bridgeLexiconSaved", JSON.stringify([...state.saved]));
  localStorage.setItem("bridgeLexiconSrs", JSON.stringify(state.srs));
  localStorage.setItem("bridgeLexiconReviewed", String(state.reviewed));
  localStorage.setItem("bridgeLexiconChineseScript", state.chineseScript);
}

function savePreferences() {
  localStorage.setItem("bridgeLexiconChineseScript", state.chineseScript);
  localStorage.setItem("bridgeLexiconHideConfident", String(state.hideConfident));
}

function dueEntries() {
  const now = Date.now();
  return entries.filter((entry) => {
    if (!state.saved.has(entry.id)) return false;
    return !state.srs[entry.id] || state.srs[entry.id].due <= now;
  });
}

function isConfident(entry) {
  const card = state.srs[entry.id];
  return Boolean(card && (card.interval >= 14 || card.lastRating === "easy"));
}

function visibleCollectionEntries(collectionEntries) {
  if (!state.hideConfident) return collectionEntries;
  return collectionEntries.filter((entry) => !isConfident(entry));
}

function deckEntries(deckId = state.activeDeck) {
  const deck = decks.find((item) => item.id === deckId) || decks[0];
  return entries.filter((entry) => deck.filter(entry, state));
}

function studyableEntries(deckId = state.activeDeck) {
  return deckEntries(deckId).filter((entry) => enText(entry) !== "EN pending" && (koText(entry) !== "한국어 보완 필요" || cnText(entry) !== "中文待补"));
}

function visibleDecks() {
  if (state.activeTrack === "all") return decks;
  return decks.filter((deck) => deck.track === state.activeTrack || deck.id === "all");
}

function renderStats() {
  elements.savedCount.textContent = state.saved.size;
  elements.dueCount.textContent = dueEntries().length;
  elements.reviewedCount.textContent = state.reviewed;
}

function renderScriptToggle() {
  elements.scriptButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.script === state.chineseScript);
  });
}

function renderCollectionControls() {
  elements.hideConfidentButton.classList.toggle("active", state.hideConfident);
  elements.hideConfidentButton.textContent = state.hideConfident
    ? "Showing unknown"
    : "Hide confident";
}

function renderEntryList() {
  const matches = filteredEntries();
  const visibleMatches = matches.slice(0, MAX_VISIBLE_RESULTS);
  elements.resultCount.textContent = `${matches.length} result${matches.length === 1 ? "" : "s"}${matches.length > visibleMatches.length ? ` · showing ${visibleMatches.length}` : ""}`;
  elements.entryList.innerHTML = visibleMatches.map((entry) => `
    <button class="entry-row ${entry.id === state.activeId ? "active" : ""}" type="button" data-entry="${entry.id}">
      <span>
        <strong>${primaryText(entry)} · ${sourceText(entry)}</strong>
        ${readingText(entry) || "EN/CN/KO"}
      </span>
      ${languageGrid(entry)}
    </button>
  `).join("");
}

function renderEntryPage() {
  const entry = activeEntry();
  const isSaved = state.saved.has(entry.id);

  elements.entryPage.innerHTML = `
    <div class="entry-hero">
      <div>
        <p class="eyebrow">EN / CN / KO entry</p>
        <div class="word-title">
          <strong>${primaryText(entry)}</strong>
          <span>${chineseText(entry) || sourceText(entry)}</span>
        </div>
        <p class="bridge-line">${[readingText(entry), sourceDetailText(entry)].filter(Boolean).join(" · ")}</p>
      </div>
      <button class="save-button ${isSaved ? "saved" : ""}" type="button" data-save="${entry.id}">
        ${isSaved ? "Saved / 收藏 / 저장됨" : "Save / 收藏 / 저장"}
      </button>
    </div>
    <div class="entry-sections">
      <section class="entry-main">
        <h3>Bridge / 连接 / 연결</h3>
        <p class="bridge-line">${entry.bridge}</p>
        <div class="meta-grid">
          <div class="meta-tile"><span class="eyebrow">EN / English / 영어</span><strong>${enText(entry)}</strong></div>
          <div class="meta-tile"><span class="eyebrow">CN / 中文 / 중국어</span><strong class="script-text">${cnText(entry)}</strong></div>
          <div class="meta-tile"><span class="eyebrow">KO / 한국어 / Korean</span><strong>${koText(entry)}</strong></div>
        </div>
        <div class="tag-row">${entry.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="sentence-list">
          ${entry.examples.length ? entry.examples.map((example) => `
            <article class="sentence">
              <strong>KO ${example.korean}</strong>
              <p class="script-text">CN ${example.chinese}</p>
              <p class="muted">EN ${example.english}</p>
            </article>
          `).join("") : `<p class="empty-state">EN/CN/KO examples pending / 例句待补 / 예문 보완 필요</p>`}
        </div>
      </section>
      <section class="character-panel">
        <h3>Characters / 汉字 / 한자</h3>
        <div class="character-list">
          ${entry.characters.length ? entry.characters.map((character) => characterCard(character)).join("") : `<p class="empty-state">CN/KO character data pending / 汉字资料待补 / 한자 정보 보완 필요</p>`}
        </div>
      </section>
    </div>
  `;
}

function characterCard(character) {
  return `
    <article class="character-card">
      <div class="character-glyph">${characterChineseText(character)}</div>
      <div>
        <strong>CN ${character.pinyin || "pinyin pending"} · KO ${character.koreanSound || "음 pending"} · EN ${character.meaning || "meaning pending"}</strong>
        <p>KO ${character.koreanMeaning || "훈 pending"} · CN ${characterChineseText(character)}</p>
        <dl>
          <dt>Script</dt><dd>${state.chineseScript === "traditional" ? "Traditional / 繁體" : "Simplified / 简体"}</dd>
          <dt>Variant</dt><dd>${state.chineseScript === "traditional" ? character.simplified || character.variants || "None" : character.variants || character.char || "None"}</dd>
          <dt>Radical</dt><dd>${character.radical}</dd>
          <dt>Strokes</dt><dd>${character.strokes}</dd>
          <dt>Grade</dt><dd>${character.grade}</dd>
          <dt>Frequency</dt><dd>${character.frequency}</dd>
        </dl>
      </div>
    </article>
  `;
}

function renderDecks() {
  elements.trackButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.track === state.activeTrack);
  });

  const shownDecks = visibleDecks();
  elements.deckList.innerHTML = shownDecks.map((deck) => {
    const count = studyableEntries(deck.id).length;
    return `
      <button class="deck-button ${deck.id === state.activeDeck ? "active" : ""}" type="button" data-deck="${deck.id}">
        <span>
          <strong>${deck.name}</strong>
          ${deck.description}
        </span>
        <span>${count}</span>
      </button>
    `;
  }).join("");

  const activeDeck = decks.find((deck) => deck.id === state.activeDeck) || decks[0];
  elements.activeDeckLabel.textContent = activeDeck.name;
}

function makeReviewQuestion() {
  const activeDeckEntries = studyableEntries();
  const activeIds = new Set(activeDeckEntries.map((entry) => entry.id));
  const due = dueEntries().filter((entry) => activeIds.has(entry.id));
  const pool = due.length ? due : activeDeckEntries;
  if (!pool.length) {
    state.review = null;
    elements.reviewCard.innerHTML = `<p class="empty-state">No cards in this deck yet / 暂无卡片 / 아직 카드가 없습니다</p>`;
    return;
  }

  const entry = pool[Math.floor(Math.random() * pool.length)] || entries[0];
  state.review = { entry, mode: Math.random() > 0.5 ? "toEnglish" : "fromEnglish", answered: false };
  renderReview();
}

function studyFace(entry) {
  if (entry.source === "hsk" || !entry.korean) return cnText(entry);
  return koText(entry);
}

function studyLanguageLabel(entry) {
  if (entry.source === "hsk" || !entry.korean) return "CN / 中文 / 중국어";
  return "KO / 한국어 / Korean";
}

function studyBadge(entry) {
  if (entry.source === "hsk") {
    const level = (entry.decks.find((deck) => deck.startsWith("hsk-new-")) || "").replace("hsk-new-", "");
    const displayLevel = level === "7-9" ? "7-9" : level || "?";
    return {
      kind: "Chinese",
      label: `Chinese · HSK 3.0 L${displayLevel}`,
      sublabel: `CN deck / 汉语 / 중국어`
    };
  }

  const sampleLevel = (entry.decks.find((deck) => /^topik-\d$/.test(deck)) || "").replace("topik-", "");
  if (sampleLevel) {
    return {
      kind: "Korean",
      label: `Korean · TOPIK ${sampleLevel}`,
      sublabel: "KO deck / 韩语 / 한국어"
    };
  }

  const rankTag = entry.tags.find((tag) => tag.startsWith("frequency "));
  const rank = rankTag ? ` #${rankTag.replace("frequency ", "")}` : "";
  return {
    kind: "Korean",
    label: `Korean · TOPIK 6000${rank}`,
    sublabel: "Frequency list / 频率 / 빈도"
  };
}

function reviewPrompt(review) {
  if (review.mode === "fromEnglish") {
    return `Choose ${studyLanguageLabel(review.entry)} for EN / 选择词语 / 단어 고르기.`;
  }
  return `Choose EN / 选择英文 / 영어 뜻 고르기 for ${studyLanguageLabel(review.entry)}.`;
}

function reviewFace(review) {
  if (review.mode === "fromEnglish") return enText(review.entry);
  return studyFace(review.entry);
}

function reviewAnswer(entry, mode) {
  if (mode === "fromEnglish") return studyFace(entry);
  return entry.english;
}

function reviewOptions(review) {
  const answer = reviewAnswer(review.entry, review.mode);
  const wrong = studyableEntries()
    .filter((entry) => entry.id !== review.entry.id)
    .map((entry) => reviewAnswer(entry, review.mode))
    .filter(Boolean)
    .filter((value, index, list) => list.indexOf(value) === index)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  return [answer, ...wrong].sort(() => Math.random() - 0.5);
}

function renderReview() {
  const review = state.review;
  if (!review) {
    elements.reviewCard.innerHTML = `<p class="empty-state">Pick a deck or start a question.</p>`;
    return;
  }

  const symbolClass = review.mode === "fromEnglish" ? "english-face" : "cjk-face";
  const optionClass = review.mode === "fromEnglish" ? "cjk-option" : "english-option";
  const badge = studyBadge(review.entry);

  elements.reviewCard.innerHTML = `
    <div class="review-top">
      <div class="review-badge ${badge.kind.toLowerCase()}">
        <strong>${badge.label}</strong>
        <span>${badge.sublabel}</span>
      </div>
      <div class="review-symbol ${symbolClass}">${reviewFace(review)}</div>
      <p>${reviewPrompt(review)}</p>
    </div>
    <div class="quiz-options">
      ${reviewOptions(review).map((option, index) => `
        <button class="quiz-option ${optionClass}" type="button" data-answer="${option}">
          <span class="shortcut-key">${index + 1}</span>
          <span>${option}</span>
        </button>
      `).join("")}
    </div>
    <p class="feedback" id="reviewFeedback" aria-live="polite"></p>
    <div class="answer-actions" id="ratingActions" hidden>
      <button class="rating-button again" type="button" data-rating="again"><span class="shortcut-key">1</span><span>Again</span></button>
      <button class="rating-button" type="button" data-rating="hard"><span class="shortcut-key">4</span><span>Hard</span></button>
      <button class="rating-button good" type="button" data-rating="good"><span class="shortcut-key">5</span><span>Good</span></button>
      <button class="rating-button easy" type="button" data-rating="easy"><span class="shortcut-key">6</span><span>Easy</span></button>
    </div>
  `;
}

function answerReview(button) {
  if (!state.review || state.review.answered) return;

  const expected = reviewAnswer(state.review.entry, state.review.mode);
  const correct = button.dataset.answer === expected;
  state.review.answered = true;
  state.saved.add(state.review.entry.id);
  state.review.correct = correct;
  state.reviewed += 1;

  document.querySelectorAll(".quiz-option").forEach((option) => {
    option.disabled = true;
    option.classList.toggle("correct", option.dataset.answer === expected);
  });
  if (!correct) button.classList.add("wrong");

  document.querySelector("#reviewFeedback").textContent = correct
    ? `Correct / 正确 / 정답. This card is now in review.`
    : `Answer / 答案 / 정답: ${expected}. This card is saved for review.`;
  document.querySelector("#ratingActions").hidden = false;

  saveState();
  renderStats();
  renderDecks();
}

function rateReview(rating) {
  if (!state.review) return;

  const current = state.srs[state.review.entry.id] || { interval: 0 };
  const nextInterval = {
    again: 0,
    hard: Math.max(1, Math.round((current.interval || 0) * 1.2) || 1),
    good: Math.max(3, Math.round((current.interval || 1) * 2.5)),
    easy: Math.max(7, Math.round((current.interval || 2) * 4))
  }[rating] ?? 1;
  const dueDays = nextInterval;

  state.srs[state.review.entry.id] = {
    interval: nextInterval,
    due: Date.now() + dueDays * 24 * 60 * 60 * 1000,
    lastRating: rating
  };

  saveState();
  renderStats();
  makeReviewQuestion();
}

function studyViewActive() {
  return document.querySelector("#studyView")?.classList.contains("active");
}

function handleStudyShortcut(event) {
  if (!studyViewActive() || event.metaKey || event.ctrlKey || event.altKey) return;
  const target = event.target;
  if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target?.isContentEditable) return;

  const key = event.key.toLowerCase();
  if (!state.review?.answered && ["1", "2", "3", "4"].includes(key)) {
    const options = [...document.querySelectorAll(".quiz-option")];
    const option = options[Number(key) - 1];
    if (option && !option.disabled) {
      event.preventDefault();
      answerReview(option);
    }
    return;
  }

  if (state.review?.answered) {
    const ratingByKey = { "1": "again", "4": "hard", "5": "good", "6": "easy", a: "again", h: "hard", g: "good", e: "easy" };
    const rating = ratingByKey[key];
    if (rating) {
      event.preventDefault();
      rateReview(rating);
    }
  }
}

function collectionDefinitions() {
  const byDeck = (deckId) => entries.filter((entry) => entry.decks.includes(deckId));

  return [
    { title: "Saved / 收藏 / 저장", description: "Your custom EN/CN/KO deck from dictionary saves and reviews.", entries: entries.filter((entry) => state.saved.has(entry.id)) },
    { title: "TOPIK samples / 样本 / 샘플", description: "Public level-page entries, separate from the 6000-word frequency list.", groups: [
      { label: "TOPIK 1", entries: byDeck("topik-1") },
      { label: "TOPIK 2", entries: byDeck("topik-2") },
      { label: "TOPIK 3", entries: byDeck("topik-3") },
      { label: "TOPIK 4", entries: byDeck("topik-4") },
      { label: "TOPIK 5", entries: byDeck("topik-5") },
      { label: "TOPIK 6", entries: byDeck("topik-6") }
    ] },
    { title: "Korean 6000 / 韩语6000 / 한국어6000", description: "TOPIK-prep vocabulary sorted by source rank, not TOPIK level placement.", groups: [
      { label: "Full / 全部 / 전체", entries: byDeck("topik-6000") },
      { label: "Rank 1-1000 / 排名 / 순위", entries: byDeck("topik-frequency-1") },
      { label: "Rank 1001-2000 / 排名 / 순위", entries: byDeck("topik-frequency-2") },
      { label: "Rank 2001-3000 / 排名 / 순위", entries: byDeck("topik-frequency-3") },
      { label: "Rank 3001-4000 / 排名 / 순위", entries: byDeck("topik-frequency-4") },
      { label: "Rank 4001-5000 / 排名 / 순위", entries: byDeck("topik-frequency-5") },
      { label: "Rank 5001-6000 / 排名 / 순위", entries: byDeck("topik-frequency-6") }
    ] },
    { title: "HSK 3.0 / 汉语水平 / 중국어능력", description: "Complete imported HSK EN/CN entries, with KO links marked when pending.", groups: [
      { label: "HSK 1", entries: byDeck("hsk-new-1") },
      { label: "HSK 2", entries: byDeck("hsk-new-2") },
      { label: "HSK 3", entries: byDeck("hsk-new-3") },
      { label: "HSK 4", entries: byDeck("hsk-new-4") },
      { label: "HSK 5", entries: byDeck("hsk-new-5") },
      { label: "HSK 6", entries: byDeck("hsk-new-6") },
      { label: "HSK 7-9", entries: byDeck("hsk-new-7-9") }
    ] }
  ];
}

function renderCollections() {
  elements.collectionGrid.innerHTML = collectionDefinitions().map((collection) => {
    const groups = collection.groups || [{ label: collection.title, entries: collection.entries }];
    const visibleGroups = groups
      .map((group) => ({ ...group, entries: visibleCollectionEntries(group.entries) }))
      .filter((group) => group.entries.length);
    if (!visibleGroups.length) {
      return `
        <section class="collection-card">
          <h3>${collection.title}</h3>
          <p>${collection.description}</p>
          <p class="empty-state">No visible cards / 暂无显示 / 표시할 카드가 없습니다</p>
        </section>
      `;
    }
    return `
      <section class="collection-card">
        <h3>${collection.title}</h3>
        <p>${collection.description}</p>
        <div class="collection-list">
          ${visibleGroups.map((group) => `
            <button class="collection-link" type="button" data-collection="${group.label}" data-entry-ids="${group.entries.map((entry) => entry.id).join(",")}">
              <span>
                <strong>${group.label}</strong>
                ${previewEntries(group.entries)}
              </span>
              <span>${group.entries.length}</span>
            </button>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function renderAll() {
  renderScriptToggle();
  renderCollectionControls();
  renderStats();
  renderEntryList();
  renderEntryPage();
  renderDecks();
  renderCollections();
}

function switchView(viewName) {
  elements.tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.view === viewName));
  elements.views.forEach((view) => view.classList.toggle("active", view.id === `${viewName}View`));
  if (viewName === "study" && !state.review) makeReviewQuestion();
}

document.addEventListener("click", (event) => {
  const tab = event.target.closest(".tab");
  const entryButton = event.target.closest("[data-entry]");
  const saveButton = event.target.closest("[data-save]");
  const deckButton = event.target.closest("[data-deck]");
  const trackButton = event.target.closest("[data-track]");
  const scriptButton = event.target.closest("[data-script]");
  const answerButton = event.target.closest("[data-answer]");
  const ratingButton = event.target.closest("[data-rating]");
  const collectionButton = event.target.closest("[data-collection]");

  if (tab) switchView(tab.dataset.view);

  if (entryButton) {
    state.activeId = entryButton.dataset.entry;
    renderAll();
  }

  if (saveButton) {
    const id = saveButton.dataset.save;
    if (state.saved.has(id)) {
      state.saved.delete(id);
      delete state.srs[id];
    } else {
      state.saved.add(id);
    }
    saveState();
    renderAll();
  }

  if (deckButton) {
    state.activeDeck = deckButton.dataset.deck;
    renderDecks();
    makeReviewQuestion();
  }

  if (trackButton) {
    state.activeTrack = trackButton.dataset.track;
    const firstDeck = visibleDecks().find((deck) => deck.id !== "all") || decks[0];
    state.activeDeck = firstDeck.id;
    renderDecks();
    makeReviewQuestion();
  }

  if (scriptButton) {
    state.chineseScript = scriptButton.dataset.script;
    savePreferences();
    renderAll();
    if (state.review) renderReview();
  }

  if (answerButton) answerReview(answerButton);
  if (ratingButton) rateReview(ratingButton.dataset.rating);

  if (collectionButton) {
    state.collectionIds = collectionButton.dataset.entryIds ? collectionButton.dataset.entryIds.split(",").filter(Boolean) : [];
    state.query = "";
    elements.searchInput.value = collectionButton.dataset.collection;
    switchView("dictionary");
    const matches = filteredEntries();
    if (matches[0]) state.activeId = matches[0].id;
    renderAll();
  }
});

document.addEventListener("keydown", handleStudyShortcut);

elements.searchInput.addEventListener("input", (event) => {
  state.collectionIds = null;
  state.query = event.target.value;
  const matches = filteredEntries();
  if (matches.length && !matches.some((entry) => entry.id === state.activeId)) {
    state.activeId = matches[0].id;
  }
  renderAll();
});

elements.newQuestionButton.addEventListener("click", makeReviewQuestion);

elements.clearSavedButton.addEventListener("click", () => {
  state.saved.clear();
  state.srs = {};
  saveState();
  renderAll();
});

elements.hideConfidentButton.addEventListener("click", () => {
  state.hideConfident = !state.hideConfident;
  savePreferences();
  renderAll();
});

renderAll();
