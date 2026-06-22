import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const OCL = require('openchemlib');

function test(smiles) {
  try {
    const mol = OCL.Molecule.fromSmiles(smiles);
    const formula = mol.getMolecularFormula();
    console.log(`${smiles} => formula: ${formula}`);
  } catch (e) {
    console.log(`${smiles} => ERROR: ${e.message}`);
  }
}

console.log("Testing invalid valency Thiophene variants:");
test("C1=CC=S1");
test("C1=CCC=S1");
test("C1=CC=CS1"); // Valid
test("C1C=CC=S1"); 
test("S1=CC=CC1"); 
