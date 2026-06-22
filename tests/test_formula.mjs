import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const OCL = require('openchemlib');

const mol = OCL.Molecule.fromSmiles("C1=CC=CS1");
console.log(mol.getMolecularFormula());
console.log(typeof mol.getMolecularFormula());
console.log(JSON.stringify(mol.getMolecularFormula()));
console.log(mol.getMolecularFormula().formula);
