import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const OCL = require('openchemlib');

function test(smiles) {
  try {
    const mol = OCL.Molecule.fromSmiles(smiles);
    const canon = mol.toSmiles();
    console.log(`${smiles} => canon: ${canon}`);
  } catch (e) {
    console.log(`${smiles} => ERROR: ${e.message}`);
  }
}

console.log("Testing JSME-like SMILES:");
test("C1=CC=CO1");
test("C1=CC=CN1");
test("C1=CC=C[NH]1");
test("C1=CC=CS1");
