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

// S is 1. Bottom-Left is 2. Left is 3. Top is 4. Top-Right is 5.
test("C1SC=C=C1"); // Allene at Top (C4)
test("C1S=CC=C1"); // S has double bond
test("C1SC(=C)C=C1"); 
