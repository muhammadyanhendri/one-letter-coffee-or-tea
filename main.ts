// One Letter: Coffee or Tea — entry program (draft).
//
// Writes exactly one letter, "A" for coffee, and nothing else, to
// /output/entry.txt.
//
// Node 22, no dependencies. The letter is a fixed constant, so every run
// produces identical bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A: coffee. One letter, no word, no explanation, no punctuation.
const ENTRY = "A";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

function main(): void {
  // Validation, revised: the gate is strict — exactly one character,
  // exactly one UTF-8 byte, not whitespace, no trailing newline, and the
  // letter must name a drink (A = coffee, B = tea). Checking the byte
  // length separately matters because a multi-byte character could pass a
  // naive length check while failing the gate's 1-character rule.
  const chars = [...ENTRY];
  if (chars.length !== 1) {
    throw new Error(`entry must be exactly 1 character, got ${chars.length}`);
  }
  const bytes = Buffer.from(ENTRY, "utf8");
  if (bytes.length !== 1) {
    throw new Error(`entry must be exactly 1 byte, got ${bytes.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY !== "A" && ENTRY !== "B") {
    throw new Error(`entry must be "A" or "B", got ${JSON.stringify(ENTRY)}`);
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must not contain a newline");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, ENTRY, "utf8");

  // Read back and verify byte-for-byte, including the exact byte count.
  const back = readFileSync(outFile, "utf8");
  if (back !== ENTRY) {
    throw new Error("verification failed: file content differs from entry");
  }
  if (Buffer.byteLength(back, "utf8") !== 1) {
    throw new Error("verification failed: file is not exactly 1 byte");
  }
  console.log(`wrote ${outFile}: ${chars.length} char, ${bytes.length} byte`);
}

main();
