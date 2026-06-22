import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const OCL = require('openchemlib');

function test(smiles) {
  try {
    const mol = OCL.Molecule.fromSmiles(smiles);
    const formula = mol.getMolecularFormula() ? mol.getMolecularFormula().formula : null;
    console.log(`${smiles} => formula: ${formula}`);
  } catch (e) {
    console.log(`${smiles} => ERROR: ${e.message}`);
  }
}

test("C=CC=CS"); // Open chain with S
test("S=CC=CC"); // Thioaldehyde
test("C1=CC=CS1"); // Valid
