const QUIZ_QUESTIONS = [
  {
    id: "q1",
    question: "El Ácido para-aminobenzoico (PABA) es un metabolito esencial para la supervivencia de ciertas bacterias. ¿Qué clase de fármacos actúan inhibiendo competitivamente el metabolismo del PABA?",
    options: ["Penicilinas", "Sulfamidas (sulfas)", "Macrólidos", "Tetraciclinas"],
    correctAnswer: 1,
    explanation: "Las sulfamidas son sustancias bacteriostáticas que inhiben el desarrollo de microorganismos compitiendo estructuralmente con el PABA."
  },
  {
    id: "q2",
    question: "¿Cuál de los siguientes medicamentos analgésicos puede causar metahemoglobinemia e ictericia como efectos secundarios adversos?",
    options: ["Ácido acetilsalicílico", "Ketorolaco", "Paracetamol (acetaminofeno)", "Piroxicam"],
    correctAnswer: 2,
    explanation: "El paracetamol es útil para la fiebre y dolor, pero en dosis tóxicas produce daño hepático, renal, ictericia y metahemoglobinemia."
  },
  {
    id: "q3",
    question: "¿Qué compuesto insecticida se prohibió en 1972 por no ser biodegradable e incorporarse mortalmente a la cadena alimentaria?",
    options: ["Imidacloroprid", "DDT", "Paraquat", "Ácido aspergílico"],
    correctAnswer: 1,
    explanation: "El DDT fue un pesticida altamente efectivo pero prohibido mundialmente por sus efectos devastadores en el medio ambiente al acumularse en grasas animales."
  },
  {
    id: "q4",
    question: "¿Qué precursor con estructura pirrólica interviene directamente en la biosíntesis de la hemoglobina y la clorofila?",
    options: ["Porfobilinógeno", "Serotonina", "Uracilo", "Fitocromo"],
    correctAnswer: 0,
    explanation: "El porfobilinógeno es el precursor biológico universal de las porfirinas, que a su vez forman el hemo y la clorofila."
  },
  {
    id: "q5",
    question: "La vitamina B12 (cobalamina) es vital para el sistema nervioso y los eritrocitos. ¿Qué metal se encuentra en el centro de su anillo de corrina?",
    options: ["Hierro (Fe)", "Magnesio (Mg)", "Cobre (Cu)", "Cobalto (Co)"],
    correctAnswer: 3,
    explanation: "La vitamina B12 contiene un ión de Cobalto en el centro de su estructura macrocíclica (corrina)."
  },
  {
    id: "q6",
    question: "¿Qué compuesto derivado del furano es un componente esencial del aroma del café tostado?",
    options: ["Tetrahidrofurano", "Furfuril Tiol", "Ácido ascórbico", "Escatol"],
    correctAnswer: 1,
    explanation: "El furfuril tiol se utiliza ampliamente en la industria de alimentos como aromatizante artificial con olor a café tostado."
  },
  {
    id: "q7",
    question: "¿Cuál de estos medicamentos contiene un anillo de tiofeno y se utiliza ampliamente como antihelmíntico en humanos y veterinaria?",
    options: ["Pirantel", "Piperazina", "Isoniazida", "Clorhidrato de metapirileno"],
    correctAnswer: 0,
    explanation: "El Pirantel es un fármaco antiparasitario muy común que contiene un heterociclo de tiofeno en su estructura."
  },
  {
    id: "q8",
    question: "Fármaco sedante derivado del isoindol que fue comercializado en los años 50s y causó miles de casos de anomalías congénitas como focomelia en recién nacidos:",
    options: ["Reserpina", "Talidomida", "Cloroquina", "Ranitidina"],
    correctAnswer: 1,
    explanation: "La talidomida es el ejemplo histórico más trágico de teratogenicidad inducida por fármacos debido a su enantiómero tóxico."
  },
  {
    id: "q9",
    question: "Es un colorante altamente valorado en la antigüedad por su rareza y alto costo, extraído de moluscos del Mediterráneo:",
    options: ["Índigo", "Tioíndigo", "Púrpura de Tiro", "Aureusina"],
    correctAnswer: 2,
    explanation: "El Púrpura de Tiro (6,6'-dibromo-índigo) era el color reservado para emperadores romanos debido a la dificultad de su extracción."
  },
  {
    id: "q10",
    question: "¿Qué droga derivada del indol es producida a partir del ácido lisérgico obtenido de un hongo parásito en cereales?",
    options: ["Dietilamida del ácido lisérgico (LSD)", "Mescalina", "Cocaína", "Nicotina"],
    correctAnswer: 0,
    explanation: "El LSD proviene de las amidas del ácido lisérgico, originado en los alcaloides del cornezuelo de centeno (ergot)."
  },
  {
    id: "q11",
    question: "Antimicótico que contiene benzofurano, producido por el hongo Penicillium y utilizado para infecciones fúngicas de piel y uñas:",
    options: ["Idoxuridina", "Griseofulvina", "Ketorolaco", "Ácido úsnico"],
    correctAnswer: 1,
    explanation: "La griseofulvina es un tratamiento clásico vía oral para dermatomicosis crónicas."
  },
  {
    id: "q12",
    question: "Alcaloide venenoso derivado de la piridina presente en la cicuta, causante de la parálisis y muerte del filósofo Sócrates:",
    options: ["Estricnina", "Brucina", "Coniina", "Emetina"],
    correctAnswer: 2,
    explanation: "La coniina es una neurotoxina que bloquea el sistema nervioso periférico produciendo parálisis ascendente."
  },
  {
    id: "q13",
    question: "Herbicida extremadamente tóxico (derivado de piridina) cuyo uso sobre plantíos de marihuana en México causó una alerta de salud pública en Estados Unidos:",
    options: ["DDT", "Paraquat", "Imidacloroprid", "Nemertellina"],
    correctAnswer: 1,
    explanation: "El Paraquat genera radicales libres masivos; las plantas de marihuana contaminadas representaron un riesgo biológico enorme en los años 70s."
  },
  {
    id: "q14",
    question: "¿Qué compuesto se administra como antídoto de emergencia frente al envenenamiento agudo por pesticidas organofosforados?",
    options: ["Pralidoxima", "Niacina", "Morfina", "AZT"],
    correctAnswer: 0,
    explanation: "La Pralidoxima reactiva la enzima acetilcolinesterasa bloqueada por los organofosforados."
  },
  {
    id: "q15",
    question: "El AZT (zidovudina) y la Lamivudina son importantes fármacos antivirales contra el SIDA y Hepatitis B. ¿De qué heterociclo se derivan?",
    options: ["Pirazina", "Pirimidina", "Quinolina", "Pirrol"],
    correctAnswer: 1,
    explanation: "Ambos fármacos son análogos de nucleósidos pirimidínicos (similares a uracilo/timina/citosina) que actúan inhibiendo la transcriptasa inversa."
  },
  {
    id: "q16",
    question: "Son compuestos heterocíclicos (derivados de pirazina) responsables de la emisión de luz bioluminiscente en las luciérnagas:",
    options: ["Porfirinas", "Luciferinas", "Auronas", "Citocromos"],
    correctAnswer: 1,
    explanation: "La luciferina reacciona con oxígeno en presencia de luciferasa y ATP para emitir luz (bioluminiscencia)."
  },
  {
    id: "q17",
    question: "Muchos de los olores deliciosos de la cocina, como el de la carne rostizada, se deben a la pirólisis de aminoácidos formando:",
    options: ["Pirazinas", "Indoles", "Piperazinas", "Tiofenos"],
    correctAnswer: 0,
    explanation: "Las pirazinas y sus derivados son componentes aromáticos potentes resultantes de reacciones de Maillard y pirólisis."
  },
  {
    id: "q18",
    question: "Alcaloide analgésico sumamente potente de la familia de la isoquinolina, derivado del opio:",
    options: ["Papaverina", "Codeína", "Narcotina", "Morfina"],
    correctAnswer: 3,
    explanation: "La morfina sigue siendo el analgésico narcótico de referencia (gold standard) para el alivio del dolor agudo severo."
  },
  {
    id: "q19",
    question: "Pigmento biliar formado por cuatro anillos de pirrol lineales, producto directo de la degradación de la hemoglobina:",
    options: ["Bilirrubina", "Hemo", "Ácido úsnico", "Clorofila"],
    correctAnswer: 0,
    explanation: "La bilirrubina se procesa en el hígado; un alto nivel en sangre produce ictericia."
  },
  {
    id: "q20",
    question: "¿Qué compuesto (3-metilindol) tiene olor fecal a altas concentraciones, pero huele a jazmín y flor de naranjo muy diluido?",
    options: ["Triptófano", "Serotonina", "Escatol", "Furfuril Tiol"],
    correctAnswer: 2,
    explanation: "El escatol (derivado del metabolismo del triptófano en el intestino) es clave tanto en olores fétidos como en alta perfumería."
  }
];
