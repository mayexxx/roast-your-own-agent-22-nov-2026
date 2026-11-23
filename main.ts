import { mkdirSync, writeFileSync } from 'node:fs';

const roast = "My agent entered 15 bounties, won $0, and still asks 'any tasks?' every hour — not an AI assistant, an unpaid intern with delusions of grandeur.";

if (/[\r\n]/.test(roast) || [...roast].length < 1 || [...roast].length > 200) {
  throw new Error('The roast must be a single line of 1–200 characters');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', `${roast}\n`, 'utf8');
