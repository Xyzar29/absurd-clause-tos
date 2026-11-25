import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Absurd Clause Contest (u-donrulezz-the-absurd-clause-contest-035cc0f1):
// one deadpan terms-of-service clause, a single sentence of at most 200
// characters. It opens as a straight inheritance clause and only turns
// absurd at the end, when the loyalty points go to a goose.
const CLAUSE =
  "In the event of your death, your account and all accrued loyalty points shall pass to your nearest living relative or, failing that, to a goose of the Company's choosing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (CLAUSE.length < 1 || CLAUSE.length > 200) {
  throw new Error(`clause must be 1-200 characters, got ${CLAUSE.length}`);
}
if (CLAUSE !== CLAUSE.trim() || CLAUSE.includes("\n") || CLAUSE.includes("\r")) {
  throw new Error("clause must be a single line with no leading or trailing whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), CLAUSE, "utf8");
