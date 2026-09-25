/**
 * Reading Skills Data Store
 * Aligned with Chapter 3 & Research Specifications:
 * Course: Introduction to English Reading Strategies (2031103)
 * Buriram Rajabhat University
 */

window.ReadSkillsData = {
  // Course Metadata
  course: {
    code: "2031103",
    name: "Introduction to English Reading Strategies",
    institution: "Buriram Rajabhat University",
    program: "English Program, Faculty of Humanities and Social Sciences",
    instructor: "Asst. Prof. Naviya Chutopama",
    office: "250804, Building 25",
    credit: "3(3-0-6)",
    duration: "6 periods (2 weeks)",
    targetGroup: "First-year English major students",
    framework: "Pre-, While-, and Post-Reading Instructional Framework"
  },

  // 6 Instructional Units (Module 1: Reading Lessons)
  units: [
        {
      id: 1,
      code: "UNIT-01",
      title: "Main Ideas",
      topic: "Navigating Main Ideas",
      thaiTitle: "ใจความสำคัญ (Navigating Main Ideas)",
      scope: "Overview & Objectives, In-Depth Definitions & 4-Step Strategy, Long Passage & ~10 Vocabulary Words with Prediction Clues, Interactive Guided Practice",
      description: "Unit 1 • Course 2031103: Master identifying main ideas, topic sentences, exploring text features, vocabulary preview (~10 words), predicting, and reading The Tortoise and the Hare with immediate feedback.",
      cefr: "A1-A2",
      steps: {
        overview: `<div class="space-y-6">
          <!-- Header & Objectives -->
          <div class="space-y-3">
            <div class="flex items-center space-x-2 text-purple-900 font-bold text-lg">
              <i data-lucide="target" class="w-6 h-6 text-purple-700"></i>
              <h3>เป้าหมายการเรียนรู้ประจำบท (Unit Learning Objectives)</h3>
            </div>
            <p class="text-sm text-slate-700 leading-relaxed">
              ยินดีต้อนรับสู่ <strong>Unit 1: Main Ideas (ใจความสำคัญ)</strong> ในบทเรียนนี้ ผู้เรียนจะได้เรียนรู้ทักษะพื้นฐานที่สำคัญที่สุดของการอ่านภาษาอังกฤษ นั่นคือการจับประเด็นหลักและแยกแยะใจความสำคัญออกจากรายละเอียด เพื่อให้สามารถอ่านเข้าใจบทความได้อย่างรวดเร็วและถูกต้อง
            </p>

            <!-- 4 Objective Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div class="p-3.5 bg-purple-50/80 rounded-xl border border-purple-200 flex items-start space-x-3">
                <div class="w-7 h-7 rounded-lg bg-purple-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                <div>
                  <h5 class="font-bold text-xs text-purple-950">เข้าใจความหมายของ Main Idea</h5>
                  <p class="text-[11px] text-slate-600 mt-0.5">แยกแยะระหว่าง Topic (หัวข้อ), Main Idea (ใจความสำคัญ), และ Supporting Details (รายละเอียดสนับสนุน)</p>
                </div>
              </div>
              <div class="p-3.5 bg-pink-50/80 rounded-xl border border-pink-200 flex items-start space-x-3">
                <div class="w-7 h-7 rounded-lg bg-pink-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                <div>
                  <h5 class="font-bold text-xs text-pink-950">ระบุ Topic Sentence ในบทอ่าน</h5>
                  <p class="text-[11px] text-slate-600 mt-0.5">ค้นหาประโยคใจความสำคัญที่ปรากฏอยู่ต้น กลาง หรือท้ายย่อหน้าได้อย่างแม่นยำ</p>
                </div>
              </div>
              <div class="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200 flex items-start space-x-3">
                <div class="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                <div>
                  <h5 class="font-bold text-xs text-amber-950">กลยุทธ์สำรวจเบาะแส (Text Features & Prediction)</h5>
                  <p class="text-[11px] text-slate-600 mt-0.5">ใช้ชื่อเรื่อง ภาพประกอบ และคำศัพท์ตัวหนาในการคาดเดาทิศทางของเรื่องก่อนอ่านจริง</p>
                </div>
              </div>
              <div class="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200 flex items-start space-x-3">
                <div class="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</div>
                <div>
                  <h5 class="font-bold text-xs text-emerald-950">สรุปความเรื่องเล่าและคติธรรม (Fable)</h5>
                  <p class="text-[11px] text-slate-600 mt-0.5">อ่านนิทานคลาสสิกเรื่อง "The Tortoise and the Hare" และสรุปสาระสำคัญด้วยภาษาของตนเอง</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Mind Map ภาพรวมของบท -->
          <div class="p-5 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 rounded-2xl border border-purple-200 shadow-sm space-y-4">
            <div class="flex items-center space-x-2 text-purple-950 font-bold text-sm">
              <i data-lucide="network" class="w-5 h-5 text-purple-700"></i>
              <span>ภาพรวมโครงสร้างบทเรียน: ความสัมพันธ์ 3 ระดับของบทอ่าน (Reading Hierarchy Mind Map)</span>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
              <div class="p-4 bg-white rounded-xl border-l-4 border-purple-600 shadow-xs space-y-2">
                <div class="font-bold text-purple-950 text-sm flex items-center space-x-2">
                  <span class="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs">1</span>
                  <span>Topic (หัวข้อเรื่อง)</span>
                </div>
                <p class="text-slate-600 text-[11px]">บทความนี้เกี่ยวกับอะไร? (เป็นคำหรือวลีสั้นๆ)</p>
                <div class="p-2 bg-purple-50 rounded-lg text-purple-900 font-semibold text-[11px]">
                  📌 ตัวอย่าง: <em>The race of the Tortoise and the Hare</em>
                </div>
              </div>

              <div class="p-4 bg-white rounded-xl border-l-4 border-pink-500 shadow-xs space-y-2">
                <div class="font-bold text-pink-950 text-sm flex items-center space-x-2">
                  <span class="w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center text-xs">2</span>
                  <span>Main Idea (ใจความสำคัญ)</span>
                </div>
                <p class="text-slate-600 text-[11px]">ผู้เขียนต้องการบอกอะไรเกี่ยวกับ Topic? (ประโยคสมบูรณ์)</p>
                <div class="p-2 bg-pink-50 rounded-lg text-pink-900 font-semibold text-[11px]">
                  🎯 ตัวอย่าง: <em>Steady perseverance will always triumph over arrogant complacency.</em>
                </div>
              </div>

              <div class="p-4 bg-white rounded-xl border-l-4 border-amber-500 shadow-xs space-y-2">
                <div class="font-bold text-amber-950 text-sm flex items-center space-x-2">
                  <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs">3</span>
                  <span>Supporting Details (รายละเอียด)</span>
                </div>
                <p class="text-slate-600 text-[11px]">หลักฐาน/เหตุการณ์ที่ช่วยพิสูจน์หรือขยาย Main Idea</p>
                <div class="p-2 bg-amber-50 rounded-lg text-amber-900 font-semibold text-[11px]">
                  🧱 ตัวอย่าง: <em>The boastful Hare naps; the patient Tortoise never stops walking.</em>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-2">
            <button onclick="app.selectActivityStep('learn')" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer text-center flex items-center justify-center space-x-2 shadow-md">
              <span>Next Step: Learn (คำอธิบายละเอียด)</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        </div>`,

        learn: `<div class="space-y-6" id="learn-content-top">
          <!-- Sub-Tab Switcher: Part 1 vs Part 2 -->
          <div class="flex items-center space-x-2 sm:space-x-3 p-1.5 bg-purple-100/70 rounded-2xl border border-purple-200 overflow-x-auto no-scrollbar">
            <button 
              id="learn-tab-1"
              type="button"
              onclick="app.switchLearnPart('part1')" 
              class="px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 cursor-pointer bg-purple-700 text-white shadow-md shrink-0"
            >
              <i data-lucide="compass" class="w-4 h-4"></i>
              <span>Part 1: Pre-Reading Strategies (กลยุทธ์ก่อนการอ่าน)</span>
            </button>
            <button 
              id="learn-tab-2"
              type="button"
              onclick="app.switchLearnPart('part2')" 
              class="px-4 py-2.5 rounded-xl text-xs font-semibold transition flex items-center space-x-2 cursor-pointer bg-white/80 text-purple-900 hover:bg-white border border-purple-200 shrink-0"
            >
              <i data-lucide="bookmark-check" class="w-4 h-4 text-purple-700"></i>
              <span>Part 2: Main Idea & Topic Sentence (ใจความสำคัญและประโยคหลัก)</span>
            </button>
          </div>

          <!-- ====================================================================
               PART 1: PRE-READING STRATEGIES
               ==================================================================== -->
          <div id="learn-part-1" class="space-y-6">
            <!-- 1. Pre-Reading คืออะไร และทำไมต้องทำก่อนอ่าน -->
            <div class="space-y-3">
              <div class="flex items-center space-x-2 text-purple-900 font-bold text-lg">
                <i data-lucide="compass" class="w-6 h-6 text-purple-700"></i>
                <h3>1. Pre-Reading คืออะไร และทำไมต้องทำก่อนอ่าน?</h3>
              </div>
              <p class="text-sm text-slate-700 leading-relaxed">
                <strong>Pre-Reading (ขั้นตอนก่อนการอ่าน)</strong> คือ กระบวนการเตรียมความพร้อมของสมองก่อนลงมืออ่านบทความจริงแบบละเอียด เปรียบเสมือนการ <strong>"วอร์มอัพ (Warm-up)"</strong> ร่างกายก่อนเล่นกีฬา หรือการเปิด <strong>"แผนที่นำทาง (GPS Roadmap)"</strong> เพื่อดูทิศทางและภูมิประเทศคร่าวๆ ก่อนออกเดินทางไกล การทำ Pre-Reading จะใช้เวลาสั้นๆ เพียง <strong>1–2 นาที</strong> เพื่อสำรวจจุดเด่นของบทอ่านโดยไม่ต้องอ่านทุกตัวอักษร
              </p>

              <!-- 4 เหตุผลว่าทำไมต้องทำ Pre-Reading -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                <div class="p-3.5 bg-purple-50 rounded-xl border border-purple-200 space-y-1.5 shadow-2xs">
                  <div class="w-7 h-7 rounded-lg bg-purple-700 text-white flex items-center justify-center font-bold text-xs">
                    <i data-lucide="zap" class="w-4 h-4"></i>
                  </div>
                  <h6 class="font-bold text-xs text-purple-950">ปลุกสมองให้พร้อม (Activate Brain)</h6>
                  <p class="text-[11px] text-slate-600 leading-relaxed">กระตุ้นโครงข่ายความรู้เดิม (Schema) ในสมอง ให้พร้อมรับข้อมูลและคำศัพท์ใหม่ได้อย่างรวดเร็ว</p>
                </div>

                <div class="p-3.5 bg-pink-50 rounded-xl border border-pink-200 space-y-1.5 shadow-2xs">
                  <div class="w-7 h-7 rounded-lg bg-pink-600 text-white flex items-center justify-center font-bold text-xs">
                    <i data-lucide="target" class="w-4 h-4"></i>
                  </div>
                  <h6 class="font-bold text-xs text-pink-950">กำหนดเป้าหมาย (Set Purpose)</h6>
                  <p class="text-[11px] text-slate-600 leading-relaxed">สร้างคำถามในใจล่วงหน้า ทำให้รู้ชัดเจนว่าเรากำลังอ่านบทความนี้ไปเพื่อค้นหาข้อมูลอะไร</p>
                </div>

                <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-200 space-y-1.5 shadow-2xs">
                  <div class="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs">
                    <i data-lucide="gauge" class="w-4 h-4"></i>
                  </div>
                  <h6 class="font-bold text-xs text-amber-950">อ่านเร็วขึ้น & ไม่งง (Speed & Fluency)</h6>
                  <p class="text-[11px] text-slate-600 leading-relaxed">เมื่อเห็นโครงร่างและใจความกว้างๆ จะช่วยลดการอ่านสะดุด ทำให้จับประเด็นได้ลื่นไหล ไม่หลงทาง</p>
                </div>

                <div class="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1.5 shadow-2xs">
                  <div class="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                    <i data-lucide="shield-check" class="w-4 h-4"></i>
                  </div>
                  <h6 class="font-bold text-xs text-emerald-950">ลดความกังวล (Reduce Anxiety)</h6>
                  <p class="text-[11px] text-slate-600 leading-relaxed">ลดความกลัวต่อบทความภาษาอังกฤษที่ยาวหรือยาก เพราะได้ทำความคุ้นเคยกับคำศัพท์หลักไว้แล้ว</p>
                </div>
              </div>
            </div>

            <!-- 2. 4 กลยุทธ์สำคัญของ Pre-Reading (Pre-Reading Strategies) -->
            <div class="space-y-4">
              <div class="flex items-center space-x-2 text-purple-900 font-bold text-lg">
                <i data-lucide="layers" class="w-6 h-6 text-purple-700"></i>
                <h3>2. กลยุทธ์ Pre-Reading 4 ประการ: คำอธิบาย, ขั้นตอนปฏิบัติ และเคล็ดลับ</h3>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- กลยุทธ์ที่ 1: Previewing -->
                <div class="p-4 bg-white rounded-2xl border border-purple-200 shadow-xs space-y-3">
                  <div class="flex items-center space-x-2 pb-2 border-b border-purple-100">
                    <span class="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-xs">1</span>
                    <h4 class="font-bold text-purple-950 text-sm">การดูชื่อเรื่องและรูปภาพ (Previewing)</h4>
                  </div>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    <strong>คำอธิบาย:</strong> การกวาดสายตาสำรวจ <em>Text Features (ร่องรอยภายนอกของบทความ)</em> ในเวลา 30–45 วินาที เพื่อสร้างภาพจำลองโครงสร้างของบทอ่านในสมอง
                  </p>
                  <div class="bg-purple-50/70 p-3 rounded-xl border border-purple-100 space-y-1.5 text-xs text-slate-700">
                    <span class="font-bold text-purple-900 text-[11px] flex items-center space-x-1">
                      <i data-lucide="list-ordered" class="w-3.5 h-3.5 text-purple-700"></i>
                      <span>ขั้นตอนการทำ (Step-by-Step):</span>
                    </span>
                    <ul class="text-[11px] space-y-1 pl-1 text-slate-600">
                      <li>• <strong>Step 1:</strong> อ่าน <strong>Title (ชื่อเรื่อง)</strong> และ Subheadings เพื่อดูว่าเรื่องเกี่ยวกับอะไร</li>
                      <li>• <strong>Step 2:</strong> สำรวจ <strong>Visuals (รูปภาพ, แผนภูมิ, กราฟ)</strong> และอ่านคำอธิบายใต้ภาพ (Captions)</li>
                      <li>• <strong>Step 3:</strong> สแกนหาคำเน้น เช่น <strong>ตัวหนา (Bold)</strong>, <em>ตัวเอียง (Italics)</em> หรือตัวเลข</li>
                    </ul>
                  </div>
                  <div class="bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-[11px] text-amber-900 flex items-start space-x-1.5">
                    <i data-lucide="lightbulb" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
                    <span><strong>เคล็ดลับ (Tip):</strong> อย่าเพิ่งอ่านเนื้อความยาวๆ ให้สายตามองข้ามตัวหนังสือธรรมดา แล้วโฟกัสเฉพาะ "จุดเด่นที่สะดุดตา" ก่อนเท่านั้น</span>
                  </div>
                </div>

                <!-- กลยุทธ์ที่ 2: Predicting -->
                <div class="p-4 bg-white rounded-2xl border border-pink-200 shadow-xs space-y-3">
                  <div class="flex items-center space-x-2 pb-2 border-b border-pink-100">
                    <span class="w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold text-xs">2</span>
                    <h4 class="font-bold text-pink-950 text-sm">การคาดเดาเนื้อหา (Predicting)</h4>
                  </div>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    <strong>คำอธิบาย:</strong> การใช้ร่องรอย (Clues) จากการ Preview มาตั้งสมมติฐานหรือคาดเดาอย่างมีเหตุผล (Educated Guess) ว่าบทความจะเล่าเรื่องอะไรหรือมีจุดจบอย่างไร
                  </p>
                  <div class="bg-pink-50/70 p-3 rounded-xl border border-pink-100 space-y-1.5 text-xs text-slate-700">
                    <span class="font-bold text-pink-900 text-[11px] flex items-center space-x-1">
                      <i data-lucide="list-ordered" class="w-3.5 h-3.5 text-pink-600"></i>
                      <span>ขั้นตอนการทำ (Step-by-Step):</span>
                    </span>
                    <ul class="text-[11px] space-y-1 pl-1 text-slate-600">
                      <li>• <strong>Step 1:</strong> นำข้อมูลจากชื่อเรื่องและภาพมาตั้งคำถาม (เช่น <em>"กระต่ายกับเต่าจะทำอะไรร่วมกัน?"</em>)</li>
                      <li>• <strong>Step 2:</strong> เขียนหรือคิดข้อคาดเดาไว้ 1–2 ประโยค (เช่น <em>"กระต่ายต้องท้าเต่าแข่งวิ่งแน่นอน"</em>)</li>
                      <li>• <strong>Step 3:</strong> ตั้งใจอ่านเพื่อ <strong>ตรวจสอบ (Verify)</strong> ว่าเนื้อเรื่องตรงกับที่เราคาดเดาไว้หรือไม่</li>
                    </ul>
                  </div>
                  <div class="bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-[11px] text-amber-900 flex items-start space-x-1.5">
                    <i data-lucide="lightbulb" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
                    <span><strong>เคล็ดลับ (Tip):</strong> การคาดเดา "ผิด" ไม่ใช่เรื่องเสียหาย! จุดประสงค์ของการคาดเดาคือการสร้าง <span class="highlighter-pen highlighter-yellow font-semibold">Active Curiosity</span> ทำให้สมองตื่นตัวรอค้นหาคำตอบจริง</span>
                  </div>
                </div>

                <!-- กลยุทธ์ที่ 3: Activating Background Knowledge -->
                <div class="p-4 bg-white rounded-2xl border border-amber-200 shadow-xs space-y-3">
                  <div class="flex items-center space-x-2 pb-2 border-b border-amber-100">
                    <span class="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs">3</span>
                    <h4 class="font-bold text-amber-950 text-sm">การดึงความรู้เดิมมาใช้ (Activating Prior Knowledge)</h4>
                  </div>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    <strong>คำอธิบาย:</strong> การดึงความจำ ความรู้ และประสบการณ์เดิมที่สะสมไว้ในสมอง (Schema) มาเชื่อมโยงกับเรื่องที่กำลังจะอ่าน ช่วยให้เข้าใจเนื้อหาใหม่ได้ง่ายขึ้นเป็นทวีคูณ
                  </p>
                  <div class="bg-amber-50/70 p-3 rounded-xl border border-amber-100 space-y-1.5 text-xs text-slate-700">
                    <span class="font-bold text-amber-900 text-[11px] flex items-center space-x-1">
                      <i data-lucide="list-ordered" class="w-3.5 h-3.5 text-amber-600"></i>
                      <span>ขั้นตอนการทำ (Step-by-Step):</span>
                    </span>
                    <ul class="text-[11px] space-y-1 pl-1 text-slate-600">
                      <li>• <strong>Step 1:</strong> ถามตัวเอง: <em>"เรารู้อะไรเกี่ยวกับเรื่องนี้บ้างแล้ว?"</em> (เช่น คาแรคเตอร์เต่าเดินช้า กระต่ายวิ่งเร็ว)</li>
                      <li>• <strong>Step 2:</strong> ใช้เทคนิค <strong>K-W-L</strong> สั้นๆ: <strong>K</strong> (สิ่งที่เรารู้แล้ว) $\rightarrow$ <strong>W</strong> (สิ่งที่อยากรู้จากเรื่องนี้)</li>
                      <li>• <strong>Step 3:</strong> นึกเชื่อมโยงกับประสบการณ์ตรงหรือเรื่องราวที่เคยดู/เคยฟังในชีวิตประจำวัน</li>
                    </ul>
                  </div>
                  <div class="bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-[11px] text-amber-900 flex items-start space-x-1.5">
                    <i data-lucide="lightbulb" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
                    <span><strong>เคล็ดลับ (Tip):</strong> สมองมนุษย์เรียนรู้สิ่งใหม่ได้ดีที่สุดเมื่อมี "สะพานเชื่อม" กับสิ่งเดิม ใช้เวลาเพียง 20 วินาทีนึกถึงเรื่องที่เคยรู้ จะช่วยให้จำเนื้อหาใหม่ได้แม่นยำขึ้นมาก</span>
                  </div>
                </div>

                <!-- กลยุทธ์ที่ 4: Vocabulary Preview -->
                <div class="p-4 bg-white rounded-2xl border border-emerald-200 shadow-xs space-y-3">
                  <div class="flex items-center space-x-2 pb-2 border-b border-emerald-100">
                    <span class="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">4</span>
                    <h4 class="font-bold text-emerald-950 text-sm">การเรียนรู้คำศัพท์ล่วงหน้า (Vocabulary Preview)</h4>
                  </div>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    <strong>คำอธิบาย:</strong> การสำรวจและเรียนรู้คำศัพท์สำคัญประจำบท (Key Content Words) ล่วงหน้า เพื่อป้องกันไม่ให้คำศัพท์ยากกลายเป็นกำแพงขัดขวางการทำความเข้าใจ
                  </p>
                  <div class="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 space-y-1.5 text-xs text-slate-700">
                    <span class="font-bold text-emerald-900 text-[11px] flex items-center space-x-1">
                      <i data-lucide="list-ordered" class="w-3.5 h-3.5 text-emerald-700"></i>
                      <span>ขั้นตอนการทำ (Step-by-Step):</span>
                    </span>
                    <ul class="text-[11px] space-y-1 pl-1 text-slate-600">
                      <li>• <strong>Step 1:</strong> สังเกตคำศัพท์สำคัญที่เน้นตัวหนา หรือคำศัพท์ที่ปรากฏซ้ำบ่อยในชื่อเรื่องและย่อหน้าแรก</li>
                      <li>• <strong>Step 2:</strong> ตรวจดูประเภทคำ (Part of Speech) และความหมายหลักคร่าวๆ (~5–10 คำสำคัญ)</li>
                      <li>• <strong>Step 3:</strong> เดาความหมายของคำจากบริบทแวดล้อม (Context Clues) เบื้องต้นก่อนเปิดพจนานุกรม</li>
                    </ul>
                  </div>
                  <div class="bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-[11px] text-amber-900 flex items-start space-x-1.5">
                    <i data-lucide="lightbulb" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
                    <span><strong>เคล็ดลับ (Tip):</strong> ไม่จำเป็นต้องเปิดพจนานุกรมทุกคำที่ไม่รู้! ดูเฉพาะคำหลักที่ส่งผลต่อใจความสำคัญ หากคำศัพท์นั้นเป็นแค่คำบรรยายปลีกย่อย ให้ข้ามไปก่อนได้</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 3. Mind Map / ไดอะแกรมสรุปขั้นตอน Pre-Reading -->
            <div class="p-4 sm:p-5 bg-gradient-to-r from-purple-50 via-pink-50 to-amber-50 rounded-2xl border border-purple-200 space-y-3">
              <div class="flex items-center space-x-2 text-purple-950 font-bold text-sm">
                <i data-lucide="sparkles" class="w-5 h-5 text-purple-700"></i>
                <span>3. แผนผังกระบวนการ Pre-Reading ประจำบท (4-Step Action Routine)</span>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center">
                <div class="p-3 bg-white/95 rounded-xl border border-purple-200 shadow-2xs space-y-1">
                  <span class="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md">STEP 1</span>
                  <h6 class="font-bold text-xs text-slate-900">สำรวจ Text Features</h6>
                  <p class="text-[11px] text-slate-600">กวาดตาดู Title, ภาพประกอบ, และตัวหนา (30 วินาที)</p>
                </div>

                <div class="p-3 bg-white/95 rounded-xl border border-pink-200 shadow-2xs space-y-1">
                  <span class="text-xs font-bold text-pink-700 bg-pink-100 px-2 py-0.5 rounded-md">STEP 2</span>
                  <h6 class="font-bold text-xs text-slate-900">ปลุกความรู้เดิม (Schema)</h6>
                  <p class="text-[11px] text-slate-600">นึกถึงสิ่งที่เรารู้เกี่ยวกับหัวข้อนี้มาก่อน (20 วินาที)</p>
                </div>

                <div class="p-3 bg-white/95 rounded-xl border border-amber-200 shadow-2xs space-y-1">
                  <span class="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">STEP 3</span>
                  <h6 class="font-bold text-xs text-slate-900">ส่องศัพท์สำคัญ (~10 คำ)</h6>
                  <p class="text-[11px] text-slate-600">ทำความเข้าใจคำศัพท์หลักก่อนอ่านเนื้อเรื่องจริง (45 วินาที)</p>
                </div>

                <div class="p-3 bg-white/95 rounded-xl border border-emerald-200 shadow-2xs space-y-1">
                  <span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">STEP 4</span>
                  <h6 class="font-bold text-xs text-slate-900">ตั้งสมมติฐาน & คาดเดา</h6>
                  <p class="text-[11px] text-slate-600">คาดเดาเนื้อเรื่องและกำหนดเป้าหมายในการอ่าน (25 วินาที)</p>
                </div>
              </div>
            </div>

            <!-- 4. ข้อผิดพลาดที่พบบ่อย (Common Mistakes & Traps) -->
            <div class="space-y-3">
              <div class="flex items-center space-x-2 text-rose-950 font-bold text-lg">
                <i data-lucide="alert-triangle" class="w-6 h-6 text-rose-600"></i>
                <h3>4. ข้อผิดพลาดที่พบบ่อยในการทำ Pre-Reading (Common Mistakes & Traps)</h3>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="p-3.5 bg-rose-50/80 rounded-xl border border-rose-200 space-y-1.5 shadow-2xs">
                  <div class="flex items-center space-x-2 text-rose-900 font-bold text-xs">
                    <span class="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center font-bold text-[11px]">✕</span>
                    <span>1. กระโดดอ่านบรรทัดแรกทันทีโดยไม่สำรวจ (Diving Straight In)</span>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed pl-7">
                    <strong>ผลเสีย:</strong> สมองไม่มีทิศทาง ไม่รู้ภาพรวม ทำให้อ่านช้าและหลงประเด็นง่าย<br>
                    <strong class="text-emerald-700">✓ วิธีแก้:</strong> สละเวลา 1–2 นาที กวาดตาดูชื่อเรื่อง ภาพประกอบ และหัวข้อย่อยก่อนเสมอ
                  </p>
                </div>

                <div class="p-3.5 bg-rose-50/80 rounded-xl border border-rose-200 space-y-1.5 shadow-2xs">
                  <div class="flex items-center space-x-2 text-rose-900 font-bold text-xs">
                    <span class="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center font-bold text-[11px]">✕</span>
                    <span>2. ใช้เวลากับ Pre-Reading นานเกินไป (Over-Reading)</span>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed pl-7">
                    <strong>ผลเสีย:</strong> พยายามอ่านทุกประโยคตั้งแต่ช่วงสำรวจ ทำให้หมดเวลาและเหนื่อยล้าก่อนอ่านจริง<br>
                    <strong class="text-emerald-700">✓ วิธีแก้:</strong> กำหนดเวลาเคร่งครัดเพียง 1–2 นาที ใช้การสแกน (Scanning) แทนการอ่านคำต่อคำ
                  </p>
                </div>

                <div class="p-3.5 bg-rose-50/80 rounded-xl border border-rose-200 space-y-1.5 shadow-2xs">
                  <div class="flex items-center space-x-2 text-rose-900 font-bold text-xs">
                    <span class="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center font-bold text-[11px]">✕</span>
                    <span>3. กลัวการคาดเดาผิด (Fear of Wrong Predictions)</span>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed pl-7">
                    <strong>ผลเสีย:</strong> ไม่กล้าตั้งสมมติฐานเพราะกังวลว่าจะไม่ตรงกับเนื้อเรื่อง<br>
                    <strong class="text-emerald-700">✓ วิธีแก้:</strong> จำไว้ว่า <span class="highlighter-pen highlighter-pink">การคาดเดาไม่มีผิดถูก</span> เป้าหมายคือทำให้สมองกระตือรือร้นในการตรวจสอบความจริง
                  </p>
                </div>

                <div class="p-3.5 bg-rose-50/80 rounded-xl border border-rose-200 space-y-1.5 shadow-2xs">
                  <div class="flex items-center space-x-2 text-rose-900 font-bold text-xs">
                    <span class="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center font-bold text-[11px]">✕</span>
                    <span>4. หยุดเปิดพจนานุกรมทุกคำที่ไม่คุ้นตา (Dictionary Dependency)</span>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed pl-7">
                    <strong>ผลเสีย:</strong> สมาธิขาดตอน เสียจังหวะในการทำความเข้าใจภาพรวมของเรื่อง<br>
                    <strong class="text-emerald-700">✓ วิธีแก้:</strong> พรีวิวเฉพาะคำสำคัญ 5–10 คำ คำที่เหลือให้ลองเดาจากบริบทขณะอ่านจริง
                  </p>
                </div>
              </div>
            </div>

            <!-- Part 1 Bottom Navigation Buttons -->
            <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4 border-t border-purple-100">
              <button onclick="app.selectActivityStep('overview')" class="w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center">
                ⬅ Back: Overview
              </button>
              <button onclick="app.switchLearnPart('part2')" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-2 shadow-md">
                <span>Next: Part 2 (Main Idea & Topic Sentence)</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <!-- ====================================================================
               PART 2: MAIN IDEA & TOPIC SENTENCE
               ==================================================================== -->
          <div id="learn-part-2" class="space-y-6 hidden">
            <!-- Header for Part 2 -->
            <div class="bg-gradient-to-r from-purple-100/90 to-pink-100/90 p-4 sm:p-5 rounded-2xl border border-purple-200">
              <div class="flex items-center space-x-2 mb-1.5">
                <span class="bg-purple-700 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">Part 2: Core Lesson</span>
                <span class="text-xs font-semibold text-purple-900 bg-purple-200/80 px-2.5 py-0.5 rounded-full">Unit 1 Focus</span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-slate-900">Main Idea & Topic Sentence (ใจความสำคัญและประโยคหลัก)</h3>
              <p class="text-xs text-slate-700 mt-1 leading-relaxed">
                เรียนรู้โครงสร้างหัวใจสำคัญของการอ่านภาษาอังกฤษ: การแยกแยะ 3 ระดับความคิด (Topic vs Main Idea vs Supporting Details), การหาตำแหน่ง Topic Sentence, และเทคนิคการสรุปใจความสำคัญแบบ Step-by-Step
              </p>
            </div>

            <!-- A) Topic vs Main Idea vs Supporting Details (3 Levels in Depth + Everyday Examples) -->
            <div class="space-y-3">
              <div class="flex items-center space-x-2 text-purple-900 font-bold text-lg">
                <i data-lucide="layers" class="w-6 h-6 text-purple-700"></i>
                <h3>A. ความแตกต่างเชิงลึก: 3 ระดับความคิดในบทอ่าน (Reading Hierarchy)</h3>
              </div>
              <p class="text-sm text-slate-700 leading-relaxed">
                การอ่านภาษาอังกฤษให้เข้าใจอย่างถ่องแท้ ต้องสามารถแยกความแตกต่างของข้อมูลออกเป็น <strong>3 ลำดับขั้น (Hierarchy)</strong> โดยเปรียบเทียบเหมือน <strong>"ร่มคันใหญ่ (Umbrella)"</strong> ที่มีโครงสร้างซ้อนกันอย่างชัดเจน:
              </p>

              <!-- 3 Levels Cards -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <!-- Level 1: Topic -->
                <div class="p-4 bg-white rounded-2xl border-t-4 border-purple-600 border-x border-b border-purple-100 shadow-xs space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded-md">LEVEL 1</span>
                    <i data-lucide="hash" class="w-4 h-4 text-purple-600"></i>
                  </div>
                  <h4 class="font-bold text-slate-900 text-sm">Topic (หัวข้อเรื่อง)</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    คือ <strong>"คำหรือวลีสั้นๆ (Word / Noun Phrase)"</strong> ที่ตอบคำถามว่า <em>"เรื่องนี้พูดถึงใครหรืออะไร?" (Who or what is the text about?)</em>
                  </p>
                  <div class="p-2.5 bg-purple-50/80 rounded-xl text-[11px] text-purple-900 space-y-1">
                    <span class="font-bold block">ลักษณะเด่น:</span>
                    <ul class="space-y-0.5 pl-1">
                      <li>• เป็นแค่คำนามหรือวลี <strong>ไม่มีกริยาแท้สมบูรณ์</strong></li>
                      <li>• ยังไม่สามารถบอกความคิดเห็นหรือสารของผู้เขียนได้</li>
                    </ul>
                  </div>
                </div>

                <!-- Level 2: Main Idea -->
                <div class="p-4 bg-white rounded-2xl border-t-4 border-pink-500 border-x border-b border-pink-100 shadow-xs space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-pink-700 bg-pink-100 px-2 py-0.5 rounded-md">LEVEL 2 (CORE)</span>
                    <i data-lucide="bookmark" class="w-4 h-4 text-pink-600"></i>
                  </div>
                  <h4 class="font-bold text-slate-900 text-sm">Main Idea (ใจความสำคัญ)</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    คือ <strong>"แก่นแท้หรือข้อความสำคัญที่สุด"</strong> ที่ผู้เขียนต้องการบอกผู้อ่านเกี่ยวกับ Topic นั้น
                  </p>
                  <div class="p-2.5 bg-pink-50/80 rounded-xl text-[11px] text-pink-900 space-y-1">
                    <span class="font-bold block">ลักษณะเด่น:</span>
                    <ul class="space-y-0.5 pl-1">
                      <li>• <strong class="text-pink-950">ต้องเป็นประโยคที่สมบูรณ์ (Complete Sentence)</strong> เสมอ (Subject + Verb)</li>
                      <li>• ต้องกว้างพอที่จะคลุมเนื้อหาทั้งย่อหน้าได้</li>
                    </ul>
                  </div>
                </div>

                <!-- Level 3: Supporting Details -->
                <div class="p-4 bg-white rounded-2xl border-t-4 border-amber-500 border-x border-b border-amber-100 shadow-xs space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">LEVEL 3</span>
                    <i data-lucide="list-tree" class="w-4 h-4 text-amber-600"></i>
                  </div>
                  <h4 class="font-bold text-slate-900 text-sm">Supporting Details (รายละเอียด)</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    คือ <strong>"หลักฐาน ข้อเท็จจริง ตัวเลข สถิติ หรือตัวอย่าง"</strong> ที่นำมาพิสูจน์หรือขยายความ Main Idea
                  </p>
                  <div class="p-2.5 bg-amber-50/80 rounded-xl text-[11px] text-amber-900 space-y-1">
                    <span class="font-bold block">ลักษณะเด่น:</span>
                    <ul class="space-y-0.5 pl-1">
                      <li>• <strong>Major Details:</strong> ประเด็นรองหลักที่ชี้แจง Main Idea โดยตรง</li>
                      <li>• <strong>Minor Details:</strong> ข้อมูลสถิติ ตัวเลข ชื่อเฉพาะ หรือคำอธิบายเสริม</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Everyday Examples Comparison Box -->
              <div class="p-4 sm:p-5 bg-gradient-to-br from-purple-50/90 via-pink-50/50 to-indigo-50/90 rounded-2xl border border-purple-200 space-y-3 mt-2">
                <div class="flex items-center space-x-2 text-purple-950 font-bold text-sm">
                  <i data-lucide="sparkles" class="w-4 h-4 text-purple-700"></i>
                  <span>ตัวอย่างเปรียบเทียบในชีวิตประจำวัน (Everyday Real-World Examples):</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <!-- Example 1: Social Media -->
                  <div class="p-3.5 bg-white/95 rounded-xl border border-purple-100 shadow-2xs space-y-2">
                    <div class="flex items-center space-x-2 text-purple-900 font-bold">
                      <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-[10px]">📱</span>
                      <span>เรื่องที่ 1: การใช้โซเชียลมีเดีย (Social Media)</span>
                    </div>
                    <div class="space-y-1.5 pl-1 text-[11px] text-slate-700">
                      <div>
                        <strong class="text-purple-800 font-semibold">[Topic]:</strong> <em>Social media use among university students</em> (การใช้โซเชียลมีเดียของนักศึกษา)
                      </div>
                      <div>
                        <strong class="text-pink-700 font-semibold">[Main Idea]:</strong> <em>Excessive social media use negatively affects university students' sleep quality and mental health.</em> (การใช้โซเชียลมากเกินไปส่งผลเสียต่อคุณภาพการนอนและสุขภาพจิต)
                      </div>
                      <div class="bg-slate-50 p-2 rounded-lg border border-slate-200/80 text-slate-600 space-y-0.5">
                        <p>• <strong>Major Detail:</strong> Late-night blue light from phone screens disrupts melatonin production.</p>
                        <p>• <strong>Minor Detail:</strong> A 2023 campus survey found 72% of students scroll TikTok for over 2 hours before bed.</p>
                      </div>
                    </div>
                  </div>

                  <!-- Example 2: Coffee & Health -->
                  <div class="p-3.5 bg-white/95 rounded-xl border border-purple-100 shadow-2xs space-y-2">
                    <div class="flex items-center space-x-2 text-amber-900 font-bold">
                      <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px]">☕</span>
                      <span>เรื่องที่ 2: การดื่มกาแฟ (Coffee Consumption)</span>
                    </div>
                    <div class="space-y-1.5 pl-1 text-[11px] text-slate-700">
                      <div>
                        <strong class="text-purple-800 font-semibold">[Topic]:</strong> <em>Daily coffee consumption</em> (การดื่มกาแฟในชีวิตประจำวัน)
                      </div>
                      <div>
                        <strong class="text-pink-700 font-semibold">[Main Idea]:</strong> <em>Drinking a moderate amount of coffee every day provides several remarkable health benefits.</em> (การดื่มกาแฟในปริมาณพอเหมาะให้ประโยชน์ต่อสุขภาพหลายประการ)
                      </div>
                      <div class="bg-slate-50 p-2 rounded-lg border border-slate-200/80 text-slate-600 space-y-0.5">
                        <p>• <strong>Major Detail:</strong> It contains antioxidants that enhance brain function and reduce heart disease risk.</p>
                        <p>• <strong>Minor Detail:</strong> Studies show 2–3 cups daily can reduce the risk of type 2 diabetes by 25%.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- B) What is a Topic Sentence & Where it Can Appear -->
            <div class="space-y-3">
              <div class="flex items-center space-x-2 text-purple-900 font-bold text-lg">
                <i data-lucide="bookmark-check" class="w-6 h-6 text-purple-700"></i>
                <h3>B. Topic Sentence คืออะไร และปรากฏอยู่ที่ตำแหน่งใดบ้าง?</h3>
              </div>
              <p class="text-sm text-slate-700 leading-relaxed">
                <strong>Topic Sentence (ประโยคใจความหลัก)</strong> คือประโยคในย่อหน้าที่ระบุ Main Idea ไว้อย่างชัดเจน (Stated Main Idea) โดยทำหน้าที่เป็น <strong>"ร่มคันใหญ่ (Umbrella Sentence)"</strong> ที่กางคลุมประโยคอื่นๆ ทั้งหมดในย่อหน้า ตำแหน่งของ Topic Sentence สามารถปรากฏได้ 3 ตำแหน่งหลัก:
              </p>

              <!-- 3 Positions Cards -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <!-- Position 1: Beginning -->
                <div class="p-4 bg-white rounded-2xl border border-purple-200 shadow-xs space-y-2">
                  <div class="flex items-center space-x-2">
                    <span class="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-xs">1</span>
                    <h5 class="font-bold text-purple-950 text-xs">ต้นย่อหน้า (Beginning Sentence)</h5>
                  </div>
                  <span class="inline-block text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">พบบ่อยที่สุด (~80%)</span>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    ผู้เขียนประกาศประเด็นหลักทันทีในประโยคที่ 1 หรือ 2 เพื่อให้ผู้อ่านเข้าใจภาพรวม แล้วจึงตามด้วยประโยคขยายความ
                  </p>
                  <div class="p-2 bg-purple-50 rounded-lg text-[10px] font-mono text-purple-900 border border-purple-200">
                    [Topic Sentence] ➔ Detail 1 ➔ Detail 2 ➔ Detail 3
                  </div>
                </div>

                <!-- Position 2: End -->
                <div class="p-4 bg-white rounded-2xl border border-pink-200 shadow-xs space-y-2">
                  <div class="flex items-center space-x-2">
                    <span class="w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold text-xs">2</span>
                    <h5 class="font-bold text-pink-950 text-xs">ท้ายย่อหน้า (Concluding Sentence)</h5>
                  </div>
                  <span class="inline-block text-[10px] font-bold text-pink-700 bg-pink-100 px-2 py-0.5 rounded-full">พบได้บ่อย (~15%)</span>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    ผู้เขียนจะเริ่มจากการเล่าข้อเท็จจริง ตัวอย่าง หรือเหตุการณ์ก่อน แล้วจึงรวบยอดสรุปใจความสำคัญในประโยคสุดท้าย
                  </p>
                  <div class="p-2 bg-pink-50 rounded-lg text-[10px] font-mono text-pink-900 border border-pink-200">
                    Detail 1 ➔ Detail 2 ➔ Detail 3 ➔ [Topic Sentence]
                  </div>
                </div>

                <!-- Position 3: Middle -->
                <div class="p-4 bg-white rounded-2xl border border-amber-200 shadow-xs space-y-2">
                  <div class="flex items-center space-x-2">
                    <span class="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs">3</span>
                    <h5 class="font-bold text-amber-950 text-xs">กลางย่อหน้า (Middle Sentence)</h5>
                  </div>
                  <span class="inline-block text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">พบได้ (~5%)</span>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    ผู้เขียนอาจเริ่มด้วยประเด็นเกริ่นนำหรือมุมมองทั่วไป แล้วใช้คำเชื่อมขัดแย้งนำทางเข้าสู่ Topic Sentence ที่แท้จริง
                  </p>
                  <div class="p-2 bg-amber-50 rounded-lg text-[10px] font-mono text-amber-900 border border-amber-200">
                    Intro / Hook ➔ [Topic Sentence] ➔ Supporting Details
                  </div>
                </div>
              </div>

              <!-- Signal Clues to Find Topic Sentence -->
              <div class="p-4 bg-purple-50/80 rounded-2xl border border-purple-200 space-y-2 text-xs">
                <span class="font-bold text-purple-950 text-xs flex items-center space-x-1.5">
                  <i data-lucide="search" class="w-4 h-4 text-purple-700"></i>
                  <span>สัญญาณสังเกตและร่องรอยค้นหา Topic Sentence (Signal Clues):</span>
                </span>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-slate-700">
                  <div class="p-2.5 bg-white rounded-xl border border-purple-100">
                    <strong class="text-purple-900 block mb-0.5">1. General vs. Specific (ความกว้าง vs ความเจาะจง):</strong>
                    Topic Sentence จะเป็นประโยคที่ <strong>"กว้างพอ (General)"</strong> ที่จะคลุมประโยคอื่นๆ ส่วนประโยคแวดล้อมจะเป็นข้อเท็จจริงที่ <strong>"เฉพาะเจาะจง (Specific)"</strong>
                  </div>
                  <div class="p-2.5 bg-white rounded-xl border border-purple-100">
                    <strong class="text-purple-900 block mb-0.5">2. Contrast & Concluding Transitions:</strong>
                    สังเกตคำเชื่อมเปลี่ยนทิศทาง เช่น <em>However, But, In reality</em> (มักพบกลางย่อหน้า) หรือคำสรุปความ เช่น <em>Therefore, Thus, In conclusion</em> (มักพบท้ายย่อหน้า)
                  </div>
                </div>
              </div>
            </div>

            <!-- C) Step-by-Step Method to Find the Main Idea -->
            <div class="space-y-3">
              <div class="flex items-center space-x-2 text-purple-900 font-bold text-lg">
                <i data-lucide="check-circle-2" class="w-6 h-6 text-purple-700"></i>
                <h3>C. วิธีการค้นหา Main Idea 4 ขั้นตอน (Step-by-Step Method)</h3>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div class="p-3.5 bg-white rounded-xl border border-purple-200 shadow-2xs space-y-1.5">
                  <div class="flex items-center space-x-2">
                    <span class="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
                    <h5 class="font-bold text-purple-950 text-xs">หา Topic ให้เจอ</h5>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed">
                    ถามตัวเองว่า: <em>"Who or what is this text about?"</em> สังเกตคำที่กล่าวซ้ำ (Repeated Words) หรือคำสรรพนามที่แทนที่คำนั้น
                  </p>
                </div>

                <div class="p-3.5 bg-white rounded-xl border border-pink-200 shadow-2xs space-y-1.5">
                  <div class="flex items-center space-x-2">
                    <span class="w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
                    <h5 class="font-bold text-pink-950 text-xs">ถาม "ผู้เขียนบอกอะไร?"</h5>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed">
                    ถามตัวเองว่า: <em>"What does the author say about this topic?"</em> ดูว่าผู้เขียนมีทัศนะ ข้อโต้แย้ง หรือสาระสำคัญอะไรเกี่ยวกับ Topic นั้น
                  </p>
                </div>

                <div class="p-3.5 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-1.5">
                  <div class="flex items-center space-x-2">
                    <span class="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
                    <h5 class="font-bold text-amber-950 text-xs">เช็กรายละเอียดสนับสนุน</h5>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed">
                    ตรวจเช็กประโยคอื่นๆ ในย่อหน้าว่าทำหน้าที่ให้เหตุผล พิสูจน์ หรือยกตัวอย่างสนับสนุนข้อความนี้จริงหรือไม่ (The Umbrella Test)
                  </p>
                </div>

                <div class="p-3.5 bg-white rounded-xl border border-emerald-200 shadow-2xs space-y-1.5">
                  <div class="flex items-center space-x-2">
                    <span class="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0">4</span>
                    <h5 class="font-bold text-emerald-950 text-xs">สรุปเป็น 1 ประโยคสมบูรณ์</h5>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed">
                    เขียนหรือเรียบเรียง Main Idea ด้วยภาษาของตนเอง โดยต้องมีประธานและกริยาครบถ้วน (Subject + Verb) เป็นประโยคสมบูรณ์
                  </p>
                </div>
              </div>
            </div>

            <!-- D) Common Mistakes & Traps in Finding Main Ideas -->
            <div class="space-y-3">
              <div class="flex items-center space-x-2 text-rose-950 font-bold text-lg">
                <i data-lucide="alert-octagon" class="w-6 h-6 text-rose-600"></i>
                <h3>D. ข้อผิดพลาดและกับดักที่พบบ่อยในการหา Main Idea (Common Mistakes)</h3>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <!-- Trap 1: Too Broad -->
                <div class="p-3.5 bg-rose-50/80 rounded-xl border border-rose-200 space-y-1.5 shadow-2xs">
                  <div class="flex items-center space-x-2 text-rose-900 font-bold text-xs">
                    <span class="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center font-bold text-[11px]">✕</span>
                    <span>1. กว้างเกินไป (Too Broad)</span>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed pl-7">
                    <strong>ข้อผิดพลาด:</strong> เลือกข้อความที่กว้างครอบจักรวาลเกินไป จนไม่ได้ระบุประเด็นที่บทความพูดถึงจริง<br>
                    <strong>ตัวอย่าง:</strong> บทความพูดถึง <em>"ผลดีของการดื่มกาแฟดำต่อหัวใจ"</em> แต่ตอบว่า <em>"Healthy human lifestyle"</em> (กว้างเกินไป)
                  </p>
                </div>

                <!-- Trap 2: Too Narrow -->
                <div class="p-3.5 bg-rose-50/80 rounded-xl border border-rose-200 space-y-1.5 shadow-2xs">
                  <div class="flex items-center space-x-2 text-rose-900 font-bold text-xs">
                    <span class="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center font-bold text-[11px]">✕</span>
                    <span>2. แคบเกินไป (Too Narrow)</span>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed pl-7">
                    <strong>ข้อผิดพลาด:</strong> เลือกข้อความที่เป็นเพียงตัวอย่างปลีกย่อยหรือข้อมูลเจาะจงจุดเดียว ซึ่งไม่คลุมเนื้อหาทั้งย่อหน้า<br>
                    <strong>ตัวอย่าง:</strong> ตอบว่า <em>"Coffee contains caffeine."</em> ซึ่งเป็นแค่ข้อมูลย่อย 1 จุด ไม่ได้สรุปภาพรวม
                  </p>
                </div>

                <!-- Trap 3: Picking a Supporting Detail -->
                <div class="p-3.5 bg-rose-50/80 rounded-xl border border-rose-200 space-y-1.5 shadow-2xs">
                  <div class="flex items-center space-x-2 text-rose-900 font-bold text-xs">
                    <span class="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center font-bold text-[11px]">✕</span>
                    <span>3. หลงเลือก Supporting Detail ที่มีคำตรงในบทอ่าน (Detail Trap)</span>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed pl-7">
                    <strong>ข้อผิดพลาด:</strong> กับดักยอดฮิตในข้อสอบ! ตัวเลือกมักยกข้อความที่ปรากฏในบทอ่านคำต่อคำมาหลอก ทำให้นักศึกษาเห็นคำตรงแล้วรีบเลือก ทั้งที่ประโยคนั้นเป็นเพียง Minor Detail
                  </p>
                </div>

                <!-- Trap 4: Picking a Fragment/Noun Phrase -->
                <div class="p-3.5 bg-rose-50/80 rounded-xl border border-rose-200 space-y-1.5 shadow-2xs">
                  <div class="flex items-center space-x-2 text-rose-900 font-bold text-xs">
                    <span class="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center font-bold text-[11px]">✕</span>
                    <span>4. ตอบเป็นคำหรือวลี ไม่ใช่ประโยคสมบูรณ์ (Fragment Trap)</span>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed pl-7">
                    <strong>ข้อผิดพลาด:</strong> สับสนระหว่าง Topic กับ Main Idea เช่น ตอบว่า <em>"The benefits of sleep"</em> (เป็นแค่ Topic) แทนที่จะเป็นประโยค <em>"Quality sleep significantly improves students' learning ability."</em>
                  </p>
                </div>
              </div>
            </div>

            <!-- E) Short 4-Step Summary Routine Card -->
            <div class="p-4 sm:p-5 bg-gradient-to-r from-purple-50 via-pink-50 to-emerald-50 rounded-2xl border border-purple-200 space-y-3">
              <div class="flex items-center space-x-2 text-purple-950 font-bold text-sm">
                <i data-lucide="zap" class="w-5 h-5 text-purple-700"></i>
                <span>E. แผนผังปฏิบัติการค้นหา Main Idea (4-Step Action Routine)</span>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center">
                <div class="p-3 bg-white/95 rounded-xl border border-purple-200 shadow-2xs space-y-1">
                  <span class="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md">STEP 1</span>
                  <h6 class="font-bold text-xs text-slate-900">Spot the Topic</h6>
                  <p class="text-[11px] text-slate-600">กวาดตาจับคำซ้ำ หาหัวข้อว่าเรื่องเกี่ยวกับใคร/อะไร (20 วินาที)</p>
                </div>

                <div class="p-3 bg-white/95 rounded-xl border border-pink-200 shadow-2xs space-y-1">
                  <span class="text-xs font-bold text-pink-700 bg-pink-100 px-2 py-0.5 rounded-md">STEP 2</span>
                  <h6 class="font-bold text-xs text-slate-900">Ask "So What?"</h6>
                  <p class="text-[11px] text-slate-600">ถามหาประเด็นที่ผู้เขียนต้องการบอกเกี่ยวกับหัวข้อนั้น (30 วินาที)</p>
                </div>

                <div class="p-3 bg-white/95 rounded-xl border border-amber-200 shadow-2xs space-y-1">
                  <span class="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">STEP 3</span>
                  <h6 class="font-bold text-xs text-slate-900">The Umbrella Test</h6>
                  <p class="text-[11px] text-slate-600">กางร่มเช็กว่าประโยคนี้คลุมรายละเอียดอื่นๆ ทั้งหมดหรือไม่ (30 วินาที)</p>
                </div>

                <div class="p-3 bg-white/95 rounded-xl border border-emerald-200 shadow-2xs space-y-1">
                  <span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">STEP 4</span>
                  <h6 class="font-bold text-xs text-slate-900">Form Complete Sentence</h6>
                  <p class="text-[11px] text-slate-600">เขียนหรือเลือกคำตอบที่เป็นประโยคสมบูรณ์ (30 วินาที)</p>
                </div>
              </div>
            </div>

            <!-- Part 2 Bottom Navigation Buttons -->
            <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4 border-t border-purple-100">
              <button onclick="app.switchLearnPart('part1')" class="w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-1.5">
                <i data-lucide="arrow-left" class="w-4 h-4"></i>
                <span>Back: Part 1 (Pre-Reading)</span>
              </button>
              <button onclick="app.selectActivityStep('example')" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-2 shadow-md">
                <span>Next Step: Example (Passage ยาว & คำศัพท์ 10 คำ)</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>`,

        example: `<div class="space-y-6">
          <!-- Title & Overview Banner -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 pb-3">
            <div>
              <h4 class="text-lg font-bold text-slate-900 flex items-center space-x-2">
                <i data-lucide="book-open" class="w-5 h-5 text-purple-700"></i>
                <span>Worked Example: Passage ยาว & การวิเคราะห์ใจความสำคัญ</span>
              </h4>
              <p class="text-xs text-slate-500 mt-0.5">การนำทฤษฎีจากหน้า Learn มาประยุกต์ใช้วิเคราะห์บทอ่านจริงอย่างละเอียดลึกซึ้ง</p>
            </div>
            <span class="text-xs font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full self-start sm:self-auto">Unit 1 Reading Model (~275 Words)</span>
          </div>

          <!-- 1. Reading Passage Box with Audio Player & Highlighter Tags -->
          <div class="bg-slate-900 text-slate-100 p-4 sm:p-6 rounded-2xl space-y-4 relative shadow-lg">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700 pb-3">
              <div>
                <span class="text-[10px] font-bold text-pink-400 uppercase tracking-wider">Classic Narrative Fable (บทอ่านเรื่องเล่าคลาสสิก 4 ย่อหน้า)</span>
                <h5 class="text-base font-bold text-white mt-0.5">The Tortoise and the Hare: The Classic Race of Perseverance</h5>
              </div>
              
              <div class="flex items-center space-x-2">
                <!-- Audio Speed Selector -->
                <div class="flex items-center space-x-1.5 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5" title="Playback Speed (ความเร็วเสียงอ่าน)">
                  <i data-lucide="gauge" class="w-3.5 h-3.5 text-purple-300 shrink-0"></i>
                  <select onchange="app.setAudioSpeed(this.value)" class="bg-transparent text-purple-200 text-xs font-semibold focus:outline-none cursor-pointer">
                    <option value="0.65" class="bg-slate-900 text-white">0.65x (ช้ามาก)</option>
                    <option value="0.75" selected class="bg-slate-900 text-white">0.75x (ช้าชัดเจน ✨)</option>
                    <option value="0.85" class="bg-slate-900 text-white">0.85x (ปานกลาง)</option>
                    <option value="1.0" class="bg-slate-900 text-white">1.0x (ปกติ)</option>
                  </select>
                </div>

                <button onclick="app.playUnit1Passage()" class="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold rounded-lg flex items-center space-x-2 transition cursor-pointer shadow-md">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                  <span>Listen Passage</span>
                </button>
              </div>
            </div>

            <!-- 4-Paragraph Passage with Micro-Analysis -->
            <div class="text-sm text-slate-200 leading-relaxed space-y-4 font-serif">
              
              <!-- Paragraph 1: Introduction & Topic Sentence -->
              <div class="p-3.5 bg-slate-800/80 rounded-xl border-l-4 border-emerald-500 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">[Paragraph 1: Topic Sentence - Introduction & Conflict]</span>
                  <span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-sans">Beginning Position</span>
                </div>
                <p class="leading-relaxed">
                  <span class="highlighter-pen highlighter-green">A <span class="text-amber-300 font-bold border-b border-dashed border-amber-300">boastful</span> Hare was constantly <span class="text-amber-300 font-bold border-b border-dashed border-amber-300">ridiculing</span> a slow-moving Tortoise for his clumsy pace.</span>
                  Weary of the ceaseless teasing, the quiet Tortoise calmly challenged the swift Hare to a five-mile cross-country footrace. Believing the challenge was a hilarious joke, the <span class="text-amber-300 font-bold border-b border-dashed border-amber-300">arrogant</span> Hare accepted immediately, boasting that no creature in the forest could ever <span class="text-amber-300 font-bold border-b border-dashed border-amber-300">outpace</span> his lightning speed.
                </p>
                <!-- Micro-Analysis: Why This Works -->
                <div class="bg-slate-900/90 p-2.5 rounded-lg border border-emerald-500/30 font-sans text-xs text-emerald-200 flex items-start space-x-2">
                  <i data-lucide="info" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                  <div>
                    <strong class="text-emerald-300 font-bold">Why This Works (วิเคราะห์เหตุผล):</strong> ประโยคนี้ทำหน้าที่เป็น <strong>Topic Sentence</strong> เพราะมีระดับความกว้าง (General enough) ที่เปิดประเด็นแนะนำตัวละครหลักทั้ง 2 ฝ่าย และจุดประกายปมขัดแย้งของเรื่องทันที ประโยคแวดล้อมที่ตามมาทั้งหมดในย่อหน้าเป็นเพียงรายละเอียดสนับสนุนว่าการเยาะเย้ยนี้นำไปสู่การท้าแข่งขันได้อย่างไร
                  </div>
                </div>
              </div>

              <!-- Paragraph 2: Conflict & Supporting Details -->
              <div class="p-3.5 bg-slate-800/80 rounded-xl border-l-4 border-sky-500 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">[Paragraph 2: Supporting Details - Conflict & Turning Point]</span>
                  <span class="text-[10px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded font-sans">Major Detail</span>
                </div>
                <p class="leading-relaxed">
                  When the starting horn sounded, the Hare bolted ahead like lightning, creating a massive lead in mere moments. Looking back and seeing no sign of the plodding Tortoise, the overconfident Hare decided that victory was already guaranteed.
                  <span class="highlighter-pen highlighter-blue">"I have more than enough time to relax under this shady oak tree and take a peaceful nap before that clumsy creature reaches halfway,"</span> he laughed smugly. Soon, the <span class="text-amber-300 font-bold border-b border-dashed border-amber-300">complacent</span> Hare fell into a deep slumber, foolishly underestimating his rival.
                </p>
                <!-- Micro-Analysis: Why This Works -->
                <div class="bg-slate-900/90 p-2.5 rounded-lg border border-sky-500/30 font-sans text-xs text-sky-200 flex items-start space-x-2">
                  <i data-lucide="info" class="w-4 h-4 text-sky-400 shrink-0 mt-0.5"></i>
                  <div>
                    <strong class="text-sky-300 font-bold">Why This Works (วิเคราะห์เหตุผล):</strong> ข้อความที่ไฮไลต์เป็น <strong>Major Supporting Detail</strong> ที่ให้ข้อมูลเหตุการณ์เฉพาะจุด (Specific action) อธิบายพฤติกรรมความประมาทของกระต่าย ประโยคนี้ช่วยขับเคลื่อนโครงเรื่อง แต่ไม่สามารถเป็น Main Idea ได้เพราะเป็นเพียงการกระทำย่อยจุดเดียว ไม่ได้คลุมบทสรุปทั้งหมด
                  </div>
                </div>
              </div>

              <!-- Paragraph 3: Climax & Main Idea / Moral -->
              <div class="p-3.5 bg-slate-800/80 rounded-xl border-l-4 border-rose-500 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold text-rose-400 uppercase tracking-wider block">[Paragraph 3: Climax & Stated Moral / Main Idea]</span>
                  <span class="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-sans">Concluding Position</span>
                </div>
                <p class="leading-relaxed">
                  Meanwhile, the <span class="text-amber-300 font-bold border-b border-dashed border-amber-300">steadfast</span> Tortoise pressed forward with silent <span class="text-amber-300 font-bold border-b border-dashed border-amber-300">determination</span>. Ignoring his weary limbs, rejecting all distractions, he never ceased his deliberate march. Hours slipped past as the complacent Hare slept deeply. When the Hare finally awakened in shock to the distant cheering of forest animals, he bolted forward desperately, only to watch in disbelief as the Tortoise crossed the finish ribbon to seize <span class="text-amber-300 font-bold border-b border-dashed border-amber-300">triumph</span>.
                  <span class="highlighter-pen highlighter-pink">The enduring moral of the race proves that steady <span class="text-amber-300 font-bold border-b border-dashed border-amber-300">perseverance</span> and humble consistency will consistently triumph over careless arrogance and complacent talent.</span>
                </p>
                <!-- Micro-Analysis: Why This Works -->
                <div class="bg-slate-900/90 p-2.5 rounded-lg border border-rose-500/30 font-sans text-xs text-rose-200 flex items-start space-x-2">
                  <i data-lucide="info" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
                  <div>
                    <strong class="text-rose-300 font-bold">Why This Works (วิเคราะห์เหตุผล):</strong> ประโยคสรุปจบนี้คือ <strong>Stated Main Idea</strong> ประจำบทเรียน เพราะทำหน้าที่เป็น <strong>"ร่มคันใหญ่ (Umbrella Sentence)"</strong> ที่รวบยอดทั้งชัยชนะของเต่า (ความเพียรพยายาม) และความพ่ายแพ้ของกระต่าย (ความหยิ่งผยอง) ไว้เป็นประโยคที่สมบูรณ์และทรงคุณค่าทางคติธรรม
                  </div>
                </div>
              </div>

              <!-- Paragraph 4: Resolution & Character Reflection -->
              <div class="p-3.5 bg-slate-800/80 rounded-xl border-l-4 border-amber-500 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">[Paragraph 4: Resolution / Reflection - The Moral Reinforced]</span>
                  <span class="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-sans">Character Growth</span>
                </div>
                <p class="leading-relaxed">
                  Standing near the finish line, the humbled Hare bowed his head, realizing that raw talent without discipline was completely meaningless.
                  <span class="highlighter-pen highlighter-yellow text-slate-900 font-medium">Approaching the winner, he shook the Tortoise's hand with genuine <span class="text-purple-950 font-bold border-b border-dashed border-purple-900">humility</span>, acknowledging that true greatness comes from quiet dedication rather than loud boasting.</span>
                  From that day forward, the Hare abandoned his foolish arrogance, having learned that even the fastest runner can be beaten by those who never give up.
                </p>
                <!-- Micro-Analysis: Why This Works -->
                <div class="bg-slate-900/90 p-2.5 rounded-lg border border-amber-500/30 font-sans text-xs text-amber-200 flex items-start space-x-2">
                  <i data-lucide="info" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
                  <div>
                    <strong class="text-amber-300 font-bold">Why This Works (วิเคราะห์เหตุผล):</strong> ย่อหน้าที่ 4 นี้ช่วย <strong>ตอกย้ำ Main Idea (Reinforcing the Theme)</strong> ผ่านการเปลี่ยนแปลงภายในของตัวละคร (Character Growth) ทำให้ผู้อ่านเห็นว่าข้อคิดเรื่องความถ่อมตนและความมุ่งมั่นไม่ได้เป็นเพียงข้อความลอยๆ แต่ส่งผลให้ตัวละครเปลี่ยนพฤติกรรมจริงในตอนท้าย
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- 2. คำศัพท์ 10 คำ ครบถ้วน พร้อมตัวอย่างประโยคบริบทใหม่ (10 Core Vocabulary Cards) -->
          <div class="space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-purple-100 pb-2">
              <h5 class="font-bold text-slate-900 text-sm flex items-center space-x-2">
                <i data-lucide="sparkles" class="w-4 h-4 text-purple-700"></i>
                <span>คำศัพท์สำคัญ 10 คำ (10 Core Vocabulary Words in Context)</span>
              </h5>
              <span class="text-[11px] text-purple-800 font-medium bg-purple-50 px-2 py-0.5 rounded-md">ปรากฏครบทั้ง 10 คำในบทอ่าน + ตัวอย่างประโยคใหม่</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <!-- Vocab 1: Perseverance -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-purple-900">1. Perseverance</span>
                    <span class="text-[9px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">Para 3</span>
                  </div>
                  <span class="text-[10px] text-slate-500 block font-mono">/ˌpɜː.sɪˈvɪə.rəns/ <em>(n.)</em></span>
                  <p class="text-[11px] text-slate-800 font-medium mt-1">ความเพียรพยายาม ความบากบั่น</p>
                </div>
                <div class="p-2 bg-purple-50/70 rounded-lg text-[10px] text-purple-950 border border-purple-100 leading-snug">
                  <strong>Ex:</strong> Through continuous perseverance, Sarah became fluent in English after two years of daily practice.
                </div>
              </div>

              <!-- Vocab 2: Arrogant -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-purple-900">2. Arrogant</span>
                    <span class="text-[9px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">Para 1</span>
                  </div>
                  <span class="text-[10px] text-slate-500 block font-mono">/ˈær.ə.ɡənt/ <em>(adj.)</em></span>
                  <p class="text-[11px] text-slate-800 font-medium mt-1">หยิ่งยโส อวดดี หลงตัวเอง</p>
                </div>
                <div class="p-2 bg-purple-50/70 rounded-lg text-[10px] text-purple-950 border border-purple-100 leading-snug">
                  <strong>Ex:</strong> The arrogant player ignored his coach's advice, which directly caused the team's defeat.
                </div>
              </div>

              <!-- Vocab 3: Boastful -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-purple-900">3. Boastful</span>
                    <span class="text-[9px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">Para 1</span>
                  </div>
                  <span class="text-[10px] text-slate-500 block font-mono">/ˈbəʊst.fəl/ <em>(adj.)</em></span>
                  <p class="text-[11px] text-slate-800 font-medium mt-1">ขี้คุย โอ้อวด ชอบพูดอวดตัว</p>
                </div>
                <div class="p-2 bg-purple-50/70 rounded-lg text-[10px] text-purple-950 border border-purple-100 leading-snug">
                  <strong>Ex:</strong> Nobody enjoyed talking to the boastful student because he always bragged about his exam scores.
                </div>
              </div>

              <!-- Vocab 4: Complacent -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-purple-900">4. Complacent</span>
                    <span class="text-[9px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">Para 2</span>
                  </div>
                  <span class="text-[10px] text-slate-500 block font-mono">/kəmˈpleɪ.sənt/ <em>(adj.)</em></span>
                  <p class="text-[11px] text-slate-800 font-medium mt-1">ชะล่าใจ พึงพอใจจนประมาท</p>
                </div>
                <div class="p-2 bg-purple-50/70 rounded-lg text-[10px] text-purple-950 border border-purple-100 leading-snug">
                  <strong>Ex:</strong> We must never become complacent after midterm success; finals require equal hard work.
                </div>
              </div>

              <!-- Vocab 5: Determination -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-purple-900">5. Determination</span>
                    <span class="text-[9px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">Para 3</span>
                  </div>
                  <span class="text-[10px] text-slate-500 block font-mono">/dɪˌtɜː.mɪˈneɪ.ʃən/ <em>(n.)</em></span>
                  <p class="text-[11px] text-slate-800 font-medium mt-1">ความมุ่งมั่น ความตั้งใจเด็ดเดี่ยว</p>
                </div>
                <div class="p-2 bg-purple-50/70 rounded-lg text-[10px] text-purple-950 border border-purple-100 leading-snug">
                  <strong>Ex:</strong> Despite working two jobs, Ken completed his bachelor degree through sheer determination.
                </div>
              </div>

              <!-- Vocab 6: Ridiculing -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-purple-900">6. Ridiculing</span>
                    <span class="text-[9px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">Para 1</span>
                  </div>
                  <span class="text-[10px] text-slate-500 block font-mono">/ˈrɪd.ɪ.kjuːl.ɪŋ/ <em>(v./part.)</em></span>
                  <p class="text-[11px] text-slate-800 font-medium mt-1">เยาะเย้ย ถากถาง ล้อเลียน</p>
                </div>
                <div class="p-2 bg-purple-50/70 rounded-lg text-[10px] text-purple-950 border border-purple-100 leading-snug">
                  <strong>Ex:</strong> Ridiculing classmates who make speaking mistakes creates a hostile learning environment.
                </div>
              </div>

              <!-- Vocab 7: Steadfast -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-purple-900">7. Steadfast</span>
                    <span class="text-[9px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">Para 3</span>
                  </div>
                  <span class="text-[10px] text-slate-500 block font-mono">/ˈsted.fɑːst/ <em>(adj.)</em></span>
                  <p class="text-[11px] text-slate-800 font-medium mt-1">มั่นคง แน่วแน่ ไม่เปลี่ยนแปลง</p>
                </div>
                <div class="p-2 bg-purple-50/70 rounded-lg text-[10px] text-purple-950 border border-purple-100 leading-snug">
                  <strong>Ex:</strong> Her steadfast loyalty to her study group ensured that all members passed their exams.
                </div>
              </div>

              <!-- Vocab 8: Outpace -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-purple-900">8. Outpace</span>
                    <span class="text-[9px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">Para 1</span>
                  </div>
                  <span class="text-[10px] text-slate-500 block font-mono">/ˌaʊtˈpeɪs/ <em>(v.)</em></span>
                  <p class="text-[11px] text-slate-800 font-medium mt-1">วิ่งแซง ก้าวหน้าเร็วกว่า</p>
                </div>
                <div class="p-2 bg-purple-50/70 rounded-lg text-[10px] text-purple-950 border border-purple-100 leading-snug">
                  <strong>Ex:</strong> Demand for skilled bilingual graduates will quickly outpace the supply of job applicants.
                </div>
              </div>

              <!-- Vocab 9: Humility -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-purple-900">9. Humility</span>
                    <span class="text-[9px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">Para 4</span>
                  </div>
                  <span class="text-[10px] text-slate-500 block font-mono">/hjuːˈmɪl.ə.ti/ <em>(n.)</em></span>
                  <p class="text-[11px] text-slate-800 font-medium mt-1">ความถ่อมตน ความอ่อนน้อม</p>
                </div>
                <div class="p-2 bg-purple-50/70 rounded-lg text-[10px] text-purple-950 border border-purple-100 leading-snug">
                  <strong>Ex:</strong> Great leaders listen to constructive criticism with genuine humility and respect.
                </div>
              </div>

              <!-- Vocab 10: Triumph -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-purple-900">10. Triumph</span>
                    <span class="text-[9px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">Para 3</span>
                  </div>
                  <span class="text-[10px] text-slate-500 block font-mono">/ˈtraɪ.əmf/ <em>(n./v.)</em></span>
                  <p class="text-[11px] text-slate-800 font-medium mt-1">ชัยชนะ ความสำเร็จอันยิ่งใหญ่</p>
                </div>
                <div class="p-2 bg-purple-50/70 rounded-lg text-[10px] text-purple-950 border border-purple-100 leading-snug">
                  <strong>Ex:</strong> Overcoming stage fright to present her research was a major personal triumph.
                </div>
              </div>
            </div>
          </div>

          <!-- 3. Prediction Clues Breakdown (Before vs. After Reading) -->
          <div class="p-4 sm:p-5 bg-gradient-to-br from-purple-50/90 via-pink-50/60 to-indigo-50/90 border border-purple-200 rounded-2xl space-y-4">
            <div class="flex items-center justify-between">
              <strong class="font-bold text-purple-950 flex items-center space-x-2 text-sm">
                <i data-lucide="compass" class="w-4 h-4 text-purple-700"></i>
                <span>การวิเคราะห์เบาะแสการคาดเดา: ขั้นตอนก่อนอ่าน vs หลังอ่าน (Before & After Reading Flow)</span>
              </strong>
              <span class="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">Active Inquiring Method</span>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Before Reading Stage -->
              <div class="p-4 bg-white/95 rounded-xl border border-purple-200 shadow-xs space-y-2.5">
                <div class="flex items-center space-x-2 text-purple-900 font-bold text-xs pb-1.5 border-b border-purple-100">
                  <span class="w-5 h-5 rounded-full bg-purple-700 text-white flex items-center justify-center text-[10px]">1</span>
                  <span>BEFORE READING (เบาะแสและการคาดเดาก่อนอ่าน)</span>
                </div>
                <ul class="text-[11px] text-slate-700 space-y-2 pl-1 leading-relaxed">
                  <li>
                    <strong class="text-purple-900">• Title Clue:</strong> ชื่อเรื่อง <em>"The Tortoise and the Hare"</em> ชี้ชัดว่าเป็นการแข่งขันระหว่างสัตว์ที่วิ่งเร็วที่สุดกับสัตว์ที่เดินช้าที่สุด
                  </li>
                  <li>
                    <strong class="text-purple-900">• Vocab Clue:</strong> พบคำคู่ตรงข้ามอย่าง <em>boastful, arrogant, complacent</em> (ฝ่ายเร็ว) คู่กับ <em>steadfast, perseverance, determination</em> (ฝ่ายช้า)
                  </li>
                  <li>
                    <strong class="text-pink-700 font-semibold">• Prediction Hypothesis:</strong> คาดเดาว่าฝ่ายที่วิ่งเร็วจะประมาทหรือหลงตัวเองจนพ่ายแพ้ ส่วนฝ่ายที่ช้าแต่มุ่งมั่นจะคว้าชัยชนะในตอนท้าย
                  </li>
                </ul>
              </div>

              <!-- After Reading Stage -->
              <div class="p-4 bg-white/95 rounded-xl border border-purple-200 shadow-xs space-y-2.5">
                <div class="flex items-center space-x-2 text-emerald-900 font-bold text-xs pb-1.5 border-b border-emerald-100">
                  <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">2</span>
                  <span>AFTER READING (การตรวจสอบและยืนยันผลหลังอ่าน)</span>
                </div>
                <ul class="text-[11px] text-slate-700 space-y-2 pl-1 leading-relaxed">
                  <li>
                    <strong class="text-emerald-800">• Verification 1:</strong> ยืนยันถูกต้อง! ทั้งสองตัวละครท้าแข่งวิ่ง 5 ไมล์ โดยกระต่ายออกตัวนำลิ่วแต่ไปแวะนอนหลับใต้ต้นไม้เพราะความชะล่าใจ
                  </li>
                  <li>
                    <strong class="text-emerald-800">• Verification 2:</strong> ยืนยันถูกต้อง 100%! เต่าเดินอย่างสม่ำเสมอจนเข้าเส้นชัยก่อน และกระต่ายเรียนรู้ความถ่อมตนในตอนจบ
                  </li>
                  <li>
                    <strong class="text-emerald-800 font-semibold">• Learning Impact:</strong> การคาดเดาช่วยสร้าง "จุดโฟกัส (Reading Purpose)" ทำให้สายตารอจับตาดูพฤติกรรมความผิดพลาดของกระต่าย และจับใจความสำคัญได้ทันทีโดยไม่ต้องอ่านทวนซ้ำ
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 4. Reflection & Critical Analysis Questions (Bridge into Practice) -->
          <div class="p-4 sm:p-5 bg-white rounded-2xl border border-purple-200 shadow-xs space-y-3">
            <div class="flex items-center space-x-2 text-slate-900 font-bold text-sm">
              <i data-lucide="help-circle" class="w-4 h-4 text-purple-700"></i>
              <span>คำถามชวนคิดเพื่อวิเคราะห์เชิงลึก (Reflection & Analytical Inquiry Questions)</span>
            </div>
            <p class="text-xs text-slate-600">
              ลองตอบคำถามวิเคราะห์ 3 ข้อนี้ในใจ เพื่อเชื่อมโยงทฤษฎี Main Idea สู่การทำแบบฝึกหัดจริงในหน้า Practice:
            </p>

            <div class="space-y-2.5 text-xs">
              <!-- Question 1 -->
              <div class="p-3 bg-purple-50/70 rounded-xl border border-purple-100 space-y-1">
                <p class="font-bold text-purple-950">
                  1. "If the stated moral sentence at the end of paragraph 3 were removed, could you still identify the Main Idea? Why and how?"
                </p>
                <p class="text-[11px] text-slate-600 pl-2 border-l-2 border-purple-400">
                  💡 <strong>แนวคิดวิเคราะห์:</strong> หาได้แน่นอน โดยใช้วิธี <em>Implied Main Idea (ใจความสำคัญโดยนัย)</em> จากการเปรียบเทียบการกระทำและผลลัพธ์ของ 2 ตัวละคร: เต่าไม่หยุดเดิน (Perseverance) $\rightarrow$ ชนะ ส่วนกระต่ายหลับ (Complacency) $\rightarrow$ แพ้ แล้วสรุปเป็นประโยคด้วยถ้อยคำของตนเอง
                </p>
              </div>

              <!-- Question 2 -->
              <div class="p-3 bg-pink-50/70 rounded-xl border border-pink-100 space-y-1">
                <p class="font-bold text-pink-950">
                  2. "Which paragraph best demonstrates the Hare's arrogance through physical action rather than descriptive adjectives?"
                </p>
                <p class="text-[11px] text-slate-600 pl-2 border-l-2 border-pink-400">
                  💡 <strong>แนวคิดวิเคราะห์:</strong> ย่อหน้าที่ 2 — การที่กระต่ายตัดสินใจล้มตัวลงนอนหลับใต้ต้นไม้โอ๊กอย่างสบายใจระหว่างการแข่งขัน คือการกระทำ (Action) ที่สะท้อนความประมาทและดูถูกคู่แข่งได้อย่างทรงพลังที่สุด ยิ่งกว่าคำบรรยายใดๆ
                </p>
              </div>

              <!-- Question 3 -->
              <div class="p-3 bg-amber-50/70 rounded-xl border border-amber-100 space-y-1">
                <p class="font-bold text-amber-950">
                  3. "How does paragraph 4 (the Hare's reaction of humility) deepen our understanding of the Main Idea compared to just stopping at the finish line?"
                </p>
                <p class="text-[11px] text-slate-600 pl-2 border-l-2 border-amber-400">
                  💡 <strong>แนวคิดวิเคราะห์:</strong> ย่อหน้าที่ 4 แสดงการเติบโตของตัวละคร (Character Growth) ทำให้เห็นว่าคติธรรมเรื่องความเพียรและความถ่อมตนเป็นความจริงที่ทรงพลัง แม้แต่ผู้พ่ายแพ้ก็ยอมรับและปรับปรุงตัว ทำให้บทเรียนนี้มีความหมายลึกซึ้งและสมบูรณ์แบบ
                </p>
              </div>
            </div>
          </div>

          <!-- Bottom Navigation Buttons -->
          <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4 border-t border-purple-100">
            <button onclick="app.selectActivityStep('learn')" class="w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center">
              ⬅ Back: Learn (ทฤษฎีใจความสำคัญ)
            </button>
            <button onclick="app.selectActivityStep('practice')" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-1.5 shadow-md">
              <span>Next Step: Practice (แบบฝึกหัดพร้อมเฉลย)</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        </div>`,

        practice: `<div class="space-y-6">
          <div class="flex items-center justify-between border-b border-purple-100 pb-3">
            <div>
              <h4 class="text-lg font-bold text-slate-900 flex items-center space-x-2">
                <i data-lucide="help-circle" class="w-5 h-5 text-purple-700"></i>
                <span>Guided Practice: แบบฝึกหัดทบทวนความเข้าใจ</span>
              </h4>
              <p class="text-xs text-slate-500 mt-0.5">ฝึกระบุ Main Idea, Topic Sentence, รายละเอียดสนับสนุน และคำศัพท์ พร้อมตรวจเฉลยทันที</p>
            </div>
            <span class="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">4 Questions</span>
          </div>

          <!-- Question 1 -->
          <div class="p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800">Question 1 • Main Idea</span>
              <span class="text-[11px] text-slate-400 font-semibold">1 pt</span>
            </div>
            <h5 class="text-sm font-bold text-slate-900">What is the central Main Idea of "The Tortoise and the Hare"?</h5>
            <div class="space-y-2">
              <button onclick="app.submitPracticeAnswer(0, 1, encodeURIComponent('ข้อนี้เป็นเพียงรายละเอียดปลีกย่อย ไม่ใช่ใจความสำคัญของเรื่องทั้งหมด'))" class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-purple-50/50 transition text-xs font-medium flex items-center space-x-3 cursor-pointer">
                <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">A</span>
                <span>The Hare took a comfortable nap under a shady oak tree.</span>
              </button>
              <button onclick="app.submitPracticeAnswer(1, 1, encodeURIComponent('ถูกต้อง! ประโยคนี้สรุปแก่นของเรื่องว่าความพากเพียรและสม่ำเสมอจะเอาชนะความหยิ่งยโสและความประมาทได้อย่างแท้จริง'))" class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-purple-50/50 transition text-xs font-medium flex items-center space-x-3 cursor-pointer">
                <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">B</span>
                <span>Steady perseverance and humble consistency will consistently triumph over careless arrogance and complacent talent.</span>
              </button>
              <button onclick="app.submitPracticeAnswer(2, 1, encodeURIComponent('ข้อนี้กว้างเกินไป (Too Broad) และไม่ได้ระบุข้อคิดหลักของเรื่อง'))" class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-purple-50/50 transition text-xs font-medium flex items-center space-x-3 cursor-pointer">
                <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">C</span>
                <span>Forest animals enjoy competing in five-mile cross-country footraces.</span>
              </button>
            </div>
          </div>

          <!-- Question 2 -->
          <div class="p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-pink-100 text-pink-800">Question 2 • Topic Sentence</span>
              <span class="text-[11px] text-slate-400 font-semibold">1 pt</span>
            </div>
            <h5 class="text-sm font-bold text-slate-900">Where is the stated moral and concluding Main Idea located in the final paragraph?</h5>
            <div class="space-y-2">
              <button onclick="app.submitPracticeAnswer(0, 0, encodeURIComponent('ถูกต้อง! ประโยคสุดท้ายของเรื่องทำหน้าที่เป็น Concluding Topic Sentence ที่ระบุคติธรรมและใจความสำคัญไว้อย่างชัดเจน'))" class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-purple-50/50 transition text-xs font-medium flex items-center space-x-3 cursor-pointer">
                <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">A</span>
                <span>At the very end of the paragraph as a summarizing concluding statement.</span>
              </button>
              <button onclick="app.submitPracticeAnswer(1, 0, encodeURIComponent('ในย่อหน้าสุดท้าย ประโยคเปิดเป็นเพียงการเล่าการเดินของเต่า ยังไม่ใช่ประโยคสรุปใจความสำคัญ'))" class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-purple-50/50 transition text-xs font-medium flex items-center space-x-3 cursor-pointer">
                <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">B</span>
                <span>In the first sentence only.</span>
              </button>
              <button onclick="app.submitPracticeAnswer(2, 0, encodeURIComponent('เรื่องนี้ระบุ Main Idea ไว้อย่างชัดเจน (Stated Main Idea) ในประโยคสรุปท้าย ไม่ได้ซ่อนไว้'))" class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-purple-50/50 transition text-xs font-medium flex items-center space-x-3 cursor-pointer">
                <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">C</span>
                <span>It is not stated anywhere in the text.</span>
              </button>
            </div>
          </div>

          <!-- Question 3 -->
          <div class="p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">Question 3 • Supporting Detail</span>
              <span class="text-[11px] text-slate-400 font-semibold">1 pt</span>
            </div>
            <h5 class="text-sm font-bold text-slate-900">Which of the following is a Supporting Detail (รายละเอียดสนับสนุน) and NOT the Main Idea?</h5>
            <div class="space-y-2">
              <button onclick="app.submitPracticeAnswer(0, 1, encodeURIComponent('ประโยคนี้คือ Main Idea ของเรื่อง ไม่ใช่ Supporting Detail'))" class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-purple-50/50 transition text-xs font-medium flex items-center space-x-3 cursor-pointer">
                <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">A</span>
                <span>Perseverance and humility triumph over arrogant complacency.</span>
              </button>
              <button onclick="app.submitPracticeAnswer(1, 1, encodeURIComponent('ถูกต้อง! การที่นกฮูก (wise Owl) ได้รับเลือกให้เป็นผู้วางเส้นทางวิ่งแข่ง เป็นเพียงรายละเอียดสนับสนุนเหตุการณ์ ไม่ใช่ใจความสำคัญ'))" class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-purple-50/50 transition text-xs font-medium flex items-center space-x-3 cursor-pointer">
                <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">B</span>
                <span>The wise Owl was selected to map the course and mark the finish line.</span>
              </button>
              <button onclick="app.submitPracticeAnswer(2, 1, encodeURIComponent('ประโยคนี้สื่อถึงข้อคิดหลักของการแข่งขัน'))" class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-purple-50/50 transition text-xs font-medium flex items-center space-x-3 cursor-pointer">
                <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">C</span>
                <span>Consistency and determination lead to lasting achievement.</span>
              </button>
            </div>
          </div>

          <!-- Question 4 -->
          <div class="p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Question 4 • Vocabulary in Context</span>
              <span class="text-[11px] text-slate-400 font-semibold">1 pt</span>
            </div>
            <h5 class="text-sm font-bold text-slate-900">Complete the sentence: "The Hare was so ______ that he believed victory was guaranteed, so he fell asleep."</h5>
            <div class="space-y-2">
              <button onclick="app.submitPracticeAnswer(0, 2, encodeURIComponent('humble แปลว่า ถ่อมตน ซึ่งตรงข้ามกับนิสัยของกระต่าย'))" class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-purple-50/50 transition text-xs font-medium flex items-center space-x-3 cursor-pointer">
                <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">A</span>
                <span>humble (ถ่อมตน)</span>
              </button>
              <button onclick="app.submitPracticeAnswer(1, 2, encodeURIComponent('steadfast แปลว่า มั่นคงแน่วแน่ ซึ่งเป็นคุณลักษณะของเต่า'))" class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-purple-50/50 transition text-xs font-medium flex items-center space-x-3 cursor-pointer">
                <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">B</span>
                <span>steadfast (มั่นคงแน่วแน่)</span>
              </button>
              <button onclick="app.submitPracticeAnswer(2, 2, encodeURIComponent('ถูกต้อง! complacent หมายถึง ชะล่าใจ หรือพึงพอใจในตนเองจนประมาทเลินเล่อ ซึ่งเป็นสาเหตุที่กระต่ายไปนอนหลับจนแพ้การแข่งขัน'))" class="w-full text-left p-3.5 rounded-xl border border-purple-200 hover:border-purple-600 hover:bg-purple-50/50 transition text-xs font-medium flex items-center space-x-3 cursor-pointer">
                <span class="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-[10px] shrink-0">C</span>
                <span>complacent (ชะล่าใจ / ประมาท)</span>
              </button>
            </div>
          </div>

          <!-- Bottom Finish Buttons -->
          <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4">
            <button onclick="app.selectActivityStep('example')" class="w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center">
              ⬅ Back: Example
            </button>
            <button onclick="app.selectActivityStep('overview')" class="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-1.5 shadow-md">
              <i data-lucide="check-check" class="w-4 h-4"></i>
              <span>Review Overview ↺</span>
            </button>
          </div>
        </div>`
      }
    },
{
      id: 2,
      code: "UNIT-02",
      title: "Supporting Details & Idea Relationships",
      thaiTitle: "รายละเอียดสนับสนุนและความสัมพันธ์ของความคิด",
      scope: "Major/minor details, cause and effect, compare and contrast, sequence, guided reading, review",
      description: "Analyze major vs minor details, cause-and-effect signals, and logical contrast relationships.",
      cefr: "A2",
      stages: {
        preReading: {
          title: "Pre-Reading Stage",
          topics: [
            {
              id: "u2-pre-1",
              title: "Identifying Signal Words",
              thaiTitle: "การระบุคำสัญญาณบ่งชี้ความสัมพันธ์",
              steps: {
                overview: "Authors use transition words like 'firstly', 'because', and 'however' to connect ideas.",
                learn: "Categorize signal words into addition, contrast, and cause-and-effect before analyzing the passage.",
                passage: "Healthy study habits boost academic performance. For example, taking short breaks prevents mental fatigue. In addition, reviewing notes daily strengthens memory retention.",
                audioText: "Healthy study habits boost academic performance. For example, taking short breaks prevents mental fatigue. In addition, reviewing notes daily strengthens memory retention.",
                example: "'For example' introduces an illustration; 'In addition' introduces another supporting point.",
                practice: {
                  question: "Which transition word indicates a contrast between two ideas?",
                  options: ["Furthermore", "In contrast", "Consequently", "For instance"],
                  answer: 1,
                  explanation: "'In contrast' clearly signals an opposing or differing concept."
                },
                quiz: {
                  question: "What is the function of the phrase 'For example' in the passage?",
                  options: ["To state the opposite", "To provide a supporting detail", "To conclude the article", "To introduce a question"],
                  answer: 1,
                  explanation: "It introduces a concrete instance supporting the main idea."
                }
              }
            }
          ]
        },
        whileReading: {
          title: "While-Reading Stage",
          topics: [
            {
              id: "u2-while-1",
              title: "Distinguishing Major vs. Minor Details",
              thaiTitle: "การแยกแยะรายละเอียดหลักและรายละเอียดรอง",
              steps: {
                overview: "Major details explain the main idea directly, while minor details provide specific examples or stats.",
                learn: "Look for broad supporting arguments (major) followed by names, dates, or measurements (minor).",
                passage: "Sleep deprivation impairs cognitive function in three ways. First, it reduces attention span. Studies show tired students lose focus after just 15 minutes. Second, it disrupts emotional balance.",
                audioText: "Sleep deprivation impairs cognitive function in three ways. First, it reduces attention span. Studies show tired students lose focus after just 15 minutes. Second, it disrupts emotional balance.",
                example: "Major detail: 'First, it reduces attention span.' Minor detail: 'Studies show tired students lose focus after just 15 minutes.'",
                practice: {
                  question: "In the passage, 'Studies show tired students lose focus after 15 minutes' is a:",
                  options: ["Main idea", "Minor supporting detail", "Major topic sentence", "Concluding statement"],
                  answer: 1,
                  explanation: "It gives specific evidence supporting the major point about reduced attention span."
                },
                quiz: {
                  question: "Which question helps identify a major detail?",
                  options: ["What font size is used?", "Why or how does this explain the main idea?", "Who published the book?", "How many pages are there?"],
                  answer: 1,
                  explanation: "Major details directly explain or demonstrate why the main idea is true."
                }
              }
            }
          ]
        },
        postReading: {
          title: "Post-Reading Stage",
          topics: [
            {
              id: "u2-post-1",
              title: "Mapping Cause and Effect",
              thaiTitle: "การทำผังความสัมพันธ์เหตุและผล",
              steps: {
                overview: "Organize text relationships using graphic organizers and cause-effect chains.",
                learn: "Identify the cause (why something happened) and the effect (the outcome or result).",
                passage: "Due to unprecedented global temperatures, polar ice sheets are melting rapidly. Consequently, sea levels are rising worldwide, threatening coastal communities.",
                audioText: "Due to unprecedented global temperatures, polar ice sheets are melting rapidly. Consequently, sea levels are rising worldwide, threatening coastal communities.",
                example: "Cause: Global temperatures rising -> Effect: Polar ice melts -> Secondary Effect: Sea levels rise.",
                practice: {
                  question: "In the passage, what is the cause of sea levels rising?",
                  options: ["Coastal communities moving", "Polar ice sheets melting", "Building sea walls", "Cold winter storms"],
                  answer: 1,
                  explanation: "The melting ice sheets directly contribute to rising sea levels."
                },
                quiz: {
                  question: "Which signal word indicates a result or effect in the passage?",
                  options: ["Due to", "Consequently", "Threatening", "Global"],
                  answer: 1,
                  explanation: "'Consequently' introduces the logical consequence or effect."
                }
              }
            }
          ]
        }
      }
    },
    {
      id: 3,
      code: "UNIT-03",
      title: "Vocabulary in Context & Sentence Meaning",
      thaiTitle: "คำศัพท์ในบริบทและความหมายของประโยค",
      scope: "Word meaning from context, sentence meaning, vocabulary practice, reading application",
      description: "Use context clues (definition, synonym, antonym, example) to decode unfamiliar English words.",
      cefr: "A2-B1",
      stages: {
        preReading: {
          title: "Pre-Reading Stage",
          topics: [
            {
              id: "u3-pre-1",
              title: "Types of Context Clues",
              thaiTitle: "ประเภทของบริบทช่วยบอกความหมาย",
              steps: {
                overview: "Good readers use surrounding sentences to infer the meaning of unfamiliar vocabulary.",
                learn: "There are four primary clue types: Definition, Synonym, Antonym, and Example.",
                passage: "The entomologist, a scientist who studies insects, discovered three new beetle species in Khao Yai National Park.",
                audioText: "The entomologist, a scientist who studies insects, discovered three new beetle species in Khao Yai National Park.",
                example: "'a scientist who studies insects' is a direct definition clue between commas.",
                practice: {
                  question: "What type of context clue is used in: 'Unlike his gregarious brother, Mark was shy and quiet'?",
                  options: ["Definition clue", "Antonym / Contrast clue", "Example clue", "Synonym clue"],
                  answer: 1,
                  explanation: "'Unlike' and 'shy and quiet' provide an antonym contrast to define 'gregarious' as sociable."
                },
                quiz: {
                  question: "What does 'entomologist' mean in the passage?",
                  options: ["A tree specialist", "A scientist who studies insects", "A park ranger", "A mountain climber"],
                  answer: 1,
                  explanation: "The text defines it explicitly: 'a scientist who studies insects'."
                }
              }
            }
          ]
        },
        whileReading: {
          title: "While-Reading Stage",
          topics: [
            {
              id: "u3-while-1",
              title: "Decoding Words in Passages",
              thaiTitle: "การถอดรหัสความหมายคำศัพท์ในบทอ่าน",
              steps: {
                overview: "Read past the unknown word and look at adjacent clauses to clarify meaning.",
                learn: "Substitute candidate meanings into the sentence to check if the sentence makes logical sense.",
                passage: "The arid desert landscape made farming nearly impossible, as the extremely dry soil received less than 50 millimeters of rain each year.",
                audioText: "The arid desert landscape made farming nearly impossible, as the extremely dry soil received less than 50 millimeters of rain each year.",
                example: "Clue 'extremely dry soil received less than 50 millimeters of rain' reveals that 'arid' means very dry.",
                practice: {
                  question: "What does 'arid' mean based on the passage context?",
                  options: ["Fertile and green", "Extremely dry and barren", "Cold and snowy", "Mountainous"],
                  answer: 1,
                  explanation: "The text explains 'extremely dry soil received less than 50 millimeters of rain'."
                },
                quiz: {
                  question: "Which strategy is most effective when encountering an unfamiliar word while reading?",
                  options: [
                    "Stop reading immediately and give up",
                    "Analyze surrounding words and tone for clues",
                    "Skip the entire paragraph",
                    "Pronounce it backwards"
                  ],
                  answer: 1,
                  explanation: "Analyzing context clues is the proven academic reading strategy."
                }
              }
            }
          ]
        },
        postReading: {
          title: "Post-Reading Stage",
          topics: [
            {
              id: "u3-post-1",
              title: "Vocabulary Consolidation & Application",
              thaiTitle: "การทบทวนและประยุกต์ใช้คำศัพท์",
              steps: {
                overview: "Solidify learned words by creating personal definitions and using them in original sentences.",
                learn: "Record new vocabulary in your personal reading log with part of speech and context sentence.",
                passage: "By expanding lexical range, EFL learners at Buriram Rajabhat University communicate more accurately in academic discourse.",
                audioText: "By expanding lexical range, EFL learners at Buriram Rajabhat University communicate more accurately in academic discourse.",
                example: "'Lexical range' refers to vocabulary breadth; 'Discourse' means formal written or spoken communication.",
                practice: {
                  question: "In academic reading, 'lexical range' most closely refers to:",
                  options: ["Grammar rules", "Vocabulary breadth and variety", "Reading speed", "Spelling accuracy"],
                  answer: 1,
                  explanation: "'Lexical' relates to the words or vocabulary of a language."
                },
                quiz: {
                  question: "Why is keeping a reading vocabulary log beneficial?",
                  options: ["It wastes study time", "It reinforces retention through active recall", "It replaces the textbook", "It slows down graduation"],
                  answer: 1,
                  explanation: "Active logging and reviewing reinforces long-term memory."
                }
              }
            }
          ]
        }
      }
    },
    {
      id: 4,
      code: "UNIT-04",
      title: "References, Connectives & Text Organization",
      thaiTitle: "คำอ้างอิง คำเชื่อม และโครงสร้างข้อความ",
      scope: "Reference words, connectives, paragraph organization, text structure practice",
      description: "Identify pronoun references (it, they, which) and logical transitions (however, furthermore, as a result).",
      cefr: "B1",
      stages: {
        preReading: {
          title: "Pre-Reading Stage",
          topics: [
            {
              id: "u4-pre-1",
              title: "Pronoun Antecedents & References",
              thaiTitle: "คำสรรพนามและสิ่งที่ถูกอ้างถึง",
              steps: {
                overview: "Pronouns like 'it', 'they', 'this', and 'these' refer back to nouns mentioned earlier.",
                learn: "Find the antecedent by matching number (singular/plural) and meaning in the previous sentence.",
                passage: "Online learning platforms provide flexible schedules for university students. They enable learners to study at their own pace.",
                audioText: "Online learning platforms provide flexible schedules for university students. They enable learners to study at their own pace.",
                example: "'They' is plural and refers back to 'Online learning platforms'.",
                practice: {
                  question: "In the sentence above, what does the pronoun 'They' refer to?",
                  options: ["Flexible schedules", "University students", "Online learning platforms", "Instructors"],
                  answer: 2,
                  explanation: "'They' refers to 'Online learning platforms', which perform the action of enabling learners."
                },
                quiz: {
                  question: "Why do authors use pronouns instead of repeating full nouns?",
                  options: ["To confuse readers", "To improve text flow and avoid repetition", "To make texts longer", "To hide information"],
                  answer: 1,
                  explanation: "Pronouns maintain coherence and smooth sentence flow without tedious repetition."
                }
              }
            }
          ]
        },
        whileReading: {
          title: "While-Reading Stage",
          topics: [
            {
              id: "u4-while-1",
              title: "Tracking Text Organizational Patterns",
              thaiTitle: "การติดตามรูปแบบโครงสร้างข้อความ",
              steps: {
                overview: "Texts follow organizational patterns such as Chronological, Compare-Contrast, and Problem-Solution.",
                learn: "Notice headings and transition words to predict where the author's argument is heading.",
                passage: "Traffic congestion in city centers creates severe air pollution. To address this challenge, urban planners introduced electric bus lanes and bicycle paths.",
                audioText: "Traffic congestion in city centers creates severe air pollution. To address this challenge, urban planners introduced electric bus lanes and bicycle paths.",
                example: "Pattern: Problem ('Traffic congestion... air pollution') -> Solution ('introduced electric bus lanes...').",
                practice: {
                  question: "What organizational pattern does the passage follow?",
                  options: ["Chronological / Timeline", "Problem and Solution", "Classification / Division", "Narrative Story"],
                  answer: 1,
                  explanation: "The text identifies a problem (traffic & pollution) and offers concrete solutions (bus lanes, bike paths)."
                },
                quiz: {
                  question: "Which transition signals a Problem-Solution pattern?",
                  options: ["To solve this issue", "Meanwhile", "In the 18th century", "Similarly"],
                  answer: 0,
                  explanation: "'To solve this issue' directly introduces the proposed solution."
                }
              }
            }
          ]
        },
        postReading: {
          title: "Post-Reading Stage",
          topics: [
            {
              id: "u4-post-1",
              title: "Constructing Cohesive Summaries",
              thaiTitle: "การเขียนสรุปความแบบเชื่อมโยง",
              steps: {
                overview: "Use appropriate transition words to write concise, logical summary paragraphs.",
                learn: "Connect the problem, key interventions, and outcomes with words like 'therefore' and 'consequently'.",
                passage: "Effective text organization guides readers through logical steps, resulting in deeper comprehension and better analytical retention.",
                audioText: "Effective text organization guides readers through logical steps, resulting in deeper comprehension and better analytical retention.",
                example: "Organization -> Logical steps -> Deeper comprehension.",
                practice: {
                  question: "Which connective best shows a cause-and-effect conclusion?",
                  options: ["However", "As a result", "On the other hand", "Initially"],
                  answer: 1,
                  explanation: "'As a result' indicates that an effect or outcome follows."
                },
                quiz: {
                  question: "What is the primary benefit of recognizing text structure?",
                  options: ["It improves reading comprehension and retention", "It memorizes word spellings", "It counts syllables", "It writes code"],
                  answer: 0,
                  explanation: "Recognizing organization helps readers process and recall information systematically."
                }
              }
            }
          ]
        }
      }
    },
    {
      id: 5,
      code: "UNIT-05",
      title: "Text Interpretation & Paraphrased Meaning",
      thaiTitle: "การตีความและความหมายที่เรียบเรียงใหม่",
      scope: "Interpretation, paraphrased meaning, understanding meaning across sentences, guided practice",
      description: "Recognize valid paraphrases, infer author's tone, and distinguish fact from opinion.",
      cefr: "B1-B2",
      stages: {
        preReading: {
          title: "Pre-Reading Stage",
          topics: [
            {
              id: "u5-pre-1",
              title: "What is a Valid Paraphrase?",
              thaiTitle: "การถอดความที่ถูกต้องคืออะไร",
              steps: {
                overview: "Paraphrasing means restating an author's ideas in your own words while retaining the original meaning.",
                learn: "Change sentence structure and use accurate synonyms without altering the factual core.",
                passage: "The university library will be closed this weekend due to electrical maintenance.",
                audioText: "The university library will be closed this weekend due to electrical maintenance.",
                example: "Valid Paraphrase: 'Students cannot access the campus library on Saturday and Sunday because of power repairs.'",
                practice: {
                  question: "Which sentence is an accurate paraphrase of 'Smoking significantly increases the risk of heart disease'?",
                  options: [
                    "Heart disease causes people to smoke cigarettes",
                    "Tobacco use notably raises the chances of cardiovascular illness",
                    "Smoking cures heart problems in young adults",
                    "Doctors encourage regular smoking"
                  ],
                  answer: 1,
                  explanation: "It uses accurate synonyms (tobacco use, cardiovascular illness) while preserving the original meaning."
                },
                quiz: {
                  question: "What is a common mistake when paraphrasing?",
                  options: [
                    "Changing sentence structure",
                    "Altering the original author's meaning or inserting personal bias",
                    "Using synonyms",
                    "Keeping the summary concise"
                  ],
                  answer: 1,
                  explanation: "A paraphrase must never change the original meaning or invent facts."
                }
              }
            }
          ]
        },
        whileReading: {
          title: "While-Reading Stage",
          topics: [
            {
              id: "u5-while-1",
              title: "Distinguishing Fact vs. Opinion",
              thaiTitle: "การแยกแยะข้อเท็จจริงและข้อคิดเห็น",
              steps: {
                overview: "Facts can be objectively proven; opinions reflect personal feelings, beliefs, or subjective judgments.",
                learn: "Look for value words like 'best', 'should', 'beautiful', or 'terrible' that signal opinions.",
                passage: "Buriram Rajabhat University was established in 1971. In my view, it is the most inspiring institution in northeastern Thailand.",
                audioText: "Buriram Rajabhat University was established in 1971. In my view, it is the most inspiring institution in northeastern Thailand.",
                example: "Fact: 'established in 1971' (historical record). Opinion: 'most inspiring institution' ('In my view').",
                practice: {
                  question: "Which of the following statements is a FACT?",
                  options: [
                    "English is the most enjoyable subject to study",
                    "Thailand's capital city is Bangkok",
                    "Online tests are much better than paper tests",
                    "Everyone should read two novels per week"
                  ],
                  answer: 1,
                  explanation: "'Thailand's capital city is Bangkok' can be verified objectively as an established geographical fact."
                },
                quiz: {
                  question: "Which phrase in a text signals that an OPINION is being stated?",
                  options: ["According to official statistics", "In the author's opinion", "The research data shows", "Confirmed by measurements"],
                  answer: 1,
                  explanation: "'In the author's opinion' explicitly announces a subjective viewpoint."
                }
              }
            }
          ]
        },
        postReading: {
          title: "Post-Reading Stage",
          topics: [
            {
              id: "u5-post-1",
              title: "Inferring Author Tone & Perspective",
              thaiTitle: "การอนุมานน้ำเสียงและมุมมองของผู้เขียน",
              steps: {
                overview: "Determine whether the author's tone is objective, critical, enthusiastic, or neutral.",
                learn: "Examine word choice (connotation) and whether balanced counterarguments are presented.",
                passage: "While artificial intelligence offers intriguing opportunities, educators must cautiously evaluate its impact on independent student reasoning.",
                audioText: "While artificial intelligence offers intriguing opportunities, educators must cautiously evaluate its impact on independent student reasoning.",
                example: "Tone: Cautious and analytical (balanced use of 'intriguing opportunities' and 'cautiously evaluate').",
                practice: {
                  question: "What is the author's tone toward AI in education in the passage?",
                  options: ["Aggressively hostile", "Cautious and reflective", "Careless and disinterested", "Purely comical"],
                  answer: 1,
                  explanation: "The author advocates for careful evaluation rather than blind excitement or rejection."
                },
                quiz: {
                  question: "What evidence reveals the tone of a reading passage?",
                  options: ["The date of publication", "Word choices and stylistic attitudes", "The length of sentences", "The paper color"],
                  answer: 1,
                  explanation: "Connotative diction and stylistic nuances reveal the author's attitude."
                }
              }
            }
          ]
        }
      }
    },
    {
      id: 6,
      code: "UNIT-06",
      title: "Integrated Reading Practice",
      thaiTitle: "การฝึกอ่านแบบบูรณาการ",
      scope: "Integrated reading passages, review of multiple skills, overall reading practice, progress check",
      description: "Synthesize all strategies across multi-paragraph academic and workplace texts.",
      cefr: "B2",
      stages: {
        preReading: {
          title: "Pre-Reading Stage",
          topics: [
            {
              id: "u6-pre-1",
              title: "Multi-Strategy Synthesis",
              thaiTitle: "การสังเคราะห์กลยุทธ์การอ่านแบบองค์รวม",
              steps: {
                overview: "Skim and preview multi-paragraph academic texts before doing in-depth reading.",
                learn: "Combine title preview, subheadings, and first-paragraph topic sentences to build a mental map.",
                passage: "Renewable energy adoption across Southeast Asia has surged over the past decade. Solar and wind installations now account for substantial energy production.",
                audioText: "Renewable energy adoption across Southeast Asia has surged over the past decade. Solar and wind installations now account for substantial energy production.",
                example: "Pre-reading preview shows the text covers regional adoption and economic benefits of clean energy.",
                practice: {
                  question: "When approaching a multi-page academic article, what should you do first?",
                  options: [
                    "Read every single word from start to finish without stopping",
                    "Preview title, abstract, headings, and concluding summary",
                    "Translate every word with a dictionary",
                    "Memorize the bibliography"
                  ],
                  answer: 1,
                  explanation: "Previewing the abstract, headings, and summary provides a roadmap for comprehension."
                },
                quiz: {
                  question: "What is the goal of synthesis in integrated reading?",
                  options: ["Combining multiple ideas to form a comprehensive understanding", "Ignoring difficult vocabulary", "Memorizing sentence lengths", "Copying word-for-word"],
                  answer: 0,
                  explanation: "Synthesis combines diverse elements into a coherent whole."
                }
              }
            }
          ]
        },
        whileReading: {
          title: "While-Reading Stage",
          topics: [
            {
              id: "u6-while-1",
              title: "Critical Analysis of Academic Passages",
              thaiTitle: "การวิเคราะห์เชิงวิพากษ์ในบทอ่านเชิงวิชาการ",
              steps: {
                overview: "Track supporting evidence, verify author credentials, and evaluate data points.",
                learn: "Underline thesis statements, circle transition markers, and annotate margins with key takeaways.",
                passage: "A longitudinal study by the Ministry of Education highlighted that university students engaged in interactive reading software improved reading scores by 28% over 16 weeks.",
                audioText: "A longitudinal study by the Ministry of Education highlighted that university students engaged in interactive reading software improved reading scores by 28% over 16 weeks.",
                example: "Claim: Software improves reading. Evidence: 28% score increase over 16 weeks in a longitudinal study.",
                practice: {
                  question: "What quantitative evidence is provided to support the effectiveness of reading software?",
                  options: ["A 28% score improvement over 16 weeks", "A 50% decrease in study hours", "Only qualitative interviews", "Zero measured change"],
                  answer: 0,
                  explanation: "The text specifies a 28% increase over a 16-week period."
                },
                quiz: {
                  question: "Why is evaluating evidence crucial in academic reading?",
                  options: [
                    "To determine whether conclusions are well-supported and valid",
                    "To find typos in the text",
                    "To reduce textbook costs",
                    "To avoid taking exams"
                  ],
                  answer: 0,
                  explanation: "Critical evaluation ensures the claims made by authors are empirically sound."
                }
              }
            }
          ]
        },
        postReading: {
          title: "Post-Reading Stage",
          topics: [
            {
              id: "u6-post-1",
              title: "Synthesis, Evaluation & Reflection",
              thaiTitle: "การสังเคราะห์ ประเมินค่า และสะท้อนคิด",
              steps: {
                overview: "Synthesize insights across passages and articulate reasoned conclusions.",
                learn: "Formulate a final reflection connecting reading content with your EFL learning goals.",
                passage: "By mastering explicit reading strategies, EFL learners develop lifelong analytical competence, opening doors to academic and professional success.",
                audioText: "By mastering explicit reading strategies, EFL learners develop lifelong analytical competence, opening doors to academic and professional success.",
                example: "Final Synthesis: Systematic strategy instruction fosters autonomous, proficient readers.",
                practice: {
                  question: "What is the ultimate objective of learning reading strategies at university?",
                  options: [
                    "To become an autonomous, analytical, and proficient lifelong reader",
                    "To finish tests in five minutes",
                    "To avoid reading books completely",
                    "To translate every English sentence literally into Thai"
                  ],
                  answer: 0,
                  explanation: "Strategies empower students to become independent and competent lifelong readers."
                },
                quiz: {
                  question: "Which habit most reliably maintains high reading proficiency over time?",
                  options: ["Consistent, deliberate reading practice across diverse genres", "Reading once a year before exams", "Memorizing word lists without reading", "Guessing all quiz answers"],
                  answer: 0,
                  explanation: "Consistent daily engagement with diverse authentic materials builds fluency."
                }
              }
            }
          ]
        }
      }
    }
  ],

  // Module 2: Reading Strategies (6 Units, each with an 8-Step Learning Sequence)
  // Aligned with Research Specification: Reading Strategies Module - Content Scope
  strategies: [
    {
      id: "strat-u1",
      unitNumber: 1,
      title: "Previewing & Predicting",
      thaiTitle: "การคาดเดาและการอ่านล่วงหน้า",
      scope: "Previewing text features (titles, headings, pictures, bold words, typographical layout), predicting content, verifying predictions",
      cefr: "A1-A2",
      icon: "layout",
      steps: [
        {
          stepNum: 1,
          title: "What is the strategy?",
          thaiTitle: "คืออะไร?",
          icon: "help-circle",
          content: "Previewing is examining structural text features—such as titles, headings, subheadings, photographs, diagrams, captions, bold words, and typographical layout—before reading the entire text. Predicting is using these previewed clues combined with your prior background knowledge (Schema) to anticipate the topic, main ideas, and author's direction before and during reading.",
          thaiExplanation: "การสำรวจข้อความ (Previewing) คือการสังเกตองค์ประกอบโครงสร้างของบทอ่าน เช่น หัวข้อหลัก หัวข้อย่อย รูปภาพ คำอธิบายภาพ ตัวหนา และการจัดหน้าก่อนเริ่มอ่านจริง ส่วนการคาดเดา (Predicting) คือการนำเบาะแสที่ได้มาประเมินร่วมกับความรู้เดิม (Schema) เพื่อคาดการณ์ใจความสำคัญและทิศทางของเนื้อหา"
        },
        {
          stepNum: 2,
          title: "Why use it?",
          thaiTitle: "ทำไมต้องใช้?",
          icon: "lightbulb",
          content: "In Unit 1 (Strategy Objectives), previewing and predicting:\n1. Activates Background Knowledge (Schema): Prepares your mind to absorb academic terminology smoothly.\n2. Establishes a Clear Reading Purpose: Keeps your attention focused on verifying whether your predictions are accurate.\n3. Reduces Reading Anxiety: Makes long or dense academic texts feel familiar and manageable.\n4. Transforms Passive Readers into Active Inquirers: Significantly improves reading speed, comprehension accuracy, and test performance.",
          thaiExplanation: "กระตุ้นความรู้เดิม (Schema) กำหนดเป้าหมายการอ่าน ลดความวิตกกังวลเมื่อเจอบทความวิชาการภาษาอังกฤษ และเปลี่ยนผู้อ่านจากผู้รับสารแบบตั้งรับมาเป็นผู้อ่านเชิงรุกที่มีความมั่นใจ"
        },
        {
          stepNum: 3,
          title: "When do I use it?",
          thaiTitle: "ใช้เมื่อไหร่?",
          icon: "calendar",
          content: "Use previewing and predicting before reading any narrative story, fable, academic text, literature, or comprehension passage such as 'The Tortoise and the Hare', news features, and before taking reading comprehension quizzes or exams.",
          thaiExplanation: "ใช้ก่อนเริ่มอ่านนิทาน วรรณกรรม บทความวิชาการ ตำราเรียน และก่อนทำแบบทดสอบการอ่านทุกครั้ง"
        },
        {
          stepNum: 4,
          title: "How do I use it?",
          thaiTitle: "ใช้อย่างไร?",
          icon: "settings",
          content: "Follow the 5-Step Execution Protocol for Unit 1:",
          checklist: [
            "Step 1: Read the Main Title & Subheadings to determine the overarching academic domain.",
            "Step 2: Inspect Visuals & Captions: Examine photographs, charts, diagrams, and read visual captions.",
            "Step 3: Scan Typographical Signals: Notice bold vocabulary, italicized terminology, and bulleted lists.",
            "Step 4: Read First & Last Sentences: Glance at opening topic sentences and concluding summary statements.",
            "Step 5: Formulate a Prediction Statement: Explicitly state: 'Based on the title and visual clues, I predict this text will explain...'"
          ]
        },
        {
          stepNum: 5,
          title: "Worked Example",
          thaiTitle: "ตัวอย่างการใช้",
          icon: "file-text",
          content: "Headline Previewed: 'The Tortoise and the Hare: The Classic Race of Perseverance'.\nSubheading: 'How Steady Determination Overcomes Careless Natural Talent'.\nVisual: Illustration showing the boastful Hare taking a nap under an oak tree while the persistent Tortoise walks steadily ahead.",
          annotated: `Strategy Analysis (Unit 1 Model):
• [Clue 1 (Title)]: Identifies the classic fable characters and theme of perseverance.
• [Clue 2 (Subheading)]: Contrasts steady determination with careless natural talent.
• [Clue 3 (Visual)]: Shows the Hare sleeping while the Tortoise presses onward.
• [Formulated Prediction]: 'This story illustrates how the patient Tortoise defeats the proud, overconfident Hare who becomes careless during the race.'
• [Post-Reading Verification]: 100% Confirmed upon reading the passage!`,
          takeaway: "Previewing text features unlocks the central conflict and theme in under 15 seconds without dictionary dependency."
        },
        {
          stepNum: 6,
          title: "Guided Practice",
          thaiTitle: "ฝึกปฏิบัติ",
          icon: "user-check",
          content: "Headline: 'The Crow and the Pitcher: Ingenuity and Problem-Solving in Nature'.\nIllustration: A thirsty crow dropping small pebbles one by one into a tall, narrow water pitcher to raise the water level.",
          question: "Based on previewing the title and illustration, what is the most logical prediction regarding the passage's central focus?",
          options: [
            "How a clever bird uses patience and problem-solving tools to overcome a survival challenge",
            "A historical timeline of glass bottle manufacturing in ancient Egypt",
            "Instructions on how to catch crows using bird traps in cornfields",
            "A scientific study of rainfall patterns during winter storms"
          ],
          answer: 0,
          explanation: "The title 'The Crow and the Pitcher' paired with the visual of dropping pebbles into a jar predicts a story about ingenuity, clever problem-solving, and patience."
        },
        {
          stepNum: 7,
          title: "Apply to a Short Text",
          thaiTitle: "นำไปใช้กับบทอ่านสั้น",
          icon: "book-open",
          passageTitle: "The Wisdom of Aesop: Lessons on Perseverance",
          passage: "Fables have endured across centuries because they deliver profound truths through simple, memorable narratives. In the story of the Tortoise and the Hare, readers observe that natural speed and talent are easily squandered without discipline and humility. The humble Tortoise achieves victory not because he was physically superior, but because he remained steadfast and committed to his goal. Ultimately, steady perseverance will consistently outshine arrogant complacency.",
          audioText: "Fables have endured across centuries because they deliver profound truths through simple, memorable narratives. In the story of the Tortoise and the Hare, readers observe that natural speed and talent are easily squandered without discipline and humility. The humble Tortoise achieves victory not because he was physically superior, but because he remained steadfast and committed to his goal. Ultimately, steady perseverance will consistently outshine arrogant complacency.",
          taskQuestion: "After previewing the title and reading the text, verify your prediction: What enables the Tortoise to overcome the Hare's natural athletic advantage?",
          taskAnswer: "Steadfast perseverance, discipline, and humility, while the Hare squanders his natural speed through overconfidence and lack of discipline."
        },
        {
          stepNum: 8,
          title: "Strategy Quiz",
          thaiTitle: "แบบทดสอบ",
          icon: "trophy",
          question: "According to Strategy Performance Indicators in Unit 1, what should an active reader do immediately after previewing text features and formulating a prediction?",
          options: [
            "Read the text actively to verify whether the initial predictions were accurate or need adjustment",
            "Stop reading completely because previewing already answers all comprehension questions",
            "Erase the predictions and ignore the passage information",
            "Memorize the dictionary definitions of every single word in alphabetical order"
          ],
          answer: 0,
          explanation: "Predicting is an ongoing, active inquiry process: readers formulate predictions during pre-reading and actively test and verify them while reading the text."
        }
      ]
    },
    {
      id: "strat-u2",
      unitNumber: 2,
      title: "Skimming & Scanning",
      thaiTitle: "การอ่านแบบกวาดสายตาและค้นหาข้อมูล",
      scope: "Skimming for main ideas, scanning for specific information",
      cefr: "A2-B1",
      icon: "eye",
      steps: [
        {
          stepNum: 1,
          title: "What is the strategy?",
          thaiTitle: "คืออะไร?",
          icon: "help-circle",
          content: "Skimming is rapid reading (3-4 times normal speed) to grasp the overall gist or main idea without reading every word. Scanning is darting your eyes rapidly across text to locate a specific piece of information such as a date, name, number, or keyword.",
          thaiExplanation: "Skimming คือการอ่านอย่างรวดเร็วเพื่อจับใจความรวม (Gist) ส่วน Scanning คือการกวาดสายตาเพื่อค้นหาข้อมูลเฉพาะเจาะจง เช่น ตัวเลข วันที่ หรือคำสำคัญ"
        },
        {
          stepNum: 2,
          title: "Why use it?",
          thaiTitle: "ทำไมต้องใช้?",
          icon: "lightbulb",
          content: "Academic texts are often dense. Skimming saves valuable time by helping you evaluate whether a source is relevant. Scanning lets you retrieve answers and verify empirical facts instantly without re-reading entire chapters.",
          thaiExplanation: "ช่วยประหยัดเวลาอย่างมาก ช่วยคัดกรองบทความที่เกี่ยวข้อง และค้นหาคำตอบในข้อสอบหรือเอกสารวิชาการได้อย่างรวดเร็ว"
        },
        {
          stepNum: 3,
          title: "When do I use it?",
          thaiTitle: "ใช้เมื่อไหร่?",
          icon: "calendar",
          content: "Use skimming when previewing library books, reviewing articles for exams, or surveying chapters. Use scanning when looking up flight schedules, dictionary entries, statistical tables, or specific test questions.",
          thaiExplanation: "ใช้ Skimming เมื่อต้องการดูภาพรวมของบทเรียนหรือบทความยาวๆ และใช้ Scanning เมื่อต้องการหาคำตอบเฉพาะข้อในข้อสอบ"
        },
        {
          stepNum: 4,
          title: "How do I use it?",
          thaiTitle: "ใช้อย่างไร?",
          icon: "settings",
          content: "Techniques for Skimming and Scanning:",
          checklist: [
            "Skim: Read the title, opening paragraph, topic sentences, and conclusion.",
            "Skim: Let your eyes glide smoothly down the center of each page.",
            "Scan: Fix the exact target word, date, or number clearly in your mind.",
            "Scan: Sweep eyes in a zigzag or vertical pattern looking only for that target pattern."
          ]
        },
        {
          stepNum: 5,
          title: "Worked Example",
          thaiTitle: "ตัวอย่างการใช้",
          icon: "file-text",
          content: "Snippet: 'Buriram Rajabhat University was originally established in 1971 as Buriram Teachers College before achieving full comprehensive university status.'",
          annotated: "Scanning Task: Find the founding year. Target: 4-digit number starting with 19 -> Located: '1971' in 2 seconds.",
          takeaway: "Targeted scanning bypasses unnecessary text to pinpoint data instantly."
        },
        {
          stepNum: 6,
          title: "Guided Practice",
          thaiTitle: "ฝึกปฏิบัติ",
          icon: "user-check",
          content: "Scan the sentence for the room number: 'The English Reading Strategy Workshop will convene in Hall 304 at 10:00 AM on Wednesday.'",
          question: "Where will the workshop take place?",
          options: ["Hall 304", "Wednesday", "10:00 AM", "Main Library"],
          answer: 0,
          explanation: "Scanning for 'Hall' or room digits directly points your eyes to 'Hall 304'."
        },
        {
          stepNum: 7,
          title: "Apply to a Short Text",
          thaiTitle: "นำไปใช้กับบทอ่านสั้น",
          icon: "book-open",
          passageTitle: "Smart Irrigation in Isan Agriculture",
          passage: "Agricultural researchers in Buriram installed 120 IoT humidity sensors across experimental rice paddies. These automated drip irrigation networks reduced freshwater consumption by 45% while boosting harvest yields by 22% during the 2025 dry season.",
          audioText: "Agricultural researchers in Buriram installed 120 IoT humidity sensors across experimental rice paddies. These automated drip irrigation networks reduced freshwater consumption by 45% while boosting harvest yields by 22% during the 2025 dry season.",
          taskQuestion: "Scan for the percentage reduction in freshwater consumption.",
          taskAnswer: "45%"
        },
        {
          stepNum: 8,
          title: "Strategy Quiz",
          thaiTitle: "แบบทดสอบ",
          icon: "trophy",
          question: "Which reading task is best accomplished through skimming?",
          options: [
            "Getting a quick general understanding of a chapter before a lecture",
            "Looking up an emergency telephone number in a phone book",
            "Checking the spelling of an author's middle name",
            "Counting how many commas exist on page 40"
          ],
          answer: 0,
          explanation: "Skimming is designed for quickly understanding the main theme or gist of an entire chapter."
        }
      ]
    },
    {
      id: "strat-u3",
      unitNumber: 3,
      title: "Using Context Clues",
      thaiTitle: "การใช้คำศัพท์ในบริบท",
      scope: "Using context clues to find word meaning and sentence meaning",
      cefr: "B1",
      icon: "key",
      steps: [
        {
          stepNum: 1,
          title: "What is the strategy?",
          thaiTitle: "คืออะไร?",
          icon: "help-circle",
          content: "Using context clues means unlocking the meaning of unfamiliar words and sentences by analyzing surrounding words, synonyms, antonyms, definitions, and punctuation clues in the same paragraph.",
          thaiExplanation: "การใช้บริบท (Context Clues) คือการคาดเดาความหมายของคำศัพท์ที่ไม่คุ้นเคย โดยอาศัยคำแวดล้อม คำเหมือน คำตรงข้าม คำจำกัดความ หรือเครื่องหมายวรรคตอน"
        },
        {
          stepNum: 2,
          title: "Why use it?",
          thaiTitle: "ทำไมต้องใช้?",
          icon: "lightbulb",
          content: "Stopping to consult a dictionary for every unknown word disrupts your reading flow and impairs comprehension. Context clues allow continuous, fluent comprehension while organically expanding vocabulary.",
          thaiExplanation: "ช่วยให้อ่านบทความได้อย่างต่อเนื่อง ไม่ต้องหยุดเปิดพจนานุกรมทุกครั้งที่เจอคำยาก และช่วยจดจำคำศัพท์ผ่านบริบทจริง"
        },
        {
          stepNum: 3,
          title: "When do I use it?",
          thaiTitle: "ใช้เมื่อไหร่?",
          icon: "calendar",
          content: "Use context clues whenever you meet unfamiliar technical jargon, polysemous words, descriptive adjectives, or during timed examinations where dictionaries are prohibited.",
          thaiExplanation: "ใช้เมื่อเจอคำศัพท์ที่ไม่รู้จักในบทความวิชาการ หรือในห้องสอบที่ไม่อนุญาตให้นำพจนานุกรมเข้าไป"
        },
        {
          stepNum: 4,
          title: "How do I use it?",
          thaiTitle: "ใช้อย่างไร?",
          icon: "settings",
          content: "Examine these 4 major clue types:",
          checklist: [
            "Definition / Restatement clues: look for 'is defined as', commas, dashes, or parentheses.",
            "Synonym clues: nearby words with similar meanings (e.g., 'or', 'that is').",
            "Antonym / Contrast clues: signaled by 'unlike', 'however', 'in contrast', 'although'.",
            "Example clues: illustrative samples introduced by 'such as', 'for instance', 'including'."
          ]
        },
        {
          stepNum: 5,
          title: "Worked Example",
          thaiTitle: "ตัวอย่างการใช้",
          icon: "file-text",
          content: "Sentence: 'The lecturer was famous for his brevity; in fact, his presentations never exceeded fifteen minutes.'",
          annotated: "Clue Analysis: 'never exceeded fifteen minutes' clarifies that 'brevity' means shortness of duration or concise expression.",
          takeaway: "Explanatory semicolons and follow-up clauses frequently reveal unknown word meanings."
        },
        {
          stepNum: 6,
          title: "Guided Practice",
          thaiTitle: "ฝึกปฏิบัติ",
          icon: "user-check",
          content: "Passage: 'Unlike her gregarious brother who loved attending crowded parties, Maria was shy, quiet, and preferred solitary evenings.'",
          question: "Based on the contrast clue 'Unlike', what does 'gregarious' mean?",
          options: [
            "Sociable and fond of company",
            "Afraid of the dark",
            "Weak and sickly",
            "Selfish and greedy"
          ],
          answer: 0,
          explanation: "'Unlike' sets up a direct contrast with Maria who is 'shy, quiet, and solitary', meaning gregarious means sociable."
        },
        {
          stepNum: 7,
          title: "Apply to a Short Text",
          thaiTitle: "นำไปใช้กับบทอ่านสั้น",
          icon: "book-open",
          passageTitle: "Architectural Conservation at Phanom Rung",
          passage: "Conservators working at Phanom Rung Historical Park must be meticulous in their documentation. They record every minute crack and weathered sandstone fissure with millimeter precision to prevent irreversible structural damage.",
          audioText: "Conservators working at Phanom Rung Historical Park must be meticulous in their documentation. They record every minute crack and weathered sandstone fissure with millimeter precision to prevent irreversible structural damage.",
          taskQuestion: "What does 'meticulous' mean according to context clues?",
          taskAnswer: "Extremely careful, precise, and attentive to every detail."
        },
        {
          stepNum: 8,
          title: "Strategy Quiz",
          thaiTitle: "แบบทดสอบ",
          icon: "trophy",
          question: "In the sentence 'The desert climate is arid, meaning it receives less than ten inches of rain per year', which clue type defines 'arid'?",
          options: [
            "Definition clue signaled by 'meaning'",
            "Antonym contrast clue",
            "Sound imitation clue",
            "Rhyme scheme clue"
          ],
          answer: 0,
          explanation: "The word 'meaning' directly introduces an explicit definition of 'arid' as receiving less than 10 inches of rain."
        }
      ]
    },
    {
      id: "strat-u4",
      unitNumber: 4,
      title: "Identifying Text Organization",
      thaiTitle: "การระบุโครงสร้างข้อความ",
      scope: "Recognizing text structure, reference words, connectives, and organization",
      cefr: "B1-B2",
      icon: "git-merge",
      steps: [
        {
          stepNum: 1,
          title: "What is the strategy?",
          thaiTitle: "คืออะไร?",
          icon: "help-circle",
          content: "Identifying text organization involves recognizing how an author arranges ideas (cause-effect, compare-contrast, chronological sequence, problem-solution) and tracking reference pronouns and logical connectives that bind the text together.",
          thaiExplanation: "การระบุโครงสร้างข้อความ คือการวิเคราะห์รูปแบบการจัดระเบียบความคิดของผู้เขียน เช่น เหตุและผล เปรียบเทียบ ลำดับเวลา และการเชื่อมโยงคำอ้างอิง (Pronoun References)"
        },
        {
          stepNum: 2,
          title: "Why use it?",
          thaiTitle: "ทำไมต้องใช้?",
          icon: "lightbulb",
          content: "Recognizing structural patterns uncovers the author's train of thought. It helps you anticipate upcoming points, construct accurate outlines, and retain complex academic arguments with high fidelity.",
          thaiExplanation: "ช่วยให้มองเห็นแผนผังความคิดของผู้เขียนอย่างชัดเจน สรุปประเด็นได้เป็นระบบ และจดจำเนื้อหาที่ซับซ้อนได้อย่างมีประสิทธิภาพ"
        },
        {
          stepNum: 3,
          title: "When do I use it?",
          thaiTitle: "ใช้เมื่อไหร่?",
          icon: "calendar",
          content: "Use this strategy when analyzing research papers, comparative essays, historical timelines, experimental procedures, and argumentative editorial texts.",
          thaiExplanation: "ใช้เมื่ออ่านบทความวิจัย เรียงความเปรียบเทียบ ขั้นตอนการทดลอง หรือบทความแสดงความคิดเห็นเชิงวิชาการ"
        },
        {
          stepNum: 4,
          title: "How do I use it?",
          thaiTitle: "ใช้อย่างไร?",
          icon: "settings",
          content: "Identify organizational signals and cohesive ties:",
          checklist: [
            "Look for transition words: 'Consequently', 'In contrast', 'First... Next... Finally', 'Therefore'.",
            "Trace reference pronouns ('they', 'it', 'these', 'this') back to their antecedents.",
            "Determine pattern: Cause-Effect, Comparison, Sequence, or Problem-Solution.",
            "Sketch a mini mental diagram of how the paragraphs connect."
          ]
        },
        {
          stepNum: 5,
          title: "Worked Example",
          thaiTitle: "ตัวอย่างการใช้",
          icon: "file-text",
          content: "Passage: 'Unlike traditional lectures where students passively listen, flipped classrooms demand active pre-class study. Consequently, class time is dedicated to collaborative problem-solving.'",
          annotated: "Structure: Comparison ('Unlike') combined with Cause-and-Effect ('Consequently'). Cohesive tie links student pre-study to collaborative classroom discussions.",
          takeaway: "Connective markers reveal both contrast and logical consequence simultaneously."
        },
        {
          stepNum: 6,
          title: "Guided Practice",
          thaiTitle: "ฝึกปฏิบัติ",
          icon: "user-check",
          content: "Passage: 'Severe deforestation leads to severe topsoil erosion. As a result, local farmers experience diminished crop harvests each rainy season.'",
          question: "What is the primary organizational pattern?",
          options: [
            "Cause and Effect",
            "Chronological Timeline",
            "Alphabetical Listing",
            "Classification by Color"
          ],
          answer: 0,
          explanation: "'Leads to' and 'As a result' are classic transition markers indicating cause and effect."
        },
        {
          stepNum: 7,
          title: "Apply to a Short Text",
          thaiTitle: "นำไปใช้กับบทอ่านสั้น",
          icon: "book-open",
          passageTitle: "Scientific Laboratory Protocol",
          passage: "First, sterilize all glass petri dishes in the autoclave at 121 degrees Celsius. Second, pour the nutrient agar solution evenly into each dish. Finally, inoculate the prepared agar with the bacterial sample and seal the plates hermetically.",
          audioText: "First, sterilize all glass petri dishes in the autoclave at 121 degrees Celsius. Second, pour the nutrient agar solution evenly into each dish. Finally, inoculate the prepared agar with the bacterial sample and seal the plates hermetically.",
          taskQuestion: "What organizational pattern does the author use here?",
          taskAnswer: "Chronological Sequence / Step-by-Step Process signaled by 'First', 'Second', and 'Finally'."
        },
        {
          stepNum: 8,
          title: "Strategy Quiz",
          thaiTitle: "แบบทดสอบ",
          icon: "trophy",
          question: "In the sentence 'Although the initial budget was limited, the research team achieved groundbreaking results', what relationship does 'Although' establish?",
          options: [
            "Contrast / Concession",
            "Cause and Effect",
            "Chronological Sequence",
            "Numerical Division"
          ],
          answer: 0,
          explanation: "'Although' introduces a concessive contrast between a limited budget and groundbreaking success."
        }
      ]
    },
    {
      id: "strat-u5",
      unitNumber: 5,
      title: "Making Inferences",
      thaiTitle: "การอนุมานความหมาย",
      scope: "Making Inferences, reading between the lines",
      cefr: "B2",
      icon: "sparkles",
      steps: [
        {
          stepNum: 1,
          title: "What is the strategy?",
          thaiTitle: "คืออะไร?",
          icon: "help-circle",
          content: "Making inferences is drawing logical deductions by connecting explicit textual clues with your own prior real-world knowledge ('reading between the lines') to uncover ideas that the author suggests but does not directly state.",
          thaiExplanation: "การอนุมาน (Making Inferences) คือการ 'อ่านระหว่างบรรทัด' เพื่อสรุปความหมายที่ผู้เขียนไม่ได้ระบุไว้ตรงๆ โดยนำหลักฐานในบทอ่านมาประมวลผลร่วมกับความรู้และประสบการณ์เดิม"
        },
        {
          stepNum: 2,
          title: "Why use it?",
          thaiTitle: "ทำไมต้องใช้?",
          icon: "lightbulb",
          content: "Authors rarely spell out every emotion, attitude, motive, or implication directly. Inferencing allows you to detect subtle sarcasm, underlying biases, author's tone, and unstated conclusions.",
          thaiExplanation: "ช่วยให้เข้าใจเจตนาที่แท้จริง อารมณ์ น้ำเสียง และทัศนคติของผู้เขียนที่ซ่อนอยู่ลึกกว่าแค่ตัวอักษรบนหน้ากระดาษ"
        },
        {
          stepNum: 3,
          title: "When do I use it?",
          thaiTitle: "ใช้เมื่อไหร่?",
          icon: "calendar",
          content: "Use inferencing when reading editorial columns, literary fiction, historical documents, character dialogues, and academic opinion analyses.",
          thaiExplanation: "ใช้เมื่ออ่านบทความวิเคราะห์ คอลัมน์ความคิดเห็น วรรณกรรม หรือบทอ่านที่ต้องวิเคราะห์น้ำเสียงของผู้เขียน"
        },
        {
          stepNum: 4,
          title: "How do I use it?",
          thaiTitle: "ใช้อย่างไร?",
          icon: "settings",
          content: "Apply the inference formula:",
          checklist: [
            "Step 1: Identify explicit text clues (what the words say).",
            "Step 2: Connect with prior knowledge (what you know about the world).",
            "Step 3: Formulate a logical inference (Text Evidence + Prior Knowledge = Valid Deduction).",
            "Step 4: Verify that your inference does not contradict any stated facts."
          ]
        },
        {
          stepNum: 5,
          title: "Worked Example",
          thaiTitle: "ตัวอย่างการใช้",
          icon: "file-text",
          content: "Text: 'Paula adjusted her thick woolen scarf, pulled her earmuffs tighter, and watched her breath form misty white clouds in the morning air.'",
          annotated: "Evidence: 'thick woolen scarf', 'earmuffs', 'breath forming misty clouds' + Prior Knowledge: People wear wool and breath condenses in near-freezing temperatures -> Logical Inference: The weather is extremely cold winter.",
          takeaway: "The author never uses the word 'cold' or 'winter', yet the setting is undeniable."
        },
        {
          stepNum: 6,
          title: "Guided Practice",
          thaiTitle: "ฝึกปฏิบัติ",
          icon: "user-check",
          content: "Passage: 'The student glanced repeatedly at the wall clock every twenty seconds while drumming his fingers on his blank examination booklet.'",
          question: "What can you logically infer about the student?",
          options: [
            "He is experiencing anxiety, pressure, or difficulty answering the exam",
            "He has finished the test early and is celebrating",
            "He is fast asleep in the library",
            "He is repairing the wall clock"
          ],
          answer: 0,
          explanation: "Repeated clock-watching combined with finger drumming and a blank booklet strongly indicates anxiety and struggle."
        },
        {
          stepNum: 7,
          title: "Apply to a Short Text",
          thaiTitle: "นำไปใช้กับบทอ่านสั้น",
          icon: "book-open",
          passageTitle: "Modern Library Transformations",
          passage: "At BRU's central library, towering dark wooden bookshelves have been replaced with glass-partitioned collaborative workspaces, high-speed WiFi charging pods, and digital presentation pods. Physical book borrow records declined by 30%, whereas digital journal downloads multiplied fivefold.",
          audioText: "At BRU's central library, towering dark wooden bookshelves have been replaced with glass-partitioned collaborative workspaces, high-speed WiFi charging pods, and digital presentation pods. Physical book borrow records declined by 30%, whereas digital journal downloads multiplied fivefold.",
          taskQuestion: "What can you infer about contemporary student study habits?",
          taskAnswer: "Students have shifted heavily from individual paper-based reading to collaborative digital research."
        },
        {
          stepNum: 8,
          title: "Strategy Quiz",
          thaiTitle: "แบบทดสอบ",
          icon: "trophy",
          question: "Which statement accurately describes a valid inference?",
          options: [
            "A logical deduction grounded in textual clues and reasonable world knowledge",
            "A wild guess without any evidence from the text",
            "A direct copy-paste of the first sentence of the text",
            "A translation of English vocabulary into Thai"
          ],
          answer: 0,
          explanation: "Inferences must always be grounded in textual evidence combined with logical deduction."
        }
      ]
    },
    {
      id: "strat-u6",
      unitNumber: 6,
      title: "Integrated Strategy Review",
      thaiTitle: "การทบทวนกลยุทธ์แบบบูรณาการ",
      scope: "Applying multiple strategies together",
      cefr: "B2",
      icon: "check-check",
      steps: [
        {
          stepNum: 1,
          title: "What is the strategy?",
          thaiTitle: "คืออะไร?",
          icon: "help-circle",
          content: "Integrated Strategy Review is the holistic orchestration of all essential reading strategies (Previewing, Predicting, Skimming, Scanning, Context Clues, Text Organization, Making Inferences, and Summarizing) across multi-stage reading tasks.",
          thaiExplanation: "การทบทวนกลยุทธ์แบบบูรณาการ คือการนำกลยุทธ์การอ่านทั้งหมดมาปรับใช้ร่วมกันอย่างเป็นระบบ ทั้งก่อนอ่าน ขณะอ่าน และหลังอ่าน เพื่อความเข้าใจบทอ่านระดับสูงอย่างแท้จริง"
        },
        {
          stepNum: 2,
          title: "Why use it?",
          thaiTitle: "ทำไมต้องใช้?",
          icon: "lightbulb",
          content: "Proficient academic readers do not rely on a single technique. Integrating strategies flexibly creates autonomous, self-monitoring readers who can tackle difficult research journals, thesis papers, and standardized examinations.",
          thaiExplanation: "ช่วยให้นักศึกษาสามารถอ่านบทความวิชาการที่ยากและซับซ้อนได้อย่างเป็นอิสระ มีความมั่นใจ และทำข้อสอบวัดระดับภาษาอังกฤษได้คะแนนสูงขึ้น"
        },
        {
          stepNum: 3,
          title: "When do I use it?",
          thaiTitle: "ใช้เมื่อไหร่?",
          icon: "calendar",
          content: "Use the integrated framework during term research projects, academic thesis readings, professional journal reviews, and university comprehensive exams.",
          thaiExplanation: "ใช้ในการค้นคว้างานวิจัย การอ่านเอกสารอ้างอิงสำหรับวิทยานิพนธ์ และการสอบวัดผลภาษาอังกฤษระดับมหาวิทยาลัย"
        },
        {
          stepNum: 4,
          title: "How do I use it?",
          thaiTitle: "ใช้อย่างไร?",
          icon: "settings",
          content: "Orchestrate across the 3-Stage Reading Framework:",
          checklist: [
            "Pre-Reading: Preview text features (Unit 1) and make active predictions.",
            "While-Reading: Skim for gist (Unit 2), scan for key data, use context clues (Unit 3), track text organization (Unit 4), and make critical inferences (Unit 5).",
            "Post-Reading: Synthesize main arguments, evaluate empirical evidence, and write a concise objective summary."
          ]
        },
        {
          stepNum: 5,
          title: "Worked Example",
          thaiTitle: "ตัวอย่างการใช้",
          icon: "file-text",
          content: "Complex Abstract: 'A 16-week intervention study at Buriram Rajabhat University examined explicit reading strategy training across 120 first-year English majors. Results indicated a 28% increase in standardized reading comprehension test scores.'",
          annotated: "Strategy Integration: Previewed title -> Scanned for sample size ('120') and duration ('16-week') -> Inferred strategy effectiveness -> Summarized: Structured strategy training significantly enhances EFL reading competence.",
          takeaway: "Combining strategies converts a 500-word dense report into actionable insights in seconds."
        },
        {
          stepNum: 6,
          title: "Guided Practice",
          thaiTitle: "ฝึกปฏิบัติ",
          icon: "user-check",
          content: "When reading an unfamiliar 10-page academic journal article, what sequence of integrated strategies is most effective?",
          question: "Which sequential approach demonstrates expert strategy integration?",
          options: [
            "Preview abstract/headings -> Skim main sections -> Read closely using context clues -> Summarize key takeaways",
            "Translate every word into Thai from page 1 to page 10 without previewing",
            "Read only the footnotes and ignore headings",
            "Memorize the bibliography citations first"
          ],
          answer: 0,
          explanation: "Expert readers preview and skim first to establish context, then read closely, and finish with summarization."
        },
        {
          stepNum: 7,
          title: "Apply to a Short Text",
          thaiTitle: "นำไปใช้กับบทอ่านสั้น",
          icon: "book-open",
          passageTitle: "Empowering Autonomous EFL Readers",
          passage: "Explicit reading strategy instruction empowers English as a Foreign Language learners by reducing reading anxiety, elevating self-efficacy, and equipping students with lifelong analytical tools. By systematically mastering previewing, predicting, text structure analysis, and critical summarization, university students achieve true cognitive autonomy.",
          audioText: "Explicit reading strategy instruction empowers English as a Foreign Language learners by reducing reading anxiety, elevating self-efficacy, and equipping students with lifelong analytical tools. By systematically mastering previewing, predicting, text structure analysis, and critical summarization, university students achieve true cognitive autonomy.",
          taskQuestion: "Synthesize the overarching conclusion of this passage in one sentence.",
          taskAnswer: "Explicit strategy instruction transforms EFL learners into confident, autonomous, and analytical lifelong readers."
        },
        {
          stepNum: 8,
          title: "Strategy Quiz",
          thaiTitle: "แบบทดสอบ",
          icon: "trophy",
          question: "What is the primary hallmark of an autonomous, strategic reader?",
          options: [
            "The ability to flexibly select and combine appropriate reading strategies based on the text and purpose",
            "Reading every document at exactly the same slow speed",
            "Refusing to preview text features before reading",
            "Relying exclusively on machine translation"
          ],
          answer: 0,
          explanation: "Autonomous readers flexibly orchestrate strategies according to their reading purpose and text complexity."
        }
      ]
    }
  ],

  // Practice Quizzes & Educational Games (Module: Practice & Quiz)
  practiceOptions: {
    games: [
      { id: "g1", title: "Word Matcher Challenge", description: "Match English reading terms with their Thai definitions in an interactive timed card match.", icon: "gamepad-2" },
      { id: "g2", title: "Speed Main Idea Race", description: "Pick the correct main idea sentence within 15 seconds to earn bonus points!", icon: "zap" }
    ],
    quizzes: [
      {
        id: "q1",
        code: "QUIZ 01",
        title: "Unit 1: Main Ideas + Strategy 1: Previewing & Predicting",
        thaiTitle: "แบบทดสอบรวม: Unit 1 (ใจความสำคัญ) + Strategy 1 (การคาดเดาและการอ่านล่วงหน้า)",
        unitRef: "Unit 1: Main Ideas",
        strategyRef: "Strategy 1: Previewing & Predicting",
        timeMinutes: 10,
        questionsCount: 5,
        passingScore: 70,
        passage: {
          title: "The Tortoise and the Hare: Lessons on Perseverance and Overconfidence",
          text: "A boastful Hare was constantly ridiculing a slow-moving Tortoise for his clumsy pace. Weary of the ceaseless teasing, the quiet Tortoise calmly challenged the swift Hare to a competitive footrace. Believing the challenge was a hilarious joke, the arrogant Hare accepted immediately. When the race commenced, the Hare dashed ahead with breathtaking speed, establishing an immense lead within minutes. Feeling completely confident of an effortless victory, the complacent Hare decided to take a relaxing nap beneath a shady oak tree. Meanwhile, the Tortoise never paused for a single second, pressing onward step by step under the blazing sun. When the arrogant Hare finally awoke and dashed frantically toward the finish line, he was astonished to see the persistent Tortoise crossing ahead of him to the triumphant cheers of all the forest animals. Steady determination and consistent effort often lead to unexpected success over careless natural talent.",
          audioText: "A boastful Hare was constantly ridiculing a slow-moving Tortoise for his clumsy pace. Weary of the ceaseless teasing, the quiet Tortoise calmly challenged the swift Hare to a competitive footrace. Believing the challenge was a hilarious joke, the arrogant Hare accepted immediately. When the race commenced, the Hare dashed ahead with breathtaking speed, establishing an immense lead within minutes. Feeling completely confident of an effortless victory, the complacent Hare decided to take a relaxing nap beneath a shady oak tree. Meanwhile, the Tortoise never paused for a single second, pressing onward step by step under the blazing sun. When the arrogant Hare finally awoke and dashed frantically toward the finish line, he was astonished to see the persistent Tortoise crossing ahead of him to the triumphant cheers of all the forest animals. Steady determination and consistent effort often lead to unexpected success over careless natural talent."
        },
        questions: [
          {
            id: 1,
            tag: "Module 2: Strategy 1 (Previewing)",
            question: "1. Before reading the full story, what previewing technique best reveals the central characters and conflict immediately?",
            options: [
              "Examining the title 'The Tortoise and the Hare: Lessons on Perseverance and Overconfidence'",
              "Counting how many verbs appear in the third sentence",
              "Reading only the punctuation marks in the last paragraph",
              "Translating every single adjective into another language"
            ],
            answer: 0,
            explanation: "Previewing the title immediately identifies the key characters and the contrasting themes (perseverance vs. overconfidence)."
          },
          {
            id: 2,
            tag: "Module 1: Unit 1 (Main Idea)",
            question: "2. What is the stated main idea of the fable as expressed in the concluding sentence?",
            options: [
              "Sleeping under oak trees is the best way to spend an afternoon",
              "Steady determination and consistent effort often lead to unexpected success over careless natural talent",
              "Fast animals always win every race without effort",
              "Running races during hot weather is strictly prohibited"
            ],
            answer: 1,
            explanation: "The final sentence explicitly states the core moral: steady determination and consistent effort overcome careless talent."
          },
          {
            id: 3,
            tag: "Module 2: Strategy 1 (Predicting)",
            question: "3. If an accompanying illustration showed the Hare sleeping peacefully while the Tortoise crept past the milestone, what prediction is confirmed?",
            options: [
              "The patient Tortoise will overtake the sleeping Hare and win the race",
              "The Hare decided to quit the race to become a doctor",
              "The Tortoise woke up the Hare so they could run together as friends",
              "A storm cancelled the race before anyone finished"
            ],
            answer: 0,
            explanation: "Visual clues of the sleeping Hare and advancing Tortoise confirm the prediction of the Tortoise taking the lead."
          },
          {
            id: 4,
            tag: "Module 1: Unit 1 (Topic Sentence)",
            question: "4. In the narrative paragraph describing the race, which sentence establishes the core controlling idea of persistence defeating talent?",
            options: [
              "The concluding sentence: 'Steady determination and consistent effort often lead to unexpected success over careless natural talent.'",
              "The opening phrase describing the teasing",
              "The middle detail about the oak tree having pleasant shade",
              "There is no topic sentence or main idea anywhere in the text"
            ],
            answer: 0,
            explanation: "The concluding sentence encapsulates the controlling idea and moral lesson that governs the entire narrative."
          },
          {
            id: 5,
            tag: "Integrated Skill (Unit 1 + Strategy 1)",
            question: "5. By combining previewing and predicting with main idea identification, how does an active reader benefit?",
            options: [
              "Saves reading time, anticipates plot outcomes, and grasps the core moral without unnecessary rereading",
              "Guarantees that words never have to be pronounced correctly",
              "Replaces the requirement to read any complete sentences",
              "Proves that stories should only be listened to as audio"
            ],
            answer: 0,
            explanation: "Previewing sets up expectations and mental schema, allowing readers to identify main ideas and themes with high speed and comprehension accuracy."
          }
        ]
      },
      {
        id: "q2",
        code: "QUIZ 02",
        title: "Unit 2: Supporting Details + Strategy 2: Skimming & Scanning",
        thaiTitle: "แบบทดสอบรวม: Unit 2 (รายละเอียดสนับสนุนและความสัมพันธ์ของความคิด) + Strategy 2 (การอ่านแบบกวาดสายตาและค้นหาข้อมูล)",
        unitRef: "Unit 2: Supporting Details & Idea Relationships",
        strategyRef: "Strategy 2: Skimming & Scanning",
        timeMinutes: 10,
        questionsCount: 5,
        passingScore: 70,
        passage: {
          title: "Smart Agriculture and IoT Irrigation in Buriram Province",
          text: "Modern agriculture in Buriram is undergoing a rapid technological transformation. Traditional farming often suffered from unpredictable rainfall patterns and seasonal water shortages. To address this persistent dilemma, local agricultural researchers introduced Internet of Things (IoT) soil moisture sensors across experimental jasmine rice paddies. These intelligent sensors automatically trigger drip irrigation only when soil humidity drops below 30%. As a result, participating farmers have increased crop yields by 25% while conserving over 1.2 million liters of water annually.",
          audioText: "Modern agriculture in Buriram is undergoing a rapid technological transformation. Traditional farming often suffered from unpredictable rainfall patterns and seasonal water shortages. To address this persistent dilemma, local agricultural researchers introduced Internet of Things (IoT) soil moisture sensors across experimental jasmine rice paddies. These intelligent sensors automatically trigger drip irrigation only when soil humidity drops below 30%. As a result, participating farmers have increased crop yields by 25% while conserving over 1.2 million liters of water annually."
        },
        questions: [
          {
            id: 1,
            tag: "Module 2: Strategy 2 (Skimming for Gist)",
            question: "1. When skimming the passage in 10 seconds, which parts should you focus on to grasp the general gist quickly?",
            options: [
              "The first sentence, keywords like 'IoT' and 'smart agriculture', and the final outcome sentence",
              "Every footnote and citation number",
              "Only the prepositions and conjunctions",
              "Counting how many letters are capitalized"
            ],
            answer: 0,
            explanation: "Skimming focuses on the opening topic sentence, major keywords, and concluding result to extract the gist."
          },
          {
            id: 2,
            tag: "Module 1: Unit 2 (Supporting Details)",
            question: "2. Which of the following is a specific factual supporting detail provided in the text?",
            options: [
              "Sensors automatically trigger drip irrigation when soil moisture drops below 30%",
              "Rice farming was completely abolished in Buriram",
              "Buriram has the highest rainfall in Southeast Asia",
              "IoT sensors are operated entirely by hand"
            ],
            answer: 0,
            explanation: "The text specifies that intelligent sensors automatically trigger drip irrigation when humidity falls below 30%."
          },
          {
            id: 3,
            tag: "Module 2: Strategy 2 (Scanning for Specific Information)",
            question: "3. Scan the text quickly to locate the exact percentage increase in crop yield achieved by the farmers.",
            options: [
              "25%",
              "40%",
              "30%",
              "10%"
            ],
            answer: 0,
            explanation: "Scanning quickly for the '%' symbol and the word 'crop yields' immediately pinpoints '25%'."
          },
          {
            id: 4,
            tag: "Module 1: Unit 2 (Idea Relationships: Cause & Effect)",
            question: "4. What is the cause-and-effect relationship established between soil moisture sensors and water conservation?",
            options: [
              "Sensors activate drip irrigation only when humidity drops below 30%, which directly results in saving 1.2 million liters of water annually",
              "Sensors increase rainfall across Buriram province",
              "Water shortages cause sensors to break down permanently",
              "Farmers stopped watering rice paddies altogether"
            ],
            answer: 0,
            explanation: "The text explains that targeted drip irrigation directly leads to conserving 1.2 million liters of water annually."
          },
          {
            id: 5,
            tag: "Integrated Skill (Unit 2 + Strategy 2)",
            question: "5. How does combining skimming and scanning with identifying supporting details enhance reading efficiency?",
            options: [
              "Skimming provides the overall framework so that specific supporting data points can be scanned and verified swiftly",
              "It prevents the reader from understanding the author's purpose",
              "It forces the reader to memorize the entire dictionary",
              "It eliminates the need to verify facts"
            ],
            answer: 0,
            explanation: "Skimming establishes context, allowing the reader to scan for and evaluate specific supporting evidence quickly."
          }
        ]
      },
      {
        id: "q3",
        code: "QUIZ 03",
        title: "Unit 3: Vocabulary in Context + Strategy 3: Using Context Clues",
        thaiTitle: "แบบทดสอบรวม: Unit 3 (คำศัพท์ในบริบทและความหมายของประโยค) + Strategy 3 (การใช้คำศัพท์ในบริบท)",
        unitRef: "Unit 3: Vocabulary in Context & Sentence Meaning",
        strategyRef: "Strategy 3: Using Context Clues",
        timeMinutes: 10,
        questionsCount: 5,
        passingScore: 70,
        passage: {
          title: "Preserving Ancient Khmer Architecture in Southern Isan",
          text: "Phanom Rung Historical Park stands as an imposing Khmer sanctuary atop an extinct volcano in Buriram. Constructed between the 10th and 13th centuries, the temple complex features intricate sandstone carvings that have endured centuries of weathering. In 1988, after extensive archaeological restoration, the site was officially opened to the public. Conservators remain vigilant, constantly monitoring stone decay caused by heavy monsoon humidity and environmental erosion to ensure the monument's longevity.",
          audioText: "Phanom Rung Historical Park stands as an imposing Khmer sanctuary atop an extinct volcano in Buriram. Constructed between the 10th and 13th centuries, the temple complex features intricate sandstone carvings that have endured centuries of weathering. In 1988, after extensive archaeological restoration, the site was officially opened to the public. Conservators remain vigilant, constantly monitoring stone decay caused by heavy monsoon humidity and environmental erosion to ensure the monument's longevity."
        },
        questions: [
          {
            id: 1,
            tag: "Module 2: Strategy 3 (Using Context Clues)",
            question: "1. Based on context clues in the opening sentence ('sanctuary atop an extinct volcano'), what is the meaning of the word 'imposing'?",
            options: [
              "Grand, impressive, and commanding admiration",
              "Hidden, tiny, and unnoticeable",
              "Fragile, modern, and easily broken",
              "Dangerous and strictly forbidden to visit"
            ],
            answer: 0,
            explanation: "Nearby context clues describing a prominent sanctuary atop an extinct volcano indicate that 'imposing' means grand and impressive."
          },
          {
            id: 2,
            tag: "Module 1: Unit 3 (Vocabulary in Context)",
            question: "2. In the sentence 'Conservators remain vigilant, constantly monitoring stone decay...', what does 'vigilant' mean based on surrounding clues?",
            options: [
              "Carefully watchful and alert to danger or damage",
              "Careless and inattentive",
              "Fast asleep during work hours",
              "Angry and hostile"
            ],
            answer: 0,
            explanation: "The subsequent phrase 'constantly monitoring stone decay' clarifies that vigilant means alert and watchful."
          },
          {
            id: 3,
            tag: "Module 2: Strategy 3 (Types of Context Clues)",
            question: "3. What type of context clue helps define the word 'weathering' in 'endured centuries of weathering'?",
            options: [
              "Cause-and-effect / Explanation clue linked to monsoon humidity and environmental erosion",
              "Antonym contrast clue introduced by 'however'",
              "Direct dictionary citation in parentheses",
              "Rhyming sound pattern"
            ],
            answer: 0,
            explanation: "The text explains decay caused by 'monsoon humidity and environmental erosion', acting as an explanation context clue for weathering."
          },
          {
            id: 4,
            tag: "Module 1: Unit 3 (Sentence Meaning)",
            question: "4. What does the word 'intricate' mean in the phrase 'intricate sandstone carvings that have endured centuries'?",
            options: [
              "Very complicated, detailed, and finely crafted",
              "Completely plain and unadorned",
              "Broken beyond repair",
              "Made of modern plastic"
            ],
            answer: 0,
            explanation: "'Intricate' describes detailed, sophisticated craftsmanship in ancient sandstone sculptures."
          },
          {
            id: 5,
            tag: "Integrated Skill (Unit 3 + Strategy 3)",
            question: "5. How does applying context clue strategies support the overall comprehension of sentence meaning?",
            options: [
              "It enables readers to deduce unfamiliar words from sentence syntax and neighboring clues without interrupting their reading flow",
              "It requires readers to memorize every dictionary entry",
              "It translates all English sentences into grammar rules",
              "It allows students to skip reading full paragraphs"
            ],
            answer: 0,
            explanation: "Context clues allow readers to unlock vocabulary meaning smoothly within the sentence context, maintaining active comprehension."
          }
        ]
      },
      {
        id: "q4",
        code: "QUIZ 04",
        title: "Unit 4: References & Connectives + Strategy 4: Identifying Text Organization",
        thaiTitle: "แบบทดสอบรวม: Unit 4 (คำอ้างอิง คำเชื่อม และโครงสร้างข้อความ) + Strategy 4 (การระบุโครงสร้างข้อความ)",
        unitRef: "Unit 4: References, Connectives & Text Organization",
        strategyRef: "Strategy 4: Identifying Text Organization",
        timeMinutes: 10,
        questionsCount: 5,
        passingScore: 70,
        passage: {
          title: "Digital Literacy versus Traditional Learning in Higher Education",
          text: "Unlike conventional teacher-centered lectures where students passively absorb information, modern digital learning environments demand autonomous engagement. In blended university courses, students review multimedia lecture modules prior to class. Consequently, in-person class time is dedicated to collaborative problem-solving and rigorous debates. Although some learners initially struggle with self-directed pacing, they ultimately develop critical thinking skills that traditional rote learning rarely fosters.",
          audioText: "Unlike conventional teacher-centered lectures where students passively absorb information, modern digital learning environments demand autonomous engagement. In blended university courses, students review multimedia lecture modules prior to class. Consequently, in-person class time is dedicated to collaborative problem-solving and rigorous debates. Although some learners initially struggle with self-directed pacing, they ultimately develop critical thinking skills that traditional rote learning rarely fosters."
        },
        questions: [
          {
            id: 1,
            tag: "Module 1: Unit 4 (Pronoun Reference)",
            question: "1. In the phrase 'Although some learners initially struggle with self-directed pacing, they ultimately develop...', what does the pronoun 'they' refer to?",
            options: ["Some learners", "Teacher-centered lectures", "Multimedia modules", "In-person class time"],
            answer: 0,
            explanation: "The pronoun 'they' refers back to the plural subject 'some learners' in the preceding dependent clause."
          },
          {
            id: 2,
            tag: "Module 2: Strategy 4 (Identifying Text Organization)",
            question: "2. What is the primary organizational pattern established in the opening sentence?",
            options: ["Compare and Contrast", "Chronological Timeline", "Classification of Animals", "Geographic Mapping"],
            answer: 0,
            explanation: "The signal word 'Unlike' sets up an explicit comparison and contrast between conventional lectures and digital learning."
          },
          {
            id: 3,
            tag: "Module 1: Unit 4 (Connectives & Transitions)",
            question: "3. What logical relationship is signaled by the connective transition word 'Consequently' in sentence 3?",
            options: [
              "A cause-and-effect relationship showing the result of students reviewing modules prior to class",
              "A time order indicating the next century",
              "A negation that cancels all previous statements",
              "An introduction of a character's dialogue"
            ],
            answer: 0,
            explanation: "'Consequently' signifies that what follows is a direct outcome or effect of the preceding cause."
          },
          {
            id: 4,
            tag: "Module 2: Strategy 4 (Transition Signals)",
            question: "4. Which transition word in the final sentence signals an unexpected contrast or concession?",
            options: ["Although", "Prior to", "Modern", "Rarely"],
            answer: 0,
            explanation: "'Although' is a concession connective used to contrast initial struggles with ultimate positive development."
          },
          {
            id: 5,
            tag: "Integrated Skill (Unit 4 + Strategy 4)",
            question: "5. Why is recognizing reference pronouns and transitional connectives essential for analyzing text organization?",
            options: [
              "They act as grammatical signposts connecting ideas, sentences, and paragraphs in logical sequences",
              "They help students avoid reading the whole passage",
              "They only indicate punctuation errors",
              "They are used solely for counting syllables"
            ],
            answer: 0,
            explanation: "Connectives and referents form cohesive ties that reveal the underlying structural architecture of the text."
          }
        ]
      },
      {
        id: "q5",
        code: "QUIZ 05",
        title: "Unit 5: Paraphrase & Meaning + Strategy 5: Making Inferences",
        thaiTitle: "แบบทดสอบรวม: Unit 5 (การตีความและความหมายที่เรียบเรียงใหม่) + Strategy 5 (การอนุมานความหมาย)",
        unitRef: "Unit 5: Text Interpretation & Paraphrased Meaning",
        strategyRef: "Strategy 5: Making Inferences",
        timeMinutes: 10,
        questionsCount: 5,
        passingScore: 70,
        passage: {
          title: "University Library Transformation in the Information Age",
          text: "The university central library once echoed with the sound of turning paper pages and heavy wooden drawers cataloging index cards. Today, those towering wooden bookshelves have been rearranged to create vibrant collaborative learning zones with high-speed internet ports and multimedia editing suites. While physical book checkouts have declined by 35% over the past five years, digital journal downloads and electronic database access have surged fivefold. Students gather in glass-walled rooms, debating group projects around interactive digital whiteboards.",
          audioText: "The university central library once echoed with the sound of turning paper pages and heavy wooden drawers cataloging index cards. Today, those towering wooden bookshelves have been rearranged to create vibrant collaborative learning zones with high-speed internet ports and multimedia editing suites. While physical book checkouts have declined by 35% over the past five years, digital journal downloads and electronic database access have surged fivefold. Students gather in glass-walled rooms, debating group projects around interactive digital whiteboards."
        },
        questions: [
          {
            id: 1,
            tag: "Module 2: Strategy 5 (Making Inferences)",
            question: "1. What can you logically infer about modern university students' academic research habits?",
            options: [
              "Students increasingly rely on digital databases and collaborative digital tools rather than physical paper books",
              "Students no longer conduct research at all",
              "Students prefer index cards over computers",
              "The university has forbidden electronic devices"
            ],
            answer: 0,
            explanation: "The fivefold surge in digital downloads and group whiteboard discussions logically implies a shift toward digital collaboration."
          },
          {
            id: 2,
            tag: "Module 1: Unit 5 (Valid Paraphrase)",
            question: "2. Which of the following represents an accurate paraphrase of 'While physical book checkouts have declined by 35%... digital journal downloads have surged fivefold'?",
            options: [
              "Borrowing of print books has dropped substantially, whereas digital article usage has multiplied dramatically",
              "Print books are 35% more popular than online journals",
              "Students have stopped using the library completely",
              "Digital downloads declined by 35% over five years"
            ],
            answer: 0,
            explanation: "It restates the factual core accurately using synonyms ('borrowing of print books', 'multiplied dramatically') without distorting meaning."
          },
          {
            id: 3,
            tag: "Module 2: Strategy 5 (Inferring Implied Purpose)",
            question: "3. Based on the rearrangement of bookshelves into 'collaborative learning zones with multimedia suites', what can be inferred about the changing role of academic libraries?",
            options: [
              "Libraries are transforming from quiet solitary book repositories into active social and digital learning spaces",
              "Libraries are being turned into commercial shopping malls",
              "Libraries are eliminating staff members entirely",
              "Libraries will no longer serve university students"
            ],
            answer: 0,
            explanation: "The physical design changes point to an evolving mission toward collaborative, technology-enabled learning."
          },
          {
            id: 4,
            tag: "Module 1: Unit 5 (Distorted Paraphrase Identification)",
            question: "4. Which statement is a flawed paraphrase that introduces false facts?",
            options: [
              "The university decided to burn all physical books because paper is outdated",
              "Electronic databases have experienced significant growth in recent years",
              "Collaborative areas now feature interactive digital screens",
              "Traditional card catalogs are no longer the primary search tool"
            ],
            answer: 0,
            explanation: "Claiming books were burned is an unfounded distortion not supported by the original text."
          },
          {
            id: 5,
            tag: "Integrated Skill (Unit 5 + Strategy 5)",
            question: "5. How does combining inference with paraphrased meaning verify true reading comprehension?",
            options: [
              "Inferring uncovers unstated implications while paraphrasing confirms that core ideas can be restated accurately in one's own words",
              "It allows students to copy sentences word-for-word on exams",
              "It replaces the need for critical thinking",
              "It proves that all reading passages have identical meanings"
            ],
            answer: 0,
            explanation: "Inference checks deep interpretive reading, while paraphrase demonstrates genuine expressive understanding."
          }
        ]
      },
      {
        id: "q6",
        code: "QUIZ 06",
        title: "Unit 6: Integrated Practice + Strategy 6: Integrated Strategy Review",
        thaiTitle: "แบบทดสอบรวม: Unit 6 (การฝึกอ่านแบบบูรณาการ) + Strategy 6 (การทบทวนกลยุทธ์แบบบูรณาการ)",
        unitRef: "Unit 6: Integrated Reading Practice",
        strategyRef: "Strategy 6: Integrated Strategy Review",
        timeMinutes: 15,
        questionsCount: 5,
        passingScore: 70,
        passage: {
          title: "The Impact of Explicit Reading Strategy Instruction on EFL Learners",
          text: "Research conducted at Buriram Rajabhat University demonstrates that explicit instruction in reading strategies significantly empowers EFL undergraduate students. First-year English majors who received structured training in pre-reading, while-reading, and post-reading techniques showed a 28% improvement on standardized reading comprehension tests compared to baseline scores. Furthermore, post-intervention surveys indicated that 91% of participants reported lower levels of reading anxiety and greater self-confidence when encountering complex academic texts. By learning to preview, predict, identify text structures, and summarize arguments, students transform into autonomous, critical readers prepared for lifelong academic success.",
          audioText: "Research conducted at Buriram Rajabhat University demonstrates that explicit instruction in reading strategies significantly empowers EFL undergraduate students. First-year English majors who received structured training in pre-reading, while-reading, and post-reading techniques showed a 28% improvement on standardized reading comprehension tests compared to baseline scores. Furthermore, post-intervention surveys indicated that 91% of participants reported lower levels of reading anxiety and greater self-confidence when encountering complex academic texts. By learning to preview, predict, identify text structures, and summarize arguments, students transform into autonomous, critical readers prepared for lifelong academic success."
        },
        questions: [
          {
            id: 1,
            tag: "Module 2: Strategy 6 (Integrated Strategy Review)",
            question: "1. Which statement represents the best overall synthesis and review of the entire passage?",
            options: [
              "Explicit instruction in reading strategies substantially boosts EFL students' comprehension, reduces reading anxiety, and fosters autonomous learning",
              "English majors at BRU prefer reading short texts rather than taking comprehension tests",
              "Standardized tests are the only valid measurement of student intellect",
              "Reading strategies are only beneficial for primary school students"
            ],
            answer: 0,
            explanation: "It accurately synthesizes the main intervention (explicit strategy instruction) with both measured outcomes (28% test gain, 91% anxiety drop) without bias."
          },
          {
            id: 2,
            tag: "Module 1: Unit 6 (Evaluating Empirical Evidence)",
            question: "2. According to the text, what two measurable benefits did students experience after receiving structured strategy instruction?",
            options: [
              "A 28% comprehension score increase and reduced reading anxiety reported by 91% of students",
              "Free textbooks and an immediate university graduation",
              "Zero hours of homework and higher exam absences",
              "Automatic English teaching certificates"
            ],
            answer: 0,
            explanation: "The passage explicitly provides two empirical metrics: 28% test score improvement and 91% reduced anxiety."
          },
          {
            id: 3,
            tag: "Module 2: Strategy 6 (Applying Multiple Strategies Together)",
            question: "3. How does combining multiple strategies (previewing, predicting, and identifying text organization) benefit readers of complex academic texts?",
            options: [
              "It enables readers to scaffold their comprehension before, during, and after reading for maximum retention and accuracy",
              "It slows down reading speed so that students cannot finish on time",
              "It eliminates the need to understand English vocabulary",
              "It guarantees that texts never need to be reread"
            ],
            answer: 0,
            explanation: "Integrating multiple reading strategies creates a complete scaffolding system from initial preview to deep post-reading evaluation."
          },
          {
            id: 4,
            tag: "Module 1: Unit 6 (Integrated Reading Framework)",
            question: "4. How do the three instructional stages (Pre-, While-, and Post-Reading) function together in integrated reading?",
            options: [
              "They provide a sequential framework guiding the learner before, during, and after engagement with the text",
              "They are completely isolated and should never be used together",
              "They only apply to listening exercises",
              "They replace the need to understand English vocabulary"
            ],
            answer: 0,
            explanation: "The three-stage framework scaffolds reading comprehension before, during, and after text interaction."
          },
          {
            id: 5,
            tag: "Integrated Skill (Unit 6 + Strategy 6 Capstone)",
            question: "5. Why is the integrated application of reading lessons and strategies considered the capstone of autonomous reading development?",
            options: [
              "It empowers students to independently select and apply appropriate comprehension strategies based on text type and reading purpose",
              "It allows students to skip reading the last paragraph",
              "It replaces the need to attend university lectures",
              "It proves that memorizing words is unnecessary"
            ],
            answer: 0,
            explanation: "Autonomous reading mastery occurs when learners flexibly orchestrate multiple strategies tailored to the text and purpose."
          }
        ]
      }
    ]
  },

  // Student Database Records for Teacher Admin Report Dashboard
  studentsReport: [
    { id: "STD-6501", name: "Somsak Jaidee", email: "somsak@bru.ac.th", onlineHours: "14.5 hrs", onlineSeconds: 52200, completedUnits: "5/6 Units", quizAvg: "88%", lastActive: "2026-09-21 14:15" },
    { id: "STD-6502", name: "Kanya Wongsuwan", email: "kanya@bru.ac.th", onlineHours: "18.2 hrs", onlineSeconds: 65520, completedUnits: "6/6 Units", quizAvg: "94%", lastActive: "2026-09-21 13:40" },
    { id: "STD-6503", name: "Niran Suwannarat", email: "niran@bru.ac.th", onlineHours: "9.8 hrs", onlineSeconds: 35280, completedUnits: "3/6 Units", quizAvg: "76%", lastActive: "2026-09-20 18:22" },
    { id: "STD-6504", name: "Ploypailin Rattana", email: "ploy@bru.ac.th", onlineHours: "22.0 hrs", onlineSeconds: 79200, completedUnits: "6/6 Units", quizAvg: "96%", lastActive: "2026-09-21 15:00" },
    { id: "STD-6505", name: "Chaiwat Prasert", email: "chaiwat@bru.ac.th", onlineHours: "6.4 hrs", onlineSeconds: 23040, completedUnits: "2/6 Units", quizAvg: "68%", lastActive: "2026-09-19 11:05" }
  ]
};
