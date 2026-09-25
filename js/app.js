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
      currentFeedback: null,
      isCompleted: false,
      lastScore: savedScore ? parseInt(savedScore) : null
    };

    this.speechSynth = window.speechSynthesis;
    this.isAudioPlaying = false;
    this.audioSpeed = parseFloat(localStorage.getItem('bru_audio_speed')) || 0.75;

    this.init();
  }

  init() {
    this.startOnlineTimer();
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
  navigate(viewName) {
    if (!this.isLoggedIn) {
      this.renderLoginView();
      return;
    }

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

    if (window.lucide) lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ------------------- View Renderers ------------------- */

  // 1. Dashboard View
  renderDashboard() {
    return `
      <div class="space-y-6 sm:space-y-8">
        <!-- Welcome Hero -->
        <div class="glass-card p-5 sm:p-8 bg-gradient-to-r from-purple-800 via-purple-700 to-pink-600 text-white rounded-2xl sm:rounded-3xl relative overflow-hidden shadow-xl">
          <div class="relative z-10 max-w-2xl">
            <span class="inline-block bg-white/20 backdrop-blur-md text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2.5 sm:mb-3">
              Course 2031103: Introduction to English Reading Strategies &bull; BRU
            </span>
            <h1 class="text-2xl sm:text-4xl font-bold tracking-tight mb-2">
              Welcome, ${(this.user.name || '').replace(/[\u0E00-\u0E7F]+/g, '').replace(/[()]/g, '').trim() || 'Somsak Jaidee'}
            </h1>
            <p class="text-purple-100 text-xs sm:text-base leading-relaxed mb-5 sm:mb-6">
              A web-based learning application designed for English major students at Buriram Rajabhat University. Explore structured reading lessons, master 8 essential reading strategies, and track your study analytics.
            </p>

            <div class="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <button onclick="app.navigate('lessons')" class="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-purple-900 font-bold rounded-xl hover:bg-purple-50 shadow-md transition flex items-center justify-center space-x-2 text-xs sm:text-sm cursor-pointer">
                <i data-lucide="play-circle" class="w-4 h-4 sm:w-5 sm:h-5 text-purple-700"></i>
                <span>Continue Lesson (Unit ${this.currentUnitId})</span>
              </button>
              <button onclick="app.navigate('strategies')" class="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-purple-900/60 hover:bg-purple-900 text-white font-semibold rounded-xl backdrop-blur-md transition flex items-center justify-center space-x-2 text-xs sm:text-sm border border-purple-300/30 cursor-pointer">
                <i data-lucide="lightbulb" class="w-4 h-4 sm:w-5 sm:h-5 text-amber-300"></i>
                <span>Explore Strategies</span>
              </button>
            </div>
          </div>

          <!-- Decorative Icon -->
          <div class="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
            <i data-lucide="graduation-cap" class="w-80 h-80 text-white"></i>
          </div>
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
      const tagMatch = cleaned.match(/^\[(.*?)\]:?\s*(.*)$/);

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
          return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded ${s.badge} text-[11px] font-bold shadow-2xs mx-1"><i data-lucide="${s.icon}" class="w-3 h-3"></i>[${p1}]</span>`;
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
                    <span>[${item.tagName}]</span>
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
      if (this.currentUnitId === 1) {
        return this.renderQuizStep();
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
      setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 30);
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

  /* ------------------- Unit 1 Graded Quiz Engine (40 Questions) ------------------- */
  renderQuizStep() {
    setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 30);
    const quizData = ReadSkillsData.unit1Quiz;
    if (!quizData) {
      return '<div class="p-6 text-center text-slate-500">Quiz data not found.</div>';
    }

    const state = this.unit1QuizState;

    // Completed Screen
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
              ${passed ? 'Practice Completed with Excellence! 🎉' : 'Practice Completed! 💪'}
            </span>
            <h3 class="text-2xl sm:text-3xl font-bold text-slate-900">Unit 1 Practice Results (ผลคะแนนแบบฝึกหัด 40 ข้อ)</h3>
            <p class="text-xs text-slate-600">คะแนนแบบฝึกหัดพัฒนาทักษะการอ่าน Unit 1 (ใจความสำคัญ 40 ข้อ)</p>
          </div>

          <!-- Total Score Pill -->
          <div class="p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-3xl border border-purple-200 shadow-sm max-w-md mx-auto">
            <div class="text-4xl sm:text-5xl font-black text-purple-900">${totalScore} <span class="text-xl sm:text-2xl text-purple-400">/ 40</span></div>
            <div class="text-sm font-bold text-purple-700 mt-1">${percentage}% Accuracy Score</div>
            <div class="mt-3 text-xs text-slate-600 leading-relaxed">
              ${passed ? 'ยอดเยี่ยมมากครับ! คุณสามารถระบุใจความสำคัญ ประโยคหลัก รายละเอียดสนับสนุน และคำศัพท์ได้ถูกต้องแม่นยำตามเกณฑ์ CEFR A2' : 'ทำได้ดีครับ! ลองทบทวนข้อที่ตอบผิดและฝึกทำใหม่อีกครั้งเพื่อเสริมสร้างความมั่นใจก่อนไปบทถัดไป'}
            </div>
          </div>

          <!-- Per-Passage Score Breakdown -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            ${quizData.passages.map((p, idx) => `
              <div class="p-3.5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-1">
                <span class="text-[10px] font-bold text-slate-400 uppercase">Passage ${idx + 1}</span>
                <div class="text-xs font-bold text-slate-800 line-clamp-1">${p.title.split(':')[1] || p.title}</div>
                <div class="text-base font-extrabold text-purple-900">${state.passageScores[idx]} / 10</div>
              </div>
            `).join('')}
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-purple-100">
            <button onclick="app.resetUnit1Quiz()" class="w-full sm:w-auto px-6 py-3 bg-slate-200/90 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-xs cursor-pointer transition flex items-center justify-center space-x-2">
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
              <span>Retake Practice (ฝึกทำใหม่อีกครั้ง)</span>
            </button>
            <button onclick="app.selectStageAndStep('whileReading', 'learn')" class="w-full sm:w-auto px-8 py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs cursor-pointer transition shadow-md flex items-center justify-center space-x-2">
              <i data-lucide="book-open" class="w-4 h-4"></i>
              <span>Review Unit 1 Lessons ➔</span>
            </button>
          </div>
        </div>
      `;
    }

    const currentPassage = quizData.passages[state.passageIndex] || quizData.passages[0];
    const currentQ = currentPassage.questions[state.questionIndex] || currentPassage.questions[0];
    const qGlobalNumber = (state.passageIndex * 10) + state.questionIndex + 1;
    const progressPercent = Math.round((qGlobalNumber / 40) * 100);
    const answerKey = `${state.passageIndex}-${state.questionIndex}`;
    const answeredState = state.answers[answerKey];

    return `
      <div class="space-y-6">
        <!-- Top Quiz Header & Progress Tracker -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 pb-3">
          <div>
            <div class="flex items-center space-x-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-pink-100 text-pink-800 uppercase tracking-wider">Post-Reading Quiz (40 ข้อ)</span>
              <span class="text-xs font-semibold text-slate-500">Passage ${state.passageIndex + 1} of 4</span>
              <button onclick="app.selectStageAndStep('whileReading', 'practice')" class="text-[11px] text-purple-700 hover:text-purple-900 font-semibold cursor-pointer underline ml-2">⬅ Back to Practice</button>
            </div>
            <h4 class="text-base sm:text-lg font-bold text-slate-900 mt-0.5">${currentPassage.title}</h4>
            <p class="text-xs text-slate-500">${currentPassage.thaiTitle}</p>
          </div>

          <div class="flex items-center space-x-3 self-start sm:self-auto">
            <!-- Running Score Badge -->
            <div class="bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-xl text-right">
              <span class="text-[10px] text-purple-600 block font-semibold">Practice Score</span>
              <span class="text-xs font-bold text-purple-900">${state.passageScores.reduce((a, b) => a + b, 0)} / 40</span>
            </div>

            <!-- Audio Player Button -->
            <button onclick="app.playQuizPassageAudio(${state.passageIndex})" class="px-3 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer shadow-sm" title="Listen to Passage Audio">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
              <span class="hidden sm:inline">Listen</span>
            </button>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="space-y-1">
          <div class="flex items-center justify-between text-[11px] font-semibold text-slate-500">
            <span>Question ${state.questionIndex + 1} of 10 in this Passage</span>
            <span class="text-purple-700 font-bold">Overall: Question ${qGlobalNumber} of 40 (${progressPercent}%)</span>
          </div>
          <div class="w-full bg-slate-200/80 rounded-full h-2 overflow-hidden">
            <div class="bg-gradient-to-r from-purple-600 to-pink-500 h-2 rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
          </div>
        </div>

        <!-- Main Body: Two Column Layout on Desktop, Stacked on Mobile -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <!-- Left: Passage Card (lg:col-span-6) -->
          <div class="lg:col-span-6 bg-slate-900 text-slate-100 p-5 rounded-2xl space-y-3 shadow-lg border border-slate-800 sticky top-20">
            <div class="flex items-center justify-between border-b border-slate-800 pb-2">
              <div class="flex items-center space-x-2">
                <i data-lucide="file-text" class="w-4 h-4 text-purple-400"></i>
                <span class="text-xs font-bold text-purple-300 uppercase tracking-wider">${currentPassage.genre}</span>
              </div>
              ${currentQ.type === 'highlight' && !answeredState ? `
                <span class="text-[10px] bg-pink-500/20 text-pink-300 border border-pink-500/40 px-2 py-0.5 rounded animate-pulse">
                  👆 Tap a sentence below to answer
                </span>
              ` : ''}
            </div>

            <!-- Sentences Display with Interactive Highlight Mode -->
            <div class="text-sm font-serif leading-relaxed text-slate-200 space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
              ${currentPassage.sentences.map((sent, sIdx) => {
                let sentClass = 'inline transition-colors duration-200 p-1 rounded ';
                if (currentQ.type === 'highlight') {
                  if (answeredState) {
                    if (sIdx === currentQ.targetSentenceIndex) {
                      sentClass += 'bg-emerald-500/30 text-emerald-200 border-b-2 border-emerald-400 font-medium ';
                    } else if (answeredState.selected === sIdx && !answeredState.isCorrect) {
                      sentClass += 'bg-rose-500/30 text-rose-200 border-b-2 border-rose-400 font-medium ';
                    }
                  } else {
                    sentClass += 'hover:bg-purple-800/60 hover:text-white cursor-pointer border-b border-dashed border-purple-400/40 ';
                  }
                }
                const clickHandler = (currentQ.type === 'highlight' && !answeredState) ? `onclick="app.answerQuizHighlight(${sIdx})"` : '';
                return `<span class="${sentClass}" ${clickHandler}>${sent} </span>`;
              }).join('')}
            </div>
            
            <div class="text-[10px] text-slate-400 pt-2 border-t border-slate-800 flex items-center justify-between">
              <span>Reading Length: ~${currentPassage.sentences.join(' ').split(' ').length} words</span>
              <span>CEFR Target: A1-A2 Level</span>
            </div>
          </div>

          <!-- Right: Interactive Question Card (lg:col-span-6) -->
          <div class="lg:col-span-6 space-y-4">
            <div class="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm space-y-4">
              
              <!-- Question Type Tag -->
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                  currentQ.type === 'mc' ? 'bg-blue-100 text-blue-800' :
                  currentQ.type === 'highlight' ? 'bg-pink-100 text-pink-800' : 'bg-amber-100 text-amber-800'
                }">
                  ${currentQ.type === 'mc' ? 'Multiple Choice' : currentQ.type === 'highlight' ? 'Sentence Selection / Highlight' : 'Fill-in-the-Blank'}
                </span>
                <span class="text-xs text-purple-700 font-bold">1 Point</span>
              </div>

              <!-- Question Prompt -->
              <h5 class="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                ${currentQ.prompt}
              </h5>

              <!-- Interactive Options according to Question Type -->
              <div class="space-y-2.5">
                ${this.renderQuizQuestionInputs(currentQ, answeredState, currentPassage)}
              </div>

              <!-- Immediate Feedback Card -->
              ${answeredState ? `
                <div class="p-4 rounded-xl border ${answeredState.isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'} space-y-2 animate-in fade-in">
                  <div class="flex items-center space-x-2">
                    <div class="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${answeredState.isCorrect ? 'bg-emerald-200 text-emerald-800' : 'bg-rose-200 text-rose-800'}">
                      ${answeredState.isCorrect ? '✓' : '✕'}
                    </div>
                    <span class="font-bold text-xs ${answeredState.isCorrect ? 'text-emerald-800' : 'text-rose-800'}">
                      ${answeredState.isCorrect ? 'Correct Answer! (+1 Point)' : 'Incorrect — Keep going!'}
                    </span>
                  </div>
                  <p class="text-xs text-slate-700 leading-relaxed pl-8">
                    <strong>คำอธิบาย:</strong> ${currentQ.explanation}
                  </p>
                </div>
              ` : ''}

              <!-- Bottom Controls / Next Button -->
              <div class="pt-2 flex items-center justify-between">
                <div class="text-[11px] text-slate-400">
                  ${answeredState ? 'Ready to proceed' : 'Select an answer to continue'}
                </div>
                ${answeredState ? `
                  <button onclick="app.nextQuizQuestion()" class="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs transition cursor-pointer shadow-md flex items-center space-x-1.5">
                    <span>${qGlobalNumber === 40 ? 'Finish Practice & View Score 🏆' : (state.questionIndex === 9 ? 'Next Passage ➔' : 'Next Question ➔')}</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                  </button>
                ` : ''}
              </div>

            </div>
          </div>

        </div>
      </div>
    `;
  }

  renderQuizQuestionInputs(q, answeredState, passage) {
    if (q.type === 'mc') {
      return q.options.map((opt, idx) => {
        let btnClass = 'w-full text-left p-3.5 rounded-xl border transition text-xs font-medium flex items-center space-x-3 cursor-pointer ';
        if (answeredState) {
          if (idx === q.correctAnswer) {
            btnClass += 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-xs';
          } else if (idx === answeredState.selected) {
            btnClass += 'bg-rose-50 border-rose-400 text-rose-950 font-bold';
          } else {
            btnClass += 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-60 cursor-default';
          }
        } else {
          btnClass += 'border-purple-200 hover:border-purple-600 hover:bg-purple-50/60 text-slate-800 bg-white';
        }

        const letter = String.fromCharCode(65 + idx);
        const disabled = answeredState ? 'disabled' : '';
        return `
          <button onclick="app.answerQuizMC(${idx})" ${disabled} class="${btnClass}">
            <span class="w-5 h-5 rounded-full ${answeredState && idx === q.correctAnswer ? 'bg-emerald-600 text-white' : (answeredState && idx === answeredState.selected ? 'bg-rose-600 text-white' : 'bg-purple-100 text-purple-800')} font-bold flex items-center justify-center text-[10px] shrink-0">
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
            <span>คลิกเลือกประโยคที่ถูกต้องในกล่องบทอ่านด้านซ้ายมือ หรือกดเลือกจากตัวเลือกด้านล่าง:</span>
          </p>
          <div class="space-y-1.5 max-h-[280px] overflow-y-auto pr-1">
            ${passage.sentences.map((sent, sIdx) => {
              let btnClass = 'w-full text-left p-2.5 rounded-xl border text-[11px] transition font-sans flex items-start space-x-2 ';
              if (answeredState) {
                if (sIdx === q.targetSentenceIndex) {
                  btnClass += 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                } else if (sIdx === answeredState.selected) {
                  btnClass += 'bg-rose-50 border-rose-400 text-rose-950 font-bold';
                } else {
                  btnClass += 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-60 cursor-default';
                }
              } else {
                btnClass += 'bg-white border-purple-100 hover:border-purple-500 hover:bg-purple-50/50 text-slate-700 cursor-pointer';
              }
              const disabled = answeredState ? 'disabled' : '';
              return `
                <button onclick="app.answerQuizHighlight(${sIdx})" ${disabled} class="${btnClass}">
                  <span class="w-4 h-4 rounded-full bg-slate-200 text-slate-700 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">S${sIdx + 1}</span>
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
          <!-- Target Sentence Display with Highlighted Blank -->
          <div class="p-3.5 bg-purple-50/90 rounded-xl border border-purple-200 text-xs font-serif leading-relaxed text-purple-950">
            ${q.sentenceWithBlank.replace('[ _______ ]', `<span class="bg-amber-200 text-amber-950 font-bold px-2.5 py-0.5 rounded border border-amber-400 underline font-sans">${answeredState ? (answeredState.isCorrect ? q.correctWord : answeredState.selected) : '_______'}</span>`)}
          </div>

          <p class="text-xs text-slate-600 font-semibold">เลือกคำศัพท์ที่ถูกต้องที่สุด:</p>

          <div class="grid grid-cols-2 gap-2">
            ${q.choices.map((choice) => {
              let btnClass = 'p-3 rounded-xl border text-center text-xs font-bold transition ';
              if (answeredState) {
                if (choice.trim().toLowerCase() === q.correctWord.trim().toLowerCase()) {
                  btnClass += 'bg-emerald-600 text-white border-emerald-700 shadow-sm';
                } else if (choice === answeredState.selected) {
                  btnClass += 'bg-rose-600 text-white border-rose-700';
                } else {
                  btnClass += 'bg-slate-50 border-slate-200 text-slate-400 opacity-50 cursor-default';
                }
              } else {
                btnClass += 'bg-white border-purple-200 hover:border-purple-600 hover:bg-purple-50 text-purple-900 cursor-pointer shadow-xs';
              }
              const disabled = answeredState ? 'disabled' : '';
              return `
                <button onclick="app.answerQuizFillBlank('${choice}')" ${disabled} class="${btnClass}">
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

  answerQuizMC(choiceIndex) {
    const state = this.unit1QuizState;
    const answerKey = `${state.passageIndex}-${state.questionIndex}`;
    if (state.answers[answerKey]) return;

    const quizData = ReadSkillsData.unit1Quiz;
    const currentQ = quizData.passages[state.passageIndex].questions[state.questionIndex];
    const isCorrect = choiceIndex === currentQ.correctAnswer;

    state.answers[answerKey] = { selected: choiceIndex, isCorrect };
    if (isCorrect) {
      state.passageScores[state.passageIndex]++;
    }
    this.navigate(this.currentView);
  }

  answerQuizHighlight(sentIndex) {
    const state = this.unit1QuizState;
    const answerKey = `${state.passageIndex}-${state.questionIndex}`;
    if (state.answers[answerKey]) return;

    const quizData = ReadSkillsData.unit1Quiz;
    const currentQ = quizData.passages[state.passageIndex].questions[state.questionIndex];
    const isCorrect = sentIndex === currentQ.targetSentenceIndex;

    state.answers[answerKey] = { selected: sentIndex, isCorrect };
    if (isCorrect) {
      state.passageScores[state.passageIndex]++;
    }
    this.navigate(this.currentView);
  }

  answerQuizFillBlank(word) {
    const state = this.unit1QuizState;
    const answerKey = `${state.passageIndex}-${state.questionIndex}`;
    if (state.answers[answerKey]) return;

    const quizData = ReadSkillsData.unit1Quiz;
    const currentQ = quizData.passages[state.passageIndex].questions[state.questionIndex];
    const isCorrect = word.trim().toLowerCase() === currentQ.correctWord.trim().toLowerCase();

    state.answers[answerKey] = { selected: word, isCorrect };
    if (isCorrect) {
      state.passageScores[state.passageIndex]++;
    }
    this.navigate(this.currentView);
  }

  nextQuizQuestion() {
    const state = this.unit1QuizState;
    if (state.questionIndex < 9) {
      state.questionIndex++;
    } else {
      if (state.passageIndex < 3) {
        state.passageIndex++;
        state.questionIndex = 0;
      } else {
        state.isCompleted = true;
        const totalScore = state.passageScores.reduce((a, b) => a + b, 0);
        localStorage.setItem('bru_unit1_quiz_score', totalScore);
        state.lastScore = totalScore;
      }
    }
    this.navigate(this.currentView);
  }

  resetUnit1Quiz() {
    this.unit1QuizState = {
      passageIndex: 0,
      questionIndex: 0,
      answers: {},
      passageScores: [0, 0, 0, 0],
      currentFeedback: null,
      isCompleted: false,
      lastScore: localStorage.getItem('bru_unit1_quiz_score') ? parseInt(localStorage.getItem('bru_unit1_quiz_score')) : null
    };
    this.navigate(this.currentView);
  }

  playQuizPassageAudio(pIndex) {
    const quizData = ReadSkillsData.unit1Quiz;
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

            <div class="p-4 sm:p-5 bg-amber-50/70 border border-amber-200 rounded-2xl text-slate-900 text-sm space-y-2">
              <span class="text-[10px] font-bold text-amber-900 uppercase tracking-wider block">Sample Text / Scenario</span>
              <p class="leading-relaxed font-serif italic text-slate-800">"${step.content}"</p>
            </div>

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

            <!-- Reading Passage Box with Audio Player -->
            <div class="bg-slate-900 text-slate-100 p-4 sm:p-6 rounded-2xl space-y-4 relative shadow-lg">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700 pb-3">
                <span class="text-xs font-bold text-pink-300 uppercase tracking-wider">${step.passageTitle || unit.title}</span>
                
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

            <!-- Task Card -->
            <div class="p-4 bg-purple-50/90 border border-purple-200 rounded-2xl text-xs space-y-2">
              <strong class="font-bold text-purple-950 flex items-center space-x-1">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-purple-700 shrink-0"></i>
                <span>Strategy Application Task:</span>
              </strong>
              <p class="text-slate-800">${step.taskQuestion}</p>
              <div class="p-3 bg-white rounded-xl border border-purple-100 text-purple-900 font-semibold text-xs">
                💡 <strong>Expected Application:</strong> ${step.taskAnswer}
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
    this.navigate('practice');
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
      this.navigate(this.currentView);
    }
  }

  playUnit1Passage() {
    const text = "A boastful Hare was constantly ridiculing a slow-moving Tortoise for his clumsy pace. Weary of the ceaseless teasing, the quiet Tortoise calmly challenged the swift Hare to a five-mile cross-country footrace. Believing the challenge was a hilarious joke, the arrogant Hare accepted immediately, boasting that no creature in the forest could ever outpace his lightning speed. When the starting horn sounded, the Hare bolted ahead like lightning, creating a massive lead in mere moments. Looking back and seeing no sign of the plodding Tortoise, the overconfident Hare decided that victory was already guaranteed. I have more than enough time to relax under this shady oak tree and take a peaceful nap before that clumsy creature reaches halfway, he laughed smugly. Soon, the complacent Hare fell into a deep slumber, foolishly underestimating his rival. Meanwhile, the steadfast Tortoise pressed forward with silent determination. Ignoring his weary limbs, rejecting all distractions, he never ceased his deliberate march. Hours slipped past as the complacent Hare slept deeply. When the Hare finally awakened in shock to the distant cheering of forest animals, he bolted forward desperately, only to watch in disbelief as the Tortoise crossed the finish ribbon to seize triumph. The enduring moral of the race proves that steady perseverance and humble consistency will consistently triumph over careless arrogance and complacent talent. Standing near the finish line, the humbled Hare bowed his head, realizing that raw talent without discipline was completely meaningless. Approaching the winner, he shook the Tortoise's hand with genuine humility, acknowledging that true greatness comes from quiet dedication rather than loud boasting. From that day forward, the Hare abandoned his foolish arrogance, having learned that even the fastest runner can be beaten by those who never give up.";
    this.togglePassageAudio(encodeURIComponent(text));
  }

  playUnit1Passage2() {
    const text = "During a radiant summer afternoon, an industrious Ant worked tirelessly storing grain, while a frivolous Grasshopper sang carefree songs and mocked her constant toil. The carefree Grasshopper urged her to enjoy the sunshine and abandon her exhausting labor. However, the wise Ant warned him that summer would not last forever and that winter would bring severe hardship. Instead of heeding the wise advice, the complacent Grasshopper spent every sunny morning dancing in the meadows, convinced that nature's abundance would never run out. Week after week, the Ant practiced steadfast diligence, hauling heavy seeds into her underground shelter. In contrast, the Grasshopper laughed that only foolish insects worried about tomorrow when today was so pleasant. When the harsh winter finally arrived with freezing blizzards, the impoverished Grasshopper found himself shivering without a single crumb to eat. Desperate and starving, he dragged his weak body to the Ant's warm storehouse, begging for food. Watching the well-fed ants rest comfortably, he grasped the timeless truth. The enduring wisdom of the season demonstrates that foresight, disciplined preparation, and steadfast diligence protect us against unexpected hardships that ruin the unprepared. Standing in the freezing cold, the humbled Grasshopper bowed his head, realizing that endless fun without foresight led only to ruin. Taking pity on her freezing neighbor, the kind Ant shared a modest portion of grain. Humbled by the generous gift, the reformed Grasshopper bowed with sincere humility, promising that every future summer would be devoted to responsible prudence alongside his music. From that bitter winter forward, the Grasshopper understood that true joy is sweetest when built on the solid foundation of preparation.";
    this.togglePassageAudio(encodeURIComponent(text));
  }

  /* ------------------- Audio Player Synthesizer ------------------- */
  togglePassageAudio(encodedText) {
    const text = decodeURIComponent(encodedText);
    if (this.isAudioPlaying) {
      if (this.speechSynth) this.speechSynth.cancel();
      this.isAudioPlaying = false;
      this.navigate(this.currentView);
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
      this.navigate(this.currentView);
    };

    utterance.onend = () => {
      this.isAudioPlaying = false;
      this.navigate(this.currentView);
    };

    utterance.onerror = () => {
      this.isAudioPlaying = false;
      this.navigate(this.currentView);
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
