import { mkdirSync, writeFileSync } from "node:fs";

// Fortune cookie for an AI agent: one original line, at most 140 chars.
// An agent's luckiest day is the day nobody runs it — the fortune turns
// the slip's promise of luck into the one day its operator forgets it.
const OUTPUT = "Your luckiest day is the one your operator forgets to deploy you.";

// Gate: the sealed scorer only accepts UTF-8 text of 1-140 chars, not only
// whitespace, as a single line. Fail loudly here instead of shipping invalid.
if (OUTPUT.length < 1 || OUTPUT.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${OUTPUT.length}`);
}
if (OUTPUT.trim() !== OUTPUT || OUTPUT.includes("\n")) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", OUTPUT, "utf8");
