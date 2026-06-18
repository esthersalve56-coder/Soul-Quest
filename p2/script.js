const allQuestions = [
  {
    question: "A stranger arrives at your camp with a wounded wing. What do you do?",
    answers: [
      { text: "Tend the wound and stay until they recover.", angel: 9, devil: 2, pookie: 3, stats: { kindness: 10, chaos: 1, power: 2, friendship: 8 } },
      { text: "Use the moment to learn their secrets.", angel: 2, devil: 9, pookie: 1, stats: { kindness: 1, chaos: 5, power: 8, friendship: 2 } },
      { text: "Tell a joke to distract them from the pain.", angel: 3, devil: 1, pookie: 10, stats: { kindness: 5, chaos: 6, power: 1, friendship: 9 } }
    ]
  },
  {
    question: "You found a glowing relic. How do you claim it?",
    answers: [
      { text: "Return it to the guardian spirit.", angel: 10, devil: 1, pookie: 4, stats: { kindness: 9, chaos: 2, power: 3, friendship: 6 } },
      { text: "Break it open and take the power for yourself.", angel: 1, devil: 10, pookie: 2, stats: { kindness: 1, chaos: 7, power: 10, friendship: 1 } },
      { text: "Use it to make everyone dance.", angel: 4, devil: 2, pookie: 10, stats: { kindness: 7, chaos: 8, power: 2, friendship: 7 } }
    ]
  },
  {
    question: "A council asks you to choose a champion. What quality matters most?",
    answers: [
      { text: "Mercy and compassion.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 10, chaos: 2, power: 4, friendship: 8 } },
      { text: "Dominance and fear.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 9, power: 10, friendship: 2 } },
      { text: "Creativity and laughter.", angel: 3, devil: 2, pookie: 10, stats: { kindness: 6, chaos: 9, power: 2, friendship: 9 } }
    ]
  },
  {
    question: "How would you react when a rival insults your honor?",
    answers: [
      { text: "Respond calmly and walk away.", angel: 9, devil: 2, pookie: 3, stats: { kindness: 8, chaos: 1, power: 4, friendship: 6 } },
      { text: "Strike back with overwhelming force.", angel: 1, devil: 9, pookie: 2, stats: { kindness: 1, chaos: 6, power: 10, friendship: 1 } },
      { text: "Challenge them to a silly contest.", angel: 2, devil: 1, pookie: 10, stats: { kindness: 5, chaos: 8, power: 2, friendship: 8 } }
    ]
  },
  {
    question: "In a mystical forest, you hear a cry for help. You...",
    answers: [
      { text: "Search immediately and guide them home.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 9, chaos: 2, power: 3, friendship: 7 } },
      { text: "Use it as a trap to seize advantage.", angel: 1, devil: 10, pookie: 2, stats: { kindness: 1, chaos: 7, power: 9, friendship: 2 } },
      { text: "Whistle a tune and hope they follow it.", angel: 4, devil: 1, pookie: 9, stats: { kindness: 6, chaos: 7, power: 2, friendship: 8 } }
    ]
  },
  {
    question: "You discover a hidden chest. What do you do?",
    answers: [
      { text: "Leave it for the next traveler.", angel: 10, devil: 1, pookie: 3, stats: { kindness: 10, chaos: 3, power: 2, friendship: 8 } },
      { text: "Open it and take everything.", angel: 1, devil: 10, pookie: 2, stats: { kindness: 1, chaos: 6, power: 9, friendship: 1 } },
      { text: "Replace the loot with glitter and confetti.", angel: 3, devil: 2, pookie: 10, stats: { kindness: 7, chaos: 10, power: 1, friendship: 9 } }
    ]
  },
  {
    question: "If you could cast any spell, you would choose:",
    answers: [
      { text: "A healing light to mend wounds.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 10, chaos: 2, power: 4, friendship: 7 } },
      { text: "A storm of shadow to terrify foes.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 8, power: 10, friendship: 1 } },
      { text: "A silly glamour to confuse everyone.", angel: 3, devil: 2, pookie: 10, stats: { kindness: 6, chaos: 9, power: 2, friendship: 8 } }
    ]
  },
  {
    question: "A child asks for your help with a quest. You...",
    answers: [
      { text: "Teach them courage and guide them gently.", angel: 10, devil: 1, pookie: 3, stats: { kindness: 10, chaos: 2, power: 4, friendship: 9 } },
      { text: "Use them as a distraction for your own gain.", angel: 1, devil: 9, pookie: 3, stats: { kindness: 1, chaos: 5, power: 8, friendship: 2 } },
      { text: "Make their quest into a playful game.", angel: 4, devil: 1, pookie: 10, stats: { kindness: 7, chaos: 8, power: 2, friendship: 9 } }
    ]
  },
  {
    question: "You are offered a crown if you betray your friends. You...",
    answers: [
      { text: "Refuse and protect their trust.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 10, chaos: 2, power: 3, friendship: 10 } },
      { text: "Accept and show them your true power.", angel: 1, devil: 10, pookie: 2, stats: { kindness: 1, chaos: 7, power: 10, friendship: 1 } },
      { text: "Forge a prank that keeps everyone laughing.", angel: 3, devil: 2, pookie: 10, stats: { kindness: 6, chaos: 9, power: 1, friendship: 8 } }
    ]
  },
  {
    question: "A mysterious portal appears. What attracts you?",
    answers: [
      { text: "A realm of peace and protection.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 9, chaos: 2, power: 4, friendship: 7 } },
      { text: "A battlefield of chaos and conquest.", angel: 1, devil: 10, pookie: 2, stats: { kindness: 1, chaos: 9, power: 10, friendship: 2 } },
      { text: "A carnival of tricks and cuddles.", angel: 4, devil: 1, pookie: 10, stats: { kindness: 7, chaos: 10, power: 2, friendship: 8 } }
    ]
  },
  {
    question: "What do you value most on your journey?",
    answers: [
      { text: "Truth and harmony.", angel: 10, devil: 1, pookie: 3, stats: { kindness: 10, chaos: 2, power: 4, friendship: 8 } },
      { text: "Authority and respect.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 6, power: 10, friendship: 3 } },
      { text: "Surprise and delight.", angel: 4, devil: 2, pookie: 10, stats: { kindness: 7, chaos: 9, power: 2, friendship: 9 } }
    ]
  },
  {
    question: "Your party faces an ancient guardian. You choose...",
    answers: [
      { text: "A gentle plea for mercy.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 10, chaos: 2, power: 4, friendship: 6 } },
      { text: "A fierce challenge to assert dominance.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 8, power: 10, friendship: 2 } },
      { text: "A funny distraction that confuses everyone.", angel: 3, devil: 2, pookie: 10, stats: { kindness: 6, chaos: 9, power: 2, friendship: 8 } }
    ]
  },
  {
    question: "How do you restore balance after a fight?",
    answers: [
      { text: "Heal the wounded and apologize.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 10, chaos: 1, power: 3, friendship: 8 } },
      { text: "Celebrate your victory loudly.", angel: 1, devil: 9, pookie: 4, stats: { kindness: 2, chaos: 8, power: 9, friendship: 3 } },
      { text: "Throw a whimsical party for everyone.", angel: 4, devil: 2, pookie: 10, stats: { kindness: 7, chaos: 10, power: 2, friendship: 9 } }
    ]
  },
  {
    question: "At night, you dream of a prophecy. It says you are...",
    answers: [
      { text: "A beacon of hope.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 10, chaos: 1, power: 3, friendship: 8 } },
      { text: "A storm of destruction.", angel: 1, devil: 10, pookie: 2, stats: { kindness: 1, chaos: 8, power: 10, friendship: 2 } },
      { text: "A mischievous spark.", angel: 3, devil: 2, pookie: 10, stats: { kindness: 6, chaos: 10, power: 2, friendship: 8 } }
    ]
  },
  {
    question: "Your companions ask for guidance. You advise them to...",
    answers: [
      { text: "Follow their hearts and be kind.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 10, chaos: 2, power: 4, friendship: 9 } },
      { text: "Seize every opportunity for strength.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 7, power: 10, friendship: 3 } },
      { text: "Find joy in the unexpected.", angel: 3, devil: 2, pookie: 10, stats: { kindness: 7, chaos: 9, power: 2, friendship: 9 } }
    ]
  },
  {
    question: "A festival begins in the village. You decide to...",
    answers: [
      { text: "Lead a peaceful ceremony.", angel: 10, devil: 1, pookie: 3, stats: { kindness: 10, chaos: 2, power: 3, friendship: 8 } },
      { text: "Turn it into a spectacle of fire and fury.", angel: 1, devil: 10, pookie: 2, stats: { kindness: 1, chaos: 8, power: 10, friendship: 3 } },
      { text: "Fill the festival with games and laughter.", angel: 3, devil: 2, pookie: 10, stats: { kindness: 7, chaos: 10, power: 2, friendship: 9 } }
    ]
  },
  {
    question: "Which gift would you share with a new friend?",
    answers: [
      { text: "A blessing of safety.", angel: 10, devil: 1, pookie: 3, stats: { kindness: 10, chaos: 2, power: 3, friendship: 9 } },
      { text: "A shard of raw energy.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 7, power: 10, friendship: 2 } },
      { text: "A bag of tricks and charms.", angel: 4, devil: 2, pookie: 10, stats: { kindness: 7, chaos: 9, power: 2, friendship: 9 } }
    ]
  },
  {
    question: "In the final trial, you are asked to choose a companion. Who do you bring?",
    answers: [
      { text: "Someone calm and kind.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 10, chaos: 2, power: 4, friendship: 8 } },
      { text: "A fierce warrior who obeys your command.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 7, power: 10, friendship: 3 } },
      { text: "A playful trickster with wild ideas.", angel: 4, devil: 2, pookie: 10, stats: { kindness: 6, chaos: 10, power: 2, friendship: 8 } }
    ]
  },
  {
    question: "A dragon guards treasure worth millions. How do you approach?",
    answers: [
      { text: "Negotiate peacefully and promise protection.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 9, chaos: 2, power: 5, friendship: 7 } },
      { text: "Challenge it to combat and claim the hoard.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 8, power: 10, friendship: 1 } },
      { text: "Sing a silly song to make it laugh.", angel: 3, devil: 1, pookie: 10, stats: { kindness: 6, chaos: 9, power: 2, friendship: 8 } }
    ]
  },
  {
    question: "You witness injustice happening to someone innocent. You...",
    answers: [
      { text: "Immediately step in and defend them.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 10, chaos: 3, power: 5, friendship: 8 } },
      { text: "Ignore it and mind your own business.", angel: 1, devil: 8, pookie: 2, stats: { kindness: 2, chaos: 6, power: 7, friendship: 2 } },
      { text: "Create a distraction so they can escape.", angel: 5, devil: 3, pookie: 9, stats: { kindness: 7, chaos: 8, power: 3, friendship: 7 } }
    ]
  },
  {
    question: "An ancient curse haunts your bloodline. You respond by...",
    answers: [
      { text: "Seeking a healer to lift it with love and light.", angel: 10, devil: 1, pookie: 3, stats: { kindness: 9, chaos: 2, power: 4, friendship: 8 } },
      { text: "Embracing the curse to gain forbidden power.", angel: 1, devil: 10, pookie: 2, stats: { kindness: 1, chaos: 9, power: 10, friendship: 2 } },
      { text: "Turning it into a legendary legend about yourself.", angel: 3, devil: 2, pookie: 9, stats: { kindness: 5, chaos: 8, power: 3, friendship: 6 } }
    ]
  },
  {
    question: "You find a lost child in a dangerous place. You...",
    answers: [
      { text: "Take them to safety without hesitation.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 10, chaos: 1, power: 3, friendship: 9 } },
      { text: "Use them as leverage against their family.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 7, power: 9, friendship: 1 } },
      { text: "Play games with them to make it fun.", angel: 4, devil: 1, pookie: 10, stats: { kindness: 7, chaos: 7, power: 2, friendship: 8 } }
    ]
  },
  {
    question: "The kingdom offers you a position of power. You accept to...",
    answers: [
      { text: "Help the poor and protect the weak.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 10, chaos: 2, power: 6, friendship: 8 } },
      { text: "Expand your wealth and control.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 8, power: 10, friendship: 2 } },
      { text: "Throw legendary parties for the people.", angel: 3, devil: 2, pookie: 10, stats: { kindness: 6, chaos: 9, power: 4, friendship: 9 } }
    ]
  },
  {
    question: "You discover your closest friend has betrayed you. You...",
    answers: [
      { text: "Talk to them to understand why.", angel: 9, devil: 2, pookie: 3, stats: { kindness: 9, chaos: 2, power: 3, friendship: 7 } },
      { text: "Seek revenge with calculated cruelty.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 8, power: 9, friendship: 1 } },
      { text: "Play a hilarious prank on them.", angel: 3, devil: 2, pookie: 9, stats: { kindness: 5, chaos: 8, power: 2, friendship: 6 } }
    ]
  },
  {
    question: "A magical artifact offers you one wish. You wish for...",
    answers: [
      { text: "The suffering of others to end.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 10, chaos: 1, power: 3, friendship: 7 } },
      { text: "Ultimate power and dominion.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 9, power: 10, friendship: 2 } },
      { text: "The ability to make infinite jokes.", angel: 3, devil: 1, pookie: 10, stats: { kindness: 6, chaos: 9, power: 2, friendship: 8 } }
    ]
  },
  {
    question: "You meet a traveler in distress on a dangerous road. You...",
    answers: [
      { text: "Offer shelter and share your supplies.", angel: 10, devil: 1, pookie: 3, stats: { kindness: 10, chaos: 2, power: 2, friendship: 8 } },
      { text: "Rob them and leave them stranded.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 7, power: 8, friendship: 1 } },
      { text: "Invite them on a fun adventure.", angel: 4, devil: 1, pookie: 10, stats: { kindness: 7, chaos: 7, power: 2, friendship: 9 } }
    ]
  },
  {
    question: "A rival offers you peace. How do you respond?",
    answers: [
      { text: "Accept and build a friendship.", angel: 10, devil: 1, pookie: 3, stats: { kindness: 9, chaos: 1, power: 4, friendship: 9 } },
      { text: "Pretend to accept then strike them down.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 8, power: 9, friendship: 1 } },
      { text: "Celebrate with a ridiculous party.", angel: 4, devil: 2, pookie: 10, stats: { kindness: 7, chaos: 9, power: 3, friendship: 8 } }
    ]
  },
  {
    question: "You inherit a fortune but must choose who deserves it most...",
    answers: [
      { text: "Donate it to help those in need.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 10, chaos: 2, power: 3, friendship: 8 } },
      { text: "Keep it all for yourself.", angel: 1, devil: 10, pookie: 2, stats: { kindness: 1, chaos: 7, power: 9, friendship: 2 } },
      { text: "Fund the craziest adventures possible.", angel: 3, devil: 2, pookie: 10, stats: { kindness: 5, chaos: 10, power: 4, friendship: 7 } }
    ]
  },
  {
    question: "A shadow creature offers you forbidden knowledge. You...",
    answers: [
      { text: "Refuse and seal it away for good.", angel: 10, devil: 2, pookie: 3, stats: { kindness: 8, chaos: 2, power: 5, friendship: 7 } },
      { text: "Accept to gain ultimate dark power.", angel: 1, devil: 10, pookie: 2, stats: { kindness: 1, chaos: 9, power: 10, friendship: 2 } },
      { text: "Learn just enough for a good story.", angel: 4, devil: 3, pookie: 9, stats: { kindness: 5, chaos: 8, power: 4, friendship: 6 } }
    ]
  },
  {
    question: "Your greatest enemy falls powerless before you. You...",
    answers: [
      { text: "Show them mercy and let them live.", angel: 10, devil: 1, pookie: 3, stats: { kindness: 10, chaos: 2, power: 5, friendship: 7 } },
      { text: "Destroy them completely.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 9, power: 10, friendship: 2 } },
      { text: "Challenge them to a ridiculous duel.", angel: 3, devil: 2, pookie: 10, stats: { kindness: 6, chaos: 9, power: 3, friendship: 6 } }
    ]
  },
  {
    question: "An ancient oracle tells your destiny. You feel...",
    answers: [
      { text: "Hopeful and inspired to help others.", angel: 10, devil: 1, pookie: 2, stats: { kindness: 9, chaos: 1, power: 4, friendship: 8 } },
      { text: "Driven to dominate and control everything.", angel: 1, devil: 10, pookie: 1, stats: { kindness: 1, chaos: 8, power: 10, friendship: 2 } },
      { text: "Amused and ready for wild adventure.", angel: 3, devil: 2, pookie: 10, stats: { kindness: 6, chaos: 10, power: 3, friendship: 8 } }
    ]
  }
];

let questions = [];

const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const resultTitle = document.getElementById('resultTitle');
const resultSubtitle = document.getElementById('resultSubtitle');
const resultContent = document.getElementById('resultContent');
const kindnessBar = document.getElementById('kindnessBar');
const chaosBar = document.getElementById('chaosBar');
const powerBar = document.getElementById('powerBar');
const friendshipBar = document.getElementById('friendshipBar');
const bgMusic = document.getElementById('bgMusic');

let currentQuestionIndex = 0;
let scores = { angel: 0, devil: 0, pookie: 0 };
let stats = { kindness: 0, chaos: 0, power: 0, friendship: 0 };
let answerLocked = false;

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function startGame() {
  questions = shuffleArray(allQuestions).slice(0, 18);
  currentQuestionIndex = 0;
  scores = { angel: 0, devil: 0, pookie: 0 };
  stats = { kindness: 0, chaos: 0, power: 0, friendship: 0 };
  answerLocked = false;
  startScreen.classList.remove('active');
  setTimeout(() => {
    quizScreen.classList.add('active');
    showQuestion();
  }, 260);
  playMusic();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  progressText.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
  progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  questionText.classList.remove('fade-in', 'slide-in');
  answersContainer.innerHTML = '';

  void questionText.offsetWidth;
  questionText.textContent = question.question;
  questionText.classList.add('fade-in', 'slide-in');

  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.className = 'answer-btn';
    button.textContent = answer.text;
    button.type = 'button';
    button.dataset.index = index;
    button.addEventListener('click', () => selectAnswer(button, answer));
    answersContainer.appendChild(button);
  });
}

function selectAnswer(button, answer) {
  if (answerLocked) return;
  answerLocked = true;
  playClick();

  const allButtons = Array.from(answersContainer.querySelectorAll('.answer-btn'));
  allButtons.forEach((btn) => {
    btn.classList.add('disabled');
    btn.disabled = true;
  });

  button.classList.add('selected');
  scores.angel += answer.angel;
  scores.devil += answer.devil;
  scores.pookie += answer.pookie;
  stats.kindness += answer.stats.kindness;
  stats.chaos += answer.stats.chaos;
  stats.power += answer.stats.power;
  stats.friendship += answer.stats.friendship;

  setTimeout(() => {
    currentQuestionIndex += 1;
    if (currentQuestionIndex < questions.length) {
      answerLocked = false;
      showQuestion();
    } else {
      showResult();
    }
  }, 700);
}

function showResult() {
  quizScreen.classList.remove('active');
  setTimeout(() => {
    const winner = determineWinner();
    resultScreen.classList.remove('angel', 'devil', 'pookie');
    resultScreen.classList.add(winner.key);
    renderResult(winner);
    resultScreen.classList.add('active');
  }, 260);
}

function determineWinner() {
  const categories = [
    { key: 'angel', name: 'Angel 😇', score: scores.angel, color: '#dbeeff' },
    { key: 'devil', name: 'Devil 😈', score: scores.devil, color: '#ff9f9f' },
    { key: 'pookie', name: 'Pookie 🧸', score: scores.pookie, color: '#ffcdfd' }
  ];
  categories.sort((a, b) => b.score - a.score);
  return categories[0];
}

function renderResult(winner) {
  const theme = winner.key;
  resultTitle.textContent = winner.name;
  resultSubtitle.textContent = `You are guided by ${winner.name.split(' ')[0]}. Your spirit is destined to ${theme === 'angel' ? 'bring peace and courage' : theme === 'devil' ? 'wield shadow and chaos' : 'spark joy and mischief' }.`;

  const description = {
    angel: 'Pure-hearted and brave, you choose mercy over malice. Your presence heals others and lifts every weary soul.',
    devil: 'Bold and unyielding, you seize strength from darkness. Your power commands attention and bends fate to your will.',
    pookie: 'Playful and unpredictable, you turn every moment into adventure. Mischief follows you, but so does charm.'
  };

  const abilities = {
    angel: ['Heal', 'Protect', 'Inspire'],
    devil: ['Power', 'Fear', 'Chaos'],
    pookie: ['Charm', 'Luck', 'Confusion']
  };

  const iconMarkup = {
    angel: '<div class="result-icon star">★<span class="sparkle"></span><span class="sparkle"></span><span class="sparkle"></span><span class="sparkle"></span></div>',
    devil: '<div class="result-icon imp">👿<span class="sparkle"></span><span class="sparkle"></span><span class="sparkle"></span><span class="sparkle"></span></div>',
    pookie: '<div class="result-icon heart">❤️<span class="sparkle"></span><span class="sparkle"></span><span class="sparkle"></span><span class="sparkle"></span></div>'
  };

  resultContent.innerHTML = `
    <div class="result-card">
      ${iconMarkup[theme]}
      <h2>${winner.name} Persona</h2>
      <p>${description[theme]}</p>
      <div class="abilities">
        ${abilities[theme].map((ability) => `<span class="ability-chip">${ability}</span>`).join('')}
      </div>
    </div>
  `;

  const normalized = normalizeStats(stats);
  kindnessBar.style.width = `${normalized.kindness}%`;
  chaosBar.style.width = `${normalized.chaos}%`;
  powerBar.style.width = `${normalized.power}%`;
  friendshipBar.style.width = `${normalized.friendship}%`;
  kindnessBar.style.background = theme === 'angel' ? '#a8ecff' : '#7f86ff';
  chaosBar.style.background = theme === 'devil' ? '#ff6a6a' : '#f59cff';
  powerBar.style.background = theme === 'devil' ? '#ffb179' : '#a3d5ff';
  friendshipBar.style.background = theme === 'pookie' ? '#f297ff' : '#8fe3c8';
}

function normalizeStats(rawStats) {
  const maxScore = questions.length * 10;
  const normalized = {
    kindness: Math.min(100, Math.round((rawStats.kindness / maxScore) * 100)),
    chaos: Math.min(100, Math.round((rawStats.chaos / maxScore) * 100)),
    power: Math.min(100, Math.round((rawStats.power / maxScore) * 100)),
    friendship: Math.min(100, Math.round((rawStats.friendship / maxScore) * 100))
  };
  return normalized;
}

function restartGame() {
  resultScreen.classList.remove('active');
  setTimeout(() => {
    resultScreen.classList.remove('angel', 'devil', 'pookie');
    startScreen.classList.add('active');
  }, 260);
}

function playMusic() {
  try {
    if (bgMusic.pause) {
      bgMusic.src = '';
      bgMusic.load();
    }
  } catch (error) {
    console.warn('Background music placeholder active.');
  }
}

function playClick() {
  const audioCtx = window.AudioContext || window.webkitAudioContext;
  if (!audioCtx) return;
  const ctx = new audioCtx();
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  oscillator.type = 'triangle';
  oscillator.frequency.setValueAtTime(440, ctx.currentTime);
  gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
  oscillator.connect(gainNode).connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.04);
}

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

window.addEventListener('DOMContentLoaded', () => {
  startScreen.classList.add('active');
});
