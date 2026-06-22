import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const OCL = require('openchemlib');

function test(smiles) {
  try {
    const mol = OCL.Molecule.fromSmiles(smiles);
    const canon = mol.toSmiles();
    console.log(`${smiles} => valid! canon: ${canon}`);
  } catch (e) {
    console.log(`${smiles} => ERROR: ${e.message}`);
  }
}

console.log("--- Indol ---");
test("C1=CNC2=CC=CC=C12");
test("O=[N+]([O-])C1=CNC2=CC=CC=C12");
test("CC(N1C2=CC=CC=C2C=C1)=O"); // indol-acilacion-n
test("C(NC1=CC=CC=C11)=C1C1=CC=CC=C1"); // indol-fischer
