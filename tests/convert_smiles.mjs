import { createRequire } from 'module';
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const OCL = require('openchemlib');

const __dirname = dirname(fileURLToPath(import.meta.url));
const problemsPath = join(__dirname, '../js/problems.js');
let code = readFileSync(problemsPath, 'utf8');

const ctx = { window: {} };
globalThis.window = ctx.window;
eval(code.replace(/window\./g, 'globalThis.window.'));
const { PROBLEMS } = globalThis.window;

for (const p of PROBLEMS) {
  try {
    const mol = OCL.Molecule.fromSmiles(p.smiles);
    const canon = mol.toSmiles(); // Kekulé SMILES
    // Only replace if it's an aromatic 5-membered ring (contains lowercase c and s/o/nH)
    // Actually, maybe it's safe to just replace specific ones manually to avoid messing up formatting.
    console.log(`id: '${p.id}', canon: '${canon}'`);
  } catch (e) {
    console.log(`Failed for ${p.id}`);
  }
}
