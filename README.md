# ReadSkills BRU – Web Application Handbook & Client Handover Package

**Client**: Buriram Rajabhat University (BRU)  
**Based on**: Chapter 3 Course Curriculum Blueprint  
**Target Level**: CEFR A1–B2 English learners with Thai support  

---

## 🌟 Overview & Key Features

ReadSkills BRU is a web application designed around the **2 Integrated Modules** structure:

1. **Email Authentication System**: Simple, clean email login for students and instructors with role management.
2. **Module 1: Reading Lessons (บทเรียนการอ่าน)**:
   - 6 Core Reading Units
   - 3 Instructional Stage Tabs (`Pre-Reading`, `While-Reading`, `Post-Reading`)
   - 5-Step Activity Stepper (`Overview` ➔ `Learn` ➔ `Example` ➔ `Practice` ➔ `Quiz / Review`)
3. **Module 2: Reading Strategies (กลยุทธ์การอ่าน)**:
   - 8-Step Interactive Strategy Wizard (Definition, Benefits, Situations, Guidance, Worked Example, Guided Practice, Short Text Application, Strategy Quiz)
4. **Passage Listening Audio Player**: Integrated text-to-speech reading passage narration for listening support.
5. **Practice & Quiz Engine**: Interactive vocabulary games and comprehension quizzes with **Immediate Feedback** & bilingual explanations.
6. **Student Online Time & Score Tracking**: Real-time tracking of active online study hours and unit scores.
7. **Teacher Admin Report Dashboard**: Allows instructors to view student online hours, quiz scores, unit completions, and **Export CSV Reports** for academic grading.

---

## 🚀 How to Run the Application

Since this application is built with modern lightweight standards (HTML5, Tailwind CSS, JavaScript ES6), no complex build step or server setup is required!

### Option 1: Direct Local Preview
1. Open the project folder `c:\Users\Freyaaa\Desktop\BRU\`.
2. Double-click `index.html` to open directly in any web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (e.g. VS Code Live Server / Python)
```bash
# Using Python
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

### Option 3: Production Deployment (Vercel / Netlify / GitHub Pages)
- Upload the contents of `c:\Users\Freyaaa\Desktop\BRU\` to Vercel, Netlify, or GitHub Pages. The app will be live instantly with SSL enabled!

---

## 📁 File Structure

```text
BRU/
├── index.html          # Main application entry point & views
├── css/
│   └── styles.css      # Pastel purple/pink theme & snowfall animations
├── js/
│   ├── data.js         # Units 1-6, Strategies, Quizzes & Student mock data
│   └── app.js          # Core app logic, timer, audio player, CSV exporter
└── README.md           # Client handover documentation
```

---

## 🎓 Client Handover Summary for BRU

- **Theme Palette**: Pastel Purple (`#7C3AED`), Soft Pink (`#EC4899`), Snowfall background.
- **Slogans**: *Better Readers Brighter Futures*, *Read Practice Progress Grow*, *Practice Makes Progress ♡*.
- **Admin Report Export**: Click **"Teacher Report"** in the top navigation bar to view online hours and click **"Export CSV Report"** to download student data.
