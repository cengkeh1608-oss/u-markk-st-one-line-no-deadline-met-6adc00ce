// One Line, No Deadline Met — entry program.
// Writes the winning one-line deadline excuse to the output file.
//
// The entry is a single sentence, 94 characters, that gives an excuse for
// Why this line won the 20-draft shootout (25/25, the only perfect score):
// D2 (gaslighting deadline, 24/25) loses a point on voice — a deadline
// moving itself is slightly abstract. D3 (Future Me quit, 24/25) loses a
// point on freshness — "Future Me" is a known internet trope. D4 (upload
// bar, 24/25) also loses a point on freshness. This line keeps all five:
// excuse, turn, single-sentence form, spoken voice, and a fresh angle.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I didn't miss the deadline, I just let it go first out of politeness and it never looked back.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
