/**
 * Validador de estructuras químicas — ANNAIS
 * Usa OpenChemLib para canonicalización SMILES y análisis estructural.
 */
const Validator = (() => {
  'use strict';

  function parseSmiles(smiles) {
    if (!smiles || typeof smiles !== 'string') return null;
    const trimmed = smiles.trim();
    if (!trimmed) return null;
    try {
      const mol = OCL.Molecule.fromSmiles(trimmed);
      return mol;
    } catch {
      return null;
    }
  }

  function canonicalize(smiles) {
    const mol = parseSmiles(smiles);
    if (!mol) return null;
    try {
      return mol.toSmiles();
    } catch {
      return null;
    }
  }

  function getFormula(smiles) {
    const mol = parseSmiles(smiles);
    if (!mol) return null;
    try {
      const mf = mol.getMolecularFormula();
      return mf ? (mf.formula || mf.toString()) : null;
    } catch {
      return null;
    }
  }

  function getAtomCounts(smiles) {
    const mol = parseSmiles(smiles);
    if (!mol) return null;
    try {
      const formula = mol.getMolecularFormula();
      const counts = {};
      const regex = /([A-Z][a-z]?)(\d*)/g;
      let match;
      while ((match = regex.exec(formula)) !== null) {
        const element = match[1];
        const count = match[2] ? parseInt(match[2], 10) : 1;
        counts[element] = (counts[element] || 0) + count;
      }
      return counts;
    } catch {
      return null;
    }
  }

  function getInChIKey(smiles) {
    const mol = parseSmiles(smiles);
    if (!mol) return null;
    try {
      return mol.getInChIKey();
    } catch {
      return null;
    }
  }

  function smilesMatch(userSmiles, targetSmiles) {
    const userCanon = canonicalize(userSmiles);
    const targetCanon = canonicalize(targetSmiles);
    if (userCanon && targetCanon && userCanon === targetCanon) return true;

    const userKey = getInChIKey(userSmiles);
    const targetKey = getInChIKey(targetSmiles);
    if (userKey && targetKey && userKey === targetKey) return true;

    return false;
  }

  function matchesAny(userSmiles, smilesList) {
    return smilesList.some(s => smilesMatch(userSmiles, s));
  }

  function findCommonMistake(userSmiles, mistakes) {
    if (!mistakes || !mistakes.length) return null;
    for (const mistake of mistakes) {
      if (mistake.smiles && smilesMatch(userSmiles, mistake.smiles)) {
        return mistake;
      }
    }
    return null;
  }

  function analyzeStructuralDifferences(userSmiles, correctSmiles, problem) {
    const issues = [];
    const userFormula = getFormula(userSmiles);
    const correctFormula = getFormula(correctSmiles);
    const userCounts = getAtomCounts(userSmiles);
    const correctCounts = getAtomCounts(correctSmiles);

    if (!userFormula) {
      issues.push('No se pudo interpretar tu dibujo. Asegúrate de haber cerrado todos los anillos y que la estructura sea válida.');
      return issues;
    }

    if (userFormula !== correctFormula) {
      issues.push(`La fórmula molecular no coincide: dibujaste <strong>${userFormula}</strong> y se esperaba <strong>${correctFormula}</strong>.`);

      if (userCounts && correctCounts) {
        const diffHints = [];
        for (const el of new Set([...Object.keys(userCounts), ...Object.keys(correctCounts)])) {
          const u = userCounts[el] || 0;
          const c = correctCounts[el] || 0;
          if (u !== c) {
            if (u > c) diffHints.push(`tienes ${u - c} átomo(s) de ${el} de más`);
            else diffHints.push(`faltan ${c - u} átomo(s) de ${el}`);
          }
        }
        if (diffHints.length) {
          issues.push('Diferencias: ' + diffHints.join('; ') + '.');
        }
      }
    }

    const categoryHints = getCategoryHints(userSmiles, correctSmiles, problem);
    issues.push(...categoryHints);

    return issues;
  }

  function getCategoryHints(userSmiles, correctSmiles, problem) {
    const hints = [];
    const userCanon = canonicalize(userSmiles) || '';
    const correctCanon = canonicalize(correctSmiles) || '';

    const hasAromatic5N = s => /\[nH\]|n\d|n\(/.test(s) || /c1c\[nH\]/.test(s);
    const hasAromatic5O = s => /c1ccoc1|o1cccc1/.test(s);
    const hasAromatic5S = s => /c1ccsc1|s1cccc1/.test(s);

    if (userCanon.includes('=C=')) {
      hints.push('Has juntado dos enlaces dobles en la misma esquina (creando un carbono =C=). ¡Sepáralos!');
    }
    const hasBenzene = s => /c1ccccc1/.test(s);
    const hasPyridine = s => /c1ccncc1|n1ccccc1/.test(s);
    const hasNitro = s => /\[N\+\]\(=O\)\[O-\]|N\(=O\)=O/.test(s);

    if (problem.category === 'pirrol' || problem.category === 'furano' || problem.category === 'tiofeno') {
      if (hasBenzene(userCanon) && !hasBenzene(correctCanon)) {
        hints.push('Dibujaste un anillo bencénico adicional. Este ejercicio requiere un heterociclo de <strong>5 miembros</strong>, no un benceno.');
      }
      if (hasAromatic5O(userCanon) && hasAromatic5N(correctCanon)) {
        hints.push('Dibujaste un <strong>furano</strong> (O) en lugar del heterociclo correcto que lleva <strong>nitrógeno</strong>.');
      }
      if (hasAromatic5S(userCanon) && hasAromatic5O(correctCanon)) {
        hints.push('Dibujaste <strong>tiofeno</strong> (S) en lugar de <strong>furano</strong> (O).');
      }
      if (hasAromatic5N(userCanon) && hasAromatic5O(correctCanon)) {
        hints.push('Dibujaste <strong>pirrol</strong> (N) en lugar de <strong>furano</strong> (O).');
      }
    }

    if (problem.type === 'reaction' && !hasNitro(userCanon) && hasNitro(correctCanon)) {
      if (problem.title.toLowerCase().includes('nitr')) {
        hints.push('Falta el grupo <strong>nitro (-NO₂)</strong>. La nitración introduce este grupo en la posición indicada.');
      }
    }

    if (problem.type === 'reaction' && problem.title.toLowerCase().includes('sulfon') && !/S\(=O\)\(=O\)/.test(userCanon)) {
      if (/S\(=O\)\(=O\)/.test(correctCanon)) {
        hints.push('Falta el grupo <strong>sulfonilo (-SO₃H)</strong> característico de la sulfonación.');
      }
    }

    if (problem.category === 'indol' && hasBenzene(userCanon) && !hasAromatic5N(userCanon) && hasAromatic5N(correctCanon)) {
      hints.push('Recuerda que el <strong>indol</strong> es un sistema <strong>bicíclico</strong>: benceno fusionado con pirrol.');
    }

    if (problem.category === 'piridina' && hasAromatic5N(userCanon) && hasPyridine(correctCanon)) {
      hints.push('La <strong>piridina</strong> tiene <strong>6 miembros</strong> en el anillo, no 5 como el pirrol.');
    }

    if (userCanon === correctCanon) return hints;

    if (problem.type === 'reaction' && userCanon.length > 0) {
      const regioselectivity = detectRegioselectivityIssue(problem, userCanon, correctCanon);
      if (regioselectivity) hints.push(regioselectivity);
    }

    return hints;
  }

  function detectRegioselectivityIssue(problem, userCanon, correctCanon) {
    const title = problem.title.toLowerCase();
    const hetero5alpha = ['pirrol', 'furano', 'tiofeno'];

    if (hetero5alpha.includes(problem.category) && title.includes('nitr')) {
      return 'En heterociclos de 5 miembros (pirrol, furano, tiofeno), la sustitución electrofílica ocurre preferentemente en la posición <strong>α (C2)</strong>, adyacente al heteroátomo.';
    }

    if (problem.category === 'indol' && title.includes('nitr')) {
      return 'En el <strong>indol</strong>, la sustitución electrofílica ocurre en <strong>C3</strong> (posición del anillo pirrólico), no en el benceno.';
    }

    if (problem.category === 'benzofurano' && title.includes('benzotiofeno') && title.includes('nitr')) {
      return 'En <strong>benzotiofeno</strong>, la nitración con HNO₃/AcOH ocurre en <strong>C3</strong>, a diferencia del benzofurano que reacciona en C2.';
    }

    if (title.includes('acilación') && title.includes('n')) {
      return 'Con <strong>AcONa</strong>, la acetilación del indol ocurre sobre el <strong>nitrógeno</strong>, no sobre el carbono C3.';
    }

    return null;
  }

  function validate(userSmiles, problem) {
    if (typeof OCL === 'undefined' || !OCL.Molecule) {
      return {
        correct: false,
        score: 0,
        title: 'Error de validación',
        message: 'El motor químico (OpenChemLib) no está cargado. Recarga la página con <strong>Ctrl+F5</strong> para forzar la actualización.',
        explanation: problem.explanation,
        issues: ['Si el problema persiste, comprueba tu conexión a internet o abre la app en una ventana de incógnito.']
      };
    }

    if (!userSmiles || !userSmiles.trim()) {
      return {
        correct: false,
        score: 0,
        title: 'Sin respuesta',
        message: 'No hay ninguna estructura dibujada. Usa el editor molecular para dibujar tu respuesta antes de comprobar.',
        explanation: problem.explanation,
        issues: ['El lienzo está vacío o la estructura no es válida.']
      };
    }

    const allAccepted = [problem.smiles, ...(problem.acceptedSmiles || [])].filter(Boolean);
    const isCorrect = matchesAny(userSmiles, allAccepted);

    if (isCorrect) {
      return {
        correct: true,
        score: 1,
        title: '¡Correcta!',
        message: `Has dibujado correctamente: <strong>${problem.title}</strong>.`,
        explanation: problem.explanation,
        issues: []
      };
    }

    const mistake = findCommonMistake(userSmiles, problem.commonMistakes || []);
    const issues = analyzeStructuralDifferences(userSmiles, problem.smiles, problem);

    let message = '';
    if (mistake && mistake.reason) {
      message = mistake.reason;
    } else if (issues.length) {
      message = 'Tu estructura no coincide con la respuesta esperada. Revisa los siguientes puntos:';
    } else {
      message = 'La estructura dibujada no es correcta. Compara tu dibujo con la explicación y vuelve a intentarlo.';
    }

    const uniqueIssues = [...new Set(issues)].filter(i => !mistake || !mistake.reason || !i.includes(mistake.reason));

    return {
      correct: false,
      score: 0,
      title: 'Incorrecta',
      message,
      explanation: problem.explanation,
      issues: uniqueIssues,
      matchedMistake: mistake
    };
  }

  function calculateGrade(attempts, maxAttempts = 9, penalty = 0.1) {
    if (attempts <= 0) return 0;
    if (attempts === 1) return 1;
    const grade = 1 - (attempts - 1) * penalty;
    return Math.max(0.1, Math.round(grade * 100) / 100);
  }

  return {
    canonicalize,
    validate,
    calculateGrade,
    smilesMatch
  };
})();

window.Validator = Validator;
