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

// These are what JSME might export when drawing a perfect 5-membered ring with 2 double bonds
test("C1=CSC=C1");
test("C1=CC=CS1");
test("S1C=CC=C1");
test("c1ccsc1");
