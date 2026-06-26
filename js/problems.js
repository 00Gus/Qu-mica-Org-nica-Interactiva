/**
 * Base de datos de problemas — ANNAIS Química Orgánica
 * Cada problema incluye SMILES canónico, errores comunes y explicaciones pedagógicas.
 */
const CATEGORIES = {
  practica: {
    id: 'practica',
    name: 'Ejercicios básicos',
    description: 'Moléculas fundamentales para practicar el editor molecular.',
    color: '#0ea5e9'
  },
  bencenos: {
    id: 'bencenos',
    name: 'Bencenos y arenos',
    description: 'Compuestos aromáticos de interés biológico e industrial.',
    color: '#8b5cf6'
  },
  pirrol: {
    id: 'pirrol',
    name: 'Pirrol',
    description: 'Heterociclo de cinco miembros con nitrógeno. Pigmentos y reacciones.',
    color: '#ec4899'
  },
  furano: {
    id: 'furano',
    name: 'Furano',
    description: 'Heterociclo oxigenado. Vitaminas, solventes y reacciones.',
    color: '#f97316'
  },
  tiofeno: {
    id: 'tiofeno',
    name: 'Tiofeno',
    description: 'Heterociclo sulfurado. Biotina, polímeros conductores.',
    color: '#eab308'
  },
  indol: {
    id: 'indol',
    name: 'Indol',
    description: 'Sistema bicíclico. Triptófano, serotonina, alcaloides.',
    color: '#14b8a6'
  },
  benzofurano: {
    id: 'benzofurano',
    name: 'Benzofurano y benzotiofeno',
    description: 'Sistemas fusionados con reacciones de sustitución.',
    color: '#6366f1'
  },
  piridina: {
    id: 'piridina',
    name: 'Piridina',
    description: 'Heterociclo de seis miembros. Vitaminas, alcaloides, coenzimas.',
    color: '#ef4444'
  },
  diazinas: {
    id: 'diazinas',
    name: 'Diazinas',
    description: 'Pirimidina, pirazina y piridazina. Bases nitrogenadas.',
    color: '#a855f7'
  },
  quinolina: {
    id: 'quinolina',
    name: 'Quinolina e isoquinolina',
    description: 'Alcaloides y agentes quimioterapéuticos.',
    color: '#22c55e'
  },
  examen: {
    id: 'examen',
    name: 'Examen Final (Avanzado)',
    description: 'Retos de nivel universitario con renderizado de reactivos y reacciones en varios pasos.',
    color: '#0f172a'
  }
};

const PROBLEMS = [
  // ─── EJERCICIOS BÁSICOS (como el ejemplo de Moodle) ───
  {
    id: 'basico-fenol',
    category: 'practica',
    type: 'identify',
    title: 'Fenol',
    prompt: 'Dibuja la estructura del <strong>fenol</strong> (hidroxibenceno).',
    context: 'El fenol es un benceno con un grupo hidroxilo (-OH) unido directamente al anillo aromático.',
    smiles: 'Oc1ccccc1',
    acceptedSmiles: ['c1ccc(O)cc1', 'Oc1ccccc1'],
    commonMistakes: [
      { smiles: 'c1ccccc1', reason: 'Dibujaste solo benceno. El fenol necesita un grupo <strong>hidróxilo (-OH)</strong> unido al anillo aromático.' },
      { smiles: 'CC(=O)O', reason: 'Dibujaste ácido acético. El fenol tiene un anillo bencénico con -OH, no un grupo carboxilo en una cadena.' },
      { smiles: 'C1CCOC1', reason: 'Dibujaste tetrahidrofurano (THF). El fenol es un compuesto aromático de seis miembros con -OH.' },
      { smiles: 'C1=COC=C1', reason: 'Dibujaste furano. El fenol es un anillo bencénico (6 carbonos), no un heterociclo de 5 miembros.' }
    ],
    explanation: 'El fenol (C₆H₅OH) consiste en un anillo bencénico con un grupo hidroxilo en posición 1. La conjugación del par de electrones del oxígeno con el anillo le confiere propiedades ácidas débiles.',
    hints: ['Es un hexágono aromático con un grupo -OH.', 'No confundir con el alcohol alifático: el OH está sobre el anillo.']
  },
  {
    id: 'basico-thf',
    category: 'practica',
    type: 'identify',
    title: 'Tetrahidrofurano (THF)',
    prompt: 'Dibuja la estructura del <strong>tetrahidrofurano (THF)</strong>.',
    context: 'THF es un éter cíclico de cinco miembros muy usado como solvente en síntesis orgánica.',
    smiles: 'C1CCOC1',
    acceptedSmiles: ['O1CCCC1'],
    commonMistakes: [
      { smiles: 'c1ccoc1', reason: 'Dibujaste furano aromático. THF es la forma saturada (sin dobles enlaces aromáticos) del anillo.' },
      { smiles: 'Oc1ccccc1', reason: 'Dibujaste fenol. THF es un anillo de 5 miembros con un oxígeno, no un benceno.' }
    ],
    explanation: 'El THF es un anillo de cinco miembros con un átomo de oxígeno y todos enlaces simples (no aromático). Fórmula: C₄H₈O.',
    hints: ['Anillo de 5 miembros con un O.', 'Todos los enlaces son simples — no es aromático.']
  },
  {
    id: 'basico-acetico',
    category: 'practica',
    type: 'identify',
    title: 'Ácido acético',
    prompt: 'Dibuja la estructura del <strong>ácido acético</strong> (ácido etanoico).',
    context: 'Es el ácido carboxílico más simple después del ácido fórmico. Componente del vinagre.',
    smiles: 'CC(=O)O',
    acceptedSmiles: ['CC(=O)O', 'C(C)(=O)O'],
    commonMistakes: [
      { smiles: 'COC', reason: 'Dibujaste dimetil éter. El ácido acético tiene un grupo carboxilo -COOH.' },
      { smiles: 'CCO', reason: 'Dibujaste etanol. Falta el doble enlace carbonilo del grupo carboxilo.' }
    ],
    explanation: 'CH₃COOH: grupo metilo unido a un grupo carboxilo (-COOH) con enlace C=O y OH.',
    hints: ['Dos carbonos: uno del metilo y uno del carbonilo.', 'El grupo funcional es -COOH.']
  },
  {
    id: 'basico-dimetilamina',
    category: 'practica',
    type: 'identify',
    title: 'Dimetilamina',
    prompt: 'Dibuja la estructura de la <strong>dimetilamina</strong>.',
    context: 'Amina secundaria con dos grupos metilo unidos al nitrógeno.',
    smiles: 'CNC',
    acceptedSmiles: ['CNC', 'CN(C)'],
    commonMistakes: [
      { smiles: 'CCN', reason: 'Dibujaste etilamina (amina primaria). La dimetilamina tiene dos metilos en el N.' },
      { smiles: 'CN(C)C', reason: 'Dibujaste trimetilamina (amina terciaria). Solo hay dos grupos metilo.' }
    ],
    explanation: 'Fórmula (CH₃)₂NH: nitrógeno con dos metilos y un hidrógeno.',
    hints: ['Nitrógeno con exactamente dos grupos -CH₃.', 'Es una amina secundaria.']
  },
  {
    id: 'basico-octino',
    category: 'practica',
    type: 'identify',
    title: '1-Octino',
    prompt: 'Dibuja la estructura del <strong>1-octino</strong>.',
    context: 'Alquino terminal de 8 carbonos con triple enlace en posición 1.',
    smiles: 'CCCCCCC#C',
    acceptedSmiles: ['CCCCCCC#C', 'C#CCCCCCC'],
    commonMistakes: [
      { smiles: 'CCCCCCCC', reason: 'Dibujaste octano (alcano). Falta el triple enlace.' },
      { smiles: 'CCCCC=CCC', reason: 'Dibujaste un alqueno. El octino tiene un triple enlace C≡C.' }
    ],
    explanation: 'Cadena de 8 carbonos con triple enlace entre C1 y C2. Fórmula: C₈H₁₄.',
    hints: ['8 carbonos en cadena.', 'Triple enlace en el extremo (posición 1).']
  },

  // ─── BENCENOS Y ARENOS ───
  {
    id: 'paba',
    category: 'bencenos',
    type: 'identify',
    title: 'Ácido para-aminobenzoico (PABA)',
    prompt: 'Dibuja la estructura del <strong>ácido para-aminobenzoico (PABA)</strong>.',
    context: 'Sustancia usada en protectores solares. Tiene un grupo amino en para y un grupo carboxilo en el benceno.',
    smiles: 'Nc1ccc(C(=O)O)cc1',
    acceptedSmiles: ['Nc1ccc(C(=O)O)cc1', 'OC(=O)c1ccc(N)cc1'],
    commonMistakes: [
      { smiles: 'Nc1cccc(C(=O)O)c1', reason: 'Colocaste el grupo amino en posición orto o meta. El PABA tiene el -NH₂ en <strong>para</strong> (opuesto) al -COOH.' },
      { smiles: 'Nc1ccccc1', reason: 'Dibujaste anilina. Falta el grupo carboxilo -COOH en para.' },
      { smiles: 'Oc1ccc(C(=O)O)cc1', reason: 'Dibujaste ácido 4-hidroxibenzoico. El PABA tiene -NH₂, no -OH.' }
    ],
    explanation: 'PABA: benceno con -COOH y -NH₂ en posiciones 1 y 4 (para). Es precursor en el metabolismo bacteriano y compite con las sulfamidas.',
    hints: ['Benceno con -COOH y -NH₂.', 'Los grupos están en posición para (1,4).']
  },
  {
    id: 'aspirina',
    category: 'bencenos',
    type: 'identify',
    title: 'Ácido acetilsalicílico (Aspirina)',
    prompt: 'Dibuja la estructura del <strong>ácido acetilsalicílico (aspirina)</strong>.',
    context: 'Analgésico común. Es el éster acetílico del ácido salicílico.',
    smiles: 'CC(=O)Oc1ccccc1C(=O)O',
    acceptedSmiles: [],
    commonMistakes: [
      { smiles: 'Oc1ccccc1C(=O)O', reason: 'Dibujaste ácido salicílico. La aspirina tiene además un grupo acetilo (-COCH₃) esterificando el -OH.' },
      { smiles: 'CC(=O)Nc1ccc(O)cc1', reason: 'Dibujaste paracetamol. La aspirina tiene éster acetilo y ácido carboxílico, no amida.' }
    ],
    explanation: 'Ácido 2-(acetoxi)benzoico: ácido salicílico con el hidroxilo acetilado (OCOCH₃) y carboxilo en posición 1.',
    hints: ['Derivado del ácido salicílico.', 'Grupo acetilo (-OCOCH₃) en el OH orto al carboxilo.']
  },
  {
    id: 'paracetamol',
    category: 'bencenos',
    type: 'identify',
    title: 'Paracetamol (acetaminofeno)',
    prompt: 'Dibuja la estructura del <strong>paracetamol</strong>.',
    context: 'Analgésico y antipirético. También conocido como acetaminofeno.',
    smiles: 'CC(=O)Nc1ccc(O)cc1',
    acceptedSmiles: [],
    commonMistakes: [
      { smiles: 'CC(=O)Oc1ccccc1C(=O)O', reason: 'Dibujaste aspirina. El paracetamol tiene amida (-NHCOCH₃) y -OH en para, no éster.' },
      { smiles: 'Nc1ccc(O)cc1', reason: 'Dibujaste 4-aminofenol. Falta el grupo acetilo unido al nitrógeno.' }
    ],
    explanation: 'N-(4-hidroxifenil)acetamida: fenol con grupo acetamida en para.',
    hints: ['Benceno con -OH y -NHCOCH₃ en para.']
  },
  {
    id: 'fenilalanina',
    category: 'bencenos',
    type: 'identify',
    title: 'Fenilalanina',
    prompt: 'Dibuja la estructura de la <strong>fenilalanina</strong> (sin estereoisomería).',
    context: 'Aminoácido esencial. Relacionado con la fenilcetonuria.',
    smiles: 'NC(Cc1ccccc1)C(=O)O',
    acceptedSmiles: ['NCC(C(=O)O)c1ccccc1'],
    commonMistakes: [
      { smiles: 'Cc1ccccc1', reason: 'Dibujaste tolueno. La fenilalanina tiene grupo amino y carboxilo (aminoácido).' },
      { smiles: 'Nc1ccccc1', reason: 'Dibujaste anilina. La fenilalanina tiene una cadena de 3 carbonos con NH₂ y COOH.' }
    ],
    explanation: 'Aminoácido aromático: grupo fenilo (C₆H₅-) unido a una cadena -CH(NH₂)-COOH.',
    hints: ['Grupo fenilo + aminoácido.', 'Cadena: -CH₂-CH(NH₂)-COOH unida al benceno.']
  },
  {
    id: 'tnt',
    category: 'bencenos',
    type: 'identify',
    title: 'Trinitrotolueno (TNT)',
    prompt: 'Dibuja la estructura del <strong>trinitrotolueno (TNT)</strong>.',
    context: 'Explosivo. Tolueno con tres grupos nitro en posiciones 2, 4 y 6.',
    smiles: 'Cc1c(cc(cc1[N+](=O)[O-])[N+](=O)[O-])[N+](=O)[O-]',
    acceptedSmiles: [],
    commonMistakes: [
      { smiles: 'Cc1ccccc1', reason: 'Dibujaste tolueno. Faltan los tres grupos nitro (-NO₂).' },
      { smiles: 'c1ccc([N+](=O)[O-])cc1', reason: 'Dibujaste nitrobenceno. El TNT tiene metilo y tres nitros en tolueno.' }
    ],
    explanation: '2,4,6-trinitrotolueno: metilo en posición 1 y tres grupos -NO₂ en posiciones 2, 4 y 6.',
    hints: ['Tolueno con 3 grupos -NO₂.', 'Posiciones 2, 4 y 6 respecto al metilo.']
  },
  {
    id: 'ddt',
    category: 'bencenos',
    type: 'identify',
    title: 'DDT',
    prompt: 'Dibuja la estructura del <strong>DDT</strong> (diclorodifeniltricloroetano).',
    context: 'Insecticida prohibido por su persistencia en el ambiente.',
    smiles: 'ClC(Cl)(Cl)C(c1ccc(Cl)cc1)c2ccc(Cl)cc2',
    acceptedSmiles: ['ClC(c1ccc(Cl)cc1)C(Cl)(Cl)c2ccc(Cl)cc2'],
    commonMistakes: [
      { smiles: 'Clc1ccc(Cl)cc1', reason: 'Dibujaste diclorobenceno. El DDT tiene dos anillos fenilo unidos por un carbono con triclorometilo.' }
    ],
    explanation: '1,1,1-tricloro-2,2-bis(4-clorofenil)etano: dos anillos 4-clorofenilo unidos a un carbono con tres cloros.',
    hints: ['Dos anillos bencénicos con Cl en para.', 'Unidos por C(Cl)₃.']
  },
  {
    id: 'benz-fc-acyl',
    category: 'bencenos',
    type: 'reaction',
    title: 'Acilación de Friedel-Crafts',
    prompt: 'Dibuja el producto de la <strong>acilación de Friedel-Crafts</strong> del benceno con <span class="reagent">CH₃COCl / AlCl₃</span>.',
    context: 'La acilación introduce un grupo acetilo en el anillo aromático.',
    smiles: 'CC(=O)c1ccccc1',
    acceptedSmiles: [],
    commonMistakes: [
      { smiles: 'CC(=O)Cl', reason: 'Dibujaste el reactivo (acetil cloruro). El producto es acetofenona: benceno con -COCH₃.' },
      { smiles: 'Cc1ccccc1', reason: 'Dibujaste tolueno (alquilación). La acilación introduce -COCH₃, no -CH₃.' }
    ],
    explanation: 'Acetofenona (fenil etil cetona): benceno + CH₃COCl → C₆H₅COCH₃ + HCl.',
    hints: ['Producto: acetofenona.', 'Grupo -COCH₃ sobre el benceno.']
  },
  {
    id: 'benz-snar',
    category: 'bencenos',
    type: 'reaction',
    title: 'Sustitución nucleofílica aromática (SₙAr)',
    prompt: 'Dibuja el producto de <strong>SₙAr</strong>: 1-cloro-2,4-dinitrobenceno + <span class="reagent">OH⁻</span> → (luego <span class="reagent">H⁺</span>).',
    context: 'En SₙAr el grupo saliente está en posición orto o para a grupos que retiran densidad electrónica.',
    smiles: 'Oc1cc([N+](=O)[O-])cc([N+](=O)[O-])c1',
    acceptedSmiles: [],
    commonMistakes: [
      { smiles: 'Nc1cc([N+](=O)[O-])cc([N+](=O)[O-])c1', reason: 'Dibujaste la amina. El producto tiene -OH (fenol) reemplazando al cloro.' },
      { smiles: 'Clc1cc([N+](=O)[O-])cc([N+](=O)[O-])c1', reason: 'Dibujaste el reactivo sin cambio. El cloro es sustituido por -OH.' }
    ],
    explanation: '2,4-dinitrofenol: el -Cl es reemplazado por -OH. Los grupos -NO₂ activan el anillo para SₙAr.',
    hints: ['Reemplaza Cl por OH.', 'Conserva los dos grupos nitro.']
  },

  // ─── PIRROL ───
  {
    id: 'pirrol-base',
    category: 'pirrol',
    type: 'identify',
    title: 'Pirrol',
    prompt: 'Dibuja la estructura del <strong>pirrol</strong>.',
    context: 'Heterociclo aromático de 5 miembros con un nitrógeno. Base de porfirinas y hemoglobina.',
    smiles: 'C1=CNC=C1',
    acceptedSmiles: ['c1cc[nH]c1', 'c1c[nH]cc1', 'n1cccc1'],
    commonMistakes: [
      { smiles: 'C1=CC=NC=C1', reason: 'Dibujaste piridina (6 miembros). El pirrol es un anillo de 5 miembros.' },
      { smiles: 'c1ccoc1', reason: 'Dibujaste furano. El pirrol tiene nitrógeno, no oxígeno.' }
    ],
    explanation: 'Anillo de 5 miembros con un N y dos dobles enlaces. El N lleva un H (pirrol, no pirrolato).',
    hints: ['5 miembros, 1 nitrógeno.', 'Aromático con [nH].']
  },
  {
    id: 'pirrol-nitracion',
    category: 'pirrol',
    type: 'reaction',
    title: 'Nitración del pirrol',
    prompt: 'Dibuja el producto principal de la <strong>nitración del pirrol</strong> con <span class="reagent">AcONO₂ / Ac₂O, 5°C</span>.',
    context: 'La sustitución electrofílica en pirrol ocurre preferentemente en C2 (posición α al nitrógeno).',
    smiles: 'O=[N+]([O-])C1=CC=C[NH]1',
    acceptedSmiles: ['c1cc([nH])c([N+](=O)[O-])c1', 'c1c([N+](=O)[O-])c[nH]c1', 'O=[N+]([O-])c1cc[nH]c1'],
    commonMistakes: [
      { smiles: 'c1cc([nH])cc1[N+](=O)[O-]', reason: 'Nitraste en C3 (posición β). La nitración del pirrol ocurre preferentemente en C2 (α).' },
      { smiles: 'c1cc[nH]c1', reason: 'Dibujaste pirrol sin sustituir. Debe añadirse un grupo -NO₂.' }
    ],
    explanation: '2-nitropirrol: el grupo -NO₂ entra en posición 2 (α) por mayor reactividad de esa posición.',
    hints: ['Sustitución en C2 (junto al N).', 'Grupo -NO₂ en posición α.']
  },
  {
    id: 'pirrol-sulfonacion',
    category: 'pirrol',
    type: 'reaction',
    title: 'Sulfonación del pirrol',
    prompt: 'Dibuja el producto de la <strong>sulfonación del pirrol</strong> con <span class="reagent">SO₃ / Piridina</span>.',
    context: 'La sulfonación introduce -SO₃H en posición 2.',
    smiles: 'O=S(C1=CC=C[NH]1)(O)=O',
    acceptedSmiles: ['c1cc([nH])c(S(=O)(=O)O)c1', 'O=S(=O)(O)c1cc[nH]c1'],
    commonMistakes: [
      { smiles: 'c1cc[nH]c1', reason: 'Dibujaste pirrol sin reaccionar. Debe añadirse -SO₃H.' }
    ],
    explanation: 'Pirrol-2-sulfónico: -SO₃H en posición α (C2).',
    hints: ['Grupo -SO₃H en C2.']
  },
  {
    id: 'pirrol-acilacion',
    category: 'pirrol',
    type: 'reaction',
    title: 'Acilación del pirrol',
    prompt: 'Dibuja el producto de la <strong>acilación del pirrol</strong> con <span class="reagent">Ac₂O, 250°C</span>.',
    context: 'Se forma 2-acetilpirrol.',
    smiles: 'CC(=O)C1=CC=C[NH]1',
    acceptedSmiles: ['CC(=O)c1cc[nH]c1', 'CC(=O)c1ccc[nH]1'],
    commonMistakes: [
      { smiles: 'CC(=O)c1cc[nH]c1C(C)=O', reason: 'Polisustitución. La monoacetilación ocurre en C2.' }
    ],
    explanation: '2-acetilpirrol: grupo -COCH₃ en posición α.',
    hints: ['Grupo acetilo en C2.']
  },
  {
    id: 'pirrol-paal-knorr',
    category: 'pirrol',
    type: 'reaction',
    title: 'Síntesis de Paal-Knorr (pirrol)',
    prompt: 'Dibuja el producto de la <strong>síntesis de Paal-Knorr</strong>: 2,5-hexanodiona + <span class="reagent">NH₃</span> (reflux en benceno, -2H₂O).',
    context: 'Un 1,4-dicetona cicla con amoníaco para formar un pirrol sustituido.',
    smiles: 'CC1=CC=C(C)[NH]1',
    acceptedSmiles: ['Cc1cc(C)c[nH]1', 'Cc1ccc([nH]1)C'],
    commonMistakes: [
      { smiles: 'CC(=O)CC(=O)CC', reason: 'Dibujaste la hexanodiona lineal. El producto es un anillo de pirrol ciclico.' },
      { smiles: 'c1cc[nH]c1', reason: 'Dibujaste pirrol sin sustituyentes. El producto es 2,5-dimetilpirrol.' }
    ],
    explanation: '2,5-dimetilpirrol: los metilos de la hexanodiona quedan en C2 y C5 del anillo.',
    hints: ['Pirrol con metilos en C2 y C5.', 'Pierde 2 moléculas de agua.']
  },

  {
    id: 'pirrol-hantzsch',
    category: 'pirrol',
    type: 'reaction',
    title: 'Síntesis de Hantzsch (pirrol)',
    prompt: 'Dibuja el pirrol resultante de la <strong>síntesis de Hantzsch</strong> (pirrol con éster etílico en C3 y grupos metilo en C2 y C5).',
    context: 'Reacción entre una α-halocetona, un β-cetoéster y amoníaco.',
    smiles: 'CCOC(=O)C1=C(C)NC(C)=C1',
    acceptedSmiles: ['CCOC(=O)c1cc(C)[nH]c1C', 'CCOC(=O)c1cc(C)nc1C'],
    commonMistakes: [
      { smiles: 'c1cc[nH]c1', reason: 'Dibujaste el pirrol sin sustituyentes. La síntesis da un pirrol polisustituido.' }
    ],
    explanation: 'Dietil 2,5-dimetilpirrol-3-carboxilato: se forman los enlaces del anillo incorporando los carbonos del cetoéster y la halocetona.',
    hints: ['Pirrol aromático.', 'Éster -COOEt en C3.', 'Grupos -CH₃ en C2 y C5.']
  },

  // ─── FURANO ───
  {
    id: 'furano-base',
    category: 'furano',
    type: 'identify',
    title: 'Furano',
    prompt: 'Dibuja la estructura del <strong>furano</strong>.',
    context: 'Heterociclo oxigenado aromático de 5 miembros.',
    smiles: 'c1ccoc1',
    acceptedSmiles: ['c1ccoc1', 'o1cccc1'],
    commonMistakes: [
      { smiles: 'C1CCOC1', reason: 'Dibujaste THF (saturado). El furano es aromático con dobles enlaces.' },
      { smiles: 'c1ccsc1', reason: 'Dibujaste tiofeno. El furano tiene oxígeno.' }
    ],
    explanation: 'Anillo de 5 miembros con un O y dos dobles enlaces conjugados.',
    hints: ['5 miembros, 1 oxígeno.', 'Aromático.']
  },
  {
    id: 'acido-ascorbico',
    category: 'furano',
    type: 'identify',
    title: 'Ácido ascórbico (Vitamina C)',
    prompt: 'Dibuja la estructura simplificada del <strong>ácido ascórbico</strong> (anillo de furanona).',
    context: 'Vitamina C. Contiene un anillo γ-lactona de furanosa con enoles.',
    smiles: 'OC1O[C@H](C(=O)O)C(O)=C1O',
    acceptedSmiles: ['OC1C(O)C(O)C(O)C1O', 'O=C1C(O)=C(O)C(O)CO1'],
    commonMistakes: [
      { smiles: 'c1ccoc1', reason: 'Dibujaste furano simple. El ácido ascórbico es un furanosa policiclo con lactona y varios OH.' }
    ],
    explanation: 'L-ácido ascórbico: lactona de 6 miembros derivada de furanosa con grupos hidroxilo y enol.',
    hints: ['Anillo lactona con múltiples OH.', 'Relacionado con furanosa oxidada.']
  },
  {
    id: 'furano-nitracion',
    category: 'furano',
    type: 'reaction',
    title: 'Nitración del furano',
    prompt: 'Dibuja el producto de la <strong>nitración del furano</strong> con <span class="reagent">AcONO₂ / Ac₂O, -5°C</span>.',
    context: 'La sustitución electrofílica en furano ocurre en C2 (α al oxígeno).',
    smiles: 'O=[N+]([O-])C1=CC=CO1',
    acceptedSmiles: ['c1cc([N+](=O)[O-])oc1', 'O=[N+]([O-])c1ccoc1'],
    commonMistakes: [
      { smiles: 'c1ccoc1', reason: 'Dibujaste furano sin sustituir.' },
      { smiles: 'c1coc([N+](=O)[O-])c1', reason: 'Nitración en C3 (β). La posición α (C2) es más reactiva.' }
    ],
    explanation: '2-nitrofurano: -NO₂ en posición α (C2).',
    hints: ['-NO₂ en C2 del furano.']
  },
  {
    id: 'furano-paal-knorr',
    category: 'furano',
    type: 'reaction',
    title: 'Síntesis de Paal-Knorr (furano)',
    prompt: 'Dibuja el producto de la <strong>síntesis de Paal-Knorr para furano</strong>: 1,4-dicetona + <span class="reagent">H⁺, Δ, -H₂O</span>.',
    context: 'Ciclización de 1,4-dicarbonílicos en ácido para formar furanos sustituidos.',
    smiles: 'CC1=CC=C(C)O1',
    acceptedSmiles: [],
    commonMistakes: [
      { smiles: 'Cc1cc(C)c[nH]1', reason: 'Dibujaste pirrol. El furano tiene oxígeno en el anillo, no nitrógeno.' }
    ],
    explanation: '2,5-dimetilfurano (ejemplo típico): sustituyentes en C2 y C5.',
    hints: ['Anillo furano con sustituyentes en posiciones α.']
  },

  // ─── TIOFENO ───
  {
    id: 'tiofeno-base',
    category: 'tiofeno',
    type: 'identify',
    title: 'Tiofeno',
    prompt: 'Dibuja la estructura del <strong>tiofeno</strong>.',
    context: 'Heterociclo aromático con azufre. Presente en algunas plantas.',
    smiles: 'C1=CSC=C1',
    acceptedSmiles: ['s1cccc1', 'c1ccsc1'],
    commonMistakes: [
      { smiles: 'c1ccoc1', reason: 'Dibujaste furano. El tiofeno tiene azufre (S), no oxígeno.' },
      { smiles: 'c1cc[nH]c1', reason: 'Dibujaste pirrol. El tiofeno tiene azufre.' }
    ],
    explanation: 'Anillo aromático de 5 miembros con un átomo de azufre.',
    hints: ['5 miembros, 1 azufre.']
  },
  {
    id: 'tiofeno-nitracion',
    category: 'tiofeno',
    type: 'reaction',
    title: 'Nitración del tiofeno',
    prompt: 'Dibuja el producto de la <strong>nitración del tiofeno</strong> con <span class="reagent">AcONO₂, 0°C</span>.',
    context: 'Sustitución electrofílica en posición 2 (α al azufre).',
    smiles: '[O-][N+](C1=CC=CS1)=O',
    acceptedSmiles: ['O=[N+]([O-])c1ccsc1', 'c1cc([N+](=O)[O-])sc1'],
    commonMistakes: [
      { smiles: 'c1ccsc1', reason: 'Dibujaste tiofeno sin sustituir.' }
    ],
    explanation: '2-nitrotiofeno: -NO₂ en C2.',
    hints: ['-NO₂ en posición α (C2).']
  },
  {
    id: 'tiofeno-acilacion',
    category: 'tiofeno',
    type: 'reaction',
    title: 'Acilación del tiofeno (Friedel-Crafts)',
    prompt: 'Dibuja el producto de la <strong>acilación del tiofeno</strong> con <span class="reagent">CH₃COCl / SnCl₄</span>.',
    context: 'Forma 2-acetiltiofeno.',
    smiles: 'CC(C1=CC=CS1)=O',
    acceptedSmiles: ['CC(=O)c1ccsc1'],
    commonMistakes: [
      { smiles: 'CC(=O)c1cccs1', reason: 'Posición incorrecta. La acetilación ocurre en C2.' }
    ],
    explanation: '2-acetiltiofeno: -COCH₃ en posición α.',
    hints: ['Grupo acetilo en C2.']
  },
  {
    id: 'tiofeno-formilacion',
    category: 'tiofeno',
    type: 'reaction',
    title: 'Formilación del tiofeno (Vilsmeier-Haack)',
    prompt: 'Dibuja el producto de la <strong>formilación del tiofeno</strong>: 1) <span class="reagent">C₆H₅N(CH₃)CHO, POCl₃</span>  2) <span class="reagent">H₂O</span>.',
    context: 'Reacción de Vilsmeier-Haack introduce -CHO en posición 2.',
    smiles: 'O=CC1=CC=CS1',
    acceptedSmiles: ['O=Cc1cccs1', 'O=Cc1ccsc1'],
    commonMistakes: [
      { smiles: 'c1ccsc1', reason: 'Dibujaste tiofeno sin formilar.' }
    ],
    explanation: 'Tiofeno-2-carbaldehído: grupo -CHO en C2.',
    hints: ['Aldehído -CHO en C2.']
  },

  // ─── INDOL ───
  {
    id: 'indol-base',
    category: 'indol',
    type: 'identify',
    title: 'Indol',
    prompt: 'Dibuja la estructura del <strong>indol</strong>.',
    context: 'Sistema bicíclico: benceno fusionado con pirrol. Presente en triptófano y serotonina.',
    smiles: 'c1ccc2[nH]ccc2c1',
    acceptedSmiles: ['c1ccc2c[nH]c2c1'],
    commonMistakes: [
      { smiles: 'c1cc[nH]c1', reason: 'Dibujaste pirrol. El indol tiene un benceno fusionado.' },
      { smiles: 'c1ccc2occc2c1', reason: 'Dibujaste benzofurano. El indol tiene N, no O.' }
    ],
    explanation: 'Benceno fusionado con pirrol en el lado 2,3. Nitrógeno con H.',
    hints: ['Benceno + pirrol fusionados.', 'N en el anillo de 5.']
  },
  {
    id: 'triptofano',
    category: 'indol',
    type: 'identify',
    title: 'Triptófano',
    prompt: 'Dibuja la estructura del <strong>triptófano</strong> (sin estereoisomería).',
    context: 'Aminoácido esencial. Precursor de serotonina y niacina.',
    smiles: 'NC(Cc1c[nH]c2ccccc12)C(=O)O',
    acceptedSmiles: ['NCC(C(=O)O)c1c[nH]c2ccccc12'],
    commonMistakes: [
      { smiles: 'c1ccc2[nH]ccc2c1', reason: 'Dibujaste indol. Falta la cadena lateral de aminoácido -CH₂-CH(NH₂)-COOH.' }
    ],
    explanation: 'Aminoácido con grupo indol-3-il metilo unido al α-carbono.',
    hints: ['Indol en posición 3 + cadena aminoácido.']
  },
  {
    id: 'serotonina',
    category: 'indol',
    type: 'identify',
    title: 'Serotonina (5-hidroxitriptamina)',
    prompt: 'Dibuja la estructura de la <strong>serotonina</strong>.',
    context: '5-hidroxitriptamina. Neurotransmisor derivado del triptófano.',
    smiles: 'NCCc1c[nH]c2ccc(O)cc12',
    acceptedSmiles: [],
    commonMistakes: [
      { smiles: 'NC(Cc1c[nH]c2ccccc12)C(=O)O', reason: 'Dibujaste triptófano. La serotonina tiene -OH en C5 del benceno y una cadena etilamina (sin COOH).' }
    ],
    explanation: '5-hidroxiindol con cadena -CH₂-CH₂-NH₂.',
    hints: ['-OH en C5 del anillo bencénico.', 'Cadena etilamina en C3.']
  },
  {
    id: 'indol-nitracion',
    category: 'indol',
    type: 'reaction',
    title: 'Nitración del indol',
    prompt: 'Dibuja el producto principal de la <strong>nitración del indol</strong> con <span class="reagent">C₆H₅COONO₂</span>.',
    context: 'La sustitución electrofílica en indol ocurre preferentemente en C3 (posición β del pirrol fusionado).',
    smiles: 'c1ccc2c(c1)[nH]cc2[N+](=O)[O-]',
    acceptedSmiles: ['O=[N+]([O-])c1c[nH]c2ccccc12', 'c1ccc2[nH]cc([N+](=O)[O-])c2c1'],
    commonMistakes: [
      { smiles: 'c1ccc2[nH]cc2[N+](=O)[O-]c1', reason: 'Nitraste el benceno. La nitración del indol ocurre en C3 del anillo pirrólico.' },
      { smiles: 'c1ccc2[nH]ccc2c1', reason: 'Dibujaste indol sin sustituir.' }
    ],
    explanation: '3-nitroindol: el -NO₂ entra en C3 por alta reactividad de esa posición.',
    hints: ['-NO₂ en C3 (no en el benceno).']
  },
  {
    id: 'indol-acilacion-n',
    category: 'indol',
    type: 'reaction',
    title: 'Acilación del indol sobre N',
    prompt: 'Dibuja el producto de la <strong>acilación del indol sobre el nitrógeno</strong> con <span class="reagent">Ac₂O / AcONa, Δ</span>.',
    context: 'Con acetato de sodio, la acetilación ocurre sobre el N (no sobre C3).',
    smiles: 'CC(=O)n1ccc2ccccc21',
    acceptedSmiles: ['CC(=O)n1ccc2ccccc12'],
    commonMistakes: [
      { smiles: 'CC(=O)c1c[nH]c2ccccc12', reason: 'Acetilaste el carbono (C3). Con AcONa la acetilación es sobre el nitrógeno.' },
      { smiles: 'c1ccc2[nH]ccc2c1', reason: 'Dibujaste indol sin acetilar.' }
    ],
    explanation: 'N-acetilindol: grupo -COCH₃ unido al nitrógeno.',
    hints: ['Acetilo en el N, no en C3.']
  },
  {
    id: 'indol-fischer',
    category: 'indol',
    type: 'reaction',
    title: 'Síntesis de Fischer (indol)',
    prompt: 'Dibuja el producto de la <strong>síntesis de Fischer</strong>: fenilhidrazona de acetofenona + <span class="reagent">ZnCl₂, 170°C</span> → 2-fenilindol + NH₃.',
    context: 'Ciclización de hidrazonas aromáticas para formar indoles sustituidos en C2.',
    smiles: 'c1ccc(-c2c[nH]c3ccccc23)cc1',
    acceptedSmiles: ['c1ccc(C2=Cc3ccccc3N2)cc1'],
    commonMistakes: [
      { smiles: 'c1ccc2[nH]ccc2c1', reason: 'Dibujaste indol sin el fenilo en C2. El producto es 2-fenilindol.' }
    ],
    explanation: '2-fenilindol: grupo fenilo en posición 2 del indol.',
    hints: ['Indol con fenilo en C2.']
  },

  // ─── BENZOFURANO Y BENZOTIOFENO ───
  {
    id: 'benzofurano-base',
    category: 'benzofurano',
    type: 'identify',
    title: 'Benzofurano',
    prompt: 'Dibuja la estructura del <strong>benzofurano</strong> (benzo[b]furano).',
    context: 'Benceno fusionado con furano.',
    smiles: 'c1ccc2occc2c1',
    acceptedSmiles: ['c1ccc2ccco2c1'],
    commonMistakes: [
      { smiles: 'c1ccc2[nH]ccc2c1', reason: 'Dibujaste indol. El benzofurano tiene O, no N.' },
      { smiles: 'c1ccoc1', reason: 'Dibujaste furano simple. Falta el benceno fusionado.' }
    ],
    explanation: 'Sistema bicíclico: benceno fusionado con furano.',
    hints: ['Benceno + furano fusionados.']
  },
  {
    id: 'benzotiofeno-base',
    category: 'benzofurano',
    type: 'identify',
    title: 'Benzotiofeno',
    prompt: 'Dibuja la estructura del <strong>benzotiofeno</strong> (benzo[b]tiofeno).',
    context: 'Benceno fusionado con tiofeno.',
    smiles: 'c1ccc2sccc2c1',
    acceptedSmiles: ['C1=CSC2=C1C=CC=C2', 'c1cc2ccsc2cc1', 'c1ccc2sccc2c1', 'S1C=CC2=C1C=CC=C2'],
    commonMistakes: [
      { smiles: 'c1ccc2occc2c1', reason: 'Dibujaste benzofurano. El benzotiofeno tiene S, no O.' }
    ],
    explanation: 'Sistema bicíclico: benceno fusionado con tiofeno.',
    hints: ['Benceno + tiofeno fusionados.']
  },
  {
    id: 'benzofurano-acilacion',
    category: 'benzofurano',
    type: 'reaction',
    title: 'Acetilación del benzofurano',
    prompt: 'Dibuja el producto de la <strong>acetilación del benzofurano</strong> con <span class="reagent">(CH₃CO)₂O / SnCl₄</span>.',
    context: 'Sustitución electrofílica en C2 del benzofurano.',
    smiles: 'CC(C1=CC2=CC=CC=C2O1)=O',
    acceptedSmiles: ['CC(=O)c1oc2ccccc2c1', 'CC(=O)c1cc2ccccc2o1'],
    commonMistakes: [
      { smiles: 'c1ccc2occc2c1', reason: 'Dibujaste benzofurano sin acetilar.' }
    ],
    explanation: '2-acetilbenzofurano: -COCH₃ en C2.',
    hints: ['Acetilo en C2 del heterociclo.']
  },
  {
    id: 'benzotiofeno-nitracion',
    category: 'benzofurano',
    type: 'reaction',
    title: 'Nitración del benzotiofeno',
    prompt: 'Dibuja el producto de la <strong>nitración del benzotiofeno</strong> con <span class="reagent">HNO₃/AcOH, 70°C</span>.',
    context: 'En benzotiofeno la nitración ocurre en C3 (posición β).',
    smiles: '[O-][N+](C1=CC2=CC=CC=C2S1)=O',
    acceptedSmiles: ['O=[N+]([O-])c1cc2ccccc2s1'],
    commonMistakes: [
      { smiles: 'c1ccc2sc([N+](=O)[O-])cc2c1', reason: 'Nitraste en C2. En benzotiofeno la nitración con HNO₃/AcOH va a C3.' }
    ],
    explanation: '3-nitrobenzotiofeno: -NO₂ en C3.',
    hints: ['-NO₂ en C3 (no en C2).']
  },

  // ─── PIRIDINA ───
  {
    id: 'piridina-base',
    category: 'piridina',
    type: 'identify',
    title: 'Piridina',
    prompt: 'Dibuja la estructura de la <strong>piridina</strong>.',
    context: 'Heterociclo aromático de 6 miembros con un nitrógeno. Base de muchas vitaminas y alcaloides.',
    smiles: 'c1ccncc1',
    acceptedSmiles: ['c1ccncc1', 'n1ccccc1'],
    commonMistakes: [
      { smiles: 'c1cc[nH]c1', reason: 'Dibujaste pirrol (5 miembros). La piridina tiene 6 miembros.' },
      { smiles: 'c1ccccc1', reason: 'Dibujaste benceno. La piridina tiene un nitrógeno en el anillo.' }
    ],
    explanation: 'Anillo aromático hexagonal con un átomo de nitrógeno.',
    hints: ['6 miembros, 1 nitrógeno.', 'Aromático.']
  },
  {
    id: 'nicotina',
    category: 'piridina',
    type: 'identify',
    title: 'Nicotina',
    prompt: 'Dibuja la estructura simplificada de la <strong>nicotina</strong>.',
    context: 'Alcaloide del tabaco. Contiene un anillo de piridina y uno de pirrolidina.',
    smiles: 'CN1CCC[C@H]1c2cccnc2',
    acceptedSmiles: ['CN1CCCC1c2cccnc2', 'c1ccncc1'],
    commonMistakes: [
      { smiles: 'c1ccncc1', reason: 'Dibujaste solo piridina. La nicotina tiene además un anillo de pirrolidina N-metilado unido en C3.' }
    ],
    explanation: '3-(1-metilpirrolidin-2-il)piridina: piridina con cadena pirrolidínica en C3.',
    hints: ['Piridina + pirrolidina N-metilada.', 'Unidos en posición 3 de la piridina.']
  },
  {
    id: 'isoniazida',
    category: 'piridina',
    type: 'identify',
    title: 'Isoniazida',
    prompt: 'Dibuja la estructura de la <strong>isoniazida</strong> (isonicotínico hidrazida).',
    context: 'Antibiótico antituberculoso.',
    smiles: 'NNC(=O)c1ccncc1',
    acceptedSmiles: ['NNC(=O)c1cccnc1'],
    commonMistakes: [
      { smiles: 'Nc1ccncc1', reason: 'Dibujaste 4-aminopiridina. La isoniazida tiene grupo hidrazida -C(O)NHNH₂ en posición 4.' }
    ],
    explanation: 'Piridina-4-carboxilhidrazida: -CONHNH₂ en para respecto al N.',
    hints: ['Piridina con -C(O)NHNH₂.']
  },
  {
    id: 'piridina-protonacion',
    category: 'piridina',
    type: 'reaction',
    title: 'Protonación de la piridina',
    prompt: 'Dibuja el producto de la <strong>protonación de la piridina</strong> con <span class="reagent">HCl</span>.',
    context: 'Forma el catión piridinio.',
    smiles: 'C1=CC=[NH+]C=C1.[Cl-]',
    acceptedSmiles: ['Cl.[NH+]1ccccc1', '[NH+]1=CC=CC=C1', '[NH+]1ccccc1.[Cl-]', 'C1=CC=[NH+]C=C1.[Cl-]'],
    commonMistakes: [
      { smiles: 'c1ccncc1', reason: 'Dibujaste piridina neutra. La protonación ocurre sobre el N (piridinio).' }
    ],
    explanation: 'Cloruro de piridinio: N protonado con carga +1.',
    hints: ['N con carga positiva (+).', 'Sal con Cl⁻.']
  },
  {
    id: 'piridina-nitracion',
    category: 'piridina',
    type: 'reaction',
    title: 'Nitración de la piridina',
    prompt: 'Dibuja el producto de la <strong>nitración de la piridina</strong> con <span class="reagent">NO₂⁺BF₄⁻</span> en CH₂Cl₂.',
    context: 'La piridina se nitra con dificultad en posición 3 (meta al N).',
    smiles: 'c1cc([N+](=O)[O-])ncc1',
    acceptedSmiles: ['O=[N+]([O-])c1ccccn1'],
    commonMistakes: [
      { smiles: 'c1ccncc1', reason: 'Dibujaste piridina sin sustituir.' },
      { smiles: 'c1cnc([N+](=O)[O-])cc1', reason: 'Posición incorrecta. La nitración va a C3 (meta).' }
    ],
    explanation: '3-nitropiridina: -NO₂ en posición 3.',
    hints: ['-NO₂ en C3 (meta al N).']
  },

  {
    id: 'piridina-hantzsch',
    category: 'piridina',
    type: 'reaction',
    title: 'Síntesis de Hantzsch (piridina)',
    prompt: 'Dibuja el producto oxidado (aromático) de la <strong>síntesis de Hantzsch</strong> a partir de formaldehído, amoníaco y 2 equivalentes de acetoacetato de etilo (tras la oxidación final).',
    context: 'Condensación que forma una dihidropiridina que luego se oxida a piridina.',
    smiles: 'CCOC(=O)c1c(C)nc(C)c(C(=O)OCC)c1',
    acceptedSmiles: [],
    commonMistakes: [
      { smiles: 'c1ccncc1', reason: 'Dibujaste la piridina base. La síntesis de Hantzsch forma una piridina polisustituida simétrica.' }
    ],
    explanation: '2,6-dimetilpiridina-3,5-dicarboxilato de dietilo. Es una piridina simétrica con metilos en orto al nitrógeno.',
    hints: ['Anillo de piridina.', 'Metilos en C2 y C6.', 'Ésteres -COOEt en C3 y C5.']
  },

  // ─── DIAZINAS ───
  {
    id: 'pirimidina',
    category: 'diazinas',
    type: 'identify',
    title: 'Pirimidina',
    prompt: 'Dibuja la estructura de la <strong>pirimidina</strong>.',
    context: 'Diazina de 6 miembros con dos nitrógenos en posiciones 1 y 3.',
    smiles: 'c1cncnc1',
    acceptedSmiles: ['n1ccncc1', 'c1cnccn1'],
    commonMistakes: [
      { smiles: 'c1ccncc1', reason: 'Dibujaste piridina (1 N). La pirimidina tiene 2 nitrógenos.' },
      { smiles: 'c1ccnnc1', reason: 'Dibujaste piridazina (N en 1 y 2). En pirimidina los N están en 1 y 3.' }
    ],
    explanation: 'Anillo de 6 miembros con N en posiciones 1 y 3.',
    hints: ['6 miembros, 2 N en meta.']
  },
  {
    id: 'citosina',
    category: 'diazinas',
    type: 'identify',
    title: 'Citosina',
    prompt: 'Dibuja la estructura de la <strong>citosina</strong> (base nitrogenada).',
    context: 'Base pirimídica del ADN/ARN con grupo amino en C4 y oxo en C2.',
    smiles: 'Nc1cc(=O)[nH]cn1',
    acceptedSmiles: ['Nc1nc(=O)cc[nH]1'],
    commonMistakes: [
      { smiles: 'c1cncnc1', reason: 'Dibujaste pirimidina sin sustituyentes. La citosina tiene -NH₂ y C=O.' }
    ],
    explanation: '4-aminopirimidin-2(1H)-ona: amino en C4, carbonilo en C2.',
    hints: ['Pirimidina con -NH₂ y C=O.']
  },
  {
    id: 'timina',
    category: 'diazinas',
    type: 'identify',
    title: 'Timina',
    prompt: 'Dibuja la estructura de la <strong>timina</strong> (base del ADN).',
    context: 'Base pirimídica con metilo en C5 y grupos oxo.',
    smiles: 'CC1=CNC(=O)NC1=O',
    acceptedSmiles: ['Cc1c[nH]c(=O)[nH]c1=O', 'Cc1cnc(O)nc1O', 'CC1=CNC(=O)NC1=O'],
    commonMistakes: [
      { smiles: 'Nc1cc(=O)[nH]cn1', reason: 'Dibujaste citosina. La timina tiene metilo en C5 y N-metilo.' }
    ],
    explanation: '5-metilpirimidina-2,4(1H,3H)-diona.',
    hints: ['Pirimidina con CH₃ en C5.', 'Dos carbonilos.']
  },
  {
    id: 'pirazina',
    category: 'diazinas',
    type: 'identify',
    title: 'Pirazina',
    prompt: 'Dibuja la estructura de la <strong>pirazina</strong>.',
    context: 'Diazina aromática con dos nitrógenos en posiciones 1 y 4 (para).',
    smiles: 'c1cnccn1',
    acceptedSmiles: ['n1cccnc1'],
    commonMistakes: [
      { smiles: 'c1cncnc1', reason: 'Dibujaste pirimidina (N en 1,3). En pirazina los N están en 1 y 4.' },
      { smiles: 'c1ccnnc1', reason: 'Dibujaste piridazina (N en 1,2).' }
    ],
    explanation: 'Anillo aromático con N en posiciones 1 y 4.',
    hints: ['6 miembros, 2 N en para (1,4).']
  },

  // ─── QUINOLINA E ISOQUINOLINA ───
  {
    id: 'quinolina',
    category: 'quinolina',
    type: 'identify',
    title: 'Quinolina',
    prompt: 'Dibuja la estructura de la <strong>quinolina</strong>.',
    context: 'Benceno fusionado con piridina. Base de alcaloides como la quinina.',
    smiles: 'c1ccc2ncccc2c1',
    acceptedSmiles: ['c1ccc2cccnc2c1'],
    commonMistakes: [
      { smiles: 'c1ccncc1', reason: 'Dibujaste piridina. La quinolina tiene un benceno fusionado.' },
      { smiles: 'c1ccc2[nH]ccc2c1', reason: 'Dibujaste indol. La quinolina tiene N en el anillo de 6, no 5.' }
    ],
    explanation: 'Sistema bicíclico: benceno fusionado con piridina.',
    hints: ['Benceno + piridina fusionados.']
  },
  {
    id: 'isoquinolina',
    category: 'quinolina',
    type: 'identify',
    title: 'Isoquinolina',
    prompt: 'Dibuja la estructura de la <strong>isoquinolina</strong>.',
    context: 'Isómero de la quinolina. Base de alcaloides del opio.',
    smiles: 'c1ccc2cnccc2c1',
    acceptedSmiles: ['C1=CC=C2C=NC=CC2=C1', 'c1ccc2cnccc2c1', 'c1cc2ccnnc2cc1'],
    commonMistakes: [
      { smiles: 'c1ccc2ncccc2c1', reason: 'Dibujaste quinolina. En isoquinolina el N está en posición 2 del anillo fusionado.' }
    ],
    explanation: 'Benceno fusionado con piridina en diferente posición (isómero de quinolina).',
    hints: ['Isómero de quinolina.', 'N en posición 2.']
  },
  {
    id: 'morfina-esqueleto',
    category: 'quinolina',
    type: 'identify',
    title: 'Esqueleto de morfina (simplificado)',
    prompt: 'Dibuja el <strong>esqueleto base del sistema de morfina</strong> (pentaciclo con nitrógeno). Representación simplificada: el núcleo isoquinolínico fusionado.',
    context: 'La morfina contiene un esqueleto pentacíclico. Para este ejercicio dibuja la isoquinolina como núcleo base.',
    smiles: 'c1ccc2cnccc2c1',
    acceptedSmiles: ['c1ccc2cnccc2c1', 'C1=CC=C2C=NC=CC2=C1'],
    commonMistakes: [],
    explanation: 'La morfina se basa en un esqueleto de isoquinolina fusionado con otros anillos. Como primer paso, reconoce la isoquinolina.',
    hints: ['Empieza por isoquinolina.', 'El alcaloide tiene N básico.']
  },
  
  // ─── EXAMEN FINAL (AVANZADO) ───
  {
    id: 'examen-identificacion-furano',
    category: 'examen',
    type: 'identify',
    title: 'Nomenclatura avanzada multicentro',
    prompt: 'Dibuja el <strong>3-bromo-5-cloro-2-metiltetrahidrofurano</strong> (ignora estereoquímica).',
    context: 'El tetrahidrofurano es un éter cíclico de cinco miembros (completamente saturado). Según las reglas de nomenclatura de Hantzsch-Widman, el heteroátomo (oxígeno) tiene la máxima prioridad y se le asigna la posición 1. La numeración del anillo debe continuar en la dirección que otorgue los localizadores más bajos posibles al conjunto de sustituyentes (bromo, cloro y metilo).',
    smiles: 'CC1OC(Cl)CC1Br',
    acceptedSmiles: ['CC1OC(Cl)CC1Br', 'ClC1CCC(Br)C(C)O1'],
    commonMistakes: [
      { smiles: 'CC1OC(Br)CC1Cl', reason: 'Intercambiaste el bromo y el cloro. Revisa la numeración: el bromo va en 3 y el cloro en 5.' }
    ],
    explanation: 'El oxígeno es el átomo 1. El metilo está en la posición 2, el bromo en la 3, y el cloro en la 5 del anillo de tetrahidrofurano.',
    hints: ['El oxígeno es la posición 1.', 'Numera buscando los índices más bajos posibles para los sustituyentes.']
  },
  {
    id: 'examen-sulfonacion-piridina',
    category: 'examen',
    type: 'reaction',
    title: 'Sulfonación extrema de Piridina',
    prompt: 'Dibuja el producto principal de la siguiente reacción.',
    context: 'La piridina es un anillo aromático altamente deficiente en electrones. Además, en medios fuertemente ácidos, el nitrógeno se protona formando el ion piridinio, desactivando el anillo aún más. Por esta razón, las reacciones de Sustitución Electrofílica Aromática (SEAr) como la sulfonación requieren condiciones drásticas (220°C) y proceden exclusivamente en la posición meta (C3), la posición menos desfavorecida por la carga positiva del intermediario.',
    reactantSmiles: 'c1ccncc1',
    reagents: { top: 'SO₃ / H₂SO₄, HgSO₄', bottom: '220°C, 24 hrs' },
    smiles: 'O=S(=O)(O)c1cccnc1',
    acceptedSmiles: ['O=S(=O)(O)c1cccnc1', 'O=S(=O)(O)C1=CC=CN=C1'],
    commonMistakes: [
      { smiles: 'O=S(=O)(O)c1ccccn1', reason: 'Sustituiste en C2 (orto). La piridina dirige a meta (C3).' },
      { smiles: 'O=S(=O)(O)c1ccnccc1', reason: 'Sustituiste en C4 (para). La piridina dirige a meta (C3).' }
    ],
    explanation: 'La piridina sufre sustitución electrofílica aromática (SEAr) en la posición 3 (meta) porque los intermediarios formados por ataque en orto y para son altamente inestables.',
    hints: ['La piridina es fuertemente desactivadora.', 'El ataque electrofílico ocurre predominantemente en la posición meta (C3).']
  },
  {
    id: 'examen-alquilacion-pirrol',
    category: 'examen',
    type: 'reaction',
    title: 'N-Alquilación en medio básico',
    prompt: 'Dibuja el producto principal de la siguiente reacción secuencial.',
    context: 'El pirrol posee un protón (N-H) que es excepcionalmente ácido para una amina (pKa ~ 16.5) debido a que el anión pirroluro resultante mantiene la aromaticidad. El n-butil-litio desprotona cuantitativamente al nitrógeno. Al añadir luego yoduro de etilo, el pirroluro actúa como un excelente nucleófilo, atacando mediante un mecanismo SN2 casi exclusivamente por el átomo de nitrógeno para formar el producto N-alquilado.',
    reactantSmiles: 'c1cc[nH]c1',
    reagents: { top: '1) n-butil-Li, éter', bottom: '2) EtI' },
    smiles: 'CCn1cccc1',
    acceptedSmiles: ['CCn1cccc1', 'CCN1C=CC=C1'],
    commonMistakes: [
      { smiles: 'CCc1ccc[nH]1', reason: 'Alquilaste el carbono 2. En un medio básico tan fuerte se forma el anión pirroluro y el ataque SN2 procede desde el nitrógeno.' },
      { smiles: 'CCc1c[nH]cc1', reason: 'Alquilaste el carbono 3. La alquilación ocurre en el nitrógeno.' }
    ],
    explanation: 'El n-BuLi arranca el protón ácido del nitrógeno formando pirroluro de litio. El anión resultante sufre un ataque nucleofílico SN2 sobre el yoduro de etilo, formando N-etilpirrol.',
    hints: ['¿Qué protón es el más ácido en el pirrol?', 'El anión ataca al yoduro de etilo a través del nitrógeno.']
  },
  {
    id: 'examen-nitracion-fenol',
    category: 'examen',
    type: 'reaction',
    title: 'SEAr en anillos fuertemente activados',
    prompt: 'Dibuja el producto principal <strong>para</strong>-sustituido de esta reacción.',
    context: 'El grupo hidroxilo (-OH) es un sustituyente fuertemente activador del anillo bencénico debido al efecto mesomérico donador (+M) de los pares de electrones libres del oxígeno. Esta resonancia estabiliza excepcionalmente los intermediarios (complejos sigma) que se forman cuando el ataque ocurre en posiciones orto y para. Como resultado, el fenol reacciona casi de inmediato para dar isómeros orto y para (el isómero para suele favorecerse por menor impedimento estérico).',
    reactantSmiles: 'Oc1ccccc1',
    reagents: { top: 'HNO₃, H₂SO₄', bottom: 'Temperatura ambiente' },
    smiles: 'O=[N+]([O-])c1ccc(O)cc1',
    acceptedSmiles: ['Oc1ccc([N+](=O)[O-])cc1', 'O=[N+]([O-])C1=CC=C(O)C=C1'],
    commonMistakes: [
      { smiles: 'O=[N+]([O-])c1cccc(O)c1', reason: 'Nitraste en meta. El grupo -OH dirige a orto y para.' },
      { smiles: 'O=C1C=CC(=O)C=C1', reason: 'Dibujaste benzoquinona. Esta reacción es una nitración (SEAr), no una oxidación.' }
    ],
    explanation: 'El fenol se nitra con muchísima facilidad formando una mezcla de isómeros orto y para-nitrofenol. En este caso se solicitó el producto para.',
    hints: ['El -OH es un grupo activador fuerte orientador a orto/para.', 'El electrófilo es el ion nitronio (NO₂⁺).']
  },
  {
    id: 'examen-vilsmeier',
    category: 'examen',
    type: 'reaction',
    title: 'Reacción de Vilsmeier-Haack',
    prompt: 'Dibuja el producto principal de la reacción de formilación del pirrol.',
    context: 'La reacción de Vilsmeier-Haack es una formilación exclusiva para sustratos aromáticos ricos en electrones (como pirrol o indol). El reactivo electrofílico activo (ion clorometileniminio) se genera in situ al mezclar POCl₃ y DMF. Debido a que el pirrol dona densidad electrónica de manera más efectiva desde su posición alfa, el ataque ocurre preferentemente en C2. Tras la hidrólisis, se revela un aldehído (-CHO).',
    reactantSmiles: 'c1cc[nH]c1',
    reagents: { top: '1) POCl₃ / DMF', bottom: '2) H₂O' },
    smiles: 'O=Cc1ccc[nH]1',
    acceptedSmiles: ['O=Cc1ccc[nH]1', 'O=CC1=CC=CN1'],
    commonMistakes: [
      { smiles: 'O=Cn1cccc1', reason: 'La formilación Vilsmeier-Haack ocurre en el carbono alfa (C2), no en el nitrógeno.' }
    ],
    explanation: 'La reacción introduce de forma altamente regioselectiva un grupo formilo (-CHO) en la posición más reactiva del pirrol (C2), formando pirrol-2-carbaldehído.',
    hints: ['El complejo de Vilsmeier transfiere un grupo aldehído (-CHO).', 'La posición más reactiva del pirrol es la alfa (C2).']
  },
  {
    id: 'examen-snar',
    category: 'examen',
    type: 'reaction',
    title: 'Sustitución Nucleofílica Aromática (SNAr)',
    prompt: 'Dibuja el producto principal de esta reacción.',
    context: 'A diferencia del benceno, anillos deficientes en electrones como la piridina son excelentes sustratos para la Sustitución Nucleofílica Aromática (SNAr) por adición-eliminación. Si hay un buen grupo saliente en posición orto o para respecto al nitrógeno, el ataque de un nucleófilo fuerte forma un intermediario de Meisenheimer óptimamente estabilizado (la carga negativa se deslocaliza directamente sobre el nitrógeno).',
    reactantSmiles: 'Clc1ccccn1',
    reagents: { top: 'NaOCH₃, CH₃OH', bottom: 'Calor' },
    smiles: 'COc1ccccn1',
    acceptedSmiles: ['COc1ccccn1', 'COC1=CC=CC=N1'],
    commonMistakes: [
      { smiles: 'c1ccncc1', reason: 'Solo eliminaste el cloro. El grupo metóxido (-OCH₃) sustituye al átomo de cloro.' },
      { smiles: 'COc1ccc(Cl)cn1', reason: 'El ataque ocurre en C2, sustituyendo al halógeno.' }
    ],
    explanation: 'El ion metóxido ataca el carbono 2 desplazando al cloruro a través de un intermediario estabilizado por la electronegatividad del nitrógeno (SNAr).',
    hints: ['El átomo de cloro es un grupo saliente.', 'El ion metóxido (-OCH₃) es el nucleófilo atacante.']
  },
  {
    id: 'examen-oxidacion-picolina',
    category: 'examen',
    type: 'reaction',
    title: 'Síntesis de Niacina (Oxidación enérgica)',
    prompt: 'Dibuja el producto principal resultante de la oxidación exhaustiva.',
    context: 'El anillo de piridina carece de la densidad electrónica necesaria para ser oxidado, volviéndolo casi inerte frente al permanganato de potasio (KMnO₄). Sin embargo, las cadenas laterales (como el grupo metilo) son susceptibles a la oxidación enérgica. Durante el reflujo con KMnO₄, el carbono "bencílico" se oxida exhaustivamente hasta el máximo estado de oxidación, transformando todo el grupo en un ácido carboxílico.',
    reactantSmiles: 'Cc1cccnc1',
    reagents: { top: 'KMnO₄, H₂O', bottom: 'Calor, Reflujo' },
    smiles: 'O=C(O)c1cccnc1',
    acceptedSmiles: ['O=C(O)c1cccnc1', 'OC(=O)C1=CC=CN=C1'],
    commonMistakes: [
      { smiles: 'Cc1cccnc1', reason: 'La molécula reacciona, la oxidación ocurre sobre el grupo metilo.' },
      { smiles: 'CC(=O)c1cccnc1', reason: 'Es una oxidación exhaustiva. El carbono terminal se oxida hasta ácido carboxílico.' }
    ],
    explanation: 'La 3-metilpiridina (β-picolina) se oxida a ácido piridin-3-carboxílico (niacina o vitamina B3). El anillo de piridina permanece intacto.',
    hints: ['El grupo metilo (-CH₃) se oxida completamente a grupo carboxilo (-COOH).', 'El anillo de piridina sobrevive.']
  },
  {
    id: 'examen-n-oxido',
    category: 'examen',
    type: 'reaction',
    title: 'N-oxidación de Piridina',
    prompt: 'Dibuja el producto de la oxidación de la piridina.',
    context: 'El peróxido de hidrógeno en ácido acético u otros perácidos orgánicos oxidan el par libre del nitrógeno de la piridina para formar un N-óxido, el cual invierte las propiedades de activación del anillo.',
    reactantSmiles: 'c1ccncc1',
    reagents: { top: 'H₂O₂ / CH₃COOH', bottom: 'Calor' },
    smiles: '[O-][n+]1ccccc1',
    acceptedSmiles: ['[O-][n+]1ccccc1', '[n+]1([O-])ccccc1', 'O=[N]1C=CC=CC1'],
    commonMistakes: [
      { smiles: 'Oc1ccccn1', reason: 'La oxidación ocurre sobre el par libre del nitrógeno, no insertando un hidroxilo en el anillo.' }
    ],
    explanation: 'El agente oxidante transfiere un oxígeno al par de electrones no enlazantes del nitrógeno, creando el N-óxido de piridina con separación de cargas (+ en el N, - en el O).',
    hints: ['El par libre del nitrógeno ataca al oxígeno peróxido.']
  },
  {
    id: 'examen-nitracion-noxido',
    category: 'examen',
    type: 'reaction',
    title: 'Nitración del N-óxido de Piridina',
    prompt: 'Dibuja el producto principal (regioselectivo) de la nitración.',
    context: 'A diferencia de la piridina (que orienta a meta y requiere 300°C), el N-óxido de piridina tiene un oxígeno que dona densidad electrónica al anillo por resonancia (+M).',
    reactantSmiles: '[O-][n+]1ccccc1',
    reagents: { top: 'HNO₃, H₂SO₄', bottom: '90°C' },
    smiles: '[O-][n+]1ccc(cc1)[N+](=O)[O-]',
    acceptedSmiles: ['[O-][n+]1ccc(cc1)[N+](=O)[O-]', '[O-][n+]1ccc(cc1)N(=O)=O'],
    commonMistakes: [
      { smiles: 'O=[N+]([O-])c1cccc[n+]1[O-]', reason: 'Sustituiste en posición meta. El efecto resonante donador del oxígeno en el N-óxido favorece fuertemente las posiciones orto y para, siendo para la mayoritaria por efecto estérico.' }
    ],
    explanation: 'El oxígeno del N-óxido estabiliza el complejo de Meisenheimer catiónico (intermediario) cuando el electrófilo ataca en C2 o C4. El ataque en C4 (para) está favorecido cinéticamente y termodinámicamente.',
    hints: ['El oxígeno es activador orto/para.', 'Dibuja el producto en la posición C4.']
  },
  {
    id: 'examen-chichibabin',
    category: 'examen',
    type: 'reaction',
    title: 'Aminación de Chichibabin',
    prompt: 'Dibuja el producto de esta sustitución nucleofílica.',
    context: 'El ion amiduro (NH₂⁻) es un nucleófilo muy fuerte. Ataca al carbono deficiente en electrones adyacente al nitrógeno piridínico con desprendimiento de un ion hidruro.',
    reactantSmiles: 'c1ccncc1',
    reagents: { top: 'NaNH₂', bottom: 'NH₃ (liq), 100°C' },
    smiles: 'Nc1ccccn1',
    acceptedSmiles: ['Nc1ccccn1', 'NC1=CC=CC=N1'],
    commonMistakes: [
      { smiles: 'Nc1ccncc1', reason: 'El ataque ocurre en C2 o C6 (orto al N) por ser las posiciones más deficientes en electrones.' }
    ],
    explanation: 'El ion amiduro ataca el carbono 2. La pérdida de hidruro aromático es termodinámicamente difícil, por lo que requiere alta temperatura, formando finalmente 2-aminopiridina.',
    hints: ['Sustitución Nucleofílica en C2.', 'El grupo entrante es una amina (-NH₂).']
  },
  {
    id: 'examen-n-buli-piridina',
    category: 'examen',
    type: 'reaction',
    title: 'Alquilación Nucleofílica',
    prompt: 'Dibuja el producto de la reacción con este reactivo organolítico.',
    context: 'Similar al ataque del amiduro, un carbanión muy reactivo (n-BuLi) puede atacar al anillo de piridina a baja temperatura.',
    reactantSmiles: 'c1ccncc1',
    reagents: { top: '1) n-BuLi, hexano', bottom: '2) Calor (Eliminación de LiH)' },
    smiles: 'CCCCc1ccccn1',
    acceptedSmiles: ['CCCCc1ccccn1', 'CCCCC1=CC=CC=N1'],
    commonMistakes: [
      { smiles: 'CCCCc1ccncc1', reason: 'El ataque ocurre regioselectivamente en C2 debido al efecto atractor de electrones y coordinación con el nitrógeno.' }
    ],
    explanation: 'El n-butil litio adiciona su grupo butilo en el carbono 2. Tras calentar, se elimina hidruro de litio restaurando la aromaticidad para dar 2-butilpiridina.',
    hints: ['Ataque del grupo butilo al carbono alfa.', 'Dibuja una cadena de 4 carbonos unida a la posición 2.']
  },
  {
    id: 'examen-reduccion-piridina',
    category: 'examen',
    type: 'reaction',
    title: 'Reducción Catalítica Extrema',
    prompt: 'Dibuja el producto principal resultante de la reducción.',
    context: 'A diferencia de anillos carboxílicos muy estables, los heteroaromáticos con H2 a alta presión y platino o rodio pierden su aromaticidad completamente.',
    reactantSmiles: 'c1ccncc1',
    reagents: { top: 'H₂, Pt', bottom: 'Alta Presión' },
    smiles: 'C1CCNCC1',
    acceptedSmiles: ['C1CCNCC1'],
    commonMistakes: [
      { smiles: 'c1ccncc1', reason: 'La molécula reacciona, se reducen los 3 dobles enlaces.' },
      { smiles: 'C1=CCNCC1', reason: 'Reducción parcial. Con catalizadores de Platino y alta presión se satura por completo.' }
    ],
    explanation: 'Los 3 dobles enlaces se hidrogenan, transformando el anillo aromático de piridina en su análogo cicloalifático: la piperidina.',
    hints: ['Elimina todos los dobles enlaces.', 'El anillo se vuelve una amina cíclica saturada.']
  },
  {
    id: 'examen-suzuki',
    category: 'examen',
    type: 'reaction',
    title: 'Acoplamiento cruzado de Suzuki',
    prompt: 'Dibuja el producto del acoplamiento.',
    context: 'El paladio cataliza el acoplamiento entre un halogenuro de arilo (bromopiridina) y un ácido borónico.',
    reactantSmiles: 'Brc1ccccn1',
    reagents: { top: 'Ph-B(OH)₂, Pd(PPh₃)₄', bottom: 'Na₂CO₃, H₂O/Tol' },
    smiles: 'c1ccc(cc1)c2ccccn2',
    acceptedSmiles: ['c1ccc(cc1)c2ccccn2', 'C1=CC=C(C2=CC=CC=N2)C=C1'],
    commonMistakes: [
      { smiles: 'Brc1ccc(c2ccccc2)cn1', reason: 'El ácido borónico ataca y sustituye al átomo de bromo por el grupo fenilo.' }
    ],
    explanation: 'El ciclo catalítico del Paladio(0) incluye adición oxidativa en el enlace C-Br, transmetalación con el fenilborónico y eliminación reductiva, acoplando ambos anillos.',
    hints: ['Sustituye el Bromo por un anillo de benceno (Fenilo).']
  },
  {
    id: 'examen-snar-4',
    category: 'examen',
    type: 'reaction',
    title: 'SNAr en posición Para',
    prompt: 'Dibuja el producto de sustitución nucleofílica.',
    context: 'La posición 4 (para) de la piridina está fuertemente activada hacia el ataque nucleofílico, tanto como la posición 2.',
    reactantSmiles: 'Clc1ccncc1',
    reagents: { top: 'NaOCH₃, CH₃OH', bottom: 'Calor' },
    smiles: 'COc1ccncc1',
    acceptedSmiles: ['COc1ccncc1', 'COC1=CC=CN=C1'],
    commonMistakes: [
      { smiles: 'Clc1cc(OC)ccn1', reason: 'El mecanismo procede por Adición-Eliminación sobre el átomo de carbono que posee el grupo saliente (-Cl).' }
    ],
    explanation: 'El metóxido ataca en el C4 desplazando al cloruro. El intermediario aniónico está estabilizado por resonancia porque la carga deslocaliza hacia el nitrógeno.',
    hints: ['Cambia el cloro por el grupo metóxido.']
  },
  {
    id: 'examen-hantzsch-oxidacion',
    category: 'examen',
    type: 'reaction',
    title: 'Reacción de Hantzsch (Paso final)',
    prompt: 'Dibuja el producto de oxidación final.',
    context: 'La síntesis de Hantzsch ensambla una 1,4-dihidropiridina. El paso final para obtener el anillo totalmente aromático requiere el uso de un agente oxidante fuerte.',
    reactantSmiles: 'CC1=C(C(=O)OCC)C(C)C(C(=O)OCC)=C(C)N1',
    reagents: { top: 'HNO₃', bottom: 'Oxidación' },
    smiles: 'CCOC(=O)c1c(C)nc(C)c(C(=O)OCC)c1C',
    acceptedSmiles: ['CCOC(=O)c1c(C)nc(C)c(C(=O)OCC)c1C'],
    commonMistakes: [
      { smiles: 'CC1=C(C(=O)OCC)C(C)C(C(=O)OCC)=C(C)N1', reason: 'Debes oxidar el anillo eliminando dos hidrógenos (uno del N y otro del C4) para instaurar el sistema pi aromático completo.' }
    ],
    explanation: 'El ácido nítrico u otros oxidantes (ej. CAN o DDQ) arrancan un protón y un hidruro de la dihidropiridina, formando un anillo aromático altamente estable.',
    hints: ['Convierte el anillo central saturado en un anillo de piridina aromático.', 'Mantén todos los grupos alquilo y ésteres.']
  },
  {
    id: 'examen-mannich-pirrol',
    category: 'examen',
    type: 'reaction',
    title: 'Reacción de Mannich',
    prompt: 'Dibuja el producto de esta alquilación aminometílica.',
    context: 'Un anillo muy nucleofílico como el pirrol puede reaccionar con el ion iminio derivado de formaldehído y dimetilamina.',
    reactantSmiles: 'c1cc[nH]c1',
    reagents: { top: 'CH₂O, HN(CH₃)₂', bottom: 'H⁺, Calor' },
    smiles: 'CN(C)Cc1ccc[nH]1',
    acceptedSmiles: ['CN(C)Cc1ccc[nH]1', 'CN(C)CC1=CC=CN1'],
    commonMistakes: [
      { smiles: 'CN(C)Cc1c[nH]cc1', reason: 'El ataque electrófilo ocurre preferentemente en la posición 2 del pirrol, no en la 3.' },
      { smiles: 'CN(C)C[nH]1cccc1', reason: 'El medio es ácido. El pirrol no se desprotona para reaccionar en el nitrógeno; reacciona a través de sus carbonos aromáticos.' }
    ],
    explanation: 'El formaldehído y la dimetilamina reaccionan en medio ácido formando un ion iminio electrofílico (CH₂=N⁺Me₂). Este ataca a la posición C2 del pirrol.',
    hints: ['Añade un grupo -CH₂-N(CH₃)₂ a la posición 2 del pirrol.']
  },
  {
    id: 'examen-friedel-crafts-furano',
    category: 'examen',
    type: 'reaction',
    title: 'Acilación de Friedel-Crafts',
    prompt: 'Dibuja el producto regioselectivo de esta acilación.',
    context: 'El furano es rico en electrones pero muy sensible a ácidos fuertes (polimeriza). Por tanto, se usa un catalizador suave como BF3 en lugar de AlCl3.',
    reactantSmiles: 'c1ccoc1',
    reagents: { top: '(CH₃CO)₂O', bottom: 'BF₃, éter' },
    smiles: 'CC(=O)c1ccco1',
    acceptedSmiles: ['CC(=O)c1ccco1', 'CC(=O)C1=CC=CO1'],
    commonMistakes: [
      { smiles: 'CC(=O)c1ccoc1', reason: 'Sustituiste en la posición 3. El furano dirige de forma aplastante hacia las posiciones alfa (C2).' }
    ],
    explanation: 'El oxígeno estabiliza excepcionalmente el catión intermediario resultante del ataque en C2 por resonancia completa, favoreciendo abrumadoramente el 2-acetilfurano.',
    hints: ['Añade un grupo acetilo (-COCH₃) en la posición alfa (C2).']
  },
  {
    id: 'examen-nitracion-suave-pirrol',
    category: 'examen',
    type: 'reaction',
    title: 'Nitración Suave (Sin Ácidos Fuertes)',
    prompt: 'Dibuja el producto de la nitración del pirrol.',
    context: 'El pirrol no resiste mezclas sulfonítricas (se quema/polimeriza). Para nitrarlo se usa un agente nitrante neutro como el nitrato de acetilo.',
    reactantSmiles: 'c1cc[nH]c1',
    reagents: { top: 'CH₃COONO₂', bottom: 'Ac₂O, -10°C' },
    smiles: 'O=[N+]([O-])c1ccc[nH]1',
    acceptedSmiles: ['O=[N+]([O-])c1ccc[nH]1', 'O=[N+]([O-])C1=CC=CN1'],
    commonMistakes: [
      { smiles: 'O=[N+]([O-])n1cccc1', reason: 'La nitración no ocurre en el nitrógeno (N-nitración), sino en los carbonos más reactivos del anillo.' }
    ],
    explanation: 'El nitrato de acetilo libera lentamente iones nitronio (NO₂⁺) en un ambiente no corrosivo, permitiendo la nitración segura del pirrol en la posición C2.',
    hints: ['Sustituye en la posición alfa (C2) con un grupo nitro (-NO₂).']
  },
  {
    id: 'examen-bromacion-exhaustiva',
    category: 'examen',
    type: 'reaction',
    title: 'Halogenación Exhaustiva',
    prompt: 'Dibuja el producto orgánico formado con exceso de bromo.',
    context: 'El pirrol es tan exageradamente reactivo que frente al Bromo elemental (sin siquiera catalizador de Lewis) reacciona de forma múltiple.',
    reactantSmiles: 'c1cc[nH]c1',
    reagents: { top: 'Br₂ (Exceso)', bottom: 'Etanol, 0°C' },
    smiles: 'Brc1c(Br)c(Br)c(Br)[nH]1',
    acceptedSmiles: ['Brc1c(Br)c(Br)c(Br)[nH]1'],
    commonMistakes: [
      { smiles: 'Brc1ccc[nH]1', reason: 'Solo monobromaste. Con exceso de bromo, las cuatro posiciones del anillo se halógenan rápidamente.' }
    ],
    explanation: 'El anillo de pirrol tiene una densidad electrónica inmensa. En presencia de exceso de bromo se forman los cuatro enlaces C-Br posibles, generando 2,3,4,5-tetrabromopirrol.',
    hints: ['Sustituye todos los hidrógenos del carbono aromático con bromo.']
  },
  {
    id: 'examen-diels-alder',
    category: 'examen',
    type: 'reaction',
    title: 'Cicloadición [4+2] Diels-Alder',
    prompt: 'Dibuja el aducto bicíclico formado.',
    context: 'El furano es el menos aromático de los heterociclos de 5 miembros. Posee un gran carácter de "dieno conjugado" capaz de sufrir reacciones pericíclicas.',
    reactantSmiles: 'c1ccoc1',
    reagents: { top: 'Anhídrido Maleico', bottom: 'Calor' },
    smiles: 'O=C1OC(=O)C2C1C3C=CC2O3',
    acceptedSmiles: ['O=C1OC(=O)C2C1C3C=CC2O3', 'O1C2C=CC1C1C(=O)OC(=O)C21'],
    commonMistakes: [
      { smiles: 'c1cc(C2C(=O)OC(=O)C2)oc1', reason: 'No es una reacción de sustitución aromática. Es una cicloadición [4+2] donde el furano rompe su aromaticidad para ciclar con el alqueno.' }
    ],
    explanation: 'El oxígeno puentea la estructura bicíclica formada tras la unión concertada de los 4 carbonos del furano con los 2 del dienófilo, formando un aducto endo/exo altamente tenso.',
    hints: ['Imagina al furano como un dieno y dibuja el puente de oxígeno (biciclo[2.2.1]).']
  },
  {
    id: 'examen-litiacion-tiofeno',
    category: 'examen',
    type: 'reaction',
    title: 'Litiación Directa (Metalación)',
    prompt: 'Dibuja el producto intermedio organometálico.',
    context: 'La posición 2 (alfa) contigua al azufre en el tiofeno tiene un protón con mayor acidez (pKa ~ 33) que el benceno, gracias a efectos inductivos y de coordinación.',
    reactantSmiles: 'c1ccsc1',
    reagents: { top: 'n-butil-Li', bottom: 'THF, -78°C' },
    smiles: '[Li]c1cccs1',
    acceptedSmiles: ['[Li]c1cccs1', '[Li]C1=CC=CS1'],
    commonMistakes: [
      { smiles: 'CCCCc1cccs1', reason: 'El n-BuLi actúa como base aquí (arrancando un protón) y no como nucleófilo. Se forma una especie litiada, no alquilada.' },
      { smiles: '[Li]c1ccsc1', reason: 'La metalación ocurre selectivamente en C2, no en C3.' }
    ],
    explanation: 'El heteroátomo de azufre dirige la litiación hacia la posición adyacente estabilizando el carbanión, formando 2-litiotiofeno, un intermediario sintético crucial.',
    hints: ['Sustituye un H de la posición 2 por un átomo de Litio [Li].']
  },
  {
    id: 'examen-sulfonacion-furano',
    category: 'examen',
    type: 'reaction',
    title: 'Sulfonación suave',
    prompt: 'Dibuja el producto regioselectivo.',
    context: 'Al igual que con el pirrol, el ácido sulfúrico fuerte destruiría el furano. Se emplea el complejo trióxido de azufre-piridina.',
    reactantSmiles: 'c1ccoc1',
    reagents: { top: 'SO₃ · Piridina', bottom: 'CH₂Cl₂' },
    smiles: 'O=S(=O)(O)c1ccco1',
    acceptedSmiles: ['O=S(=O)(O)c1ccco1', 'OS(=O)(=O)C1=CC=CO1'],
    commonMistakes: [
      { smiles: 'O=S(=O)(O)c1ccoc1', reason: 'La regioselectividad domina hacia alfa (C2).' }
    ],
    explanation: 'El electrófilo ataca en C2 porque sus formas resonantes del intermediario catiónico son mucho más estables que las formadas por ataque en C3.',
    hints: ['Agrega el grupo ácido sulfónico (-SO₃H) en el carbono 2.']
  },
  {
    id: 'examen-gattermann-tiofeno',
    category: 'examen',
    type: 'reaction',
    title: 'Reacción de Gattermann',
    prompt: 'Dibuja el aldehído formado al final del mecanismo.',
    context: 'Variante de formilación usada clásicamente para anillos ricos en electrones que emplea ácido cianhídrico como bloque formilante.',
    reactantSmiles: 'c1ccsc1',
    reagents: { top: '1) HCN, HCl', bottom: '2) H₂O (hidrólisis)' },
    smiles: 'O=Cc1cccs1',
    acceptedSmiles: ['O=Cc1cccs1', 'O=CC1=CC=CS1'],
    commonMistakes: [
      { smiles: 'N#Cc1cccs1', reason: 'El intermedio es una imina (-CH=NH) que se hidroliza al final para liberar amoníaco y dejar el aldehído.' }
    ],
    explanation: 'El ion formimidilo intermedio se adiciona al tiofeno en C2. Tras la hidrólisis acuosa, se revela el grupo funcional final: Tiofeno-2-carbaldehído.',
    hints: ['El HCN tras hidrolizarse funciona como donador del grupo formilo (-CHO).']
  },
  {
    id: 'examen-fischer-indol',
    category: 'examen',
    type: 'reaction',
    title: 'Síntesis de Fischer del Indol',
    prompt: 'Dibuja el núcleo indólico final producto del reordenamiento.',
    context: 'La fenilhidrazona de la acetona, al calentarse con un ácido de Lewis como el ZnCl2, sufre un reordenamiento sigmatrópico [3,3] con pérdida de amoníaco.',
    reactantSmiles: 'CC(=NNc1ccccc1)C',
    reagents: { top: 'ZnCl₂', bottom: 'Calor' },
    smiles: 'Cc1cc2ccccc2[nH]1',
    acceptedSmiles: ['Cc1cc2ccccc2[nH]1', 'CC1=CC2=CC=CC=C2N1'],
    commonMistakes: [
      { smiles: 'c1ccc2[nH]ccc2c1', reason: 'Olvidaste el grupo metilo. La acetona aporta un metilo en la posición 2 del indol resultante.' }
    ],
    explanation: 'El mecanismo implica la tautomerización a enamina, un reordenamiento sigmatrópico [3,3] (que rompe el enlace N-N), rearomatización y ciclación final perdiendo NH3.',
    hints: ['Dibuja un indol con un grupo metilo.', 'El metilo queda en la posición 2.']
  },
  {
    id: 'examen-vilsmeier-indol',
    category: 'examen',
    type: 'reaction',
    title: 'Vilsmeier-Haack en Indol',
    prompt: 'Dibuja el producto de formilación.',
    context: 'A diferencia del pirrol (que ataca en C2), el indol prefiere abrumadoramente sufrir el ataque electrofílico en la posición C3 para no romper la aromaticidad del benceno fusionado.',
    reactantSmiles: 'c1ccc2[nH]ccc2c1',
    reagents: { top: 'POCl₃ / DMF', bottom: 'H₂O' },
    smiles: 'O=Cc1c[nH]c2ccccc12',
    acceptedSmiles: ['O=Cc1c[nH]c2ccccc12', 'O=CC1=CNC2=CC=CC=C12'],
    commonMistakes: [
      { smiles: 'O=Cc1cc2ccccc2[nH]1', reason: 'Formilaste en C2. El indol reacciona en C3 para mantener intacto el sexteto aromático del anillo de benceno durante el estado de transición.' }
    ],
    explanation: 'El ion clorometileniminio reacciona con el C3 del indol. La hidrólisis genera Indol-3-carbaldehído.',
    hints: ['Agrega un grupo aldehído (-CHO) en la posición 3.']
  },
  {
    id: 'examen-bromacion-indol',
    category: 'examen',
    type: 'reaction',
    title: 'Bromación suave del Indol',
    prompt: 'Dibuja el producto monobromado.',
    context: 'Para evitar poli-halogenaciones y polimerización, el indol se broma en condiciones suaves usando un complejo preformado (dioxano-dibromo) o a muy baja temperatura.',
    reactantSmiles: 'c1ccc2[nH]ccc2c1',
    reagents: { top: 'Br₂', bottom: 'Dioxano, 0°C' },
    smiles: 'Brc1c[nH]c2ccccc12',
    acceptedSmiles: ['Brc1c[nH]c2ccccc12', 'BrC1=CNC2=CC=CC=C12'],
    commonMistakes: [
      { smiles: 'Brc1cc2ccccc2[nH]1', reason: 'La bromación ocurre en C3, no en C2.' }
    ],
    explanation: 'El bromo elemental es demasiado reactivo y destructivo; al moderar su reactividad con dioxano a 0°C, se aísla de forma limpia el 3-bromoindol.',
    hints: ['Sustituye el hidrógeno de la posición 3 por Bromo.']
  },
  {
    id: 'examen-mannich-indol',
    category: 'examen',
    type: 'reaction',
    title: 'Reacción de Mannich (Gramina)',
    prompt: 'Dibuja el derivado alquilado.',
    context: 'El indol, al igual que el pirrol, es lo suficientemente reactivo como para atacar a iones iminio en medio ácido, formándose alcaloides vitales.',
    reactantSmiles: 'c1ccc2[nH]ccc2c1',
    reagents: { top: 'CH₂O, HN(CH₃)₂', bottom: 'H⁺' },
    smiles: 'CN(C)Cc1c[nH]c2ccccc12',
    acceptedSmiles: ['CN(C)Cc1c[nH]c2ccccc12', 'CN(C)CC1=CNC2=CC=CC=C12'],
    commonMistakes: [
      { smiles: 'CN(C)Cc1cc2ccccc2[nH]1', reason: 'El ataque ocurrió en C2. Recuerda que el indol siempre reacciona preferentemente en C3.' }
    ],
    explanation: 'La reacción del indol con el ion iminio derivado de formaldehído y dimetilamina forma el alcaloide conocido como Gramina (3-((dimetilamino)metil)indol).',
    hints: ['Agrega el grupo -CH₂-N(CH₃)₂ en la posición 3 del indol.']
  },
  {
    id: 'examen-skraup',
    category: 'examen',
    type: 'reaction',
    title: 'Síntesis de Quinolina de Skraup',
    prompt: 'Dibuja el heterociclo final de esta mítica reacción.',
    context: 'La anilina se calienta con glicerol, ácido sulfúrico concentrado y un agente oxidante (nitrobenceno) en una reacción violenta.',
    reactantSmiles: 'Nc1ccccc1',
    reagents: { top: 'Glicerol, H₂SO₄', bottom: 'PhNO₂ (Oxidante), Calor' },
    smiles: 'c1ccc2ncccc2c1',
    acceptedSmiles: ['c1ccc2ncccc2c1', 'C1=CC=C2N=CC=CC2=C1'],
    commonMistakes: [
      { smiles: 'c1ccc2cnccc2c1', reason: 'Dibujaste Isoquinolina. En la síntesis de Skraup a partir de anilina se forma Quinolina (nitrógeno adyacente a la fusión).' }
    ],
    explanation: 'El glicerol se deshidrata a acroleína (una enona). La anilina realiza una adición de Michael sobre la acroleína, luego cicla mediante SEAr sobre el anillo bencénico y el oxidante final aromatiza para dar quinolina.',
    hints: ['Se forma el anillo de Quinolina.', 'La anilina actúa como el anillo bencénico y el nitrógeno de la quinolina.']
  },
  {
    id: 'examen-bischler',
    category: 'examen',
    type: 'reaction',
    title: 'Síntesis de Bischler-Napieralski',
    prompt: 'Dibuja el producto heteroaromático completamente oxidado.',
    context: 'La N-fenetilacetamida reacciona con deshidratantes para ciclar, seguida de una deshidrogenación (oxidación catalítica) para restaurar la aromaticidad total.',
    reactantSmiles: 'CC(=O)NCCc1ccccc1',
    reagents: { top: '1) POCl₃, Calor', bottom: '2) Pd/C, Calor (Oxidación)' },
    smiles: 'Cc1nccc2ccccc12',
    acceptedSmiles: ['Cc1nccc2ccccc12', 'CC1=NC=CC2=CC=CC=C12'],
    commonMistakes: [
      { smiles: 'CC1=NCCH2C2=CC=CC=C12', reason: 'Te quedaste en el producto intermedio (3,4-dihidroisoquinolina). El segundo paso con Pd/C oxida aromatizando por completo el anillo.' }
    ],
    explanation: 'El POCl3 convierte a la amida en una especie electrofílica que sufre un ataque intramolecular del anillo bencénico. El Pd/C deshidrogena el intermedio formando 1-metilisoquinolina.',
    hints: ['Forma el anillo de Isoquinolina.', 'Conserva el metilo en la posición 1.']
  },
  {
    id: 'examen-nitracion-quinolina',
    category: 'examen',
    type: 'reaction',
    title: 'Nitración de la Quinolina',
    prompt: 'Dibuja el isómero 5-nitroquinolina (el producto de la posición alfa respecto a la fusión).',
    context: 'Al igual que la piridina, el anillo que contiene el nitrógeno está muy desactivado y protonado en medio ácido. Por ende, la SEAr ocurrirá sobre el anillo bencénico (carbocíclico).',
    reactantSmiles: 'c1ccc2ncccc2c1',
    reagents: { top: 'HNO₃', bottom: 'H₂SO₄, 0°C' },
    smiles: 'O=[N+]([O-])c1cccc2ncccc12',
    acceptedSmiles: ['O=[N+]([O-])c1cccc2ncccc12', 'O=[N+]([O-])C1=C2C=CC=NC2=CC=C1'],
    commonMistakes: [
      { smiles: 'O=[N+]([O-])c1cnccc1c2ccccc2', reason: 'El ataque no puede ocurrir sobre el anillo piridínico por estar desactivado.' },
      { smiles: 'O=[N+]([O-])c1ccc2ncccc2c1', reason: 'Sustituiste en C6. La quinolina se nitra casi a partes iguales en C5 y C8 (las posiciones alfa de la fusión) debido a la mayor estabilidad del complejo sigma sin alterar el otro anillo.' }
    ],
    explanation: 'El anillo carbocíclico es atacado por el nitronio. El isómero en C5 (y C8) predominan porque el catión intermedio no altera la estructura de Kekulé del anillo piridínico vecino.',
    hints: ['Nitra el anillo de benceno.', 'Nitra en la posición 5 (arriba, junto a la fusión).']
  },
  {
    id: 'examen-oxidacion-quinolina',
    category: 'examen',
    type: 'reaction',
    title: 'Oxidación Enérgica de Quinolina',
    prompt: 'Dibuja el ácido dicarboxílico producto de la ruptura oxidativa.',
    context: 'Curiosamente, a pesar de que el anillo piridínico está desactivado hacia electrófilos, es EXTREMADAMENTE estable a la oxidación en comparación con el anillo bencénico rico en electrones.',
    reactantSmiles: 'c1ccc2ncccc2c1',
    reagents: { top: 'KMnO₄, H₂O', bottom: 'Calor (Reflujo)' },
    smiles: 'O=C(O)c1c(C(=O)O)cccn1',
    acceptedSmiles: ['O=C(O)c1c(C(=O)O)cccn1', 'OC(=O)C1=C(N=CC=C1)C(=O)O'],
    commonMistakes: [
      { smiles: 'O=C(O)c1cccc2ncccc12', reason: 'La molécula se rompe drásticamente.' },
      { smiles: 'O=C(O)c1ccccc1', reason: 'El anillo que se destruye por oxidación es el benceno (más rico en densidad electrónica), no la piridina.' }
    ],
    explanation: 'Bajo condiciones drásticas con permanganato, el anillo bencénico se rompe por completo oxidando los carbonos puente hasta ácidos carboxílicos, resultando en el ácido quinolínico (ácido piridin-2,3-dicarboxílico).',
    hints: ['El anillo bencénico es completamente destruido.', 'Los dos carbonos de fusión se oxidan a grupos -COOH adheridos a la piridina.']
  },
  {
    id: 'examen-chichibabin-quinolina',
    category: 'examen',
    type: 'reaction',
    title: 'Aminación de Chichibabin (Quinolina)',
    prompt: 'Dibuja el producto de la sustitución nucleofílica.',
    context: 'Similar a la piridina, el nucleófilo fuerte (NH₂⁻) busca la posición más electrodeficiente del sistema heterocíclico.',
    reactantSmiles: 'c1ccc2ncccc2c1',
    reagents: { top: 'NaNH₂', bottom: 'Amoníaco líquido, Calor' },
    smiles: 'Nc1ccc2ccccc2n1',
    acceptedSmiles: ['Nc1ccc2ccccc2n1', 'NC1=NC2=CC=CC=C2C=C1'],
    commonMistakes: [
      { smiles: 'Nc1ccnc2ccccc12', reason: 'Aminaste en la posición 4. El C2 está inmediatamente adyacente al nitrógeno atractor de electrones y es más reactivo.' }
    ],
    explanation: 'El amiduro ataca en la posición 2 de la quinolina (entre el nitrógeno y el anillo vecino). Tras la eliminación de hidruro se genera 2-aminoquinolina.',
    hints: ['Añade un grupo amino (-NH₂) en el carbono 2 (junto al nitrógeno).']
  },
  {
    id: 'examen-snar-pirimidina',
    category: 'examen',
    type: 'reaction',
    title: 'SNAr Regioselectiva',
    prompt: 'Dibuja el producto monasustituido regioselectivo.',
    context: 'La 2,4-dicloropirimidina es un reactivo clásico. El carbono 4 y el carbono 2 son altamente electrofílicos, pero uno lo es ligeramente más debido al efecto conjugativo cruzado.',
    reactantSmiles: 'Clc1ccnc(Cl)n1',
    reagents: { top: 'NH₃ (1 equivalente)', bottom: 'Etanol, 0°C' },
    smiles: 'Nc1ccnc(Cl)n1',
    acceptedSmiles: ['Nc1ccnc(Cl)n1', 'NC1=NC(Cl)=NC=C1'],
    commonMistakes: [
      { smiles: 'Nc1cc(Cl)ncn1', reason: 'Ataque incorrecto. La posición 4 es intrínsecamente más reactiva en pirimidinas porque la estabilización de la carga negativa en el intermedio se da eficientemente sobre el N en para.' },
      { smiles: 'Nc1cc(N)ncn1', reason: 'Usaste solo 1 equivalente a muy baja temperatura, logrando monasustitución regioselectiva.' }
    ],
    explanation: 'El ataque del amoníaco ocurre de forma predominante en el carbono 4. El 2,4-dicloropirimidina forma 4-amino-2-cloropirimidina, preservando el cloro en posición 2.',
    hints: ['Sustituye el cloro de la posición 4.', 'Deja intacto el cloro de la posición 2.']
  },
  {
    id: 'examen-barbiturico',
    category: 'examen',
    type: 'reaction',
    title: 'Síntesis del Ácido Barbitúrico',
    prompt: 'Dibuja el esqueleto central cíclico formado por esta condensación.',
    context: 'El malonato de dietilo reacciona como di-éster electrófilo ante la urea (un di-nucleófilo débil) en presencia de etóxido de sodio.',
    reactantSmiles: 'NC(=O)N',
    reagents: { top: 'Malonato de dietilo', bottom: 'NaOEt, Etanol (Calor)' },
    smiles: 'O=C1CC(=O)NC(=O)N1',
    acceptedSmiles: ['O=C1CC(=O)NC(=O)N1', 'O=C1CC(=O)NC(=O)N1'],
    commonMistakes: [
      { smiles: 'NC(=O)N(CC(=O)O)CC(=O)O', reason: 'Debes formar un heterociclo de 6 miembros.' }
    ],
    explanation: 'Cada grupo amino de la urea ataca a un éster etílico del malonato (reacción de transamidación/condensación), cerrando un anillo de pirimidintriona (ácido barbitúrico).',
    hints: ['Dibuja un anillo de pirimidina saturada.', 'Pon grupos carbonilo (=O) en las posiciones 2, 4 y 6.']
  },
  {
    id: 'examen-nitracion-uracilo',
    category: 'examen',
    type: 'reaction',
    title: 'Nitración de Bases Nitrogenadas (Uracilo)',
    prompt: 'Dibuja el uracilo nitrado resultante.',
    context: 'A diferencia de la pirimidina desnuda (imposible de nitrar), el uracilo posee grupos lactámicos que enriquecen al anillo (vía tautomeros enólicos), activando la posición 5.',
    reactantSmiles: 'O=c1cc[nH]c(=O)[nH]1',
    reagents: { top: 'HNO₃, H₂SO₄', bottom: 'Calor' },
    smiles: 'O=[N+]([O-])c1c[nH]c(=O)[nH]c1=O',
    acceptedSmiles: ['O=[N+]([O-])c1c[nH]c(=O)[nH]c1=O', 'O=[N+]([O-])C1=CNC(=O)NC1=O'],
    commonMistakes: [
      { smiles: 'O=[N+]([O-])n1ccc(=O)[nH]c1=O', reason: 'La nitración es una SEAr que ataca el carbono 5, no el nitrógeno.' }
    ],
    explanation: 'El uracilo se nitra fácilmente en C5 porque es la única posición vinílica disponible y activada por los grupos que la rodean, formando 5-nitrouracilo.',
    hints: ['Nitra el carbono 5 (el carbono que tiene el doble enlace y no está junto a los O).']
  },
  {
    id: 'examen-alquilacion-purina',
    category: 'examen',
    type: 'reaction',
    title: 'Alquilación de Adenina',
    prompt: 'Dibuja el alquilado principal.',
    context: 'La adenina es una base púrica (unión de pirimidina e imidazol). De todos los nitrógenos presentes (¡cinco!), hay uno que destaca por ser el más nucleofílico/ácido.',
    reactantSmiles: 'Nc1ncnc2[nH]cnc12',
    reagents: { top: 'CH₃I', bottom: 'K₂CO₃, DMF' },
    smiles: 'Cn1cnc2c(N)ncnc12',
    acceptedSmiles: ['Cn1cnc2c(N)ncnc12', 'CN1C=NC2=C(N)N=CN=C12'],
    commonMistakes: [
      { smiles: 'CNc1ncnc2[nH]cnc12', reason: 'Alquilaste el grupo exocíclico -NH2. El nitrógeno más nucleofílico en el sistema aniónico reside en el anillo imidazólico (N9).' }
    ],
    explanation: 'Bajo condiciones básicas débiles, la adenina es desprotonada formando su anión, cuya carga reside mayormente en el N9 (imidazol), el cual ataca al CH3I, análogo a los enlaces biológicos N-glicosídicos en el ADN.',
    hints: ['Añade un grupo metilo (-CH₃) al nitrógeno del anillo de 5 miembros.']
  },
  {
    id: 'examen-sandmeyer',
    category: 'examen',
    type: 'reaction',
    title: 'Reacción de Sandmeyer',
    prompt: 'Dibuja el producto aromático funcionalizado.',
    context: 'Una de las formas más eficientes de sustituir carbonos en aromáticos. Se forma primero una sal de diazonio in situ a 0°C a partir de la anilina.',
    reactantSmiles: 'Nc1ccccc1',
    reagents: { top: '1) NaNO₂, HCl, 0°C', bottom: '2) CuCl, Calor' },
    smiles: 'Clc1ccccc1',
    acceptedSmiles: ['Clc1ccccc1', 'ClC1=CC=CC=C1'],
    commonMistakes: [
      { smiles: 'N#N[Cl-]', reason: 'Esta es la sal de diazonio intermedia que se forma a 0°C. Al calentar con CuCl (paso 2) se expulsa N2 gaseoso dando el producto final.' }
    ],
    explanation: 'El ácido nitroso (formado por NaNO2 + HCl) diazotiza a la amina formando cloruro de bencenodiazonio. En presencia de sales cuprosas (CuCl), un radical Cl sustituye al grupo diazonio perdiendo gas nitrógeno (Sandmeyer).',
    hints: ['Sustituye todo el grupo amino (-NH₂) por un átomo de Cloro.']
  }
];

// Exportar para uso global
window.CATEGORIES = CATEGORIES;
window.PROBLEMS = PROBLEMS;
