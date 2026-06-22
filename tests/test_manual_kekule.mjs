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

console.log("--- Pirrol ---");
test("C1=CNC=C1");
test("O=[N+]([O-])C1=CC=C[NH]1");
test("O=S(C1=CC=C[NH]1)(O)=O");
test("CC(=O)C1=CC=C[NH]1");
test("CC1=CC=C(C)[NH]1");
test("CCOC(=O)C1=C(C)NC(C)=C1");

console.log("--- Furano ---");
test("C1=COC=C1");
test("O=[N+]([O-])C1=CC=CO1");
test("CC1=CC=C(C)O1");

console.log("--- Indol ---");
test("C1=CC=C2C(=C1)C=C[NH]2"); // Indol
