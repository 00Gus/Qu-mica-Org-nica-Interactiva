import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const problemsPath = join(__dirname, '../js/problems.js');
let code = readFileSync(problemsPath, 'utf8');

const replacements = {
  // Pirrol
  "smiles: 'c1cc[nH]c1'": "smiles: 'C1=CNC=C1'",
  "acceptedSmiles: ['c1c[nH]cc1', 'n1cccc1']": "acceptedSmiles: ['c1cc[nH]c1', 'c1c[nH]cc1', 'n1cccc1']",

  "smiles: 'c1cc([nH])c([N+](=O)[O-])c1'": "smiles: 'O=[N+]([O-])C1=CC=C[NH]1'",
  "acceptedSmiles: ['c1c([N+](=O)[O-])c[nH]c1', 'O=[N+]([O-])c1cc[nH]c1']": "acceptedSmiles: ['c1cc([nH])c([N+](=O)[O-])c1', 'c1c([N+](=O)[O-])c[nH]c1', 'O=[N+]([O-])c1cc[nH]c1']",

  "smiles: 'c1cc([nH])c(S(=O)(=O)O)c1'": "smiles: 'O=S(C1=CC=C[NH]1)(O)=O'",
  "acceptedSmiles: ['O=S(=O)(O)c1cc[nH]c1']": "acceptedSmiles: ['c1cc([nH])c(S(=O)(=O)O)c1', 'O=S(=O)(O)c1cc[nH]c1']",

  "smiles: 'CC(=O)c1cc[nH]c1'": "smiles: 'CC(=O)C1=CC=C[NH]1'",
  "acceptedSmiles: ['CC(=O)c1ccc[nH]1']": "acceptedSmiles: ['CC(=O)c1cc[nH]c1', 'CC(=O)c1ccc[nH]1']",

  "smiles: 'Cc1cc(C)c[nH]1'": "smiles: 'CC1=CC=C(C)[NH]1'",
  "acceptedSmiles: ['Cc1ccc([nH]1)C']": "acceptedSmiles: ['Cc1cc(C)c[nH]1', 'Cc1ccc([nH]1)C']",

  "smiles: 'CCOC(=O)c1cc(C)[nH]c1C'": "smiles: 'CCOC(=O)C1=C(C)NC(C)=C1'",
  "acceptedSmiles: ['CCOC(=O)C1=C(C)NC(C)=C1', 'CCOC(=O)c1cc(C)nc1C']": "acceptedSmiles: ['CCOC(=O)c1cc(C)[nH]c1C', 'CCOC(=O)c1cc(C)nc1C']",

  // Furano
  "smiles: 'c1ccoc1'": "smiles: 'C1=COC=C1'",
  "acceptedSmiles: ['o1cccc1']": "acceptedSmiles: ['c1ccoc1', 'o1cccc1']",

  "smiles: 'c1cc([N+](=O)[O-])oc1'": "smiles: 'O=[N+]([O-])C1=CC=CO1'",
  "acceptedSmiles: ['O=[N+]([O-])c1ccoc1']": "acceptedSmiles: ['c1cc([N+](=O)[O-])oc1', 'O=[N+]([O-])c1ccoc1']",

  "smiles: 'Cc1cc(C)oc1'": "smiles: 'CC1=CC=C(C)O1'",
  // "acceptedSmiles: []" // leave as is

  // Indol
  "smiles: 'c1cc2ccccc2[nH]1'": "smiles: 'C1=CNC2=CC=CC=C12'",
  "acceptedSmiles: ['c1ccc2c(c1)cc[nH]2']": "acceptedSmiles: ['c1cc2ccccc2[nH]1', 'c1ccc2c(c1)cc[nH]2']",

  "smiles: 'c1cc2ccccc2[nH]c1[N+](=O)[O-]'": "smiles: '[O-][N+](C1=CNC2=CC=CC=C12)=O'",
  "acceptedSmiles: ['O=[N+]([O-])c1cc2ccccc2[nH]1']": "acceptedSmiles: ['c1cc2ccccc2[nH]c1[N+](=O)[O-]', 'O=[N+]([O-])c1cc2ccccc2[nH]1']",

  "smiles: 'CC(=O)n1ccc2ccccc12'": "smiles: 'CC(N1C2=CC=CC=C2C=C1)=O'",
  // "acceptedSmiles: []"

  // Benzofurano
  "smiles: 'c1cc2ccccc2o1'": "smiles: 'C1=COC2=CC=CC=C12'",
  "acceptedSmiles: ['c1ccc2c(c1)cco2']": "acceptedSmiles: ['c1cc2ccccc2o1', 'c1ccc2c(c1)cco2']",

  "smiles: 'CC(=O)c1oc2ccccc2c1'": "smiles: 'CC(C1=CC2=CC=CC=C2O1)=O'",
  "acceptedSmiles: ['CC(=O)c1cc2ccccc2o1']": "acceptedSmiles: ['CC(=O)c1oc2ccccc2c1', 'CC(=O)c1cc2ccccc2o1']",

  // Piridina
  "smiles: 'c1ccncc1'": "smiles: 'C1=CC=NC=C1'",
  "acceptedSmiles: ['n1ccccc1']": "acceptedSmiles: ['c1ccncc1', 'n1ccccc1']",

  "smiles: 'c1cc([N+](=O)[O-])cnc1'": "smiles: '[O-][N+](C1=NC=CC=C1)=O'",
  "acceptedSmiles: ['O=[N+]([O-])c1cccnc1']": "acceptedSmiles: ['c1cc([N+](=O)[O-])cnc1', 'O=[N+]([O-])c1cccnc1']"
};

for (const [key, value] of Object.entries(replacements)) {
  if (code.includes(key)) {
    code = code.replace(key, value);
    console.log(`Replaced: ${key}`);
  } else {
    console.log(`Not found: ${key}`);
  }
}

writeFileSync(problemsPath, code);
console.log("Done.");
