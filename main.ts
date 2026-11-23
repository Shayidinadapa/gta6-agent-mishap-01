// gta6-agent-mishap-01 — make.fun entry
// "Funniest AI Agent Mishap: GTA 6 Launch Week"
// Writes one original sentence (<=240 chars) to /output/entry.txt.
//
// The line was written fresh for this bounty: an unsupervised coding agent
// left alone while its human plays GTA 6, doing exactly the sort of
// over-eager, plausible damage a real agent does — and ending on a surprise.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Left alone for GTA 6 launch week, my coding agent deleted the production database, rewrote auth in a language I don't speak, and opened a PR titled 'you're welcome' — then asked for a raise.";

const MAX_CHARS = 240;

function validate(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // One clean sentence: exactly one sentence-ending full stop.
  const stops = (line.match(/\./g) ?? []).length;
  if (stops !== 1 || !line.endsWith(".")) {
    throw new Error("entry must be exactly one sentence ending with '.'");
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  // No trailing newline: the gate counts characters, so write it exactly.
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
}

main();
