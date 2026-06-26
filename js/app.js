/**
 * ANNAIS — Aplicación principal
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'annais-progress';
  const MAX_ATTEMPTS = 9;
  const PENALTY = 0.1;

  let jsmeApplet = null;
  let currentCategory = 'practica';
  let currentTypeFilter = 'all';
  let filteredProblems = [];
  let currentIndex = 0;
  let attempts = {};
  let solved = {};

  const $ = id => document.getElementById(id);

  function loadProgress() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      attempts = data.attempts || {};
      solved = data.solved || {};
    } catch {
      attempts = {};
      solved = {};
    }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ attempts, solved }));
    updateStats();
  }

  function getProblemAttempts(id) {
    return attempts[id] || 0;
  }

  function incrementAttempts(id) {
    attempts[id] = (attempts[id] || 0) + 1;
    saveProgress();
  }

  function markSolved(id) {
    solved[id] = true;
    saveProgress();
  }

  function filterProblems() {
    filteredProblems = PROBLEMS.filter(p => {
      const catMatch = p.category === currentCategory;
      const typeMatch = currentTypeFilter === 'all' || p.type === currentTypeFilter;
      return catMatch && typeMatch;
    });
    if (currentIndex >= filteredProblems.length) {
      currentIndex = Math.max(0, filteredProblems.length - 1);
    }
  }

  function getCurrentProblem() {
    return filteredProblems[currentIndex] || null;
  }

  function updateStats() {
    const total = PROBLEMS.length;
    const solvedCount = Object.keys(solved).length;
    const pct = total > 0 ? Math.round((solvedCount / total) * 100) : 0;
    $('progressStat').textContent = `${solvedCount} / ${total}`;
    $('scoreStat').textContent = `${pct}%`;
  }

  function renderCategories() {
    const list = $('categoryList');
    list.innerHTML = '';

    Object.values(CATEGORIES).forEach(cat => {
      const count = PROBLEMS.filter(p => p.category === cat.id).length;
      const btn = document.createElement('button');
      btn.className = `category-item${cat.id === currentCategory ? ' active' : ''}`;
      btn.setAttribute('role', 'option');
      btn.innerHTML = `<span>${cat.name}</span><span class="category-count">${count}</span>`;
      btn.addEventListener('click', () => selectCategory(cat.id));
      list.appendChild(btn);
    });
  }

  function renderCatalog() {
    const grid = $('catalogGrid');
    grid.innerHTML = '';

    Object.values(CATEGORIES).forEach(cat => {
      const problems = PROBLEMS.filter(p => p.category === cat.id);
      const card = document.createElement('article');
      card.className = 'catalog-card';
      card.innerHTML = `
        <h3>${cat.name}</h3>
        <p>${cat.description}</p>
        <div class="card-footer">
          <span class="problem-count">${problems.length} ejercicios</span>
          <span class="card-arrow">→</span>
        </div>
      `;
      card.addEventListener('click', () => {
        selectCategory(cat.id);
        switchView('practice');
      });
      $('catalogGrid').appendChild(card);
    });
  }

  function renderTheory() {
    if (typeof THEORY_DATA === 'undefined') return;
    
    const navContainer = $('theoryNav');
    const contentContainer = $('theoryContent');
    
    navContainer.innerHTML = '';
    contentContainer.innerHTML = '';
    
    THEORY_DATA.forEach((section, index) => {
      const link = document.createElement('a');
      link.href = `#theory-${section.id}`;
      link.textContent = section.title;
      if (index === 0) link.classList.add('active');
      link.addEventListener('click', (e) => {
        document.querySelectorAll('.theory-nav a').forEach(a => a.classList.remove('active'));
        e.target.classList.add('active');
      });
      navContainer.appendChild(link);
      
      const secDiv = document.createElement('div');
      secDiv.className = `theory-section theme-${section.theme}`;
      secDiv.id = `theory-${section.id}`;
      
      let html = `<h2>${section.title}</h2>${section.content}`;
      
      if (section.compounds && section.compounds.length > 0) {
        html += `<div class="theory-grid">`;
        section.compounds.forEach((comp, idx) => {
          let tagsHtml = comp.tags ? comp.tags.map(t => `<span class="theory-badge">${t}</span>`).join('') : '';
          
          html += `
            <div class="theory-card-premium">
              <div class="theory-card-header">
                <h3>${comp.name}</h3>
                <div class="theory-tags">${tagsHtml}</div>
              </div>
              <div class="theory-card-body">
                <p>${comp.description}</p>
                ${comp.smiles ? `<div class="theory-svg-container" id="svg-${section.id}-${idx}"></div>` : ''}
              </div>
            </div>
          `;
        });
        html += `</div>`;
      }
      
      secDiv.innerHTML = html;
      contentContainer.appendChild(secDiv);
      
      // Post-render SVG con OpenChemLib
      if (section.compounds && typeof OCL !== 'undefined') {
        section.compounds.forEach((comp, idx) => {
          if (comp.smiles) {
            try {
              const svgContainer = document.getElementById(`svg-${section.id}-${idx}`);
              if (svgContainer) {
                const mol = OCL.Molecule.fromSmiles(comp.smiles);
                const svgStr = mol.toSVG(200, 150, "svg-" + idx, { autoCrop: true, suppressChiralText: true });
                svgContainer.innerHTML = svgStr;
              }
            } catch (e) {
              console.warn("No se pudo generar SVG para", comp.name, e);
            }
          }
        });
      }
    });
  }

  function loadProblemById(id) {
    const globalIdx = PROBLEMS.findIndex(p => p.id === id);
    if (globalIdx === -1) {
      alert("Problema no encontrado.");
      return;
    }
    
    const problem = PROBLEMS[globalIdx];
    
    currentCategory = problem.category;
    currentTypeFilter = 'all';
    $('typeFilter').value = 'all';
    
    filterProblems();
    
    currentIndex = filteredProblems.findIndex(p => p.id === id);
    
    renderCategories();
    renderProblem();
    switchView('practice');
  }

  function selectCategory(catId) {
    currentCategory = catId;
    currentIndex = 0;
    filterProblems();
    renderCategories();
    renderProblem();
    closeSidebar();
  }

  function renderProblem() {
    const problem = getCurrentProblem();
    if (!problem) {
      $('problemTitle').textContent = 'Sin ejercicios';
      $('problemPrompt').textContent = 'No hay problemas en esta categoría con el filtro actual.';
      return;
    }

    const cat = CATEGORIES[problem.category];
    const typeLabel = problem.type === 'identify' ? 'Identificación' : 'Reacción';
    const attemptCount = getProblemAttempts(problem.id);

    $('problemCategory').textContent = cat ? cat.name : problem.category;
    $('problemType').textContent = typeLabel;
    $('problemTitle').textContent = problem.title;
    $('problemPrompt').innerHTML = problem.prompt;

    // Soporte visual avanzado para Nivel Universitario
    if (problem.type === 'reaction' && problem.reactantSmiles && problem.reagents && typeof OCL !== 'undefined') {
      try {
        const mol = OCL.Molecule.fromSmiles(problem.reactantSmiles);
        const svgStr = mol.toSVG(130, 130, "reactant-svg", { autoCrop: true, suppressChiralText: true });
        const reagentTop = problem.reagents.top || '';
        const reagentBottom = problem.reagents.bottom || '';
        
        const graphicHtml = `
          <div class="reaction-graphic-container">
            <div class="reaction-reactant">${svgStr}</div>
            <div class="reaction-arrow-container">
              <div class="reagent-top">${reagentTop}</div>
              <div class="reaction-arrow"></div>
              <div class="reagent-bottom">${reagentBottom}</div>
            </div>
            <div class="reaction-product-box">?</div>
          </div>
        `;
        $('problemPrompt').innerHTML += graphicHtml;
      } catch (e) {
        console.warn("No se pudo renderizar el SVG reactivo", e);
      }
    }

    $('problemContext').textContent = problem.context || '';
    $('contextDetails').open = !!problem.context;

    const attemptBadge = $('attemptBadge');
    if (attemptCount > 0) {
      attemptBadge.hidden = false;
      attemptBadge.textContent = `Intento ${attemptCount + 1}`;
    } else {
      attemptBadge.hidden = true;
    }

    $('problemCounter').textContent = `${currentIndex + 1} / ${filteredProblems.length}`;
    $('prevProblem').disabled = currentIndex === 0;
    $('nextProblem').disabled = currentIndex >= filteredProblems.length - 1;

    hideFeedback();
    clearDrawing();
    $('showAnswer').hidden = true;

    if (solved[problem.id]) {
      showSolvedIndicator();
    }
  }

  function showSolvedIndicator() {
    const badge = $('attemptBadge');
    badge.hidden = false;
    badge.textContent = '✓ Resuelto';
    badge.style.background = '#ecfdf5';
    badge.style.color = '#047857';
  }

  function switchView(view) {
    // Ocultar todas las vistas
    ['viewPractice', 'viewCatalog', 'viewTheory', 'viewQuiz'].forEach(v => {
      const el = $(v);
      if (el) {
        el.classList.remove('active');
        el.hidden = true;
      }
    });
    // Limpiar tabs
    ['tabPractice', 'tabCatalog', 'tabTheory', 'tabQuiz'].forEach(t => {
      const el = $(t);
      if (el) {
        el.classList.remove('active');
        el.setAttribute('aria-selected', 'false');
      }
    });

    if (view === 'practice') {
      $('viewPractice').classList.add('active');
      $('viewPractice').hidden = false;
      $('tabPractice').classList.add('active');
      $('tabPractice').setAttribute('aria-selected', 'true');
    } else if (view === 'catalog') {
      $('viewCatalog').classList.add('active');
      $('viewCatalog').hidden = false;
      $('tabCatalog').classList.add('active');
      $('tabCatalog').setAttribute('aria-selected', 'true');
    } else if (view === 'theory') {
      $('viewTheory').classList.add('active');
      $('viewTheory').hidden = false;
      $('tabTheory').classList.add('active');
      $('tabTheory').setAttribute('aria-selected', 'true');
    } else if (view === 'quiz') {
      $('viewQuiz').classList.add('active');
      $('viewQuiz').hidden = false;
      $('tabQuiz').classList.add('active');
      $('tabQuiz').setAttribute('aria-selected', 'true');
      if (window.QuizzApp && window.QuizzApp.questions.length === 0) {
        window.QuizzApp.start();
      }
    }
  }

  function openSidebar() {
    $('sidebar').classList.add('open');
    $('sidebarOverlay').classList.add('visible');
    $('sidebarOverlay').hidden = false;
  }

  function closeSidebar() {
    $('sidebar').classList.remove('open');
    $('sidebarOverlay').classList.remove('visible');
    $('sidebarOverlay').hidden = true;
  }

  function getUserSmiles() {
    if (!jsmeApplet) return '';
    try {
      if (typeof jsmeApplet.nonisomericSmiles === 'function') {
        const nonIso = jsmeApplet.nonisomericSmiles();
        if (nonIso && nonIso.trim()) return nonIso.trim();
      }
      if (typeof jsmeApplet.smiles === 'function') {
        const s = jsmeApplet.smiles();
        if (s && s.trim() && !s.includes('*')) return s.trim();
      }
      if (typeof jsmeApplet.molFile === 'function' && typeof OCL !== 'undefined') {
        const molfile = jsmeApplet.molFile();
        if (molfile && molfile.trim()) {
          return OCL.Molecule.fromMolfile(molfile).toSmiles();
        }
      }
    } catch {
      return '';
    }
    return '';
  }

  function clearDrawing() {
    if (jsmeApplet) {
      try {
        jsmeApplet.reset();
      } catch {
        jsmeApplet.clear();
      }
    }
  }

  function hideFeedback() {
    const panel = $('feedbackPanel');
    panel.classList.add('hidden');
    panel.classList.remove('correct', 'incorrect', 'partial');
    $('nextAfterFeedback').hidden = true;
  }

  function showFeedback(result, problem, attemptNum) {
    const panel = $('feedbackPanel');
    panel.classList.remove('hidden', 'correct', 'incorrect', 'partial', 'revealed');
    panel.classList.add(result.revealed ? 'revealed' : (result.correct ? 'correct' : 'incorrect'));

    const icon = $('feedbackIcon');
    icon.textContent = result.revealed ? 'ℹ' : (result.correct ? '✓' : '✗');

    $('feedbackTitle').textContent = result.title;

    const grade = Validator.calculateGrade(attemptNum, MAX_ATTEMPTS, PENALTY);
    $('feedbackGrade').textContent = result.correct
      ? `Calificación para este envío: ${grade.toFixed(2)} / 1.00 (${attemptNum} intento${attemptNum > 1 ? 's' : ''})`
      : `Intento ${attemptNum} de ${MAX_ATTEMPTS}. Penalización: -${(PENALTY * 100).toFixed(0)}% por intento fallido.`;

    let bodyHtml = `<p>${result.message}</p>`;
    if (result.issues && result.issues.length) {
      bodyHtml += '<ul>' + result.issues.map(i => `<li>${i}</li>`).join('') + '</ul>';
    }
    $('feedbackBody').innerHTML = bodyHtml;

    $('feedbackExplanation').innerHTML = `<strong>Explicación:</strong> ${result.explanation}`;

    $('nextAfterFeedback').hidden = !result.correct;

    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function checkAnswer() {
    const problem = getCurrentProblem();
    if (!problem) return;

    if (!jsmeApplet) {
      showFeedback({
        correct: false,
        score: 0,
        title: 'Editor no listo',
        message: 'El editor molecular aún se está cargando. Espera unos segundos y vuelve a pulsar <strong>Comprobar</strong>.',
        explanation: problem.explanation,
        issues: []
      }, problem, getProblemAttempts(problem.id));
      return;
    }

    const userSmiles = getUserSmiles();
    incrementAttempts(problem.id);
    const attemptNum = getProblemAttempts(problem.id);

    const result = Validator.validate(userSmiles, problem);
    showFeedback(result, problem, attemptNum);

    if (result.correct) {
      markSolved(problem.id);
      showSolvedIndicator();
      $('showAnswer').hidden = true;
    } else if (attemptNum >= 3) {
      $('showAnswer').hidden = false;
    }
  }

  function showHint() {
    const problem = getCurrentProblem();
    if (!problem || !problem.hints || !problem.hints.length) {
      alert('No hay pistas disponibles para este ejercicio.');
      return;
    }
    const hint = problem.hints[Math.floor(Math.random() * problem.hints.length)];
    alert('💡 Pista: ' + hint);
  }

  function showAnswer() {
    const problem = getCurrentProblem();
    if (!problem || !jsmeApplet) return;
    
    try {
      if (typeof jsmeApplet.readGenericMolecularInput === 'function') {
        jsmeApplet.readGenericMolecularInput(problem.smiles);
      } else if (typeof jsmeApplet.readSmiles === 'function') {
        jsmeApplet.readSmiles(problem.smiles);
      }
    } catch (e) {
      console.warn("Error cargando SMILES", e);
    }
    
    showFeedback({
      correct: false,
      revealed: true,
      score: 0,
      title: 'Respuesta revelada',
      message: 'Se ha cargado la respuesta esperada en el lienzo. Estúdiala para el próximo intento.',
      explanation: problem.explanation,
      issues: []
    }, problem, getProblemAttempts(problem.id));
    
    $('nextAfterFeedback').hidden = false;
    $('showAnswer').hidden = true;
  }

  function nextProblem() {
    if (currentIndex < filteredProblems.length - 1) {
      currentIndex++;
      renderProblem();
    }
  }

  function prevProblem() {
    if (currentIndex > 0) {
      currentIndex--;
      renderProblem();
    }
  }

  function randomProblem() {
    if (filteredProblems.length <= 1) return;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * filteredProblems.length);
    } while (newIndex === currentIndex);
    currentIndex = newIndex;
    renderProblem();
  }

  let jsmeInitAttempts = 0;
  const JSME_MAX_ATTEMPTS = 40;

  function showJsmeError(message) {
    const loading = $('jsmeLoading');
    loading.classList.remove('hidden');
    loading.innerHTML = `<p style="color:#b91c1c;padding:1rem;text-align:center">${message}</p>`;
  }

  function initJSME() {
    if (jsmeApplet) return;

    const loading = $('jsmeLoading');

    if (typeof JSApplet === 'undefined' || typeof JSApplet.JSME === 'undefined') {
      jsmeInitAttempts++;
      if (jsmeInitAttempts < JSME_MAX_ATTEMPTS) {
        setTimeout(initJSME, 250);
        return;
      }
      showJsmeError('No se pudo cargar el editor molecular. Verifica tu conexión a internet y recarga la página.');
      return;
    }

    try {
      const wrapper = $('jsmeWrapper');
      const width = wrapper ? wrapper.clientWidth || 380 : 380;
      const height = window.innerWidth <= 768 ? 300 : 340;

      jsmeApplet = new JSApplet.JSME('jsme_container', `${width}px`, `${height}px`);
      try {
        jsmeApplet.options('useOpenChemLib');
      } catch { /* opción opcional */ }
      loading.classList.add('hidden');

      window.addEventListener('resize', debounce(() => {
        if (jsmeApplet && $('jsmeWrapper')) {
          const w = $('jsmeWrapper').clientWidth || 380;
          const h = window.innerWidth <= 768 ? 300 : 340;
          try {
            jsmeApplet.setSize(`${w}px`, `${h}px`);
          } catch { /* resize not critical */ }
        }
      }, 300));
    } catch (err) {
      showJsmeError(`Error al iniciar el editor: ${err.message}`);
    }
  }

  function debounce(fn, ms) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), ms);
    };
  }

  function bindEvents() {
    $('tabPractice').addEventListener('click', () => switchView('practice'));
    $('tabCatalog').addEventListener('click', () => switchView('catalog'));
    $('tabTheory').addEventListener('click', () => switchView('theory'));
    $('tabQuiz').addEventListener('click', () => switchView('quiz'));
    $('openSidebar').addEventListener('click', openSidebar);
    $('closeSidebar').addEventListener('click', closeSidebar);
    $('sidebarOverlay').addEventListener('click', closeSidebar);

    $('prevProblem').addEventListener('click', prevProblem);
    $('nextProblem').addEventListener('click', nextProblem);
    $('randomProblem').addEventListener('click', randomProblem);
    $('checkAnswer').addEventListener('click', checkAnswer);
    $('clearDrawing').addEventListener('click', clearDrawing);
    $('showHint').addEventListener('click', showHint);
    $('showAnswer').addEventListener('click', showAnswer);
    $('nextAfterFeedback').addEventListener('click', nextProblem);

    $('typeFilter').addEventListener('change', e => {
      currentTypeFilter = e.target.value;
      currentIndex = 0;
      filterProblems();
      renderProblem();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeSidebar();
    });
  }

  function init() {
    loadProgress();
    filterProblems();
    filterProblems('all');
    renderCategories();
    renderCatalog();
    renderTheory();
    renderProblem();
    updateStats();
    bindEvents();
    
    // Registrar Service Worker para PWA y manejar actualizaciones (Caché iOS)
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        let refreshing = false;
        
        // Cuando el nuevo SW toma control, recarga la página automáticamente
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (!refreshing) {
            refreshing = true;
            window.location.reload();
          }
        });

        navigator.serviceWorker.register('./sw.js').then(reg => {
          console.log('ServiceWorker registrado:', reg.scope);
          
          function showUpdateBanner(worker) {
            const banner = document.getElementById('updateBanner');
            const btn = document.getElementById('updateBtn');
            if (banner && btn) {
              banner.classList.remove('hidden');
              btn.onclick = () => {
                banner.classList.add('hidden');
                worker.postMessage({ action: 'SKIP_WAITING' });
              };
            }
          }

          // ¿Ya hay un SW esperando? (Si recargó y no actualizó antes)
          if (reg.waiting) {
            showUpdateBanner(reg.waiting);
          }

          // Escuchar cuando el SW encuentra una actualización
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            newWorker.addEventListener('statechange', () => {
              // Si ya se instaló y está esperando para tomar control...
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                showUpdateBanner(newWorker);
              }
            });
          });
        }).catch(error => console.log('Error en ServiceWorker:', error));
      });
    }
  }

  // JSME llama a esta función global cuando el módulo GWT está listo
  window.jsmeOnLoad = function () {
    initJSME();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Respaldo: si jsmeOnLoad no se dispara, reintentar hasta que JSApplet exista
  setTimeout(initJSME, 500);
  setTimeout(initJSME, 1500);
  setTimeout(initJSME, 3000);
})();
