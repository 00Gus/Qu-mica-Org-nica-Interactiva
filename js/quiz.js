class Quiz {
  constructor() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.totalQuestions = 10; // Cuestionario de 10 preguntas
    
    // UI Elements
    this.quizContainer = document.getElementById('quizContainer');
    this.questionText = document.getElementById('quizQuestion');
    this.optionsContainer = document.getElementById('quizOptions');
    this.progressText = document.getElementById('quizProgress');
    this.feedbackContainer = document.getElementById('quizFeedback');
    this.resultContainer = document.getElementById('quizResult');
    
    // Bind methods
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.restart = this.restart.bind(this);
    
    // Initialize
    const restartBtn = document.getElementById('btnRestartQuiz');
    if (restartBtn) restartBtn.addEventListener('click', this.restart);
  }

  // Shuffle array utility
  shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  start() {
    this.quizContainer.style.display = 'block';
    this.resultContainer.style.display = 'none';
    
    // Randomize 10 questions from the bank
    let allQuestions = JSON.parse(JSON.stringify(QUIZ_QUESTIONS));
    this.questions = this.shuffle(allQuestions).slice(0, this.totalQuestions);
    
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.renderQuestion();
  }

  renderQuestion() {
    this.feedbackContainer.innerHTML = '';
    this.optionsContainer.innerHTML = '';
    this.optionsContainer.classList.remove('disabled');

    const q = this.questions[this.currentQuestionIndex];
    this.questionText.textContent = q.question;
    this.progressText.textContent = \`Pregunta \${this.currentQuestionIndex + 1} de \${this.totalQuestions}\`;

    // Map options with their original index to track correctness
    let optionsMapped = q.options.map((opt, index) => ({ text: opt, isCorrect: index === q.correctAnswer }));
    
    // Shuffle options so the correct one isn't always in the same spot
    optionsMapped = this.shuffle(optionsMapped);

    optionsMapped.forEach((opt, index) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.textContent = opt.text;
      btn.dataset.isCorrect = opt.isCorrect;
      btn.addEventListener('click', (e) => this.handleOptionClick(e, q.explanation));
      this.optionsContainer.appendChild(btn);
    });
  }

  handleOptionClick(event, explanation) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.isCorrect === 'true';

    // Disable further clicking
    this.optionsContainer.classList.add('disabled');
    
    // Reveal answers
    const buttons = this.optionsContainer.querySelectorAll('.quiz-option-btn');
    buttons.forEach(btn => {
      if (btn.dataset.isCorrect === 'true') {
        btn.classList.add('correct');
      } else if (btn === selectedBtn) {
        btn.classList.add('incorrect');
      }
    });

    // Feedback
    this.feedbackContainer.innerHTML = \`
      <div class="feedback-alert \${isCorrect ? 'alert-success' : 'alert-danger'}">
        <strong>\${isCorrect ? '¡Correcto!' : 'Incorrecto.'}</strong> \${explanation}
      </div>
      <button id="btnNextQuiz" class="btn btn-primary mt-2">Siguiente</button>
    \`;

    if (isCorrect) this.score++;

    document.getElementById('btnNextQuiz').addEventListener('click', this.nextQuestion);
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.totalQuestions) {
      this.renderQuestion();
    } else {
      this.showResults();
    }
  }

  showResults() {
    this.quizContainer.style.display = 'none';
    this.resultContainer.style.display = 'block';
    
    const scoreText = document.getElementById('quizFinalScore');
    const msgText = document.getElementById('quizFinalMsg');
    
    const percentage = (this.score / this.totalQuestions) * 100;
    scoreText.textContent = \`\${this.score} / \${this.totalQuestions}\`;
    
    if (percentage === 100) {
      msgText.textContent = "¡Excelente! Nivel experto en QFB.";
    } else if (percentage >= 70) {
      msgText.textContent = "¡Muy bien! Tienes un buen dominio de la teoría.";
    } else {
      msgText.textContent = "Sigue estudiando. Revisa la sección de Teoría para mejorar.";
    }
  }

  restart() {
    this.start();
  }
}

window.QuizzApp = new Quiz();
