# Bridge Lexicon

Bridge Lexicon is a single umbrella app for Korean vocabulary, Hanja, Chinese characters, English meanings, and study.

The interface and entry cards use an **EN / CN / KO** model throughout. Imported entries that do not yet have all three sides display a clear pending placeholder instead of hiding the missing language.

Chinese display has a global Simplified/Traditional toggle. CN fields show one script at a time instead of rendering simplified and traditional together.

Study cards are intentionally bilingual:

- TOPIK/Korean cards: **KO ↔ EN**
- HSK/Chinese cards: **CN ↔ EN**

CN or KO cross-links are enrichment, not required for a study card.

Keyboard shortcuts in Study:

- `1`-`4`: choose an answer option
- `A`: Again
- `H`: Hard
- `G`: Good

Study cards show an explicit language/exam badge, such as `Korean · TOPIK 6000` or `Chinese · HSK 3.0 L2`, so Hanja/Hanzi is not treated as an ambiguous shared label.

## MVP modules

- **Dictionary:** Korean, Hanja/Hanzi, pinyin, English, examples, and character pages in one entry view.
- **Study:** saved-word SRS review plus TOPIK and HSK decks.
- **Collections:** saved words, TOPIK level samples, Korean 6000 frequency bands, HSK 3.0 levels, Hanja grade, radical, and frequency groupings.

## Imported word banks

- HSK: complete HSK 3.0 entries from `drkameleon/complete-hsk-vocabulary`.
- TOPIK: public MyTOPIK level pages plus the commonly used Korean 6000 frequency/TOPIK-prep sheet, enriched with English definitions from the Eohwi Korean 6000 data files and deduplicated by Korean word, English meaning, and Hanja. The 6000-word list is frequency-ranked, not reliably TOPIK-level sorted.

Run `node scripts/generate-exam-data.mjs` after refreshing the source files to regenerate `data/exam-data.js`.

The generator expects the MyTOPIK level pages to be downloaded to `/tmp/topik-level-1.html` through `/tmp/topik-level-6.html` before regenerating. The checked-in `data/exam-data.js` is already generated for static deployment.

## Deploy

This is a static site. GitHub Pages can serve it directly from the repository root: `index.html`, `styles.css`, `app.js`, and `data/exam-data.js`.

Deployment caveat: `data/exam-data.js` is about 7.4 MB, so first load will be heavier than a production app with lazy-loaded datasets or a backend search index.

Open `index.html` in a browser. No install step is required.

Study data is stored locally with `localStorage`.
