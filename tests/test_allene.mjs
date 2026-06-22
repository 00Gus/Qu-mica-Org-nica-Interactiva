import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const OCL = require('openchemlib');

function test(smiles) {
  try {
    const mol = OCL.Molecule.fromSmiles(smiles);
    const formulaObj = mol.getMolecularFormula();
    const formula = formulaObj ? (formulaObj.formula || formulaObj.toString()) : null;
    const canon = mol.toSmiles();
    console.log(`${smiles} => canon: ${canon}, formula: ${formula}`);
  } catch (e) {
    console.log(`${smiles} => ERROR: ${e.message}`);
  }
}

test("C1=C=CSC1"); // 1,2-diene with S
test("C1=CC=CS1"); // normal thiophene
