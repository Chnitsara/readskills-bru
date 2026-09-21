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
      name: localStorage.getItem('bru_user_name') || 'Somsak Jaidee',
      email: localStorage.getItem('bru_user_email') || 'student@bru.ac.th',
      role: localStorage.getItem('bru_user_role') || 'student',
      onlineSeconds: parseInt(localStorage.getItem('bru_online_seconds')) || 18400
    };

    // User accounts database stored in localStorage
    this.registeredUsers = JSON.parse(localStorage.getItem('bru_registered_users')) || [
      { name: 'Somsak Jaidee (สมศักดิ์ ใจดี)', email: 'student@bru.ac.th', password: '123456', role: 'student' },
      { name: 'Dr. Somchai (อาจารย์ผู้สอน)', email: 'teacher@bru.ac.th', password: '123456', role: 'instructor' }
    ];

    this.currentUnitId = 1;
    this.currentStage = 'preReading';
    this.currentTopicIndex = 0;
    this.currentActivityStep = 'overview';
    
    this.currentStrategyId = 'strat-1';
    this.currentStrategyStepIndex = 0;

    this.speechSynth = window.speechSynthesis;
    this.isAudioPlaying = false;

    this.init();
  }

  init() {
    this.startOnlineTimer();
    this.createSnowfall();

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

    if (visible) {
      if (header) header.classList.remove('hidden');
      if (footer) footer.classList.remove('hidden');
    } else {
      if (header) header.classList.add('hidden');
      if (footer) footer.classList.add('hidden');
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
    const nameElem = document.getElementById('user-display-name');
    if (nameElem) {
      nameElem.innerText = `${this.user.name} (${this.user.role === 'instructor' ? 'Instructor' : 'Student'})`;
    }
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
            READSKILLS BRU &bull; EFL PROGRAM
          </span>
        </div>

        <!-- Title & Subtitle -->
        <h1 class="text-3xl sm:text-4xl font-extrabold text-[#3C2A58] tracking-tight text-center mb-2">
          English Reading<br />Strategies
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

    // Update active nav button styles
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('bg-white', 'text-purple-900', 'font-bold');
    });
    const activeNav = document.getElementById(`nav-${viewName}`);
    if (activeNav) {
      activeNav.classList.add('bg-white', 'text-purple-900', 'font-bold');
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
      <div class="space-y-8">
        <!-- Welcome Hero -->
        <div class="glass-card p-8 bg-gradient-to-r from-purple-800 via-purple-700 to-pink-600 text-white rounded-3xl relative overflow-hidden shadow-xl">
          <div class="relative z-10 max-w-2xl">
            <span class="inline-block bg-white/20 backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Buriram Rajabhat University Portal
            </span>
            <h1 class="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              Welcome back, ${this.user.name}! 👋
            </h1>
            <p class="text-purple-100 text-sm sm:text-base leading-relaxed mb-6">
              Empowering better readers for brighter futures. Track your reading lessons, master 8-step strategies, and view online study reports.
            </p>

            <div class="flex flex-wrap gap-3">
              <button onclick="app.navigate('lessons')" class="px-6 py-3 bg-white text-purple-900 font-bold rounded-xl hover:bg-purple-50 shadow-md transition flex items-center space-x-2 text-sm">
                <i data-lucide="play-circle" class="w-5 h-5 text-purple-700"></i>
                <span>Continue Lesson (Unit ${this.currentUnitId})</span>
              </button>
              <button onclick="app.navigate('strategies')" class="px-6 py-3 bg-purple-900/60 hover:bg-purple-900 text-white font-semibold rounded-xl backdrop-blur-md transition flex items-center space-x-2 text-sm border border-purple-300/30">
                <i data-lucide="lightbulb" class="w-5 h-5 text-amber-300"></i>
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div onclick="app.navigate('lessons')" class="glass-card p-6 cursor-pointer border-t-4 border-purple-700">
            <div class="w-12 h-12 bg-purple-100 text-purple-800 rounded-2xl flex items-center justify-center mb-4">
              <i data-lucide="book-open" class="w-6 h-6"></i>
            </div>
            <h3 class="font-bold text-slate-900 text-lg mb-1">Reading Lessons</h3>
            <p class="text-xs text-purple-800 font-semibold mb-2">บทเรียนการอ่าน (Units 1–6)</p>
            <p class="text-slate-600 text-xs leading-relaxed">
              Structured reading lessons divided into 3 stages: Pre-Reading, While-Reading, and Post-Reading.
            </p>
          </div>

          <div onclick="app.navigate('strategies')" class="glass-card p-6 cursor-pointer border-t-4 border-pink-500">
            <div class="w-12 h-12 bg-pink-100 text-pink-700 rounded-2xl flex items-center justify-center mb-4">
              <i data-lucide="clock" class="w-6 h-6"></i>
            </div>
            <h3 class="font-bold text-slate-900 text-lg mb-1">Reading Strategies</h3>
            <p class="text-xs text-pink-700 font-semibold mb-2">กลยุทธ์การอ่าน (8 Steps Flow)</p>
            <p class="text-slate-600 text-xs leading-relaxed">
              Learn and apply reading strategies with clear definitions, examples, and short text applications.
            </p>
          </div>

          <div onclick="app.navigate('practice')" class="glass-card p-6 cursor-pointer border-t-4 border-amber-500">
            <div class="w-12 h-12 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center mb-4">
              <i data-lucide="tv" class="w-6 h-6"></i>
            </div>
            <h3 class="font-bold text-slate-900 text-lg mb-1">Practice & Quiz</h3>
            <p class="text-xs text-amber-800 font-semibold mb-2">แบบฝึกหัดและแบบทดสอบ</p>
            <p class="text-slate-600 text-xs leading-relaxed">
              Interactive games, unit quizzes, passage comprehension, and immediate feedback engine.
            </p>
          </div>

          <div onclick="app.navigate('progress')" class="glass-card p-6 cursor-pointer border-t-4 border-emerald-600">
            <div class="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-4">
              <i data-lucide="bar-chart-3" class="w-6 h-6"></i>
            </div>
            <h3 class="font-bold text-slate-900 text-lg mb-1">Learning Progress</h3>
            <p class="text-xs text-emerald-800 font-semibold mb-2">ความก้าวหน้าในการเรียน</p>
            <p class="text-slate-600 text-xs leading-relaxed">
              Track online hours, completed units, quiz performance, and active usage statistics.
            </p>
          </div>

        </div>

        <!-- Current Progress Summary Banner -->
        <div class="glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center space-x-4">
            <div class="w-14 h-14 bg-purple-100 text-purple-800 rounded-2xl flex items-center justify-center font-bold text-xl border border-purple-200">
              5/6
            </div>
            <div>
              <h4 class="font-bold text-slate-900 text-base">Your Active Progress</h4>
              <p class="text-xs text-slate-600">Total Online Time: <strong class="text-purple-800 font-bold">${this.formatHoursText(this.user.onlineSeconds)}</strong></p>
            </div>
          </div>

          <div class="flex-1 w-full md:max-w-md">
            <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Overall Completion</span>
              <span>83%</span>
            </div>
            <div class="w-full bg-slate-200/80 h-3 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-purple-700 to-pink-500 h-full rounded-full" style="width: 83%"></div>
            </div>
          </div>

          <button onclick="app.navigate('progress')" class="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition">
            View Full Report
          </button>
        </div>
      </div>
    `;
  }

  // 2. Reading Lessons View
  renderLessonsView() {
    const unit = ReadSkillsData.units.find(u => u.id === this.currentUnitId) || ReadSkillsData.units[0];
    const stageData = unit.stages[this.currentStage] || unit.stages['preReading'];
    const currentTopic = stageData.topics[this.currentTopicIndex] || stageData.topics[0] || {
      title: "Sample Topic",
      steps: { overview: "Overview", learn: "Learn details", passage: "Sample text", audioText: "Sample text", example: "Example", practice: { question: "Q?", options: ["A"], answer: 0 } }
    };

    return `
      <div class="space-y-8">
        <!-- Header & Unit Selector -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-bold text-slate-900">Module 1: Reading Lessons (บทเรียนการอ่าน)</h2>
            <p class="text-xs text-slate-600">Structured reading lessons based on Lesson Plans 1–6</p>
          </div>

          <!-- Unit Selector Tabs -->
          <div class="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
            ${ReadSkillsData.units.map(u => `
              <button onclick="app.selectUnit(${u.id})" class="px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${this.currentUnitId === u.id ? 'bg-purple-700 text-white shadow-md' : 'bg-white/80 text-slate-700 hover:bg-white border border-purple-200'}">
                Unit ${u.id}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Current Unit Information Card -->
        <div class="glass-card p-6 bg-gradient-to-r from-purple-100/70 to-pink-100/70 border border-purple-200">
          <div class="flex items-center justify-between mb-2">
            <span class="bg-purple-700 text-white text-xs font-bold px-2.5 py-0.5 rounded-md">${unit.code}</span>
            <span class="text-xs font-semibold text-purple-900 bg-purple-200/80 px-3 py-1 rounded-full">CEFR Target: ${unit.cefr}</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">${unit.title} (${unit.thaiTitle})</h3>
          <p class="text-xs text-slate-700 leading-relaxed">${unit.description}</p>
        </div>

        <!-- Stage Tabs (Pre-Reading | While-Reading | Post-Reading) -->
        <div class="flex items-center space-x-3 border-b border-purple-200 pb-4">
          <button onclick="app.selectStage('preReading')" class="px-5 py-2.5 rounded-xl font-semibold text-xs transition flex items-center space-x-2 ${this.currentStage === 'preReading' ? 'stage-tab-active' : 'stage-tab-inactive'}">
            <i data-lucide="compass" class="w-4 h-4"></i>
            <span>Pre-Reading Stage</span>
          </button>
          
          <button onclick="app.selectStage('whileReading')" class="px-5 py-2.5 rounded-xl font-semibold text-xs transition flex items-center space-x-2 ${this.currentStage === 'whileReading' ? 'stage-tab-active' : 'stage-tab-inactive'}">
            <i data-lucide="book-open-check" class="w-4 h-4"></i>
            <span>While-Reading Stage</span>
          </button>
          
          <button onclick="app.selectStage('postReading')" class="px-5 py-2.5 rounded-xl font-semibold text-xs transition flex items-center space-x-2 ${this.currentStage === 'postReading' ? 'stage-tab-active' : 'stage-tab-inactive'}">
            <i data-lucide="check-circle-2" class="w-4 h-4"></i>
            <span>Post-Reading Stage</span>
          </button>
        </div>

        <!-- Activity Stepper Bar -->
        <div class="glass-card p-4">
          <div class="flex items-center justify-between max-w-3xl mx-auto text-xs font-medium">
            
            <button onclick="app.selectActivityStep('overview')" class="flex flex-col items-center space-y-1 ${this.currentActivityStep === 'overview' ? 'text-purple-800 font-bold' : 'text-slate-500 hover:text-slate-700'}">
              <div class="w-8 h-8 rounded-full flex items-center justify-center ${this.currentActivityStep === 'overview' ? 'bg-purple-700 text-white ring-4 ring-purple-200' : 'bg-slate-200/80'}">1</div>
              <span>Overview</span>
            </button>

            <div class="h-0.5 w-12 bg-purple-200"></div>

            <button onclick="app.selectActivityStep('learn')" class="flex flex-col items-center space-y-1 ${this.currentActivityStep === 'learn' ? 'text-purple-800 font-bold' : 'text-slate-500 hover:text-slate-700'}">
              <div class="w-8 h-8 rounded-full flex items-center justify-center ${this.currentActivityStep === 'learn' ? 'bg-purple-700 text-white ring-4 ring-purple-200' : 'bg-slate-200/80'}">2</div>
              <span>Learn</span>
            </button>

            <div class="h-0.5 w-12 bg-purple-200"></div>

            <button onclick="app.selectActivityStep('example')" class="flex flex-col items-center space-y-1 ${this.currentActivityStep === 'example' ? 'text-purple-800 font-bold' : 'text-slate-500 hover:text-slate-700'}">
              <div class="w-8 h-8 rounded-full flex items-center justify-center ${this.currentActivityStep === 'example' ? 'bg-purple-700 text-white ring-4 ring-purple-200' : 'bg-slate-200/80'}">3</div>
              <span>Example</span>
            </button>

            <div class="h-0.5 w-12 bg-purple-200"></div>

            <button onclick="app.selectActivityStep('practice')" class="flex flex-col items-center space-y-1 ${this.currentActivityStep === 'practice' ? 'text-purple-800 font-bold' : 'text-slate-500 hover:text-slate-700'}">
              <div class="w-8 h-8 rounded-full flex items-center justify-center ${this.currentActivityStep === 'practice' ? 'bg-purple-700 text-white ring-4 ring-purple-200' : 'bg-slate-200/80'}">4</div>
              <span>Practice</span>
            </button>

            <div class="h-0.5 w-12 bg-purple-200"></div>

            <button onclick="app.selectActivityStep('quiz')" class="flex flex-col items-center space-y-1 ${this.currentActivityStep === 'quiz' ? 'text-purple-800 font-bold' : 'text-slate-500 hover:text-slate-700'}">
              <div class="w-8 h-8 rounded-full flex items-center justify-center ${this.currentActivityStep === 'quiz' ? 'bg-purple-700 text-white ring-4 ring-purple-200' : 'bg-slate-200/80'}">5</div>
              <span>Quiz / Review</span>
            </button>

          </div>
        </div>

        <!-- Activity Step Content Body -->
        <div class="glass-card p-8 min-h-[300px]">
          ${this.renderActivityStepContent(currentTopic)}
        </div>

      </div>
    `;
  }

  renderActivityStepContent(topic) {
    const s = topic.steps || {};
    switch (this.currentActivityStep) {
      case 'overview':
        return `
          <div class="space-y-4">
            <h4 class="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <i data-lucide="info" class="w-5 h-5 text-purple-700"></i>
              <span>Topic Overview: ${topic.title}</span>
            </h4>
            <p class="text-sm text-slate-700 leading-relaxed">${s.overview || 'Overview details.'}</p>
            <div class="bg-purple-100/80 p-4 rounded-xl text-xs text-purple-900 border border-purple-200">
              💡 <strong>Instructional Objective:</strong> Students will master identifying key themes before reading.
            </div>
            <button onclick="app.selectActivityStep('learn')" class="mt-4 px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition">
              Next Step: Learn ➔
            </button>
          </div>
        `;

      case 'learn':
        return `
          <div class="space-y-6">
            <h4 class="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <i data-lucide="book-open" class="w-5 h-5 text-purple-700"></i>
              <span>Lesson Content & Audio Passage</span>
            </h4>
            
            <p class="text-sm text-slate-700 leading-relaxed">${s.learn}</p>

            <!-- Passage Box with Audio Player -->
            <div class="bg-slate-900 text-slate-100 p-6 rounded-2xl space-y-4 relative shadow-lg">
              <div class="flex items-center justify-between border-b border-slate-700 pb-3">
                <span class="text-xs font-semibold text-purple-300 uppercase tracking-wider">Reading Passage (Unit ${this.currentUnitId})</span>
                
                <button onclick="app.togglePassageAudio('${encodeURIComponent(s.audioText || s.passage)}')" class="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold rounded-lg flex items-center space-x-2 transition ${this.isAudioPlaying ? 'audio-playing' : ''}">
                  <i data-lucide="${this.isAudioPlaying ? 'square' : 'volume-2'}" class="w-4 h-4"></i>
                  <span>${this.isAudioPlaying ? 'Stop Audio' : 'Listen Passage'}</span>
                </button>
              </div>

              <p class="text-sm italic leading-relaxed text-slate-200">
                "${s.passage}"
              </p>
            </div>

            <div class="flex justify-between pt-4">
              <button onclick="app.selectActivityStep('overview')" class="px-5 py-2 bg-slate-200/80 text-slate-700 font-semibold rounded-xl text-xs">
                ⬅ Back
              </button>
              <button onclick="app.selectActivityStep('example')" class="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs">
                Next Step: Example ➔
              </button>
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
            <div class="bg-amber-100/70 border border-amber-300 p-6 rounded-2xl text-slate-900 text-sm">
              ${s.example || 'Example details.'}
            </div>
            <div class="flex justify-between pt-4">
              <button onclick="app.selectActivityStep('learn')" class="px-5 py-2 bg-slate-200/80 text-slate-700 font-semibold rounded-xl text-xs">
                ⬅ Back
              </button>
              <button onclick="app.selectActivityStep('practice')" class="px-6 py-2.5 bg-purple-700 text-white font-semibold rounded-xl text-xs">
                Next Step: Practice ➔
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

            <p class="text-sm font-semibold text-slate-900">${prac.question}</p>

            <div class="space-y-3">
              ${prac.options.map((opt, idx) => `
                <button onclick="app.submitPracticeAnswer(${idx}, ${prac.answer}, '${encodeURIComponent(prac.explanation)}')" class="w-full text-left p-4 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-white transition text-sm font-medium">
                  ${String.fromCharCode(65 + idx)}. ${opt}
                </button>
              `).join('')}
            </div>
          </div>
        `;

      case 'quiz':
        const qz = s.quiz || { question: "Sample quiz?", options: ["Option 1", "Option 2"], answer: 0, explanation: "Details" };
        return `
          <div class="space-y-6">
            <h4 class="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <i data-lucide="award" class="w-5 h-5 text-emerald-700"></i>
              <span>Topic Quiz & Assessment</span>
            </h4>

            <p class="text-sm font-semibold text-slate-900">${qz.question}</p>

            <div class="space-y-3">
              ${qz.options.map((opt, idx) => `
                <button onclick="app.submitQuizAnswer(${idx}, ${qz.answer}, '${encodeURIComponent(qz.explanation)}')" class="w-full text-left p-4 rounded-xl border border-purple-200 hover:border-emerald-600 hover:bg-white transition text-sm font-medium">
                  ${String.fromCharCode(65 + idx)}. ${opt}
                </button>
              `).join('')}
            </div>
          </div>
        `;
    }
  }

  selectUnit(id) {
    this.currentUnitId = id;
    this.currentTopicIndex = 0;
    this.currentActivityStep = 'overview';
    this.navigate('lessons');
  }

  selectStage(stageKey) {
    this.currentStage = stageKey;
    this.currentTopicIndex = 0;
    this.currentActivityStep = 'overview';
    this.navigate('lessons');
  }

  selectActivityStep(stepKey) {
    this.currentActivityStep = stepKey;
    this.navigate('lessons');
  }

  // 3. Reading Strategies View
  renderStrategiesView() {
    const strat = ReadSkillsData.strategies.find(s => s.id === this.currentStrategyId) || ReadSkillsData.strategies[0];
    const currentStep = strat.steps[this.currentStrategyStepIndex] || strat.steps[0];

    return `
      <div class="space-y-8">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-bold text-slate-900">Module 2: Reading Strategies (กลยุทธ์การอ่าน)</h2>
            <p class="text-xs text-slate-600">Interactive 8-Step Strategy Learning Flow</p>
          </div>

          <!-- Strategy Tabs -->
          <div class="flex items-center space-x-2">
            ${ReadSkillsData.strategies.map(s => `
              <button onclick="app.selectStrategy('${s.id}')" class="px-4 py-2 rounded-xl text-xs font-semibold transition ${this.currentStrategyId === s.id ? 'bg-pink-600 text-white shadow-md' : 'bg-white/80 text-slate-700 hover:bg-white border border-purple-200'}">
                ${s.name}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Strategy 8-Step Progress Wizard Bar -->
        <div class="glass-card p-6 overflow-x-auto">
          <div class="flex items-center justify-between min-w-[700px] text-xs">
            ${strat.steps.map((step, idx) => `
              <div onclick="app.setStrategyStep(${idx})" class="flex flex-col items-center space-y-1 cursor-pointer transition ${this.currentStrategyStepIndex === idx ? 'text-pink-700 font-bold' : 'text-slate-500 hover:text-slate-800'}">
                <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold ${this.currentStrategyStepIndex === idx ? 'bg-pink-600 text-white ring-4 ring-pink-200' : 'bg-slate-200/80'}">
                  ${idx + 1}
                </div>
                <span class="text-[10px] text-center max-w-[70px] truncate">${step.title.split('. ')[1] || step.title}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Active Step Display Box -->
        <div class="glass-card p-8 min-h-[350px]">
          <span class="text-xs font-semibold text-pink-700 uppercase tracking-wider bg-pink-100/80 px-3 py-1 rounded-full">
            Step ${this.currentStrategyStepIndex + 1} of 8
          </span>

          <h3 class="text-2xl font-bold text-slate-900 mt-3 mb-4">${currentStep.title}</h3>
          
          <div class="text-sm text-slate-800 leading-relaxed space-y-4">
            <p>${currentStep.content}</p>

            ${currentStep.annotated ? `
              <div class="p-4 bg-purple-100/80 border-l-4 border-purple-700 text-purple-950 rounded-r-xl font-medium">
                💡 Note: ${currentStep.annotated}
              </div>
            ` : ''}

            ${currentStep.passage ? `
              <div class="bg-slate-900 text-slate-100 p-6 rounded-2xl space-y-3 shadow-lg">
                <div class="flex justify-between items-center border-b border-slate-700 pb-2">
                  <span class="text-xs text-pink-300 font-semibold">Short Text Passage</span>
                  <button onclick="app.togglePassageAudio('${encodeURIComponent(currentStep.audioText || currentStep.passage)}')" class="px-3 py-1.5 bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold rounded-md">
                    🔊 Audio
                  </button>
                </div>
                <p class="italic text-sm">"${currentStep.passage}"</p>
              </div>
            ` : ''}

            ${currentStep.question ? `
              <div class="mt-6 p-6 bg-white/70 border border-purple-200 rounded-2xl space-y-4">
                <p class="font-semibold text-slate-900">${currentStep.question}</p>
                <div class="space-y-2">
                  ${currentStep.options.map((opt, idx) => `
                    <button onclick="app.submitStrategyQuiz(${idx}, ${currentStep.answer}, '${encodeURIComponent(currentStep.explanation || 'Good job!')}')" class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-pink-600 hover:bg-white transition text-xs font-medium">
                      ${String.fromCharCode(65 + idx)}. ${opt}
                    </button>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Wizard Navigation Buttons -->
          <div class="flex justify-between border-t border-purple-200 pt-6 mt-8">
            <button onclick="app.prevStrategyStep()" ${this.currentStrategyStepIndex === 0 ? 'disabled class="opacity-40 cursor-not-allowed px-5 py-2.5 bg-slate-200/80 text-slate-500 rounded-xl text-xs font-semibold"' : 'class="px-5 py-2.5 bg-white/80 hover:bg-white text-slate-800 rounded-xl text-xs font-semibold transition"'}>
              ⬅ Previous Step
            </button>

            <button onclick="app.nextStrategyStep()" ${this.currentStrategyStepIndex === 7 ? 'disabled class="opacity-40 cursor-not-allowed px-6 py-2.5 bg-pink-600 text-white rounded-xl text-xs font-semibold"' : 'class="px-6 py-2.5 bg-pink-600 hover:bg-pink-700 text-white rounded-xl text-xs font-semibold transition shadow-md shadow-pink-200"'}>
              Next Step ➔
            </button>
          </div>
        </div>
      </div>
    `;
  }

  selectStrategy(id) {
    this.currentStrategyId = id;
    this.currentStrategyStepIndex = 0;
    this.navigate('strategies');
  }

  setStrategyStep(idx) {
    this.currentStrategyStepIndex = idx;
    this.navigate('strategies');
  }

  prevStrategyStep() {
    if (this.currentStrategyStepIndex > 0) {
      this.currentStrategyStepIndex--;
      this.navigate('strategies');
    }
  }

  nextStrategyStep() {
    if (this.currentStrategyStepIndex < 7) {
      this.currentStrategyStepIndex++;
      this.navigate('strategies');
    }
  }

  // 4. Practice & Quiz View
  renderPracticeView() {
    return `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">Practice & Quiz Hub (แบบฝึกหัดและแบบทดสอบ)</h2>
          <p class="text-xs text-slate-600">Interactive games, unit quizzes, and realistic reading passage practice</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="glass-card p-6 border-l-4 border-purple-700 space-y-4">
            <div class="w-12 h-12 bg-purple-100 text-purple-800 rounded-2xl flex items-center justify-center">
              <i data-lucide="gamepad-2" class="w-6 h-6"></i>
            </div>
            <h3 class="font-bold text-lg text-slate-900">Vocabulary & Speed Games</h3>
            <p class="text-xs text-slate-600">Reinforce reading terms through fun timed challenges.</p>
            <button onclick="alert('Starting Word Matcher Challenge Game!')" class="px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold rounded-xl transition">
              Play Game 🎮
            </button>
          </div>

          <div class="glass-card p-6 border-l-4 border-amber-500 space-y-4">
            <div class="w-12 h-12 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center">
              <i data-lucide="file-check" class="w-6 h-6"></i>
            </div>
            <h3 class="font-bold text-lg text-slate-900">Reading Passage Practice</h3>
            <p class="text-xs text-slate-600">Realistic academic passages with comprehension questions & audio playback.</p>
            <button onclick="app.selectUnit(1); app.selectActivityStep('learn');" class="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-xl transition">
              Start Passage Practice 📖
            </button>
          </div>
        </div>
      </div>
    `;
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

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;

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
    if (window.lucide) lucide.createIcons();
  }

  closeFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    modal.classList.add('hidden');
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
