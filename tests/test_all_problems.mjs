import { createRequire } from 'module';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const OCL = require('openchemlib');

const __dirname = dirname(fileURLToPath(import.meta.url));
const problemsCode = readFileSync(join(__dirname, '../js/problems.js'), 'utf8');
const validatorCode = readFileSync(join(__dirname, '../js/validator.js'), 'utf8');

const ctx = { OCL, window: {} };
globalThis.window = ctx.window;
globalThis.OCL = OCL;
eval(problemsCode.replace(/window\./g, 'globalThis.window.'));
eval(validatorCode.replace(/window\.Validator/g, 'globalThis.Validator'));

const { PROBLEMS } = globalThis.window;
const Validator = globalThis.Validator;

let failed = 0;

PROBLEMS.forEach(p => {
  // Test primary smiles
  const resPrimary = Validator.validate(p.smiles, p);
  if (!resPrimary.correct) {
    console.log(`Failed primary SMILES for ${p.id}: ${p.smiles}`);
    failed++;
  }
  
  // Test accepted smiles
  if (p.acceptedSmiles) {
    p.acceptedSmiles.forEach(acc => {
      const resAcc = Validator.validate(acc, p);
      if (!resAcc.correct) {
        console.log(`Failed accepted SMILES for ${p.id}: ${acc}`);
        failed++;
      }
    });
  }
});

console.log(`\nTotal failures: ${failed}`);
