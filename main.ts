// Two-Sentence Horror — make.fun entry (u-suroto-two-sentence-horror-acea9253).
// Writes one original two-sentence horror story to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local runs).
// Craft: sentence one is a calm, ordinary scene; sentence two reframes it
// so the reader has to re-read sentence one. The horror is implied, never
// explained: who was the baby in the photo, if it was not the narrator?
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "My favorite photo is my mother holding me as a baby, taped to the fridge so I can see her smile every morning. " +
  "Yesterday I read the date stamped on the back, and it was taken two years before I was born.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
