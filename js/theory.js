const THEORY_DATA = [
  {
    id: "introduccion",
    title: "Introducción a la Plataforma",
    theme: "intro",
    content: `
      <p style="color: var(--text-inverse); font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem;">
        Bienvenida a tu guía teórica de Química Orgánica. Este apartado está diseñado para consolidar tus conocimientos sobre sistemas aromáticos y heterocíclicos, sus propiedades físicas y químicas, así como su reactividad principal.
      </p>
      <div class="theory-card-premium intro-card">
        <h4>💡 Recomendación de Estudio</h4>
        <p>Lee cuidadosamente los <strong>Compuestos de Interés</strong> listados aquí. Esta información ha sido recopilada específicamente para tu perfil. Luego podrás evaluarte en la pestaña de <strong>Quizz</strong>.</p>
      </div>
    `,
    compounds: []
  },
  {
    id: "bencenos",
    title: "Bencenos y Arenos",
    theme: "benzene",
    content: `<p class="theory-subtitle">Derivados aromáticos del Benceno de importancia biológica e industrial.</p>`,
    compounds: [
      { name: "Ácido para-aminobenzoico (PABA)", tags: ["Vitamina", "Biológico"], description: "Substancia de origen natural que se usa en los productos de protección solar y cuidado de la piel, donde a veces se le llama vitamina Bx o B10. Es esencial para el metabolismo de algunas bacterias pero no para los seres humanos.", smiles: "NC1=CC=C(C(O)=O)C=C1" },
      { name: "Sulfamidas (sulfas)", tags: ["Fármaco", "Bacteriostático"], description: "Substancias que inhiben el desarrollo de los microorganismos por competencia en el metabolismo con el PABA. Un ejemplo es la sulfadiazina.", smiles: "NC1=CC=C(S(=O)(NC2=NC=CC=N2)=O)C=C1" },
      { name: "Ácido acetilsalicílico (Aspirina)", tags: ["Fármaco", "Analgésico"], description: "Un analgésico de uso muy común a nivel mundial.", smiles: "CC(=O)OC1=CC=CC=C1C(O)=O" },
      { name: "Paracetamol", tags: ["Fármaco", "Analgésico"], description: "Medicamento usado para aliviar fiebre y dolor. Efectos secundarios adversos incluyen náuseas, daño hepático y renal, e ictericia.", smiles: "CC(=O)NC1=CC=C(O)C=C1" },
      { name: "Fenilalanina", tags: ["Aminoácido", "Esencial"], description: "Un aminoácido esencial. Existe una rara enfermedad hereditaria llamada fenilcetonuria en la que un bebé nace sin la capacidad de descomponerlo.", smiles: "NC(CC1=CC=CC=C1)C(O)=O" },
      { name: "Triptófano", tags: ["Aminoácido", "Esencial"], description: "El cuerpo lo utiliza para producir niacina y serotonina. Esta última produce sueño saludable y un estado de ánimo estable.", smiles: "NC(CC1=CNC2=CC=CC=C12)C(O)=O" },
      { name: "Kevlar", tags: ["Material", "Sintético"], description: "Fibra sintética usada en los chalecos antibalas. Químicamente es poli-para-fenileno tereftalamida.", smiles: "C1=CC(=CC=C1C(=O)NC2=CC=C(C=C2)N)C(=O)O" },
      { name: "DDT", tags: ["Tóxico", "Insecticida"], description: "Uso prohibido en 1972 porque no es biodegradable, se incorpora a la cadena alimentaria y mata aves y peces que consumen insectos contaminados.", smiles: "ClC1=CC=C(C(C2=CC=C(Cl)C=C2)C(Cl)(Cl)Cl)C=C1" },
      { name: "Trinitrotolueno (TNT)", tags: ["Explosivo", "Industrial"], description: "Funde a 82°C y no explota a menos de 240°C sin detonador. Es relativamente resistente a choques, lo que lo hace muy usado en demoliciones.", smiles: "CC1=C(N(=O)=O)C=C(N(=O)=O)C=C1N(=O)=O" }
    ]
  },
  {
    id: "pirrol",
    title: "Pirrol",
    theme: "pyrrole",
    content: `<p class="theory-subtitle">Sistemas heterocíclicos de cinco miembros con nitrógeno, vitales para la vida (clorofila, hemoglobina).</p>`,
    compounds: [
      { name: "Porfobilinógeno", tags: ["Metabolito", "Precursor"], description: "Precursor en la biosíntesis de hemoglobina y clorofila. La hepatitis y la porfiria están asociadas con niveles anormales de este compuesto en sangre.", smiles: "NCC1=C(CCC(O)=O)C(CC(O)=O)=CN1" },
      { name: "Porfirina", tags: ["Macrociclo", "Biológico"], description: "Compuesto conjugado de cuatro anillos de pirrol unidos por puentes metino. Forma parte de la hemoglobina y clorofila. La corrina es similar pero estructura central de la vitamina B12.", smiles: "C1=CC2=CC3=CC=C(N3)C=C4C=CC(=N4)C=C5C=CC(=N5)C=C1N2" },
      { name: "Clorofila", tags: ["Pigmento", "Vegetal"], description: "Pigmento vegetal que interviene en la fotosíntesis absorbiendo fotones. Contiene un átomo de Magnesio en su centro.", smiles: "CCC1=C(C)C2=CC3=C(C)C(=C(CC)C4=N3[Mg]56<-N2=C1C(=C7C(=C(C)C(=N75)C=C8C(C(C(=N86)C=4)C(=O)OC)CC(=O)OCCC(C)CCCC(C)CCCC(C)C)C)C)C" },
      { name: "Hemo", tags: ["Pigmento", "Biológico"], description: "Muy similar a la clorofila, pero tiene un átomo de Hierro en lugar de magnesio.", smiles: "CC1=C(CCC(O)=O)C2=CC3=C(CCC(O)=O)C(C)=C4C=C5C(C)=C(C=C)C6=CC1=N2[Fe]78N3C4=C5N7=C6" },
      { name: "Hemoglobina", tags: ["Proteína", "Transporte"], description: "Pigmento sanguíneo que transporta O2 a los tejidos y CO2 a los pulmones. Formada por el pigmento hemo y la proteína globina.", smiles: "CC1=C(CCC(O)=O)C2=CC3=C(CCC(O)=O)C(C)=C4C=C5C(C)=C(C=C)C6=CC1=N2[Fe]78N3C4=C5N7=C6" },
      { name: "Bilirrubina", tags: ["Pigmento biliar", "Metabolito"], description: "Contiene cuatro anillos de pirrol unidos. Es producto de degradación de la hemoglobina; niveles altos indican problemas hepáticos.", smiles: "CC1=C(CCC(O)=O)C(=C(C)C(=O)N1)CC2=C(C)C(=C(C=C)N2)C=C3C(=C(C)C(=CC4=C(C)C(=C(C=C)N4)O)N3)CCC(O)=O" },
      { name: "Citocromos", tags: ["Enzima", "Biológico"], description: "Enzimas relacionadas con la transferencia de electrones cuyo sitio activo es el pigmento hemo.", smiles: "CC1=C(CCC(O)=O)C2=CC3=C(CCC(O)=O)C(C)=C4C=C5C(C)=C(C=C)C6=CC1=N2[Fe]78N3C4=C5N7=C6" },
      { name: "Fitocromo", tags: ["Pigmento", "Receptor"], description: "Un pigmento foto-receptor de las plantas.", smiles: "C1=C(C)C(=O)NC1=CC2=C(C)C(=C(C=C)N2)CC3=C(C)C(=C(C=C)N3)C=C4C(=C(C)C(=O)N4)CCC(O)=O" },
      { name: "Vitamina B12 (Cobalamina)", tags: ["Vitamina", "Coordinación"], description: "Interviene en formación de eritrocitos y mantenimiento del sistema nervioso central. Tiene un átomo de cobalto formando un complejo con la corrina.", smiles: "CC1=C2N3C(C=C4C(=C(C)C5=N4[Co]367N8C(=C(C)C9=N6C(=C(C)C2=N7)C(C)(C)C9CCC(=O)N)C(C)(C)C8CCC(=O)N)C(C)(C)C5CCC(=O)N)C(C)(C)C1CCC(=O)NCC(C)OP(=O)(O)OC1C(CO)OC(C1O)N1C=NC2=C(C)C(C)=CC=C21" },
      { name: "Ketorolaco", tags: ["Fármaco", "AINEs"], description: "Medicamento analgésico y anti-inflamatorio no esteroideo.", smiles: "OC(=O)C1CCN2C1=CC=C2C(=O)C3=CC=CC=C3" }
    ]
  },
  {
    id: "furano",
    title: "Furano",
    theme: "furan",
    content: `<p class="theory-subtitle">Sistemas heterocíclicos oxigenados de cinco miembros.</p>`,
    compounds: [
      { name: "Tetrahidrofurano (THF)", tags: ["Solvente", "Industrial"], description: "Un solvente muy utilizado en el laboratorio químico.", smiles: "C1CCOC1" },
      { name: "Ácido ascórbico (Vitamina C)", tags: ["Vitamina", "Antioxidante"], description: "Hidrosoluble, necesaria para el crecimiento y reparación de tejidos. Su deficiencia produce escorbuto.", smiles: "OC(CO)C1OC(=O)C(O)=C1O" },
      { name: "Furfuril Tiol", tags: ["Aroma", "Alimentos"], description: "Componente del aroma del café tostado, usado como saboreador artificial.", smiles: "SCC1=CC=CO1" },
      { name: "Nitrofurazona", tags: ["Fármaco", "Bactericida"], description: "Agente antibacteriano de uso tópico.", smiles: "O=N(=O)C1=CC=C(O1)C=NNC(N)=O" },
      { name: "Ranitidina", tags: ["Fármaco", "Gastrointestinal"], description: "Medicamento para el tratamiento de la úlcera gástrica y reducción de ácido estomacal.", smiles: "CNC(=C[N+](=O)[O-])NCCSCC1=CC=C(O1)CN(C)C" }
    ]
  },
  {
    id: "tiofeno",
    title: "Tiofeno",
    theme: "thiophene",
    content: `<p class="theory-subtitle">Sistemas heterocíclicos de cinco miembros con azufre. En forma aromática no están en el metabolismo animal, pero sí en plantas.</p>`,
    compounds: [
      { name: "Biotina (Vitamina H / B7)", tags: ["Vitamina", "Metabolismo"], description: "Interviene en el metabolismo de carbohidratos, grasas, purinas y aminoácidos.", smiles: "O=C1NC2CSCC(CCCCC(=O)O)C2N1" },
      { name: "Pirantel", tags: ["Fármaco", "Antihelmíntico"], description: "Usado contra lombrices e infecciones parasitarias en humanos y veterinaria.", smiles: "CN1C(=NC=C1C=CC2=CC=CS2)C" },
      { name: "Clorhidrato de metapirileno", tags: ["Tóxico", "Antihistamínico"], description: "Se retiró en 1979 por contribuir al cáncer y hepatotoxicidad. Fue muy usado en medicamentos de venta libre para resfriados.", smiles: "CN(C)CCN(CC1=CC=CS1)C2=NC=CC=C2" },
      { name: "Polímeros de Tiofeno", tags: ["Material", "Conductor"], description: "Polímeros orgánicos desarrollados con capacidad para conducir electricidad.", smiles: "C1=CSC=C1" }
    ]
  },
  {
    id: "indol",
    title: "Indol",
    theme: "indole",
    content: `<p class="theory-subtitle">Sistemas bicíclicos fusionados (Benceno + Pirrol). Muchos compuestos con potente actividad psicoactiva y metabólica.</p>`,
    compounds: [
      { name: "Talidomida (Isoindol)", tags: ["Fármaco", "Teratogénico"], description: "Comercializado como sedante para embarazadas en los 50s; produjo anomalías congénitas severas como focomelia.", smiles: "O=C1NC(=O)CCC1N2C(=O)C3=CC=CC=C3C2=O" },
      { name: "Triptófano e Indol natural", tags: ["Aroma", "Esencial"], description: "Presente en jazmines y flores. Forma parte del triptófano, aminoácido esencial.", smiles: "C1=CC=C2C(=C1)C=CN2" },
      { name: "Índigo", tags: ["Colorante", "Textil"], description: "Color azul obtenido por hidrólisis de la 3-indolinona amarilla de origen vegetal.", smiles: "O=C1C(=C2NC3=CC=CC=C3C2=O)NC4=CC=CC=C14" },
      { name: "Púrpura de Tiro", tags: ["Colorante", "Histórico"], description: "Colorante de lujo antiguo compuesto de 6,6'-dibromo-índigo, obtenido de moluscos del Mediterráneo.", smiles: "O=C1C(=C2NC3=CC(Br)=CC=C3C2=O)NC4=CC(Br)=CC=C14" },
      { name: "Serotonina (5-HT)", tags: ["Neurotransmisor", "Biológico"], description: "Asociada a procesos mentales, estado de ánimo estable y prevención de esquizofrenia.", smiles: "NCCc1c[nH]c2ccc(O)cc12" },
      { name: "Reserpina", tags: ["Fármaco", "Tranquilizante"], description: "Alcaloide para tratar hipertensión y problemas emocionales reduciendo serotonina cerebral.", smiles: "COC1C(CC2CN3CCC4=C(NC5=C4C=CC(=C5)OC)C3CC2C1C(=O)OC)OC(=O)C6=CC(=C(C(=C6)OC)OC)OC" },
      { name: "Ergot (Cornezuelo)", tags: ["Tóxico", "Alcaloide"], description: "Producidos por un hongo parásito en cereales. Son derivados del ácido lisérgico que causan envenenamiento histórico.", smiles: "CN1CC2=CNC3=CC=CC(=C23)C1CC4=CNC5=CC=CC(=C45)" },
      { name: "LSD", tags: ["Droga", "Psicoactivo"], description: "Dietilamida del ácido lisérgico. Causa un estado esquizofrénico temporal al afectar receptores de serotonina y glutamato.", smiles: "CCN(CC)C(=O)C1CN(C)C2CC3=CNC4=CC=CC(=C34)C2=C1" },
      { name: "Escatol (3-metilindol)", tags: ["Aroma", "Metabolito"], description: "En heces huele a materia fecal, pero a bajas concentraciones tiene aroma floral (jazmín, flor de naranjo).", smiles: "CC1=CNC2=CC=CC=C12" }
    ]
  },
  {
    id: "benzofurano",
    title: "Benzofurano y Benzotiofeno",
    theme: "benzofuran",
    content: `<p class="theory-subtitle">Sistemas bicíclicos fusionados con oxígeno o azufre.</p>`,
    compounds: [
      { name: "Auronas", tags: ["Pigmento", "Vegetal"], description: "Pigmentos naranjas flavonoides (ej. aureusina en la boca de dragón o 'perrito').", smiles: "O=C1C(=CC2=CC=CC=C2)OC3=CC=CC=C13" },
      { name: "Ácido úsnico", tags: ["Pigmento", "Antibiótico"], description: "Pigmento amarillo de líquenes (Usnea barbata) con propiedades antibióticas milenarias.", smiles: "CC1=C(C(O)=C2C(=C1O)C3=C(C(=O)C(=C(O)C3=O)C(=O)C)O2)C(=O)C" },
      { name: "Griseofulvina", tags: ["Fármaco", "Antimicótico"], description: "Producido por hongo Penicillium, usado contra infecciones fúngicas de uñas y cuero cabelludo.", smiles: "COC1=CC(=C2C(=C1)OC3(C2=O)CC(=CC(=O)C3)C)OC" },
      { name: "Raloxifeno (Benzotiofeno)", tags: ["Fármaco", "Óseo"], description: "Previene y trata osteoporosis, con posible efecto positivo contra cáncer de mama.", smiles: "C1CN(CCO1)CCOC2=CC=C(C=C2)C(=O)C3=C(SC4=C3C=CC(=C4)O)C5=CC=C(C=C5)O" },
      { name: "Tioíndigo", tags: ["Colorante", "Acuarela"], description: "Da tonos naranja, rojo y rosa brillante. Usado en acuarelas de alta calidad.", smiles: "O=C1C(=C2SC3=CC=CC=C3C2=O)SC4=CC=CC=C14" }
    ]
  },
  {
    id: "piridina",
    title: "Piridina",
    theme: "pyridine",
    content: `<p class="theory-subtitle">Sistemas heterocíclicos de seis miembros con nitrógeno. Amplia presencia en neurotoxinas y vitaminas.</p>`,
    compounds: [
      { name: "Coniina", tags: ["Neurotoxina", "Veneno"], description: "Produce parálisis muscular, alcaloide venenoso de la cicuta. Causó la muerte del filósofo Sócrates.", smiles: "CCCC1CCCCN1" },
      { name: "Paraquat", tags: ["Tóxico", "Herbicida"], description: "Herbicida clasificado como arma química. Usado en México en los 70s contra plantíos de marihuana causando un riesgo de envenenamiento masivo.", smiles: "C[N+]1=CC=C(C=C1)C2=CC=[N+](C)C=C2" },
      { name: "Isoniazida", tags: ["Fármaco", "Antibiótico"], description: "Antibiótico usado en el tratamiento de la tuberculosis.", smiles: "O=C(NN)C1=CC=CN=C1" },
      { name: "Nemertellina", tags: ["Neurotoxina", "Biológico"], description: "Tetrapiridina producida por un gusano marino.", smiles: "C1=CC=NC(=C1)C2=CC=NC(=C2)C3=CC=NC(=C3)C4=CC=CN=C4" },
      { name: "Niacina (Vitamina B3)", tags: ["Vitamina", "Esencial"], description: "Relacionada con buen funcionamiento digestivo, piel y nervios.", smiles: "NC(=O)C1=CC=CN=C1" },
      { name: "Nicotina", tags: ["Alcaloide", "Tóxico"], description: "Alcaloide tóxico principal del tabaco.", smiles: "CN1CCCC1C2=CN=CC=C2" },
      { name: "NAD", tags: ["Coenzima", "Energía"], description: "Nicotinamida Adenin Dinucleótido. Permite el intercambio de electrones y H+ en procesos energéticos.", smiles: "NC(=O)C1=CC=C[N+](=C1)C2OC(COP(=O)(O)OP(=O)(O)OCC3OC(N4C=NC5=C4N=CN=C5N)C(O)C3O)C(O)C2O" },
      { name: "Piridoxina (Vitamina B6)", tags: ["Vitamina", "Esencial"], description: "Interviene en metabolismo de energía y producción de eritrocitos.", smiles: "CC1=NC=C(CO)C(CO)=C1O" },
      { name: "Piroxicam", tags: ["Fármaco", "AINEs"], description: "Analgésico y anti-inflamatorio.", smiles: "CN1C(=C(O)C2=CC=CC=C2S1(=O)=O)C(=O)NC3=CC=CC=N3" },
      { name: "Pralidoxima", tags: ["Antídoto", "Fármaco"], description: "Antídoto para envenenamiento con pesticidas organofosforados.", smiles: "C[N+]1=CC=CC=C1C=NO" },
      { name: "Sulfapiridina", tags: ["Fármaco", "Antibiótico"], description: "Sulfonamida que inhibe producción de ácido fólico en bacterias por antagonismo competitivo.", smiles: "NC1=CC=C(S(=O)(NC2=CC=CC=N2)=O)C=C1" },
      { name: "Imidacloroprid", tags: ["Insecticida", "Neonicotinoide"], description: "Se le atribuye declinación en población de abejas y polinizadores.", smiles: "ClC1=CN=C(CN2C(=N[N+]([O-])=O)NCC2)C=C1" }
    ]
  },
  {
    id: "diazinas",
    title: "Diazinas",
    theme: "diazine",
    content: `<p class="theory-subtitle">Pirimidina, Pirazina y Piridazina (dos átomos de nitrógeno en el anillo).</p>`,
    compounds: [
      { name: "Uracilo, Timina y Citosina", tags: ["Bases", "ADN/ARN"], description: "Bases pirimídicas que forman los ácidos nucleicos.", smiles: "O=C1C=CNC(=O)N1" },
      { name: "Idoxuridina", tags: ["Fármaco", "Antiviral"], description: "Usado tópicamente contra el herpes oftálmico.", smiles: "OC[C@H]1O[C@H](C[C@@H]1O)N2C=C(I)C(=O)NC2=O" },
      { name: "AZT (Zidovudina) y Lamivudina", tags: ["Fármaco", "Antirretroviral"], description: "Medicamentos para el tratamiento del VIH/SIDA y Hepatitis B.", smiles: "CC1=CN(C(=O)NC1=O)[C@H]2C[C@@H](N=[N+]=[N-])[C@@H](CO)O2" },
      { name: "Luciferinas (Pirazinas)", tags: ["Biológico", "Bioluminiscencia"], description: "Emiten luz en luciérnagas al oxidarse con la enzima luciferasa.", smiles: "O=C(O)C1N=C(SC1)C2=NC3=C(S2)C=CC(O)=C3" },
      { name: "Metoxipirazinas", tags: ["Aroma", "Vegetal"], description: "Olor a chiles, chícharos y algunos vinos.", smiles: "COC1=NC=CN=C1" },
      { name: "Ácido aspergílico", tags: ["Metabolito", "Tóxico"], description: "Producido por Aspergillus Flavus.", smiles: "CCC(C)C1=NC(=C(C(C)CC)N(O)C1=O)C" },
      { name: "Piperazina (Piridazina reducida)", tags: ["Fármaco", "Antihelmíntico"], description: "Usado contra nemátodos intestinales (oxiuros, ascariasis).", smiles: "C1CNCCN1" }
    ]
  },
  {
    id: "quinolinas",
    title: "Quinolina e Isoquinolina",
    theme: "quinoline",
    content: `<p class="theory-subtitle">Anillos aromáticos nitrogenados fusionados a anillos de benceno.</p>`,
    compounds: [
      { name: "Quinina", tags: ["Fármaco", "Antimalárico"], description: "Alcaloide usado contra la malaria.", smiles: "COC1=CC2=C(C=CN=C2C=C1)C(O)C3CC4CCN3CC4C=C" },
      { name: "Fosfato de cloroquina", tags: ["Fármaco", "Antiparasitario"], description: "Usado contra malaria y amibiasis.", smiles: "CCN(CC)CCCC(C)NC1=C2C=CC(=CC2=NC=C1)Cl" },
      { name: "Papaverina (Opiáceo)", tags: ["Fármaco", "Circulatorio"], description: "Mejora el flujo sanguíneo.", smiles: "COC1=C(C=C(C=C1)CC2=NC=CC3=CC(=C(C=C32)OC)OC)OC" },
      { name: "Morfina (Opiáceo)", tags: ["Fármaco", "Analgésico"], description: "Alcaloide del opio, el analgésico más eficaz para dolores agudos.", smiles: "CN1CCC23C4C1CC5=C2C(=C(C=C5)O)OC3C(C=C4)O" },
      { name: "Codeína (Opiáceo)", tags: ["Fármaco", "Antitusivo"], description: "Calmante similar a la morfina, menos potente.", smiles: "CN1CCC23C4C1CC5=C2C(=C(C=C5)OC)OC3C(C=C4)O" },
      { name: "Emetina", tags: ["Fármaco", "Amebicida"], description: "Principio activo de ipecacuana; potente vomitivo (emético).", smiles: "CCC1CN2CCC3=CC(=C(C=C3C2CC1CC4C5=CC(=C(C=C5NC4)OC)OC)OC)OC" }
    ]
  }
];
