import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const expected = '5.6.3';
const pkg = require('typescript/package.json');

if (pkg.version !== expected) {
  console.error(`
[CrashRewind] Typescript version mismatch. Expected ${expected}, got ${pkg.version}.`);
  process.exit(1);
}
