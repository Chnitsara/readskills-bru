/**
 * ReadSkills BRU – Core Application Logic
 * Production Build for Buriram Rajabhat University
 * Implements Sign In (Email + Password), Sign Up (Name + Email + Password),
 * Online Hours Tracker, 6 Units, 8-Step Strategy Wizard, Audio Player, 
 * Immediate Feedback Engine, and Teacher CSV Exporter.
 */

class ReadSkillsApp {
  constructor() {
    this.isLoggedIn = localStorage.getItem('bru_is_logged_in') === 'true';
    this.authMode = 'signin'; // 'signin' or 'signup'
    this.currentView = 'dashboard';
    
    // Initial active user session
    this.user = {
      name: (localStorage.getItem('bru_user_name') || 'Somsak Jaidee').replace(/[\u0E00-\u0E7F]+/g, '').replace(/[()]/g, '').trim(),
      email: localStorage.getItem('bru_user_email') || 'student@bru.ac.th',
      role: localStorage.getItem('bru_user_role') || 'student',
      onlineSeconds: parseInt(localStorage.getItem('bru_online_seconds')) || 18400
    };

    // User accounts database stored in localStorage
    this.registeredUsers = JSON.parse(localStorage.getItem('bru_registered_users')) || [
      { name: 'Somsak Jaidee', email: 'student@bru.ac.th', password: '123456', role: 'student' },
      { name: 'Dr. Somchai', email: 'teacher@bru.ac.th', password: '123456', role: 'instructor' }
    ];

    this.currentUnitId = 1;
    this.currentStage = 'preReading';
    this.currentTopicIndex = 0;
    this.currentActivityStep = 'overview';
    
    // Module 2: Reading Strategies (6 Units, 8 Learning Steps per Unit)
    this.currentStrategyUnit = 1;
    this.currentStrategyStepIndex = 0;

    // Standalone Integrated Assessment Quiz State (Section D)
    this.activeStandaloneQuizId = null;
    this.activeQuizAnswers = {};
    this.activeQuizResult = null;

    // Unit 1 Graded Quiz State (4 Passages x 10 Questions = 40 Questions)
    const savedScore = localStorage.getItem('bru_unit1_quiz_score');
    this.unit1QuizState = {
      passageIndex: 0,
      questionIndex: 0,
      answers: {},
      passageScores: [0, 0, 0, 0],
      passageSubmitted: [false, false, false, false],
      currentFeedback: null,
      isCompleted: false,
      lastScore: savedScore ? parseInt(savedScore) : null
    };

    this.speechSynth = window.speechSynthesis;
    this.isAudioPlaying = false;
    this.audioSpeed = parseFloat(localStorage.getItem('bru_audio_speed')) || 0.75;
    this.currentExampleTab = 1;
    this.currentLearnPart = 'part1';

    // Unit 2 State (Supporting Details & Idea Relationships)
    this.unit2PreScanTimer = null;
    this.unit2PreScanTimeLeft = 60;
    this.unit2PreScanAnswers = {};
    this.unit2Highlights = {};
    this.unit2ChallengeAnswers = JSON.parse(localStorage.getItem('bru_unit2_challenge_answers') || '{}');
    this.unit2ChallengeScore = localStorage.getItem('bru_unit2_challenge_score') ? parseInt(localStorage.getItem('bru_unit2_challenge_score')) : null;
    this.unit2PostScanTimer = null;
    this.unit2PostScanTimeLeft = 180;
    this.unit2PostScanAnswers = {};
    this.unit2PostScanScore = localStorage.getItem('bru_unit2_scanning_score') ? parseInt(localStorage.getItem('bru_unit2_scanning_score')) : null;
    this.unit2TestAnswers = JSON.parse(localStorage.getItem('bru_unit2_test_answers') || '{}');
    this.unit2TestScore = localStorage.getItem('bru_unit2_test_score') ? parseInt(localStorage.getItem('bru_unit2_test_score')) : null;
    const savedU2QuizScore = localStorage.getItem('bru_unit2_quiz_score');
    this.unit2QuizState = {
      passageIndex: 0,
      questionIndex: 0,
      answers: {},
      passageScores: [0, 0, 0, 0],
      passageSubmitted: [false, false, false, false],
      currentFeedback: null,
      isCompleted: false,
      lastScore: savedU2QuizScore ? parseInt(savedU2QuizScore) : null
    };

    // Unit 3 State (Vocabulary in Context & Sentence Meaning)
    this.unit3PreGameAnswers = {};
    this.unit3Highlights = {};
    this.unit3GameAnswers = JSON.parse(localStorage.getItem('bru_unit3_game_answers') || '{}');
    this.unit3GameScore = localStorage.getItem('bru_unit3_game_score') ? parseInt(localStorage.getItem('bru_unit3_game_score')) : null;
    this.unit3TestAnswers = JSON.parse(localStorage.getItem('bru_unit3_test_answers') || '{}');
    this.unit3TestScore = localStorage.getItem('bru_unit3_test_score') ? parseInt(localStorage.getItem('bru_unit3_test_score')) : null;
    const savedU3QuizScore = localStorage.getItem('bru_unit3_quiz_score');
    this.unit3QuizState = {
      passageIndex: 0,
      questionIndex: 0,
      answers: {},
      passageScores: [0, 0, 0, 0],
      passageSubmitted: [false, false, false, false],
      currentFeedback: null,
      isCompleted: false,
      lastScore: savedU3QuizScore ? parseInt(savedU3QuizScore) : null
    };

    // Unit 4 State (References, Connectives, and Text Organization)
    this.unit4PreGameAnswers = {};
    this.unit4Highlights = {};
    this.unit4GameAnswers = JSON.parse(localStorage.getItem('bru_unit4_game_answers') || '{}');
    this.unit4GameScore = localStorage.getItem('bru_unit4_game_score') ? parseInt(localStorage.getItem('bru_unit4_game_score')) : null;
    const savedU4QuizScore = localStorage.getItem('bru_unit4_quiz_score');
    this.unit4QuizState = {
      passageIndex: 0,
      questionIndex: 0,
      answers: {},
      passageScores: [0, 0, 0, 0],
      passageSubmitted: [false, false, false, false],
      currentFeedback: null,
      isCompleted: false,
      lastScore: savedU4QuizScore ? parseInt(savedU4QuizScore) : null
    };

    // Unit 5 State (Text Interpretation and Paraphrased Meaning)
    this.unit5PreGameAnswers = {};
    this.unit5Highlights = {};
    this.unit5GameAnswers = JSON.parse(localStorage.getItem('bru_unit5_game_answers') || '{}');
    this.unit5GameScore = localStorage.getItem('bru_unit5_game_score') ? parseInt(localStorage.getItem('bru_unit5_game_score')) : null;
    const savedU5QuizScore = localStorage.getItem('bru_unit5_quiz_score');
    this.unit5QuizState = {
      passageIndex: 0,
      questionIndex: 0,
      answers: {},
      passageScores: [0, 0, 0, 0],
      passageSubmitted: [false, false, false, false],
      currentFeedback: null,
      isCompleted: false,
      lastScore: savedU5QuizScore ? parseInt(savedU5QuizScore) : null
    };

    // Unit 6 State (Integrated Reading Practice: Reviewing Reading Strategies Units 1-5)
    this.unit6MatchAnswers = {};
    this.unit6PreGameAnswers = {};
    this.unit6Highlights = {};
    this.unit6GameAnswers = JSON.parse(localStorage.getItem('bru_unit6_game_answers') || '{}');
    this.unit6GameScore = localStorage.getItem('bru_unit6_game_score') ? parseInt(localStorage.getItem('bru_unit6_game_score')) : null;
    const savedU6QuizScore = localStorage.getItem('bru_unit6_quiz_score');
    this.unit6QuizState = {
      passageIndex: 0,
      questionIndex: 0,
      answers: {},
      passageScores: [0, 0, 0, 0],
      passageSubmitted: [false, false, false, false],
      currentFeedback: null,
      isCompleted: false,
      lastScore: savedU6QuizScore ? parseInt(savedU6QuizScore) : null
    };

    // Module 2: Reading Strategies Unit 1 State (Navigating Main Ideas & 30-Question Strategy Quiz)
    this.strat1PretestAnswers = {};
    this.strat1VocabAnswers = JSON.parse(localStorage.getItem('bru_strat1_vocab_answers') || '{}');
    this.strat1PredAnswers = JSON.parse(localStorage.getItem('bru_strat1_pred_answers') || '{}');
    this.strat1PassageAnswers = JSON.parse(localStorage.getItem('bru_strat1_passage_answers') || '{}');
    const savedS1QuizScore = localStorage.getItem('bru_strat1_quiz_score');
    this.strat1QuizState = {
      passageIndex: 0,
      questionIndex: 0,
      answers: {},
      passageScores: [0, 0, 0],
      passageSubmitted: [false, false, false],
      currentFeedback: null,
      isCompleted: false,
      lastScore: savedS1QuizScore ? parseInt(savedS1QuizScore) : null
    };

    // Module 2: Reading Strategies Unit 2 State (Supporting Details, Idea Relationships & 30-Question Strategy Quiz)
    this.strat2ScanTimer = null;
    this.strat2ScanSeconds = 0;
    this.strat2ActiveHighlightTool = 'yellow';
    this.strat2HighlightColors = {};
    const savedS2QuizScore = localStorage.getItem('bru_strat2_quiz_score');
    this.strat2QuizState = {
      passageIndex: 0,
      questionIndex: 0,
      answers: {},
      passageScores: [0, 0, 0],
      passageSubmitted: [false, false, false],
      currentFeedback: null,
      isCompleted: false,
      lastScore: savedS2QuizScore ? parseInt(savedS2QuizScore) : null
    };

    this.init();
  }

  init() {
    this.startOnlineTimer();
    this.sanitizeDataTree(window.ReadSkillsData);
    this.installBracketDetector();
    this.createSnowfall();

    // Close user dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const container = document.getElementById('user-profile-menu-container');
      if (container && !container.contains(e.target)) {
        this.closeUserMenu();
      }
    });

    if (this.isLoggedIn) {
      this.showAppLayout(true);
      this.updateUserDisplay();
      this.navigate(this.currentView);
    } else {
      this.showAppLayout(false);
      this.renderLoginView();
    }
  }

  /* ------------------- Bracketed-Number Detector & Auto-Sanitizer ------------------- */
  sanitizeBracketedNumbersInText(str, isHtmlString = false) {
    if (typeof str !== 'string' || !str.includes('[')) return str;
    return str.replace(/\[([^\]]+)\]/g, (match, inner, offset, fullStr) => {
      if (isHtmlString) {
        const before = fullStr.slice(Math.max(0, offset - 15), offset);
        if (/[-:]$/.test(before)) return match; // Preserve Tailwind classes e.g. text-[11px]
      }
      if (match === '[ _______ ]') return match; // Preserve fill-in-the-blank placeholder
      const trimmed = inner.trim();
      // 1. Pure section/unit codes like [U1-6.1], [S1-5.2], [5.1], [4.2.1], [1.1–1.4] -> remove completely
      if (/^(?:[US]\d+[-.]?|\d+\.\d+)[\d.\s,–\-&A-Za-z•:]*$/i.test(trimmed)) {
        return '';
      }
      // 2. Prefix tags with S1/U1 codes like [Previewing Strategy • S1-5.2] -> remove completely
      if (/[US]\d+-\d+/i.test(trimmed)) {
        return '';
      }
      // 3. Standalone sentence index [1], [2] -> (1), (2)
      if (/^\d+$/.test(trimmed)) {
        return `(${trimmed})`;
      }
      // 4. Any other bracket containing a digit or label -> unwrap brackets
      if (/\d/.test(trimmed)) {
        return trimmed;
      }
      return trimmed;
    });
  }

  sanitizeDataTree(obj) {
    if (!obj) return obj;
    if (typeof obj === 'string') {
      return this.sanitizeBracketedNumbersInText(obj, true);
    }
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = this.sanitizeDataTree(obj[i]);
      }
      return obj;
    }
    if (typeof obj === 'object') {
      for (const k of Object.keys(obj)) {
        obj[k] = this.sanitizeDataTree(obj[k]);
      }
      return obj;
    }
    return obj;
  }

  sanitizeDOMBrackets(root) {
    if (!root || typeof document === 'undefined' || !document.createTreeWalker) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const textNodes = [];
    let current;
    while ((current = walker.nextNode())) {
      if (current.nodeValue && current.nodeValue.includes('[') && current.nodeValue !== '[ _______ ]') {
        textNodes.push(current);
      }
    }
    textNodes.forEach(node => {
      const cleaned = this.sanitizeBracketedNumbersInText(node.nodeValue, false);
      if (cleaned !== node.nodeValue) {
        node.nodeValue = cleaned;
        if (cleaned.trim() === '' && node.parentElement && node.parentElement.tagName === 'SPAN' && node.parentElement.childNodes.length === 1) {
          node.parentElement.remove();
        }
      }
    });
  }

  installBracketDetector() {
    if (typeof document === 'undefined' || !document.body) return;
    this.sanitizeDOMBrackets(document.body);
    if (typeof MutationObserver !== 'undefined' && !this._bracketObserver) {
      this._bracketObserver = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.type === 'childList') {
            m.addedNodes.forEach(n => {
              if (n.nodeType === 1) this.sanitizeDOMBrackets(n);
              else if (n.nodeType === 3 && n.nodeValue && n.nodeValue.includes('[')) {
                const cleaned = this.sanitizeBracketedNumbersInText(n.nodeValue, false);
                if (cleaned !== n.nodeValue) n.nodeValue = cleaned;
              }
            });
          } else if (m.type === 'characterData' && m.target && m.target.nodeValue && m.target.nodeValue.includes('[')) {
            const cleaned = this.sanitizeBracketedNumbersInText(m.target.nodeValue, false);
            if (cleaned !== m.target.nodeValue) m.target.nodeValue = cleaned;
          }
        }
      });
      this._bracketObserver.observe(document.body, { childList: true, subtree: true, characterData: true });
    }
  }

  showAppLayout(visible) {
    const header = document.getElementById('app-header');
    const footer = document.getElementById('app-footer');
    const mobileNav = document.getElementById('mobile-bottom-nav');

    if (visible) {
      if (header) header.classList.remove('hidden');
      if (footer) footer.classList.remove('hidden');
      if (mobileNav) mobileNav.classList.remove('hidden');
    } else {
      if (header) header.classList.add('hidden');
      if (footer) footer.classList.add('hidden');
      if (mobileNav) mobileNav.classList.add('hidden');
    }
  }

  /* ------------------- Online Timer (Tracking Hours Online) ------------------- */
  startOnlineTimer() {
    setInterval(() => {
      if (this.isLoggedIn) {
        this.user.onlineSeconds++;
        localStorage.setItem('bru_online_seconds', this.user.onlineSeconds);
        this.updateTimerDisplay();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const totalSeconds = this.user.onlineSeconds;
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    
    const formatted = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    const timerElem = document.getElementById('live-timer-display');
    if (timerElem) {
      timerElem.innerText = formatted;
    }
  }

  formatHoursText(seconds) {
    const hrs = (seconds / 3600).toFixed(1);
    return `${hrs} hrs (${Math.floor(seconds/60)} mins)`;
  }

  updateUserDisplay() {
    const englishName = (this.user.name || '').replace(/[\u0E00-\u0E7F]+/g, '').replace(/[()]/g, '').trim() || 'Somsak Jaidee';
    const initial = englishName.charAt(0).toUpperCase() || 'S';

    const nameElem = document.getElementById('user-display-name');
    if (nameElem) {
      nameElem.innerText = englishName;
    }
    const avatarElem = document.getElementById('user-avatar-initial');
    if (avatarElem) {
      avatarElem.innerText = initial;
    }
    const dropdownName = document.getElementById('dropdown-user-name');
    if (dropdownName) {
      dropdownName.innerText = englishName;
    }
    const dropdownAvatar = document.getElementById('dropdown-avatar-initial');
    if (dropdownAvatar) {
      dropdownAvatar.innerText = initial;
    }
    const dropdownEmail = document.getElementById('dropdown-user-email');
    if (dropdownEmail) {
      dropdownEmail.innerText = this.user.email || 'student@bru.ac.th';
    }
  }

  toggleUserMenu(event) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById('user-dropdown-menu');
    const chevron = document.getElementById('user-menu-chevron');
    if (dropdown) {
      const isClosed = dropdown.classList.contains('hidden');
      if (isClosed) {
        dropdown.classList.remove('hidden');
        if (chevron) chevron.classList.add('rotate-180');
        if (window.lucide) lucide.createIcons();
      } else {
        dropdown.classList.add('hidden');
        if (chevron) chevron.classList.remove('rotate-180');
      }
    }
  }

  closeUserMenu() {
    const dropdown = document.getElementById('user-dropdown-menu');
    const chevron = document.getElementById('user-menu-chevron');
    if (dropdown) dropdown.classList.add('hidden');
    if (chevron) chevron.classList.remove('rotate-180');
  }

  /* ------------------- Authentication Renderer (Sign In / Sign Up) ------------------- */
  setAuthMode(mode) {
    this.authMode = mode;
    this.renderLoginView();
  }

  renderLoginView() {
    const container = document.getElementById('main-content');
    const isSignIn = this.authMode === 'signin';

    container.innerHTML = `
      <div class="login-screen-bg flex flex-col items-center justify-center -mt-8 py-8">
        
        <!-- Top Pill Tag -->
        <div class="mb-4">
          <span class="px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest text-[#53347C] bg-[#CBB5E2] border border-[#BF9EDF] uppercase">
            READING SKILLS &bull; EFL PROGRAM
          </span>
        </div>

        <!-- Title & Subtitle -->
        <h1 class="text-3xl sm:text-4xl font-extrabold text-[#3C2A58] tracking-tight text-center mb-2">
          English Reading<br />Skills
        </h1>
        
        <p class="text-xs sm:text-sm text-[#5D4978] text-center max-w-md leading-relaxed mb-8">
          Improve your academic reading skills with adaptive passages,<br />strategy modules, and instant feedback.
        </p>

        <!-- Auth Card Container -->
        <div class="login-card-container space-y-5 relative">
          
          <!-- Circle Logo -->
          <div class="w-12 h-12 bg-[#53347C] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
            <i data-lucide="book-open" class="w-6 h-6"></i>
          </div>

          <div class="text-center space-y-1">
            <h3 class="text-xl font-extrabold text-[#3C2A58]">${isSignIn ? 'Sign in' : 'Create Account'}</h3>
            <span class="inline-block px-3 py-0.5 bg-[#B6A2CD] text-[#462F67] text-[10px] font-extrabold uppercase tracking-wider rounded-full">
              BURIRAM RAJABHAT UNIVERSITY
            </span>
          </div>

          <!-- Auth Mode Toggle Tabs (Sign In vs Sign Up) -->
          <div class="flex items-center justify-center p-1 bg-[#B6A2CD]/60 rounded-xl text-xs">
            <button onclick="app.setAuthMode('signin')" class="w-1/2 py-2 rounded-lg transition ${isSignIn ? 'auth-tab-active' : 'auth-tab-inactive'}">
              Sign In (เข้าสู่ระบบ)
            </button>
            <button onclick="app.setAuthMode('signup')" class="w-1/2 py-2 rounded-lg transition ${!isSignIn ? 'auth-tab-active' : 'auth-tab-inactive'}">
              Sign Up (สมัครสมาชิก)
            </button>
          </div>

          <!-- Form Fields -->
          ${isSignIn ? this.renderSignInForm() : this.renderSignUpForm()}

        </div>

      </div>
    `;

    if (window.lucide) lucide.createIcons();
  }

  // 1. Sign In Form (Email + Password)
  renderSignInForm() {
    return `
      <form onsubmit="app.handleSignIn(event)" class="space-y-4 pt-1">
        <div>
          <label class="block text-[11px] font-bold text-[#462F67] mb-1">Email address (อีเมล)</label>
          <input 
            type="email" 
            id="signin-email" 
            required 
            placeholder="student@bru.ac.th" 
            class="w-full px-4 py-3 rounded-xl input-lavender text-sm font-medium transition" 
          />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-[#462F67] mb-1">Password (รหัสผ่าน)</label>
          <input 
            type="password" 
            id="signin-password" 
            required 
            placeholder="••••••••" 
            class="w-full px-4 py-3 rounded-xl input-lavender text-sm font-medium transition" 
          />
        </div>

        <div class="flex items-center justify-between pt-1">
          <a href="#" onclick="alert('กรุณาติดต่ออาจารย์ประจำวิชาเพื่อรีเซ็ตรหัสผ่าน')" class="text-xs font-semibold text-[#53347C] hover:text-[#3C2A58] transition underline">
            Forgot password?
          </a>

          <button type="submit" class="px-7 py-2.5 btn-purple-primary text-xs font-bold rounded-full transition shadow-md">
            Sign In ➔
          </button>
        </div>
      </form>
    `;
  }

  // 2. Sign Up Form (Name + Email + Password)
  renderSignUpForm() {
    return `
      <form onsubmit="app.handleSignUp(event)" class="space-y-3.5 pt-1">
        <div>
          <label class="block text-[11px] font-bold text-[#462F67] mb-1">Full Name (ชื่อ-นามสกุล)</label>
          <input 
            type="text" 
            id="signup-name" 
            required 
            placeholder="สมชาย ใจดี" 
            class="w-full px-4 py-2.5 rounded-xl input-lavender text-sm font-medium transition" 
          />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-[#462F67] mb-1">Email address (อีเมล)</label>
          <input 
            type="email" 
            id="signup-email" 
            required 
            placeholder="name@bru.ac.th" 
            class="w-full px-4 py-2.5 rounded-xl input-lavender text-sm font-medium transition" 
          />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-[#462F67] mb-1">Password (รหัสผ่าน)</label>
          <input 
            type="password" 
            id="signup-password" 
            required 
            placeholder="สร้างรหัสผ่านของคุณ" 
            class="w-full px-4 py-2.5 rounded-xl input-lavender text-sm font-medium transition" 
          />
        </div>

        <div class="pt-2">
          <button type="submit" class="w-full py-3 btn-purple-primary text-xs font-bold rounded-xl transition shadow-md">
            Register & Sign Up (สมัครสมาชิก)
          </button>
        </div>
      </form>
    `;
  }

  /* ------------------- Sign In & Sign Up Handlers ------------------- */
  handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById('signin-email').value.trim();
    const password = document.getElementById('signin-password').value.trim();

    // Check against registered users database
    const foundUser = this.registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!foundUser) {
      const newName = email.split('@')[0];
      const newUser = { name: newName, email: email, password: password, role: 'student' };
      this.registeredUsers.push(newUser);
      localStorage.setItem('bru_registered_users', JSON.stringify(this.registeredUsers));
      this.performLogin(newName, email, 'student');
      return;
    }

    if (foundUser.password !== password) {
      alert('รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง');
      return;
    }

    this.performLogin(foundUser.name, foundUser.email, foundUser.role || 'student');
  }

  handleSignUp(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    const existingIndex = this.registeredUsers.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    if (existingIndex >= 0) {
      this.registeredUsers[existingIndex] = { name, email, password, role: 'student' };
    } else {
      this.registeredUsers.push({ name, email, password, role: 'student' });
    }

    localStorage.setItem('bru_registered_users', JSON.stringify(this.registeredUsers));
    alert('สมัครสมาชิกเรียบร้อยแล้ว! เข้าสู่ระบบอัตโนมัติ');
    this.performLogin(name, email, 'student');
  }

  performLogin(name, email, role) {
    this.user.name = name;
    this.user.email = email;
    this.user.role = role;
    this.isLoggedIn = true;

    localStorage.setItem('bru_is_logged_in', 'true');
    localStorage.setItem('bru_user_name', name);
    localStorage.setItem('bru_user_email', email);
    localStorage.setItem('bru_user_role', role);

    this.showAppLayout(true);
    this.updateUserDisplay();
    this.navigate('dashboard');
  }

  logout() {
    this.closeUserMenu();
    this.isLoggedIn = false;
    localStorage.setItem('bru_is_logged_in', 'false');
    this.showAppLayout(false);
    this.renderLoginView();
  }

  /* ------------------- Router Navigation ------------------- */
  navigate(viewName, preserveScroll = false) {
    if (!this.isLoggedIn) {
      this.renderLoginView();
      return;
    }

    const savedScrollY = window.scrollY;
    this.currentView = viewName;

    // Update active nav button styles (Desktop)
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('bg-white', 'text-purple-900', 'font-bold');
    });
    const activeNav = document.getElementById(`nav-${viewName}`);
    if (activeNav) {
      activeNav.classList.add('bg-white', 'text-purple-900', 'font-bold');
    }

    // Update active nav button styles (Mobile Bottom Nav)
    document.querySelectorAll('.m-nav-btn').forEach(btn => {
      btn.classList.remove('text-purple-900', 'font-bold');
      btn.classList.add('text-slate-500');
    });
    const activeMobileNav = document.getElementById(`m-nav-${viewName}`);
    if (activeMobileNav) {
      activeMobileNav.classList.remove('text-slate-500');
      activeMobileNav.classList.add('text-purple-900', 'font-bold');
    }

    const container = document.getElementById('main-content');
    switch (viewName) {
      case 'dashboard':
        container.innerHTML = this.renderDashboard();
        break;
      case 'lessons':
        container.innerHTML = this.renderLessonsView();
        break;
      case 'strategies':
        container.innerHTML = this.renderStrategiesView();
        break;
      case 'practice':
        container.innerHTML = this.renderPracticeView();
        break;
      case 'progress':
        container.innerHTML = this.renderProgressView();
        this.initProgressChart();
        break;
      case 'admin':
        container.innerHTML = this.renderAdminView();
        break;
      default:
        container.innerHTML = this.renderDashboard();
    }

    if (viewName === 'lessons') {
      if (this.currentActivityStep === 'example' && this.currentExampleTab === 2) {
        const view1 = document.getElementById('example-view-1');
        const view2 = document.getElementById('example-view-2');
        const tab1 = document.getElementById('ex-tab-1');
        const tab2 = document.getElementById('ex-tab-2');
        if (view1 && view2 && tab1 && tab2) {
          view1.classList.add('hidden');
          view2.classList.remove('hidden');
          tab2.className = 'px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 cursor-pointer bg-purple-700 text-white shadow-md';
          tab1.className = 'px-4 py-2.5 rounded-xl text-xs font-semibold transition flex items-center space-x-2 cursor-pointer bg-white/80 text-purple-900 hover:bg-white border border-purple-200';
        }
      }
      if (this.currentActivityStep === 'learn' && this.currentLearnPart === 'part2') {
        const p1 = document.getElementById('learn-part-1');
        const p2 = document.getElementById('learn-part-2');
        const tab1 = document.getElementById('learn-tab-1');
        const tab2 = document.getElementById('learn-tab-2');
        if (p1 && p2 && tab1 && tab2) {
          p1.classList.add('hidden');
          p2.classList.remove('hidden');
          tab2.className = 'px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 cursor-pointer bg-purple-700 text-white shadow-md';
          tab1.className = 'px-4 py-2.5 rounded-xl text-xs font-semibold transition flex items-center space-x-2 cursor-pointer bg-white/80 text-purple-900 hover:bg-white border border-purple-200';
        }
      }
    }

    this.sanitizeDOMBrackets(container);
    if (window.lucide) lucide.createIcons();
    if (preserveScroll) {
      window.scrollTo(0, savedScrollY);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /* ------------------- View Renderers ------------------- */

  // 1. Dashboard View
  renderDashboard() {
    return `
      <div class="space-y-6 sm:space-y-8">
        <!-- Welcome Hero (Playful Neo-Brutalist Banner) -->
        <div class="nb-hero relative overflow-hidden p-5 sm:p-8">
          <div class="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div class="max-w-2xl">
              <span class="nb-chip nb-chip-yellow mb-3 inline-flex items-center gap-1">
                <i data-lucide="sparkles" class="w-3 h-3"></i> Course 2031103 &bull; Reading Strategies
              </span>
              <h1 class="nb-display text-3xl sm:text-5xl leading-none mb-3 text-slate-900">
                Hello, <span class="text-[#8B5CF6]">${(this.user.name || '').replace(/[\u0E00-\u0E7F]+/g, '').replace(/[()]/g, '').trim().split(' ')[0] || 'Somsak'}</span> <span class="nb-wave inline-block">👋</span>
              </h1>
              <p class="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 max-w-xl">
                Explore structured reading lessons, master 8 essential reading strategies, and track your study analytics — one fun step at a time.
              </p>
              <div class="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <button onclick="app.navigate('lessons')" class="nb-btn nb-btn-purple">
                  <i data-lucide="play-circle" class="w-4 h-4"></i>
                  <span>Continue Lesson (Unit ${this.currentUnitId})</span>
                </button>
                <button onclick="app.navigate('strategies')" class="nb-btn nb-btn-white">
                  <i data-lucide="lightbulb" class="w-4 h-4"></i>
                  <span>Explore Strategies</span>
                </button>
              </div>
            </div>
            <div class="text-right shrink-0 hidden sm:block">
              <div class="nb-display text-6xl sm:text-7xl leading-none text-slate-900">6</div>
              <div class="text-[11px] font-bold text-slate-700">Reading Units</div>
            </div>
          </div>
          <div class="nb-sticker absolute -right-2 -bottom-3 sm:right-24 sm:bottom-auto sm:top-4 text-4xl select-none pointer-events-none">📚</div>
        </div>

        <!-- 4 Core Navigation Cards matching Blueprint -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div onclick="app.navigate('lessons')" class="glass-card p-4 sm:p-6 cursor-pointer border-t-4 border-purple-700 hover:shadow-md transition">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 text-purple-800 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
              <i data-lucide="book-open" class="w-5 h-5 sm:w-6 sm:h-6"></i>
            </div>
            <h3 class="font-bold text-slate-900 text-base sm:text-lg mb-0.5 sm:mb-1">Reading Lessons</h3>
            <p class="text-[11px] sm:text-xs text-purple-800 font-semibold mb-1.5 sm:mb-2">บทเรียนการอ่าน (Units 1–6)</p>
            <p class="text-slate-600 text-xs leading-relaxed">
              Structured reading lessons covering 4 key learning steps: Overview, Learn, Example, and Practice.
            </p>
          </div>

          <div onclick="app.navigate('strategies')" class="glass-card p-4 sm:p-6 cursor-pointer border-t-4 border-pink-500 hover:shadow-md transition">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 text-pink-700 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
              <i data-lucide="clock" class="w-5 h-5 sm:w-6 sm:h-6"></i>
            </div>
            <h3 class="font-bold text-slate-900 text-base sm:text-lg mb-0.5 sm:mb-1">Reading Strategies</h3>
            <p class="text-[11px] sm:text-xs text-pink-700 font-semibold mb-1.5 sm:mb-2">กลยุทธ์การอ่าน (6 Units &bull; 8 Steps)</p>
            <p class="text-slate-600 text-xs leading-relaxed">
              Master 6 reading strategy units following an 8-step learning sequence from concept to quiz.
            </p>
          </div>

          <div onclick="app.navigate('practice')" class="glass-card p-4 sm:p-6 cursor-pointer border-t-4 border-amber-500 hover:shadow-md transition">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 text-amber-800 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
              <i data-lucide="tv" class="w-5 h-5 sm:w-6 sm:h-6"></i>
            </div>
            <h3 class="font-bold text-slate-900 text-base sm:text-lg mb-0.5 sm:mb-1">Practice & Quiz</h3>
            <p class="text-[11px] sm:text-xs text-amber-800 font-semibold mb-1.5 sm:mb-2">แบบฝึกหัดและแบบทดสอบ</p>
            <p class="text-slate-600 text-xs leading-relaxed">
              Interactive games, unit quizzes, passage comprehension, and immediate feedback engine.
            </p>
          </div>

          <div onclick="app.navigate('progress')" class="glass-card p-4 sm:p-6 cursor-pointer border-t-4 border-emerald-600 hover:shadow-md transition">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 text-emerald-700 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
              <i data-lucide="bar-chart-3" class="w-5 h-5 sm:w-6 sm:h-6"></i>
            </div>
            <h3 class="font-bold text-slate-900 text-base sm:text-lg mb-0.5 sm:mb-1">Learning Progress</h3>
            <p class="text-[11px] sm:text-xs text-emerald-800 font-semibold mb-1.5 sm:mb-2">ความก้าวหน้าในการเรียน</p>
            <p class="text-slate-600 text-xs leading-relaxed">
              Track online hours, completed units, quiz performance, and active usage statistics.
            </p>
          </div>

        </div>

        <!-- Current Progress Summary Banner -->
        <div class="glass-card p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div class="flex items-center space-x-3 sm:space-x-4 w-full md:w-auto">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-purple-100 text-purple-800 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-lg sm:text-xl border border-purple-200 shrink-0">
              5/6
            </div>
            <div>
              <h4 class="font-bold text-slate-900 text-sm sm:text-base">Your Active Progress</h4>
              <p class="text-xs text-slate-600">Total Online Time: <strong class="text-purple-800 font-bold">${this.formatHoursText(this.user.onlineSeconds)}</strong></p>
            </div>
          </div>

          <div class="flex-1 w-full md:max-w-md">
            <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Overall Completion</span>
              <span>83%</span>
            </div>
            <div class="w-full bg-slate-200/80 h-2.5 sm:h-3 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-purple-700 to-pink-500 h-full rounded-full" style="width: 83%"></div>
            </div>
          </div>

          <button onclick="app.navigate('progress')" class="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition cursor-pointer text-center">
            View Full Report
          </button>
        </div>
      </div>
    `;
  }

  // 2. Reading Lessons View
  renderLessonsView() {
    const unit = ReadSkillsData.units.find(u => u.id === this.currentUnitId) || ReadSkillsData.units[0];
    
    // Validate currentStage
    if (!this.currentStage || !['preReading', 'whileReading', 'postReading'].includes(this.currentStage)) {
      this.currentStage = 'preReading';
    }

    // Ensure currentActivityStep belongs to the active stage
    if (this.currentStage === 'preReading' && !['overview', 'learn'].includes(this.currentActivityStep)) {
      this.currentActivityStep = 'overview';
    } else if (this.currentStage === 'whileReading' && !['learn', 'example', 'practice'].includes(this.currentActivityStep)) {
      this.currentActivityStep = 'learn';
    } else if (this.currentStage === 'postReading' && this.currentActivityStep !== 'quiz') {
      this.currentActivityStep = 'quiz';
    }

    let currentTopic;
    if (unit.stages) {
      const stageData = unit.stages[this.currentStage] || unit.stages['preReading'] || Object.values(unit.stages)[0];
      if (stageData && stageData.steps) {
        currentTopic = stageData;
      } else if (stageData && stageData.topics) {
        currentTopic = stageData.topics[this.currentTopicIndex] || stageData.topics[0] || stageData;
      } else {
        currentTopic = stageData || unit;
      }
    } else if (unit.steps) {
      currentTopic = unit;
    } else {
      currentTopic = unit;
    }

    return `
      <div class="space-y-8">
        <!-- Header & Unit Selector -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-bold text-slate-900">Module 1: Reading Lessons (บทเรียนการอ่าน)</h2>
            <p class="text-xs text-slate-600">Structured reading lessons based on Units 1–6</p>
          </div>

          <!-- Unit Selector Tabs -->
          <div class="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 touch-pan-x">
            ${ReadSkillsData.units.map(u => `
              <button onclick="app.selectUnit(${u.id})" class="px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${this.currentUnitId === u.id ? 'bg-purple-700 text-white shadow-md' : 'bg-white/80 text-slate-700 hover:bg-white border border-purple-200'}">
                Unit ${u.id}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Current Unit Information Card -->
        <div class="glass-card p-4 sm:p-6 bg-gradient-to-r from-purple-100/70 to-pink-100/70 border border-purple-200">
          <div class="flex items-center justify-between mb-2">
            <span class="bg-purple-700 text-white text-xs font-bold px-2.5 py-0.5 rounded-md">${unit.code}</span>
            <span class="text-xs font-semibold text-purple-900 bg-purple-200/80 px-3 py-1 rounded-full">CEFR Target: ${unit.cefr}</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-1">${unit.title} (${unit.thaiTitle})</h3>
          <p class="text-xs text-slate-700 leading-relaxed">${unit.description}</p>
        </div>

        <!-- 3 Stage Tabs (Pre-Reading | While-Reading | Post-Reading) -->
        <div class="flex items-center space-x-2 sm:space-x-3 border-b border-purple-200 pb-3 overflow-x-auto no-scrollbar">
          <button onclick="app.selectStage('preReading')" class="px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs transition flex items-center space-x-2 cursor-pointer shrink-0 ${this.currentStage === 'preReading' ? 'stage-tab-active' : 'stage-tab-inactive'}">
            <i data-lucide="compass" class="w-4 h-4"></i>
            <span>Pre-Reading Stage</span>
          </button>
          
          <button onclick="app.selectStage('whileReading')" class="px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs transition flex items-center space-x-2 cursor-pointer shrink-0 ${this.currentStage === 'whileReading' ? 'stage-tab-active' : 'stage-tab-inactive'}">
            <i data-lucide="book-open-check" class="w-4 h-4"></i>
            <span>While-Reading Stage</span>
          </button>
          
          <button onclick="app.selectStage('postReading')" class="px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs transition flex items-center space-x-2 cursor-pointer shrink-0 ${this.currentStage === 'postReading' ? 'stage-tab-active' : 'stage-tab-inactive'}">
            <i data-lucide="check-circle-2" class="w-4 h-4"></i>
            <span>Post-Reading Stage</span>
          </button>
        </div>

        <!-- Contextual Activity Stepper Bar (Approach a) -->
        ${this.renderStepperBar()}

        <!-- Activity Step Content Body -->
        <div class="glass-card p-4 sm:p-6 md:p-8 min-h-[300px]">
          ${this.renderActivityStepContent(currentTopic)}
        </div>

      </div>
    `;
  }

  /* ------------------- Contextual Step Indicator Bar ------------------- */
  renderStepperBar() {
    const stage = this.currentStage;
    let steps = [];

    if (this.currentUnitId === 2) {
      if (stage === 'preReading') {
        steps = [
          { key: 'overview', num: 1, label: 'Overview', sub: 'เป้าหมายและโครงสร้าง' },
          { key: 'learn', num: 2, label: 'Learn (Part 1)', sub: 'รายละเอียด & การสแกน' }
        ];
      } else if (stage === 'whileReading') {
        steps = [
          { key: 'learn', num: 1, label: 'Guided Demo', sub: 'สาธิต Skimming & Scanning' },
          { key: 'example', num: 2, label: 'Highlight & Signals', sub: 'เครื่องมือไฮไลต์ & คำเชื่อม' },
          { key: 'practice', num: 3, label: 'Main Idea Challenge', sub: 'ท้าทายเก็บคะแนน (70%)' }
        ];
      } else if (stage === 'postReading') {
        steps = [
          { key: 'quiz', num: 1, label: 'Quiz (40 ข้อ)', sub: 'แบบทดสอบท้ายบทเรียน' }
        ];
      }
    } else if (this.currentUnitId === 3) {
      if (stage === 'preReading') {
        steps = [
          { key: 'overview', num: 1, label: 'Overview', sub: 'เป้าหมายและโครงสร้าง' },
          { key: 'learn', num: 2, label: 'Learn (Part 1)', sub: 'บริบท 5 แบบ & โครงสร้าง' }
        ];
      } else if (stage === 'whileReading') {
        steps = [
          { key: 'learn', num: 1, label: 'Guided Demo', sub: 'สาธิตบริบท & โครงสร้างประโยค' },
          { key: 'example', num: 2, label: '3-Colour Highlight', sub: 'ฝึกไฮไลต์ 3 สี' },
          { key: 'practice', num: 3, label: 'Context Clue Game', sub: 'เกมเก็บคะแนน (70%)' }
        ];
      } else if (stage === 'postReading') {
        steps = [
          { key: 'quiz', num: 1, label: 'Vocabulary Quiz (40 ข้อ)', sub: 'แบบทดสอบท้ายบท 40 ข้อ' }
        ];
      }
    } else if (this.currentUnitId === 4) {
      if (stage === 'preReading') {
        steps = [
          { key: 'overview', num: 1, label: 'Overview', sub: 'เป้าหมายและโครงสร้าง' },
          { key: 'learn', num: 2, label: 'Learn (Part 1)', sub: 'คำอ้างอิง & คำเชื่อม' }
        ];
      } else if (stage === 'whileReading') {
        steps = [
          { key: 'learn', num: 1, label: 'Guided Demo & Text Map', sub: 'สาธิตวิเคราะห์ & แผนผังเรื่อง' },
          { key: 'example', num: 2, label: '3-Colour Highlight', sub: 'ฝึกไฮไลต์ 3 สี' },
          { key: 'practice', num: 3, label: 'Text Structure Practice', sub: 'ฝึกโครงสร้าง & คำอ้างอิง (70%)' }
        ];
      } else if (stage === 'postReading') {
        steps = [
          { key: 'quiz', num: 1, label: 'Quiz (40 ข้อ)', sub: 'แบบทดสอบโครงสร้างและคำอ้างอิง' }
        ];
      }
    } else if (this.currentUnitId === 5) {
      if (stage === 'preReading') {
        steps = [
          { key: 'overview', num: 1, label: 'Overview', sub: 'เป้าหมายและโครงสร้าง' },
          { key: 'learn', num: 2, label: 'Learn (Part 1)', sub: 'การตีความ & ถอดความ' }
        ];
      } else if (stage === 'whileReading') {
        steps = [
          { key: 'learn', num: 1, label: 'Guided Demo & Paraphrase', sub: 'สาธิตตีความ & ถอดความ' },
          { key: 'example', num: 2, label: 'Interactive Highlight', sub: 'ฝึกแยกสี Stated vs Clues' },
          { key: 'practice', num: 3, label: 'Detective & Paraphrase', sub: 'ฝึกตีความ & ถอดความ (70%)' }
        ];
      } else if (stage === 'postReading') {
        steps = [
          { key: 'quiz', num: 1, label: 'Quiz (40 ข้อ)', sub: 'แบบทดสอบการตีความและถอดความ' }
        ];
      }
    } else if (this.currentUnitId === 6) {
      if (stage === 'preReading') {
        steps = [
          { key: 'overview', num: 1, label: 'Overview', sub: 'เป้าหมายและโครงสร้าง' },
          { key: 'learn', num: 2, label: 'Learn (Part 1)', sub: 'ทบทวน 5 กลยุทธ์ & ควิซ' }
        ];
      } else if (stage === 'whileReading') {
        steps = [
          { key: 'learn', num: 1, label: 'Guided Reading Demo', sub: 'สาธิตบูรณาการ 5 กลยุทธ์' },
          { key: 'example', num: 2, label: '5-Colour Annotation', sub: 'ฝึกไฮไลต์ดิจิทัล 5 สี' },
          { key: 'practice', num: 3, label: 'Units 1–5 Review Challenge', sub: 'แบบฝึกทบทวนบูรณาการ (70%)' }
        ];
      } else if (stage === 'postReading') {
        steps = [
          { key: 'quiz', num: 1, label: 'Cumulative Quiz (40 ข้อ)', sub: 'แบบทดสอบรวบยอด Units 1–5' }
        ];
      }
    } else {
      if (stage === 'preReading') {
        steps = [
          { key: 'overview', num: 1, label: 'Overview', sub: 'เป้าหมายและโครงสร้าง' },
          { key: 'learn', num: 2, label: 'Learn (Part 1)', sub: 'กลยุทธ์ก่อนการอ่าน' }
        ];
      } else if (stage === 'whileReading') {
        steps = [
          { key: 'learn', num: 1, label: 'Learn (Part 2)', sub: 'ใจความสำคัญ & ประโยคหลัก' },
          { key: 'example', num: 2, label: 'Example', sub: 'บทอ่านตัวอย่าง & คำศัพท์' },
          { key: 'practice', num: 3, label: 'Practice', sub: 'แบบฝึกหัดทบทวน' }
        ];
      } else if (stage === 'postReading') {
        steps = [
          { key: 'quiz', num: 1, label: 'Quiz (40 ข้อ)', sub: 'แบบทดสอบวัดผล 4 บทความ' }
        ];
      }
    }

    return `
      <div class="glass-card p-3 sm:p-4 overflow-x-auto no-scrollbar">
        <div class="flex items-center justify-center space-x-3 sm:space-x-8 max-w-2xl mx-auto text-xs font-medium">
          ${steps.map((st, i) => {
            const isActive = this.currentActivityStep === st.key;
            return `
              ${i > 0 ? '<div class="h-0.5 w-6 sm:w-12 md:w-16 bg-purple-200 shrink-0"></div>' : ''}
              <button onclick="app.selectActivityStep('${st.key}')" class="flex flex-col items-center space-y-1 cursor-pointer shrink-0 ${isActive ? 'text-purple-900 font-bold' : 'text-slate-500 hover:text-slate-800'}">
                <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs transition ${isActive ? 'bg-purple-700 text-white ring-4 ring-purple-200 shadow-md font-bold' : 'bg-slate-200/80 text-slate-700 font-semibold'}">${st.num}</div>
                <span class="text-[11px] sm:text-xs font-semibold whitespace-nowrap">${st.label}</span>
                <span class="text-[9px] text-slate-400 hidden sm:block">${st.sub}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  formatAnnotatedExample(raw) {
    if (!raw) return '<p class="text-slate-500 italic">No example provided.</p>';
    if (typeof raw !== 'string') return raw;
    if (raw.trim().startsWith('<div') || raw.trim().startsWith('<article') || raw.trim().startsWith('<table')) {
      return raw;
    }

    setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 30);

    const rawLines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    let title = '';
    const items = [];

    const getTagStyle = (tagName) => {
      const t = (tagName || '').toLowerCase();
      if (t.includes('topic') || t.includes('ts')) {
        return {
          icon: 'bookmark',
          badge: 'bg-emerald-600 text-white',
          border: 'border-l-4 border-emerald-500',
          hlClass: 'highlighter-pen highlighter-green'
        };
      }
      if (t.includes('supporting') || t.includes('sd') || t.includes('detail')) {
        return {
          icon: 'layers',
          badge: 'bg-sky-600 text-white',
          border: 'border-l-4 border-sky-500',
          hlClass: 'highlighter-pen highlighter-blue'
        };
      }
      if (t.includes('conclud') || t.includes('climax') || t.includes('moral')) {
        return {
          icon: 'flag',
          badge: 'bg-rose-600 text-white',
          border: 'border-l-4 border-rose-500',
          hlClass: 'highlighter-pen highlighter-pink'
        };
      }
      if (t.includes('head') || t.includes('title')) {
        return {
          icon: 'heading',
          badge: 'bg-purple-600 text-white',
          border: 'border-l-4 border-purple-500',
          hlClass: 'highlighter-pen highlighter-purple'
        };
      }
      if (t.includes('visual') || t.includes('photo') || t.includes('image')) {
        return {
          icon: 'image',
          badge: 'bg-amber-600 text-white',
          border: 'border-l-4 border-amber-500',
          hlClass: 'highlighter-pen highlighter-orange'
        };
      }
      if (t.includes('bold') || t.includes('word') || t.includes('vocab')) {
        return {
          icon: 'type',
          badge: 'bg-teal-600 text-white',
          border: 'border-l-4 border-teal-500',
          hlClass: 'highlighter-pen highlighter-teal'
        };
      }
      if (t.includes('predict') || t.includes('formulat')) {
        return {
          icon: 'sparkles',
          badge: 'bg-indigo-600 text-white',
          border: 'border-l-4 border-indigo-500',
          hlClass: 'highlighter-pen highlighter-yellow'
        };
      }
      if (t.includes('verif') || t.includes('confirm')) {
        return {
          icon: 'check-circle',
          badge: 'bg-emerald-600 text-white',
          border: 'border-l-4 border-emerald-500',
          hlClass: 'highlighter-pen highlighter-green'
        };
      }
      if (t.includes('excellent') || t.includes('score 4') || t.includes('good')) {
        return {
          icon: 'star',
          badge: 'bg-emerald-700 text-white',
          border: 'border-l-4 border-emerald-600',
          hlClass: 'highlighter-pen highlighter-green'
        };
      }
      if (t.includes('weak') || t.includes('score 1') || t.includes('flaw') || t.includes('error')) {
        return {
          icon: 'alert-triangle',
          badge: 'bg-rose-600 text-white',
          border: 'border-l-4 border-rose-500',
          hlClass: 'highlighter-pen highlighter-pink'
        };
      }
      return {
        icon: 'tag',
        badge: 'bg-purple-700 text-white',
        border: 'border-l-4 border-purple-500',
        hlClass: 'highlighter-pen highlighter-yellow'
      };
    };

    rawLines.forEach((line, idx) => {
      if (idx === 0 && (line.endsWith(':') || (!line.startsWith('•') && !line.startsWith('-') && !line.startsWith('[')))) {
        title = line.replace(/:$/, '');
        return;
      }

      let cleaned = line.replace(/^[•\-\*]\s*/, '').trim();
      const tagMatch = cleaned.match(/^\[(.*?)\]:?\s*(.*)$/) || cleaned.match(/^([^:]{2,65}):\s+(.+)$/);

      if (tagMatch) {
        const tagName = tagMatch[1];
        let body = tagMatch[2];
        const style = getTagStyle(tagName);

        let parenthetical = '';
        const parenMatch = body.match(/\s*(\([A-Za-z0-9\s:;,\.\-—\/]+\))\s*$/);
        if (parenMatch) {
          parenthetical = parenMatch[1];
          body = body.slice(0, parenMatch.index).trim();
        }

        let highlightedBody = body.replace(/'([^']+)'/g, `<span class="${style.hlClass}">“$1”</span>`);

        items.push({
          tagName,
          style,
          body: highlightedBody,
          parenthetical
        });
      } else {
        let inlineStyled = cleaned.replace(/\[(.*?)\]/g, (match, p1) => {
          const s = getTagStyle(p1);
          return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded ${s.badge} text-[11px] font-bold shadow-2xs mx-1"><i data-lucide="${s.icon}" class="w-3 h-3"></i>${p1}</span>`;
        });
        inlineStyled = inlineStyled.replace(/'([^']+)'/g, '<span class="highlighter-pen highlighter-yellow">“$1”</span>');
        items.push({
          tagName: null,
          style: getTagStyle(''),
          body: inlineStyled,
          parenthetical: ''
        });
      }
    });

    return `
      <div class="space-y-4">
        ${title ? `
          <div class="flex items-center justify-between pb-3 border-b border-amber-200/80">
            <div class="flex items-center space-x-2 text-amber-950 font-bold text-sm">
              <i data-lucide="highlighter" class="w-4 h-4 text-amber-700"></i>
              <span>${title}</span>
            </div>
            <span class="inline-flex items-center gap-1 text-[11px] font-medium text-amber-800 bg-amber-200/60 px-2.5 py-0.5 rounded-full">
              <i data-lucide="sparkles" class="w-3 h-3 text-amber-700"></i>
              <span>Highlighter Notes</span>
            </span>
          </div>
        ` : ''}

        <div class="space-y-3">
          ${items.map(item => `
            <div class="p-3.5 bg-white/95 rounded-xl ${item.style.border} shadow-xs space-y-1.5 transition hover:shadow-sm">
              ${item.tagName ? `
                <div class="flex items-center space-x-2">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md ${item.style.badge} font-bold text-xs shadow-2xs tracking-wide">
                    <i data-lucide="${item.style.icon}" class="w-3.5 h-3.5"></i>
                    <span>${item.tagName}</span>
                  </span>
                </div>
              ` : ''}
              <div class="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans pl-0.5">
                ${item.body}
              </div>
              ${item.parenthetical ? `
                <div class="text-[11px] text-slate-500 italic pl-1 flex items-center space-x-1 pt-0.5">
                  <i data-lucide="info" class="w-3 h-3 text-slate-400 shrink-0"></i>
                  <span>${item.parenthetical}</span>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderActivityStepContent(topic) {
    const s = topic.steps || topic;
    const currentStep = this.currentActivityStep;

    if (currentStep === 'quiz') {
      if (this.currentUnitId === 1 || this.currentUnitId === 2 || this.currentUnitId === 3 || this.currentUnitId === 4 || this.currentUnitId === 5 || this.currentUnitId === 6) {
        return this.renderQuizStep();
      }
      if (s && s.quiz && typeof s.quiz === 'string' && s.quiz.trim().startsWith('<div')) {
        setTimeout(() => {
          if (window.lucide) lucide.createIcons();
          this.updateUnit2SummaryDashboard();
          if (this.updateUnit3SummaryDashboard) this.updateUnit3SummaryDashboard();
        }, 30);
        return s.quiz;
      }
      const q = s.quiz;
      if (q) {
        return `
          <div class="space-y-6">
            <div class="flex items-center justify-between border-b border-purple-100 pb-3">
              <div>
                <h4 class="text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <i data-lucide="check-circle" class="w-5 h-5 text-purple-700"></i>
                  <span>Post-Reading Stage: Assessment Quiz</span>
                </h4>
                <p class="text-xs text-slate-500 mt-0.5">Test your reading comprehension and strategy mastery</p>
              </div>
              <span class="text-xs font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">Unit ${this.currentUnitId} Post-Reading</span>
            </div>

            <div class="p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-4">
              <h5 class="text-sm font-bold text-slate-900">${q.question || 'Post-Reading Quiz Question'}</h5>
              <div class="space-y-2">
                ${(q.options || []).map((opt, idx) => `
                  <button onclick="app.submitPracticeAnswer(${idx}, ${q.answer}, '${encodeURIComponent(q.explanation || '')}')" class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-purple-50/50 transition text-xs font-medium flex items-center space-x-3 cursor-pointer">
                    <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">${String.fromCharCode(65 + idx)}</span>
                    <span>${opt}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4 border-t border-purple-100">
              <button onclick="app.selectStageAndStep('whileReading', 'practice')" class="w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center">
                ⬅ Back: While-Reading Practice
              </button>
              <button onclick="app.selectStageAndStep('preReading', 'overview')" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-1.5 shadow-md">
                <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
                <span>Review Unit from Start ↺</span>
              </button>
            </div>
          </div>
        `;
      }
    }

    if (s && s[currentStep] && typeof s[currentStep] === 'string' && s[currentStep].trim().startsWith('<div')) {
      setTimeout(() => {
        if (window.lucide) lucide.createIcons();
        if (this.currentUnitId === 6 && this.updateUnit6SummaryDashboard) {
          this.updateUnit6SummaryDashboard();
        }
      }, 30);
      return s[currentStep];
    }

    switch (currentStep) {
      case 'overview':
        return `
          <div class="space-y-4">
            <h4 class="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <i data-lucide="info" class="w-5 h-5 text-purple-700"></i>
              <span>Pre-Reading Stage Overview: ${topic.title || topic.topic || ''}</span>
            </h4>
            <p class="text-sm text-slate-700 leading-relaxed">${s.overview || 'Overview details.'}</p>
            <div class="bg-purple-100/80 p-4 rounded-xl text-xs text-purple-900 border border-purple-200">
              💡 <strong>Instructional Objective:</strong> Master reading strategies and activate prior knowledge before reading.
            </div>
            <div class="pt-2">
              <button onclick="app.selectActivityStep('learn')" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer text-center flex items-center justify-center space-x-2 shadow-md">
                <span>Next Step: Learn (Part 1)</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `;

      case 'learn':
        const isPre = this.currentStage === 'preReading';
        return `
          <div class="space-y-6">
            <h4 class="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <i data-lucide="book-open" class="w-5 h-5 text-purple-700"></i>
              <span>${isPre ? 'Pre-Reading Strategies (Part 1)' : 'While-Reading Core Lesson (Part 2)'}</span>
            </h4>
            
            <p class="text-sm text-slate-700 leading-relaxed">${s.learn || ''}</p>

            ${(s.passage || s.audioText) ? `
            <!-- Passage Box with Audio Player -->
            <div class="bg-slate-900 text-slate-100 p-4 sm:p-6 rounded-2xl space-y-4 relative shadow-lg">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700 pb-3">
                <span class="text-xs font-semibold text-purple-300 uppercase tracking-wider">Reading Passage (Unit ${this.currentUnitId})</span>
                
                <div class="flex items-center space-x-2">
                  <!-- Audio Speed Control -->
                  <div class="flex items-center space-x-1.5 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5" title="Playback Speed (ความเร็วเสียงอ่าน)">
                    <i data-lucide="gauge" class="w-3.5 h-3.5 text-purple-300 shrink-0"></i>
                    <select onchange="app.setAudioSpeed(this.value)" class="bg-transparent text-purple-200 text-xs font-semibold focus:outline-none cursor-pointer">
                      <option value="0.65" ${this.audioSpeed === 0.65 ? 'selected' : ''} class="bg-slate-900 text-white">0.65x (ช้ามาก)</option>
                      <option value="0.75" ${this.audioSpeed === 0.75 ? 'selected' : ''} class="bg-slate-900 text-white">0.75x (ช้าชัดเจน ✨)</option>
                      <option value="0.85" ${this.audioSpeed === 0.85 ? 'selected' : ''} class="bg-slate-900 text-white">0.85x (ปานกลาง)</option>
                      <option value="1.0" ${this.audioSpeed === 1.0 ? 'selected' : ''} class="bg-slate-900 text-white">1.0x (ปกติ)</option>
                    </select>
                  </div>

                  <button onclick="app.togglePassageAudio('${encodeURIComponent(s.audioText || s.passage || '')}')" class="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold rounded-lg flex items-center space-x-2 transition cursor-pointer ${this.isAudioPlaying ? 'audio-playing' : ''}">
                    <i data-lucide="${this.isAudioPlaying ? 'square' : 'volume-2'}" class="w-4 h-4"></i>
                    <span>${this.isAudioPlaying ? 'Stop Audio' : 'Listen Passage'}</span>
                  </button>
                </div>
              </div>

              <p class="text-sm italic leading-relaxed text-slate-200">
                "${s.passage || ''}"
              </p>
            </div>
            ` : ''}

            <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4 border-t border-purple-100">
              ${isPre ? `
                <button onclick="app.selectActivityStep('overview')" class="w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center">
                  ⬅ Back: Overview
                </button>
                <button onclick="app.selectStageAndStep('whileReading', 'learn')" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-1.5 shadow-md">
                  <span>Next: While-Reading Stage</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
              ` : `
                <button onclick="app.selectStageAndStep('preReading', 'learn')" class="w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center">
                  ⬅ Back: Pre-Reading
                </button>
                <button onclick="app.selectActivityStep('example')" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-1.5 shadow-md">
                  <span>Next Step: Example</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
              `}
            </div>
          </div>
        `;

      case 'example':
        return `
          <div class="space-y-4">
            <h4 class="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <i data-lucide="sparkles" class="w-5 h-5 text-amber-600"></i>
              <span>Annotated Worked Example</span>
            </h4>
            <div class="bg-amber-50/90 border border-amber-200 p-4 sm:p-5 rounded-2xl text-slate-900 text-sm shadow-xs">
              ${this.formatAnnotatedExample(s.example)}
            </div>
            <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4 border-t border-purple-100">
              <button onclick="app.selectActivityStep('learn')" class="w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center">
                ⬅ Back: Learn
              </button>
              <button onclick="app.selectActivityStep('practice')" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-1.5 shadow-md">
                <span>Next Step: Practice</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `;

      case 'practice':
        const prac = s.practice || { question: "Sample question?", options: ["Option A", "Option B"], answer: 0, explanation: "Details" };
        return `
          <div class="space-y-6">
            <h4 class="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <i data-lucide="help-circle" class="w-5 h-5 text-purple-700"></i>
              <span>Guided Practice Exercise</span>
            </h4>

            <p class="text-sm font-semibold text-slate-900">${prac.question || 'Practice Question'}</p>

            <div class="space-y-3">
              ${(prac.options || []).map((opt, idx) => `
                <button onclick="app.submitPracticeAnswer(${idx}, ${prac.answer}, '${encodeURIComponent(prac.explanation || '')}')" class="w-full text-left p-4 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-white transition text-sm font-medium">
                  ${String.fromCharCode(65 + idx)}. ${opt}
                </button>
              `).join('')}
            </div>

            <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4 border-t border-purple-100">
              <button onclick="app.selectActivityStep('example')" class="w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center">
                ⬅ Back: Example
              </button>
              <button onclick="app.selectStageAndStep('postReading', 'quiz')" class="w-full sm:w-auto px-6 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-1.5 shadow-md">
                <span>Next Step: Post-Reading Quiz</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `;
    }
  }

  selectUnit(id) {
    this.currentUnitId = id;
    this.currentStage = 'preReading';
    this.currentTopicIndex = 0;
    this.currentActivityStep = 'overview';
    this.currentExampleTab = 1;
    this.currentLearnPart = 'part1';
    this.navigate('lessons');
  }

  selectStage(stageKey, stepKey) {
    this.currentStage = stageKey;
    this.currentTopicIndex = 0;
    if (stepKey) {
      this.currentActivityStep = stepKey;
    } else {
      if (stageKey === 'preReading') {
        this.currentActivityStep = 'overview';
      } else if (stageKey === 'whileReading') {
        this.currentActivityStep = 'learn';
      } else if (stageKey === 'postReading') {
        this.currentActivityStep = 'quiz';
      } else {
        this.currentActivityStep = 'overview';
      }
    }
    this.navigate('lessons');
  }

  selectStageAndStep(stageKey, stepKey) {
    this.selectStage(stageKey, stepKey);
  }

  selectActivityStep(stepKey) {
    this.currentActivityStep = stepKey;
    if (stepKey === 'overview' && this.currentStage !== 'preReading') {
      this.currentStage = 'preReading';
    } else if (stepKey === 'quiz' && this.currentStage !== 'postReading') {
      this.currentStage = 'postReading';
    } else if ((stepKey === 'example' || stepKey === 'practice') && this.currentStage !== 'whileReading') {
      this.currentStage = 'whileReading';
    }
    this.navigate('lessons');
  }

  switchLearnPart(partId) {
    this.currentLearnPart = partId;
    const p1 = document.getElementById('learn-part-1');
    const p2 = document.getElementById('learn-part-2');
    const tab1 = document.getElementById('learn-tab-1');
    const tab2 = document.getElementById('learn-tab-2');
    if (!p1 || !p2 || !tab1 || !tab2) return;
    
    if (partId === 'part1') {
      p1.classList.remove('hidden');
      p2.classList.add('hidden');
      tab1.className = 'px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 cursor-pointer bg-purple-700 text-white shadow-md';
      tab2.className = 'px-4 py-2.5 rounded-xl text-xs font-semibold transition flex items-center space-x-2 cursor-pointer bg-white/80 text-purple-900 hover:bg-white border border-purple-200';
    } else {
      p1.classList.add('hidden');
      p2.classList.remove('hidden');
      tab2.className = 'px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 cursor-pointer bg-purple-700 text-white shadow-md';
      tab1.className = 'px-4 py-2.5 rounded-xl text-xs font-semibold transition flex items-center space-x-2 cursor-pointer bg-white/80 text-purple-900 hover:bg-white border border-purple-200';
    }
    if (window.lucide) lucide.createIcons();
    const target = document.getElementById('learn-content-top');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  switchExampleTab(tabIndex) {
    this.currentExampleTab = tabIndex;
    const view1 = document.getElementById('example-view-1');
    const view2 = document.getElementById('example-view-2');
    const tab1 = document.getElementById('ex-tab-1');
    const tab2 = document.getElementById('ex-tab-2');
    if (!view1 || !view2 || !tab1 || !tab2) return;

    if (tabIndex === 1) {
      view1.classList.remove('hidden');
      view2.classList.add('hidden');
      tab1.className = 'px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 cursor-pointer bg-purple-700 text-white shadow-md';
      tab2.className = 'px-4 py-2.5 rounded-xl text-xs font-semibold transition flex items-center space-x-2 cursor-pointer bg-white/80 text-purple-900 hover:bg-white border border-purple-200';
    } else {
      view1.classList.add('hidden');
      view2.classList.remove('hidden');
      tab2.className = 'px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 cursor-pointer bg-purple-700 text-white shadow-md';
      tab1.className = 'px-4 py-2.5 rounded-xl text-xs font-semibold transition flex items-center space-x-2 cursor-pointer bg-white/80 text-purple-900 hover:bg-white border border-purple-200';
    }
    if (window.lucide) lucide.createIcons();
    const target = document.getElementById('example-content-top');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /* ------------------- Graded Quiz Engine (40 Questions — Units 1, 2 & 3) ------------------- */
  getActiveUnitQuizContext() {
    if (this.currentUnitId === 2) {
      return {
        unitId: 2,
        quizData: ReadSkillsData.unit2Quiz,
        state: this.unit2QuizState,
        storageKey: 'bru_unit2_quiz_score',
        cefrLabel: 'CEFR Target: A2-B1 Level',
        unitTitle: 'Unit 2 Assessment Results (ผลคะแนนแบบทดสอบ 40 ข้อ)',
        unitSub: 'คะแนนแบบทดสอบรายละเอียดสนับสนุน ความสัมพันธ์ทางความคิด และการสแกน Unit 2 (40 ข้อ • Indicator 3.3)',
        passMsg: 'ยอดเยี่ยมมากครับ! คุณสามารถแยกแยะ Major/Minor Details, วิเคราะห์ Signal Words และใช้ Skimming/Scanning ได้ผ่านเกณฑ์ Indicator 3.3 (&ge; 70%)'
      };
    }
    if (this.currentUnitId === 3) {
      return {
        unitId: 3,
        quizData: ReadSkillsData.unit3Quiz,
        state: this.unit3QuizState,
        storageKey: 'bru_unit3_quiz_score',
        cefrLabel: 'CEFR Target: A2-B1 Level',
        unitTitle: 'Unit 3 Practice Results (ผลคะแนนแบบทดสอบคำศัพท์และประโยค 40 ข้อ)',
        unitSub: 'คะแนนแบบทดสอบวัดผลคำศัพท์ในบริบทและความหมายของประโยค Unit 3 (40 ข้อ • Indicator 3.3)',
        passMsg: 'ยอดเยี่ยมมากครับ! คุณสามารถใช้ Context Clues ถอดรหัสคำศัพท์และวิเคราะห์โครงสร้างประโยคซับซ้อนได้ผ่านเกณฑ์ Indicator 3.3 (&ge; 70%)'
      };
    }
    if (this.currentUnitId === 4) {
      return {
        unitId: 4,
        quizData: ReadSkillsData.unit4Quiz,
        state: this.unit4QuizState,
        storageKey: 'bru_unit4_quiz_score',
        cefrLabel: 'CEFR Target: B1 Level (Level 4)',
        unitTitle: 'Unit 4 Assessment Results (ผลคะแนนแบบทดสอบคำอ้างอิง คำเชื่อม และโครงสร้าง 40 ข้อ)',
        unitSub: 'คะแนนแบบทดสอบวัดผลการแกะรอยคำอ้างอิง คำเชื่อม และโครงสร้างบทอ่าน Unit 4 (40 ข้อ • Indicator 3.3)',
        passMsg: 'ยอดเยี่ยมมากครับ! คุณสามารถแกะรอย Reference Words, วิเคราะห์ Connectives และจำแนก Text Organization Patterns ได้ผ่านเกณฑ์ Indicator 3.3 (&ge; 70%)'
      };
    }
    if (this.currentUnitId === 5) {
      return {
        unitId: 5,
        quizData: ReadSkillsData.unit5Quiz,
        state: this.unit5QuizState,
        storageKey: 'bru_unit5_quiz_score',
        cefrLabel: 'CEFR Target: B1 Level (Level 5)',
        unitTitle: 'Unit 5 Assessment Results (ผลคะแนนแบบทดสอบการตีความและถอดความ 40 ข้อ)',
        unitSub: 'คะแนนแบบทดสอบวัดผลการตีความหมายโดยนัยและการถอดความ Unit 5 (40 ข้อ • Indicator 3.3)',
        passMsg: 'ยอดเยี่ยมมากครับ! คุณสามารถตีความหมายโดยนัยจากคำใบ้ (Making Inferences) และถอดความประโยคด้วยภาษาของตนเอง (Paraphrasing) ได้ผ่านเกณฑ์ Indicator 3.3 (&ge; 70%)'
      };
    }
    if (this.currentUnitId === 6) {
      return {
        unitId: 6,
        quizData: ReadSkillsData.unit6Quiz,
        state: this.unit6QuizState,
        storageKey: 'bru_unit6_quiz_score',
        cefrLabel: 'CEFR Target: B1 Level (Level 5 — Integrated Units 1–5)',
        unitTitle: 'Unit 6 Cumulative Assessment Results (ผลคะแนนแบบทดสอบรวบยอด 40 ข้อ)',
        unitSub: 'คะแนนแบบทดสอบวัดผลการบูรณาการกลยุทธ์การอ่านทั้ง 5 ด้าน Unit 6 (40 ข้อ • Indicator 3.3)',
        passMsg: 'ยอดเยี่ยมมากครับ! คุณสามารถบูรณาการกลยุทธ์การอ่านครบทั้ง 5 บท (Main Idea, Details/Scanning, Context Clues, Text Structure/References และ Inferences/Paraphrasing) ได้ผ่านเกณฑ์ Indicator 3.3 (&ge; 70%)'
      };
    }
    return {
      unitId: 1,
      quizData: ReadSkillsData.unit1Quiz,
      state: this.unit1QuizState,
      storageKey: 'bru_unit1_quiz_score',
      cefrLabel: 'CEFR Target: A1-A2 Level',
      unitTitle: 'Unit 1 Practice Results (ผลคะแนนแบบฝึกหัด 40 ข้อ)',
      unitSub: 'คะแนนแบบฝึกหัดพัฒนาทักษะการอ่าน Unit 1 (ใจความสำคัญ 40 ข้อ)',
      passMsg: 'ยอดเยี่ยมมากครับ! คุณสามารถระบุใจความสำคัญ ประโยคหลัก รายละเอียดสนับสนุน และคำศัพท์ได้ถูกต้องแม่นยำตามเกณฑ์ CEFR A2'
    };
  }

  renderQuizStep() {
    setTimeout(() => {
      if (window.lucide) lucide.createIcons();
      if (this.currentUnitId === 2 && this.updateUnit2SummaryDashboard) {
        this.updateUnit2SummaryDashboard();
      }
      if (this.currentUnitId === 3 && this.updateUnit3SummaryDashboard) {
        this.updateUnit3SummaryDashboard();
      }
      if (this.currentUnitId === 4 && this.updateUnit4SummaryDashboard) {
        this.updateUnit4SummaryDashboard();
      }
      if (this.currentUnitId === 5 && this.updateUnit5SummaryDashboard) {
        this.updateUnit5SummaryDashboard();
      }
      if (this.currentUnitId === 6 && this.updateUnit6SummaryDashboard) {
        this.updateUnit6SummaryDashboard();
      }
    }, 30);

    const ctx = this.getActiveUnitQuizContext();
    const quizData = ctx.quizData;
    if (!quizData) {
      return '<div class="p-6 text-center text-slate-500">Quiz data not found.</div>';
    }

    const state = ctx.state;

    // Extra In-Class Cards & Wrap-Up Footer for Unit 2, Unit 3, Unit 4, Unit 5 & Unit 6
    let unit3TopCards = '';
    if (ctx.unitId === 2) {
      unit3TopCards = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
          <div class="p-3.5 bg-purple-100/70 border border-purple-200 rounded-2xl space-y-1">
            <div class="flex items-center space-x-2 text-purple-950 font-bold">
              <i data-lucide="layout-grid" class="w-4 h-4 text-purple-700"></i>
              <span>In-class activity: Group Graphic Organizer</span>
            </div>
            <p class="text-purple-900 leading-relaxed">
              <strong>Group Activity:</strong> แบ่งกลุ่มสร้างผังลำดับความคิด (Hierarchical Tree Diagram) เพื่อเชื่อมโยง Main Idea, Major Supporting Details และ Minor Details
            </p>
          </div>
          <div class="p-3.5 bg-indigo-100/70 border border-indigo-200 rounded-2xl space-y-1">
            <div class="flex items-center space-x-2 text-indigo-950 font-bold">
              <i data-lucide="presentation" class="w-4 h-4 text-indigo-700"></i>
              <span>In-class activity: Group Presentation</span>
            </div>
            <p class="text-indigo-900 leading-relaxed">
              <strong>Group Presentation:</strong> แต่ละกลุ่มส่งตัวแทนนำเสนอผังความคิดหน้าชั้นเรียน โดยเน้นชี้แจงความสัมพันธ์ระหว่างความคิด (Cause/Effect, Contrast, Sequence)
            </p>
          </div>
        </div>
      `;
    } else if (ctx.unitId === 3) {
      unit3TopCards = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
          <div class="p-3.5 bg-purple-100/70 border border-purple-200 rounded-2xl space-y-1">
            <div class="flex items-center space-x-2 text-purple-950 font-bold">
              <i data-lucide="search" class="w-4 h-4 text-purple-700"></i>
              <span>In-class activity: Vocabulary Detective</span>
            </div>
            <p class="text-purple-900 leading-relaxed">
              <strong>Group Activity:</strong> นักศึกษาทำงานกลุ่มย่อยทำใบงาน Vocabulary Detective เพื่อระบุคำศัพท์ใหม่ ชนิดของ Context Clues ความหมาย และใจความหลักของประโยค
            </p>
          </div>
          <div class="p-3.5 bg-indigo-100/70 border border-indigo-200 rounded-2xl space-y-1">
            <div class="flex items-center space-x-2 text-indigo-950 font-bold">
              <i data-lucide="message-square" class="w-4 h-4 text-indigo-700"></i>
              <span>In-class activity: Group Discussion</span>
            </div>
            <p class="text-indigo-900 leading-relaxed">
              <strong>Group Presentation:</strong> แต่ละกลุ่มนำเสนอคำตอบและอธิบายวิธีใช้ Context Clues ถอดรหัสคำศัพท์และวิเคราะห์ความหมายประโยคหน้าชั้นเรียน
            </p>
          </div>
        </div>
      `;
    } else if (ctx.unitId === 4) {
      unit3TopCards = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
          <div class="p-3.5 bg-purple-100/70 border border-purple-200 rounded-2xl space-y-1">
            <div class="flex items-center space-x-2 text-purple-950 font-bold">
              <i data-lucide="git-merge" class="w-4 h-4 text-purple-700"></i>
              <span>In-class activity: Group Text Mapping</span>
            </div>
            <p class="text-purple-900 leading-relaxed">
              <strong>Group Activity:</strong> นักศึกษาทำงานกลุ่มย่อยเพื่อวาดผังโครงสร้างบทอ่าน (Text Map / Graphic Organizer) แสดงการเชื่อมโยงความคิด คำเชื่อม และคำอ้างอิงสำคัญในบทอ่าน
            </p>
          </div>
          <div class="p-3.5 bg-indigo-100/70 border border-indigo-200 rounded-2xl space-y-1">
            <div class="flex items-center space-x-2 text-indigo-950 font-bold">
              <i data-lucide="presentation" class="w-4 h-4 text-indigo-700"></i>
              <span>In-class activity: Group Presentation</span>
            </div>
            <p class="text-indigo-900 leading-relaxed">
              <strong>Group Presentation:</strong> ตัวแทนกลุ่มนำเสนอแผนผัง Text Map หน้าชั้นเรียน พร้อมอธิบายรูปแบบการจัดระเบียบเนื้อหา (Sequence, Compare-Contrast, Cause-Effect, Problem-Solution)
            </p>
          </div>
        </div>
      `;
    } else if (ctx.unitId === 5) {
      unit3TopCards = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
          <div class="p-3.5 bg-purple-100/70 border border-purple-200 rounded-2xl space-y-1">
            <div class="flex items-center space-x-2 text-purple-950 font-bold">
              <i data-lucide="search-check" class="w-4 h-4 text-purple-700"></i>
              <span>In-class activity: Group Inference & Paraphrase Task</span>
            </div>
            <p class="text-purple-900 leading-relaxed">
              <strong>Group Activity:</strong> แบ่งกลุ่มทำ 2 ภารกิจ: <strong>Task 1</strong> เขียนข้อสรุปเชิงอนุมาน (Logical Inferences) 2 ข้อพร้อมระบุหลักฐานจากบทอ่าน และ <strong>Task 2</strong> ถอดความย่อหน้าสั้นๆ ด้วยภาษาของกลุ่มตนเองโดยคงความหมายเดิม
            </p>
          </div>
          <div class="p-3.5 bg-indigo-100/70 border border-indigo-200 rounded-2xl space-y-1">
            <div class="flex items-center space-x-2 text-indigo-950 font-bold">
              <i data-lucide="users" class="w-4 h-4 text-indigo-700"></i>
              <span>In-class activity: Peer Review & Rubric Check</span>
            </div>
            <p class="text-indigo-900 leading-relaxed">
              <strong>Peer Review:</strong> แลกเปลี่ยนผลงานกับกลุ่มเพื่อนเพื่อตรวจสอบความสมเหตุสมผลของ Inferences และคุณภาพการ Paraphrase ตามเกณฑ์ 4 ด้าน (Evidence Extraction, Logical Deduction, Semantic Accuracy, Structural Originality)
            </p>
          </div>
        </div>
      `;
    } else if (ctx.unitId === 6) {
      unit3TopCards = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
          <div class="p-3.5 bg-purple-100/70 border border-purple-200 rounded-2xl space-y-1">
            <div class="flex items-center space-x-2 text-purple-950 font-bold">
              <i data-lucide="compass" class="w-4 h-4 text-purple-700"></i>
              <span>In-class activity: Reading Strategy Blueprint</span>
            </div>
            <p class="text-purple-900 leading-relaxed">
              <strong>Group Activity:</strong> นักศึกษาทำงานกลุ่มย่อยสร้างโปสเตอร์ <strong>“My Reading Strategy Blueprint”</strong> สรุปขั้นตอนการอ่านตั้งแต่ก่อนอ่าน ระหว่างอ่าน และหลังอ่าน พร้อมยกตัวอย่างการนำกลยุทธ์ทั้ง 5 ด้านไปใช้จริง
            </p>
          </div>
          <div class="p-3.5 bg-indigo-100/70 border border-indigo-200 rounded-2xl space-y-1">
            <div class="flex items-center space-x-2 text-indigo-950 font-bold">
              <i data-lucide="award" class="w-4 h-4 text-indigo-700"></i>
              <span>In-class activity: Gallery Walk & Peer Voting</span>
            </div>
            <p class="text-indigo-900 leading-relaxed">
              <strong>Gallery Walk:</strong> ติดแสดงผลงานรอบห้องเรียนให้เพื่อนเดินชม แลกเปลี่ยนความคิดเห็น และโหวตผลงานที่สรุปกลยุทธ์ได้ชัดเจนและนำไปใช้ได้จริงมากที่สุด
            </p>
          </div>
        </div>
      `;
    }

    let unit3BottomWrapup = '';
    if (ctx.unitId === 2) {
      unit3BottomWrapup = `
        <!-- Lesson Wrap-up & Common Mistakes -->
        <div class="p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3 mt-6 text-left">
          <div class="flex items-center space-x-2 border-b border-slate-100 pb-2 text-purple-900 font-bold text-xs sm:text-sm">
            <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-500"></i>
            <span>Lesson Wrap-Up & Common Mistakes (สรุปบทเรียนและข้อผิดพลาดที่พบบ่อย)</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div class="p-3 bg-rose-50/80 border border-rose-200 rounded-xl space-y-1 text-rose-950">
              <strong class="font-bold block text-rose-900">1. สับสน Minor กับ Main Idea</strong>
              <p class="leading-relaxed">นำตัวเลขสถิติที่สะดุดตา (เช่น 47%, 350°C หรือ 28%) ไปตอบเป็นใจความสำคัญ ทั้งที่เป็นเพียง <em>Minor Detail</em></p>
            </div>
            <div class="p-3 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1 text-amber-950">
              <strong class="font-bold block text-amber-900">2. สแกนโดยไม่อ่านคำขยาย</strong>
              <p class="leading-relaxed">กวาดสายตาหาตัวเลขโดยไม่อ่านคำนามข้างหน้า เช่น โจทย์ถาม <em>labor reduction (19%)</em> แต่ไปคว้า <em>yield improvement (31%)</em></p>
            </div>
            <div class="p-3 bg-purple-50/80 border border-purple-200 rounded-xl space-y-1 text-purple-950">
              <strong class="font-bold block text-purple-900">3. มองข้าม Signal Words</strong>
              <p class="leading-relaxed">อ่านข้ามคำเชื่อมสำคัญอย่าง <em>whereas, in contrast</em> หรือ <em>consequently</em> ทำให้เข้าใจสลับกันว่าประเด็นใดคือผลลัพธ์</p>
            </div>
          </div>
        </div>
      `;
    } else if (ctx.unitId === 3) {
      unit3BottomWrapup = `
        <!-- Lesson Wrap-up & Common Mistakes -->
        <div class="p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3 mt-6 text-left">
          <div class="flex items-center space-x-2 border-b border-slate-100 pb-2 text-purple-900 font-bold text-xs sm:text-sm">
            <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-500"></i>
            <span>Lesson Wrap-Up & Common Mistakes (สรุปบทเรียนและข้อผิดพลาดที่พบบ่อย)</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div class="p-3 bg-rose-50/80 border border-rose-200 rounded-xl space-y-1 text-rose-950">
              <strong class="font-bold block text-rose-900">1. มองข้ามเครื่องหมายวรรคตอน</strong>
              <p class="leading-relaxed">ข้ามข้อความในขีดยาว <code>— ... —</code> หรือวงเล็บ <code>( ... )</code> ซึ่งผู้เขียนวางคำนิยามของคำศัพท์ยากไว้ตรงนั้นพอดี</p>
            </div>
            <div class="p-3 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1 text-amber-950">
              <strong class="font-bold block text-amber-900">2. แปลตรงข้ามเมื่อเจอ Antonym</strong>
              <p class="leading-relaxed">เมื่อเจอคำว่า <em>Unlike</em> หรือ <em>Whereas</em> ต้องกลับขั้วความหมายให้ตรงข้ามกับคำข้างเคียง ไม่ใช่แปลเหมือนกัน</p>
            </div>
            <div class="p-3 bg-purple-50/80 border border-purple-200 rounded-xl space-y-1 text-purple-950">
              <strong class="font-bold block text-purple-900">3. หลงในส่วนขยายประโยคยาว</strong>
              <p class="leading-relaxed">ให้ตัดอนุประโยคคั่นกลาง (เช่น <em>, which ...,</em> หรือ <em>Although ...,</em>) ออกชั่วคราวเพื่อล็อกหา Core Subject + Main Verb</p>
            </div>
          </div>
        </div>
      `;
    } else if (ctx.unitId === 4) {
      unit3BottomWrapup = `
        <!-- Lesson Wrap-up & Common Mistakes -->
        <div class="p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3 mt-6 text-left">
          <div class="flex items-center space-x-2 border-b border-slate-100 pb-2 text-purple-900 font-bold text-xs sm:text-sm">
            <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-500"></i>
            <span>Lesson Wrap-Up & Common Mistakes (สรุปบทเรียนและข้อผิดพลาดที่พบบ่อย)</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div class="p-3 bg-rose-50/80 border border-rose-200 rounded-xl space-y-1 text-rose-950">
              <strong class="font-bold block text-rose-900">1. โยง Reference ข้ามพจน์ (เอกพจน์/พหูพจน์)</strong>
              <p class="leading-relaxed">เวลาเจอ <em>they / them / their</em> ต้องมองหาคำนามพหูพจน์ข้างหน้าเท่านั้น ห้ามโยงไปหาคำนามเอกพจน์ที่อยู่ใกล้ที่สุดโดยไม่ตรวจสอบพจน์</p>
            </div>
            <div class="p-3 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1 text-amber-950">
              <strong class="font-bold block text-amber-900">2. สับสน Cause-Effect กับ Problem-Solution</strong>
              <p class="leading-relaxed"><em>Cause-Effect</em> อธิบายเพียงว่าทำไมสิ่งหนึ่งจึงเกิดขึ้นและส่งผลอย่างไร แต่ <em>Problem-Solution</em> ต้องมีการเสนอวิธีแก้ไขปัญหาอย่างชัดเจน</p>
            </div>
            <div class="p-3 bg-purple-50/80 border border-purple-200 rounded-xl space-y-1 text-purple-950">
              <strong class="font-bold block text-purple-900">3. ลืมดูการอ้างอิงทั้งประโยคของ This / That</strong>
              <p class="leading-relaxed">คำชี้เฉพาะอย่าง <em>This</em> หรือวลี <em>This process / This problem</em> มักไม่ได้แทนคำนามคำเดียว แต่แทนเหตุการณ์หรือขั้นตอนทั้งหมดในประโยคก่อนหน้า</p>
            </div>
          </div>
        </div>
      `;
    } else if (ctx.unitId === 5) {
      unit3BottomWrapup = `
        <!-- Lesson Wrap-up & Common Mistakes -->
        <div class="p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3 mt-6 text-left">
          <div class="flex items-center space-x-2 border-b border-slate-100 pb-2 text-purple-900 font-bold text-xs sm:text-sm">
            <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-500"></i>
            <span>Lesson Wrap-Up & Common Mistakes (สรุปบทเรียนและข้อผิดพลาดที่พบบ่อย)</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div class="p-3 bg-rose-50/80 border border-rose-200 rounded-xl space-y-1 text-rose-950">
              <strong class="font-bold block text-rose-900">1. เดาเกินหลักฐาน (Unsupported Ideas)</strong>
              <p class="leading-relaxed">การทำ <em>Inference</em> ที่ดีต้องอ้างอิงจากคำใบ้ในบทอ่าน (Text Clues) เสมอ ห้ามสมมติเรื่องราวที่ไม่มีหลักฐานในบทอ่านมารองรับ</p>
            </div>
            <div class="p-3 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1 text-amber-950">
              <strong class="font-bold block text-amber-900">2. ถอดความแบบเปลี่ยนแค่ 1–2 คำ (Patchwriting)</strong>
              <p class="leading-relaxed">การลอกโครงสร้างประโยคเดิมเกือบทั้งหมดแล้วเปลี่ยนคำศัพท์เพียงหนึ่งคำ ยังไม่ถือเป็นการ <em>Paraphrase</em> ที่ดี ต้องปรับโครงสร้างประโยคควบคู่กับการใช้ Synonyms</p>
            </div>
            <div class="p-3 bg-purple-50/80 border border-purple-200 rounded-xl space-y-1 text-purple-950">
              <strong class="font-bold block text-purple-900">3. ถอดความแล้วความหมายเพี้ยน (Distorted Meaning)</strong>
              <p class="leading-relaxed">ระวังการสลับประธาน-กรรม หรือสลับเหตุและผลระหว่างการเขียนใหม่ ต้องตรวจสอบเสมอว่าใจความสำคัญยังตรงกับต้นฉบับ 100%</p>
            </div>
          </div>
        </div>
      `;
    } else if (ctx.unitId === 6) {
      unit3BottomWrapup = `
        <!-- Learning Reflection & Course Wrap-up -->
        <div class="p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3 mt-6 text-left">
          <div class="flex items-center space-x-2 border-b border-slate-100 pb-2 text-purple-900 font-bold text-xs sm:text-sm">
            <i data-lucide="sparkles" class="w-4 h-4 text-purple-700"></i>
            <span>Learning Reflection & Integrated Reading Checklist (สะท้อนคิดและสรุปการบูรณาการกลยุทธ์)</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div class="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-1 text-emerald-950">
              <strong class="font-bold block text-emerald-900">1. Before Reading (Preview & Skim)</strong>
              <p class="leading-relaxed">สำรวจชื่อเรื่องและประโยคแรกสุดของย่อหน้าเพื่อจับ <em>Topic</em> และ <em>Main Idea</em> ก่อนลงลึกในรายละเอียด</p>
            </div>
            <div class="p-3 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1 text-amber-950">
              <strong class="font-bold block text-amber-900">2. While Reading (Clues, Signals & Pronouns)</strong>
              <p class="leading-relaxed">ใช้ <em>Context Clues</em> แปลศัพท์ยาก สังเกต <em>Signal Words</em> เพื่อดูโครงสร้างเรื่อง และโยง <em>Pronouns</em> ย้อนหาคำนามข้างหน้า</p>
            </div>
            <div class="p-3 bg-purple-50/80 border border-purple-200 rounded-xl space-y-1 text-purple-950">
              <strong class="font-bold block text-purple-900">3. After Reading (Infer & Paraphrase)</strong>
              <p class="leading-relaxed">รวมหลักฐานจากบทอ่านเพื่อสรุป <em>Inferences</em> และตรวจสอบความเข้าใจด้วยการ <em>Paraphrase</em> เป็นภาษาของตนเอง</p>
            </div>
          </div>
        </div>
      `;
    }

    if (!Array.isArray(state.passageSubmitted)) {
      state.passageSubmitted = [false, false, false, false];
    }

    // Completed Screen (Overall 40-question summary when user clicks View Overall Summary)
    if (state.isCompleted) {
      const totalScore = state.passageScores.reduce((a, b) => a + b, 0);
      const percentage = Math.round((totalScore / 40) * 100);
      const passed = percentage >= 70;

      return `
        <div class="max-w-2xl mx-auto space-y-6 text-center py-4">
          <div class="w-20 h-20 mx-auto rounded-3xl ${passed ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'} flex items-center justify-center shadow-lg">
            <i data-lucide="${passed ? 'trophy' : 'award'}" class="w-10 h-10"></i>
          </div>

          <div class="space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider ${passed ? 'text-emerald-700 bg-emerald-100' : 'text-amber-800 bg-amber-100'} px-3 py-1 rounded-full">
              ${passed ? 'Assessment Completed with Excellence! 🎉' : 'Assessment Completed! 💪'}
            </span>
            <h3 class="text-2xl sm:text-3xl font-bold text-slate-900">${ctx.unitTitle}</h3>
            <p class="text-xs text-slate-600">${ctx.unitSub}</p>
          </div>

          <!-- Total Score Pill -->
          <div class="p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-3xl border border-purple-200 shadow-sm max-w-md mx-auto">
            <div class="text-4xl sm:text-5xl font-black text-purple-900">${totalScore} <span class="text-xl sm:text-2xl text-purple-400">/ 40</span></div>
            <div class="text-sm font-bold text-purple-700 mt-1">${percentage}% Accuracy Score</div>
            <div class="mt-3 text-xs text-slate-600 leading-relaxed">
              ${passed ? ctx.passMsg : 'ทำได้ดีครับ! ลองทบทวนข้อที่ตอบผิดและฝึกทำใหม่อีกครั้งเพื่อเสริมสร้างความมั่นใจให้ผ่านเกณฑ์ 70% (28/40)'}
            </div>
          </div>

          <!-- Per-Passage Score Breakdown -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            ${quizData.passages.map((p, idx) => `
              <div onclick="app.goToQuizQuestion(${idx}, 0)" class="p-3.5 bg-white hover:bg-purple-50/60 cursor-pointer transition rounded-2xl border border-purple-100 shadow-xs space-y-1">
                <span class="text-[10px] font-bold text-slate-400 uppercase">Passage Quiz ${idx + 1}</span>
                <div class="text-xs font-bold text-slate-800 line-clamp-1">${p.title.split(':')[1] || p.title}</div>
                <div class="text-base font-extrabold text-purple-900">${state.passageScores[idx]} / 10</div>
              </div>
            `).join('')}
          </div>

          <!-- Answer Key Review (เฉลยทั้งหมด หลังส่งคำตอบ) -->
          <div class="text-left space-y-3">
            <div class="flex items-center space-x-2 text-purple-900 font-bold text-sm">
              <i data-lucide="list-checks" class="w-4 h-4 text-purple-700"></i>
              <span>เฉลยคำตอบทั้ง 4 Passages (Answer Key)</span>
            </div>
            ${quizData.passages.map((p, pIdx) => `
              <details class="bg-white rounded-2xl border border-purple-100 shadow-xs overflow-hidden" ${pIdx === 0 ? 'open' : ''}>
                <summary class="px-4 py-3 cursor-pointer flex items-center justify-between text-xs font-bold text-purple-900 bg-purple-50/60">
                  <span>Passage Quiz ${pIdx + 1}: ${p.title.split(':')[1] || p.title}</span>
                  <span class="text-purple-700">${state.passageScores[pIdx]} / 10</span>
                </summary>
                <div class="p-3 space-y-2">
                  ${p.questions.map((q, qIdx) => {
                    const a = state.answers[`${pIdx}-${qIdx}`];
                    const sel = a ? a.selected : undefined;
                    const ok = this.isQuizAnswerCorrect(q, sel);
                    return `
                      <div class="p-3 rounded-xl border ${ok ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'} space-y-1.5 text-xs">
                        <div class="flex items-start space-x-2">
                          <span class="w-5 h-5 rounded-full shrink-0 flex items-center justify-center font-bold text-[10px] ${ok ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'}">${ok ? '✓' : '✕'}</span>
                          <span class="font-bold text-slate-900 leading-snug">ข้อที่ ${qIdx + 1}. ${q.prompt}</span>
                        </div>
                        <div class="pl-7 space-y-1 leading-relaxed">
                          <div class="${ok ? 'text-emerald-800' : 'text-rose-800'}"><strong>คำตอบของคุณ:</strong> ${this.getQuizAnswerText(q, p, sel)}</div>
                          ${ok ? '' : `<div class="text-emerald-800"><strong>คำตอบที่ถูก:</strong> ${this.getQuizCorrectText(q, p)}</div>`}
                          ${q.explanation ? `<div class="text-slate-600"><strong>คำอธิบาย:</strong> ${q.explanation}</div>` : ''}
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </details>
            `).join('')}
          </div>

          ${unit3BottomWrapup}

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-purple-100">
            <button onclick="app.goToQuizQuestion(0, 0)" class="w-full sm:w-auto px-6 py-3 bg-white border border-purple-200 hover:bg-purple-50 text-purple-800 font-bold rounded-xl text-xs cursor-pointer transition flex items-center justify-center space-x-2">
              <i data-lucide="layout-list" class="w-4 h-4"></i>
              <span>กลับไปดูแยกแต่ละ Passage Quiz (1–4)</span>
            </button>
            <button onclick="app.resetUnit1Quiz()" class="w-full sm:w-auto px-6 py-3 bg-slate-200/90 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-xs cursor-pointer transition flex items-center justify-center space-x-2">
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
              <span>Retake All (เริ่มทำใหม่ทั้งหมด)</span>
            </button>
            <button onclick="app.selectStageAndStep('whileReading', 'learn')" class="w-full sm:w-auto px-8 py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs cursor-pointer transition shadow-md flex items-center justify-center space-x-2">
              <i data-lucide="book-open" class="w-4 h-4"></i>
              <span>Review Unit ${ctx.unitId} Lessons ➔</span>
            </button>
          </div>
        </div>
      `;
    }

    const pIdx = state.passageIndex;
    const currentPassage = quizData.passages[pIdx] || quizData.passages[0];
    const currentQ = currentPassage.questions[state.questionIndex] || currentPassage.questions[0];
    const qNumberInPassage = state.questionIndex + 1;
    const answerKey = `${pIdx}-${state.questionIndex}`;
    const answeredState = state.answers[answerKey];
    const isPassageSubmitted = !!state.passageSubmitted[pIdx];
    const allPassagesSubmitted = state.passageSubmitted.every(Boolean);

    const countAnsweredInPassage = (idx) => {
      let c = 0;
      for (let i = 0; i < 10; i++) {
        const a = state.answers[`${idx}-${i}`];
        if (a && a.selected !== undefined && a.selected !== null) c++;
      }
      return c;
    };

    const doneInCurrent = countAnsweredInPassage(pIdx);
    const passageProgressPercent = Math.round((doneInCurrent / 10) * 100);
    const totalScoreSoFar = state.passageScores.reduce((a, b) => a + b, 0);
    const submittedCount = state.passageSubmitted.filter(Boolean).length;

    return `
      <div class="space-y-6">
        ${unit3TopCards}

        <!-- Top Quiz Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 pb-3">
          <div>
            <div class="flex items-center space-x-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-pink-100 text-pink-800 uppercase tracking-wider">Passage Quiz ${pIdx + 1} (10 ข้อ)</span>
              <span class="text-xs font-semibold text-slate-500">ชุดที่ ${pIdx + 1} จาก 4</span>
              <button onclick="app.selectStageAndStep('whileReading', 'practice')" class="text-[11px] text-purple-700 hover:text-purple-900 font-semibold cursor-pointer underline ml-2">⬅ Back to Practice</button>
            </div>
            <h4 class="text-base sm:text-lg font-bold text-slate-900 mt-0.5">${currentPassage.title}</h4>
            <p class="text-xs text-slate-500">${currentPassage.thaiTitle}</p>
          </div>

          <div class="flex items-center space-x-3 self-start sm:self-auto">
            <div class="bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-xl text-right">
              <span class="text-[10px] text-purple-600 block font-semibold">${isPassageSubmitted ? `คะแนนชุดที่ ${pIdx + 1}` : `ตอบแล้ว (ชุดที่ ${pIdx + 1})`}</span>
              <span class="text-xs font-bold text-purple-900">${isPassageSubmitted ? `${state.passageScores[pIdx]} / 10 คะแนน` : `${doneInCurrent} / 10 ข้อ`}</span>
            </div>
            <div class="bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-right">
              <span class="text-[10px] text-emerald-700 block font-semibold">คะแนนรวม (${submittedCount}/4 ชุด)</span>
              <span class="text-xs font-bold text-emerald-900">${totalScoreSoFar} / 40</span>
            </div>
            <button onclick="app.playQuizPassageAudio(${pIdx})" class="px-3 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer shadow-sm" title="Listen to Passage Audio">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
              <span class="hidden sm:inline">Listen</span>
            </button>
          </div>
        </div>

        <!-- Passage Quiz Tabs (1-4) -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
          ${quizData.passages.map((p, idx) => {
            const done = countAnsweredInPassage(idx);
            const active = idx === pIdx;
            const sub = !!state.passageSubmitted[idx];
            return `
              <button onclick="app.goToQuizQuestion(${idx}, 0)" class="p-2.5 rounded-xl border text-left transition cursor-pointer ${
                active
                  ? 'bg-purple-700 border-purple-700 text-white shadow-md'
                  : sub
                    ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950 hover:bg-emerald-100/80'
                    : 'bg-white border-purple-200 text-purple-900 hover:bg-purple-50'
              }">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold">Passage Quiz ${idx + 1}</span>
                  ${sub ? `<span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded ${active ? 'bg-white/20 text-white' : 'bg-emerald-200/80 text-emerald-900'}">${state.passageScores[idx]}/10 ✓</span>` : ''}
                </div>
                <div class="text-[10px] mt-0.5 ${active ? 'text-purple-100' : sub ? 'text-emerald-700 font-semibold' : 'text-slate-500'}">
                  ${sub ? 'ส่งและเฉลยแล้ว' : `ตอบแล้ว ${done}/10 ข้อ`}
                </div>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Progress Bar for Current 10-Question Passage Quiz -->
        <div class="space-y-1">
          <div class="flex items-center justify-between text-[11px] font-semibold text-slate-500">
            <span>${isPassageSubmitted ? `Passage Quiz ${pIdx + 1} • ส่งคำตอบและเฉลยครบทั้ง 10 ข้อแล้ว` : `Passage Quiz ${pIdx + 1} • ข้อที่ ${qNumberInPassage} จาก 10`}</span>
            <span class="text-purple-700 font-bold">${isPassageSubmitted ? `ได้คะแนน ${state.passageScores[pIdx]} / 10 (${state.passageScores[pIdx] * 10}%)` : `ตอบแล้ว ${doneInCurrent} / 10 ข้อ (${passageProgressPercent}%)`}</span>
          </div>
          <div class="w-full bg-slate-200/80 rounded-full h-2 overflow-hidden">
            <div class="bg-gradient-to-r ${isPassageSubmitted ? 'from-emerald-500 to-teal-500' : 'from-purple-600 to-pink-500'} h-2 rounded-full transition-all duration-300" style="width: ${isPassageSubmitted ? 100 : passageProgressPercent}%"></div>
          </div>
        </div>

        <!-- Main Body -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          <!-- Left: Passage Card -->
          <div class="lg:col-span-6 bg-slate-900 text-slate-100 p-5 rounded-2xl space-y-3 shadow-lg border border-slate-800 lg:sticky lg:top-24">
            <div class="flex items-center justify-between border-b border-slate-800 pb-2">
              <div class="flex items-center space-x-2">
                <i data-lucide="file-text" class="w-4 h-4 text-purple-400"></i>
                <span class="text-xs font-bold text-purple-300 uppercase tracking-wider">${currentPassage.genre}</span>
              </div>
              ${!isPassageSubmitted && currentQ.type === 'highlight' ? `
                <span class="text-[10px] bg-pink-500/20 text-pink-300 border border-pink-500/40 px-2 py-0.5 rounded">
                  👆 Tap a sentence below to answer
                </span>
              ` : ''}
            </div>

            <div class="text-sm font-serif leading-relaxed text-slate-200 space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
              ${currentPassage.sentences.map((sent, sIdx) => {
                let sentClass = 'inline transition-colors duration-200 p-1 rounded ';
                let clickHandler = '';
                if (!isPassageSubmitted && currentQ.type === 'highlight') {
                  if (answeredState && answeredState.selected === sIdx) {
                    sentClass += 'bg-purple-500/40 text-white border-b-2 border-purple-300 font-medium cursor-pointer ';
                  } else {
                    sentClass += 'hover:bg-purple-800/60 hover:text-white cursor-pointer border-b border-dashed border-purple-400/40 ';
                  }
                  clickHandler = `onclick="app.answerQuizHighlight(${sIdx})"`;
                }
                return `<span class="${sentClass}" ${clickHandler}>${sent} </span>`;
              }).join('')}
            </div>

            <div class="text-[10px] text-slate-400 pt-2 border-t border-slate-800 flex items-center justify-between">
              <span>Reading Length: ~${currentPassage.sentences.join(' ').split(' ').length} words</span>
              <span>${ctx.cefrLabel}</span>
            </div>
          </div>

          <!-- Right: Question Card OR Submitted 10-Question Answer Key -->
          <div class="lg:col-span-6 space-y-4">
            ${isPassageSubmitted ? `
              <!-- Submitted Result & 10-Question Answer Key for this Passage Quiz -->
              <div class="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl ${state.passageScores[pIdx] >= 7 ? 'bg-emerald-50 border border-emerald-200' : 'bg-amber-50 border border-amber-200'}">
                  <div class="space-y-1">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${state.passageScores[pIdx] >= 7 ? 'bg-emerald-200 text-emerald-900' : 'bg-amber-200 text-amber-900'}">
                      ${state.passageScores[pIdx] >= 7 ? 'ผ่านเกณฑ์ (≥ 70%) 🎉' : 'ส่งคำตอบแล้ว 💪'}
                    </span>
                    <h5 class="text-base font-bold text-slate-900">ผลคะแนน Passage Quiz ${pIdx + 1}</h5>
                    <p class="text-xs text-slate-600">${currentPassage.title}</p>
                  </div>
                  <div class="text-left sm:text-right shrink-0">
                    <div class="text-3xl font-black ${state.passageScores[pIdx] >= 7 ? 'text-emerald-700' : 'text-amber-700'}">${state.passageScores[pIdx]} <span class="text-lg opacity-70">/ 10</span></div>
                    <div class="text-[11px] font-bold text-slate-600">${state.passageScores[pIdx] * 10}% Accuracy</div>
                  </div>
                </div>

                <!-- 4-Passage Score Breakdown Mini-Cards -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  ${quizData.passages.map((p, idx) => {
                    const pSub = state.passageSubmitted && state.passageSubmitted[idx];
                    const pSc = state.passageScores[idx] || 0;
                    const isCurrent = idx === pIdx;
                    return `
                      <button onclick="app.goToQuizQuestion(${idx}, 0)" class="p-2.5 rounded-xl border text-left transition cursor-pointer ${
                        isCurrent
                          ? 'bg-purple-50 border-purple-400 ring-1 ring-purple-300'
                          : pSub
                            ? 'bg-emerald-50/60 border-emerald-200 hover:bg-emerald-50'
                            : 'bg-slate-50 border-slate-200 hover:bg-purple-50/40'
                      }">
                        <div class="text-[10px] font-bold uppercase tracking-wider ${pSub ? 'text-emerald-700' : 'text-purple-700'}">Passage Quiz ${idx + 1}</div>
                        <div class="text-sm font-black text-slate-900 mt-0.5">${pSub ? `${pSc} <span class="text-[10px] font-normal text-slate-500">/ 10</span>` : `<span class="text-[11px] font-semibold text-slate-400">ยังไม่ส่ง</span>`}</div>
                      </button>
                    `;
                  }).join('')}
                </div>

                <!-- Action Buttons for this Passage Quiz -->
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <button onclick="app.resetPassageQuiz(${pIdx})" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs cursor-pointer transition flex items-center space-x-1.5">
                    <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                    <span>ทำ Passage Quiz ${pIdx + 1} ใหม่</span>
                  </button>
                  <div class="flex flex-wrap items-center gap-2">
                    ${pIdx < 3 ? `
                      <button onclick="app.goToQuizQuestion(${pIdx + 1}, 0)" class="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs cursor-pointer transition shadow-sm flex items-center space-x-1.5">
                        <span>ไปทำ Passage Quiz ${pIdx + 2} (10 ข้อ)</span>
                        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                      </button>
                    ` : ''}
                    ${allPassagesSubmitted ? `
                      <button onclick="app.showUnitQuizSummary()" class="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl text-xs cursor-pointer transition shadow-sm flex items-center space-x-1.5">
                        <span>ดูสรุปคะแนนรวม 40 ข้อ 🏆</span>
                      </button>
                    ` : ''}
                  </div>
                </div>

                <!-- 10-Question Answer Key List -->
                <div class="space-y-2.5 pt-2 border-t border-slate-100">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-purple-900">เฉลยคำตอบ Passage Quiz ${pIdx + 1} (ข้อ 1–10)</span>
                    <span class="text-[11px] text-slate-500">ตอบถูก ${state.passageScores[pIdx]} จาก 10 ข้อ</span>
                  </div>
                  <div class="space-y-2.5 max-h-[540px] overflow-y-auto pr-1">
                    ${currentPassage.questions.map((q, qIdx) => {
                      const a = state.answers[`${pIdx}-${qIdx}`];
                      const sel = a ? a.selected : undefined;
                      const ok = this.isQuizAnswerCorrect(q, sel);
                      return `
                        <div class="p-3.5 rounded-xl border ${ok ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'} space-y-1.5 text-xs">
                          <div class="flex items-start space-x-2">
                            <span class="w-5 h-5 rounded-full shrink-0 flex items-center justify-center font-bold text-[10px] ${ok ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'}">${ok ? '✓' : '✕'}</span>
                            <span class="font-bold text-slate-900 leading-snug">ข้อที่ ${qIdx + 1}. ${q.prompt}</span>
                          </div>
                          <div class="pl-7 space-y-1 leading-relaxed">
                            <div class="${ok ? 'text-emerald-800' : 'text-rose-800'}"><strong>คำตอบของคุณ:</strong> ${this.getQuizAnswerText(q, currentPassage, sel)}</div>
                            ${ok ? '' : `<div class="text-emerald-800"><strong>คำตอบที่ถูก:</strong> ${this.getQuizCorrectText(q, currentPassage)}</div>`}
                            ${q.explanation ? `<div class="text-slate-600"><strong>คำอธิบาย:</strong> ${q.explanation}</div>` : ''}
                          </div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              </div>
            ` : `
              <!-- Active Question Card (10 Questions in this Passage Quiz) -->
              <div class="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm space-y-4">

                <!-- Question Navigator (1-10) -->
                <div class="flex flex-wrap gap-1.5">
                  ${currentPassage.questions.map((qq, qIdx) => {
                    const a = state.answers[`${pIdx}-${qIdx}`];
                    const answered = a && a.selected !== undefined && a.selected !== null;
                    const isCur = qIdx === state.questionIndex;
                    return `
                      <button onclick="app.goToQuizQuestion(${pIdx}, ${qIdx})" class="w-8 h-8 rounded-lg text-[11px] font-bold transition cursor-pointer border ${answered ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-slate-600 border-slate-200 hover:border-purple-400'} ${isCur ? 'ring-2 ring-pink-400 ring-offset-1' : ''}">
                        ${qIdx + 1}
                      </button>
                    `;
                  }).join('')}
                </div>

                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    currentQ.type === 'mc' ? 'bg-blue-100 text-blue-800' :
                    currentQ.type === 'highlight' ? 'bg-pink-100 text-pink-800' : 'bg-amber-100 text-amber-800'
                  }">
                    ${currentQ.type === 'mc' ? 'Multiple Choice' : currentQ.type === 'highlight' ? 'Sentence Selection / Highlight' : 'Fill-in-the-Blank'}
                  </span>
                  <span class="text-xs text-purple-700 font-bold">ข้อที่ ${qNumberInPassage} / 10 • 1 Point</span>
                </div>

                <h5 class="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  ${currentQ.prompt}
                </h5>

                <div class="space-y-2.5">
                  ${this.renderQuizQuestionInputs(currentQ, answeredState, currentPassage)}
                </div>

                <!-- Prev / Next Controls (within the 10 questions of this Passage Quiz) -->
                <div class="pt-2 flex items-center justify-between gap-2">
                  <button onclick="app.prevQuizQuestion()" ${state.questionIndex === 0 ? 'disabled' : ''} class="px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${state.questionIndex === 0 ? 'bg-slate-100 text-slate-300 cursor-default' : 'bg-slate-200/90 hover:bg-slate-300 text-slate-700 cursor-pointer'}">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i>
                    <span>ข้อก่อนหน้า</span>
                  </button>
                  ${state.questionIndex === 9 ? `
                    <button onclick="app.submitPassageQuiz(${pIdx})" class="px-6 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl text-xs transition cursor-pointer shadow-md flex items-center space-x-1.5">
                      <span>ส่งคำตอบและดูเฉลย (10 ข้อ) 🏆</span>
                    </button>
                  ` : `
                    <button onclick="app.nextQuizQuestion()" class="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs transition cursor-pointer shadow-md flex items-center space-x-1.5">
                      <span>ข้อถัดไป</span>
                      <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                  `}
                </div>
              </div>

              <!-- Submit Panel for this 10-Question Passage Quiz -->
              <div class="p-4 bg-pink-50/70 border border-pink-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <p class="text-[11px] text-pink-900 leading-relaxed">
                  เมื่อทำครบ 10 ข้อของ <strong>Passage Quiz ${pIdx + 1}</strong> แล้ว กด <strong>ส่งคำตอบ</strong> เพื่อตรวจคะแนนและดูเฉลยของชุดนี้ทันที
                </p>
                <button onclick="app.submitPassageQuiz(${pIdx})" class="w-full sm:w-auto shrink-0 px-5 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl text-xs transition cursor-pointer shadow-md">
                  ส่งคำตอบชุดที่ ${pIdx + 1} (${doneInCurrent}/10)
                </button>
              </div>
            `}
          </div>

        </div>

        ${unit3BottomWrapup}
      </div>
    `;
  }

  renderQuizQuestionInputs(q, answeredState, passage) {
    const sel = answeredState ? answeredState.selected : undefined;
    if (q.type === 'mc') {
      return q.options.map((opt, idx) => {
        const isSel = sel === idx;
        const btnClass = 'w-full text-left p-3.5 rounded-xl border transition text-xs font-medium flex items-center space-x-3 cursor-pointer ' +
          (isSel ? 'bg-purple-50 border-purple-600 text-purple-950 font-bold shadow-xs' : 'border-purple-200 hover:border-purple-600 hover:bg-purple-50/60 text-slate-800 bg-white');
        const letter = String.fromCharCode(65 + idx);
        return `
          <button onclick="app.answerQuizMC(${idx})" class="${btnClass}">
            <span class="w-5 h-5 rounded-full ${isSel ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-800'} font-bold flex items-center justify-center text-[10px] shrink-0">
              ${letter}
            </span>
            <span class="leading-relaxed">${opt}</span>
          </button>
        `;
      }).join('');
    }

    if (q.type === 'highlight') {
      return `
        <div class="space-y-2">
          <p class="text-xs text-purple-900 bg-purple-50 p-2.5 rounded-lg border border-purple-100 flex items-center space-x-1.5">
            <i data-lucide="hand" class="w-4 h-4 text-purple-700 shrink-0"></i>
            <span>คลิกเลือกประโยคที่ถูกต้องในกล่องบทอ่าน หรือกดเลือกจากตัวเลือกด้านล่าง:</span>
          </p>
          <div class="space-y-1.5 max-h-[280px] overflow-y-auto pr-1">
            ${passage.sentences.map((sent, sIdx) => {
              const isSel = sel === sIdx;
              const btnClass = 'w-full text-left p-2.5 rounded-xl border text-[11px] transition font-sans flex items-start space-x-2 cursor-pointer ' +
                (isSel ? 'bg-purple-50 border-purple-600 text-purple-950 font-bold' : 'bg-white border-purple-100 hover:border-purple-500 hover:bg-purple-50/50 text-slate-700');
              return `
                <button onclick="app.answerQuizHighlight(${sIdx})" class="${btnClass}">
                  <span class="w-4 h-4 rounded-full ${isSel ? 'bg-purple-700 text-white' : 'bg-slate-200 text-slate-700'} text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">S${sIdx + 1}</span>
                  <span class="line-clamp-2 leading-relaxed font-serif">${sent}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    if (q.type === 'fillBlank') {
      return `
        <div class="space-y-3">
          <div class="p-3.5 bg-purple-50/90 rounded-xl border border-purple-200 text-xs font-serif leading-relaxed text-purple-950">
            ${q.sentenceWithBlank.replace('[ _______ ]', `<span class="bg-amber-200 text-amber-950 font-bold px-2.5 py-0.5 rounded border border-amber-400 underline font-sans">${sel !== undefined && sel !== null ? sel : '_______'}</span>`)}
          </div>

          <p class="text-xs text-slate-600 font-semibold">เลือกคำศัพท์ที่ถูกต้องที่สุด:</p>

          <div class="grid grid-cols-2 gap-2">
            ${q.choices.map((choice) => {
              const isSel = sel === choice;
              const btnClass = 'p-3 rounded-xl border text-center text-xs font-bold transition cursor-pointer ' +
                (isSel ? 'bg-purple-700 text-white border-purple-800 shadow-sm' : 'bg-white border-purple-200 hover:border-purple-600 hover:bg-purple-50 text-purple-900 shadow-xs');
              return `
                <button onclick="app.answerQuizFillBlank('${String(choice).replace(/'/g, "\\'")}')" class="${btnClass}">
                  ${choice}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    return '';
  }

  /* ---------- Quiz answer helpers (answers are revealed per 10-question passage upon submit) ---------- */
  isQuizAnswerCorrect(q, selected) {
    if (selected === undefined || selected === null) return false;
    if (q.type === 'mc') return selected === q.correctAnswer;
    if (q.type === 'highlight') return selected === q.targetSentenceIndex;
    if (q.type === 'fillBlank') return String(selected).trim().toLowerCase() === String(q.correctWord).trim().toLowerCase();
    return false;
  }

  getQuizAnswerText(q, passage, selected) {
    if (selected === undefined || selected === null) return '— ไม่ได้ตอบ —';
    if (q.type === 'mc') return `${String.fromCharCode(65 + selected)}. ${q.options[selected]}`;
    if (q.type === 'highlight') return `S${selected + 1}: ${passage.sentences[selected]}`;
    return String(selected);
  }

  getQuizCorrectText(q, passage) {
    if (q.type === 'mc') return `${String.fromCharCode(65 + q.correctAnswer)}. ${q.options[q.correctAnswer]}`;
    if (q.type === 'highlight') return `S${q.targetSentenceIndex + 1}: ${passage.sentences[q.targetSentenceIndex]}`;
    return String(q.correctWord);
  }

  setQuizAnswer(selected) {
    const ctx = this.getActiveUnitQuizContext();
    const state = ctx.state;
    if (state.isCompleted) return;
    if (Array.isArray(state.passageSubmitted) && state.passageSubmitted[state.passageIndex]) return;
    state.answers[`${state.passageIndex}-${state.questionIndex}`] = { selected };
    this.navigate(this.currentView, true);
  }

  answerQuizMC(choiceIndex) {
    this.setQuizAnswer(choiceIndex);
  }

  answerQuizHighlight(sentIndex) {
    this.setQuizAnswer(sentIndex);
  }

  answerQuizFillBlank(word) {
    this.setQuizAnswer(word);
  }

  goToQuizQuestion(pIdx, qIdx) {
    const state = this.getActiveUnitQuizContext().state;
    state.isCompleted = false;
    state.passageIndex = pIdx;
    state.questionIndex = qIdx;
    this.navigate(this.currentView, true);
  }

  prevQuizQuestion() {
    const state = this.getActiveUnitQuizContext().state;
    if (state.questionIndex > 0) {
      state.questionIndex--;
    }
    this.navigate(this.currentView, true);
  }

  nextQuizQuestion() {
    const state = this.getActiveUnitQuizContext().state;
    if (state.questionIndex < 9) {
      state.questionIndex++;
    }
    this.navigate(this.currentView, true);
  }

  submitPassageQuiz(pIdx) {
    const ctx = this.getActiveUnitQuizContext();
    const state = ctx.state;
    const quizData = ctx.quizData;
    const targetP = pIdx !== undefined ? pIdx : state.passageIndex;
    const passage = quizData.passages[targetP];
    if (!passage) return;

    if (!Array.isArray(state.passageSubmitted)) {
      state.passageSubmitted = [false, false, false, false];
    }

    let unanswered = 0;
    passage.questions.forEach((q, qIdx) => {
      const a = state.answers[`${targetP}-${qIdx}`];
      if (!a || a.selected === undefined || a.selected === null) unanswered++;
    });
    if (unanswered > 0 && !confirm(`ยังมี ${unanswered} ข้อใน Passage Quiz ${targetP + 1} ที่ยังไม่ได้ตอบ ต้องการส่งคำตอบเลยหรือไม่?`)) {
      return;
    }

    let pScore = 0;
    passage.questions.forEach((q, qIdx) => {
      const key = `${targetP}-${qIdx}`;
      const a = state.answers[key];
      const ok = a ? this.isQuizAnswerCorrect(q, a.selected) : false;
      if (a) a.isCorrect = ok;
      if (ok) pScore++;
    });

    state.passageScores[targetP] = pScore;
    state.passageSubmitted[targetP] = true;
    state.passageIndex = targetP;

    const totalScore = state.passageScores.reduce((a, b) => a + b, 0);
    localStorage.setItem(ctx.storageKey, totalScore);
    if (ctx.unitId >= 2 && ctx.unitId <= 6) {
      localStorage.setItem(`bru_unit${ctx.unitId}_test_score`, totalScore);
    }
    state.lastScore = totalScore;
    this.navigate(this.currentView, true);
  }

  resetPassageQuiz(pIdx) {
    const ctx = this.getActiveUnitQuizContext();
    const state = ctx.state;
    const targetP = pIdx !== undefined ? pIdx : state.passageIndex;
    if (!Array.isArray(state.passageSubmitted)) {
      state.passageSubmitted = [false, false, false, false];
    }
    for (let i = 0; i < 10; i++) {
      delete state.answers[`${targetP}-${i}`];
    }
    state.passageScores[targetP] = 0;
    state.passageSubmitted[targetP] = false;
    state.passageIndex = targetP;
    state.questionIndex = 0;
    state.isCompleted = false;
    this.navigate(this.currentView, true);
  }

  showUnitQuizSummary() {
    const state = this.getActiveUnitQuizContext().state;
    state.isCompleted = true;
    this.navigate(this.currentView, false);
  }

  submitUnitQuiz() {
    this.submitPassageQuiz(this.getActiveUnitQuizContext().state.passageIndex);
  }

  resetUnit1Quiz() {
    const ctx = this.getActiveUnitQuizContext();
    const freshState = {
      passageIndex: 0,
      questionIndex: 0,
      answers: {},
      passageScores: [0, 0, 0, 0],
      passageSubmitted: [false, false, false, false],
      currentFeedback: null,
      isCompleted: false,
      lastScore: localStorage.getItem(ctx.storageKey) ? parseInt(localStorage.getItem(ctx.storageKey)) : null
    };
    if (ctx.unitId === 6) {
      this.unit6QuizState = freshState;
    } else if (ctx.unitId === 5) {
      this.unit5QuizState = freshState;
    } else if (ctx.unitId === 4) {
      this.unit4QuizState = freshState;
    } else if (ctx.unitId === 3) {
      this.unit3QuizState = freshState;
    } else if (ctx.unitId === 2) {
      this.unit2QuizState = freshState;
    } else {
      this.unit1QuizState = freshState;
    }
    this.navigate(this.currentView);
  }

  playQuizPassageAudio(pIndex) {
    const ctx = this.getActiveUnitQuizContext();
    const quizData = ctx.quizData;
    if (!quizData || !quizData.passages[pIndex]) return;
    const passage = quizData.passages[pIndex];
    this.togglePassageAudio(encodeURIComponent(passage.audioText));
  }

  // 3. Reading Strategies View (6 Units, 8 Learning Steps per Unit)
  // Aligned with Research Blueprint: Reading Strategies Module - Content Scope
  renderStrategiesView() {
    const unit = ReadSkillsData.strategies.find(u => u.unitNumber === this.currentStrategyUnit) || ReadSkillsData.strategies[0];
    const steps = unit.steps;
    const currentStep = steps[this.currentStrategyStepIndex] || steps[0];

    const stepIcons = [
      'help-circle', // 1. What is the strategy?
      'lightbulb',    // 2. Why use it?
      'calendar',     // 3. When do I use it?
      'settings',     // 4. How do I use it?
      'file-text',    // 5. Worked Example
      'user-check',   // 6. Guided Practice
      'book-open',    // 7. Apply to a Short Text
      'trophy'        // 8. Strategy Quiz
    ];

    return `
      <div class="space-y-8">
        <!-- Header & Unit Selector (6 Units) -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center space-x-2">
              <span class="w-7 h-7 rounded-lg bg-purple-700 text-white font-bold flex items-center justify-center text-xs">2</span>
              <h2 class="text-2xl font-bold text-slate-900">Module 2: Reading Strategies (กลยุทธ์การอ่าน)</h2>
            </div>
            <p class="text-xs text-slate-600 mt-1">Reading Strategies Module – Content Scope: 6 Units & 8-Step Learning Sequence</p>
          </div>

          <!-- Unit Selector Tabs (Unit 1 to Unit 6) -->
          <div class="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 touch-pan-x">
            ${ReadSkillsData.strategies.map(u => `
              <button 
                onclick="app.selectStrategyUnit(${u.unitNumber})" 
                class="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${this.currentStrategyUnit === u.unitNumber ? 'bg-purple-700 text-white shadow-md' : 'bg-white/85 text-slate-700 hover:bg-white border border-purple-200'}"
              >
                Unit ${u.unitNumber}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Unit Information Hero Card -->
        <div class="glass-card p-4 sm:p-6 bg-gradient-to-r from-purple-100/80 via-pink-100/60 to-purple-50/80 border border-purple-200">
          <div class="flex items-center justify-between mb-2">
            <span class="bg-purple-700 text-white text-xs font-bold px-2.5 py-0.5 rounded-md">UNIT-0${unit.unitNumber}</span>
            <span class="text-xs font-semibold text-purple-900 bg-purple-200/80 px-3 py-1 rounded-full">CEFR Target: ${unit.cefr}</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-1">${unit.title} (${unit.thaiTitle})</h3>
          <p class="text-xs text-purple-800 font-semibold mb-1">
            <strong>Scope (ขอบเขตเนื้อหา):</strong> ${unit.scope}
          </p>
        </div>

        <!-- 8-Step Learning Sequence Stepper Bar (ลำดับการเรียนรู้ 8 ขั้น) -->
        <div class="glass-card p-3 sm:p-4 overflow-x-auto no-scrollbar touch-pan-x">
          <div class="flex items-center justify-between min-w-[700px] max-w-5xl mx-auto text-xs font-medium">
            ${steps.map((st, idx) => {
              const isActive = this.currentStrategyStepIndex === idx;
              const isPassed = this.currentStrategyStepIndex > idx;
              return `
                ${idx > 0 ? `<div class="h-0.5 flex-1 mx-1 ${isPassed ? 'bg-purple-600' : 'bg-purple-200'}"></div>` : ''}
                <button 
                  onclick="app.selectStrategyStep(${idx})" 
                  class="flex flex-col items-center space-y-1.5 focus:outline-none cursor-pointer group shrink-0"
                  title="${st.title} (${st.thaiTitle})"
                >
                  <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl flex items-center justify-center transition shadow-sm ${isActive ? 'bg-purple-700 text-white ring-4 ring-purple-200 scale-105' : (isPassed ? 'bg-purple-600 text-white' : 'bg-white text-slate-500 border border-purple-200 group-hover:border-purple-400')}">
                    <i data-lucide="${stepIcons[idx]}" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
                  </div>
                  <div class="text-center">
                    <p class="text-[10px] font-bold ${isActive ? 'text-purple-900' : (isPassed ? 'text-purple-700' : 'text-slate-500')} leading-tight">
                      ${idx + 1}. ${st.title}
                    </p>
                    <span class="text-[9px] text-slate-400 font-normal">${st.thaiTitle}</span>
                  </div>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 8-Step Activity Content Body -->
        <div class="glass-card p-4 sm:p-6 md:p-8 min-h-[360px]">
          ${this.renderStrategyStepBody(unit, currentStep)}
        </div>

      </div>
    `;
  }

  // Render individual step content based on the 8-step sequence
  renderStrategyStepBody(unit, step) {
    const sIdx = this.currentStrategyStepIndex;
    const isFirst = sIdx === 0;
    const isLast = sIdx === 7;

    switch (step.stepNum) {
      // 1. What is the strategy? (คืออะไร?)
      case 1:
        return `
          <div class="space-y-5">
            <div class="flex items-center justify-between border-b border-purple-100 pb-3">
              <h4 class="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                <i data-lucide="help-circle" class="w-5 h-5 text-purple-700 shrink-0"></i>
                <span>1. What is the strategy? (${step.thaiTitle})</span>
              </h4>
              <span class="text-[11px] font-bold px-3 py-1 bg-purple-100 text-purple-800 rounded-full shrink-0">Step 1 of 8</span>
            </div>

            <div class="p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 text-sm text-slate-800 leading-relaxed space-y-2">
              <strong class="text-purple-900 text-base block font-bold">${unit.title}</strong>
              <p>${step.content}</p>
            </div>

            <div class="p-4 bg-purple-50/90 border border-purple-200 rounded-2xl text-xs text-purple-950 space-y-1">
              <strong class="font-bold flex items-center space-x-1">
                <i data-lucide="book-open" class="w-4 h-4 text-purple-700 shrink-0"></i>
                <span>คำอธิบายภาษาไทย (Thai Explanation):</span>
              </strong>
              <p class="leading-relaxed">${step.thaiExplanation}</p>
            </div>

            ${step.customHtml || ''}

            <div class="flex justify-end pt-4">
              <button onclick="app.nextStrategyStep()" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-md">
                <span>Next Step: Why use it?</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `;

      // 2. Why use it? (ทำไมต้องใช้?)
      case 2:
        return `
          <div class="space-y-5">
            <div class="flex items-center justify-between border-b border-purple-100 pb-3">
              <h4 class="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                <i data-lucide="lightbulb" class="w-5 h-5 text-amber-500 shrink-0"></i>
                <span>2. Why use it? (${step.thaiTitle})</span>
              </h4>
              <span class="text-[11px] font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full shrink-0">Step 2 of 8</span>
            </div>

            <div class="p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 text-sm text-slate-800 leading-relaxed space-y-2">
              <p>${step.content}</p>
            </div>

            <div class="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl text-xs text-amber-950 space-y-1">
              <strong class="font-bold flex items-center space-x-1">
                <i data-lucide="sparkles" class="w-4 h-4 text-amber-600 shrink-0"></i>
                <span>ประโยชน์หลักและเหตุผลที่ต้องใช้ (Key Benefits):</span>
              </strong>
              <p class="leading-relaxed">${step.thaiExplanation}</p>
            </div>

            ${step.customHtml || ''}

            <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4">
              <button onclick="app.prevStrategyStep()" class="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition cursor-pointer text-center">
                ⬅ Back
              </button>
              <button onclick="app.nextStrategyStep()" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-md">
                <span>Next Step: When do I use it?</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `;

      // 3. When do I use it? (ใช้เมื่อไหร่?)
      case 3:
        return `
          <div class="space-y-5">
            <div class="flex items-center justify-between border-b border-purple-100 pb-3">
              <h4 class="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                <i data-lucide="calendar" class="w-5 h-5 text-purple-700 shrink-0"></i>
                <span>3. When do I use it? (${step.thaiTitle})</span>
              </h4>
              <span class="text-[11px] font-bold px-3 py-1 bg-purple-100 text-purple-800 rounded-full shrink-0">Step 3 of 8</span>
            </div>

            <div class="p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 text-sm text-slate-800 leading-relaxed space-y-2">
              <p>${step.content}</p>
            </div>

            <div class="p-4 bg-purple-50/80 border border-purple-200 rounded-2xl text-xs text-purple-950 space-y-1">
              <strong class="font-bold flex items-center space-x-1">
                <i data-lucide="compass" class="w-4 h-4 text-purple-700 shrink-0"></i>
                <span>สถานการณ์ที่เหมาะสมในการนำไปใช้:</span>
              </strong>
              <p class="leading-relaxed">${step.thaiExplanation}</p>
            </div>

            ${step.customHtml || ''}

            <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4">
              <button onclick="app.prevStrategyStep()" class="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition cursor-pointer text-center">
                ⬅ Back
              </button>
              <button onclick="app.nextStrategyStep()" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-md">
                <span>Next Step: How do I use it?</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `;

      // 4. How do I use it? (ใช้อย่างไร?)
      case 4:
        return `
          <div class="space-y-5">
            <div class="flex items-center justify-between border-b border-purple-100 pb-3">
              <h4 class="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                <i data-lucide="settings" class="w-5 h-5 text-purple-700 shrink-0"></i>
                <span>4. How do I use it? (${step.thaiTitle})</span>
              </h4>
              <span class="text-[11px] font-bold px-3 py-1 bg-purple-100 text-purple-800 rounded-full shrink-0">Step 4 of 8</span>
            </div>

            <p class="text-xs text-slate-600">${step.content}</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              ${(step.checklist || []).map((item, idx) => `
                <div class="p-4 bg-white rounded-2xl border border-purple-100 shadow-sm flex items-start space-x-3">
                  <div class="w-6 h-6 rounded-lg bg-purple-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ${idx + 1}
                  </div>
                  <p class="text-xs text-slate-800 leading-relaxed">${item}</p>
                </div>
              `).join('')}
            </div>

            ${step.customHtml || ''}

            <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4">
              <button onclick="app.prevStrategyStep()" class="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition cursor-pointer text-center">
                ⬅ Back
              </button>
              <button onclick="app.nextStrategyStep()" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-md">
                <span>Next Step: Worked Example</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `;

      // 5. Worked Example (ตัวอย่างการใช้)
      case 5:
        return `
          <div class="space-y-5">
            <div class="flex items-center justify-between border-b border-purple-100 pb-3">
              <h4 class="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                <i data-lucide="file-text" class="w-5 h-5 text-amber-600 shrink-0"></i>
                <span>5. Worked Example (${step.thaiTitle})</span>
              </h4>
              <span class="text-[11px] font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full shrink-0">Step 5 of 8</span>
            </div>

            ${step.customHtml || `
              <div class="p-4 sm:p-5 bg-amber-50/70 border border-amber-200 rounded-2xl text-slate-900 text-sm space-y-2">
                <span class="text-[10px] font-bold text-amber-900 uppercase tracking-wider block">Sample Text / Scenario</span>
                <p class="leading-relaxed font-serif italic text-slate-800">"${step.content}"</p>
              </div>
            `}

            <div class="p-4 bg-purple-50/90 border border-purple-200 rounded-2xl text-xs text-purple-950 space-y-2">
              <strong class="font-bold flex items-center space-x-1">
                <i data-lucide="sparkles" class="w-4 h-4 text-purple-700 shrink-0"></i>
                <span>การวิเคราะห์กลยุทธ์ (Strategy Breakdown):</span>
              </strong>
              <div>${this.formatAnnotatedExample(step.annotated || '')}</div>
            </div>

            ${step.takeaway ? `
              <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 flex items-center space-x-2">
                <i data-lucide="check-circle" class="w-4 h-4 text-emerald-700 shrink-0"></i>
                <span><strong>Key Takeaway:</strong> ${step.takeaway}</span>
              </div>
            ` : ''}

            <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4">
              <button onclick="app.prevStrategyStep()" class="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition cursor-pointer text-center">
                ⬅ Back
              </button>
              <button onclick="app.nextStrategyStep()" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-md">
                <span>Next Step: Guided Practice</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `;

      // 6. Guided Practice (ฝึกปฏิบัติ)
      case 6:
        return `
          <div class="space-y-5">
            <div class="flex items-center justify-between border-b border-purple-100 pb-3">
              <h4 class="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                <i data-lucide="user-check" class="w-5 h-5 text-purple-700 shrink-0"></i>
                <span>6. Guided Practice (${step.thaiTitle})</span>
              </h4>
              <span class="text-[11px] font-bold px-3 py-1 bg-purple-100 text-purple-800 rounded-full shrink-0">Step 6 of 8</span>
            </div>

            <div class="p-4 bg-purple-50/60 rounded-xl text-xs text-purple-950 font-medium">
              ${step.content}
            </div>

            ${step.customHtml || ''}

            <p class="text-sm font-bold text-slate-900">${step.question}</p>

            <div class="space-y-2.5">
              ${(step.options || []).map((opt, idx) => `
                <button 
                  onclick="app.submitPracticeAnswer(${idx}, ${step.answer}, '${encodeURIComponent(step.explanation)}')"
                  class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-white bg-white/70 transition text-xs font-medium flex items-center space-x-3 cursor-pointer"
                >
                  <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">
                    ${String.fromCharCode(65 + idx)}
                  </span>
                  <span>${opt}</span>
                </button>
              `).join('')}
            </div>

            <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4">
              <button onclick="app.prevStrategyStep()" class="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition cursor-pointer text-center">
                ⬅ Back
              </button>
              <button onclick="app.nextStrategyStep()" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-md">
                <span>Next Step: Apply to Short Text</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `;

      // 7. Apply to a Short Text (นำไปใช้กับบทอ่านสั้น)
      case 7:
        return `
          <div class="space-y-5">
            <div class="flex items-center justify-between border-b border-purple-100 pb-3">
              <h4 class="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                <i data-lucide="book-open" class="w-5 h-5 text-purple-700 shrink-0"></i>
                <span>7. Apply to a Short Text (${step.thaiTitle})</span>
              </h4>
              <span class="text-[11px] font-bold px-3 py-1 bg-purple-100 text-purple-800 rounded-full shrink-0">Step 7 of 8</span>
            </div>

            ${step.customHtml ? step.customHtml : `
              <!-- Reading Passage Box with Audio Player -->
              <div class="bg-slate-900 text-slate-100 p-4 sm:p-6 rounded-2xl space-y-4 relative shadow-lg">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700 pb-3">
                  <span class="text-xs font-bold text-pink-300 uppercase tracking-wider">${step.passageTitle || unit.title}</span>
                  
                  <div class="flex items-center space-x-2">
                    <div class="flex items-center space-x-1.5 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5" title="Playback Speed (ความเร็วเสียงอ่าน)">
                      <i data-lucide="gauge" class="w-3.5 h-3.5 text-purple-300 shrink-0"></i>
                      <select onchange="app.setAudioSpeed(this.value)" class="bg-transparent text-purple-200 text-xs font-semibold focus:outline-none cursor-pointer">
                        <option value="0.65" ${this.audioSpeed === 0.65 ? 'selected' : ''} class="bg-slate-900 text-white">0.65x (ช้ามาก)</option>
                        <option value="0.75" ${this.audioSpeed === 0.75 ? 'selected' : ''} class="bg-slate-900 text-white">0.75x (ช้าชัดเจน ✨)</option>
                        <option value="0.85" ${this.audioSpeed === 0.85 ? 'selected' : ''} class="bg-slate-900 text-white">0.85x (ปานกลาง)</option>
                        <option value="1.0" ${this.audioSpeed === 1.0 ? 'selected' : ''} class="bg-slate-900 text-white">1.0x (ปกติ)</option>
                      </select>
                    </div>

                    <button onclick="app.togglePassageAudio('${encodeURIComponent(step.audioText || step.passage || 'Reading text')}')" class="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold rounded-lg flex items-center space-x-2 transition cursor-pointer ${this.isAudioPlaying ? 'audio-playing' : ''}">
                      <i data-lucide="${this.isAudioPlaying ? 'square' : 'volume-2'}" class="w-4 h-4"></i>
                      <span>${this.isAudioPlaying ? 'Stop Audio' : 'Listen Passage'}</span>
                    </button>
                  </div>
                </div>

                <p class="text-sm italic leading-relaxed text-slate-200 font-serif">
                  "${step.passage}"
                </p>
              </div>
            `}

            <!-- Task Card -->
            <div class="p-4 bg-purple-50/90 border border-purple-200 rounded-2xl text-xs space-y-2">
              <strong class="font-bold text-purple-950 flex items-center space-x-1">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-purple-700 shrink-0"></i>
                <span>Strategy Application Summary:</span>
              </strong>
              <p class="text-slate-800">${step.taskQuestion}</p>
              <div class="p-3 bg-white rounded-xl border border-purple-100 text-purple-900 font-semibold text-xs">
                💡 <strong>Key Takeaways:</strong> ${step.taskAnswer}
              </div>
            </div>

            <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4">
              <button onclick="app.prevStrategyStep()" class="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition cursor-pointer text-center">
                ⬅ Back
              </button>
              <button onclick="app.nextStrategyStep()" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-md">
                <span>Next Step: Strategy Quiz</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `;

      // 8. Strategy Quiz (แบบทดสอบ)
      case 8:
        if (
          (unit.unitNumber === 1 && ReadSkillsData.strategyUnit1Quiz) ||
          (unit.unitNumber === 2 && ReadSkillsData.strategyUnit2Quiz)
        ) {
          return this.renderStrategyUnit1QuizStep(step);
        }
        return `
          <div class="space-y-5">
            <div class="flex items-center justify-between border-b border-purple-100 pb-3">
              <h4 class="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                <i data-lucide="trophy" class="w-5 h-5 text-emerald-600 shrink-0"></i>
                <span>8. Strategy Quiz (${step.thaiTitle})</span>
              </h4>
              <span class="text-[11px] font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full shrink-0">Step 8 of 8 &bull; Checkpoint</span>
            </div>

            <p class="text-sm font-bold text-slate-900">${step.question}</p>

            <div class="space-y-2.5">
              ${(step.options || []).map((opt, idx) => `
                <button 
                  onclick="app.submitQuizAnswer(${idx}, ${step.answer}, '${encodeURIComponent(step.explanation)}')"
                  class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-emerald-600 hover:bg-white bg-white/70 transition text-xs font-medium flex items-center space-x-3 cursor-pointer"
                >
                  <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">
                    ${String.fromCharCode(65 + idx)}
                  </span>
                  <span>${opt}</span>
                </button>
              `).join('')}
            </div>

            <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4">
              <button onclick="app.prevStrategyStep()" class="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition cursor-pointer text-center">
                ⬅ Back
              </button>
              <button onclick="app.selectStrategyStep(0)" class="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-md">
                <i data-lucide="check-check" class="w-4 h-4"></i>
                <span>Review Completed 🎉</span>
              </button>
            </div>
          </div>
        `;
    }
  }

  /* ------------------- Strategy Navigation Handlers ------------------- */
  selectStrategyUnit(unitNum) {
    this.currentStrategyUnit = unitNum;
    this.currentStrategyStepIndex = 0;
    if (this.speechSynth) this.speechSynth.cancel();
    this.isAudioPlaying = false;
    this.navigate('strategies');
  }

  selectStrategyStep(stepIdx) {
    this.currentStrategyStepIndex = stepIdx;
    if (this.speechSynth) this.speechSynth.cancel();
    this.isAudioPlaying = false;
    this.navigate('strategies');
  }

  nextStrategyStep() {
    if (this.currentStrategyStepIndex < 7) {
      this.currentStrategyStepIndex++;
      if (this.speechSynth) this.speechSynth.cancel();
      this.isAudioPlaying = false;
      this.navigate('strategies');
    }
  }

  prevStrategyStep() {
    if (this.currentStrategyStepIndex > 0) {
      this.currentStrategyStepIndex--;
      if (this.speechSynth) this.speechSynth.cancel();
      this.isAudioPlaying = false;
      this.navigate('strategies');
    }
  }

  speakText(text) {
    if (!text) return;
    this.togglePassageAudio(encodeURIComponent(text));
  }

  /* ------------------- Strategy Unit 1 Interactive Methods (A2-B1) ------------------- */

  // 1. Diagnostic Pre-Test (3 Items)
  submitStrat1Pretest(qNum, choiceIdx) {
    if (!this.strat1PretestAnswers) this.strat1PretestAnswers = {};
    this.strat1PretestAnswers[qNum] = choiceIdx;

    const key = {
      1: { ans: 1, exp: "ก่อนเริ่มอ่านทุกบรรทัด ควรใช้กลยุทธ์ Previewing กวาดสายตาดูชื่อเรื่อง หัวข้อย่อย รูปภาพ และคำตัวหนาก่อนเสมอ (ข้อ B)" },
      2: { ans: 0, exp: "Topic Sentence ทำหน้าที่บอกประเด็นหลักและใจความสำคัญ (Main Idea) ของย่อหน้า (ข้อ A)" },
      3: { ans: 2, exp: "จากชื่อเรื่อง 'Easy Ways to Save Water at Home' และภาพปิดก๊อกน้ำ คาดเดาได้ว่าเป็นเรื่องวิธีประหยัดน้ำในชีวิตประจำวันที่บ้าน (ข้อ C)" }
    };

    const target = key[qNum];
    const fb = document.getElementById(`s1-pt${qNum}-fb`);
    const btns = document.querySelectorAll(`.s1-pt${qNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        b.className = idx === target.ans
          ? `s1-pt${qNum}-btn p-2 rounded-lg border-2 border-emerald-500 bg-emerald-100 text-emerald-950 text-left font-bold cursor-pointer`
          : `s1-pt${qNum}-btn p-2 rounded-lg border-2 border-rose-500 bg-rose-100 text-rose-950 text-left font-bold cursor-pointer`;
      } else if (idx === target.ans) {
        b.className = `s1-pt${qNum}-btn p-2 rounded-lg border border-emerald-400 bg-emerald-50 text-emerald-900 text-left font-medium cursor-pointer`;
      } else {
        b.className = `s1-pt${qNum}-btn p-2 rounded-lg border border-slate-200 bg-white text-slate-500 text-left font-medium cursor-pointer`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      fb.className = choiceIdx === target.ans
        ? 'text-[11px] p-2 rounded bg-emerald-100 text-emerald-950 font-medium block'
        : 'text-[11px] p-2 rounded bg-rose-100 text-rose-950 font-medium block';
      fb.innerHTML = `${choiceIdx === target.ans ? '<strong>ถูกต้อง! 🎉</strong>' : '<strong>คำอธิบาย:</strong>'} ${target.exp}`;
    }

    let score = 0;
    Object.keys(key).forEach(k => {
      if (this.strat1PretestAnswers[k] === key[k].ans) score++;
    });
    const scoreEl = document.getElementById('s1-pretest-score');
    if (scoreEl) scoreEl.textContent = `${score} / 3`;
  }

  // 2. Warm-up Activity
  checkStrat1Warmup(selectedNum) {
    const fb = document.getElementById('s1-warmup-fb');
    if (!fb) return;
    fb.classList.remove('hidden');
    if (selectedNum === 2) {
      fb.className = 'p-3 rounded-xl text-xs font-medium bg-emerald-100 text-emerald-950 border border-emerald-300 block';
      fb.innerHTML = '<strong>ถูกต้อง! 🎉:</strong> จากการเชื่อมโยงภาพดูมือถือบนเตียงตอนดึก + ชื่อเรื่อง <em>"Using Phones at Night Hurts Your Sleep"</em> + คำตัวหนา <em>bright screen, tired, sleep schedule</em> ทำให้คาดเดาใจความหลักได้ทันทีว่าบทความพูดถึงผลเสียของการใช้มือถือก่อนนอนที่ทำให้หลับยากและเหนื่อยในตอนเช้า';
    } else {
      fb.className = 'p-3 rounded-xl text-xs font-medium bg-rose-100 text-rose-950 border border-rose-300 block';
      fb.innerHTML = '<strong>ลองสังเกตเบาะแสอีกครั้ง:</strong> ดูคำว่า <em>Using Phones at Night, bright screen, tired</em> และ <em>sleep schedule</em> ซึ่งชี้ไปที่ตัวเลือกที่ 2 (ผลของการใช้โทรศัพท์ตอนดึกต่อการนอนหลับ)';
    }
  }

  // 3. Vocabulary Preview Activity (6 A2-B1 Items)
  submitStrat1Vocab(qNum, choiceIdx) {
    if (!this.strat1VocabAnswers) this.strat1VocabAnswers = {};
    this.strat1VocabAnswers[qNum] = choiceIdx;

    const key = {
      1: { ans: 1, exp: "healthy (adj.) = ดีต่อสุขภาพ แข็งแรง (good for your body and mind) (ข้อ B)" },
      2: { ans: 0, exp: "reduce (v.) = ลดลง ทำให้มีขนาดหรือจำนวนน้อยลง (to make something smaller or less) (ข้อ A)" },
      3: { ans: 2, exp: "improve (v.) = พัฒนา ทำให้ดีขึ้นกว่าเดิม (to make something better) (ข้อ C)" },
      4: { ans: 1, exp: "benefit (n.) = ประโยชน์ ข้อดี หรือผลดีที่ได้รับ (a good or helpful result) (ข้อ B)" },
      5: { ans: 0, exp: "schedule (n.) = ตารางเวลา แผนกำหนดเวลาทำกิจกรรมในแต่ละวัน (ข้อ A)" },
      6: { ans: 2, exp: "protect (v.) = ปกป้อง คุ้มครองให้ปลอดภัยจากอันตราย (to keep safe from harm) (ข้อ C)" }
    };

    const target = key[qNum];
    const fb = document.getElementById(`s1-v${qNum}-fb`);
    const btns = document.querySelectorAll(`.s1-v${qNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        b.className = idx === target.ans
          ? `s1-v${qNum}-btn p-2 rounded-lg border-2 border-emerald-500 bg-emerald-100 text-emerald-950 text-left font-bold cursor-pointer`
          : `s1-v${qNum}-btn p-2 rounded-lg border-2 border-rose-500 bg-rose-100 text-rose-950 text-left font-bold cursor-pointer`;
      } else if (idx === target.ans) {
        b.className = `s1-v${qNum}-btn p-2 rounded-lg border border-emerald-400 bg-emerald-50 text-emerald-900 text-left font-medium cursor-pointer`;
      } else {
        b.className = `s1-v${qNum}-btn p-2 rounded-lg border border-slate-200 bg-white text-slate-500 text-left font-medium cursor-pointer`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      fb.className = choiceIdx === target.ans
        ? 'text-[11px] p-2 rounded bg-emerald-100 text-emerald-950 font-medium block'
        : 'text-[11px] p-2 rounded bg-rose-100 text-rose-950 font-medium block';
      fb.innerHTML = `${choiceIdx === target.ans ? '<strong>ถูกต้อง! 🎉</strong>' : '<strong>คำอธิบาย:</strong>'} ${target.exp}`;
    }

    let score = 0;
    Object.keys(key).forEach(k => {
      if (this.strat1VocabAnswers[k] === key[k].ans) score++;
    });
    localStorage.setItem('bru_strat1_vocab_answers', JSON.stringify(this.strat1VocabAnswers));
    localStorage.setItem('bru_strat1_vocab_score', score);
    const scoreEl = document.getElementById('s1-vocab-score');
    if (scoreEl) scoreEl.textContent = `${score} / 6`;
  }

  // 4. Prediction Quiz Activity (4 A2-B1 Items)
  submitStrat1Pred(qNum, choiceIdx) {
    if (!this.strat1PredAnswers) this.strat1PredAnswers = {};
    this.strat1PredAnswers[qNum] = choiceIdx;

    const key = {
      1: { ans: 1, exp: "จากชื่อเรื่อง 'City Buses Go Electric for Cleaner Air' และประโยคเปิด คาดเดาได้ว่าเรื่องนี้กล่าวถึงการใช้รถเมล์ไฟฟ้าเพื่อลดควันพิษและเสียงดังในเมือง (ข้อ B)" },
      2: { ans: 0, exp: "จากหัวข้อย่อย 'Why Students Wait Until the Last Minute' และคำตัวหนา homework, stress, time plan คาดเดาได้ว่าพูดถึงสาเหตุที่นักศึกษาเลื่อนทำงานและวิธีวางแผนเวลา (ข้อ A)" },
      3: { ans: 2, exp: "จากชื่อเรื่อง 'Trees by the Sea Protect Our Coast' และภาพต้นไม้ชายฝั่งรับคลื่น คาดเดาได้ว่าต้นไม้ชายทะเลช่วยปกป้องหมู่บ้านชายฝั่งจากคลื่นและพายุ (ข้อ C)" },
      4: { ans: 0, exp: "จากประโยคเปิดเรื่องการเรียนภาษาที่สองช่วยฝึกสมอง คาดเดาได้ว่าการเรียนสองภาษาช่วยพัฒนาความจำและเป็นประโยชน์ต่อการทำงานในอนาคต (ข้อ A)" }
    };

    const target = key[qNum];
    const fb = document.getElementById(`s1-pr${qNum}-fb`);
    const btns = document.querySelectorAll(`.s1-pr${qNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        b.className = idx === target.ans
          ? `s1-pr${qNum}-btn p-2 rounded-lg border-2 border-emerald-500 bg-emerald-100 text-emerald-950 text-left font-bold cursor-pointer`
          : `s1-pr${qNum}-btn p-2 rounded-lg border-2 border-rose-500 bg-rose-100 text-rose-950 text-left font-bold cursor-pointer`;
      } else if (idx === target.ans) {
        b.className = `s1-pr${qNum}-btn p-2 rounded-lg border border-emerald-400 bg-emerald-50 text-emerald-900 text-left font-medium cursor-pointer`;
      } else {
        b.className = `s1-pr${qNum}-btn p-2 rounded-lg border border-slate-200 bg-white text-slate-500 text-left font-medium cursor-pointer`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      fb.className = choiceIdx === target.ans
        ? 'text-[11px] p-2 rounded bg-emerald-100 text-emerald-950 font-medium block'
        : 'text-[11px] p-2 rounded bg-rose-100 text-rose-950 font-medium block';
      fb.innerHTML = `${choiceIdx === target.ans ? '<strong>ถูกต้อง! 🎉</strong>' : '<strong>คำอธิบาย:</strong>'} ${target.exp}`;
    }

    let score = 0;
    Object.keys(key).forEach(k => {
      if (this.strat1PredAnswers[k] === key[k].ans) score++;
    });
    localStorage.setItem('bru_strat1_pred_answers', JSON.stringify(this.strat1PredAnswers));
    localStorage.setItem('bru_strat1_pred_score', score);
    const scoreEl = document.getElementById('s1-pred-score');
    if (scoreEl) scoreEl.textContent = `${score} / 4`;
  }

  // 5. Interactive 3-Colour Highlighting Tool (Unit 1)
  highlightStrat1Sentence(segNum, color) {
    const expected = {
      1: { role: 'yellow', exp: 'Segment (1) คือ Preview Clues (สีเหลือง) ได้แก่ Title, Subheading และ Bold Words ที่ช่วยคาดเดาเนื้อหาก่อนอ่าน' },
      2: { role: 'blue', exp: 'Segment (2) คือ Topic Sentence (สีฟ้า) ที่เปิดประเด็นหลักว่าการนอนหลับให้เพียงพอทุกคืนช่วยให้สมองจดจำบทเรียนใหม่ได้ดี' },
      3: { role: 'green', exp: 'Segment (3) คือ Supporting Detail (สีเขียว) อธิบายการทำงานของสมองในการจัดระเบียบสิ่งที่เรียนมาขณะหลับ' },
      4: { role: 'green', exp: 'Segment (4) คือ Supporting Detail / Example (สีเขียว) ยกตัวอย่างว่านักศึกษาที่นอนครบ 8 ชั่วโมงจำคำศัพท์ได้มากกว่า' },
      5: { role: 'blue', exp: 'Segment (5) คือ Concluding Main Idea Restatement (สีฟ้า) ที่สรุปย้ำใจความสำคัญปิดท้ายย่อหน้า' }
    };

    const textEl = document.getElementById(`s1-hl-${segNum}-text`);
    const fbEl = document.getElementById(`s1-hl-${segNum}-fb`);
    if (!textEl || !fbEl) return;

    const hlMap = {
      yellow: 'highlighter-pen highlighter-yellow',
      green: 'highlighter-pen highlighter-green',
      blue: 'highlighter-pen highlighter-blue'
    };

    const rawText = textEl.textContent.trim();
    textEl.innerHTML = `<span class="${hlMap[color]}">${rawText}</span>`;

    const isCorrect = expected[segNum].role === color;
    fbEl.classList.remove('hidden');
    fbEl.className = `text-[11px] font-sans pt-1 ${isCorrect ? 'text-emerald-300' : 'text-amber-300'}`;
    fbEl.innerHTML = isCorrect
      ? `✅ <strong>ถูกต้อง!</strong> ${expected[segNum].exp}`
      : `💡 <strong>คำแนะนำ:</strong> ${expected[segNum].exp}`;
  }

  resetStrat1Highlights() {
    for (let i = 1; i <= 5; i++) {
      const textEl = document.getElementById(`s1-hl-${i}-text`);
      const fbEl = document.getElementById(`s1-hl-${i}-fb`);
      if (textEl) textEl.innerHTML = textEl.textContent.trim();
      if (fbEl) fbEl.classList.add('hidden');
    }
  }

  revealStrat1Highlights() {
    const roles = { 1: 'yellow', 2: 'blue', 3: 'green', 4: 'green', 5: 'blue' };
    Object.keys(roles).forEach(k => this.highlightStrat1Sentence(Number(k), roles[k]));
  }

  // 6. While-Reading Passages 1–3 Check (Unit 1 A2-B1)
  submitStrat1PassageCheck(pNum, choiceIdx) {
    if (!this.strat1PassageAnswers) this.strat1PassageAnswers = {};
    this.strat1PassageAnswers[pNum] = choiceIdx;

    const key = {
      1: { ans: 1, exp: "ประโยค (1) คือ Topic Sentence และใจความหลักคือการใช้ขวดน้ำใช้ซ้ำช่วยลดขยะพลาสติกและประหยัดเงินของนักศึกษา (ข้อ B)" },
      2: { ans: 0, exp: "จาก Topic Sentence (1) และประโยคสรุป (5) ใจความหลักคือการจดโน้ตด้วยปากกาในสมุดช่วยให้นักศึกษาเข้าใจและจำบทเรียนได้ดีกว่าการพิมพ์ทุกคำ (ข้อ A)" },
      3: { ans: 1, exp: "ตัวอย่างรถไฟหัวกระสุนที่เลียนแบบปากนกและตึกที่ระบายอากาศเหมือนจอมปลวกในประโยค (3)–(4) ทำหน้าที่เป็น Supporting Details ที่ขยายความ Topic Sentence ในประโยค (1) (ข้อ B)" }
    };

    const target = key[pNum];
    const fb = document.getElementById(`s1-p${pNum}-fb`);
    const btns = document.querySelectorAll(`.s1-p${pNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        b.className = idx === target.ans
          ? `s1-p${pNum}-btn p-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-100 text-emerald-950 text-left font-bold cursor-pointer`
          : `s1-p${pNum}-btn p-2.5 rounded-xl border-2 border-rose-500 bg-rose-100 text-rose-950 text-left font-bold cursor-pointer`;
      } else if (idx === target.ans) {
        b.className = `s1-p${pNum}-btn p-2.5 rounded-xl border border-emerald-400 bg-emerald-50 text-emerald-900 text-left font-medium cursor-pointer`;
      } else {
        b.className = `s1-p${pNum}-btn p-2.5 rounded-xl border border-slate-200 bg-white text-slate-500 text-left font-medium cursor-pointer`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      fb.className = choiceIdx === target.ans
        ? 'text-xs p-2.5 rounded-lg bg-emerald-100 text-emerald-950 border border-emerald-300 font-medium block'
        : 'text-xs p-2.5 rounded-lg bg-rose-100 text-rose-950 border border-rose-300 font-medium block';
      fb.innerHTML = `${choiceIdx === target.ans ? '<strong>ถูกต้อง! 🎉</strong>' : '<strong>คำอธิบาย:</strong>'} ${target.exp}`;
    }

    let score = 0;
    Object.keys(key).forEach(k => {
      if (this.strat1PassageAnswers[k] === key[k].ans) score++;
    });
    localStorage.setItem('bru_strat1_passage_answers', JSON.stringify(this.strat1PassageAnswers));
    const scoreEl = document.getElementById('s1-passages-score');
    if (scoreEl) scoreEl.textContent = `${score} / 3 Completed`;
  }

  /* ------------------- Strategy Unit 2 Interactive Methods (A2-B1) ------------------- */

  submitStrat2Pretest() {
    const key = [1, 0, 1];
    const exps = [
      "ข้อ 1 ตอบ B: Minor Supporting Detail ทำหน้าที่ยกตัวอย่าง ตัวเลข หรือข้อเท็จจริงย่อยเพื่ออธิบายขยายความ Major Supporting Detail",
      "ข้อ 2 ตอบ A: because, so, therefore, as a result เป็นคำสัญญาณ (Signal Words) แสดงเหตุและผล (Cause and Effect)",
      "ข้อ 3 ตอบ B: การหาเวลาเปิด-ปิด (8:30 AM) อย่างรวดเร็วต้องใช้ทักษะ Scanning กวาดสายตาหาตัวเลขและเวลาโดยเฉพาะ"
    ];
    let score = 0;
    const details = [];
    for (let i = 0; i < 3; i++) {
      const checked = document.querySelector(`input[name="s2-pre-${i + 1}"]:checked`);
      const val = checked ? parseInt(checked.value, 10) : -1;
      const ok = val === key[i];
      if (ok) score++;
      details.push(`<div style="margin-bottom:0.25rem;">${ok ? '✅' : '❌'} ${exps[i]}</div>`);
    }
    const fb = document.getElementById('strat2-pretest-feedback');
    if (fb) {
      fb.style.display = 'block';
      fb.style.padding = '0.85rem';
      fb.style.borderRadius = '10px';
      fb.style.fontSize = '0.84rem';
      fb.style.background = score >= 2 ? '#ECFDF5' : '#FFFBEB';
      fb.style.border = score >= 2 ? '1.5px solid #34D399' : '1.5px solid #FBBF24';
      fb.style.color = '#0F172A';
      fb.innerHTML = `<div style="font-weight:800; margin-bottom:0.4rem;">ผลคะแนน Pre-Test: ${score} / 3 คะแนน</div>${details.join('')}`;
    }
  }

  checkStrat2Warmup(choiceIdx) {
    const fb = document.getElementById('strat2-warmup-feedback');
    if (!fb) return;
    fb.style.display = 'block';
    fb.style.padding = '0.8rem';
    fb.style.borderRadius = '10px';
    fb.style.fontSize = '0.84rem';
    if (choiceIdx === 1) {
      fb.style.background = '#ECFDF5';
      fb.style.border = '1.5px solid #34D399';
      fb.style.color = '#065F46';
      fb.innerHTML = '✅ <strong>ถูกต้อง! 🎉</strong> ประโยคที่ขึ้นต้นด้วย <em>"For example, a 30-minute walk..."</em> เป็น <strong>Minor Supporting Detail</strong> ที่ยกตัวอย่างขยายความประโยคก่อนหน้าว่าเดินแล้วช่วยให้หัวใจและกล้ามเนื้อแข็งแรงอย่างไร';
    } else {
      fb.style.background = '#FEF2F2';
      fb.style.border = '1.5px solid #F87171';
      fb.style.color = '#991B1B';
      fb.innerHTML = '💡 <strong>ลองดูคำขึ้นต้นประโยคอีกครั้ง:</strong> ประโยคนี้มีคำว่า <em>"For example..."</em> จึงเป็น <strong>Minor Supporting Detail</strong> (ข้อ B) ที่ยกตัวอย่างขยายความเหตุผลหลักข้อที่ 1';
    }
  }

  startStrat2ScanTimer() {
    if (this.strat2ScanTimer) clearInterval(this.strat2ScanTimer);
    this.strat2ScanSeconds = 0;
    const disp = document.getElementById('strat2-scan-timer-display');
    if (disp) disp.textContent = '⏱️ 00:00';
    this.strat2ScanTimer = setInterval(() => {
      this.strat2ScanSeconds++;
      const m = String(Math.floor(this.strat2ScanSeconds / 60)).padStart(2, '0');
      const s = String(this.strat2ScanSeconds % 60).padStart(2, '0');
      const el = document.getElementById('strat2-scan-timer-display');
      if (el) el.textContent = `⏱️ ${m}:${s}`;
    }, 1000);
  }

  submitStrat2Scan() {
    if (this.strat2ScanTimer) {
      clearInterval(this.strat2ScanTimer);
      this.strat2ScanTimer = null;
    }
    const key = [1, 1, 0, 2, 0, 0];
    const exps = [
      "ข้อ 1 (Skimming): ใจความสำคัญคือตารางกิจกรรม ค่าสมัคร และวิธีสมัครเข้าชมรมวิ่งและแบดมินตันของชุมชน",
      "ข้อ 2 (Scanning Time): กลุ่มวิ่งตอนเช้านัดพบเวลา 6:30 AM",
      "ข้อ 3 (Scanning Place): กลุ่มแบดมินตันซ้อมในอาคาร Gym Building 2",
      "ข้อ 4 (Scanning Price): ค่าสมัครสมาชิกเพียง 50 baht ต่อเดือน",
      "ข้อ 5 (Scanning Date): ต้องสมัครภายในวันที่ June 15",
      "ข้อ 6 (Cause & Effect): ต้องสวมรองเท้ากีฬาที่สะอาดเพราะต้องถนอมพื้นโรงยิม (Because the gym floor needs protection)"
    ];
    let score = 0;
    const rows = [];
    for (let i = 0; i < 6; i++) {
      const sel = document.getElementById(`s2-scan-${i + 1}`);
      const val = sel && sel.value !== '' ? parseInt(sel.value, 10) : -1;
      const ok = val === key[i];
      if (ok) score++;
      rows.push(`<div style="margin-bottom:0.25rem;">${ok ? '✅' : '❌'} ${exps[i]}</div>`);
    }
    const pct = Math.round((score / 6) * 100);
    const passed = pct >= 70;
    const fb = document.getElementById('strat2-scan-feedback');
    if (fb) {
      fb.style.display = 'block';
      fb.style.padding = '0.9rem';
      fb.style.borderRadius = '10px';
      fb.style.fontSize = '0.84rem';
      fb.style.background = passed ? '#ECFDF5' : '#FFFBEB';
      fb.style.border = passed ? '1.5px solid #10B981' : '1.5px solid #F59E0B';
      fb.style.color = '#0F172A';
      fb.innerHTML = `<div style="font-weight:800; margin-bottom:0.4rem;">${passed ? '🎉 ผ่านเกณฑ์ 70%!' : '💪 ลองทบทวนอีกครั้ง'} คะแนน Timed Scanning Task: ${score} / 6 (${pct}%)</div>${rows.join('')}`;
    }
  }

  submitStrat2Challenge() {
    const key = [0, 1, 0, 1];
    const exps = [
      "ข้อ 1 ตอบ A: ประโยคที่ (1) เป็น Topic Sentence ที่สรุป Main Idea ว่าการดื่มน้ำสะอาดทุกวันช่วยให้ร่างกายแข็งแรงและกระฉับกระเฉง",
      "ข้อ 2 ตอบ B: ประโยคที่ (2) และ (4) ขึ้นต้นด้วย First และ Second เพื่อบอกเหตุผลหลัก 2 ข้อที่รองรับ Main Idea โดยตรง จึงเป็น Major Supporting Details",
      "ข้อ 3 ตอบ A: ประโยคที่ (3) ขึ้นต้นด้วย For example เพื่อยกตัวอย่างขยายความประโยคที่ (2) จึงเป็น Minor Supporting Detail",
      "ข้อ 4 ตอบ B: คำว่า Because แสดงความสัมพันธ์แบบ Cause and Effect (เหตุและผล)"
    ];
    let score = 0;
    const rows = [];
    for (let i = 0; i < 4; i++) {
      const checked = document.querySelector(`input[name="s2-chal-${i + 1}"]:checked`);
      const val = checked ? parseInt(checked.value, 10) : -1;
      const ok = val === key[i];
      if (ok) score++;
      rows.push(`<div style="margin-bottom:0.25rem;">${ok ? '✅' : '❌'} ${exps[i]}</div>`);
    }
    const pct = Math.round((score / 4) * 100);
    const passed = pct >= 70;
    const fb = document.getElementById('strat2-challenge-feedback');
    if (fb) {
      fb.style.display = 'block';
      fb.style.padding = '0.9rem';
      fb.style.borderRadius = '10px';
      fb.style.fontSize = '0.84rem';
      fb.style.background = passed ? '#ECFDF5' : '#FFFBEB';
      fb.style.border = passed ? '1.5px solid #10B981' : '1.5px solid #F59E0B';
      fb.style.color = '#0F172A';
      fb.innerHTML = `<div style="font-weight:800; margin-bottom:0.4rem;">${passed ? '🏆 ผ่านเกณฑ์ Main Idea Challenge!' : '💪 ลองทบทวนอีกครั้ง'} คะแนน: ${score} / 4 (${pct}%)</div>${rows.join('')}`;
    }
  }

  setStrat2HighlightTool(color) {
    this.strat2ActiveHighlightTool = color;
    const tools = ['yellow', 'green', 'blue'];
    tools.forEach(c => {
      const btn = document.getElementById(`strat2-tool-${c}`);
      if (btn) {
        btn.style.boxShadow = c === color ? '0 0 0 3px rgba(15,23,42,0.28)' : 'none';
        btn.style.transform = c === color ? 'scale(1.03)' : 'scale(1)';
      }
    });
  }

  highlightStrat2Sentence(sentIdx, forcedColor) {
    const color = forcedColor || this.strat2ActiveHighlightTool || 'yellow';
    if (!this.strat2HighlightColors) this.strat2HighlightColors = {};
    this.strat2HighlightColors[sentIdx] = color;

    const expected = {
      0: { role: 'yellow', exp: 'ประโยคที่ (1) คือ Main Idea (สีเหลือง): เปิดประเด็นว่าการทำอาหารกินเองที่บ้านช่วยให้สุขภาพดีและประหยัดเงิน' },
      1: { role: 'green', exp: 'ประโยคที่ (2) คือ Major Supporting Detail ที่ 1 (สีเขียว): ขึ้นต้นด้วย First บอกเหตุผลหลักเรื่องอาหารทำเองดีต่อสุขภาพ' },
      2: { role: 'blue', exp: 'ประโยคที่ (3) คือ Minor Supporting Detail (สีฟ้า): ขึ้นต้นด้วย For example ยกตัวอย่างการใช้ผักสดและลดน้ำมัน/น้ำตาล' },
      3: { role: 'green', exp: 'ประโยคที่ (4) คือ Major Supporting Detail ที่ 2 (สีเขียว): ขึ้นต้นด้วย Second บอกเหตุผลหลักเรื่องการประหยัดเงินค่าอาหาร' },
      4: { role: 'blue', exp: 'ประโยคที่ (5) คือ Minor Supporting Detail (สีฟ้า): ขึ้นต้นด้วย Specifically ยกตัวเลขราคาซื้อไข่และผัก 100 บาททำได้ 3 มื้อ' },
      5: { role: 'yellow', exp: 'ประโยคที่ (6) คือ Concluding Main Idea Restatement (สีเหลือง): สรุปย้ำใจความสำคัญปิดท้ายย่อหน้า' }
    };

    const el = document.getElementById(`strat2-hl-sent-${sentIdx}`);
    if (el) {
      if (color === 'yellow') {
        el.style.background = '#FEF08A';
        el.style.borderColor = '#EAB308';
      } else if (color === 'green') {
        el.style.background = '#DCFCE7';
        el.style.borderColor = '#22C55E';
      } else {
        el.style.background = '#DBEAFE';
        el.style.borderColor = '#3B82F6';
      }
    }

    const fb = document.getElementById('strat2-hl-feedback');
    if (fb && expected[sentIdx]) {
      const ok = expected[sentIdx].role === color;
      fb.style.display = 'block';
      fb.style.padding = '0.8rem';
      fb.style.borderRadius = '10px';
      fb.style.fontSize = '0.84rem';
      fb.style.background = ok ? '#ECFDF5' : '#FFFBEB';
      fb.style.border = ok ? '1.5px solid #10B981' : '1.5px solid #F59E0B';
      fb.style.color = '#0F172A';
      fb.innerHTML = `${ok ? '✅ <strong>เลือกสีถูกต้อง!</strong>' : '💡 <strong>คำแนะนำสีที่ถูกต้อง:</strong>'} ${expected[sentIdx].exp}`;
    }
  }

  resetStrat2Highlights() {
    this.strat2HighlightColors = {};
    for (let i = 0; i < 6; i++) {
      const el = document.getElementById(`strat2-hl-sent-${i}`);
      if (el) {
        el.style.background = '#fff';
        el.style.borderColor = '#E2E8F0';
      }
    }
    const fb = document.getElementById('strat2-hl-feedback');
    if (fb) fb.style.display = 'none';
  }

  revealStrat2Highlights() {
    const key = { 0: 'yellow', 1: 'green', 2: 'blue', 3: 'green', 4: 'blue', 5: 'yellow' };
    Object.keys(key).forEach(k => this.highlightStrat2Sentence(Number(k), key[k]));
    const fb = document.getElementById('strat2-hl-feedback');
    if (fb) {
      fb.style.display = 'block';
      fb.style.padding = '0.85rem';
      fb.style.borderRadius = '10px';
      fb.style.fontSize = '0.84rem';
      fb.style.background = '#ECFDF5';
      fb.style.border = '1.5px solid #10B981';
      fb.style.color = '#065F46';
      fb.innerHTML = '✅ <strong>เฉลยครบทั้ง 6 ประโยคแล้ว:</strong> สีเหลือง (1, 6) = Main Idea • สีเขียว (2, 4) = Major Supporting Details • สีฟ้า (3, 5) = Minor Supporting Details';
    }
  }

  submitStrat2PassageCheck() {
    const key = [0, 1, 1];
    const exps = [
      "Passage 1 (Sequence): คำเชื่อม First, Second, Next, Finally แสดงลำดับขั้นตอนการยืมหนังสือ โดยหลังหยิบหนังสือแล้วให้นำหนังสือและบัตรนักศึกษาไปที่เคาน์เตอร์ชั้น 1",
      "Passage 2 (Compare & Contrast): การอ่านคนเดียวช่วยให้มีสมาธิลึกโดยไม่มีเสียงคุย ส่วนการอ่านกับเพื่อนช่วยถามคำถามและแบ่งปันโน้ตเมื่อบทเรียนยาก",
      "Passage 3 (Cause & Effect): การรับประทานไข่ นม และผลไม้ทำให้สมองได้รับพลังงานสดชื่น ส่งผลให้นักศึกษาตั้งใจฟังและตอบคำถามได้ดี (As a result...)"
    ];
    let score = 0;
    const rows = [];
    for (let i = 0; i < 3; i++) {
      const sel = document.getElementById(`s2-pass-${i + 1}`);
      const val = sel && sel.value !== '' ? parseInt(sel.value, 10) : -1;
      const ok = val === key[i];
      if (ok) score++;
      rows.push(`<div style="margin-bottom:0.3rem;">${ok ? '✅' : '❌'} ${exps[i]}</div>`);
    }
    const fb = document.getElementById('strat2-passages-feedback');
    if (fb) {
      fb.style.display = 'block';
      fb.style.padding = '0.9rem';
      fb.style.borderRadius = '10px';
      fb.style.fontSize = '0.84rem';
      fb.style.background = score >= 2 ? '#ECFDF5' : '#FFFBEB';
      fb.style.border = score >= 2 ? '1.5px solid #10B981' : '1.5px solid #F59E0B';
      fb.style.color = '#0F172A';
      fb.innerHTML = `<div style="font-weight:800; margin-bottom:0.4rem;">ผลคะแนน While-Reading Passages 1–3: ${score} / 3 คะแนน</div>${rows.join('')}`;
    }
  }

  /* ------------------- Shared 30-Question Strategy Quiz Engine (Units 1 & 2) ------------------- */
  getActiveStrategyQuizContext() {
    if (this.currentStrategyUnit === 2 && ReadSkillsData.strategyUnit2Quiz) {
      return {
        unitNum: 2,
        quizData: ReadSkillsData.strategyUnit2Quiz,
        state: this.strat2QuizState,
        storageKey: 'bru_strat2_quiz_score'
      };
    }
    return {
      unitNum: 1,
      quizData: ReadSkillsData.strategyUnit1Quiz,
      state: this.strat1QuizState,
      storageKey: 'bru_strat1_quiz_score'
    };
  }

  // 7. Step 8: 30-Question Strategy Quiz Renderer & Handlers
  renderStrategyUnit1QuizStep(step) {
    setTimeout(() => {
      if (window.lucide) lucide.createIcons();
    }, 30);

    const ctx = this.getActiveStrategyQuizContext();
    const unitNum = ctx.unitNum;
    const quizData = ctx.quizData;
    const state = ctx.state;
    const totalQ = 30;
    if (!Array.isArray(state.passageSubmitted)) {
      state.passageSubmitted = [false, false, false];
    }

    const topCards = unitNum === 2 ? `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
        <div class="p-3.5 bg-purple-100/70 border border-purple-200 rounded-2xl space-y-1">
          <div class="flex items-center space-x-2 text-purple-950 font-bold">
            <i data-lucide="network" class="w-4 h-4 text-purple-700"></i>
            <span>Post-Reading Graphic Organizer & Support Check</span>
          </div>
          <p class="text-purple-900 leading-relaxed">
            <strong>Decoding Support Systems (A2–B1):</strong> แยกแยะ <strong>Major Supporting Details</strong> (เหตุผลหลัก) และ <strong>Minor Supporting Details</strong> (ตัวอย่าง/ตัวเลข) พร้อมสังเกตคำเชื่อม <em>Cause & Effect, Compare & Contrast, และ Sequence</em>
          </p>
        </div>
        <div class="p-3.5 bg-emerald-100/70 border border-emerald-200 rounded-2xl space-y-1">
          <div class="flex items-center space-x-2 text-emerald-950 font-bold">
            <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-700"></i>
            <span>Strategy Unit 2 Assessment & 70% Mastery Goal</span>
          </div>
          <p class="text-emerald-900 leading-relaxed">
            <strong>Web-Based Strategy Quiz (3 ชุด ชุดละ 10 ข้อ):</strong> ประเมินทักษะ Skimming, Scanning, Major/Minor Details และ Idea Relationships ในระดับภาษา A2–B1 (เกณฑ์ผ่าน 70% = 21/30 ข้อ)
          </p>
        </div>
      </div>
    ` : `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
        <div class="p-3.5 bg-purple-100/70 border border-purple-200 rounded-2xl space-y-1">
          <div class="flex items-center space-x-2 text-purple-950 font-bold">
            <i data-lucide="users" class="w-4 h-4 text-purple-700"></i>
            <span>Post-Reading Group Activity</span>
          </div>
          <p class="text-purple-900 leading-relaxed">
            <strong>Small-Group Discussion:</strong> นักศึกษาทำงานกลุ่มย่อยเพื่อเปรียบเทียบคำตอบจากการคาดเดา (Predictions) และอภิปรายประโยคใจความสำคัญ (Topic Sentences & Main Ideas) ที่ระบุได้ในบทอ่าน Passages 1–3
          </p>
        </div>
        <div class="p-3.5 bg-emerald-100/70 border border-emerald-200 rounded-2xl space-y-1">
          <div class="flex items-center space-x-2 text-emerald-950 font-bold">
            <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-700"></i>
            <span>Strategy Assessment & 70% Mastery Goal</span>
          </div>
          <p class="text-emerald-900 leading-relaxed">
            <strong>Web-Based Strategy Quiz (3 ชุด ชุดละ 10 ข้อ):</strong> ประเมินทักษะการสำรวจบทอ่าน (Previewing), การคาดเดา (Predicting), คำศัพท์ก่อนอ่าน (Vocabulary Preview) และการหาใจความสำคัญ (เกณฑ์ผ่าน 70% = 21/30 ข้อ)
          </p>
        </div>
      </div>
    `;

    const bottomReview = unitNum === 2 ? `
      <div class="p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3 mt-6 text-left">
        <div class="flex items-center space-x-2 border-b border-slate-100 pb-2 text-purple-900 font-bold text-xs sm:text-sm">
          <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-500"></i>
          <span>Unit 2 Review & Common Mistakes (สรุปบทที่ 2 และข้อควรระวัง)</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-rose-50/80 border border-rose-200 rounded-xl space-y-1 text-rose-950">
            <strong class="font-bold block text-rose-900">1. สับสนระหว่าง Major กับ Minor Detail</strong>
            <p class="leading-relaxed">จำไว้ว่า <strong>Major Detail</strong> คือเหตุผลหลักที่รองรับ Main Idea (มักมี <em>First, Second</em>) ส่วน <strong>Minor Detail</strong> คือตัวอย่างหรือตัวเลขที่ขยายความ (มักมี <em>For example, Specifically</em>)</p>
          </div>
          <div class="p-3 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1 text-amber-950">
            <strong class="font-bold block text-amber-900">2. มองข้าม Signal Words</strong>
            <p class="leading-relaxed">คำเชื่อมสั้นๆ เช่น <em>because, so</em> (เหตุ-ผล), <em>however, on the other hand</em> (ความต่าง), และ <em>first, next, finally</em> (ลำดับขั้นตอน) คือหัวใจสำคัญในการเข้าใจความสัมพันธ์ของประโยค</p>
          </div>
          <div class="p-3 bg-purple-50/80 border border-purple-200 rounded-xl space-y-1 text-purple-950">
            <strong class="font-bold block text-purple-900">3. ใช้ Skimming กับ Scanning สลับกัน</strong>
            <p class="leading-relaxed">ใช้ <strong>Skimming</strong> เมื่อต้องการหา Main Idea ภาพรวม และใช้ <strong>Scanning</strong> เมื่อต้องการเจาะหาตัวเลข เวลา วันที่ หรือชื่อเฉพาะอย่างรวดเร็ว</p>
          </div>
        </div>
      </div>
    ` : `
      <div class="p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3 mt-6 text-left">
        <div class="flex items-center space-x-2 border-b border-slate-100 pb-2 text-purple-900 font-bold text-xs sm:text-sm">
          <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-500"></i>
          <span>Unit 1 Review & Common Mistakes (สรุปบทที่ 1 และข้อผิดพลาดที่พบบ่อย)</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-rose-50/80 border border-rose-200 rounded-xl space-y-1 text-rose-950">
            <strong class="font-bold block text-rose-900">1. ข้ามการ Preview ก่อนอ่าน</strong>
            <p class="leading-relaxed">นักศึกษาที่เริ่มอ่านบรรทัดแรกทันทีโดยไม่ดูชื่อเรื่อง หัวข้อย่อย หรือคำตัวหนา มักจับประเด็นหลักได้ช้าและหลงทางในคำศัพท์</p>
          </div>
          <div class="p-3 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1 text-amber-950">
            <strong class="font-bold block text-amber-900">2. เลือก Supporting Detail เป็น Main Idea</strong>
            <p class="leading-relaxed">ระวังกับดัก <em>Too Narrow</em> เช่น การเลือกประโยคตัวอย่างย่อยไปตอบเป็น Main Idea ทั้งที่เป็นเพียงรายละเอียดสนับสนุน</p>
          </div>
          <div class="p-3 bg-purple-50/80 border border-purple-200 rounded-xl space-y-1 text-purple-950">
            <strong class="font-bold block text-purple-900">3. ไม่ตรวจสอบคำทำนายขณะอ่าน</strong>
            <p class="leading-relaxed">การคาดเดา (Predicting) ที่ดีต้องนำไปเปรียบเทียบกับข้อมูลจริงในย่อหน้าเสมอ เพื่อยืนยันหรือปรับปรุงความเข้าใจให้ตรงกับผู้เขียน</p>
          </div>
        </div>
      </div>
    `;

    if (state.isCompleted) {
      const totalScore = state.passageScores.reduce((a, b) => a + b, 0);
      const percentage = Math.round((totalScore / totalQ) * 100);
      const passed = percentage >= 70;

      return `
        <div class="max-w-2xl mx-auto space-y-6 text-center py-4">
          <div class="w-20 h-20 mx-auto rounded-3xl ${passed ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'} flex items-center justify-center shadow-lg">
            <i data-lucide="${passed ? 'trophy' : 'award'}" class="w-10 h-10"></i>
          </div>

          <div class="space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider ${passed ? 'text-emerald-700 bg-emerald-100' : 'text-amber-800 bg-amber-100'} px-3 py-1 rounded-full">
              ${passed ? `Strategy Unit ${unitNum} Passed (≥ 70%)! 🎉` : 'Keep Practicing! 💪'}
            </span>
            <h3 class="text-2xl sm:text-3xl font-bold text-slate-900">${quizData.title}</h3>
            <p class="text-xs text-slate-500">${quizData.thaiTitle}</p>
          </div>

          <div class="p-6 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-950 rounded-3xl text-white shadow-xl">
            <p class="text-xs uppercase tracking-widest text-purple-200 mb-1">Total Strategy Quiz Score</p>
            <div class="text-5xl font-extrabold mb-2">${totalScore} <span class="text-2xl text-purple-300 font-normal">/ ${totalQ}</span></div>
            <div class="inline-flex items-center space-x-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-semibold">
              <span>Accuracy: ${percentage}%</span>
              <span>&bull;</span>
              <span>Target: ≥ 70% (21/30)</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            ${quizData.passages.map((p, idx) => `
              <div onclick="app.goToStrat1QuizQuestion(${idx}, 0)" class="p-4 bg-white hover:bg-purple-50/60 cursor-pointer transition rounded-2xl border border-purple-100 shadow-sm flex items-center justify-between">
                <div class="pr-2">
                  <p class="text-[10px] font-bold text-purple-700 uppercase">Passage Quiz ${idx + 1}</p>
                  <p class="text-xs font-bold text-slate-800 line-clamp-1">${p.title.replace(/^Passage \d+:\s*/, '')}</p>
                </div>
                <div class="text-right shrink-0">
                  <span class="text-lg font-extrabold ${state.passageScores[idx] >= 7 ? 'text-emerald-600' : 'text-amber-600'}">${state.passageScores[idx]}/10</span>
                  <span class="block text-[10px] text-slate-400">${state.passageScores[idx] * 10}%</span>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button onclick="app.goToStrat1QuizQuestion(0, 0)" class="w-full sm:w-auto px-6 py-3 bg-white border border-purple-200 hover:bg-purple-50 text-purple-800 font-bold rounded-xl transition flex items-center justify-center space-x-2 text-xs cursor-pointer">
              <i data-lucide="layout-list" class="w-4 h-4"></i>
              <span>กลับไปดูแยกแต่ละ Passage Quiz (1–3)</span>
            </button>
            <button onclick="app.resetStrat1Quiz()" class="w-full sm:w-auto px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl transition flex items-center justify-center space-x-2 text-xs shadow-md cursor-pointer">
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
              <span>ทำแบบทดสอบอีกครั้ง (Retake All)</span>
            </button>
            <button onclick="app.selectStrategyStep(0)" class="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition flex items-center justify-center space-x-2 text-xs cursor-pointer">
              <i data-lucide="book-open" class="w-4 h-4"></i>
              <span>กลับไปทบทวน Step 1</span>
            </button>
          </div>
          ${bottomReview}
        </div>
      `;
    }

    const pIdx = state.passageIndex;
    const qIdx = state.questionIndex;
    const currentPassage = quizData.passages[pIdx];
    const currentQuestion = currentPassage.questions[qIdx];
    const answerKey = `${pIdx}-${qIdx}`;
    const existingAnswer = state.answers[answerKey];
    const isHighlightMode = currentQuestion.type === 'highlight';
    const isPassageSubmitted = !!state.passageSubmitted[pIdx];
    const allPassagesSubmitted = state.passageSubmitted.every(Boolean);

    const countAnsweredInPassage = (idx) => {
      let c = 0;
      for (let i = 0; i < 10; i++) {
        const a = state.answers[`${idx}-${i}`];
        if (a && a.selected !== undefined && a.selected !== null) c++;
      }
      return c;
    };
    const doneInCurrent = countAnsweredInPassage(pIdx);
    const passageProgressPercent = Math.round((doneInCurrent / 10) * 100);
    const totalScoreSoFar = state.passageScores.reduce((a, b) => a + b, 0);
    const submittedCount = state.passageSubmitted.filter(Boolean).length;

    return `
      <div class="space-y-6">
        ${topCards}

        <!-- Top Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 pb-3">
          <div>
            <div class="flex items-center space-x-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-pink-100 text-pink-800 uppercase tracking-wider">Passage Quiz ${pIdx + 1} (10 ข้อ)</span>
              <span class="text-xs font-semibold text-slate-500">ชุดที่ ${pIdx + 1} จาก 3</span>
            </div>
            <h4 class="text-base sm:text-lg font-bold text-slate-900 mt-0.5">${currentPassage.title}</h4>
            <p class="text-xs text-slate-500">${currentPassage.thaiTitle}</p>
          </div>

          <div class="flex items-center space-x-3 self-start sm:self-auto">
            <div class="bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-xl text-right">
              <span class="text-[10px] text-purple-600 block font-semibold">${isPassageSubmitted ? `คะแนนชุดที่ ${pIdx + 1}` : `ตอบแล้ว (ชุดที่ ${pIdx + 1})`}</span>
              <span class="text-xs font-bold text-purple-900">${isPassageSubmitted ? `${state.passageScores[pIdx]} / 10 คะแนน` : `${doneInCurrent} / 10 ข้อ`}</span>
            </div>
            <div class="bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-right">
              <span class="text-[10px] text-emerald-700 block font-semibold">คะแนนรวม (${submittedCount}/3 ชุด)</span>
              <span class="text-xs font-bold text-emerald-900">${totalScoreSoFar} / ${totalQ}</span>
            </div>
            <button onclick="app.playStrat1QuizPassageAudio(${pIdx})" class="px-3 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer shadow-sm" title="Listen to Passage Audio">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
              <span class="hidden sm:inline">Listen</span>
            </button>
          </div>
        </div>

        <!-- Passage Quiz Tabs (1-3) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          ${quizData.passages.map((p, idx) => {
            const done = countAnsweredInPassage(idx);
            const active = idx === pIdx;
            const sub = !!state.passageSubmitted[idx];
            return `
              <button onclick="app.goToStrat1QuizQuestion(${idx}, 0)" class="p-2.5 rounded-xl border text-left transition cursor-pointer ${
                active
                  ? 'bg-purple-700 border-purple-700 text-white shadow-md'
                  : sub
                    ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950 hover:bg-emerald-100/80'
                    : 'bg-white border-purple-200 text-purple-900 hover:bg-purple-50'
              }">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold">Passage Quiz ${idx + 1}</span>
                  ${sub ? `<span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded ${active ? 'bg-white/20 text-white' : 'bg-emerald-200/80 text-emerald-900'}">${state.passageScores[idx]}/10 ✓</span>` : ''}
                </div>
                <div class="text-[10px] mt-0.5 ${active ? 'text-purple-100' : sub ? 'text-emerald-700 font-semibold' : 'text-slate-500'}">
                  ${sub ? 'ส่งและเฉลยแล้ว' : `ตอบแล้ว ${done}/10 ข้อ`}
                </div>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Progress Bar -->
        <div class="space-y-1">
          <div class="flex items-center justify-between text-[11px] font-semibold text-slate-500">
            <span>${isPassageSubmitted ? `Passage Quiz ${pIdx + 1} • ส่งคำตอบและเฉลยครบทั้ง 10 ข้อแล้ว` : `Passage Quiz ${pIdx + 1} • ข้อที่ ${qIdx + 1} จาก 10`}</span>
            <span class="text-purple-700 font-bold">${isPassageSubmitted ? `ได้คะแนน ${state.passageScores[pIdx]} / 10 (${state.passageScores[pIdx] * 10}%)` : `ตอบแล้ว ${doneInCurrent} / 10 ข้อ (${passageProgressPercent}%)`}</span>
          </div>
          <div class="w-full bg-slate-200/80 rounded-full h-2 overflow-hidden">
            <div class="bg-gradient-to-r ${isPassageSubmitted ? 'from-emerald-500 to-teal-500' : 'from-purple-600 to-pink-500'} h-2 rounded-full transition-all duration-300" style="width: ${isPassageSubmitted ? 100 : passageProgressPercent}%"></div>
          </div>
        </div>

        <!-- Main Two-Column Quiz Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <!-- Left Column: Interactive Reading Passage (6 Cols) -->
          <div class="lg:col-span-6 bg-slate-900 text-slate-100 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4 border border-slate-800 lg:sticky lg:top-24">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div class="flex items-center space-x-2">
                <i data-lucide="book-open" class="w-4 h-4 text-pink-400"></i>
                <span class="text-xs font-bold uppercase tracking-wider text-pink-300">Reading Passage ${pIdx + 1} of 3 (CEFR A2–B1)</span>
              </div>
              <button 
                onclick="app.playStrat1QuizPassageAudio(${pIdx})"
                class="px-3 py-1.5 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer"
              >
                <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                <span>Listen</span>
              </button>
            </div>

            ${!isPassageSubmitted && isHighlightMode ? `
              <div class="p-3 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs flex items-center space-x-2">
                <i data-lucide="mouse-pointer-click" class="w-4 h-4 shrink-0 text-amber-300"></i>
                <span><strong>Interactive Highlight Mode:</strong> คลิกเลือกประโยคในบทอ่านด้านล่างที่ตรงกับคำถามข้อนี้โดยตรง</span>
              </div>
            ` : ''}

            <div class="space-y-2 text-sm sm:text-base leading-relaxed font-serif max-h-[500px] overflow-y-auto pr-1">
              ${currentPassage.sentences.map((sent, sIdx) => {
                let sentStyle = 'hover:bg-slate-800/80 text-slate-200';
                let clickAttr = '';
                if (!isPassageSubmitted && isHighlightMode) {
                  if (existingAnswer && existingAnswer.selected === sIdx) {
                    sentStyle = 'bg-purple-500/40 border border-purple-300 text-white font-semibold cursor-pointer';
                  } else {
                    sentStyle = 'hover:bg-amber-500/30 hover:text-white cursor-pointer border border-transparent hover:border-amber-400/50';
                  }
                  clickAttr = `onclick="app.answerStrat1QuizHighlight(${sIdx})"`;
                }
                return `
                  <div ${clickAttr} class="p-2.5 rounded-xl transition ${sentStyle}">
                    <span class="text-[11px] font-sans font-bold text-purple-400 mr-1.5">(${sIdx + 1})</span>
                    <span>${sent}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Right Column: Active Question OR Submitted 10-Question Answer Key (6 Cols) -->
          <div class="lg:col-span-6 space-y-4">
            ${isPassageSubmitted ? `
              <div class="bg-white p-5 rounded-3xl border border-emerald-200 shadow-md space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl ${state.passageScores[pIdx] >= 7 ? 'bg-emerald-50 border border-emerald-200' : 'bg-amber-50 border border-amber-200'}">
                  <div class="space-y-1">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${state.passageScores[pIdx] >= 7 ? 'bg-emerald-200 text-emerald-900' : 'bg-amber-200 text-amber-900'}">
                      ${state.passageScores[pIdx] >= 7 ? 'ผ่านเกณฑ์ (≥ 70%) 🎉' : 'ส่งคำตอบแล้ว 💪'}
                    </span>
                    <h5 class="text-base font-bold text-slate-900">ผลคะแนน Passage Quiz ${pIdx + 1}</h5>
                    <p class="text-xs text-slate-600">${currentPassage.title}</p>
                  </div>
                  <div class="text-left sm:text-right shrink-0">
                    <div class="text-3xl font-black ${state.passageScores[pIdx] >= 7 ? 'text-emerald-700' : 'text-amber-700'}">${state.passageScores[pIdx]} <span class="text-lg opacity-70">/ 10</span></div>
                    <div class="text-[11px] font-bold text-slate-600">${state.passageScores[pIdx] * 10}% Accuracy</div>
                  </div>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-2">
                  <button onclick="app.resetStrat1PassageQuiz(${pIdx})" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs cursor-pointer transition flex items-center space-x-1.5">
                    <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                    <span>ทำ Passage Quiz ${pIdx + 1} ใหม่</span>
                  </button>
                  <div class="flex flex-wrap items-center gap-2">
                    ${pIdx < 2 ? `
                      <button onclick="app.goToStrat1QuizQuestion(${pIdx + 1}, 0)" class="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs cursor-pointer transition shadow-sm flex items-center space-x-1.5">
                        <span>ไปทำ Passage Quiz ${pIdx + 2} (10 ข้อ)</span>
                        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                      </button>
                    ` : ''}
                    ${allPassagesSubmitted ? `
                      <button onclick="app.showStrat1QuizSummary()" class="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl text-xs cursor-pointer transition shadow-sm flex items-center space-x-1.5">
                        <span>ดูสรุปคะแนนรวม 30 ข้อ 🏆</span>
                      </button>
                    ` : ''}
                  </div>
                </div>

                <div class="space-y-2.5 pt-2 border-t border-slate-100">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-purple-900">เฉลยคำตอบ Passage Quiz ${pIdx + 1} (ข้อ 1–10)</span>
                    <span class="text-[11px] text-slate-500">ตอบถูก ${state.passageScores[pIdx]} จาก 10 ข้อ</span>
                  </div>
                  <div class="space-y-2.5 max-h-[540px] overflow-y-auto pr-1">
                    ${currentPassage.questions.map((q, idx) => {
                      const a = state.answers[`${pIdx}-${idx}`];
                      const sel = a ? a.selected : undefined;
                      const ok = this.isQuizAnswerCorrect(q, sel);
                      return `
                        <div class="p-3.5 rounded-xl border ${ok ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'} space-y-1.5 text-xs">
                          <div class="flex items-start space-x-2">
                            <span class="w-5 h-5 rounded-full shrink-0 flex items-center justify-center font-bold text-[10px] ${ok ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'}">${ok ? '✓' : '✕'}</span>
                            <span class="font-bold text-slate-900 leading-snug">ข้อที่ ${idx + 1}. ${q.prompt}</span>
                          </div>
                          <div class="pl-7 space-y-1 leading-relaxed">
                            <div class="${ok ? 'text-emerald-800' : 'text-rose-800'}"><strong>คำตอบของคุณ:</strong> ${this.getQuizAnswerText(q, currentPassage, sel)}</div>
                            ${ok ? '' : `<div class="text-emerald-800"><strong>คำตอบที่ถูก:</strong> ${this.getQuizCorrectText(q, currentPassage)}</div>`}
                            ${q.explanation ? `<div class="text-slate-600"><strong>คำอธิบาย:</strong> ${q.explanation}</div>` : ''}
                          </div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              </div>
            ` : `
              <div class="bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-purple-100 space-y-4">
                <!-- Question Navigator (1-10) -->
                <div class="flex flex-wrap gap-1.5">
                  ${currentPassage.questions.map((qq, idx) => {
                    const a = state.answers[`${pIdx}-${idx}`];
                    const answered = a && a.selected !== undefined && a.selected !== null;
                    const isCur = idx === qIdx;
                    return `
                      <button onclick="app.goToStrat1QuizQuestion(${pIdx}, ${idx})" class="w-8 h-8 rounded-lg text-[11px] font-bold transition cursor-pointer border ${answered ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-slate-600 border-slate-200 hover:border-purple-400'} ${isCur ? 'ring-2 ring-pink-400 ring-offset-1' : ''}">
                        ${idx + 1}
                      </button>
                    `;
                  }).join('')}
                </div>

                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full text-[11px] font-bold ${
                    currentQuestion.type === 'mc' ? 'bg-purple-100 text-purple-800' :
                    currentQuestion.type === 'highlight' ? 'bg-amber-100 text-amber-900' :
                    'bg-pink-100 text-pink-800'
                  }">
                    ${
                      currentQuestion.type === 'mc' ? 'Multiple Choice' :
                      currentQuestion.type === 'highlight' ? 'Highlight Sentence in Text' :
                      'Vocabulary / Signal Word Fill-in-the-Blank'
                    }
                  </span>
                  <span class="text-xs font-bold text-purple-700">ข้อที่ ${qIdx + 1} / 10 • 1 Point</span>
                </div>

                <h5 class="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  ${currentQuestion.prompt}
                </h5>

                ${currentQuestion.type === 'mc' ? `
                  <div class="space-y-2.5">
                    ${currentQuestion.options.map((opt, oIdx) => {
                      const isSel = existingAnswer && existingAnswer.selected === oIdx;
                      const btnStyle = isSel
                        ? 'border-purple-600 bg-purple-50 text-purple-950 font-bold shadow-xs'
                        : 'border-purple-200 hover:border-purple-600 bg-white hover:bg-purple-50/50 text-slate-800';
                      return `
                        <button 
                          onclick="app.answerStrat1QuizMC(${oIdx})"
                          class="w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm transition flex items-start space-x-3 cursor-pointer ${btnStyle}"
                        >
                          <span class="w-6 h-6 rounded-lg ${isSel ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-900'} flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            ${String.fromCharCode(65 + oIdx)}
                          </span>
                          <span class="flex-1 leading-relaxed">${opt}</span>
                        </button>
                      `;
                    }).join('')}
                  </div>
                ` : ''}

                ${currentQuestion.type === 'highlight' ? `
                  <div class="space-y-2">
                    <p class="text-xs text-slate-600 bg-amber-50 border border-amber-200 p-3 rounded-xl">
                      👈 คลิกเลือกประโยคคำตอบในบทอ่านด้านซ้ายมือ หรือเลือกหมายเลขประโยคด้านล่าง:
                    </p>
                    <div class="grid grid-cols-2 gap-2">
                      ${currentPassage.sentences.map((s, sIdx) => {
                        const isSel = existingAnswer && existingAnswer.selected === sIdx;
                        const btnStyle = isSel
                          ? 'border-purple-600 bg-purple-700 text-white font-bold shadow-sm'
                          : 'border-amber-300 bg-amber-50/60 hover:bg-amber-100 text-amber-950';
                        return `
                          <button 
                            onclick="app.answerStrat1QuizHighlight(${sIdx})"
                            class="p-2.5 rounded-xl border text-xs font-semibold transition cursor-pointer ${btnStyle}"
                          >
                            Sentence (${sIdx + 1})
                          </button>
                        `;
                      }).join('')}
                    </div>
                  </div>
                ` : ''}

                ${currentQuestion.type === 'fillBlank' ? `
                  <div class="space-y-3">
                    <div class="p-3.5 bg-slate-900 text-slate-100 rounded-2xl text-xs sm:text-sm font-serif italic leading-relaxed">
                      "${currentQuestion.sentenceWithBlank}"
                    </div>
                    <div class="grid grid-cols-2 gap-2.5">
                      ${currentQuestion.choices.map((word) => {
                        const isSel = existingAnswer && existingAnswer.selected === word;
                        const btnStyle = isSel
                          ? 'border-purple-700 bg-purple-700 text-white font-bold shadow-sm'
                          : 'border-pink-200 bg-pink-50/50 hover:bg-pink-100 text-pink-950 font-semibold';
                        return `
                          <button 
                            onclick="app.answerStrat1QuizFillBlank('${String(word).replace(/'/g, "\\'")}')"
                            class="p-3 rounded-xl border text-xs sm:text-sm transition cursor-pointer ${btnStyle}"
                          >
                            ${word}
                          </button>
                        `;
                      }).join('')}
                    </div>
                  </div>
                ` : ''}

                <!-- Prev / Next / Submit Controls -->
                <div class="pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
                  <button onclick="app.prevStrat1QuizQuestion()" ${qIdx === 0 ? 'disabled' : ''} class="px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${qIdx === 0 ? 'bg-slate-100 text-slate-300 cursor-default' : 'bg-slate-200/90 hover:bg-slate-300 text-slate-700 cursor-pointer'}">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i>
                    <span>ข้อก่อนหน้า</span>
                  </button>
                  ${qIdx === 9 ? `
                    <button onclick="app.submitStrat1PassageQuiz(${pIdx})" class="px-6 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl text-xs transition cursor-pointer shadow-md flex items-center space-x-1.5">
                      <span>ส่งคำตอบและดูเฉลย (10 ข้อ) 🏆</span>
                    </button>
                  ` : `
                    <button onclick="app.nextStrat1QuizQuestion()" class="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs transition cursor-pointer shadow-md flex items-center space-x-1.5">
                      <span>ข้อถัดไป</span>
                      <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                  `}
                </div>
              </div>

              <!-- Submit Panel for this 10-Question Passage Quiz -->
              <div class="p-4 bg-pink-50/70 border border-pink-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <p class="text-[11px] text-pink-900 leading-relaxed">
                  เมื่อทำครบ 10 ข้อของ <strong>Passage Quiz ${pIdx + 1}</strong> แล้ว กด <strong>ส่งคำตอบ</strong> เพื่อตรวจคะแนนและดูเฉลยของชุดนี้ทันที
                </p>
                <button onclick="app.submitStrat1PassageQuiz(${pIdx})" class="w-full sm:w-auto shrink-0 px-5 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl text-xs transition cursor-pointer shadow-md">
                  ส่งคำตอบชุดที่ ${pIdx + 1} (${doneInCurrent}/10)
                </button>
              </div>
            `}
          </div>

        </div>
        ${bottomReview}
      </div>
    `;
  }

  selectStrat1QuizPassage(pIndex) {
    this.goToStrat1QuizQuestion(pIndex, 0);
  }

  goToStrat1QuizQuestion(pIdx, qIdx) {
    const { state } = this.getActiveStrategyQuizContext();
    state.isCompleted = false;
    state.passageIndex = pIdx;
    state.questionIndex = qIdx;
    this.navigate('strategies', true);
  }

  setStrat1QuizAnswer(selected) {
    const { state } = this.getActiveStrategyQuizContext();
    if (state.isCompleted) return;
    if (Array.isArray(state.passageSubmitted) && state.passageSubmitted[state.passageIndex]) return;
    state.answers[`${state.passageIndex}-${state.questionIndex}`] = { selected };
    this.navigate('strategies', true);
  }

  answerStrat1QuizMC(optIndex) {
    this.setStrat1QuizAnswer(optIndex);
  }

  answerStrat1QuizHighlight(sentIndex) {
    this.setStrat1QuizAnswer(sentIndex);
  }

  answerStrat1QuizFillBlank(word) {
    this.setStrat1QuizAnswer(word);
  }

  prevStrat1QuizQuestion() {
    const { state } = this.getActiveStrategyQuizContext();
    if (state.questionIndex > 0) {
      state.questionIndex--;
    }
    this.navigate('strategies', true);
  }

  nextStrat1QuizQuestion() {
    const { state } = this.getActiveStrategyQuizContext();
    if (state.questionIndex < 9) {
      state.questionIndex++;
    }
    this.navigate('strategies', true);
  }

  submitStrat1PassageQuiz(pIdx) {
    const { state, quizData, storageKey } = this.getActiveStrategyQuizContext();
    const targetP = pIdx !== undefined ? pIdx : state.passageIndex;
    const passage = quizData.passages[targetP];
    if (!passage) return;

    if (!Array.isArray(state.passageSubmitted)) {
      state.passageSubmitted = [false, false, false];
    }

    let unanswered = 0;
    passage.questions.forEach((q, qIdx) => {
      const a = state.answers[`${targetP}-${qIdx}`];
      if (!a || a.selected === undefined || a.selected === null) unanswered++;
    });
    if (unanswered > 0 && !confirm(`ยังมี ${unanswered} ข้อใน Passage Quiz ${targetP + 1} ที่ยังไม่ได้ตอบ ต้องการส่งคำตอบเลยหรือไม่?`)) {
      return;
    }

    let pScore = 0;
    passage.questions.forEach((q, qIdx) => {
      const key = `${targetP}-${qIdx}`;
      const a = state.answers[key];
      const ok = a ? this.isQuizAnswerCorrect(q, a.selected) : false;
      if (a) a.isCorrect = ok;
      if (ok) pScore++;
    });

    state.passageScores[targetP] = pScore;
    state.passageSubmitted[targetP] = true;
    state.passageIndex = targetP;

    const totalScore = state.passageScores.reduce((a, b) => a + b, 0);
    localStorage.setItem(storageKey, totalScore);
    state.lastScore = totalScore;
    this.navigate('strategies', true);
  }

  resetStrat1PassageQuiz(pIdx) {
    const { state } = this.getActiveStrategyQuizContext();
    const targetP = pIdx !== undefined ? pIdx : state.passageIndex;
    if (!Array.isArray(state.passageSubmitted)) {
      state.passageSubmitted = [false, false, false];
    }
    for (let i = 0; i < 10; i++) {
      delete state.answers[`${targetP}-${i}`];
    }
    state.passageScores[targetP] = 0;
    state.passageSubmitted[targetP] = false;
    state.passageIndex = targetP;
    state.questionIndex = 0;
    state.isCompleted = false;
    this.navigate('strategies', true);
  }

  showStrat1QuizSummary() {
    const { state } = this.getActiveStrategyQuizContext();
    state.isCompleted = true;
    this.navigate('strategies', false);
  }

  resetStrat1Quiz() {
    const { unitNum, storageKey } = this.getActiveStrategyQuizContext();
    const saved = localStorage.getItem(storageKey);
    const fresh = {
      passageIndex: 0,
      questionIndex: 0,
      answers: {},
      passageScores: [0, 0, 0],
      passageSubmitted: [false, false, false],
      currentFeedback: null,
      isCompleted: false,
      lastScore: saved ? parseInt(saved) : null
    };
    if (unitNum === 2) {
      this.strat2QuizState = fresh;
    } else {
      this.strat1QuizState = fresh;
    }
    this.navigate('strategies', true);
  }

  playStrat1QuizPassageAudio(pIndex) {
    const { quizData } = this.getActiveStrategyQuizContext();
    if (!quizData || !quizData.passages[pIndex]) return;
    const passage = quizData.passages[pIndex];
    this.togglePassageAudio(encodeURIComponent(passage.audioText));
  }

  // 4. Practice & Quiz View (Section D: Practice & Quiz)
  renderPracticeView() {
    if (this.activeStandaloneQuizId) {
      if (this.activeQuizResult) {
        return this.renderStandaloneQuizResult();
      }
      return this.renderStandaloneQuizRunner();
    }
    return this.renderPracticeHub();
  }

  // Practice Hub (Hub listing games and 6 integrated standalone quizzes)
  renderPracticeHub() {
    const quizzes = ReadSkillsData.practiceOptions.quizzes;
    const games = ReadSkillsData.practiceOptions.games;

    return `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">Module: Practice & Quiz (แบบฝึกหัดและแบบทดสอบ)</h2>
          <p class="text-xs text-slate-600">Section D: Integrated assessments combining Reading Lessons and Reading Strategies (ควิชแยกเฉพาะรวม 2 เนื้อหา)</p>
        </div>

        <!-- 1. Interactive Educational Games -->
        <div>
          <h3 class="text-base font-bold text-purple-900 mb-3 flex items-center space-x-2">
            <i data-lucide="gamepad-2" class="w-5 h-5 text-purple-700"></i>
            <span>Educational Reading Games (เกมการเรียนรู้คำศัพท์และความเร็ว)</span>
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${games.map((g, idx) => `
              <div class="glass-card p-6 border-l-4 ${idx === 0 ? 'border-purple-700' : 'border-amber-500'} space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 ${idx === 0 ? 'bg-purple-100 text-purple-800' : 'bg-amber-100 text-amber-800'} rounded-xl flex items-center justify-center font-bold">
                    <i data-lucide="${g.icon || 'gamepad'}" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm text-slate-900">${g.title}</h4>
                    <span class="text-[10px] uppercase font-bold text-purple-700">Interactive Game Mode</span>
                  </div>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">${g.description}</p>
                <div class="pt-2">
                  <button onclick="alert('Starting ${g.title}!')" class="px-4 py-2 ${idx === 0 ? 'bg-purple-700 hover:bg-purple-800' : 'bg-amber-600 hover:bg-amber-700'} text-white text-xs font-semibold rounded-xl transition flex items-center space-x-2">
                    <i data-lucide="play" class="w-3.5 h-3.5"></i>
                    <span>Play Challenge</span>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 2. Unit & Strategy Integrated Quizzes (ควิชแยกเฉพาะรวม 2 เนื้อหา) -->
        <div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
            <h3 class="text-base font-bold text-purple-900 flex items-center space-x-2">
              <i data-lucide="award" class="w-5 h-5 text-emerald-700"></i>
              <span>Unit Comprehension Quizzes (แบบทดสอบประจำบทเรียน 6 Units)</span>
            </h3>
            <span class="text-[11px] font-semibold text-purple-800 bg-purple-100/80 px-3 py-1 rounded-full">
              บูรณาการ Module 1 (Lessons) + Module 2 (Strategies)
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${quizzes.map((q, idx) => `
              <div class="glass-card p-5 border border-purple-100 flex flex-col justify-between hover:shadow-md transition">
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-purple-100 text-purple-800">${q.code}</span>
                    <span class="text-[10px] text-slate-500 font-semibold flex items-center space-x-1">
                      <i data-lucide="clock" class="w-3 h-3"></i>
                      <span>${q.timeMinutes} mins</span>
                    </span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900 leading-snug">${q.title}</h4>
                  <p class="text-[11px] text-purple-700 font-semibold">${q.thaiTitle}</p>
                  <p class="text-[11px] text-slate-500">${q.questionsCount} Multiple-Choice Questions &bull; Immediate Feedback</p>
                </div>

                <div class="pt-4 mt-3 border-t border-purple-50 flex items-center justify-between">
                  <span class="text-[11px] font-bold text-emerald-700 flex items-center space-x-1">
                    <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
                    <span>Passing: ${q.passingScore}%</span>
                  </span>
                  <button onclick="app.startStandaloneQuiz('${q.id}')" class="px-3.5 py-1.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg text-xs transition flex items-center space-x-1 cursor-pointer">
                    <span>Take Quiz</span>
                    <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    `;
  }

  // Standalone Quiz Test Runner Screen (ควิชทดสอบเฉพาะ)
  renderStandaloneQuizRunner() {
    const quiz = ReadSkillsData.practiceOptions.quizzes.find(q => q.id === this.activeStandaloneQuizId);
    if (!quiz) {
      this.activeStandaloneQuizId = null;
      return this.renderPracticeHub();
    }

    const answeredCount = Object.keys(this.activeQuizAnswers).length;
    const allAnswered = answeredCount === quiz.questions.length;

    return `
      <div class="space-y-6">
        <!-- Top Nav & Breadcrumb Bar -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 glass-card p-4 sm:p-5">
          <div class="flex items-center space-x-3">
            <button onclick="app.exitStandaloneQuiz()" class="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer shrink-0">
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
              <span class="hidden sm:inline">Back to Quiz Hub</span>
              <span class="sm:hidden">Back</span>
            </button>
            <div class="h-6 w-px bg-purple-200"></div>
            <div>
              <div class="flex items-center space-x-2">
                <span class="bg-purple-700 text-white text-[10px] font-extrabold px-2 py-0.5 rounded">${quiz.code}</span>
                <span class="text-xs font-bold text-slate-800 line-clamp-1">${quiz.title}</span>
              </div>
              <p class="text-[11px] text-purple-700 font-medium line-clamp-1">${quiz.thaiTitle}</p>
            </div>
          </div>

          <div class="flex items-center space-x-3 text-xs self-end sm:self-auto">
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-lg font-semibold flex items-center space-x-1">
              <i data-lucide="help-circle" class="w-3.5 h-3.5"></i>
              <span>Answered: ${answeredCount} / ${quiz.questions.length}</span>
            </span>
            <span class="px-3 py-1 bg-amber-100 text-amber-900 rounded-lg font-semibold flex items-center space-x-1">
              <i data-lucide="clock" class="w-3.5 h-3.5"></i>
              <span>${quiz.timeMinutes} Mins</span>
            </span>
          </div>
        </div>

        <!-- Main Quiz Grid: Passage on Left / Top, Questions on Right -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <!-- Left: Reading Passage Card (5 cols on lg) -->
          <div class="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
            <div class="glass-card p-4 sm:p-6 bg-slate-900 text-slate-100 rounded-2xl shadow-lg space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700 pb-3">
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-pink-400">Integrated Reading Passage</span>
                  <h4 class="text-base font-bold text-white mt-0.5">${quiz.passage.title}</h4>
                </div>
                <div class="flex items-center space-x-2">
                  <!-- Audio Speed Control -->
                  <div class="flex items-center space-x-1 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1" title="Playback Speed (ความเร็วเสียงอ่าน)">
                    <i data-lucide="gauge" class="w-3 h-3 text-purple-300 shrink-0"></i>
                    <select onchange="app.setAudioSpeed(this.value)" class="bg-transparent text-purple-200 text-[11px] font-semibold focus:outline-none cursor-pointer">
                      <option value="0.65" ${this.audioSpeed === 0.65 ? 'selected' : ''} class="bg-slate-900 text-white">0.65x</option>
                      <option value="0.75" ${this.audioSpeed === 0.75 ? 'selected' : ''} class="bg-slate-900 text-white">0.75x ✨</option>
                      <option value="0.85" ${this.audioSpeed === 0.85 ? 'selected' : ''} class="bg-slate-900 text-white">0.85x</option>
                      <option value="1.0" ${this.audioSpeed === 1.0 ? 'selected' : ''} class="bg-slate-900 text-white">1.0x</option>
                    </select>
                  </div>

                  <button onclick="app.togglePassageAudio('${encodeURIComponent(quiz.passage.audioText || quiz.passage.text)}')" class="px-3 py-1.5 bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold rounded-lg flex items-center space-x-1.5 transition cursor-pointer ${this.isAudioPlaying ? 'audio-playing' : ''}">
                    <i data-lucide="${this.isAudioPlaying ? 'square' : 'volume-2'}" class="w-3.5 h-3.5"></i>
                    <span>${this.isAudioPlaying ? 'Stop Audio' : 'Listen'}</span>
                  </button>
                </div>
              </div>

              <div class="text-sm text-slate-200 leading-relaxed max-h-[260px] sm:max-h-[380px] overflow-y-auto pr-2 space-y-3 font-serif">
                <p class="italic">"${quiz.passage.text}"</p>
              </div>

              <div class="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 text-xs text-slate-300">
                <p class="font-bold text-amber-300 mb-1 flex items-center space-x-1">
                  <i data-lucide="lightbulb" class="w-3.5 h-3.5"></i>
                  <span>Two-Content Integration (การรวม 2 เนื้อหา):</span>
                </p>
                <p class="text-[11px] text-slate-300">
                  แบบทดสอบเฉพาะนี้ผสานเนื้อหาจาก <strong>${quiz.unitRef}</strong> และกลยุทธ์ <strong>${quiz.strategyRef}</strong> ร่วมกัน เพื่อประเมินความเข้าใจเชิงลึก
                </p>
              </div>
            </div>
          </div>

          <!-- Right: Questions List (7 cols on lg) -->
          <div class="lg:col-span-7 space-y-5">
            ${quiz.questions.map((q, qIdx) => {
              const selectedOpt = this.activeQuizAnswers[qIdx];
              return `
                <div class="glass-card p-4 sm:p-6 rounded-2xl border ${selectedOpt !== undefined ? 'border-purple-400 shadow-sm' : 'border-purple-100'} transition">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${q.tag.includes('Lesson') ? 'bg-purple-100 text-purple-800' : (q.tag.includes('Strategy') ? 'bg-pink-100 text-pink-700' : 'bg-amber-100 text-amber-800')}">
                      ${q.tag}
                    </span>
                    <span class="text-[11px] font-semibold text-slate-400">Question ${qIdx + 1} of ${quiz.questions.length}</span>
                  </div>

                  <h5 class="text-sm font-bold text-slate-900 mb-4 leading-relaxed">${q.question}</h5>

                  <div class="space-y-2.5">
                    ${q.options.map((opt, optIdx) => {
                      const isSelected = selectedOpt === optIdx;
                      return `
                        <button 
                          type="button"
                          onclick="app.selectQuizAnswer(${qIdx}, ${optIdx})"
                          class="w-full text-left p-3 sm:p-3.5 rounded-xl border text-xs font-medium transition flex items-start space-x-3 cursor-pointer min-h-[44px] ${isSelected ? 'bg-purple-700 text-white border-purple-700 shadow-sm' : 'bg-white hover:bg-purple-50/60 border-purple-200 text-slate-700'}"
                        >
                          <span class="w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold text-[11px] ${isSelected ? 'bg-white text-purple-900' : 'bg-purple-100 text-purple-800'}">
                            ${String.fromCharCode(65 + optIdx)}
                          </span>
                          <span class="leading-snug">${opt}</span>
                        </button>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}

            <!-- Submit Section -->
            <div class="glass-card p-4 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <p class="text-xs font-bold text-slate-800">Ready to submit?</p>
                <p class="text-[11px] text-slate-500">${answeredCount === quiz.questions.length ? 'All questions answered. You can now submit your test.' : `Please answer all questions (${answeredCount}/${quiz.questions.length} completed).`}</p>
              </div>

              <button 
                onclick="app.submitStandaloneQuiz()" 
                class="w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-xs text-white transition shadow-md flex items-center justify-center space-x-2 cursor-pointer ${allAnswered ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-purple-700 hover:bg-purple-800'}"
              >
                <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                <span>Submit Quiz & View Results (ส่งคำตอบ)</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  // Standalone Quiz Result & Detailed Review Screen
  renderStandaloneQuizResult() {
    const res = this.activeQuizResult;
    const quiz = ReadSkillsData.practiceOptions.quizzes.find(q => q.id === this.activeStandaloneQuizId);
    if (!res || !quiz) {
      return this.renderPracticeHub();
    }

    return `
      <div class="space-y-8 max-w-4xl mx-auto">
        <!-- Results Summary Hero Card -->
        <div class="glass-card p-5 sm:p-8 text-center rounded-3xl shadow-xl space-y-4 border-t-8 ${res.passed ? 'border-emerald-500 bg-gradient-to-b from-emerald-50/50 to-white' : 'border-rose-500 bg-gradient-to-b from-rose-50/50 to-white'}">
          <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl ${res.passed ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'} flex items-center justify-center mx-auto shadow-md">
            <i data-lucide="${res.passed ? 'award' : 'alert-circle'}" class="w-8 h-8 sm:w-10 sm:h-10"></i>
          </div>

          <div>
            <span class="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${res.passed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'} mb-2">
              ${res.passed ? 'PASSED • ผ่านเกณฑ์การประเมิน' : 'NEEDS REVIEW • ยังไม่ผ่านเกณฑ์'}
            </span>
            <h2 class="text-xl sm:text-3xl font-extrabold text-slate-900">${quiz.title}</h2>
            <p class="text-xs text-slate-500 mt-1">${quiz.thaiTitle}</p>
          </div>

          <div class="flex flex-wrap items-center justify-around sm:justify-center gap-4 sm:space-x-6 py-4">
            <div class="text-center min-w-[80px]">
              <span class="text-[11px] text-slate-500 font-semibold uppercase">Total Score</span>
              <div class="text-2xl sm:text-3xl font-extrabold ${res.passed ? 'text-emerald-700' : 'text-rose-700'}">${res.correctCount} / ${res.total}</div>
            </div>
            <div class="hidden sm:block h-10 w-px bg-slate-200"></div>
            <div class="text-center min-w-[80px]">
              <span class="text-[11px] text-slate-500 font-semibold uppercase">Percentage</span>
              <div class="text-2xl sm:text-3xl font-extrabold ${res.passed ? 'text-emerald-700' : 'text-rose-700'}">${res.percentage}%</div>
            </div>
            <div class="hidden sm:block h-10 w-px bg-slate-200"></div>
            <div class="text-center min-w-[80px]">
              <span class="text-[11px] text-slate-500 font-semibold uppercase">Passing Score</span>
              <div class="text-2xl sm:text-3xl font-extrabold text-slate-700">${quiz.passingScore}%</div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button onclick="app.retakeStandaloneQuiz()" class="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition flex items-center justify-center space-x-1.5 cursor-pointer">
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
              <span>Retake Quiz (ทำอีกครั้ง)</span>
            </button>
            <button onclick="app.exitStandaloneQuiz()" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-semibold transition flex items-center justify-center space-x-1.5 shadow-md cursor-pointer">
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
              <span>Back to Quiz Hub (กลับสู่หน้ารวม)</span>
            </button>
          </div>
        </div>

        <!-- Detailed Question Review List -->
        <div class="space-y-4">
          <h3 class="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
            <i data-lucide="file-text" class="w-5 h-5 text-purple-700 shrink-0"></i>
            <span>Detailed Assessment Review & Immediate Feedback (เฉลยและคำอธิบายละเอียด)</span>
          </h3>

          ${quiz.questions.map((q, idx) => {
            const userAns = res.userAnswers[idx];
            const isCorrect = userAns === q.answer;
            return `
              <div class="glass-card p-4 sm:p-6 rounded-2xl border-l-4 ${isCorrect ? 'border-emerald-500' : 'border-rose-500'} space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${q.tag.includes('Lesson') ? 'bg-purple-100 text-purple-800' : (q.tag.includes('Strategy') ? 'bg-pink-100 text-pink-700' : 'bg-amber-100 text-amber-800')}">
                    ${q.tag}
                  </span>
                  <span class="text-xs font-bold flex items-center space-x-1 ${isCorrect ? 'text-emerald-700' : 'text-rose-600'}">
                    <i data-lucide="${isCorrect ? 'check-circle' : 'x-circle'}" class="w-4 h-4"></i>
                    <span>${isCorrect ? 'Correct (+1 pt)' : 'Incorrect (0 pt)'}</span>
                  </span>
                </div>

                <p class="text-sm font-bold text-slate-900">${q.question}</p>

                <!-- Options status -->
                <div class="space-y-1.5 pt-1">
                  ${q.options.map((opt, optIdx) => {
                    const isUserChoice = userAns === optIdx;
                    const isTheCorrectAns = q.answer === optIdx;

                    let optClass = "bg-white border-slate-200 text-slate-700";
                    if (isTheCorrectAns) {
                      optClass = "bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold";
                    } else if (isUserChoice && !isCorrect) {
                      optClass = "bg-rose-50 border-rose-400 text-rose-900 font-medium line-through";
                    }

                    return `
                      <div class="p-3 rounded-xl border text-xs flex items-center justify-between ${optClass}">
                        <div class="flex items-center space-x-2">
                          <span class="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${isTheCorrectAns ? 'bg-emerald-600 text-white' : (isUserChoice ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-600')}">
                            ${String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>${opt}</span>
                        </div>
                        ${isTheCorrectAns ? '<span class="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Correct Answer</span>' : (isUserChoice ? '<span class="text-[10px] font-bold text-rose-600 bg-rose-100 px-2 py-0.5 rounded">Your Choice</span>' : '')}
                      </div>
                    `;
                  }).join('')}
                </div>

                <!-- Explanation Box -->
                <div class="bg-purple-50/80 p-3.5 rounded-xl border border-purple-200 text-xs text-purple-950 mt-2 leading-relaxed">
                  <strong>💡 Explanation (คำอธิบาย):</strong> ${q.explanation}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  /* ------------------- Standalone Quiz Event Handlers ------------------- */
  startStandaloneQuiz(quizId) {
    this.activeStandaloneQuizId = quizId;
    this.activeQuizAnswers = {};
    this.activeQuizResult = null;
    this.navigate('practice');
  }

  selectQuizAnswer(questionIndex, optionIndex) {
    this.activeQuizAnswers[questionIndex] = optionIndex;
    this.navigate('practice', true);
  }

  submitStandaloneQuiz() {
    const quiz = ReadSkillsData.practiceOptions.quizzes.find(q => q.id === this.activeStandaloneQuizId);
    if (!quiz) return;

    const answeredCount = Object.keys(this.activeQuizAnswers).length;
    if (answeredCount < quiz.questions.length) {
      if (!confirm(`You have answered ${answeredCount} of ${quiz.questions.length} questions. Are you sure you want to submit now?`)) {
        return;
      }
    }

    let correctCount = 0;
    quiz.questions.forEach((q, idx) => {
      if (this.activeQuizAnswers[idx] === q.answer) {
        correctCount++;
      }
    });

    const total = quiz.questions.length;
    const percentage = Math.round((correctCount / total) * 100);
    const passed = percentage >= quiz.passingScore;

    this.activeQuizResult = {
      correctCount,
      total,
      percentage,
      passed,
      userAnswers: { ...this.activeQuizAnswers }
    };

    // Update student report database record
    const studentIdx = ReadSkillsData.studentsReport.findIndex(s => s.email === this.user.email);
    if (studentIdx >= 0) {
      ReadSkillsData.studentsReport[studentIdx].quizAvg = `${percentage}%`;
    }

    if (this.speechSynth) this.speechSynth.cancel();
    this.isAudioPlaying = false;

    this.navigate('practice');
  }

  retakeStandaloneQuiz() {
    this.activeQuizAnswers = {};
    this.activeQuizResult = null;
    if (this.speechSynth) this.speechSynth.cancel();
    this.isAudioPlaying = false;
    this.navigate('practice');
  }

  exitStandaloneQuiz() {
    this.activeStandaloneQuizId = null;
    this.activeQuizAnswers = {};
    this.activeQuizResult = null;
    if (this.speechSynth) this.speechSynth.cancel();
    this.isAudioPlaying = false;
    this.navigate('practice');
  }

  // 5. Learning Progress View
  renderProgressView() {
    return `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">Learning Progress (ความก้าวหน้าในการเรียน)</h2>
          <p class="text-xs text-slate-600">Track your learning activity, quiz scores, and total online study hours</p>
        </div>

        <!-- 4 Metric Stat Badges -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="glass-card p-6">
            <span class="text-xs font-semibold text-slate-500">Total Online Time</span>
            <div class="text-2xl font-bold text-purple-800 mt-2">${this.formatHoursText(this.user.onlineSeconds)}</div>
            <p class="text-[11px] text-slate-500 mt-1">Updated live in real-time</p>
          </div>

          <div class="glass-card p-6">
            <span class="text-xs font-semibold text-slate-500">Completed Lessons</span>
            <div class="text-2xl font-bold text-pink-700 mt-2">5 of 6 Units</div>
            <p class="text-[11px] text-slate-500 mt-1">83% course progress</p>
          </div>

          <div class="glass-card p-6">
            <span class="text-xs font-semibold text-slate-500">Average Quiz Score</span>
            <div class="text-2xl font-bold text-emerald-700 mt-2">92%</div>
            <p class="text-[11px] text-slate-500 mt-1">Based on 12 quizzes</p>
          </div>

          <div class="glass-card p-6">
            <span class="text-xs font-semibold text-slate-500">Access Frequency</span>
            <div class="text-2xl font-bold text-amber-700 mt-2">14 Days</div>
            <p class="text-[11px] text-slate-500 mt-1">Active study streak</p>
          </div>
        </div>

        <!-- Chart Container -->
        <div class="glass-card p-6 space-y-4">
          <h3 class="font-bold text-slate-900 text-lg">Unit Score Performance Chart</h3>
          <div class="h-64">
            <canvas id="progressChart"></canvas>
          </div>
        </div>
      </div>
    `;
  }

  initProgressChart() {
    const ctx = document.getElementById('progressChart');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6'],
        datasets: [{
          label: 'Quiz Score (%)',
          data: [90, 85, 95, 88, 92, 0],
          backgroundColor: '#654394',
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, max: 100 }
        }
      }
    });
  }

  // 6. Teacher Admin View
  renderAdminView() {
    const students = [...ReadSkillsData.studentsReport];
    const existingIndex = students.findIndex(s => s.email === this.user.email);
    if (existingIndex >= 0) {
      students[existingIndex].onlineHours = this.formatHoursText(this.user.onlineSeconds);
    } else {
      students.unshift({
        id: "STD-CURR",
        name: this.user.name,
        email: this.user.email,
        onlineHours: this.formatHoursText(this.user.onlineSeconds),
        completedUnits: "5/6 Units",
        quizAvg: "92%",
        lastActive: "Active Now"
      });
    }

    return `
      <div class="space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 flex items-center space-x-2">
              <i data-lucide="shield-check" class="w-6 h-6 text-amber-700"></i>
              <span>Teacher Report Dashboard (รายงานคะแนนและชั่วโมงการออนไลน์)</span>
            </h2>
            <p class="text-xs text-slate-600">Instructor portal for monitoring student online hours and quiz performance</p>
          </div>

          <button onclick="app.exportStudentReportCSV()" class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl shadow-md flex items-center space-x-2 transition">
            <i data-lucide="download" class="w-4 h-4"></i>
            <span>Export CSV Report (ดาวน์โหลดรายงาน)</span>
          </button>
        </div>

        <!-- Student Report Table -->
        <div class="glass-card overflow-hidden shadow-sm">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-slate-800">
              <thead class="bg-purple-200/80 text-purple-950 font-bold uppercase tracking-wider border-b border-purple-200">
                <tr>
                  <th class="p-4">Student ID</th>
                  <th class="p-4">Full Name (ชื่อ-นามสกุล)</th>
                  <th class="p-4">Email Address</th>
                  <th class="p-4 bg-amber-100/90 text-amber-950">ชั่วโมงออนไลน์ (Online Hours)</th>
                  <th class="p-4">Completed Units</th>
                  <th class="p-4">Quiz Avg (%)</th>
                  <th class="p-4">Last Access</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-purple-100 font-medium">
                ${students.map(s => `
                  <tr class="hover:bg-white/60 transition">
                    <td class="p-4 font-bold text-purple-800">${s.id}</td>
                    <td class="p-4 font-semibold text-slate-900">${s.name}</td>
                    <td class="p-4 text-slate-600">${s.email}</td>
                    <td class="p-4 bg-amber-100/50 font-bold text-amber-900">${s.onlineHours}</td>
                    <td class="p-4">${s.completedUnits}</td>
                    <td class="p-4 font-bold text-emerald-700">${s.quizAvg}</td>
                    <td class="p-4 text-slate-500">${s.lastActive}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  /* ------------------- Export CSV Function ------------------- */
  exportStudentReportCSV() {
    let csv = "Student ID,Full Name,Email,Online Hours,Completed Units,Quiz Average Score,Last Active\n";
    ReadSkillsData.studentsReport.forEach(s => {
      csv += `"${s.id}","${s.name}","${s.email}","${s.onlineHours}","${s.completedUnits}","${s.quizAvg}","${s.lastActive}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `ReadSkills_BRU_Student_Report_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  setAudioSpeed(speed) {
    this.audioSpeed = parseFloat(speed) || 0.75;
    localStorage.setItem('bru_audio_speed', this.audioSpeed);
    if (this.isAudioPlaying && this.speechSynth) {
      this.speechSynth.cancel();
      this.isAudioPlaying = false;
      this.updateAudioButtonsUI();
    }
  }

  playUnit1Passage() {
    this.currentExampleTab = 1;
    const text = "A boastful Hare was constantly ridiculing a slow-moving Tortoise for his clumsy pace. Weary of the ceaseless teasing, the quiet Tortoise calmly challenged the swift Hare to a five-mile cross-country footrace. Believing the challenge was a hilarious joke, the arrogant Hare accepted immediately, boasting that no creature in the forest could ever outpace his lightning speed. When the starting horn sounded, the Hare bolted ahead like lightning, creating a massive lead in mere moments. Looking back and seeing no sign of the plodding Tortoise, the overconfident Hare decided that victory was already guaranteed. I have more than enough time to relax under this shady oak tree and take a peaceful nap before that clumsy creature reaches halfway, he laughed smugly. Soon, the complacent Hare fell into a deep slumber, foolishly underestimating his rival. Meanwhile, the steadfast Tortoise pressed forward with silent determination. Ignoring his weary limbs, rejecting all distractions, he never ceased his deliberate march. Hours slipped past as the complacent Hare slept deeply. When the Hare finally awakened in shock to the distant cheering of forest animals, he bolted forward desperately, only to watch in disbelief as the Tortoise crossed the finish ribbon to seize triumph. The enduring moral of the race proves that steady perseverance and humble consistency will consistently triumph over careless arrogance and complacent talent. Standing near the finish line, the humbled Hare bowed his head, realizing that raw talent without discipline was completely meaningless. Approaching the winner, he shook the Tortoise's hand with genuine humility, acknowledging that true greatness comes from quiet dedication rather than loud boasting. From that day forward, the Hare abandoned his foolish arrogance, having learned that even the fastest runner can be beaten by those who never give up.";
    this.togglePassageAudio(encodeURIComponent(text));
  }

  playUnit1Passage2() {
    this.currentExampleTab = 2;
    const view1 = document.getElementById('example-view-1');
    const view2 = document.getElementById('example-view-2');
    const tab1 = document.getElementById('ex-tab-1');
    const tab2 = document.getElementById('ex-tab-2');
    if (view1 && view2 && tab1 && tab2) {
      view1.classList.add('hidden');
      view2.classList.remove('hidden');
      tab2.className = 'px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 cursor-pointer bg-purple-700 text-white shadow-md';
      tab1.className = 'px-4 py-2.5 rounded-xl text-xs font-semibold transition flex items-center space-x-2 cursor-pointer bg-white/80 text-purple-900 hover:bg-white border border-purple-200';
    }
    const text = "During a radiant summer afternoon, an industrious Ant worked tirelessly storing grain, while a frivolous Grasshopper sang carefree songs and mocked her constant toil. The carefree Grasshopper urged her to enjoy the sunshine and abandon her exhausting labor. However, the wise Ant warned him that summer would not last forever and that winter would bring severe hardship. Instead of heeding the wise advice, the complacent Grasshopper spent every sunny morning dancing in the meadows, convinced that nature's abundance would never run out. Week after week, the Ant practiced steadfast diligence, hauling heavy seeds into her underground shelter. In contrast, the Grasshopper laughed that only foolish insects worried about tomorrow when today was so pleasant. When the harsh winter finally arrived with freezing blizzards, the impoverished Grasshopper found himself shivering without a single crumb to eat. Desperate and starving, he dragged his weak body to the Ant's warm storehouse, begging for food. Watching the well-fed ants rest comfortably, he grasped the timeless truth. The enduring wisdom of the season demonstrates that foresight, disciplined preparation, and steadfast diligence protect us against unexpected hardships that ruin the unprepared. Standing in the freezing cold, the humbled Grasshopper bowed his head, realizing that endless fun without foresight led only to ruin. Taking pity on her freezing neighbor, the kind Ant shared a modest portion of grain. Humbled by the generous gift, the reformed Grasshopper bowed with sincere humility, promising that every future summer would be devoted to responsible prudence alongside his music. From that bitter winter forward, the Grasshopper understood that true joy is sweetest when built on the solid foundation of preparation.";
    this.togglePassageAudio(encodeURIComponent(text));
  }

  /* ==========================================================================
     UNIT 2: INTERACTIVE METHODS & TIMED SCANNERS
     ========================================================================== */

  // 1. Warm-Up Checker
  checkUnit2Warmup(selectedNum) {
    const fb = document.getElementById('u2-warmup-feedback');
    if (!fb) return;
    fb.classList.remove('hidden');
    if (selectedNum === 1) {
      fb.className = 'p-3.5 bg-emerald-100 border border-emerald-300 rounded-xl text-xs text-emerald-950 font-medium space-y-1 block';
      fb.innerHTML = `
        <div class="flex items-center space-x-1.5 font-bold text-emerald-900">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-700"></i>
          <span>ถูกต้องยอดเยี่ยม! (Correct) 🎉</span>
        </div>
        <p class="leading-relaxed">
          ประโยค (1) คือ <strong>Main Idea (ใจความสำคัญ)</strong> เพราะทำหน้าที่เป็น <em>'ร่มคันใหญ่ (Umbrella Sentence)'</em> ที่ครอบคลุมเนื้อหาทั้งหมดว่าการดื่มน้ำตอนเช้าให้ประโยชน์สำคัญทางสรีรวิทยา ส่วนประโยคที่ (2) และ (4) คือ Major Details และ (3), (5) คือ Minor Details
        </p>
      `;
    } else {
      fb.className = 'p-3.5 bg-amber-100 border border-amber-300 rounded-xl text-xs text-amber-950 font-medium space-y-1 block';
      fb.innerHTML = `
        <div class="flex items-center space-x-1.5 font-bold text-amber-900">
          <i data-lucide="help-circle" class="w-4 h-4 text-amber-700"></i>
          <span>ยังไม่ถูกต้องครับ ลองสังเกตใหม่ดูนะครับ</span>
        </div>
        <p class="leading-relaxed">
          ประโยคที่คุณเลือกคือ <strong>Supporting Detail (รายละเอียดสนับสนุน)</strong> ที่ให้เหตุผลหรือตัวอย่างเฉพาะด้าน (เช่น การเผาผลาญ หรืออาการคอแห้ง) ยังไม่ใช่ประโยคหลักที่ครอบคลุมภาพรวมทั้งหมด คำตอบที่ถูกต้องคือ <strong>ประโยค (1)</strong>
        </p>
      `;
    }
    if (window.lucide) lucide.createIcons();
  }

  // 2. Pre-Reading Timed Scanning Task
  startUnit2PreTimer() {
    const btn = document.getElementById('u2-pre-timer-btn');
    const timerDisplay = document.getElementById('u2-pre-timer');
    if (this.unit2PreScanTimer) {
      clearInterval(this.unit2PreScanTimer);
      this.unit2PreScanTimer = null;
      if (btn) btn.textContent = 'Resume Timer';
      return;
    }
    if (btn) btn.textContent = 'Pause Timer';
    this.unit2PreScanTimer = setInterval(() => {
      if (this.unit2PreScanTimeLeft <= 0) {
        clearInterval(this.unit2PreScanTimer);
        this.unit2PreScanTimer = null;
        if (timerDisplay) timerDisplay.textContent = '00:00 (Time Up!)';
        if (btn) btn.textContent = 'Time Up';
        this.submitUnit2PreScan();
        return;
      }
      this.unit2PreScanTimeLeft--;
      const m = String(Math.floor(this.unit2PreScanTimeLeft / 60)).padStart(2, '0');
      const s = String(this.unit2PreScanTimeLeft % 60).padStart(2, '0');
      if (timerDisplay) timerDisplay.textContent = `${m}:${s}`;
    }, 1000);
  }

  setUnit2PreScanAnswer(qNum, val) {
    if (!this.unit2PreScanAnswers) this.unit2PreScanAnswers = {};
    this.unit2PreScanAnswers[qNum] = val;
    const btns = document.querySelectorAll(`.u2-prescan-q${qNum}`);
    btns.forEach(b => {
      if (b.textContent.trim() === val) {
        b.className = `u2-prescan-q${qNum} p-2 rounded-lg border-2 border-purple-600 bg-purple-100 text-purple-950 text-center font-bold cursor-pointer`;
      } else {
        b.className = `u2-prescan-q${qNum} p-2 rounded-lg border border-slate-200 bg-white hover:bg-purple-50 text-center font-medium cursor-pointer`;
      }
    });
  }

  submitUnit2PreScan() {
    if (this.unit2PreScanTimer) {
      clearInterval(this.unit2PreScanTimer);
      this.unit2PreScanTimer = null;
      const btn = document.getElementById('u2-pre-timer-btn');
      if (btn) btn.textContent = 'Completed';
    }
    const key = { 1: '420', 2: 'Lotus Pond Zone', 3: '62%', 4: '8.2 million baht' };
    let score = 0;
    Object.keys(key).forEach(q => {
      if (this.unit2PreScanAnswers && this.unit2PreScanAnswers[q] === key[q]) score++;
    });
    const resultBox = document.getElementById('u2-prescan-result');
    if (resultBox) {
      const pass = score >= 3;
      resultBox.innerHTML = `
        <span class="px-3 py-1.5 rounded-xl ${pass ? 'bg-emerald-500 text-white' : 'bg-amber-400 text-slate-950'} font-bold">
          Score: ${score} / 4 (${Math.round((score/4)*100)}%) ${pass ? '🎉 Passed (&ge;70%)' : 'Retake to improve'}
        </span>
      `;
    }
  }

  // 3. Interactive Highlighting Tool
  highlightSentence(sentenceId, role) {
    if (!this.unit2Highlights) this.unit2Highlights = {};
    this.unit2Highlights[sentenceId] = role;

    const box = document.getElementById(`u2-s${sentenceId}-box`);
    const fb = document.getElementById(`u2-s${sentenceId}-feedback`);
    if (!box) return;

    box.className = 'p-3 rounded-xl border space-y-2 transition ';
    if (role === 'yellow') {
      box.className += 'bg-yellow-950/80 border-2 border-yellow-400 text-yellow-100 shadow-md';
    } else if (role === 'green') {
      box.className += 'bg-emerald-950/80 border-2 border-emerald-500 text-emerald-100 shadow-md';
    } else if (role === 'blue') {
      box.className += 'bg-sky-950/80 border-2 border-sky-400 text-sky-100 shadow-md';
    }

    const correctRoles = {
      1: { role: 'yellow', name: 'Main Idea', reason: 'ประโยคหลักที่ครอบคลุมผลกระทบสิ่งแวดล้อมและจิตวิทยาของพื้นที่สีเขียว' },
      2: { role: 'green', name: 'Major Supporting Detail 1', reason: 'บอกเหตุผลสำคัญประเด็นที่ 1: การลดปรากฏการณ์เกาะความร้อนในเมือง' },
      3: { role: 'blue', name: 'Minor Detail 1a', reason: 'ให้ข้อมูลตัวเลขงานวิจัยในกรุงเทพฯ ที่ลดอุณหภูมิได้ 3.8°C' },
      4: { role: 'green', name: 'Major Supporting Detail 2', reason: 'บอกเหตุผลสำคัญประเด็นที่ 2: การพัฒนาสุขภาพจิตของประชาชน' },
      5: { role: 'blue', name: 'Minor Detail 2a', reason: 'ให้สถิติตัวอย่างนักศึกษา 450 คนและความเครียดที่ลดลง 28%' }
    };

    const target = correctRoles[sentenceId];
    if (fb && target) {
      fb.classList.remove('hidden');
      if (role === target.role) {
        fb.className = 'text-[11px] font-sans p-2 rounded-lg bg-emerald-900/60 text-emerald-200 border border-emerald-500/40 block';
        fb.innerHTML = `<strong>ถูกต้อง!</strong> ประโยคนี้คือ <em>${target.name}</em> &bull; ${target.reason}`;
      } else {
        fb.className = 'text-[11px] font-sans p-2 rounded-lg bg-amber-900/60 text-amber-200 border border-amber-500/40 block';
        fb.innerHTML = `<strong>ยังไม่ตรงบทบาท:</strong> ประโยคนี้ควรเป็น <em>${target.name}</em> (${target.role === 'yellow' ? 'สีเหลือง' : target.role === 'green' ? 'สีเขียว' : 'สีฟ้า'}) &bull; ${target.reason}`;
      }
    }
  }

  resetUnit2Highlights() {
    this.unit2Highlights = {};
    for (let i = 1; i <= 5; i++) {
      const box = document.getElementById(`u2-s${i}-box`);
      const fb = document.getElementById(`u2-s${i}-feedback`);
      if (box) box.className = 'p-3 bg-slate-800/90 rounded-xl border border-slate-700 space-y-2 transition';
      if (fb) {
        fb.classList.add('hidden');
        fb.innerHTML = '';
      }
    }
  }

  revealUnit2Highlights() {
    const correctRoles = { 1: 'yellow', 2: 'green', 3: 'blue', 4: 'green', 5: 'blue' };
    Object.keys(correctRoles).forEach(id => {
      this.highlightSentence(parseInt(id), correctRoles[id]);
    });
  }

  // 4. Main Idea Challenge
  submitUnit2Challenge(itemNum, choiceIdx) {
    if (!this.unit2ChallengeAnswers) this.unit2ChallengeAnswers = {};
    this.unit2ChallengeAnswers[itemNum] = choiceIdx;

    const correctKey = {
      1: { ans: 0, label: 'Main Idea', exp: 'เป็นประโยคใจความสำคัญที่ครอบคลุมความคุ้มค่าทางเศรษฐกิจของพลังงานแสงอาทิตย์ในชนบท' },
      2: { ans: 1, label: 'Major Supporting Detail', exp: 'บอกเหตุผลสำคัญข้อที่หนึ่งเรื่องต้นทุนการผลิตที่ลดลง 58%' },
      3: { ans: 2, label: 'Minor Supporting Detail', exp: 'เป็นสถิติอ้างอิงจากรายงานกระทรวงพลังงานปี 2025 ที่ลดลงจาก 85 เหลือ 36 บาท' },
      4: { ans: 0, label: 'Main Idea', exp: 'เป็นใจความสำคัญเรื่องการบริหารเวลาช่วยสร้างสมดุลระหว่างการเรียนและสุขภาพ' },
      5: { ans: 1, label: 'Major Supporting Detail', exp: 'บอกเหตุผลสำคัญข้อที่หนึ่งเรื่องการจัดตารางสัปดาห์ช่วยลดความวิตกกังวล' },
      6: { ans: 2, label: 'Minor Supporting Detail', exp: 'เป็นสถิติตัวอย่างเทคนิค Pomodoro ที่ช่วยให้ทำการบ้านเสร็จเร็วขึ้น 30%' }
    };

    const target = correctKey[itemNum];
    const fb = document.getElementById(`u2-c${itemNum}-fb`);
    const btns = document.querySelectorAll(`.u2-c${itemNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        if (choiceIdx === target.ans) {
          b.className = `u2-c${itemNum}-btn p-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-100 text-emerald-950 font-bold text-left`;
        } else {
          b.className = `u2-c${itemNum}-btn p-2.5 rounded-xl border-2 border-rose-500 bg-rose-100 text-rose-950 font-bold text-left`;
        }
      } else if (idx === target.ans) {
        b.className = `u2-c${itemNum}-btn p-2.5 rounded-xl border border-emerald-400 bg-emerald-50 text-emerald-900 font-medium text-left`;
      } else {
        b.className = `u2-c${itemNum}-btn p-2.5 rounded-xl border border-slate-200 bg-white/70 text-slate-500 text-left`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      if (choiceIdx === target.ans) {
        fb.className = 'text-xs font-medium p-2.5 rounded-lg bg-emerald-100 text-emerald-950 border border-emerald-300 block';
        fb.innerHTML = `<strong>ถูกต้อง! 🎉</strong> ข้อความนี้คือ <em>${target.label}</em> &bull; ${target.exp}`;
      } else {
        fb.className = 'text-xs font-medium p-2.5 rounded-lg bg-rose-100 text-rose-950 border border-rose-300 block';
        fb.innerHTML = `<strong>ยังไม่ถูกต้อง:</strong> ข้อความนี้คือ <em>${target.label}</em> &bull; ${target.exp}`;
      }
    }

    let score = 0;
    let answered = 0;
    Object.keys(correctKey).forEach(k => {
      if (this.unit2ChallengeAnswers[k] !== undefined) {
        answered++;
        if (this.unit2ChallengeAnswers[k] === correctKey[k].ans) score++;
      }
    });

    const scoreDisplay = document.getElementById('u2-challenge-score');
    if (scoreDisplay) scoreDisplay.textContent = `${score} / 6`;

    this.unit2ChallengeScore = score;
    localStorage.setItem('bru_unit2_challenge_score', score);
    localStorage.setItem('bru_unit2_challenge_answers', JSON.stringify(this.unit2ChallengeAnswers));

    if (answered === 6) {
      const finalBox = document.getElementById('u2-challenge-final-box');
      if (finalBox) {
        finalBox.classList.remove('hidden');
        const pass = score >= 4;
        finalBox.className = `p-4 rounded-2xl border text-center space-y-2 block ${pass ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-amber-50 border-amber-300 text-amber-950'}`;
        finalBox.innerHTML = `
          <div class="text-base font-bold flex items-center justify-center space-x-2">
            <i data-lucide="${pass ? 'award' : 'alert-circle'}" class="w-5 h-5 ${pass ? 'text-emerald-600' : 'text-amber-600'}"></i>
            <span>${pass ? 'ยินดีด้วย! คุณผ่านเกณฑ์ตัวบ่งชี้ 3.3 (Passed &ge; 70%) 🎉' : 'คะแนนยังไม่ถึงเกณฑ์ 70% (ต้องการ 4/6 ข้อขึ้นไป)'}</span>
          </div>
          <p class="text-xs">คะแนนที่ได้: <strong>${score} / 6 (${Math.round((score/6)*100)}%)</strong> &bull; บันทึกผลการเรียนรู้เรียบร้อยแล้ว</p>
        `;
        if (window.lucide) lucide.createIcons();
      }
    }
  }

  // 5. Post-Reading Timed Scanning Task
  startUnit2PostTimer() {
    const btn = document.getElementById('u2-post-timer-btn');
    const timerDisplay = document.getElementById('u2-post-timer');
    if (this.unit2PostScanTimer) {
      clearInterval(this.unit2PostScanTimer);
      this.unit2PostScanTimer = null;
      if (btn) btn.textContent = 'Resume Timer';
      return;
    }
    if (btn) btn.textContent = 'Pause Timer';
    this.unit2PostScanTimer = setInterval(() => {
      if (this.unit2PostScanTimeLeft <= 0) {
        clearInterval(this.unit2PostScanTimer);
        this.unit2PostScanTimer = null;
        if (timerDisplay) timerDisplay.textContent = '00:00 (Time Up!)';
        if (btn) btn.textContent = 'Time Up';
        this.submitUnit2PostScan();
        return;
      }
      this.unit2PostScanTimeLeft--;
      const m = String(Math.floor(this.unit2PostScanTimeLeft / 60)).padStart(2, '0');
      const s = String(this.unit2PostScanTimeLeft % 60).padStart(2, '0');
      if (timerDisplay) timerDisplay.textContent = `${m}:${s}`;
    }, 1000);
  }

  setUnit2PostScanAnswer(qNum, val) {
    if (!this.unit2PostScanAnswers) this.unit2PostScanAnswers = {};
    this.unit2PostScanAnswers[qNum] = val;
    const btns = document.querySelectorAll(`.u2-postscan-q${qNum}`);
    btns.forEach(b => {
      if (b.textContent.trim().startsWith(val) || b.textContent.trim().includes(val)) {
        b.className = `u2-postscan-q${qNum} p-2 rounded-lg border-2 border-indigo-600 bg-indigo-100 text-indigo-950 text-center font-bold cursor-pointer`;
      } else {
        b.className = `u2-postscan-q${qNum} p-2 rounded-lg border border-slate-200 bg-white hover:bg-purple-50 text-center font-medium cursor-pointer`;
      }
    });
  }

  submitUnit2PostScan() {
    if (this.unit2PostScanTimer) {
      clearInterval(this.unit2PostScanTimer);
      this.unit2PostScanTimer = null;
      const btn = document.getElementById('u2-post-timer-btn');
      if (btn) btn.textContent = 'Completed';
    }
    const key = {
      1: '2.80', 2: '38,000 baht', 3: 'Mar 20, 2027', 4: 'Hall C, Ground Floor', 5: '18 judges',
      6: '14.6 million baht', 7: '3,400 frames', 8: '84%', 9: 'Dr. Nattapong Vichit', 10: 'Phuket Pier 9',
      11: 'Train No. 908', 12: '160 km/h', 13: '2,450 baht', 14: '30 kg', 15: '21:40 PM'
    };
    let score = 0;
    Object.keys(key).forEach(q => {
      if (this.unit2PostScanAnswers && this.unit2PostScanAnswers[q] === key[q]) score++;
    });

    this.unit2PostScanScore = score;
    localStorage.setItem('bru_unit2_scanning_score', score);

    const resultBox = document.getElementById('u2-postscan-result');
    if (resultBox) {
      const pass = score >= 11;
      resultBox.innerHTML = `
        <span class="px-3.5 py-1.5 rounded-xl ${pass ? 'bg-emerald-500 text-white' : 'bg-amber-400 text-slate-950'} font-bold inline-block">
          Score: ${score} / 15 (${Math.round((score/15)*100)}%) ${pass ? '🎉 Passed Indicator 3.3 (&ge;70%)' : 'Retake recommended (Pass &ge; 11/15)'}
        </span>
      `;
    }
    this.updateUnit2SummaryDashboard();
  }

  // 6. Supporting Details & Reading Comprehension Test (25 Questions across 3 Passages)
  submitUnit2Test(qNum, choiceIdx) {
    if (!this.unit2TestAnswers) this.unit2TestAnswers = {};
    this.unit2TestAnswers[qNum] = choiceIdx;

    const correctKey = {
      1: { ans: 1, exp: 'ประโยค (1) และภาพรวมของย่อหน้าชี้ให้เห็นวิกฤตการลดลงของผึ้งจากสารเคมีและสภาพอากาศ พร้อมนำเสนอทางออกด้วยโดรนผสมเกสร' },
      2: { ans: 1, exp: "ประโยค (2) ที่ขึ้นต้นด้วย 'First' คือ Major Supporting Detail ที่อธิบายสาเหตุหลักข้อแรกที่ทำให้ประชากรผึ้งลดลง" },
      3: { ans: 2, exp: 'ตัวเลขสถิติ 47% ใน 12 ประเทศยุโรป เป็น Minor Supporting Detail ที่ให้หลักฐานเชิงประจักษ์รองรับประโยค (2)' },
      4: { ans: 0, exp: "วลี 'For instance' ชี้ชัดว่าประโยค (5) เป็น Minor Supporting Detail ที่ยกตัวอย่างรูปธรรมเพื่อขยายความประโยค (4)" },
      5: { ans: 2, exp: 'คำว่า First, Second, Third เป็น Signal Words บอกลำดับประเด็นสำคัญ (Sequence / Listing of Major Details)' },
      6: { ans: 1, exp: "'compared to' แสดงการเปรียบเทียบความแตกต่าง (Compare & Contrast) ระหว่างพื้นที่เกษตรเคมีเข้มข้นกับเกษตรอินทรีย์" },
      7: { ans: 2, exp: "'in contrast' ใช้เปรียบเทียบความต่างอย่างชัดเจนระหว่างการผสมเกสรด้วยมือ (6 คน 10 วัน) กับฝูงโดรนอัตโนมัติ (18 ชั่วโมง)" },
      8: { ans: 0, exp: "'Consequently' (ดังนั้น/ส่งผลให้) เป็นคำเชื่อมบอกเหตุและผล (Cause & Effect) ชี้ผลลัพธ์คืออัตราการติดผลดีขึ้น 31% และลดค่าแรง 19%" },
      9: { ans: 1, exp: "จากการสแกนประโยคสุดท้ายพบว่า 'a 19% reduction in seasonal labor expenditure' (ส่วน 31% คือการติดผลดีขึ้น)" },
      10: { ans: 2, exp: 'ประโยค (1) คือ Topic Sentence ที่ครอบคลุมระบบนิเวศปล่องน้ำพุร้อนใต้ทะเลลึกและการต่อยอดสู่การศึกษาสิ่งมีชีวิตนอกโลก' },
      11: { ans: 0, exp: 'ประโยค (2) คือ Major Detail ข้อที่ 1 ที่อธิบายกระบวนการสร้างพลังงานด้วยสังเคราะห์ทางเคมี (chemosynthesis)' },
      12: { ans: 1, exp: 'เรื่องหนอนท่อยักษ์ (Giant tube worms) ในประโยค (5) เป็น Minor Supporting Detail ที่ยกตัวอย่างสัตว์ทะเลลึกเพื่อขยายความประโยค (4)' },
      13: { ans: 2, exp: "'Whereas' (ในขณะที่) เป็น Signal Word บอกการเปรียบเทียบความต่าง (Contrast) ระหว่างพืชผิวน้ำที่ใช้แสงอาทิตย์กับจุลินทรีย์ก้นทะเล" },
      14: { ans: 1, exp: "'instead' (แทนที่จะเป็นเช่นนั้น) แสดงความขัดแย้งหรือทางเลือกที่ต่างออกไป คือไม่มีปากแต่ใช้แบคทีเรียสร้างอาหารภายในแทน" },
      15: { ans: 0, exp: 'การระบุชื่อดวงจันทร์ Europa และ Enceladus ในประโยค (7) เป็น Minor Detail ที่ให้ข้อเท็จจริงเฉพาะเจาะจงสนับสนุนประโยค (6)' },
      16: { ans: 2, exp: "'Therefore' (ดังนั้น) เป็นคำเชื่อมแสดงผลลัพธ์หรือข้อสรุปเชิงเหตุผล (Cause & Effect)" },
      17: { ans: 1, exp: "จากการสแกนหาตัวเลขอ้างอิงอุณหภูมิในประโยค (3) พบคำว่า 'exceeding 350 degrees Celsius'" },
      18: { ans: 1, exp: 'ประโยค (1) และประโยคสรุป (8) ชี้ใจความหลักว่าการใช้สีและแสงเชิงกลยุทธ์ส่งผลต่ออารมณ์ สรีรวิทยา และพฤติกรรมผู้บริโภค' },
      19: { ans: 2, exp: 'ประโยค (2) คือ Major Supporting Detail ที่นำเสนอประเด็นหลักข้อแรกเกี่ยวกับโทนสีร้อน (warm spectrum hues)' },
      20: { ans: 0, exp: 'สถิติ 28% จากงานวิจัยการตลาดในประโยค (3) เป็น Minor Detail ที่ทำหน้าที่เป็นหลักฐานสนับสนุนประโยค (2)' },
      21: { ans: 1, exp: "'because' เป็นคำเชื่อมบอกสาเหตุ (Cause & Effect) อธิบายว่าทำไมป้ายสีแดงจึงกระตุ้นการซื้อฉับพลันได้ถึง 28%" },
      22: { ans: 2, exp: "'In contrast' ใช้เชื่อมโยงแบบเปรียบเทียบความตรงกันข้าม (Contrast) ระหว่างสีโทนร้อนที่กระตุ้นความตื่นตัว กับสีโทนเย็นที่ช่วยผ่อนคลาย" },
      23: { ans: 0, exp: "ประโยค (4) บอกคุณสมบัติของสีฟ้า (สาเหตุ) และ 'Consequently' ในประโยค (5) ชี้ผลลัพธ์ที่ธนาคารและคลินิกนำสีฟ้าไปใช้ลดความกังวล" },
      24: { ans: 1, exp: "'Initially' (ในตอนแรก) และ 'subsequently' (ต่อมา/หลังจากนั้น) เป็นคำเชื่อมบอกลำดับเวลา (Sequence) ของการปรับแสงไฟในร้านค้า" },
      25: { ans: 2, exp: 'ตัวเลือก C สรุปครบทั้ง Main Idea และ Major Details ทั้ง 3 ด้าน (สีโทนร้อน สีโทนเย็น และการปรับแสงตามเวลา)' }
    };

    const target = correctKey[qNum];
    const fb = document.getElementById(`u2-t${qNum}-fb`);
    const btns = document.querySelectorAll(`.u2-t${qNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        if (choiceIdx === target.ans) {
          b.className = `u2-t${qNum}-btn w-full text-left p-2.5 rounded-lg border-2 border-emerald-500 bg-emerald-100 text-emerald-950 font-bold`;
        } else {
          b.className = `u2-t${qNum}-btn w-full text-left p-2.5 rounded-lg border-2 border-rose-500 bg-rose-100 text-rose-950 font-bold`;
        }
      } else if (idx === target.ans) {
        b.className = `u2-t${qNum}-btn w-full text-left p-2.5 rounded-lg border border-emerald-400 bg-emerald-50 text-emerald-900 font-medium`;
      } else {
        b.className = `u2-t${qNum}-btn w-full text-left p-2.5 rounded-lg border border-slate-200 bg-white/70 text-slate-500`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      if (choiceIdx === target.ans) {
        fb.className = 'text-xs font-medium p-2 rounded-lg bg-emerald-100 text-emerald-950 border border-emerald-300 block';
        fb.innerHTML = `<strong>ถูกต้อง! 🎉</strong> ${target.exp}`;
      } else {
        fb.className = 'text-xs font-medium p-2 rounded-lg bg-rose-100 text-rose-950 border border-rose-300 block';
        fb.innerHTML = `<strong>ยังไม่ถูกต้อง:</strong> ${target.exp}`;
      }
    }

    let score = 0;
    let answered = 0;
    Object.keys(correctKey).forEach(k => {
      if (this.unit2TestAnswers[k] !== undefined) {
        answered++;
        if (this.unit2TestAnswers[k] === correctKey[k].ans) score++;
      }
    });

    const scoreDisplay = document.getElementById('u2-test-score');
    if (scoreDisplay) scoreDisplay.textContent = `${score} / 25`;

    this.unit2TestScore = score;
    localStorage.setItem('bru_unit2_test_score', score);
    localStorage.setItem('bru_unit2_test_answers', JSON.stringify(this.unit2TestAnswers));

    if (answered === 25) {
      const finalBox = document.getElementById('u2-test-final-box');
      if (finalBox) {
        finalBox.classList.remove('hidden');
        const pass = score >= 18;
        finalBox.className = `p-4 rounded-2xl border text-center space-y-2 block ${pass ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-amber-50 border-amber-300 text-amber-950'}`;
        finalBox.innerHTML = `
          <div class="text-base font-bold flex items-center justify-center space-x-2">
            <i data-lucide="${pass ? 'check-circle' : 'alert-circle'}" class="w-5 h-5 ${pass ? 'text-emerald-600' : 'text-amber-600'}"></i>
            <span>${pass ? 'ผ่านการทดสอบวัดความเข้าใจ Unit 2 (Passed &ge; 70%) 🎉' : 'คะแนนยังไม่ถึงเกณฑ์ 70% (18/25)'}</span>
          </div>
          <p class="text-xs">คะแนนทดสอบ: <strong>${score} / 25 (${Math.round((score/25)*100)}%)</strong></p>
        `;
        if (window.lucide) lucide.createIcons();
      }
    }
    this.updateUnit2SummaryDashboard();
  }

  // 7. Unit 2 Score Dashboard
  updateUnit2SummaryDashboard() {
    const cScore = localStorage.getItem('bru_unit2_challenge_score');
    const sScore = localStorage.getItem('bru_unit2_scanning_score');
    const tScore = localStorage.getItem('bru_unit2_test_score');

    const sc1 = document.getElementById('summary-u2-challenge');
    const bg1 = document.getElementById('badge-u2-challenge');
    if (sc1 && bg1 && cScore !== null) {
      const val = parseInt(cScore);
      sc1.textContent = `${val} / 6`;
      bg1.className = `text-[10px] font-bold px-2 py-0.5 rounded ${val >= 4 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`;
      bg1.textContent = val >= 4 ? 'Passed (>=70%)' : 'Needs Retake';
    }

    const sc2 = document.getElementById('summary-u2-scanning');
    const bg2 = document.getElementById('badge-u2-scanning');
    if (sc2 && bg2 && sScore !== null) {
      const val = parseInt(sScore);
      sc2.textContent = `${val} / 15`;
      bg2.className = `text-[10px] font-bold px-2 py-0.5 rounded ${val >= 11 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`;
      bg2.textContent = val >= 11 ? 'Passed (>=70%)' : 'Needs Retake';
    }

    const sc3 = document.getElementById('summary-u2-test');
    const bg3 = document.getElementById('badge-u2-test');
    if (sc3 && bg3 && tScore !== null) {
      const val = parseInt(tScore);
      sc3.textContent = `${val} / 25`;
      bg3.className = `text-[10px] font-bold px-2 py-0.5 rounded ${val >= 18 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`;
      bg3.textContent = val >= 18 ? 'Passed (>=70%)' : 'Needs Retake';
    }
  }

  /* ------------------- Unit 3 Interactive Methods (Vocabulary in Context & Sentence Meaning) ------------------- */

  // 1. Warm-Up Detective Guessing
  checkUnit3Warmup(selectedNum) {
    const fb = document.getElementById('u3-warmup-feedback');
    if (!fb) return;
    fb.classList.remove('hidden');
    if (selectedNum === 2) {
      fb.className = 'p-3 rounded-xl text-xs font-medium bg-emerald-100 text-emerald-950 border border-emerald-300';
      fb.innerHTML = '<strong>ถูกต้อง! 🎉 (A person who enjoys long walks in the countryside):</strong> เบาะแสสำคัญคือเครื่องหมายขีดยาว <em>"—a person who enjoys long walks in the countryside"</em> และคำแวดล้อม <em>"walks in the woods near Lake Ullswater"</em>';
    } else {
      fb.className = 'p-3 rounded-xl text-xs font-medium bg-rose-100 text-rose-950 border border-rose-300';
      fb.innerHTML = '<strong>ลองสังเกตบริบทอีกครั้ง:</strong> ดูข้อความหลังเครื่องหมายขีดยาว <em>"—a person who enjoys long walks in the countryside"</em> คำว่า <strong>hiker</strong> จึงหมายถึง นักเดินป่าชมธรรมชาติ (ข้อ B)';
    }
  }

  // 2. Pre-Reading Short Context Clue Mini-Game (5 Items)
  submitUnit3PreGame(qNum, choiceIdx) {
    if (!this.unit3PreGameAnswers) this.unit3PreGameAnswers = {};
    this.unit3PreGameAnswers[qNum] = choiceIdx;

    const key = {
      1: { ans: 0, exp: "คำนิยามหลังคอมมา ', which is a big truck used for carrying heavy boxes by road' ชี้ว่า lorry แปลว่า รถบรรทุกขนาดใหญ่ (Definition Clue)" },
      2: { ans: 1, exp: "เครื่องหมายขีดคู่ (— ... —) พร้อมคำว่า 'such as cookies, sandwiches, and energy drinks' คือ Example Clue" },
      3: { ans: 0, exp: "คำเชื่อม 'Unlike' เปรียบเทียบความตรงข้ามกับ 'the noisy city street' ดังนั้น silent จึงแปลว่า เงียบสงัดไร้เสียง" },
      4: { ans: 1, exp: "วลี ', or exactly the same in every detail' เป็น Synonym Clue ที่แปลคำว่า identical ไว้ตรงตัว" },
      5: { ans: 1, exp: "บริบทเหตุและผล (ไม่ได้กินอะไรตั้งแต่เช้าจนหิวมาก จึงตัดสินใจหาร้านอาหาร) ชี้ว่า restaurant คือสถานที่ซื้อและรับประทานอาหาร" }
    };

    const target = key[qNum];
    const fb = document.getElementById(`u3-pg${qNum}-fb`);
    const btns = document.querySelectorAll(`.u3-pg${qNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        b.className = idx === target.ans
          ? `u3-pg${qNum}-btn p-2 rounded-lg border-2 border-emerald-500 bg-emerald-100 text-emerald-950 text-left font-bold cursor-pointer`
          : `u3-pg${qNum}-btn p-2 rounded-lg border-2 border-rose-500 bg-rose-100 text-rose-950 text-left font-bold cursor-pointer`;
      } else if (idx === target.ans) {
        b.className = `u3-pg${qNum}-btn p-2 rounded-lg border border-emerald-400 bg-emerald-50 text-emerald-900 text-left font-medium cursor-pointer`;
      } else {
        b.className = `u3-pg${qNum}-btn p-2 rounded-lg border border-slate-200 bg-white text-slate-500 text-left font-medium cursor-pointer`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      fb.className = choiceIdx === target.ans
        ? 'text-[11px] p-2 rounded bg-emerald-100 text-emerald-950 font-medium block'
        : 'text-[11px] p-2 rounded bg-rose-100 text-rose-950 font-medium block';
      fb.innerHTML = `${choiceIdx === target.ans ? '<strong>ถูกต้อง! 🎉</strong>' : '<strong>คำอธิบาย:</strong>'} ${target.exp}`;
    }

    let score = 0;
    Object.keys(key).forEach(k => {
      if (this.unit3PreGameAnswers[k] === key[k].ans) score++;
    });
    const scoreEl = document.getElementById('u3-pregame-score');
    if (scoreEl) scoreEl.textContent = `${score} / 5`;
  }

  // 3. While-Reading 3-Colour Highlighting Tool
  // Yellow = Unfamiliar vocabulary, Green = Context clues, Blue = Main ideas and sentence meaning
  highlightUnit3Sentence(segNum, color) {
    const expected = {
      1: { role: 'blue', exp: 'Segment (1) คือ Main Idea & Sentence Meaning (สีฟ้า) ที่บอกใจความหลักว่าซิลเวียและจอร์จไปเดินป่าริมทะเลสาบและพบบ้านไม้เก่าแก่' },
      2: { role: 'yellow', exp: 'Segment (2) คือ Unfamiliar Vocabulary (สีเหลือง) ได้แก่คำศัพท์สำคัญจากเรื่องสั้น: excursion, footprints, costume, renovate' },
      3: { role: 'green', exp: 'Segment (3) คือ Context Clue (สีเขียว) ที่ใช้เครื่องหมายขีดยาวและคำว่า that is เพื่อนิยามคำว่า footprints (รอยเท้าบนพื้นฝุ่น)' },
      4: { role: 'green', exp: 'Segment (4) คือ Context Clue (สีเขียว) ที่ใช้วงเล็บอธิบายความหมายของคำว่า costume (ชุดปลอมตัว)' },
      5: { role: 'blue', exp: 'Segment (5) คือ Main Idea & Sentence Meaning (สีฟ้า) ที่สรุปแก่นตอนจบของเรื่องว่าสัตว์ประหลาดคือคุณพ่อ และบ้านหลังนั้นคือของขวัญวันเกิด' }
    };

    const textEl = document.getElementById(`u3-s${segNum}-text`);
    const fbEl = document.getElementById(`u3-s${segNum}-feedback`);
    if (!textEl || !fbEl) return;

    const hlMap = {
      yellow: 'highlighter-pen highlighter-yellow',
      green: 'highlighter-pen highlighter-green',
      blue: 'highlighter-pen highlighter-blue'
    };

    const rawText = textEl.textContent.trim();
    textEl.innerHTML = `<span class="${hlMap[color]}">${rawText}</span>`;

    const isCorrect = expected[segNum].role === color;
    fbEl.classList.remove('hidden');
    fbEl.className = `text-[11px] font-sans pt-1 ${isCorrect ? 'text-emerald-300' : 'text-amber-300'}`;
    fbEl.innerHTML = isCorrect
      ? `✅ <strong>ถูกต้อง!</strong> ${expected[segNum].exp}`
      : `💡 <strong>คำแนะนำ:</strong> ${expected[segNum].exp}`;
  }

  resetUnit3Highlights() {
    for (let i = 1; i <= 5; i++) {
      const textEl = document.getElementById(`u3-s${i}-text`);
      const fbEl = document.getElementById(`u3-s${i}-feedback`);
      if (textEl) textEl.innerHTML = textEl.textContent.trim();
      if (fbEl) fbEl.classList.add('hidden');
    }
  }

  revealUnit3Highlights() {
    const roles = { 1: 'blue', 2: 'yellow', 3: 'green', 4: 'green', 5: 'blue' };
    Object.keys(roles).forEach(k => this.highlightUnit3Sentence(Number(k), roles[k]));
  }

  // 4. While-Reading Graded Context Clue Game & Sentence Practice (8 Items)
  submitUnit3Game(qNum, choiceIdx) {
    if (!this.unit3GameAnswers) this.unit3GameAnswers = {};
    this.unit3GameAnswers[qNum] = choiceIdx;

    const key = {
      1: { ans: 2, exp: "คำนิยามหลังขีดยาว '—a person who buys and sells things in a market' แปลตรงตัวว่า พ่อค้าในตลาด (ข้อ C)" },
      2: { ans: 1, exp: "Definition Clue หลังขีดยาว '—a letter written on paper or skin and rolled up—' แปลว่า ม้วนหนังสือหรือสาส์น (ข้อ B)" },
      3: { ans: 0, exp: "จากคำตรงข้าม 'Unlike modern digital watches' และคำขยาย 'worn hundreds of years ago' ชี้ว่า old-fashioned แปลว่า โบราณ/ล้าสมัย (ข้อ A)" },
      4: { ans: 2, exp: "ทหารให้ม้าลงไปเกลือกกลิ้งและเดินย่ำในน้ำพุจนไม่สามารถใช้ได้อีก คำว่า foul จึงหมายถึง สกปรกเน่าเสียและใช้ดื่มไม่ได้ (ข้อ C)" },
      5: { ans: 1, exp: "Synonym Clue หลังคำว่า ', or tidy and arranged carefully' แปลว่า สะอาดและเป็นระเบียบเรียบร้อย (ข้อ B)" },
      6: { ans: 2, exp: "เบาะแส 'her friends could not see her at all' ชี้ชัดว่า invisible แปลว่า ล่องหนหรือมองไม่เห็น (ข้อ C)" },
      7: { ans: 1, exp: "ตัดวลีบอกเวลา 'After searching the old garage for an hour,' ออก จะพบ Core Subject คือ 'David' และ Main Verb คือ 'found' (ข้อ B)" },
      8: { ans: 2, exp: "ประธานหลักและกริยาหลักคือ 'the old chest opened and revealed a letter from their uncle Walter' ใจความสำคัญจึงตรงกับข้อ C" }
    };

    const target = key[qNum];
    const fb = document.getElementById(`u3-g${qNum}-fb`);
    const btns = document.querySelectorAll(`.u3-g${qNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        b.className = idx === target.ans
          ? `u3-g${qNum}-btn p-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-100 text-emerald-950 text-left font-bold cursor-pointer`
          : `u3-g${qNum}-btn p-2.5 rounded-xl border-2 border-rose-500 bg-rose-100 text-rose-950 text-left font-bold cursor-pointer`;
      } else if (idx === target.ans) {
        b.className = `u3-g${qNum}-btn p-2.5 rounded-xl border border-emerald-400 bg-emerald-50 text-emerald-900 text-left font-medium cursor-pointer`;
      } else {
        b.className = `u3-g${qNum}-btn p-2.5 rounded-xl border border-slate-200 bg-white text-slate-500 text-left font-medium cursor-pointer`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      fb.className = choiceIdx === target.ans
        ? 'text-xs font-medium p-2.5 rounded-lg bg-emerald-100 text-emerald-950 border border-emerald-300 block'
        : 'text-xs font-medium p-2.5 rounded-lg bg-rose-100 text-rose-950 border border-rose-300 block';
      fb.innerHTML = `${choiceIdx === target.ans ? '<strong>ถูกต้อง! 🎉</strong>' : '<strong>ยังไม่ถูกต้อง:</strong>'} ${target.exp}`;
    }

    let score = 0;
    let answered = 0;
    Object.keys(key).forEach(k => {
      if (this.unit3GameAnswers[k] !== undefined) {
        answered++;
        if (this.unit3GameAnswers[k] === key[k].ans) score++;
      }
    });

    const scoreEl = document.getElementById('u3-game-score');
    if (scoreEl) scoreEl.textContent = `${score} / 8`;

    this.unit3GameScore = score;
    localStorage.setItem('bru_unit3_game_score', score);
    localStorage.setItem('bru_unit3_game_answers', JSON.stringify(this.unit3GameAnswers));

    if (answered === 8) {
      const finalBox = document.getElementById('u3-game-final-box');
      if (finalBox) {
        finalBox.classList.remove('hidden');
        const pass = score >= 6;
        finalBox.className = `p-4 rounded-2xl border text-center space-y-2 block ${pass ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-amber-50 border-amber-300 text-amber-950'}`;
        finalBox.innerHTML = `
          <div class="text-base font-bold flex items-center justify-center space-x-2">
            <i data-lucide="${pass ? 'check-circle' : 'alert-circle'}" class="w-5 h-5 ${pass ? 'text-emerald-600' : 'text-amber-600'}"></i>
            <span>${pass ? 'ผ่านเกณฑ์ Context Clue Game (Indicator 3.3 &ge; 70%) 🎉' : 'คะแนนยังไม่ถึงเกณฑ์ 70% (ต้องได้ 6/8 ข้อขึ้นไป)'}</span>
          </div>
          <p class="text-xs">คะแนนที่ได้: <strong>${score} / 8 (${Math.round((score/8)*100)}%)</strong></p>
        `;
        if (window.lucide) lucide.createIcons();
      }
    }
    this.updateUnit3SummaryDashboard();
  }

  // 5. Post-Reading 40-Question Vocabulary in Context & Sentence Meaning Quiz
  submitUnit3Test(qNum, choiceIdx) {
    if (!this.unit3TestAnswers) this.unit3TestAnswers = {};
    this.unit3TestAnswers[qNum] = choiceIdx;

    const correctKey = {
      1: { ans: 0, exp: 'เครื่องหมายขีดยาว (—) ในประโยค (1) ให้คำจำกัดความ (Definition Clue) ของ bioluminescence ไว้โดยตรง' },
      2: { ans: 0, exp: 'ผู้เขียนใช้เครื่องหมายขีดยาว (Dash) เพื่อนิยามความหมายตรงๆ จัดเป็น Definition Clue' },
      3: { ans: 0, exp: "คำว่า 'Unlike superficial surface reflections' และคำอธิบายตามหลังว่า 'generated internally within specialized cells' ชี้ว่า endogenous แปลว่า เกิดขึ้นจากภายในสิ่งมีชีวิต" },
      4: { ans: 0, exp: "วลี 'such as...' ที่คั่นด้วยคอมมา ทำหน้าที่เป็น Example Clue ยกตัวอย่างนักล่าใต้ทะเลลึก" },
      5: { ans: 0, exp: 'จากบริบทการใช้เหยื่อล่อเรืองแสงเพื่อดึงดูดเหยื่อเข้ามาในระยะจู่โจม คำว่า entice จึงหมายถึง ดึงดูดหรือล่อลวงเข้ามา' },
      6: { ans: 0, exp: "'in other words' (กล่าวอีกนัยหนึ่งคือ) เป็นคำสัญญาณบอกการกล่าวซ้ำเพื่อขยายความหมายให้เข้าใจง่ายขึ้น (Restatement)" },
      7: { ans: 0, exp: "ข้อความในเครื่องหมายขีดคู่ '—the deepest, pitch-black layer of the ocean—' นิยามคำว่า abyssal ไว้อย่างชัดเจน" },
      8: { ans: 0, exp: "วลี ', or glowing ink mist,' ที่คั่นด้วยเครื่องหมายจุลภาคและคำว่า or เป็น Synonym Clue ที่แปลคำว่า luminous cloud ไว้ตรงๆ" },
      9: { ans: 0, exp: "อนุประโยคที่ขึ้นต้นด้วย Although เป็นส่วนขยายรอง ประโยคหลักมีประธานหลักคือ 'the evolutionary advantages' และกริยาหลักคือ 'outweigh'" },
      10: { ans: 0, exp: "ประธานหลักคือ 'decoding the chemical efficiency...' กริยาหลักคือ 'enables' และใจความสำคัญคือช่วยให้แพทย์ติดตามการทำงานของเซลล์มนุษย์ได้โดยไม่ต้องผ่าตัด" },
      11: { ans: 0, exp: "คำสัญญาณ '—that is, immeasurably valuable and irreplaceable—' นิยามความหมายของ priceless ไว้อย่างชัดเจน" },
      12: { ans: 0, exp: 'วลีขยายที่คั่นด้วยเครื่องหมายคอมมา (bone-dry air และฝนตกน้อยกว่า 40 มม. ต่อปี) ชี้ชัดว่า arid แปลว่า แห้งแล้งจัด' },
      13: { ans: 0, exp: 'ประโยคขยายความหลังคำว่า specifically บอกว่าความชื้นจากลมหายใจนักท่องเที่ยวทำให้ปูนภาพจิตรกรรมพองและหลุดลอก ดังนั้น detrimental จึงแปลว่า ซึ่งเป็นผลเสีย/เป็นอันตราย' },
      14: { ans: 0, exp: "ผู้เขียนให้ทั้งคำนิยามในวงเล็บ (Parentheses) และใช้คำเชื่อมเปรียบเทียบความต่าง 'Whereas' กับการทำงานเป็นทีม" },
      15: { ans: 0, exp: "คำสัญญาณ 'including' ที่คั่นด้วยคอมมา เป็นการยกตัวอย่าง (Example Clue) ของโบราณวัตถุอินทรีย์ที่เปราะบาง" },
      16: { ans: 0, exp: "การใช้เครื่องหมายคอมมาตามด้วยคำว่า 'or' เป็นรูปแบบมาตรฐานของ Synonym / Restatement Clue (autonomous = ทำงานได้เองโดยอัตโนมัติ)" },
      17: { ans: 0, exp: "หลังเครื่องหมายขีดยาว (—) นิยามไว้ตรงตัวว่า 'exact full-scale reconstructions of the original caves'" },
      18: { ans: 0, exp: 'เชื่อมโยงจากประโยค (6)-(7) ที่มีการใช้เซ็นเซอร์ตรวจวัดและจำกัดคนเข้าอย่างเข้มงวด คำว่า stringent จึงหมายถึง เข้มงวด/รัดกุม' },
      19: { ans: 0, exp: "ส่วนที่ขึ้นต้นด้วย Whenever เป็นอนุประโยคบอกเงื่อนไข ส่วนประโยคหลักมี Core Subject คือ 'the computer network' และ Main Verb คือ 'restricts'" },
      20: { ans: 0, exp: 'แก่นของประโยคที่ (8) คือการสร้างสมดุลระหว่างการให้ความรู้แก่สาธารณชนกับการควบคุมสภาพอากาศอย่างเข้มงวด ช่วยรักษามรดกโลกไว้ให้คนรุ่นหลัง' },
      21: { ans: 0, exp: "หลังเครื่องหมายขีดยาว (—) อธิบายไว้ชัดเจนว่า 'high-rise residential towers covered in thousands of living trees and shrubs'" },
      22: { ans: 0, exp: "'in other words' ใช้ขยายความเปรียบเทียบให้เห็นภาพชัดเจนขึ้นว่าต้นไม้ 900 ต้นบนตึกนั้นเทียบเท่ากับป่าแนวราบถึง 2 เฮกตาร์" },
      23: { ans: 0, exp: 'การดูดซับก๊าซคาร์บอนไดออกไซด์ 30 ตันและดักจับฝุ่นละออง เป็นเบาะแส General Clue ที่ชี้ว่า mitigate หมายถึง ช่วยบรรเทาหรือลดมลพิษทางอากาศ' },
      24: { ans: 0, exp: "คำว่า 'whereas' เปรียบเทียบความต่างระหว่างผนังกระจกเปลือยที่สะสมความร้อน กับระเบียงต้นไม้ที่ช่วยบังแดดและลดการใช้แอร์ลง 30%" },
      25: { ans: 0, exp: "วลีขยายข้างหลัง 'that can withstand fierce high-altitude winds' ชี้ว่า hardy แปลว่า แข็งแรงทนทานต่อสภาพอากาศเลวร้าย" },
      26: { ans: 0, exp: "เครื่องหมายขีดคู่พร้อมคำว่า 'such as' เป็น Example Clue ที่ยกตัวอย่างพันธุ์ไม้ที่ทนทานต่อลมแรง" },
      27: { ans: 0, exp: "ข้อความในวงเล็บ '(securely fasten and hold down)' แปลความหมายของคำกริยา anchor ไว้โดยตรง" },
      28: { ans: 0, exp: "วลีที่ตามหลังคอมมา ', which recycles greywater...' นิยามความหมายของระบบน้ำแบบวงจรปิด (closed-loop)" },
      29: { ans: 0, exp: "ประธานหลักของประโยคคือ Gerund phrase 'integrating living nature directly into high-density housing' และกริยาหลักคือ 'restores'" },
      30: { ans: 0, exp: 'ตัวเลือก A รวบยอดใจความสำคัญและประโยคสรุปของเรื่อง Vertical Forests ได้ครบทุกมิติ' },
      31: { ans: 0, exp: "ข้อความในเครื่องหมายขีดคู่ '—mental disorder or intellectual delay—' ให้คำนิยามของ cognitive confusion ไว้อย่างตรงไปตรงมา" },
      32: { ans: 0, exp: "อนุประโยคหลังคอมมา ', which governs attention, task-switching, and impulse inhibition' ทำหน้าที่นิยามหน้าที่ของระบบบริหารจัดการสมอง" },
      33: { ans: 0, exp: "วงเล็บ '(unwanted interference)' แปลความหมายของคำว่า intrusion (การแทรกแซงที่ไม่พึงประสงค์) ไว้โดยตรง" },
      34: { ans: 0, exp: "วลีหลังเครื่องหมายคอมมาและคำว่า ', or ...' ให้คำนิยามพ้องความหมายของ cognitive reserve" },
      35: { ans: 0, exp: "เครื่องหมายขีดคู่พร้อมคำว่า 'such as' เป็น Example Clue ยกตัวอย่างงานวิจัยระยะยาวใน 3 เมืองใหญ่ทั่วโลก" },
      36: { ans: 0, exp: "วลีคั่นด้วยคอมมา ', a severe loss of memory and reasoning ability,' นิยามความหมายของโรคสมองเสื่อม (dementia) ไว้ชัดเจน" },
      37: { ans: 0, exp: "จากการเปรียบเทียบกับคำว่า 'bilinguals' (คนที่พูดสองภาษา) คำว่า monolingual จึงหมายถึง คนที่พูดเพียงภาษาเดียว" },
      38: { ans: 0, exp: 'การสลับใช้คำศัพท์หลายภาษาช่วยเสริมสร้าง/เพิ่มพูน (enhances) ความยืดหยุ่นของสมองด้วยการสร้างเส้นใยประสาทที่หนาแน่นขึ้น' },
      39: { ans: 0, exp: "วลี ', meaning quickness and flexibility of thought,' นิยามคำว่า agility (ความคล่องแคล่วว่องไวทางความคิด) ไว้โดยตรง" },
      40: { ans: 0, exp: "ประธานหลักคือ 'adults' กริยาหลักคือ 'experience' และใจความสำคัญคือการเรียนภาษาที่สองในวัยกลางคนยังช่วยพัฒนาความคล่องตัวทางความคิดได้อย่างชัดเจน" }
    };

    const target = correctKey[qNum];
    const fb = document.getElementById(`u3-t${qNum}-fb`);
    const btns = document.querySelectorAll(`.u3-t${qNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        b.className = idx === target.ans
          ? `u3-t${qNum}-btn w-full text-left p-2.5 rounded-lg border-2 border-emerald-500 bg-emerald-100 text-emerald-950 font-bold`
          : `u3-t${qNum}-btn w-full text-left p-2.5 rounded-lg border-2 border-rose-500 bg-rose-100 text-rose-950 font-bold`;
      } else if (idx === target.ans) {
        b.className = `u3-t${qNum}-btn w-full text-left p-2.5 rounded-lg border border-emerald-400 bg-emerald-50 text-emerald-900 font-medium`;
      } else {
        b.className = `u3-t${qNum}-btn w-full text-left p-2.5 rounded-lg border border-slate-200 bg-white/70 text-slate-500`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      fb.className = choiceIdx === target.ans
        ? 'text-xs font-medium p-2 rounded-lg bg-emerald-100 text-emerald-950 border border-emerald-300 block'
        : 'text-xs font-medium p-2 rounded-lg bg-rose-100 text-rose-950 border border-rose-300 block';
      fb.innerHTML = `${choiceIdx === target.ans ? '<strong>ถูกต้อง! 🎉</strong>' : '<strong>ยังไม่ถูกต้อง:</strong>'} ${target.exp}`;
    }

    let score = 0;
    let answered = 0;
    Object.keys(correctKey).forEach(k => {
      if (this.unit3TestAnswers[k] !== undefined) {
        answered++;
        if (this.unit3TestAnswers[k] === correctKey[k].ans) score++;
      }
    });

    const scoreDisplay = document.getElementById('u3-test-score');
    if (scoreDisplay) scoreDisplay.textContent = `${score} / 40`;

    this.unit3TestScore = score;
    localStorage.setItem('bru_unit3_test_score', score);
    localStorage.setItem('bru_unit3_test_answers', JSON.stringify(this.unit3TestAnswers));

    if (answered === 40) {
      const finalBox = document.getElementById('u3-test-final-box');
      if (finalBox) {
        finalBox.classList.remove('hidden');
        const pass = score >= 28;
        finalBox.className = `p-4 rounded-2xl border text-center space-y-2 block ${pass ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-amber-50 border-amber-300 text-amber-950'}`;
        finalBox.innerHTML = `
          <div class="text-base font-bold flex items-center justify-center space-x-2">
            <i data-lucide="${pass ? 'check-circle' : 'alert-circle'}" class="w-5 h-5 ${pass ? 'text-emerald-600' : 'text-amber-600'}"></i>
            <span>${pass ? 'ผ่านการทดสอบ Vocabulary & Sentence Meaning Quiz Unit 3 (Passed &ge; 70%) 🎉' : 'คะแนนยังไม่ถึงเกณฑ์ 70% (28/40)'}</span>
          </div>
          <p class="text-xs">คะแนนทดสอบ: <strong>${score} / 40 (${Math.round((score/40)*100)}%)</strong></p>
        `;
        if (window.lucide) lucide.createIcons();
      }
    }
    this.updateUnit3SummaryDashboard();
  }

  // 6. Unit 3 Score Dashboard
  updateUnit3SummaryDashboard() {
    const gScore = localStorage.getItem('bru_unit3_game_score');
    const tScore = localStorage.getItem('bru_unit3_test_score');

    const sc1 = document.getElementById('summary-u3-game');
    const bg1 = document.getElementById('badge-u3-game');
    if (sc1 && bg1 && gScore !== null) {
      const val = parseInt(gScore);
      sc1.textContent = `${val} / 8`;
      bg1.className = `text-[10px] font-bold px-2 py-0.5 rounded ${val >= 6 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`;
      bg1.textContent = val >= 6 ? 'Passed (>=70%)' : 'Needs Retake';
    }

    const sc2 = document.getElementById('summary-u3-test');
    const bg2 = document.getElementById('badge-u3-test');
    if (sc2 && bg2 && tScore !== null) {
      const val = parseInt(tScore);
      sc2.textContent = `${val} / 40`;
      bg2.className = `text-[10px] font-bold px-2 py-0.5 rounded ${val >= 28 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`;
      bg2.textContent = val >= 28 ? 'Passed (>=70%)' : 'Needs Retake';
    }
  }

  /* ------------------- Unit 4 Interactive Methods (References, Connectives & Text Organization) ------------------- */

  // 1. Warm-Up Missing Reference & Connective Guessing
  checkUnit4Warmup(selectedNum) {
    const fb = document.getElementById('u4-warmup-feedback');
    if (!fb) return;
    fb.classList.remove('hidden');
    if (selectedNum === 2) {
      fb.className = 'p-3 rounded-xl text-xs font-medium bg-emerald-100 text-emerald-950 border border-emerald-300';
      fb.innerHTML = '<strong>ถูกต้อง! 🎉 ((1) He / (2) However / (3) Finally):</strong> (1) <strong>He</strong> เป็นคำสรรพนามเอกพจน์แทน <em>A thirsty crow</em>, (2) <strong>However</strong> แสดงความขัดแย้งว่ามีน้ำแต่คอยาวไม่ถึงก้นเหยือก และ (3) <strong>Finally</strong> บอกลำดับขั้นตอนสุดท้ายเมื่อน้ำสูงขึ้นจนดื่มได้';
    } else {
      fb.className = 'p-3 rounded-xl text-xs font-medium bg-rose-100 text-rose-950 border border-rose-300';
      fb.innerHTML = '<strong>ลองสังเกตความเชื่อมโยงอีกครั้ง:</strong> ประธานคือ <em>A thirsty crow</em> (เอกพจน์) จึงใช้ <strong>He</strong> ส่วนประโยคที่สองขัดแย้งกันจึงใช้ <strong>However</strong> และตอนจบเป็นลำดับสุดท้ายจึงใช้ <strong>Finally</strong> (ตัวเลือกที่ 2)';
    }
  }

  // 2. Pre-Reading Reference Matching Activity (5 Items)
  submitUnit4PreGame(qNum, choiceIdx) {
    if (!this.unit4PreGameAnswers) this.unit4PreGameAnswers = {};
    this.unit4PreGameAnswers[qNum] = choiceIdx;

    const key = {
      1: { ans: 1, exp: "คำว่า 'they' เป็นคำสรรพนามพหูพจน์ที่อ้างอิงย้อนกลับไปหาประธานพหูพจน์ 'Geckos' ในประโยคแรก (ข้อ B)" },
      2: { ans: 0, exp: "คำว่า 'which' เป็น Relative Pronoun ที่ขยายคำนามพหูพจน์ที่อยู่ติดกันข้างหน้าคือ 'millions of tiny bristles' (ข้อ A)" },
      3: { ans: 2, exp: "คำว่า 'its' เป็นคำสรรพนามแสดงความเป็นเจ้าของเอกพจน์ ซึ่งอ้างถึงสัตว์ผู้ล่าเอกพจน์ 'a predator' (ข้อ C)" },
      4: { ans: 1, exp: "วลีชี้เฉพาะ 'This clever trick' สรุปอ้างอิงถึงกลไกการสลัดหางทิ้งแล้วงอกใหม่ของตุ๊กแกในประโยคก่อนหน้า (ข้อ B)" },
      5: { ans: 2, exp: "คำแทนนามพหูพจน์ 'those' ใช้แทน 'the eyes' (ดวงตาของสัตว์เลื้อยคลานชนิดอื่น) เพื่อหลีกเลี่ยงการใช้คำซ้ำ (ข้อ C)" }
    };

    const target = key[qNum];
    const fb = document.getElementById(`u4-pg${qNum}-fb`);
    const btns = document.querySelectorAll(`.u4-pg${qNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        b.className = idx === target.ans
          ? `u4-pg${qNum}-btn p-2 rounded-lg border-2 border-emerald-500 bg-emerald-100 text-emerald-950 text-left font-bold cursor-pointer`
          : `u4-pg${qNum}-btn p-2 rounded-lg border-2 border-rose-500 bg-rose-100 text-rose-950 text-left font-bold cursor-pointer`;
      } else if (idx === target.ans) {
        b.className = `u4-pg${qNum}-btn p-2 rounded-lg border border-emerald-400 bg-emerald-50 text-emerald-900 text-left font-medium cursor-pointer`;
      } else {
        b.className = `u4-pg${qNum}-btn p-2 rounded-lg border border-slate-200 bg-white text-slate-500 text-left font-medium cursor-pointer`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      fb.className = choiceIdx === target.ans
        ? 'text-[11px] p-2 rounded bg-emerald-100 text-emerald-950 font-medium block'
        : 'text-[11px] p-2 rounded bg-rose-100 text-rose-950 font-medium block';
      fb.innerHTML = `${choiceIdx === target.ans ? '<strong>ถูกต้อง! 🎉</strong>' : '<strong>คำอธิบาย:</strong>'} ${target.exp}`;
    }

    let score = 0;
    Object.keys(key).forEach(k => {
      if (this.unit4PreGameAnswers[k] === key[k].ans) score++;
    });
    const scoreEl = document.getElementById('u4-pregame-score');
    if (scoreEl) scoreEl.textContent = `${score} / 5`;
  }

  // 3. While-Reading 3-Colour Highlighting Practice
  // Yellow = Reference words, Green = Connectives and transition words, Blue = Main ideas and text organization
  highlightUnit4Sentence(segNum, color) {
    const expected = {
      1: { role: 'blue', exp: 'Segment (1) คือ Main Idea & Text Organization (สีฟ้า) ที่เปิดประเด็นหลักและบอกโครงสร้างการเปรียบเทียบชั้นของโลกกับเค้ก 4 ชั้น' },
      2: { role: 'yellow', exp: 'Segment (2) คือ Reference Words (สีเหลือง) มีการใช้วลีชี้เฉพาะ This rocky layer และคำสรรพนาม it อ้างกลับไปยัง the crust' },
      3: { role: 'green', exp: 'Segment (3) คือ Connectives & Transition Words (สีเขียว) ใช้คำเชื่อม Next, และ Because เพื่อบอกลำดับชั้นถัดไปและความสัมพันธ์เหตุ-ผล' },
      4: { role: 'green', exp: 'Segment (4) คือ Connectives & Transition Words (สีเขียว) ใช้คำเชื่อมความขัดแย้ง However, เพื่อเปรียบเทียบความต่างของแก่นโลกชั้นนอกที่เป็นของเหลว' },
      5: { role: 'blue', exp: 'Segment (5) คือ Main Idea & Text Organization (สีฟ้า) ที่ปิดท้ายลำดับชั้นในสุดของโครงสร้างโลกและสรุปใจความสำคัญ' }
    };

    const textEl = document.getElementById(`u4-s${segNum}-text`);
    const fbEl = document.getElementById(`u4-s${segNum}-feedback`);
    if (!textEl || !fbEl) return;

    const hlMap = {
      yellow: 'highlighter-pen highlighter-yellow',
      green: 'highlighter-pen highlighter-green',
      blue: 'highlighter-pen highlighter-blue'
    };

    const rawText = textEl.textContent.trim();
    textEl.innerHTML = `<span class="${hlMap[color]}">${rawText}</span>`;

    const isCorrect = expected[segNum].role === color;
    fbEl.classList.remove('hidden');
    fbEl.className = `text-[11px] font-sans pt-1 ${isCorrect ? 'text-emerald-300' : 'text-amber-300'}`;
    fbEl.innerHTML = isCorrect
      ? `✅ <strong>ถูกต้อง!</strong> ${expected[segNum].exp}`
      : `💡 <strong>คำแนะนำ:</strong> ${expected[segNum].exp}`;
  }

  resetUnit4Highlights() {
    for (let i = 1; i <= 5; i++) {
      const textEl = document.getElementById(`u4-s${i}-text`);
      const fbEl = document.getElementById(`u4-s${i}-feedback`);
      if (textEl) textEl.innerHTML = textEl.textContent.trim();
      if (fbEl) fbEl.classList.add('hidden');
    }
  }

  revealUnit4Highlights() {
    const roles = { 1: 'blue', 2: 'yellow', 3: 'green', 4: 'green', 5: 'blue' };
    Object.keys(roles).forEach(k => this.highlightUnit4Sentence(Number(k), roles[k]));
  }

  // 4. While-Reading Graded Text Structure & Reference Practice (8 Items)
  submitUnit4Game(qNum, choiceIdx) {
    if (!this.unit4GameAnswers) this.unit4GameAnswers = {};
    this.unit4GameAnswers[qNum] = choiceIdx;

    const key = {
      1: { ans: 1, exp: "คำเชื่อม 'However' แสดงความขัดแย้ง (Contrast) ระหว่างความคาดหวังของ Trent กับความจริงที่พบว่าเป็นรถผิดคัน (ข้อ B)" },
      2: { ans: 2, exp: "ย่อหน้านี้เล่าลำดับเหตุการณ์ตามเวลา โดยมีคำสัญญาณ After..., Then, และ Finally จึงเป็นแบบ Sequence / Chronological Order (ข้อ C)" },
      3: { ans: 0, exp: "คำสรรพนามพหูพจน์ 'They' อ้างถึงเด็กหญิงทั้งสองคนคือ Celine and Jean (ข้อ A)" },
      4: { ans: 3, exp: "คำเชื่อม 'Because' แสดงสาเหตุ และ 'Therefore' แสดงผลลัพธ์ที่ตามมาของเหตุการณ์ (ข้อ D)" },
      5: { ans: 1, exp: "คำสรรพนามกรรมเอกพจน์ 'it' อ้างถึงคำนามเอกพจน์ 'a venomous cobra' (งูเห่าพิษ) ในประโยคแรก (ข้อ B)" },
      6: { ans: 2, exp: "บทอ่านเปรียบเทียบความเหมือนและความต่างของทะเลสาบ 2 แห่งด้วยคำว่า Both, However, และ Unlike จึงเป็น Compare and Contrast (ข้อ C)" },
      7: { ans: 0, exp: "ผู้เขียนระบุปัญหาความกลัวของนักเรียน แล้วเสนอวิธีแก้ไขของครู Peters จนสำเร็จ จึงเป็นโครงสร้าง Problem and Solution (ข้อ A)" },
      8: { ans: 3, exp: "บทอ่านอธิบายสาเหตุที่เหยื่อสูญพันธุ์และส่งผลให้เสือเขี้ยวดาบสูญพันธุ์ตามไปด้วย จึงเป็นโครงสร้าง Cause and Effect (ข้อ D)" }
    };

    const target = key[qNum];
    const fb = document.getElementById(`u4-g${qNum}-fb`);
    const btns = document.querySelectorAll(`.u4-g${qNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        b.className = idx === target.ans
          ? `u4-g${qNum}-btn p-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-100 text-emerald-950 text-left font-bold cursor-pointer`
          : `u4-g${qNum}-btn p-2.5 rounded-xl border-2 border-rose-500 bg-rose-100 text-rose-950 text-left font-bold cursor-pointer`;
      } else if (idx === target.ans) {
        b.className = `u4-g${qNum}-btn p-2.5 rounded-xl border border-emerald-400 bg-emerald-50 text-emerald-900 text-left font-medium cursor-pointer`;
      } else {
        b.className = `u4-g${qNum}-btn p-2.5 rounded-xl border border-slate-200 bg-white text-slate-500 text-left font-medium cursor-pointer`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      fb.className = choiceIdx === target.ans
        ? 'text-xs font-medium p-2.5 rounded-lg bg-emerald-100 text-emerald-950 border border-emerald-300 block'
        : 'text-xs font-medium p-2.5 rounded-lg bg-rose-100 text-rose-950 border border-rose-300 block';
      fb.innerHTML = `${choiceIdx === target.ans ? '<strong>ถูกต้อง! 🎉</strong>' : '<strong>ยังไม่ถูกต้อง:</strong>'} ${target.exp}`;
    }

    let score = 0;
    let answered = 0;
    Object.keys(key).forEach(k => {
      if (this.unit4GameAnswers[k] !== undefined) {
        answered++;
        if (this.unit4GameAnswers[k] === key[k].ans) score++;
      }
    });

    const scoreEl = document.getElementById('u4-game-score');
    if (scoreEl) scoreEl.textContent = `${score} / 8`;

    this.unit4GameScore = score;
    localStorage.setItem('bru_unit4_game_score', score);
    localStorage.setItem('bru_unit4_game_answers', JSON.stringify(this.unit4GameAnswers));

    if (answered === 8) {
      const finalBox = document.getElementById('u4-game-final-box');
      if (finalBox) {
        finalBox.classList.remove('hidden');
        const pass = score >= 6;
        finalBox.className = `p-4 rounded-2xl border text-center space-y-2 block ${pass ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-amber-50 border-amber-300 text-amber-950'}`;
        finalBox.innerHTML = `
          <div class="text-base font-bold flex items-center justify-center space-x-2">
            <i data-lucide="${pass ? 'check-circle' : 'alert-circle'}" class="w-5 h-5 ${pass ? 'text-emerald-600' : 'text-amber-600'}"></i>
            <span>${pass ? 'ผ่านเกณฑ์ Text Structure & Reference Practice (Indicator 3.3 &ge; 70%) 🎉' : 'คะแนนยังไม่ถึงเกณฑ์ 70% (ต้องได้ 6/8 ข้อขึ้นไป)'}</span>
          </div>
          <p class="text-xs">คะแนนที่ได้: <strong>${score} / 8 (${Math.round((score/8)*100)}%)</strong></p>
        `;
        if (window.lucide) lucide.createIcons();
      }
    }
    this.updateUnit4SummaryDashboard();
  }

  // 5. Unit 4 Score Dashboard
  updateUnit4SummaryDashboard() {
    const gScore = localStorage.getItem('bru_unit4_game_score');
    const tScore = localStorage.getItem('bru_unit4_test_score') || localStorage.getItem('bru_unit4_quiz_score');

    const sc1 = document.getElementById('summary-u4-game');
    const bg1 = document.getElementById('badge-u4-game');
    if (sc1 && bg1 && gScore !== null) {
      const val = parseInt(gScore);
      sc1.textContent = `${val} / 8`;
      bg1.className = `text-[10px] font-bold px-2 py-0.5 rounded ${val >= 6 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`;
      bg1.textContent = val >= 6 ? 'Passed (>=70%)' : 'Needs Retake';
    }

    const sc2 = document.getElementById('summary-u4-test');
    const bg2 = document.getElementById('badge-u4-test');
    if (sc2 && bg2 && tScore !== null) {
      const val = parseInt(tScore);
      sc2.textContent = `${val} / 40`;
      bg2.className = `text-[10px] font-bold px-2 py-0.5 rounded ${val >= 28 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`;
      bg2.textContent = val >= 28 ? 'Passed (>=70%)' : 'Needs Retake';
    }
  }

  /* ------------------- Unit 5 Interactive Methods (Text Interpretation & Paraphrased Meaning) ------------------- */

  // 1. Paraphrasing Practice Warm-Up
  checkUnit5Warmup(selectedNum) {
    const fb = document.getElementById('u5-warmup-feedback');
    if (!fb) return;
    fb.classList.remove('hidden');
    if (selectedNum === 2) {
      fb.className = 'p-3 rounded-xl text-xs font-medium bg-emerald-100 text-emerald-950 border border-emerald-300';
      fb.innerHTML = '<strong>ถูกต้อง! 🎉 (ตัวเลือก B):</strong> <strong>Version 1</strong> ลอกโครงสร้างประโยคเดิมแล้วเปลี่ยนคำแค่ 2 คำ (Too similar / Patchwriting) • <strong>Version 2</strong> ใช้คำพ้องความหมาย (<em>antique ➔ vintage, babysit cranky twin boys ➔ taking care of two fussy young brothers</em>) และเปลี่ยนโครงสร้างประโยคโดยรักษาความหมายเดิม 100% • <strong>Version 3</strong> ความหมายเพี้ยน (Changes meaning)';
    } else {
      fb.className = 'p-3 rounded-xl text-xs font-medium bg-rose-100 text-rose-950 border border-rose-300';
      fb.innerHTML = '<strong>ลองเปรียบเทียบอีกครั้ง:</strong> สังเกตว่า <strong>Version 1</strong> แทบจะลอกคำเดิมทั้งหมด ส่วน <strong>Version 2</strong> ปรับโครงสร้างและใช้ Synonyms อย่างเหมาะสมโดยคงความหมายเดิม และ <strong>Version 3</strong> บิดเบือนเนื้อเรื่อง (คำตอบที่ถูกต้องคือข้อ B)';
    }
  }

  // 2. Warm-Up Short Inference Detective Activity (5 Items)
  submitUnit5PreGame(qNum, choiceIdx) {
    if (!this.unit5PreGameAnswers) this.unit5PreGameAnswers = {};
    this.unit5PreGameAnswers[qNum] = choiceIdx;

    const key = {
      1: { ans: 1, exp: "คำใบ้ 'small velvet box' และ 'fastened the antique gold links around her wrist' ชี้ชัดว่าของขวัญคือสร้อยข้อมือทองคำโบราณ (antique gold bracelet) (ข้อ B)" },
      2: { ans: 0, exp: "คำใบ้ว่าทุกครั้งที่แมว 7 ตัวมาถูขา Wanda จะจามไม่หยุดและตาบวมแดง สรุปได้ว่าเธอแพ้ขนแมว (allergic to cats) (ข้อ A)" },
      3: { ans: 2, exp: "การเอาการ์ดหายากมูลค่าหลายร้อยดอลลาร์ไปแลกกับการ์ดธรรมดา สรุปได้ว่า Henry แลกเปลี่ยนอย่างน่าเสียดายและรู้สึกเสียใจภายหลัง (ข้อ C)" },
      4: { ans: 1, exp: "รอยเท้าเหนียวๆ ที่พื้นครัวไปถึงระเบียง บวกกับคราบสีน้ำตาลที่หนวดและอุ้งเท้าของแมว Buttercup ชี้ว่าแมวเป็นตัวการที่กินกระต่ายช็อกโกแลต (ข้อ B)" },
      5: { ans: 2, exp: "เงินเก็บ $347 รวมกับเงินสมทบจากพ่ออีก $347 ได้ $694 แต่ป้ายราคาคือ $899 ทำให้เงินยังขาดอีก $205 (ข้อ C)" }
    };

    const target = key[qNum];
    const fb = document.getElementById(`u5-pg${qNum}-fb`);
    const btns = document.querySelectorAll(`.u5-pg${qNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        b.className = idx === target.ans
          ? `u5-pg${qNum}-btn p-2 rounded-lg border-2 border-emerald-500 bg-emerald-100 text-emerald-950 text-left font-bold cursor-pointer`
          : `u5-pg${qNum}-btn p-2 rounded-lg border-2 border-rose-500 bg-rose-100 text-rose-950 text-left font-bold cursor-pointer`;
      } else if (idx === target.ans) {
        b.className = `u5-pg${qNum}-btn p-2 rounded-lg border border-emerald-400 bg-emerald-50 text-emerald-900 text-left font-medium cursor-pointer`;
      } else {
        b.className = `u5-pg${qNum}-btn p-2 rounded-lg border border-slate-200 bg-white text-slate-500 text-left font-medium cursor-pointer`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      fb.className = choiceIdx === target.ans
        ? 'text-[11px] p-2 rounded bg-emerald-100 text-emerald-950 font-medium block'
        : 'text-[11px] p-2 rounded bg-rose-100 text-rose-950 font-medium block';
      fb.innerHTML = `${choiceIdx === target.ans ? '<strong>ถูกต้อง! 🎉</strong>' : '<strong>คำอธิบาย:</strong>'} ${target.exp}`;
    }

    let score = 0;
    Object.keys(key).forEach(k => {
      if (this.unit5PreGameAnswers[k] === key[k].ans) score++;
    });
    const scoreEl = document.getElementById('u5-pregame-score');
    if (scoreEl) scoreEl.textContent = `${score} / 5`;
  }

  // 3. While-Reading Interactive Highlighting Practice
  // Yellow = Directly Stated Info, Green = Inference Clues, Blue = Implied Conclusion & Paraphrase
  highlightUnit5Sentence(segNum, color) {
    const expected = {
      1: { role: 'yellow', exp: 'Segment (1) คือ Directly Stated Information (สีเหลือง) ที่ระบุข้อเท็จจริงตรงๆ ว่า Reid แวะดูจักรยานสีแดงหน้าร้านทุกวันหลังเลิกเรียน' },
      2: { role: 'green', exp: 'Segment (2) คือ Inference Clues (สีเขียว) คำใบ้ที่ว่าเขาถอนหายใจเมื่อดูป้ายราคาและนับธนบัตรยับๆ ไม่กี่ใบในกระเป๋า ช่วยให้ตีความได้ว่าเขาไม่มีเงินพอซื้อจักรยาน' },
      3: { role: 'yellow', exp: 'Segment (3) คือ Directly Stated Information (สีเหลือง) ระบุข้อเท็จจริงตรงๆ ว่า Mr. Eason เสนอให้ยืมจักรยานไปแข่งในวันเสาร์โดยไม่คิดเงิน' },
      4: { role: 'green', exp: 'Segment (4) คือ Inference Clues (สีเขียว) คำใบ้เรื่องเสื้อและหมวกกันน็อกที่มีชื่อร้านตัวใหญ่ ช่วยให้ตีความแรงจูงใจของเจ้าของร้านได้ว่าต้องการใช้การแข่งเป็นป้ายโฆษณาร้าน' },
      5: { role: 'blue', exp: 'Segment (5) คือ Logical Inference & Paraphrase (สีฟ้า) ที่สรุปความหมายแฝงและถอดความข้อตกลงของทั้งสองฝ่ายด้วยภาษาใหม่ได้อย่างครบถ้วน' }
    };

    const textEl = document.getElementById(`u5-s${segNum}-text`);
    const fbEl = document.getElementById(`u5-s${segNum}-feedback`);
    if (!textEl || !fbEl) return;

    const hlMap = {
      yellow: 'highlighter-pen highlighter-yellow',
      green: 'highlighter-pen highlighter-green',
      blue: 'highlighter-pen highlighter-blue'
    };

    const rawText = textEl.textContent.trim();
    textEl.innerHTML = `<span class="${hlMap[color]}">${rawText}</span>`;

    const isCorrect = expected[segNum].role === color;
    fbEl.classList.remove('hidden');
    fbEl.className = `text-[11px] font-sans pt-1 ${isCorrect ? 'text-emerald-300' : 'text-amber-300'}`;
    fbEl.innerHTML = isCorrect
      ? `✅ <strong>ถูกต้อง!</strong> ${expected[segNum].exp}`
      : `💡 <strong>คำแนะนำ:</strong> ${expected[segNum].exp}`;
  }

  resetUnit5Highlights() {
    for (let i = 1; i <= 5; i++) {
      const textEl = document.getElementById(`u5-s${i}-text`);
      const fbEl = document.getElementById(`u5-s${i}-feedback`);
      if (textEl) textEl.innerHTML = textEl.textContent.trim();
      if (fbEl) fbEl.classList.add('hidden');
    }
  }

  revealUnit5Highlights() {
    const roles = { 1: 'yellow', 2: 'green', 3: 'yellow', 4: 'green', 5: 'blue' };
    Object.keys(roles).forEach(k => this.highlightUnit5Sentence(Number(k), roles[k]));
  }

  // 4. While-Reading Graded Inference Detective & Paraphrasing Practice (8 Items)
  submitUnit5Game(qNum, choiceIdx) {
    if (!this.unit5GameAnswers) this.unit5GameAnswers = {};
    this.unit5GameAnswers[qNum] = choiceIdx;

    const key = {
      1: { ans: 1, exp: "จากคำใบ้เสียงคำรามกึกก้องที่สั่นสะเทือนกระท่อมบนภูเขา และกำแพงหิมะอัดแน่นที่ปิดกั้นประตูและหน้าต่างทั้งหมด สรุปได้ว่าเกิดหิมะถล่ม (avalanche) ทับกระท่อม (ข้อ B)" },
      2: { ans: 2, exp: "มดดูถูกดักแด้ที่อยู่นิ่งๆ ในเปลือก แต่ไม่กี่อึดใจต่อมาดักแด้ก็กลายเป็นผีเสื้อแสนสวยบินขึ้นฟ้า สอนให้รู้ว่าอย่าตัดสินหรือดูแคลนผู้อื่นจากรูปลักษณ์ภายนอกชั่วคราว (ข้อ C)" },
      3: { ans: 0, exp: "การเล่าว่า Pecos Bill โตมากับหมาป่า ใช้หางกระดิ่งเป็นบ่วงบาศ และขี่พายุทอร์นาโดข้าม 3 รัฐ เป็นนิทานพื้นบ้านแนว Tall Tale ที่ใช้การกล่าวเกินจริง (hyperbole) เพื่อความสนุกสนาน (ข้อ A)" },
      4: { ans: 3, exp: "ดาวหางฮัลเลย์โคจรกลับมาทุกๆ 75–76 ปี เมื่อครั้งล่าสุดคือปี 1986 จึงสรุปได้ว่าจะปรากฏให้เห็นอีกครั้งราวปี 2061 หรือ 2062 (1986 + 75/76) (ข้อ D)" },
      5: { ans: 1, exp: "ข้อ B ถอดความโดยใช้ Synonyms (Trojans ➔ citizens of Troy, giant wooden horse ➔ massive timber statue, dragged ➔ pulled, unaware ➔ not realizing, hiding ➔ concealed) และเปลี่ยนโครงสร้างประโยคโดยคงความหมายเดิม 100%" },
      6: { ans: 2, exp: "ข้อ C ปรับโครงสร้างโดยย้ายอนุประโยคเวลาขึ้นต้น (Shortly before the pupa transformed...) และใช้คำพ้องความหมาย (arrogant ➔ boastful, mocked ➔ ridiculed, trapped in its shell ➔ unable to move inside its casing)" },
      7: { ans: 0, exp: "ข้อ A เปลี่ยน Although clause เป็นวลี Despite losing electrical power during the severe blizzard และใช้คำพ้องความหมายอย่างแม่นยำโดยคงความหมายเดิม" },
      8: { ans: 3, exp: "ข้อ D สลับอนุประโยคเงื่อนไขขึ้นต้นด้วย Provided that Reid promoted the store by wearing its logo gear... และใช้ Synonyms (borrow for free ➔ lend at no charge, expensive ➔ high-priced) ได้อย่างสมบูรณ์" }
    };

    const target = key[qNum];
    const fb = document.getElementById(`u5-g${qNum}-fb`);
    const btns = document.querySelectorAll(`.u5-g${qNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        b.className = idx === target.ans
          ? `u5-g${qNum}-btn p-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-100 text-emerald-950 text-left font-bold cursor-pointer`
          : `u5-g${qNum}-btn p-2.5 rounded-xl border-2 border-rose-500 bg-rose-100 text-rose-950 text-left font-bold cursor-pointer`;
      } else if (idx === target.ans) {
        b.className = `u5-g${qNum}-btn p-2.5 rounded-xl border border-emerald-400 bg-emerald-50 text-emerald-900 text-left font-medium cursor-pointer`;
      } else {
        b.className = `u5-g${qNum}-btn p-2.5 rounded-xl border border-slate-200 bg-white text-slate-500 text-left font-medium cursor-pointer`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      fb.className = choiceIdx === target.ans
        ? 'text-xs font-medium p-2.5 rounded-lg bg-emerald-100 text-emerald-950 border border-emerald-300 block'
        : 'text-xs font-medium p-2.5 rounded-lg bg-rose-100 text-rose-950 border border-rose-300 block';
      fb.innerHTML = `${choiceIdx === target.ans ? '<strong>ถูกต้อง! 🎉</strong>' : '<strong>ยังไม่ถูกต้อง:</strong>'} ${target.exp}`;
    }

    let score = 0;
    let answered = 0;
    Object.keys(key).forEach(k => {
      if (this.unit5GameAnswers[k] !== undefined) {
        answered++;
        if (this.unit5GameAnswers[k] === key[k].ans) score++;
      }
    });

    const scoreEl = document.getElementById('u5-game-score');
    if (scoreEl) scoreEl.textContent = `${score} / 8`;

    this.unit5GameScore = score;
    localStorage.setItem('bru_unit5_game_score', score);
    localStorage.setItem('bru_unit5_game_answers', JSON.stringify(this.unit5GameAnswers));

    if (answered === 8) {
      const finalBox = document.getElementById('u5-game-final-box');
      if (finalBox) {
        finalBox.classList.remove('hidden');
        const pass = score >= 6;
        finalBox.className = `p-4 rounded-2xl border text-center space-y-2 block ${pass ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-amber-50 border-amber-300 text-amber-950'}`;
        finalBox.innerHTML = `
          <div class="text-base font-bold flex items-center justify-center space-x-2">
            <i data-lucide="${pass ? 'check-circle' : 'alert-circle'}" class="w-5 h-5 ${pass ? 'text-emerald-600' : 'text-amber-600'}"></i>
            <span>${pass ? 'ผ่านเกณฑ์ Inference Detective & Paraphrasing Practice (Indicator 3.3 &ge; 70%) 🎉' : 'คะแนนยังไม่ถึงเกณฑ์ 70% (ต้องได้ 6/8 ข้อขึ้นไป)'}</span>
          </div>
          <p class="text-xs">คะแนนที่ได้: <strong>${score} / 8 (${Math.round((score/8)*100)}%)</strong></p>
        `;
        if (window.lucide) lucide.createIcons();
      }
    }
    this.updateUnit5SummaryDashboard();
  }

  // 5. Unit 5 Score Dashboard
  updateUnit5SummaryDashboard() {
    const gScore = localStorage.getItem('bru_unit5_game_score');
    const tScore = localStorage.getItem('bru_unit5_test_score') || localStorage.getItem('bru_unit5_quiz_score');

    const sc1 = document.getElementById('summary-u5-game');
    const bg1 = document.getElementById('badge-u5-game');
    if (sc1 && bg1 && gScore !== null) {
      const val = parseInt(gScore);
      sc1.textContent = `${val} / 8`;
      bg1.className = `text-[10px] font-bold px-2 py-0.5 rounded ${val >= 6 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`;
      bg1.textContent = val >= 6 ? 'Passed (>=70%)' : 'Needs Retake';
    }

    const sc2 = document.getElementById('summary-u5-test');
    const bg2 = document.getElementById('badge-u5-test');
    if (sc2 && bg2 && tScore !== null) {
      const val = parseInt(tScore);
      sc2.textContent = `${val} / 40`;
      bg2.className = `text-[10px] font-bold px-2 py-0.5 rounded ${val >= 28 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`;
      bg2.textContent = val >= 28 ? 'Passed (>=70%)' : 'Needs Retake';
    }
  }

  /* ------------------- Unit 6 Interactive Learning Engines ------------------- */

  // 1. Personal Goal Setting
  setUnit6Goal(goalText) {
    localStorage.setItem('bru_unit6_goal', goalText);
    const fb = document.getElementById('u6-goal-fb');
    if (fb) {
      fb.classList.remove('hidden');
      fb.className = 'text-xs font-medium p-3 rounded-xl bg-emerald-100 text-emerald-950 border border-emerald-300 block';
      fb.innerHTML = `🎯 <strong>บันทึกเป้าหมายของฉันเรียบร้อยแล้ว:</strong> "${goalText}" — ขอให้โฟกัสการใช้กลยุทธ์นี้ระหว่างฝึกทำกิจกรรมใน Unit 6 ครับ!`;
    }
  }

  // 2. Strategy Matching Activity (5 Reading Situations)
  submitUnit6Match(qNum, choiceIdx) {
    if (!this.unit6MatchAnswers) this.unit6MatchAnswers = {};
    this.unit6MatchAnswers[qNum] = choiceIdx;

    const key = {
      1: { ans: 0, exp: "เมื่อต้องการหาตัวเลขเฉพาะเจาะจง (เช่น 250°C) อย่างรวดเร็วโดยไม่อ่านทุกคำ ต้องใช้ Scanning for Specific Details (Unit 2) (ข้อ A)" },
      2: { ans: 1, exp: "เมื่อเจอคำศัพท์ยากในประโยคที่มีเครื่องหมายขีดยาว (—) อธิบายความหมายไว้ข้างหลัง ให้ใช้ Punctuation / Definition Context Clues (Unit 3) (ข้อ B)" },
      3: { ans: 2, exp: "เมื่อต้องการรู้ว่าคำสรรพนามพหูพจน์ 'they' แทนใครหรือสิ่งใด ต้องใช้ Reference Word Tracking ย้อนกลับไปหาคำนามพหูพจน์ข้างหน้า (Unit 4) (ข้อ C)" },
      4: { ans: 1, exp: "เมื่อผู้เขียนบอกเพียงอาการและคำใบ้ (แมวขดตัวใกล้เตาผิง หิมะเกาะกระจก) ต้องใช้ Making Inferences (Text Clues + Prior Knowledge) (Unit 5) (ข้อ B)" },
      5: { ans: 2, exp: "เมื่อต้องการรู้หัวข้อหลักและใจความสำคัญคร่าวๆ ของบทความภายในเวลาสั้นๆ ต้องใช้ Previewing & Skimming (Unit 1) (ข้อ C)" }
    };

    const target = key[qNum];
    const fb = document.getElementById(`u6-m${qNum}-fb`);
    const btns = document.querySelectorAll(`.u6-m${qNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        b.className = idx === target.ans
          ? `u6-m${qNum}-btn p-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-100 text-emerald-950 text-left font-bold cursor-pointer`
          : `u6-m${qNum}-btn p-2.5 rounded-xl border-2 border-rose-500 bg-rose-100 text-rose-950 text-left font-bold cursor-pointer`;
      } else if (idx === target.ans) {
        b.className = `u6-m${qNum}-btn p-2.5 rounded-xl border border-emerald-400 bg-emerald-50 text-emerald-900 text-left font-medium cursor-pointer`;
      } else {
        b.className = `u6-m${qNum}-btn p-2.5 rounded-xl border border-slate-200 bg-white text-slate-500 text-left font-medium cursor-pointer`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      fb.className = choiceIdx === target.ans
        ? 'text-xs font-medium p-2.5 rounded-lg bg-emerald-100 text-emerald-950 border border-emerald-300 block'
        : 'text-xs font-medium p-2.5 rounded-lg bg-rose-100 text-rose-950 border border-rose-300 block';
      fb.innerHTML = `${choiceIdx === target.ans ? '<strong>ถูกต้อง! 🎉</strong>' : '<strong>คำแนะนำ:</strong>'} ${target.exp}`;
    }

    let score = 0;
    Object.keys(key).forEach(k => {
      if (this.unit6MatchAnswers[k] === key[k].ans) score++;
    });

    const scoreEl = document.getElementById('u6-match-score');
    if (scoreEl) scoreEl.textContent = `${score} / 5`;

    localStorage.setItem('bru_unit6_match_answers', JSON.stringify(this.unit6MatchAnswers));
  }

  // 3. App Warm-Up Quiz (10 Questions Reviewing Units 1–5)
  submitUnit6PreGame(qNum, choiceIdx) {
    if (!this.unit6PreGameAnswers) this.unit6PreGameAnswers = {};
    this.unit6PreGameAnswers[qNum] = choiceIdx;

    const key = {
      1: { ans: 1, exp: "พาดหัวข่าว 'Plant Life Discovered Beyond Earth!' บอกหัวข้อหลักทันทีว่าเป็นเรื่องการค้นพบสิ่งมีชีวิตประเภทพืชบนดาวดวงอื่นนอกโลก (ข้อ B)" },
      2: { ans: 2, exp: "สแกนหาคำว่า Jupiter แล้วอ่านคำขยายข้างหน้าจะพบตัวเลข 'four moons of Jupiter' (ข้อ C)" },
      3: { ans: 0, exp: "ประโยคแรกสุดสรุปใจความสำคัญว่า Shelby เดินทางถึงชิคาโกอย่างปลอดภัยแต่กระเป๋าสัมภาระหายที่สนามบิน ส่วนประโยคอื่นๆ เป็นรายละเอียดสนับสนุน (ข้อ A)" },
      4: { ans: 1, exp: "คำเชื่อม 'because' แสดงความสัมพันธ์แบบสาเหตุและผลลัพธ์ (Cause and Effect) อธิบายสาเหตุที่ Jacob ไม่มีความสุขหลังชนะการแข่งขัน (ข้อ B)" },
      5: { ans: 2, exp: "คำว่า 'that is, showing poor sportsmanship' หลังเครื่องหมายขีดยาว (—) เป็นคำนิยามตรงตัวของคำว่า 'unsportsmanlike' (ข้อ C)" },
      6: { ans: 0, exp: "ตัวเชื่อม 'Unlike' แสดงการเปรียบเทียบความต่าง (Antonym Clue): แม่น้ำในเมืองชิคาโกไหลย้อนกลับได้ ต่างจากแม่น้ำทั่วไปที่ไหลไปในทิศทางเดียวเสมอ ดังนั้น 'reversible' จึงแปลว่าสามารถไหลย้อนกลับทิศทางได้ (ข้อ A)" },
      7: { ans: 1, exp: "คำสรรพนามพหูพจน์ 'They' ในประโยคถัดมาอ้างอิงย้อนกลับไปหาคำนามพหูพจน์ 'The brothers' ในประโยคแรก (ข้อ B)" },
      8: { ans: 2, exp: "คำเชื่อมลำดับเวลา 'First, Next, Finally' แสดงการจัดระเบียบเนื้อหาแบบเรียงตามลำดับขั้นตอน (Sequence / Chronological Order) (ข้อ C)" },
      9: { ans: 0, exp: "จากคำใบ้ที่ Laura เชิญเพื่อนทั้งชั้นยกเว้น Andre และบอกเพื่อนว่า 'Don't say anything to Andre' สรุปได้ว่าพวกเขากำลังจัดงานเลี้ยงวันเกิดเซอร์ไพรส์ให้ Andre (ข้อ A)" },
      10: { ans: 2, exp: "ข้อ C ถอดความโดยใช้ Synonyms (bundle of sticks ➔ group of tied twigs, single twig ➔ individual stick, snaps easily ➔ breaks Effortlessly) และคงความหมายเปรียบเปรยเรื่องความสามัคคีไว้ครบถ้วน" }
    };

    const target = key[qNum];
    const fb = document.getElementById(`u6-pg${qNum}-fb`);
    const btns = document.querySelectorAll(`.u6-pg${qNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        b.className = idx === target.ans
          ? `u6-pg${qNum}-btn p-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-100 text-emerald-950 text-left font-bold cursor-pointer`
          : `u6-pg${qNum}-btn p-2.5 rounded-xl border-2 border-rose-500 bg-rose-100 text-rose-950 text-left font-bold cursor-pointer`;
      } else if (idx === target.ans) {
        b.className = `u6-pg${qNum}-btn p-2.5 rounded-xl border border-emerald-400 bg-emerald-50 text-emerald-900 text-left font-medium cursor-pointer`;
      } else {
        b.className = `u6-pg${qNum}-btn p-2.5 rounded-xl border border-slate-200 bg-white text-slate-500 text-left font-medium cursor-pointer`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      fb.className = choiceIdx === target.ans
        ? 'text-xs font-medium p-2.5 rounded-lg bg-emerald-100 text-emerald-950 border border-emerald-300 block'
        : 'text-xs font-medium p-2.5 rounded-lg bg-rose-100 text-rose-950 border border-rose-300 block';
      fb.innerHTML = `${choiceIdx === target.ans ? '<strong>ถูกต้อง! 🎉</strong>' : '<strong>คำอธิบาย:</strong>'} ${target.exp}`;
    }

    let score = 0;
    Object.keys(key).forEach(k => {
      if (this.unit6PreGameAnswers[k] === key[k].ans) score++;
    });

    const scoreEl = document.getElementById('u6-pregame-score');
    if (scoreEl) scoreEl.textContent = `${score} / 10`;

    localStorage.setItem('bru_unit6_pregame_answers', JSON.stringify(this.unit6PreGameAnswers));
  }

  // 4. 5-Colour Digital Annotation Activity
  highlightUnit6Sentence(segNum, color) {
    if (!this.unit6Highlights) this.unit6Highlights = {};
    this.unit6Highlights[segNum] = color;

    const el = document.getElementById(`u6-hl-s${segNum}`);
    const fb = document.getElementById('u6-hl-feedback');

    const roles = {
      1: {
        role: 'yellow',
        msg: 'ถูกต้องครับ! 🟡 Segment [1] เป็น Topic Sentence & Main Idea (Unit 1) ที่แนะนำว่าเมือง St. Augustine รัฐฟลอริดา คือเมืองที่มีผู้คนตั้งถิ่นฐานอย่างต่อเนื่องที่เก่าแก่ที่สุดในสหรัฐอเมริกา'
      },
      2: {
        role: 'green',
        msg: 'ถูกต้องครับ! 🟢 Segment [2] มี Context Clue (Unit 3) ใช้ขีดยาว (—) นิยามคำว่า "fortifications" ว่าหมายถึงกำแพงหินป้องกันเมืองที่แข็งแกร่ง'
      },
      3: {
        role: 'purple',
        msg: 'ถูกต้องครับ! 🟣 Segment [3] มี Transition Signal "Subsequently" (ต่อมา) และ "However" (อย่างไรก็ตาม) ที่บอกลำดับเวลาและความขัดแย้ง (Units 2 & 4)'
      },
      4: {
        role: 'blue',
        msg: 'ถูกต้องครับ! 🔵 Segment [4] มีคำสรรพนามอ้างอิง "They" และ "their" (Unit 4) ซึ่งอ้างอิงย้อนกลับไปหา "Spanish settlers" (ผู้ตั้งถิ่นฐานชาวสเปน)'
      },
      5: {
        role: 'red',
        msg: 'ถูกต้องครับ! 🔴 Segment [5] ให้หลักฐานคำใบ้ (ป้อมหินโบราณ ถนนอิฐแคบๆ และบ้านสไตล์สเปนที่ยังมีนักท่องเที่ยวมาชมไม่ขาดสาย) ซึ่งนำไปสู่การสรุป Inference & Paraphrase (Unit 5) ว่าเมืองนี้อนุรักษ์มรดกทางประวัติศาสตร์ไว้ได้อย่างยอดเยี่ยม'
      }
    };

    const colorClasses = {
      yellow: 'highlighter-pen highlighter-yellow font-bold text-slate-900',
      green: 'highlighter-pen highlighter-green font-bold text-slate-900',
      purple: 'highlighter-pen highlighter-purple font-bold text-slate-900',
      blue: 'highlighter-pen highlighter-blue font-bold text-slate-900',
      red: 'highlighter-pen highlighter-pink font-bold text-slate-900'
    };

    if (el) {
      el.className = `${colorClasses[color]} px-1 rounded transition`;
    }

    const expected = roles[segNum];
    if (fb && expected) {
      const isCorrect = expected.role === color;
      fb.classList.remove('hidden');
      fb.className = `p-3.5 rounded-xl border text-xs font-medium ${isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-amber-50 border-amber-300 text-amber-950'}`;
      const colorNames = {
        yellow: '🟡 สีเหลือง (Main Idea)',
        green: '🟢 สีเขียว (Vocabulary & Context Clues)',
        purple: '🟣 สีม่วง (Text Structure & Transition Signals)',
        blue: '🔵 สีฟ้า (Reference Words & Pronouns)',
        red: '🔴 สีแดง/ชมพู (Inference Clues & Paraphrased Ideas)'
      };
      fb.innerHTML = isCorrect
        ? `<strong>ยอดเยี่ยม! 🎉</strong> ${expected.msg}`
        : `<strong>ลองดูอีกครั้งครับ! 💡</strong> Segment [${segNum}] ไม่ใช่ ${colorNames[color]} — ลองสังเกตคำสำคัญในประโยคแล้วเลือกสีที่ตรงกับหน้าที่ของ Segment [${segNum}] (${colorNames[expected.role]})`;
    }
  }

  resetUnit6Highlights() {
    this.unit6Highlights = {};
    for (let i = 1; i <= 5; i++) {
      const el = document.getElementById(`u6-hl-s${i}`);
      if (el) el.className = 'transition px-1 rounded';
    }
    const fb = document.getElementById('u6-hl-feedback');
    if (fb) fb.classList.add('hidden');
  }

  revealUnit6Highlights() {
    this.highlightUnit6Sentence(1, 'yellow');
    this.highlightUnit6Sentence(2, 'green');
    this.highlightUnit6Sentence(3, 'purple');
    this.highlightUnit6Sentence(4, 'blue');
    this.highlightUnit6Sentence(5, 'red');
    const fb = document.getElementById('u6-hl-feedback');
    if (fb) {
      fb.classList.remove('hidden');
      fb.className = 'p-3.5 rounded-xl border bg-purple-50 border-purple-200 text-purple-950 text-xs space-y-1';
      fb.innerHTML = `
        <div class="font-bold">✨ เฉลยการไฮไลต์ดิจิทัล 5 สี (5-Colour Digital Annotation):</div>
        <p>• <strong>[1] 🟡 สีเหลือง (Main Idea — Unit 1):</strong> แนะนำเมือง St. Augustine ว่าเป็นเมืองที่ตั้งถิ่นฐานอย่างต่อเนื่องเก่าแก่ที่สุดในสหรัฐฯ</p>
        <p>• <strong>[2] 🟢 สีเขียว (Context Clues — Unit 3):</strong> มีเครื่องหมายขีดยาว <code>— massive stone walls —</code> นิยามคำว่า <em>fortifications</em></p>
        <p>• <strong>[3] 🟣 สีม่วง (Structure & Signals — Units 2 & 4):</strong> มีคำเชื่อม <em>Subsequently</em> (ลำดับเวลา) และ <em>However</em> (ความขัดแย้ง)</p>
        <p>• <strong>[4] 🔵 สีฟ้า (Reference Words — Unit 4):</strong> คำสรรพนาม <em>They</em> และ <em>their</em> อ้างอิงย้อนกลับไปหา <em>Spanish settlers</em></p>
        <p>• <strong>[5] 🔴 สีแดง/ชมพู (Inferences & Paraphrasing — Unit 5):</strong> คำใบ้เรื่องสถาปัตยกรรมโบราณและนักท่องเที่ยวหลายล้านคนช่วยสรุปว่าเมืองนี้อนุรักษ์ประวัติศาสตร์ไว้ได้อย่างมีชีวิตชีวา</p>
      `;
    }
  }

  // 5. Units 1–5 Review Challenge & Progress Check (10 Items)
  submitUnit6Game(qNum, choiceIdx) {
    if (!this.unit6GameAnswers) this.unit6GameAnswers = {};
    this.unit6GameAnswers[qNum] = choiceIdx;

    const key = {
      1: { ans: 1, exp: "ย่อหน้าแรกอธิบายการที่นายพล Han Hsin ใช้ว่าววัดระยะทางเพื่อขุดอุโมงค์เข้าสู่ปราสาทข้าศึกอย่างชาญฉลาด จึงเป็นใจความสำคัญของเรื่อง (ข้อ B)" },
      2: { ans: 2, exp: "สแกนหาตัวเลขหลังคำว่า 'measuring' หรือ 'dug a tunnel' จะพบระยะทาง '1,500 feet long' (ข้อ C)" },
      3: { ans: 0, exp: "คำเชื่อม 'Instead of' แสดงการเปรียบเทียบวิธีแก้ปัญหา: แทนที่จะบุกโจมตีป้อมปราการโดยตรง นายพลเลือกขุดอุโมงค์ลอดกำแพงแทน (ข้อ A)" },
      4: { ans: 3, exp: "ข้อความในเครื่องหมายขีดยาว '— an underground passage —' ให้คำนิยามตรงตัวว่า 'tunnel' คือทางเดินใต้ดิน (ข้อ D)" },
      5: { ans: 1, exp: "ในบริบทของเรื่อง เหรียญโรมันมีภาพจักรพรรดิและเทพเจ้า ส่วนคำว่า 'minted' ตามด้วยวลี 'from gold, silver, and bronze' จึงหมายถึงถูกผลิตหรือหล่อขึ้นเป็นเหรียญ (ข้อ B)" },
      6: { ans: 2, exp: "คำสรรพนามพหูพจน์ 'them' ในประโยค 'used them to buy food' อ้างอิงย้อนกลับไปหาคำนามพหูพจน์ 'Roman coins' (ข้อ C)" },
      7: { ans: 0, exp: "ย่อหน้าเปรียบเทียบความเหมือนและความต่างระหว่าง Tropical Rainforests กับ Temperate Rainforests จึงจัดโครงสร้างแบบ Compare and Contrast (ข้อ A)" },
      8: { ans: 3, exp: "คำชี้เฉพาะ 'This tradition' สรุปการกระทำทั้งหมดในประโยคก่อนหน้า คือการที่นายจ้างมอบกล่องของขวัญและเงินโบนัสให้คนงานในวันหลังคริสต์มาส (ข้อ D)" },
      9: { ans: 1, exp: "จากการที่สมาชิกวง The Money Magnets ซ้อมดนตรีทุกเย็นหลังเลิกเรียนและเก็บเงินค่าตั๋วเพื่อซื้อเครื่องดนตรีใหม่ สรุปได้ว่าพวกเขามีความมุ่งมั่นและรับผิดชอบสูง (ข้อ B)" },
      10: { ans: 2, exp: "ข้อ C ถอดความโดยใช้ Synonyms (judges ➔ panel, awarded first prize ➔ gave the top award, secret blend of roasted peppers ➔ unique mixture of fire-roasted chilies) และคงความหมายเดิมครบถ้วน" }
    };

    const target = key[qNum];
    const fb = document.getElementById(`u6-g${qNum}-fb`);
    const btns = document.querySelectorAll(`.u6-g${qNum}-btn`);

    btns.forEach((b, idx) => {
      if (idx === choiceIdx) {
        b.className = idx === target.ans
          ? `u6-g${qNum}-btn p-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-100 text-emerald-950 text-left font-bold cursor-pointer`
          : `u6-g${qNum}-btn p-2.5 rounded-xl border-2 border-rose-500 bg-rose-100 text-rose-950 text-left font-bold cursor-pointer`;
      } else if (idx === target.ans) {
        b.className = `u6-g${qNum}-btn p-2.5 rounded-xl border border-emerald-400 bg-emerald-50 text-emerald-900 text-left font-medium cursor-pointer`;
      } else {
        b.className = `u6-g${qNum}-btn p-2.5 rounded-xl border border-slate-200 bg-white text-slate-500 text-left font-medium cursor-pointer`;
      }
    });

    if (fb && target) {
      fb.classList.remove('hidden');
      fb.className = choiceIdx === target.ans
        ? 'text-xs font-medium p-2.5 rounded-lg bg-emerald-100 text-emerald-950 border border-emerald-300 block'
        : 'text-xs font-medium p-2.5 rounded-lg bg-rose-100 text-rose-950 border border-rose-300 block';
      fb.innerHTML = `${choiceIdx === target.ans ? '<strong>ถูกต้อง! 🎉</strong>' : '<strong>ยังไม่ถูกต้อง:</strong>'} ${target.exp}`;
    }

    let score = 0;
    let answered = 0;
    Object.keys(key).forEach(k => {
      if (this.unit6GameAnswers[k] !== undefined) {
        answered++;
        if (this.unit6GameAnswers[k] === key[k].ans) score++;
      }
    });

    const scoreEl = document.getElementById('u6-game-score');
    if (scoreEl) scoreEl.textContent = `${score} / 10`;

    this.unit6GameScore = score;
    localStorage.setItem('bru_unit6_game_score', score);
    localStorage.setItem('bru_unit6_game_answers', JSON.stringify(this.unit6GameAnswers));

    if (answered === 10) {
      const finalBox = document.getElementById('u6-game-final-box');
      if (finalBox) {
        finalBox.classList.remove('hidden');
        const pass = score >= 7;
        finalBox.className = `p-4 rounded-2xl border text-center space-y-2 block ${pass ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-amber-50 border-amber-300 text-amber-950'}`;
        finalBox.innerHTML = `
          <div class="text-base font-bold flex items-center justify-center space-x-2">
            <i data-lucide="${pass ? 'check-circle' : 'alert-circle'}" class="w-5 h-5 ${pass ? 'text-emerald-600' : 'text-amber-600'}"></i>
            <span>${pass ? 'ผ่านเกณฑ์ Units 1–5 Review Challenge (Indicator 3.3 &ge; 70%) 🎉' : 'คะแนนยังไม่ถึงเกณฑ์ 70% (ต้องได้ 7/10 ข้อขึ้นไป)'}</span>
          </div>
          <p class="text-xs">คะแนนที่ได้: <strong>${score} / 10 (${Math.round((score/10)*100)}%)</strong></p>
        `;
        if (window.lucide) lucide.createIcons();
      }
    }
    this.updateUnit6SummaryDashboard();
  }

  // 6. Unit 6 Score & Previous Units Dashboard
  updateUnit6SummaryDashboard() {
    // Populate Previous Units 1-5 Scores if elements exist
    for (let u = 1; u <= 5; u++) {
      const prevEl = document.getElementById(`u6-prev-u${u}`);
      if (prevEl) {
        const sc = localStorage.getItem(`bru_unit${u}_quiz_score`) || localStorage.getItem(`bru_unit${u}_test_score`);
        if (sc !== null) {
          prevEl.textContent = `${sc} / 40 (${Math.round((parseInt(sc)/40)*100)}%)`;
        }
      }
    }

    const savedGoal = localStorage.getItem('bru_unit6_goal');
    const goalFb = document.getElementById('u6-goal-fb');
    if (goalFb && savedGoal) {
      goalFb.classList.remove('hidden');
      goalFb.className = 'text-xs font-medium p-3 rounded-xl bg-emerald-100 text-emerald-950 border border-emerald-300 block';
      goalFb.innerHTML = `🎯 <strong>เป้าหมายของฉันในบทนี้:</strong> "${savedGoal}"`;
    }

    const gScore = localStorage.getItem('bru_unit6_game_score');
    const tScore = localStorage.getItem('bru_unit6_test_score') || localStorage.getItem('bru_unit6_quiz_score');

    const sc1 = document.getElementById('summary-u6-game');
    const bg1 = document.getElementById('badge-u6-game');
    if (sc1 && bg1 && gScore !== null) {
      const val = parseInt(gScore);
      sc1.textContent = `${val} / 10`;
      bg1.className = `text-[10px] font-bold px-2 py-0.5 rounded ${val >= 7 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`;
      bg1.textContent = val >= 7 ? 'Passed (>=70%)' : 'Needs Retake';
    }

    const sc2 = document.getElementById('summary-u6-test');
    const bg2 = document.getElementById('badge-u6-test');
    if (sc2 && bg2 && tScore !== null) {
      const val = parseInt(tScore);
      sc2.textContent = `${val} / 40`;
      bg2.className = `text-[10px] font-bold px-2 py-0.5 rounded ${val >= 28 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`;
      bg2.textContent = val >= 28 ? 'Passed (>=70%)' : 'Needs Retake';
    }
  }

  /* ------------------- Global Audio TTS Playback ------------------- */
  updateAudioButtonsUI() {
    const audioButtons = document.querySelectorAll('button[onclick*="Passage"], button[onclick*="togglePassageAudio"], button[onclick*="playUnit1Passage"], button[onclick*="playQuizPassageAudio"]');
    audioButtons.forEach(btn => {
      const span = btn.querySelector('span');
      const icon = btn.querySelector('i');
      if (this.isAudioPlaying) {
        btn.classList.add('audio-playing');
        if (span && span.textContent.includes('Listen')) {
          span.textContent = span.textContent.replace('Listen', 'Stop');
        }
        if (icon) {
          icon.setAttribute('data-lucide', 'square');
        }
      } else {
        btn.classList.remove('audio-playing');
        if (span && span.textContent.includes('Stop')) {
          span.textContent = span.textContent.replace('Stop', 'Listen');
        }
        if (icon) {
          icon.setAttribute('data-lucide', 'volume-2');
        }
      }
    });
    if (window.lucide) lucide.createIcons();
  }

  togglePassageAudio(encodedText) {
    const text = decodeURIComponent(encodedText);
    if (this.isAudioPlaying) {
      if (this.speechSynth) this.speechSynth.cancel();
      this.isAudioPlaying = false;
      this.updateAudioButtonsUI();
      return;
    }

    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech audio player is playing passage sound: ' + text);
      return;
    }

    // Cancel any ongoing speech before starting
    if (this.speechSynth) this.speechSynth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    // Slower, clearer speech rate (default 0.75 for EFL learning)
    utterance.rate = this.audioSpeed || 0.75;
    utterance.pitch = 1.0;

    // Pick natural English voice if available in browser
    if (this.speechSynth && typeof this.speechSynth.getVoices === 'function') {
      const voices = this.speechSynth.getVoices();
      const naturalVoice = voices.find(v => v.lang && v.lang.startsWith('en') && 
        (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Zira') || v.name.includes('Jenny') || v.name.includes('David')));
      if (naturalVoice) utterance.voice = naturalVoice;
    }

    utterance.onstart = () => {
      this.isAudioPlaying = true;
      this.updateAudioButtonsUI();
    };

    utterance.onend = () => {
      this.isAudioPlaying = false;
      this.updateAudioButtonsUI();
    };

    utterance.onerror = () => {
      this.isAudioPlaying = false;
      this.updateAudioButtonsUI();
    };

    this.speechSynth.speak(utterance);
  }

  /* ------------------- Immediate Feedback Engine ------------------- */
  submitPracticeAnswer(selectedIdx, correctIdx, encodedExpl) {
    const isCorrect = selectedIdx === correctIdx;
    const explanation = decodeURIComponent(encodedExpl);
    this.showFeedbackModal(isCorrect, explanation);
  }

  submitQuizAnswer(selectedIdx, correctIdx, encodedExpl) {
    const isCorrect = selectedIdx === correctIdx;
    const explanation = decodeURIComponent(encodedExpl);
    this.showFeedbackModal(isCorrect, explanation);
  }

  submitStrategyQuiz(selectedIdx, correctIdx, encodedExpl) {
    const isCorrect = selectedIdx === correctIdx;
    const explanation = decodeURIComponent(encodedExpl);
    this.showFeedbackModal(isCorrect, explanation);
  }

  showFeedbackModal(isCorrect, explanation) {
    const modal = document.getElementById('feedback-modal');
    const content = document.getElementById('feedback-content');

    content.innerHTML = `
      <div class="text-center space-y-4">
        <div class="w-16 h-16 rounded-2xl ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'} flex items-center justify-center mx-auto">
          <i data-lucide="${isCorrect ? 'check-circle-2' : 'x-circle'}" class="w-8 h-8"></i>
        </div>

        <h3 class="text-2xl font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}">
          ${isCorrect ? 'Correct Answer! 🎉' : 'Keep Trying! 💪'}
        </h3>

        <div class="p-4 ${isCorrect ? 'bg-emerald-50 border border-emerald-200' : 'bg-rose-50 border border-rose-200'} rounded-2xl text-xs text-left text-slate-800 leading-relaxed">
          <strong>Immediate Feedback & Explanation:</strong>
          <p class="mt-1">${explanation}</p>
        </div>

        <button onclick="app.closeFeedbackModal()" class="w-full py-3 ${isCorrect ? 'bg-emerald-700 hover:bg-emerald-800' : 'bg-slate-900 hover:bg-slate-800'} text-white font-semibold rounded-xl transition text-xs">
          Continue Learning
        </button>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) lucide.createIcons();
  }

  closeFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  /* ------------------- Snowfall Effect ------------------- */
  createSnowfall() {
    const container = document.getElementById('snowfall');
    if (!container) return;
    container.innerHTML = '';
    const flakeCount = 35;

    for (let i = 0; i < flakeCount; i++) {
      const flake = document.createElement('div');
      flake.className = 'snowflake';
      flake.innerHTML = '❄';
      flake.style.left = `${Math.random() * 100}vw`;
      flake.style.animationDuration = `${6 + Math.random() * 9}s`;
      flake.style.animationDelay = `${Math.random() * 5}s`;
      flake.style.fontSize = `${12 + Math.random() * 16}px`;
      container.appendChild(flake);
    }
  }
}

// Global App Instance
document.addEventListener('DOMContentLoaded', () => {
  window.app = new ReadSkillsApp();
});
