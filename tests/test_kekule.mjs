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

test("C1=CSC=C1");
test("O=[N+]([O-])C1=CC=CS1");
test("CC(=O)C1=CC=CS1");
test("O=CC1=CC=CS1");
