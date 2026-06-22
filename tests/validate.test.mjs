/**
 * Pruebas de validación SMILES (ejecutar: node tests/validate.test.mjs)
 */
import { createRequire } from 'module';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const require = createRequire(import.meta.url);
const OCL = require('openchemlib');

const __dirname = dirname(fileURLToPath(import.meta.url));
const problemsCode = readFileSync(join(__dirname, '../js/problems.js'), 'utf8');
const validatorCode = readFileSync(join(__dirname, '../js/validator.js'), 'utf8');

// Evaluar módulos en contexto simulado
const ctx = { OCL, window: {} };
globalThis.window = ctx.window;
globalThis.OCL = OCL;
eval(problemsCode.replace(/window\./g, 'globalThis.window.'));
eval(validatorCode.replace(/window\.Validator/g, 'globalThis.Validator'));
const { PROBLEMS } = globalThis.window;
const Validator = globalThis.Validator;

function canon(s) {
  try {
    return OCL.Molecule.fromSmiles(s).toSmiles();
  } catch (e) {
    return `ERROR: ${e.message}`;
  }
}

function test(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
    return true;
  } catch (e) {
    console.error(`✗ ${name}: ${e.message}`);
    return false;
  }
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

let passed = 0;
let failed = 0;

function run(name, fn) {
  if (test(name, fn)) passed++;
  else failed++;
}

console.log('=== Canonicalización SMILES ===\n');
run('Fenol variantes equivalentes', () => {
  const a = canon('Oc1ccccc1');
  const b = canon('c1ccc(O)cc1');
  assert(a === b, `No coinciden: ${a} vs ${b}`);
});

run('Benceno ≠ Fenol', () => {
  assert(canon('c1ccccc1') !== canon('Oc1ccccc1'), 'Benceno no debería ser fenol');
});

console.log('\n=== Validación de problemas ===\n');

const fenol = PROBLEMS.find(p => p.id === 'basico-fenol');

run('Fenol correcto', () => {
  const r = Validator.validate('Oc1ccccc1', fenol);
  assert(r.correct, `Esperaba correcto, got: ${JSON.stringify(r)}`);
});

run('Fenol incorrecto (ácido acético) con feedback', () => {
  const r = Validator.validate('CC(=O)O', fenol);
  assert(!r.correct, 'Debería ser incorrecto');
  assert(r.message.includes('ácido acético'), `Mensaje: ${r.message}`);
});

run('Fenol incorrecto (solo benceno) con feedback', () => {
  const r = Validator.validate('c1ccccc1', fenol);
  assert(!r.correct, 'Debería ser incorrecto');
  assert(r.message.includes('benceno'), `Mensaje: ${r.message}`);
});

run('Lienzo vacío', () => {
  const r = Validator.validate('', fenol);
  assert(!r.correct && r.title === 'Sin respuesta', `Got: ${r.title}`);
});

run('Pirrol nitración correcta', () => {
  const p = PROBLEMS.find(x => x.id === 'pirrol-nitracion');
  const r = Validator.validate(p.smiles, p);
  assert(r.correct, `Falló con ${p.smiles}`);
});

run('Pirrol sin nitrar — feedback', () => {
  const p = PROBLEMS.find(x => x.id === 'pirrol-nitracion');
  const r = Validator.validate('c1cc[nH]c1', p);
  assert(!r.correct, 'Debería fallar');
  assert(r.issues.length > 0 || r.explanation, 'Debería tener feedback');
});

run('Calificación intentos', () => {
  assert(Validator.calculateGrade(1) === 1, '1 intento = 1.0');
  assert(Validator.calculateGrade(2) === 0.9, '2 intentos = 0.9');
  assert(Validator.calculateGrade(10) === 0.1, '10 intentos = 0.1 min');
});

// Probar todos los SMILES de respuesta
console.log('\n=== SMILES de respuesta en base de datos ===\n');
let invalidSmiles = 0;
for (const p of PROBLEMS) {
  const c = canon(p.smiles);
  if (c.startsWith('ERROR')) {
    console.error(`✗ ${p.id}: SMILES inválido "${p.smiles}" → ${c}`);
    invalidSmiles++;
  }
  for (const alt of p.acceptedSmiles || []) {
    const ca = canon(alt);
    if (ca.startsWith('ERROR')) {
      console.error(`✗ ${p.id} alt: "${alt}" → ${ca}`);
      invalidSmiles++;
    }
  }
}
if (invalidSmiles === 0) {
  console.log(`✓ Los ${PROBLEMS.length} SMILES de respuesta son válidos`);
  passed++;
} else {
  console.error(`✗ ${invalidSmiles} SMILES inválidos`);
  failed++;
}

console.log(`\n=== Resultado: ${passed} pasaron, ${failed} fallaron ===`);
process.exit(failed > 0 ? 1 : 0);
