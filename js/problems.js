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
    smiles: 'C1=CSC2=C1C=CC=C2',
    acceptedSmiles: ['c1cc2ccsc2cc1'],
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
    smiles: '[NH+]1ccccc1.[Cl-]',
    acceptedSmiles: ['Cl.[NH+]1ccccc1', '[NH+]1=CC=CC=C1'],
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
    smiles: 'Cc1cn(C)c(=O)nc1O',
    acceptedSmiles: ['Cc1c[nH]c(=O)nc1O'],
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
    smiles: 'c1ccc2c(nccc2)c1',
    acceptedSmiles: ['c1ccc2nccnc2c1'],
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
    smiles: 'c1ccc2c(nccc2)c1',
    acceptedSmiles: ['c1ccc2nccnc2c1', 'c1ccc2ncccc2c1'],
    commonMistakes: [],
    explanation: 'La morfina se basa en un esqueleto de isoquinolina fusionado con otros anillos. Como primer paso, reconoce la isoquinolina.',
    hints: ['Empieza por isoquinolina.', 'El alcaloide tiene N básico.']
  }
];

// Exportar para uso global
window.CATEGORIES = CATEGORIES;
window.PROBLEMS = PROBLEMS;
