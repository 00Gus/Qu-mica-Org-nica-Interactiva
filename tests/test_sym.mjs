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

// 2-nitrotiofeno
test("c1cc([N+](=O)[O-])sc1");
// 5-nitrotiofeno
test("c1ccsc1[N+](=O)[O-]");
// nitro drawn as uncharged (OCL might fix it or treat it differently)
test("c1ccsc1N(=O)=O");
