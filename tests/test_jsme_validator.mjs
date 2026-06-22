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

const tiofeno = PROBLEMS.find(p => p.id === 'tiofeno-base');

console.log("Validator testing C1=CC=CS1:");
const res = Validator.validate("C1=CC=CS1", tiofeno);
console.log(res);

console.log("Validator testing c1ccsc1:");
const res2 = Validator.validate("c1ccsc1", tiofeno);
console.log(res2);
