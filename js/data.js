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
      stages: {
        preReading: {
          title: "Pre-Reading Stage",
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
          <!-- Banner for Part 1: Pre-Reading Strategies -->
          <div class="bg-gradient-to-r from-purple-100/90 to-pink-100/90 p-4 sm:p-5 rounded-2xl border border-purple-200">
            <div class="flex items-center space-x-2 mb-1.5">
              <span class="bg-purple-700 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">Pre-Reading Stage</span>
              <span class="text-xs font-semibold text-purple-900 bg-purple-200/80 px-2.5 py-0.5 rounded-full">Part 1: Strategies & Warm-Up</span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900">Pre-Reading Strategies (กลยุทธ์ก่อนการอ่าน)</h3>
            <p class="text-xs text-slate-700 mt-1 leading-relaxed">
              เตรียมความพร้อมของสมองก่อนลงมืออ่านจริง: การสำรวจจุดเด่นของบทอ่าน (Text Features), การคาดเดาเนื้อเรื่อง (Predicting), การกระตุ้นความรู้เดิม (Prior Knowledge), และการดูคำศัพท์ล่วงหน้า (Vocabulary Preview)
            </p>
          </div>

          <!-- Content for Part 1 -->
          <div class="space-y-6">
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
              <button onclick="app.selectStageAndStep('whileReading', 'learn')" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-2 shadow-md">
                <span>Next: While-Reading Stage (Learn Part 2)</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>`
          }
        },
        whileReading: {
          title: "While-Reading Stage",
          steps: {
            learn: `<div class="space-y-6" id="learn-content-top">
              <!-- Header for Part 2 -->
              <div class="bg-gradient-to-r from-purple-100/90 to-pink-100/90 p-4 sm:p-5 rounded-2xl border border-purple-200">
                <div class="flex items-center space-x-2 mb-1.5">
                  <span class="bg-purple-700 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">While-Reading Stage</span>
                  <span class="text-xs font-semibold text-purple-900 bg-purple-200/80 px-2.5 py-0.5 rounded-full">Part 2: Core Lesson</span>
                </div>
                <h3 class="text-base sm:text-lg font-bold text-slate-900">Main Idea & Topic Sentence (ใจความสำคัญและประโยคหลัก)</h3>
                <p class="text-xs text-slate-700 mt-1 leading-relaxed">
                  เรียนรู้โครงสร้างหัวใจสำคัญของการอ่านภาษาอังกฤษ: การแยกแยะ 3 ระดับความคิด (Topic vs Main Idea vs Supporting Details), การหาตำแหน่ง Topic Sentence, และเทคนิคการสรุปใจความสำคัญแบบ Step-by-Step
                </p>
              </div>

              <!-- Content for Part 2 -->
              <div class="space-y-6">

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
              <button onclick="app.selectStageAndStep('preReading', 'learn')" class="w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-1.5">
                <i data-lucide="arrow-left" class="w-4 h-4"></i>
                <span>Back: Pre-Reading (Learn Part 1)</span>
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
            <span class="text-xs font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full self-start sm:self-auto">Unit 1 Reading Model (2 Examples)</span>
          </div>

          <div id="example-content-top"></div>

          <!-- Sub-Tab Switcher: Example 1 vs Example 2 -->
          <div class="flex items-center space-x-2 border-b border-purple-200/80 pb-2">
            <button id="ex-tab-1" onclick="app.switchExampleTab(1)" class="px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 cursor-pointer bg-purple-700 text-white shadow-md">
              <i data-lucide="bookmark" class="w-4 h-4"></i>
              <span>Example 1: The Tortoise & Hare</span>
              <span class="text-[10px] bg-purple-900/60 text-purple-200 px-2 py-0.5 rounded-full">Perseverance</span>
            </button>
            <button id="ex-tab-2" onclick="app.switchExampleTab(2)" class="px-4 py-2.5 rounded-xl text-xs font-semibold transition flex items-center space-x-2 cursor-pointer bg-white/80 text-purple-900 hover:bg-white border border-purple-200">
              <i data-lucide="bookmark" class="w-4 h-4"></i>
              <span>Example 2: The Ant & Grasshopper</span>
              <span class="text-[10px] bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">Preparation</span>
            </button>
          </div>

          <!-- Example 1 Container -->
          <div id="example-view-1" class="space-y-6">
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
                  <span class="highlighter-pen highlighter-green">A <span class="vocab-word font-bold border-b border-dashed">boastful</span> Hare was constantly <span class="vocab-word font-bold border-b border-dashed">ridiculing</span> a slow-moving Tortoise for his clumsy pace.</span>
                  Weary of the ceaseless teasing, the quiet Tortoise calmly challenged the swift Hare to a five-mile cross-country footrace. Believing the challenge was a hilarious joke, the <span class="vocab-word text-amber-300 font-bold border-b border-dashed border-amber-300">arrogant</span> Hare accepted immediately, boasting that no creature in the forest could ever <span class="vocab-word text-amber-300 font-bold border-b border-dashed border-amber-300">outpace</span> his lightning speed.
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
                  <span class="highlighter-pen highlighter-blue">"I have more than enough time to relax under this shady oak tree and take a peaceful nap before that clumsy creature reaches halfway,"</span> he laughed smugly. Soon, the <span class="vocab-word text-amber-300 font-bold border-b border-dashed border-amber-300">complacent</span> Hare fell into a deep slumber, foolishly underestimating his rival.
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
                  Meanwhile, the <span class="vocab-word text-amber-300 font-bold border-b border-dashed border-amber-300">steadfast</span> Tortoise pressed forward with silent <span class="vocab-word text-amber-300 font-bold border-b border-dashed border-amber-300">determination</span>. Ignoring his weary limbs, rejecting all distractions, he never ceased his deliberate march. Hours slipped past as the complacent Hare slept deeply. When the Hare finally awakened in shock to the distant cheering of forest animals, he bolted forward desperately, only to watch in disbelief as the Tortoise crossed the finish ribbon to seize <span class="vocab-word text-amber-300 font-bold border-b border-dashed border-amber-300">triumph</span>.
                  <span class="highlighter-pen highlighter-pink">The enduring moral of the race proves that steady <span class="vocab-word font-bold underline">perseverance</span> and humble consistency will consistently triumph over careless arrogance and complacent talent.</span>
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
                  <span class="highlighter-pen highlighter-yellow text-slate-900 font-medium">Approaching the winner, he shook the Tortoise's hand with genuine <span class="vocab-word font-bold border-b border-dashed">humility</span>, acknowledging that true greatness comes from quiet dedication rather than loud boasting.</span>
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

          <!-- Bottom Navigation Buttons for Example 1 -->
          <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4 border-t border-purple-100">
            <button onclick="app.selectActivityStep('learn')" class="w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center">
              ⬅ Back: Learn (ทฤษฎีใจความสำคัญ)
            </button>
            <button onclick="app.switchExampleTab(2)" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-1.5 shadow-md">
              <span>Next: Example 2 (มดกับตั๊กแตน)</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        </div>

        <!-- Example 2 Container (The Ant and the Grasshopper) -->
        <div id="example-view-2" class="space-y-6 hidden">
          <!-- 1. Reading Passage Box with Audio Player & Highlighter Tags -->
          <div class="bg-slate-900 text-slate-100 p-4 sm:p-6 rounded-2xl space-y-4 relative shadow-lg">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700 pb-3">
              <div>
                <span class="text-[10px] font-bold text-pink-400 uppercase tracking-wider">Classic Narrative Fable (บทอ่านเรื่องเล่าคลาสสิก 4 ย่อหน้า - การมองการณ์ไกล vs ความประมาท)</span>
                <h5 class="text-base font-bold text-white mt-0.5">The Ant and the Grasshopper: The Wisdom of Preparation</h5>
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

                <button onclick="app.playUnit1Passage2()" class="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold rounded-lg flex items-center space-x-2 transition cursor-pointer shadow-md">
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
                  <span class="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">[Paragraph 1: Topic Sentence - Contrasting Behaviors in Summer]</span>
                  <span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-sans">Beginning Position</span>
                </div>
                <p class="leading-relaxed">
                  <span class="highlighter-pen highlighter-green">During a radiant summer afternoon, an <span class="vocab-word font-bold border-b border-dashed">industrious</span> Ant worked tirelessly storing grain, while a <span class="vocab-word font-bold border-b border-dashed">frivolous</span> Grasshopper sang carefree songs and mocked her constant toil.</span>
                  The carefree Grasshopper urged her to enjoy the sunshine and abandon her exhausting labor. However, the wise Ant warned him that summer would not last forever and that winter would bring severe hardship.
                </p>
                <!-- Micro-Analysis: Why This Works -->
                <div class="bg-slate-900/90 p-2.5 rounded-lg border border-emerald-500/30 font-sans text-xs text-emerald-200 flex items-start space-x-2">
                  <i data-lucide="info" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                  <div>
                    <strong class="text-emerald-300 font-bold">Why This Works (วิเคราะห์เหตุผล):</strong> ประโยคแรกทำหน้าที่เป็น <strong>Topic Sentence</strong> เพราะมีความกว้าง (General enough) ในการเปิดประเด็นเปรียบเทียบพฤติกรรมระหว่างตัวละครหลักทั้งสอง (มดผู้ขยัน vs ตั๊กแตนผู้รักสนุก) และปูพื้นฐานปมความขัดแย้งของเรื่องทันที ประโยคแวดล้อมที่ตามมาเป็นเพียงรายละเอียดสนับสนุนเกี่ยวกับการเตือนเรื่องสภาพอากาศ
                  </div>
                </div>
              </div>

              <!-- Paragraph 2: Supporting Details -->
              <div class="p-3.5 bg-slate-800/80 rounded-xl border-l-4 border-sky-500 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">[Paragraph 2: Supporting Details - Complacency vs Daily Diligence]</span>
                  <span class="text-[10px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded font-sans">Major Detail</span>
                </div>
                <p class="leading-relaxed">
                  <span class="highlighter-pen highlighter-blue">Instead of heeding the wise advice, the <span class="vocab-word font-bold border-b border-dashed">complacent</span> Grasshopper spent every sunny morning dancing in the meadows, convinced that nature's <span class="vocab-word font-bold border-b border-dashed">abundance</span> would never run out.</span>
                  Week after week, the Ant practiced steadfast <span class="vocab-word text-amber-300 font-bold border-b border-dashed border-amber-300">diligence</span>, hauling heavy seeds into her underground shelter. In contrast, the Grasshopper laughed that only foolish insects worried about tomorrow when today was so pleasant.
                </p>
                <!-- Micro-Analysis: Why This Works -->
                <div class="bg-slate-900/90 p-2.5 rounded-lg border border-sky-500/30 font-sans text-xs text-sky-200 flex items-start space-x-2">
                  <i data-lucide="info" class="w-4 h-4 text-sky-400 shrink-0 mt-0.5"></i>
                  <div>
                    <strong class="text-sky-300 font-bold">Why This Works (วิเคราะห์เหตุผล):</strong> ข้อความที่ไฮไลต์เป็น <strong>Major Supporting Detail</strong> ที่ระบุพฤติกรรมความชะล่าใจเฉพาะเจาะจง (Specific action) ของตั๊กแตน ซึ่งทำหน้าที่เป็นข้อมูลสนับสนุนว่าเหตุใดตั๊กแตนจึงไม่ได้เตรียมพร้อมเมื่อฤดูหนาวมาถึง
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
                  When the <span class="vocab-word text-amber-300 font-bold border-b border-dashed border-amber-300">harsh</span> winter finally arrived with freezing blizzards, the <span class="vocab-word text-amber-300 font-bold border-b border-dashed border-amber-300">impoverished</span> Grasshopper found himself shivering without a single crumb to eat. Desperate and starving, he dragged his weak body to the Ant's warm storehouse, begging for food. Watching the well-fed ants rest comfortably, he grasped the timeless truth.
                  <span class="highlighter-pen highlighter-pink">The enduring wisdom of the season demonstrates that <span class="vocab-word font-bold border-b border-dashed">foresight</span>, disciplined preparation, and steadfast diligence protect us against unexpected hardships that ruin the unprepared.</span>
                </p>
                <!-- Micro-Analysis: Why This Works -->
                <div class="bg-slate-900/90 p-2.5 rounded-lg border border-rose-500/30 font-sans text-xs text-rose-200 flex items-start space-x-2">
                  <i data-lucide="info" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
                  <div>
                    <strong class="text-rose-300 font-bold">Why This Works (วิเคราะห์เหตุผล):</strong> ประโยคสรุปจบนี้คือ <strong>Stated Main Idea</strong> ประจำบทเรียน ทำหน้าที่เป็น <strong>"ร่มคันใหญ่ (Umbrella Sentence)"</strong> ที่ครอบคลุมทั้งผลลัพธ์ของความรอบคอบในการเตรียมพร้อม และความหายนะของผู้ที่ละเลย โดยสรุปเป็นหลักคิดที่นำไปปรับใช้ได้จริง
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
                  Standing in the freezing cold, the humbled Grasshopper bowed his head, realizing that endless fun without foresight led only to ruin. Taking pity on her freezing neighbor, the kind Ant shared a modest portion of grain.
                  <span class="highlighter-pen highlighter-yellow text-slate-900 font-medium">Humbled by the generous gift, the reformed Grasshopper bowed with sincere <span class="vocab-word font-bold border-b border-dashed">humility</span>, promising that every future summer would be devoted to responsible <span class="vocab-word font-bold border-b border-dashed">prudence</span> alongside his music.</span>
                  From that bitter winter forward, the Grasshopper understood that true joy is sweetest when built on the solid foundation of preparation.
                </p>
                <!-- Micro-Analysis: Why This Works -->
                <div class="bg-slate-900/90 p-2.5 rounded-lg border border-amber-500/30 font-sans text-xs text-amber-200 flex items-start space-x-2">
                  <i data-lucide="info" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
                  <div>
                    <strong class="text-amber-300 font-bold">Why This Works (วิเคราะห์เหตุผล):</strong> ย่อหน้าที่ 4 ช่วย <strong>ตอกย้ำ Main Idea (Reinforcing the Theme)</strong> ผ่านการเปลี่ยนแปลงของตัวละคร (Character Growth) ตั๊กแตนไม่ได้แค่รอดชีวิต แต่เกิดการเรียนรู้ความถ่อมตนและความรอบคอบ ทำให้คติสอนใจนี้กลายเป็นบทเรียนชีวิตที่สมบูรณ์
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
              <!-- Vocab 1: Industrious -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-purple-900 text-sm">Industrious</span>
                    <span class="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-mono">adj.</span>
                  </div>
                  <div class="text-[11px] text-slate-400 font-mono">/ɪnˈdʌs.tri.əs/</div>
                  <div class="text-xs font-bold text-pink-700 mt-1">ขยันขันแข็ง, อุตสาหะ</div>
                  <div class="text-[11px] text-slate-600 mt-1.5 bg-slate-50 p-1.5 rounded border border-slate-100 leading-snug">
                    <strong class="text-slate-800">In Story:</strong> "...an industrious Ant worked tirelessly storing grain..."
                  </div>
                </div>
                <div class="text-[11px] text-purple-800 bg-purple-50/70 p-1.5 rounded border border-purple-100 mt-2 leading-snug">
                  <strong class="text-purple-950">Extra Context:</strong> The industrious university students spent extra hours studying in the library.
                </div>
              </div>

              <!-- Vocab 2: Frivolous -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-purple-900 text-sm">Frivolous</span>
                    <span class="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-mono">adj.</span>
                  </div>
                  <div class="text-[11px] text-slate-400 font-mono">/ˈfrɪv.əl.əs/</div>
                  <div class="text-xs font-bold text-pink-700 mt-1">ไร้สาระ, ไม่จริงจัง, รักสนุก</div>
                  <div class="text-[11px] text-slate-600 mt-1.5 bg-slate-50 p-1.5 rounded border border-slate-100 leading-snug">
                    <strong class="text-slate-800">In Story:</strong> "...while a frivolous Grasshopper sang carefree songs..."
                  </div>
                </div>
                <div class="text-[11px] text-purple-800 bg-purple-50/70 p-1.5 rounded border border-purple-100 mt-2 leading-snug">
                  <strong class="text-purple-950">Extra Context:</strong> Spending your monthly savings on frivolous items can lead to financial trouble.
                </div>
              </div>

              <!-- Vocab 3: Complacent -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-purple-900 text-sm">Complacent</span>
                    <span class="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-mono">adj.</span>
                  </div>
                  <div class="text-[11px] text-slate-400 font-mono">/kəmˈpleɪ.sənt/</div>
                  <div class="text-xs font-bold text-pink-700 mt-1">ชะล่าใจ, พึงพอใจจนประมาท</div>
                  <div class="text-[11px] text-slate-600 mt-1.5 bg-slate-50 p-1.5 rounded border border-slate-100 leading-snug">
                    <strong class="text-slate-800">In Story:</strong> "...the complacent Grasshopper spent every sunny morning dancing..."
                  </div>
                </div>
                <div class="text-[11px] text-purple-800 bg-purple-50/70 p-1.5 rounded border border-purple-100 mt-2 leading-snug">
                  <strong class="text-purple-950">Extra Context:</strong> Never become complacent after passing the midterm exam; continue reviewing daily.
                </div>
              </div>

              <!-- Vocab 4: Abundance -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-purple-900 text-sm">Abundance</span>
                    <span class="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-mono">n.</span>
                  </div>
                  <div class="text-[11px] text-slate-400 font-mono">/əˈbʌn.dəns/</div>
                  <div class="text-xs font-bold text-pink-700 mt-1">ความอุดมสมบูรณ์, ปริมาณมาก</div>
                  <div class="text-[11px] text-slate-600 mt-1.5 bg-slate-50 p-1.5 rounded border border-slate-100 leading-snug">
                    <strong class="text-slate-800">In Story:</strong> "...convinced that nature's abundance would never run out."
                  </div>
                </div>
                <div class="text-[11px] text-purple-800 bg-purple-50/70 p-1.5 rounded border border-purple-100 mt-2 leading-snug">
                  <strong class="text-purple-950">Extra Context:</strong> Thailand enjoys an abundance of fresh fruits throughout the rainy season.
                </div>
              </div>

              <!-- Vocab 5: Diligence -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-purple-900 text-sm">Diligence</span>
                    <span class="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-mono">n.</span>
                  </div>
                  <div class="text-[11px] text-slate-400 font-mono">/ˈdɪl.ɪ.dʒəns/</div>
                  <div class="text-xs font-bold text-pink-700 mt-1">ความขยันหมั่นเพียร, ความเอาใจใส่</div>
                  <div class="text-[11px] text-slate-600 mt-1.5 bg-slate-50 p-1.5 rounded border border-slate-100 leading-snug">
                    <strong class="text-slate-800">In Story:</strong> "...the Ant practiced steadfast diligence, hauling heavy seeds..."
                  </div>
                </div>
                <div class="text-[11px] text-purple-800 bg-purple-50/70 p-1.5 rounded border border-purple-100 mt-2 leading-snug">
                  <strong class="text-purple-950">Extra Context:</strong> Through continuous diligence and reading practice, he achieved a high English score.
                </div>
              </div>

              <!-- Vocab 6: Harsh -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-purple-900 text-sm">Harsh</span>
                    <span class="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-mono">adj.</span>
                  </div>
                  <div class="text-[11px] text-slate-400 font-mono">/hɑːʃ/</div>
                  <div class="text-xs font-bold text-pink-700 mt-1">รุนแรง, โหดร้าย, ทารุณ</div>
                  <div class="text-[11px] text-slate-600 mt-1.5 bg-slate-50 p-1.5 rounded border border-slate-100 leading-snug">
                    <strong class="text-slate-800">In Story:</strong> "When the harsh winter finally arrived with freezing blizzards..."
                  </div>
                </div>
                <div class="text-[11px] text-purple-800 bg-purple-50/70 p-1.5 rounded border border-purple-100 mt-2 leading-snug">
                  <strong class="text-purple-950">Extra Context:</strong> The climbers protected themselves against the harsh winds on the mountain peak.
                </div>
              </div>

              <!-- Vocab 7: Impoverished -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-purple-900 text-sm">Impoverished</span>
                    <span class="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-mono">adj.</span>
                  </div>
                  <div class="text-[11px] text-slate-400 font-mono">/ɪmˈpɒv.ər.ɪʃt/</div>
                  <div class="text-xs font-bold text-pink-700 mt-1">ตกระกำลำบาก, ขัดสน, ยากจนลง</div>
                  <div class="text-[11px] text-slate-600 mt-1.5 bg-slate-50 p-1.5 rounded border border-slate-100 leading-snug">
                    <strong class="text-slate-800">In Story:</strong> "...the impoverished Grasshopper found himself shivering..."
                  </div>
                </div>
                <div class="text-[11px] text-purple-800 bg-purple-50/70 p-1.5 rounded border border-purple-100 mt-2 leading-snug">
                  <strong class="text-purple-950">Extra Context:</strong> The unexpected flood left many villagers impoverished until emergency aid arrived.
                </div>
              </div>

              <!-- Vocab 8: Foresight -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-purple-900 text-sm">Foresight</span>
                    <span class="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-mono">n.</span>
                  </div>
                  <div class="text-[11px] text-slate-400 font-mono">/ˈfɔː.saɪt/</div>
                  <div class="text-xs font-bold text-pink-700 mt-1">การมองการณ์ไกล, ความรอบคอบ</div>
                  <div class="text-[11px] text-slate-600 mt-1.5 bg-slate-50 p-1.5 rounded border border-slate-100 leading-snug">
                    <strong class="text-slate-800">In Story:</strong> "...demonstrates that foresight, disciplined preparation..."
                  </div>
                </div>
                <div class="text-[11px] text-purple-800 bg-purple-50/70 p-1.5 rounded border border-purple-100 mt-2 leading-snug">
                  <strong class="text-purple-950">Extra Context:</strong> Having the foresight to organize your study plan prevents stressful cramming.
                </div>
              </div>

              <!-- Vocab 9: Humility -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-purple-900 text-sm">Humility</span>
                    <span class="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-mono">n.</span>
                  </div>
                  <div class="text-[11px] text-slate-400 font-mono">/hjuːˈmɪl.ə.ti/</div>
                  <div class="text-xs font-bold text-pink-700 mt-1">ความถ่อมตน, ความนอบน้อม</div>
                  <div class="text-[11px] text-slate-600 mt-1.5 bg-slate-50 p-1.5 rounded border border-slate-100 leading-snug">
                    <strong class="text-slate-800">In Story:</strong> "...the reformed Grasshopper bowed with sincere humility..."
                  </div>
                </div>
                <div class="text-[11px] text-purple-800 bg-purple-50/70 p-1.5 rounded border border-purple-100 mt-2 leading-snug">
                  <strong class="text-purple-950">Extra Context:</strong> She received the student leadership award with genuine humility and grace.
                </div>
              </div>

              <!-- Vocab 10: Prudence -->
              <div class="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-purple-900 text-sm">Prudence</span>
                    <span class="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-mono">n.</span>
                  </div>
                  <div class="text-[11px] text-slate-400 font-mono">/ˈpruː.dəns/</div>
                  <div class="text-xs font-bold text-pink-700 mt-1">ความรอบคอบ, ความสุขุมรอบคอบ</div>
                  <div class="text-[11px] text-slate-600 mt-1.5 bg-slate-50 p-1.5 rounded border border-slate-100 leading-snug">
                    <strong class="text-slate-800">In Story:</strong> "...would be devoted to responsible prudence alongside his music."
                  </div>
                </div>
                <div class="text-[11px] text-purple-800 bg-purple-50/70 p-1.5 rounded border border-purple-100 mt-2 leading-snug">
                  <strong class="text-purple-950">Extra Context:</strong> Exercising financial prudence allows you to handle unexpected expenses easily.
                </div>
              </div>

            </div>
          </div>

          <!-- 3. Clue & Strategy Breakdown Split into Before / After Reading -->
          <div class="space-y-3">
            <div class="flex items-center space-x-2 border-b border-purple-100 pb-2">
              <i data-lucide="compass" class="w-4 h-4 text-purple-700"></i>
              <h5 class="font-bold text-slate-900 text-sm">การแยกแยะร่องรอยกลยุทธ์: ก่อนอ่าน vs หลังอ่าน (Before & After Reading Breakdown)</h5>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <!-- Before Reading: Prediction Clues -->
              <div class="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-200 space-y-2">
                <div class="flex items-center space-x-2 text-purple-900 font-bold text-xs">
                  <span class="w-5 h-5 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-[11px]">1</span>
                  <span>BEFORE READING: ร่องรอยการคาดเดา (Predicting & Previewing)</span>
                </div>
                <ul class="space-y-1.5 text-slate-700 text-[11px] pl-2">
                  <li>
                    • <strong>Title Analysis:</strong> ชื่อเรื่อง <em>"The Ant and the Grasshopper: The Wisdom of Preparation"</em> บ่งชี้ทันทีว่าจะมีการเปรียบเทียบลักษณะนิสัยระหว่าง "มด" กับ "ตั๊กแตน" โดยมีแก่นเรื่องเกี่ยวกับคุณค่าของการเตรียมพร้อม
                  </li>
                  <li>
                    • <strong>Background Knowledge:</strong> ผู้อ่านดึงความรู้เดิมว่ามดเป็นสัตว์ขยันเก็บอาหารในฤดูร้อน ส่วนตั๊กแตนมักชอบร้องเพลง จึงคาดเดาได้ว่าจะเกิดวิกฤตเมื่อฤดูกาลเปลี่ยนแปลงสู่ฤดูหนาว
                  </li>
                  <li>
                    • <strong>Prediction Hypothesis:</strong> คาดการณ์ว่าฝ่ายที่เตรียมพร้อมจะรอดชีวิต ส่วนฝ่ายที่ละเลยจะพบความยากลำบาก และเรื่องจะสรุปด้วยคติสอนใจ
                  </li>
                </ul>
              </div>

              <!-- After Reading: Verification & Analysis -->
              <div class="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 space-y-2">
                <div class="flex items-center space-x-2 text-emerald-900 font-bold text-xs">
                  <span class="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[11px]">2</span>
                  <span>AFTER READING: ตรวจสอบและยืนยันโครงสร้าง (Verifying & Analyzing)</span>
                </div>
                <ul class="space-y-1.5 text-slate-700 text-[11px] pl-2">
                  <li>
                    • <strong>Locating Topic Sentence:</strong> ย่อหน้าที่ 1 ประโยคแรกเปิดประเด็นเปรียบเทียบพฤติกรรมของทั้งสองฝ่ายทันที สอดคล้องกับตำแหน่งต้นย่อหน้า
                  </li>
                  <li>
                    • <strong>Checking Supporting Details:</strong> ย่อหน้าที่ 2 ให้ข้อมูลเหตุการณ์ที่ตั๊กแตนละเลยคำเตือนและเต้นรำอย่างชะล่าใจ ซึ่งเป็น Major Detail สนับสนุนปมปัญหา
                  </li>
                  <li>
                    • <strong>Confirming Main Idea:</strong> ย่อหน้าที่ 3 สรุปคติธรรมอย่างชัดเจน (Stated Moral) ว่าการมองการณ์ไกลและความขยันปกป้องเราจากความยากลำบาก
                  </li>
                  <li>
                    • <strong>Evaluating Character Growth:</strong> ย่อหน้าที่ 4 แสดงให้เห็นว่าตั๊กแตนสำนึกผิดและเปลี่ยนแปลงตนเอง (Character Growth) ทำให้ใจความสำคัญมีน้ำหนักสมบูรณ์
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 4. Reflection Questions -->
          <div class="p-4 sm:p-5 bg-white rounded-2xl border border-purple-200 space-y-3 shadow-xs">
            <div class="flex items-center space-x-2 text-purple-950 font-bold text-sm">
              <i data-lucide="help-circle" class="w-5 h-5 text-purple-700"></i>
              <span>คำถามสะท้อนคิดเพื่อความเข้าใจระดับสูง (Deep Reading Reflection Questions)</span>
            </div>
            <p class="text-xs text-slate-600">
              ลองฝึกคิดวิเคราะห์ตาม 3 ประเด็นต่อไปนี้ เพื่อฝึกฝนทักษะการอ่านวิเคราะห์ (Critical Reading) ตามมาตรฐาน CEFR A2:
            </p>

            <div class="space-y-2.5 text-xs">
              <!-- Question 1 -->
              <div class="p-3 bg-purple-50/70 rounded-xl border border-purple-100 space-y-1">
                <p class="font-bold text-purple-950">
                  1. "How do the contrasting actions of the Ant and the Grasshopper in paragraphs 1 and 2 directly support the moral stated in paragraph 3?"
                </p>
                <p class="text-[11px] text-slate-600 pl-2 border-l-2 border-purple-400">
                  💡 <strong>แนวคิดวิเคราะห์:</strong> การกระทำที่ตรงข้ามกัน (มดเก็บอาหาร vs ตั๊กแตนเต้นรำ) ทำหน้าที่เป็นหลักฐานเชิงประจักษ์ (Empirical Evidence) ที่แสดงความสัมพันธ์แบบเหตุและผล (Cause & Effect) นำไปสู่บทสรุปว่าทำไมการเตรียมตัวล่วงหน้าจึงจำเป็น
                </p>
              </div>

              <!-- Question 2 -->
              <div class="p-3 bg-pink-50/70 rounded-xl border border-pink-100 space-y-1">
                <p class="font-bold text-pink-950">
                  2. "Why is paragraph 4 (the Grasshopper's humility and promise of prudence) essential for demonstrating true character growth?"
                </p>
                <p class="text-[11px] text-slate-600 pl-2 border-l-2 border-pink-400">
                  💡 <strong>แนวคิดวิเคราะห์:</strong> หากเรื่องจบที่ย่อหน้า 3 บทอ่านจะสะท้อนเพียงความล้มเหลว แต่ย่อหน้า 4 แสดงถึงการยอมรับความจริงและการเปลี่ยนแปลงพฤติกรรม (Character Growth) ทำให้คติธรรมกลายเป็นบทเรียนชีวิตที่มีความหวังและสมบูรณ์
                </p>
              </div>

              <!-- Question 3 -->
              <div class="p-3 bg-amber-50/70 rounded-xl border border-amber-100 space-y-1">
                <p class="font-bold text-amber-950">
                  3. "For university students, what actions in academic life represent 'storing grain' versus 'singing frivolously'?"
                </p>
                <p class="text-[11px] text-slate-600 pl-2 border-l-2 border-amber-400">
                  💡 <strong>แนวคิดวิเคราะห์:</strong> 'Storing grain' คือการอ่านหนังสือทบทวนบทเรียนและสะสมคำศัพท์เป็นประจำทุกสัปดาห์ ส่วน 'Singing frivolously' คือการผัดวันประกันพรุ่งและรออ่านคืนก่อนสอบ ซึ่งอาจทำให้ 'หนาวสั่น' เมื่อเจอข้อสอบจริง
                </p>
              </div>
            </div>
          </div>

          <!-- Bottom Navigation Buttons for Example 2 -->
          <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-4 border-t border-purple-100">
            <button onclick="app.switchExampleTab(1)" class="w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center">
              ⬅ Back: Example 1 (เต่ากับกระต่าย)
            </button>
            <button onclick="app.selectActivityStep('practice')" class="w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-1.5 shadow-md">
              <span>Next Step: Practice (แบบฝึกหัด 40 ข้อ)</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
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
            <button onclick="app.selectStageAndStep('postReading', 'quiz')" class="w-full sm:w-auto px-6 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl text-xs cursor-pointer text-center flex items-center justify-center space-x-1.5 shadow-md">
              <span>Next Step: Post-Reading Quiz (แบบทดสอบ 40 ข้อ)</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        </div>`
          }
        },
        postReading: {
          title: "Post-Reading Stage",
          steps: {
            quiz: true
          }
        }
      }
    },
    {
      "id": 2,
      "code": "UNIT-02",
      "title": "Supporting Details & Idea Relationships",
      "thaiTitle": "รายละเอียดสนับสนุนและความสัมพันธ์ของความคิด",
      "topic": "Decoding Support Systems",
      "scope": "5.1 Major vs Minor Details | 5.2 Idea Relationships | 5.3 Skimming | 5.4 Scanning | 5.5 Main Idea Challenge | 5.6 Timed Scanning Task",
      "cefr": "A2-B1",
      "description": "Master the architectural hierarchy of academic texts by differentiating major supporting arguments from minor illustrative evidence, tracking idea relationships (cause-effect, compare-contrast, sequence), and executing high-speed skimming and targeted scanning.",
      "objectives": [
        "Differentiate clearly between Major supporting details and Minor illustrative details [U2-5.1]",
        "Identify logical relationships between ideas using transitional signal words (cause & effect, compare & contrast, sequence) [U2-5.2]",
        "Execute rapid Skimming to extract main ideas and overall meaning under 30 seconds [U2-5.3]",
        "Execute targeted Scanning to retrieve specific facts, dates, names, figures, and definitions accurately [U2-5.4]",
        "Achieve >= 70% proficiency on the graded Main Idea Challenge and Timed Scanning Tasks [U2-5.5, U2-5.6, Indicator 3.3]"
      ],
      "performanceIndicators": [
        "Indicator 3.3: Main Idea Challenge Score >= 70%",
        "Indicator 3.3: Timed Scanning Task Score >= 70%",
        "Supporting Details & Reading Comprehension Test Score >= 70%"
      ],
      "stages": {
        "preReading": {
          "title": "Pre-Reading Stage",
          "steps": {
            "overview": "\n<div class=\"space-y-6\">\n  <!-- Unit Header & Syllabus Ref -->\n  <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 pb-4\">\n    <div>\n      <div class=\"flex items-center space-x-2\">\n        <span class=\"px-2.5 py-0.5 bg-purple-700 text-white rounded-md text-[10px] font-bold font-mono\">UNIT 02</span>\n        <span class=\"px-2.5 py-0.5 bg-purple-100 text-purple-800 rounded-md text-[10px] font-bold font-mono\">U2-6.1.1</span>\n        <span class=\"px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-md text-[10px] font-bold\">CEFR A2–B1</span>\n      </div>\n      <h3 class=\"text-lg sm:text-xl font-bold text-slate-900 mt-1\">Pre-Reading Stage: Overview & Warm-Up</h3>\n      <p class=\"text-xs text-slate-500\">บทนำสู่บทเรียนและแบบฝึกอุ่นเครื่อง: การถอดรหัสระบบสนับสนุนของบทความ (Decoding Support Systems)</p>\n    </div>\n    <span class=\"text-xs font-bold text-purple-900 bg-purple-100/80 px-3 py-1.5 rounded-xl shrink-0 self-start sm:self-auto\">\n      Course 2031103 &bull; Section 6.1\n    </span>\n  </div>\n\n  <!-- Objectives & Mind Map Card [U2-6.1.1] -->\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3\">\n      <div class=\"flex items-center space-x-2 text-purple-900 font-bold text-sm\">\n        <i data-lucide=\"target\" class=\"w-4 h-4 text-purple-700\"></i>\n        <span>Unit Learning Objectives (วัตถุประสงค์การเรียนรู้) [U2-6.1.1]</span>\n      </div>\n      <ul class=\"text-xs text-slate-700 space-y-2 leading-relaxed\">\n        <li class=\"flex items-start space-x-2\">\n          <span class=\"w-4 h-4 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">1</span>\n          <span><strong>Major vs. Minor Details:</strong> แยกแยะระหว่างประเด็นหลักที่สนับสนุนใจความสำคัญ และรายละเอียดปลีกย่อยที่ให้หลักฐานตัวอย่าง <span class=\"text-[10px] font-mono text-purple-600 font-bold\">[U2-5.1]</span></span>\n        </li>\n        <li class=\"flex items-start space-x-2\">\n          <span class=\"w-4 h-4 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">2</span>\n          <span><strong>Idea Relationships:</strong> ระบุความสัมพันธ์ของความคิด (เหตุ-ผล, เปรียบเทียบ, ลำดับเวลา) ผ่านคำเชื่อม <span class=\"text-[10px] font-mono text-purple-600 font-bold\">[U2-5.2]</span></span>\n        </li>\n        <li class=\"flex items-start space-x-2\">\n          <span class=\"w-4 h-4 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">3</span>\n          <span><strong>Skimming & Scanning:</strong> ฝึกการอ่านเร็วเพื่อจับประเด็น และการสแกนหาข้อเท็จจริงเฉพาะเจาะจง <span class=\"text-[10px] font-mono text-purple-600 font-bold\">[U2-5.3, 5.4]</span></span>\n        </li>\n        <li class=\"flex items-start space-x-2\">\n          <span class=\"w-4 h-4 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">4</span>\n          <span><strong>Graded Mastery (Indicator 3.3):</strong> ผ่านเกณฑ์แบบทดสอบ Main Idea Challenge และ Timed Scanning Task ไม่ต่ำกว่า 70% <span class=\"text-[10px] font-mono text-purple-600 font-bold\">[U2-5.5, 5.6]</span></span>\n        </li>\n      </ul>\n    </div>\n\n    <!-- Mind Map Card [U2-6.1.1] -->\n    <div class=\"p-4 sm:p-5 bg-gradient-to-br from-purple-50/90 to-indigo-50/90 rounded-2xl border border-purple-200/80 shadow-xs space-y-3\">\n      <div class=\"flex items-center justify-between\">\n        <div class=\"flex items-center space-x-2 text-purple-900 font-bold text-sm\">\n          <i data-lucide=\"layers\" class=\"w-4 h-4 text-purple-700\"></i>\n          <span>The Support System Hierarchy (แผนผังความคิด) [U2-6.1.1]</span>\n        </div>\n        <span class=\"text-[10px] font-mono bg-purple-200/80 text-purple-900 px-2 py-0.5 rounded font-bold\">Concept Model</span>\n      </div>\n      \n      <div class=\"space-y-2 text-xs\">\n        <div class=\"p-2.5 bg-amber-100 border border-amber-300 rounded-xl text-amber-950 font-semibold flex items-center space-x-2\">\n          <span class=\"w-5 h-5 rounded-md bg-amber-500 text-white flex items-center justify-center font-bold text-[10px]\">1</span>\n          <span><strong>Main Idea (ใจความสำคัญ):</strong> ประเด็นหลักที่ครอบคลุมเนื้อหาทั้งย่อหน้า (Umbrella Idea)</span>\n        </div>\n        <div class=\"pl-4 border-l-2 border-dashed border-purple-300 space-y-2\">\n          <div class=\"p-2.5 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-950 font-semibold flex items-center space-x-2\">\n            <span class=\"w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]\">2</span>\n            <span><strong>Major Supporting Details (ประเด็นสนับสนุนหลัก):</strong> เสาค้ำยันที่อธิบายหรือพิสูจน์ Main Idea โดยตรง</span>\n          </div>\n          <div class=\"pl-4 border-l-2 border-dashed border-emerald-400\">\n            <div class=\"p-2 bg-sky-100 border border-sky-300 rounded-xl text-sky-950 font-medium flex items-center space-x-2\">\n              <span class=\"w-4 h-4 rounded-md bg-sky-600 text-white flex items-center justify-center font-bold text-[9px]\">3</span>\n              <span><strong>Minor Details (รายละเอียดสนับสนุนย่อย):</strong> ตัวเลข สถิติ ตัวอย่าง งานวิจัย ที่รองรับ Major Detail</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Warm-Up Activity: Interactive Passage & Question [U2-6.1.2] -->\n  <div class=\"p-4 sm:p-6 bg-white rounded-2xl border border-purple-200 shadow-sm space-y-4\">\n    <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3\">\n      <div class=\"flex items-center space-x-2\">\n        <span class=\"w-6 h-6 rounded-lg bg-pink-600 text-white flex items-center justify-center font-bold text-xs\">⚡</span>\n        <h4 class=\"font-bold text-slate-900 text-sm sm:text-base\">Warm-Up Activity: Spot the Support System [U2-6.1.2]</h4>\n      </div>\n      <span class=\"text-[11px] font-bold text-pink-700 bg-pink-100 px-2.5 py-1 rounded-full\">Interactive Starter</span>\n    </div>\n\n    <p class=\"text-xs text-slate-600\">\n      อ่านบทความสั้นด้านล่างนี้ แล้วลองสังเกตว่าประโยคใดทำหน้าที่เป็น <strong>Main Idea (ใจความสำคัญ)</strong> และประโยคใดทำหน้าที่เป็น <strong>Supporting Details (รายละเอียดสนับสนุน)</strong>:\n    </p>\n\n    <!-- Warmup Passage Box -->\n    <div class=\"p-4 sm:p-5 bg-slate-900 text-slate-100 rounded-xl font-serif text-xs sm:text-sm leading-relaxed space-y-2 shadow-inner\">\n      <div class=\"text-[10px] font-sans font-bold text-purple-300 uppercase tracking-wider mb-1\">Passage: The Power of Morning Hydration</div>\n      <p>\n        <span class=\"text-amber-200 font-semibold\">(1) Drinking a glass of water immediately after waking up provides critical physiological benefits.</span>\n        <span class=\"text-emerald-200\"> (2) First, it jumpstarts metabolic function and boosts morning alertness.</span>\n        <span class=\"text-sky-200\"> (3) A recent clinical study demonstrates that drinking 500 milliliters of water increases resting metabolic rate by 30% within twenty minutes.</span>\n        <span class=\"text-emerald-200\"> (4) Second, it effectively rehydrates vital organs following six to eight hours of sleep.</span>\n        <span class=\"text-sky-200\"> (5) This rapid rehydration helps prevent mild morning headaches and dry throat.</span>\n      </p>\n    </div>\n\n    <!-- Warm-Up Interactive Question -->\n    <div class=\"p-4 bg-purple-50/80 rounded-xl border border-purple-200/90 space-y-3\">\n      <div class=\"flex items-center justify-between\">\n        <span class=\"text-xs font-bold text-purple-950 flex items-center space-x-1.5\">\n          <i data-lucide=\"help-circle\" class=\"w-4 h-4 text-purple-700\"></i>\n          <span>คำถามอุ่นเครื่อง: ประโยคใดในบทความคือ \"Main Idea\" ที่ครอบคลุมเนื้อหาทั้งหมด?</span>\n        </span>\n        <span class=\"text-[10px] font-mono bg-purple-200 text-purple-900 px-2 py-0.5 rounded font-bold\">U2-6.1.2</span>\n      </div>\n\n      <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs\" id=\"u2-warmup-options\">\n        <button onclick=\"app.checkUnit2Warmup(1)\" class=\"p-3 bg-white rounded-xl border border-purple-200 hover:border-purple-600 text-left transition font-medium cursor-pointer flex items-start space-x-2\">\n          <span class=\"w-5 h-5 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">A</span>\n          <span>ประโยค (1): การดื่มน้ำทันทีหลังตื่นนอนให้ประโยชน์ทางสรีรวิทยาที่สำคัญ</span>\n        </button>\n        <button onclick=\"app.checkUnit2Warmup(2)\" class=\"p-3 bg-white rounded-xl border border-purple-200 hover:border-purple-600 text-left transition font-medium cursor-pointer flex items-start space-x-2\">\n          <span class=\"w-5 h-5 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">B</span>\n          <span>ประโยค (2): ช่วยกระตุ้นระบบการเผาผลาญและเพิ่มความตื่นตัว</span>\n        </button>\n        <button onclick=\"app.checkUnit2Warmup(3)\" class=\"p-3 bg-white rounded-xl border border-purple-200 hover:border-purple-600 text-left transition font-medium cursor-pointer flex items-start space-x-2\">\n          <span class=\"w-5 h-5 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">C</span>\n          <span>ประโยค (3): งานวิจัยพบว่าการดื่มน้ำ 500 มล. เพิ่มอัตราการเผาผลาญ 30%</span>\n        </button>\n        <button onclick=\"app.checkUnit2Warmup(5)\" class=\"p-3 bg-white rounded-xl border border-purple-200 hover:border-purple-600 text-left transition font-medium cursor-pointer flex items-start space-x-2\">\n          <span class=\"w-5 h-5 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">D</span>\n          <span>ประโยค (5): ช่วยป้องกันอาการปวดศีรษะเบาๆ และอาการคอแห้ง</span>\n        </button>\n      </div>\n\n      <div id=\"u2-warmup-feedback\" class=\"hidden p-3 rounded-xl text-xs font-medium\"></div>\n    </div>\n\n    <!-- Navigation to Next Step -->\n    <div class=\"flex justify-end pt-2\">\n      <button onclick=\"app.selectActivityStep('learn')\" class=\"w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer flex items-center justify-center space-x-2 shadow-md\">\n        <span>Next: Learn Key Concepts & Timed Scan Task</span>\n        <i data-lucide=\"arrow-right\" class=\"w-4 h-4\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n        ",
            "learn": "\n<div class=\"space-y-6\">\n  <!-- Header -->\n  <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 pb-4\">\n    <div>\n      <div class=\"flex items-center space-x-2\">\n        <span class=\"px-2.5 py-0.5 bg-purple-700 text-white rounded-md text-[10px] font-bold font-mono\">UNIT 02</span>\n        <span class=\"px-2.5 py-0.5 bg-purple-100 text-purple-800 rounded-md text-[10px] font-bold font-mono\">U2-6.1.3 &bull; U2-5.1..5.4</span>\n        <span class=\"px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-md text-[10px] font-bold\">Key Concepts</span>\n      </div>\n      <h3 class=\"text-lg sm:text-xl font-bold text-slate-900 mt-1\">Pre-Reading Stage: Key Concepts & Timed Scanning</h3>\n      <p class=\"text-xs text-slate-500\">มโนทัศน์สำคัญ: รายละเอียดหลัก vs ย่อย, ความสัมพันธ์ของความคิด, Skimming & Scanning [U2-5.1..5.4]</p>\n    </div>\n    <span class=\"text-xs font-bold text-purple-900 bg-purple-100/80 px-3 py-1.5 rounded-xl shrink-0 self-start sm:self-auto\">Step 2 of 2 in Pre-Reading</span>\n  </div>\n\n  <!-- Concept 1: Major vs Minor Details [U2-5.1] -->\n  <div class=\"p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-4\">\n    <div class=\"flex items-center justify-between border-b border-slate-100 pb-2.5\">\n      <div class=\"flex items-center space-x-2\">\n        <i data-lucide=\"split\" class=\"w-4 h-4 text-purple-700\"></i>\n        <h4 class=\"text-sm sm:text-base font-bold text-slate-900\">1. Major vs. Minor Supporting Details [U2-5.1]</h4>\n      </div>\n      <span class=\"text-[10px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-bold\">Content 5.1</span>\n    </div>\n\n    <p class=\"text-xs text-slate-700 leading-relaxed\">\n      ในบทความเชิงวิชาการ รายละเอียดสนับสนุนไม่ได้มีความสำคัญเท่ากันทั้งหมด ผู้เขียนจะวางโครงสร้างโดยแบ่งเป็น <strong>Major Details</strong> และ <strong>Minor Details</strong>:\n    </p>\n\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs\">\n      <div class=\"p-3.5 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-2\">\n        <div class=\"flex items-center justify-between font-bold text-emerald-950\">\n          <span class=\"flex items-center space-x-1.5\">\n            <span class=\"w-2.5 h-2.5 rounded-full bg-emerald-600\"></span>\n            <span>Major Supporting Details (ประเด็นสนับสนุนหลัก)</span>\n          </span>\n          <span class=\"text-[10px] bg-emerald-200/80 text-emerald-900 px-2 py-0.5 rounded\">Primary Pillars</span>\n        </div>\n        <p class=\"text-emerald-900 leading-relaxed\">\n          คือประเด็นหรือเหตุผลสำคัญที่ <strong>สนับสนุนหรือขยายความ Main Idea โดยตรง</strong> หากตัดประโยคเหล่านี้ออก ใจความสำคัญจะขาดน้ำหนักทันที\n        </p>\n        <div class=\"bg-white/80 p-2.5 rounded-lg border border-emerald-200/60 text-[11px] text-emerald-950\">\n          <strong>คำถามที่ตอบ:</strong> \"อะไรคือเหตุผลหลัก?\", \"มีขั้นตอนหรือวิธีใดบ้าง?\", \"ทำไมจึงเป็นเช่นนั้น?\"\n        </div>\n      </div>\n\n      <div class=\"p-3.5 bg-sky-50/80 border border-sky-200 rounded-xl space-y-2\">\n        <div class=\"flex items-center justify-between font-bold text-sky-950\">\n          <span class=\"flex items-center space-x-1.5\">\n            <span class=\"w-2.5 h-2.5 rounded-full bg-sky-600\"></span>\n            <span>Minor Supporting Details (รายละเอียดสนับสนุนย่อย)</span>\n          </span>\n          <span class=\"text-[10px] bg-sky-200/80 text-sky-900 px-2 py-0.5 rounded\">Concrete Evidence</span>\n        </div>\n        <p class=\"text-sky-900 leading-relaxed\">\n          คือข้อมูลเสริมที่เป็น <strong>หลักฐาน ตัวอย่าง สถิติ วันที่ หรือคำอธิบายเพิ่มเติม</strong> เพื่อทำให้ Major Detail มีความน่าเชื่อถือ ชัดเจน และเห็นภาพ\n        </p>\n        <div class=\"bg-white/80 p-2.5 rounded-lg border border-sky-200/60 text-[11px] text-sky-950\">\n          <strong>คำถามที่ตอบ:</strong> \"มีตัวอย่างรูปธรรมอย่างไร?\", \"ตัวเลขสถิติคือเท่าไร?\", \"งานวิจัยของใครยืนยัน?\"\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Concept 2: Relationships Between Ideas & Signal Words [U2-5.2] -->\n  <div class=\"p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-4\">\n    <div class=\"flex items-center justify-between border-b border-slate-100 pb-2.5\">\n      <div class=\"flex items-center space-x-2\">\n        <i data-lucide=\"git-merge\" class=\"w-4 h-4 text-purple-700\"></i>\n        <h4 class=\"text-sm sm:text-base font-bold text-slate-900\">2. Relationships Between Ideas (ความสัมพันธ์ของความคิด) [U2-5.2]</h4>\n      </div>\n      <span class=\"text-[10px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-bold\">Content 5.2</span>\n    </div>\n\n    <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs\">\n      <!-- Cause & Effect -->\n      <div class=\"p-3 bg-purple-50/90 border border-purple-200 rounded-xl space-y-1.5\">\n        <strong class=\"text-purple-900 block font-bold flex items-center space-x-1\">\n          <i data-lucide=\"arrow-right-circle\" class=\"w-3.5 h-3.5 text-purple-700\"></i>\n          <span>Cause & Effect (เหตุและผล)</span>\n        </strong>\n        <p class=\"text-purple-950 text-[11px]\">บอกสาเหตุและผลลัพธ์ที่ตามมา</p>\n        <div class=\"bg-white p-2 rounded-lg border border-purple-100 text-[11px] font-mono text-purple-900\">\n          because, since, due to, consequently, therefore, as a result, leads to\n        </div>\n      </div>\n\n      <!-- Compare & Contrast -->\n      <div class=\"p-3 bg-amber-50/90 border border-amber-200 rounded-xl space-y-1.5\">\n        <strong class=\"text-amber-900 block font-bold flex items-center space-x-1\">\n          <i data-lucide=\"git-commit\" class=\"w-3.5 h-3.5 text-amber-700\"></i>\n          <span>Compare & Contrast (เปรียบเทียบ)</span>\n        </strong>\n        <p class=\"text-amber-950 text-[11px]\">บอกความเหมือนและความแตกต่าง</p>\n        <div class=\"bg-white p-2 rounded-lg border border-amber-100 text-[11px] font-mono text-amber-900\">\n          similarly, likewise, however, in contrast, on the other hand, whereas, unlike\n        </div>\n      </div>\n\n      <!-- Sequence -->\n      <div class=\"p-3 bg-teal-50/90 border border-teal-200 rounded-xl space-y-1.5\">\n        <strong class=\"text-teal-900 block font-bold flex items-center space-x-1\">\n          <i data-lucide=\"list-ordered\" class=\"w-3.5 h-3.5 text-teal-700\"></i>\n          <span>Sequence (ลำดับเวลา/ขั้นตอน)</span>\n        </strong>\n        <p class=\"text-teal-950 text-[11px]\">บอกขั้นตอนหรือลำดับเหตุการณ์</p>\n        <div class=\"bg-white p-2 rounded-lg border border-teal-100 text-[11px] font-mono text-teal-900\">\n          first, second, next, subsequently, then, finally, previously, meanwhile\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Concept 3: Skimming & Scanning [U2-5.3, U2-5.4] -->\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs\">\n    <div class=\"p-4 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-2\">\n      <div class=\"flex items-center justify-between text-purple-900 font-bold\">\n        <span class=\"flex items-center space-x-1.5\">\n          <i data-lucide=\"zap\" class=\"w-4 h-4 text-amber-500\"></i>\n          <span>Skimming: Reading for Gist [U2-5.3]</span>\n        </span>\n        <span class=\"text-[10px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded\">Speed: 300-500 wpm</span>\n      </div>\n      <p class=\"text-slate-700 leading-relaxed\">\n        การอ่านข้ามอย่างรวดเร็วเพื่อจับใจความสำคัญ (Overall Meaning/Gist) โดยเน้นอ่าน <strong>ชื่อเรื่อง (Title) ย่อหน้าแรก ประโยคแรกของแต่ละย่อหน้า และย่อหน้าสรุป</strong> โดยไม่ต้องหยุดอ่านทุกคำ\n      </p>\n    </div>\n\n    <div class=\"p-4 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-2\">\n      <div class=\"flex items-center justify-between text-purple-900 font-bold\">\n        <span class=\"flex items-center space-x-1.5\">\n          <i data-lucide=\"scan\" class=\"w-4 h-4 text-purple-700\"></i>\n          <span>Scanning: Search for Specific Data [U2-5.4]</span>\n        </span>\n        <span class=\"text-[10px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded\">Laser Focus</span>\n      </div>\n      <p class=\"text-slate-700 leading-relaxed\">\n        การกวาดสายตาแบบเจาะจงเพื่อหาข้อมูลเฉพาะ เช่น <strong>ตัวเลข วันที่ ปี ค.ศ. ชื่อเฉพาะ คำจำกัดความ หรือคำศัพท์เป้าหมาย</strong> โดยล็อกภาพของคำนั้นไว้ในใจแล้วกวาดสายตาลงมาตรงๆ\n      </p>\n    </div>\n  </div>\n\n  <!-- Timed Scanning Task (Short Pre-Reading Version) [U2-6.1.4, U2-5.6] -->\n  <div class=\"p-4 sm:p-6 bg-gradient-to-r from-purple-900 to-indigo-950 text-white rounded-2xl shadow-md space-y-4\">\n    <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-800/80 pb-3\">\n      <div>\n        <div class=\"flex items-center space-x-2\">\n          <span class=\"px-2 py-0.5 bg-amber-400 text-slate-950 font-bold text-[10px] rounded font-mono\">TIMED TASK</span>\n          <span class=\"px-2 py-0.5 bg-purple-800 text-purple-200 font-bold text-[10px] rounded font-mono\">U2-6.1.4 &bull; U2-5.6</span>\n        </div>\n        <h4 class=\"text-base font-bold mt-1 text-white flex items-center space-x-2\">\n          <i data-lucide=\"timer\" class=\"w-5 h-5 text-amber-400\"></i>\n          <span>Pre-Reading Timed Scanning Task (60 Seconds)</span>\n        </h4>\n        <p class=\"text-xs text-purple-200\">ฝึกกวาดสายตาค้นหาข้อมูลเฉพาะเจาะจง 4 ข้อ ภายในเวลา 60 วินาที</p>\n      </div>\n\n      <!-- Real-time Timer Display -->\n      <div class=\"flex items-center space-x-3 bg-purple-950/80 px-4 py-2 rounded-xl border border-purple-700/60 shrink-0\">\n        <div class=\"text-right\">\n          <span class=\"text-[10px] text-purple-300 block uppercase font-bold tracking-wider\">Time Remaining</span>\n          <span id=\"u2-pre-timer\" class=\"text-xl font-bold font-mono text-amber-300\">01:00</span>\n        </div>\n        <button id=\"u2-pre-timer-btn\" onclick=\"app.startUnit2PreTimer()\" class=\"px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition cursor-pointer shadow\">\n          Start Timer\n        </button>\n      </div>\n    </div>\n\n    <!-- Scanning Text Box -->\n    <div class=\"p-4 bg-slate-900/90 rounded-xl border border-purple-800/60 font-serif text-xs sm:text-sm leading-relaxed text-slate-200\">\n      <span class=\"font-sans font-bold text-pink-300 text-[11px] block uppercase tracking-wider mb-1\">\n        Fact Sheet: Annual Migratory Bird Festival — Chiang Rai Wildlife Reserve\n      </span>\n      <p>\n        In <strong>November 2024</strong>, the Chiang Rai Wildlife Conservation Authority hosted its twelfth Annual Migratory Bird Festival with a total operating budget of <strong>8.2 million baht</strong>. Under the direction of <strong>Dr. Apinya Watcharaporn</strong>, rangers recorded the arrival of <strong>420 species</strong> across the reserve's <strong>Lotus Pond Zone</strong>. Over the three-week event, renewable solar-powered lighting installations reduced the reserve's nightly carbon footprint by <strong>62%</strong>. The next festival season will open on <strong>November 8, 2027</strong>.\n      </p>\n    </div>\n\n    <!-- 4 Fast Scanning Questions -->\n    <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-900\">\n      <div class=\"p-3 bg-white rounded-xl space-y-1.5 shadow-xs\">\n        <span class=\"font-bold text-purple-950 block\">1. How many bird species were recorded?</span>\n        <div class=\"grid grid-cols-2 gap-1.5\">\n          <button onclick=\"app.setUnit2PreScanAnswer(1, '280')\" class=\"u2-prescan-q1 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">280</button>\n          <button onclick=\"app.setUnit2PreScanAnswer(1, '420')\" class=\"u2-prescan-q1 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">420</button>\n        </div>\n      </div>\n\n      <div class=\"p-3 bg-white rounded-xl space-y-1.5 shadow-xs\">\n        <span class=\"font-bold text-purple-950 block\">2. In which zone were the most birds recorded?</span>\n        <div class=\"grid grid-cols-2 gap-1.5\">\n          <button onclick=\"app.setUnit2PreScanAnswer(2, 'Lotus Pond Zone')\" class=\"u2-prescan-q2 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">Lotus Pond Zone</button>\n          <button onclick=\"app.setUnit2PreScanAnswer(2, 'Summit Ridge Zone')\" class=\"u2-prescan-q2 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">Summit Ridge Zone</button>\n        </div>\n      </div>\n\n      <div class=\"p-3 bg-white rounded-xl space-y-1.5 shadow-xs\">\n        <span class=\"font-bold text-purple-950 block\">3. By how much did nightly carbon footprint reduce?</span>\n        <div class=\"grid grid-cols-2 gap-1.5\">\n          <button onclick=\"app.setUnit2PreScanAnswer(3, '38%')\" class=\"u2-prescan-q3 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">38%</button>\n          <button onclick=\"app.setUnit2PreScanAnswer(3, '62%')\" class=\"u2-prescan-q3 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">62%</button>\n        </div>\n      </div>\n\n      <div class=\"p-3 bg-white rounded-xl space-y-1.5 shadow-xs\">\n        <span class=\"font-bold text-purple-950 block\">4. What was the total operating budget?</span>\n        <div class=\"grid grid-cols-2 gap-1.5\">\n          <button onclick=\"app.setUnit2PreScanAnswer(4, '8.2 million baht')\" class=\"u2-prescan-q4 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">8.2 million baht</button>\n          <button onclick=\"app.setUnit2PreScanAnswer(4, '12 million baht')\" class=\"u2-prescan-q4 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">12 million baht</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"flex items-center justify-between pt-2\">\n      <button onclick=\"app.submitUnit2PreScan()\" class=\"px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs transition cursor-pointer shadow\">\n        Submit Scanning Answers\n      </button>\n      <div id=\"u2-prescan-result\" class=\"text-xs font-bold text-amber-300\"></div>\n    </div>\n  </div>\n\n  <!-- Previewing the Text Box [U2-6.1.5] -->\n  <div class=\"p-4 bg-purple-50/90 rounded-2xl border border-purple-200 text-xs space-y-2\">\n    <div class=\"flex items-center space-x-2 text-purple-950 font-bold\">\n      <i data-lucide=\"eye\" class=\"w-4 h-4 text-purple-700\"></i>\n      <span>Previewing & Predicting Relationships [U2-6.1.5, U2-5.3]</span>\n    </div>\n    <p class=\"text-purple-900 leading-relaxed\">\n      ก่อนก้าวเข้าสู่ขั้น While-Reading: สังเกตชื่อบทอ่าน <em>\"The Global Rise of Specialty Coffee Farming\"</em> และคาดการณ์ว่าบทความจะนำเสนอความสัมพันธ์ของความคิดรูปแบบใด (เช่น สาเหตุที่ผ้าไหมฟื้นตัว หรือขั้นตอนการผลิต) เพื่อเตรียมสมองให้พร้อมรับข้อมูลอย่างมีประสิทธิภาพ\n    </p>\n  </div>\n\n  <!-- Navigation -->\n  <div class=\"flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-2\">\n    <button onclick=\"app.selectActivityStep('overview')\" class=\"w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center\">\n      ⬅ Back: Overview & Warm-Up\n    </button>\n    <button onclick=\"app.selectStageAndStep('whileReading', 'learn')\" class=\"w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer flex items-center justify-center space-x-2 shadow-md\">\n      <span>Next Stage: While-Reading Demo & Practice</span>\n      <i data-lucide=\"arrow-right\" class=\"w-4 h-4\"></i>\n    </button>\n  </div>\n</div>\n        "
          }
        },
        "whileReading": {
          "title": "While-Reading Stage",
          "steps": {
            "learn": "\n<div class=\"space-y-6\">\n  <!-- Header -->\n  <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 pb-4\">\n    <div>\n      <div class=\"flex items-center space-x-2\">\n        <span class=\"px-2.5 py-0.5 bg-purple-700 text-white rounded-md text-[10px] font-bold font-mono\">UNIT 02</span>\n        <span class=\"px-2.5 py-0.5 bg-purple-100 text-purple-800 rounded-md text-[10px] font-bold font-mono\">U2-6.2.1</span>\n        <span class=\"px-2.5 py-0.5 bg-indigo-100 text-indigo-800 rounded-md text-[10px] font-bold\">Guided Demo</span>\n      </div>\n      <h3 class=\"text-lg sm:text-xl font-bold text-slate-900 mt-1\">While-Reading Stage: Guided Reading Demo</h3>\n      <p class=\"text-xs text-slate-500\">สาธิตการใช้เทคนิค Skimming & Scanning ร่วมกับบทอ่านตัวอย่าง [U2-6.2.1]</p>\n    </div>\n    <span class=\"text-xs font-bold text-purple-900 bg-purple-100/80 px-3 py-1.5 rounded-xl shrink-0 self-start sm:self-auto\">Step 1 of 3 in While-Reading</span>\n  </div>\n\n  <!-- Audio Player & Passage Box [U2-6.2.1] -->\n  <div class=\"bg-slate-900 text-slate-100 p-4 sm:p-6 rounded-2xl space-y-4 shadow-lg\">\n    <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700 pb-3\">\n      <div>\n        <span class=\"text-[10px] font-bold text-pink-300 uppercase tracking-wider block\">Worked Example Passage [U2-6.2.1]</span>\n        <h4 class=\"text-base font-bold text-white mt-0.5\">The Global Rise of Specialty Coffee Farming</h4>\n      </div>\n\n      <div class=\"flex items-center space-x-2\">\n        <!-- Speed selector -->\n        <div class=\"flex items-center space-x-1.5 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5\">\n          <i data-lucide=\"gauge\" class=\"w-3.5 h-3.5 text-purple-300\"></i>\n          <select onchange=\"app.setAudioSpeed(this.value)\" class=\"bg-transparent text-purple-200 text-xs font-semibold focus:outline-none cursor-pointer\">\n            <option value=\"0.65\" class=\"bg-slate-900 text-white\">0.65x (ช้ามาก)</option>\n            <option value=\"0.75\" selected class=\"bg-slate-900 text-white\">0.75x (ช้าชัดเจน ✨)</option>\n            <option value=\"0.85\" class=\"bg-slate-900 text-white\">0.85x (ปานกลาง)</option>\n            <option value=\"1.0\" class=\"bg-slate-900 text-white\">1.0x (ปกติ)</option>\n          </select>\n        </div>\n\n        <button onclick=\"app.togglePassageAudio(encodeURIComponent('Specialty coffee farming has emerged as one of the most dynamic and rapidly growing agricultural sectors worldwide, driven by changing consumer tastes and sustainable farming practices. First, high-altitude growing conditions in mountainous regions of Ethiopia, Colombia, and Thailand produce beans with exceptional flavor complexity. Scientists at the International Coffee Research Institute confirm that elevations above 1,400 meters slow bean maturation, allowing sugars to develop more fully and producing distinctively bright acidity and rich floral aromas prized by specialty buyers. Second, direct-trade partnerships between small-scale farmers and global roasters have dramatically expanded market access and fair compensation for growers. By forming certified cooperatives in 2023, three highland farming communities in northern Thailand exported over 8,000 kilograms of single-origin beans to specialty cafes in fifteen countries across Europe and North America. Consequently, participating farm households recorded an average forty-one percent increase in annual income, demonstrating that quality-driven agriculture transforms traditional livelihoods into thriving global enterprises.'))\" class=\"px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer shadow-md\">\n          <i data-lucide=\"volume-2\" class=\"w-4 h-4\"></i>\n          <span id=\"audio-btn-label\">Listen Passage</span>\n        </button>\n      </div>\n    </div>\n\n    <!-- Passage Paragraphs with Visual Role Breakdown -->\n    <div class=\"space-y-4 font-serif text-xs sm:text-sm leading-relaxed text-slate-200\">\n      <!-- Paragraph 1: Main Idea -->\n      <div class=\"p-3.5 bg-slate-800/80 rounded-xl border-l-4 border-amber-400 space-y-1.5\">\n        <div class=\"flex items-center justify-between text-[11px] font-sans\">\n          <span class=\"font-bold text-amber-300 uppercase tracking-wider\">[Paragraph 1: Overarching Main Idea]</span>\n          <span class=\"bg-amber-400/20 text-amber-200 px-2 py-0.5 rounded font-mono text-[10px]\">Topic Sentence</span>\n        </div>\n        <p>\n          <span class=\"highlighter-pen highlighter-yellow\">Specialty coffee farming has emerged as one of the most dynamic and rapidly growing agricultural sectors worldwide, driven by changing consumer tastes and sustainable farming practices.</span>\n        </p>\n      </div>\n\n      <!-- Paragraph 2: Major Detail 1 & Minor Evidences -->\n      <div class=\"p-3.5 bg-slate-800/80 rounded-xl border-l-4 border-emerald-500 space-y-2\">\n        <div class=\"flex items-center justify-between text-[11px] font-sans\">\n          <span class=\"font-bold text-emerald-300 uppercase tracking-wider\">[Paragraph 2: Major Detail 1 + Supporting Evidence]</span>\n          <span class=\"bg-emerald-500/20 text-emerald-200 px-2 py-0.5 rounded font-mono text-[10px]\">Natural Heritage & Science</span>\n        </div>\n        <p>\n          <span class=\"highlighter-pen highlighter-green\">First, high-altitude growing conditions in mountainous regions of Ethiopia, Colombia, and Thailand produce beans with exceptional flavor complexity.</span>\n          <span class=\"highlighter-pen highlighter-blue\">Scientists at the International Coffee Research Institute confirm that elevations above 1,400 meters slow bean maturation, allowing sugars to develop more fully and producing distinctively bright acidity and rich floral aromas prized by specialty buyers.</span>\n        </p>\n        <div class=\"bg-slate-900/90 p-2.5 rounded-lg border border-emerald-500/30 font-sans text-xs text-emerald-200 flex items-start space-x-2\">\n          <i data-lucide=\"info\" class=\"w-4 h-4 text-emerald-400 shrink-0 mt-0.5\"></i>\n          <div>\n            <strong>Why This Works (วิเคราะห์บทบาท):</strong> ประโยคสีเขียวคือ <em>Major Supporting Detail</em> (บอกเหตุผลหลักข้อที่ 1) ส่วนประโยคสีฟ้าคือ <em>Minor Detail</em> (ให้ข้อมูลเชิงลึกทางวิทยาศาสตร์: ระดับความสูง 1,400 เมตร และกระบวนการพัฒนาน้ำตาลในเมล็ดกาแฟ)\n          </div>\n        </div>\n      </div>\n\n      <!-- Paragraph 3: Major Detail 2 & Minor Evidences -->\n      <div class=\"p-3.5 bg-slate-800/80 rounded-xl border-l-4 border-emerald-500 space-y-2\">\n        <div class=\"flex items-center justify-between text-[11px] font-sans\">\n          <span class=\"font-bold text-emerald-300 uppercase tracking-wider\">[Paragraph 3: Major Detail 2 + Global Export Data]</span>\n          <span class=\"bg-emerald-500/20 text-emerald-200 px-2 py-0.5 rounded font-mono text-[10px]\">Digital Modernization</span>\n        </div>\n        <p>\n          <span class=\"highlighter-pen highlighter-green\">Second, direct-trade partnerships between small-scale farmers and global roasters have dramatically expanded market access and fair compensation for growers.</span>\n          <span class=\"highlighter-pen highlighter-blue\">By forming certified cooperatives in 2023, three highland farming communities in northern Thailand exported over 8,000 kilograms of single-origin beans to specialty cafes in fifteen countries across Europe and North America.</span>\n          <span class=\"highlighter-pen highlighter-yellow\">Consequently, participating farm households recorded an average forty-one percent increase in annual income, demonstrating that quality-driven agriculture transforms traditional livelihoods into thriving global enterprises.</span>\n        </p>\n        <div class=\"bg-slate-900/90 p-2.5 rounded-lg border border-emerald-500/30 font-sans text-xs text-emerald-200 flex items-start space-x-2\">\n          <i data-lucide=\"info\" class=\"w-4 h-4 text-emerald-400 shrink-0 mt-0.5\"></i>\n          <div>\n            <strong>Signal Word Analysis:</strong> คำว่า <em>'Consequently'</em> ชี้บอกผลลัพธ์ (Cause & Effect) ระหว่างการส่งออกผ้าไหมกับรายได้ของชุมชนที่เพิ่มขึ้น 32%\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Skimming & Scanning Demonstration Cards [U2-6.2.1] -->\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs\">\n    <div class=\"p-4 bg-white rounded-2xl border border-amber-200 shadow-xs space-y-2\">\n      <div class=\"flex items-center space-x-2 text-amber-900 font-bold\">\n        <i data-lucide=\"zap\" class=\"w-4 h-4 text-amber-600\"></i>\n        <span>Skimming Demo: Extract Gist in 10s [U2-5.3]</span>\n      </div>\n      <p class=\"text-slate-700 leading-relaxed\">\n        <strong>การกวาดสายตาจับใจความ:</strong> อ่านชื่อเรื่อง + ประโยคแรกของย่อหน้า 1, 2, 3 ➔ สรุปภาพรวมได้ทันทีว่า: <em>\"ผ้าไหมภูเขาไฟของบุรีรัมย์ประสบความสำเร็จในการฟื้นฟูวัฒนธรรมและเศรษฐกิจ โดยมีปัจจัยจากเอกลักษณ์ของดินภูเขาไฟ และการขยายตลาดดิจิทัลสู่สากล\"</em>\n      </p>\n    </div>\n\n    <div class=\"p-4 bg-white rounded-2xl border border-purple-200 shadow-xs space-y-2\">\n      <div class=\"flex items-center space-x-2 text-purple-900 font-bold\">\n        <i data-lucide=\"scan\" class=\"w-4 h-4 text-purple-700\"></i>\n        <span>Scanning Demo: Extract Data in 5s [U2-5.4]</span>\n      </div>\n      <p class=\"text-slate-700 leading-relaxed\">\n        <strong>การสแกนหาข้อมูลเฉพาะ:</strong>\n        <br>&bull; <em>Institute:</em> ล็อกสายตาหาคำขึ้นต้นพิมพ์ใหญ่ ➔ พบ <strong>International Coffee Research Institute</strong>\n        <br>&bull; <em>Altitude threshold:</em> ล็อกสายตาหาตัวเลขระดับความสูง ➔ พบ <strong>1,400 meters</strong>\n        <br>&bull; <em>Income growth:</em> ล็อกสายตาหาคำว่า percent ➔ พบ <strong>forty-one percent</strong>\n      </p>\n    </div>\n  </div>\n\n  <!-- Navigation -->\n  <div class=\"flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-2\">\n    <button onclick=\"app.selectStageAndStep('preReading', 'learn')\" class=\"w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center\">\n      ⬅ Back: Pre-Reading Concepts\n    </button>\n    <button onclick=\"app.selectActivityStep('example')\" class=\"w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer flex items-center justify-center space-x-2 shadow-md\">\n      <span>Next: Highlighting Practice & Signal Words</span>\n      <i data-lucide=\"arrow-right\" class=\"w-4 h-4\"></i>\n    </button>\n  </div>\n</div>\n        ",
            "example": "\n<div class=\"space-y-6\">\n  <!-- Header -->\n  <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 pb-4\">\n    <div>\n      <div class=\"flex items-center space-x-2\">\n        <span class=\"px-2.5 py-0.5 bg-purple-700 text-white rounded-md text-[10px] font-bold font-mono\">UNIT 02</span>\n        <span class=\"px-2.5 py-0.5 bg-purple-100 text-purple-800 rounded-md text-[10px] font-bold font-mono\">U2-6.2.2 &bull; U2-6.2.4</span>\n        <span class=\"px-2.5 py-0.5 bg-amber-100 text-amber-800 rounded-md text-[10px] font-bold\">Interactive Tool</span>\n      </div>\n      <h3 class=\"text-lg sm:text-xl font-bold text-slate-900 mt-1\">Reading Practice with Colour Highlighting Tool</h3>\n      <p class=\"text-xs text-slate-500\">ฝึกไฮไลต์จำแนก Main Idea, Major Details, Minor Details และระบุ Signal Words [U2-6.2.2, U2-6.2.4]</p>\n    </div>\n    <span class=\"text-xs font-bold text-purple-900 bg-purple-100/80 px-3 py-1.5 rounded-xl shrink-0 self-start sm:self-auto\">Step 2 of 3 in While-Reading</span>\n  </div>\n\n  <!-- Highlight Palette & Legend (Data-Driven Per Unit 2 Plan) [U2-6.2.2] -->\n  <div class=\"p-4 bg-white rounded-2xl border border-purple-200 shadow-sm space-y-3\">\n    <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2.5\">\n      <div class=\"flex items-center space-x-2\">\n        <i data-lucide=\"highlighter\" class=\"w-4 h-4 text-purple-700\"></i>\n        <span class=\"text-xs font-bold text-slate-900\">Unit 2 Official Highlighting Scheme (เกณฑ์สีทางการตามแผนการสอน) [U2-6.2.2]</span>\n      </div>\n      <span class=\"text-[10px] font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200\">Always Visible Legend</span>\n    </div>\n\n    <!-- Color Legend Badges -->\n    <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs\">\n      <div class=\"p-2.5 bg-yellow-50 border-2 border-yellow-300 rounded-xl flex items-center space-x-2 text-yellow-950 font-bold\">\n        <span class=\"w-4 h-4 rounded-full bg-yellow-400 border border-yellow-600 shadow-xs shrink-0\"></span>\n        <span>Yellow = Main Idea (ใจความสำคัญ)</span>\n      </div>\n      <div class=\"p-2.5 bg-emerald-50 border-2 border-emerald-300 rounded-xl flex items-center space-x-2 text-emerald-950 font-bold\">\n        <span class=\"w-4 h-4 rounded-full bg-emerald-500 border border-emerald-700 shadow-xs shrink-0\"></span>\n        <span>Green = Major Supporting Details</span>\n      </div>\n      <div class=\"p-2.5 bg-sky-50 border-2 border-sky-300 rounded-xl flex items-center space-x-2 text-sky-950 font-bold\">\n        <span class=\"w-4 h-4 rounded-full bg-sky-400 border border-sky-600 shadow-xs shrink-0\"></span>\n        <span>Blue = Minor Supporting Details</span>\n      </div>\n    </div>\n  </div>\n\n  <!-- Interactive Highlighting Passage Box [U2-6.2.2] -->\n  <div class=\"p-4 sm:p-6 bg-slate-900 text-slate-100 rounded-2xl shadow-lg space-y-4\">\n    <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700 pb-3\">\n      <div>\n        <span class=\"text-[10px] font-bold text-amber-300 uppercase tracking-wider block\">Interactive Highlighting Practice [U2-6.2.2]</span>\n        <h4 class=\"text-sm sm:text-base font-bold text-white mt-0.5\">Causes and Effects of Urban Green Spaces in Southeast Asia</h4>\n      </div>\n      <div class=\"flex items-center space-x-2\">\n        <button onclick=\"app.resetUnit2Highlights()\" class=\"px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition cursor-pointer\">\n          Reset All\n        </button>\n        <button onclick=\"app.revealUnit2Highlights()\" class=\"px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-bold transition cursor-pointer shadow\">\n          Reveal Teacher's Analysis\n        </button>\n      </div>\n    </div>\n\n    <p class=\"text-xs text-slate-400 font-sans\">\n      คลิกที่ปุ่มสีด้านล่างของแต่ละประโยค เพื่อเลือกบทบาทของประโยคตามความเข้าใจของคุณ:\n    </p>\n\n    <!-- Sentence By Sentence Interactive Units -->\n    <div class=\"space-y-3 text-xs sm:text-sm font-serif leading-relaxed\" id=\"u2-highlight-container\">\n      <!-- S1 -->\n      <div id=\"u2-s1-box\" class=\"p-3 bg-slate-800/90 rounded-xl border border-slate-700 space-y-2 transition\">\n        <p id=\"u2-s1-text\" class=\"text-slate-200\">\n          (1) Integrating verdant green parks into dense Southeast Asian metropolitan centers produces profound environmental and psychological benefits for urban residents.\n        </p>\n        <div class=\"flex items-center justify-between pt-1 border-t border-slate-700/60 font-sans text-xs\">\n          <span class=\"text-slate-400 text-[11px]\">เลือกบทบาทของประโยค (1):</span>\n          <div class=\"flex items-center space-x-1.5\">\n            <button onclick=\"app.highlightSentence(1, 'yellow')\" class=\"px-2.5 py-1 bg-yellow-400 hover:bg-yellow-300 text-slate-900 rounded font-bold text-[10px] cursor-pointer\">Main Idea</button>\n            <button onclick=\"app.highlightSentence(1, 'green')\" class=\"px-2.5 py-1 bg-emerald-500 hover:bg-emerald-400 text-white rounded font-bold text-[10px] cursor-pointer\">Major Detail</button>\n            <button onclick=\"app.highlightSentence(1, 'blue')\" class=\"px-2.5 py-1 bg-sky-400 hover:bg-sky-300 text-slate-900 rounded font-bold text-[10px] cursor-pointer\">Minor Detail</button>\n          </div>\n        </div>\n        <div id=\"u2-s1-feedback\" class=\"hidden text-[11px] font-sans pt-1\"></div>\n      </div>\n\n      <!-- S2 -->\n      <div id=\"u2-s2-box\" class=\"p-3 bg-slate-800/90 rounded-xl border border-slate-700 space-y-2 transition\">\n        <p id=\"u2-s2-text\" class=\"text-slate-200\">\n          (2) First, urban forests significantly reduce the intense heat island effect generated by asphalt roadways and concrete architecture.\n        </p>\n        <div class=\"flex items-center justify-between pt-1 border-t border-slate-700/60 font-sans text-xs\">\n          <span class=\"text-slate-400 text-[11px]\">เลือกบทบาทของประโยค (2):</span>\n          <div class=\"flex items-center space-x-1.5\">\n            <button onclick=\"app.highlightSentence(2, 'yellow')\" class=\"px-2.5 py-1 bg-yellow-400 hover:bg-yellow-300 text-slate-900 rounded font-bold text-[10px] cursor-pointer\">Main Idea</button>\n            <button onclick=\"app.highlightSentence(2, 'green')\" class=\"px-2.5 py-1 bg-emerald-500 hover:bg-emerald-400 text-white rounded font-bold text-[10px] cursor-pointer\">Major Detail</button>\n            <button onclick=\"app.highlightSentence(2, 'blue')\" class=\"px-2.5 py-1 bg-sky-400 hover:bg-sky-300 text-slate-900 rounded font-bold text-[10px] cursor-pointer\">Minor Detail</button>\n          </div>\n        </div>\n        <div id=\"u2-s2-feedback\" class=\"hidden text-[11px] font-sans pt-1\"></div>\n      </div>\n\n      <!-- S3 -->\n      <div id=\"u2-s3-box\" class=\"p-3 bg-slate-800/90 rounded-xl border border-slate-700 space-y-2 transition\">\n        <p id=\"u2-s3-text\" class=\"text-slate-200\">\n          (3) Empirical measurements in Bangkok showed that canopy-covered public gardens lower ambient street temperatures by 3.8 degrees Celsius compared to unshaded highway corridors.\n        </p>\n        <div class=\"flex items-center justify-between pt-1 border-t border-slate-700/60 font-sans text-xs\">\n          <span class=\"text-slate-400 text-[11px]\">เลือกบทบาทของประโยค (3):</span>\n          <div class=\"flex items-center space-x-1.5\">\n            <button onclick=\"app.highlightSentence(3, 'yellow')\" class=\"px-2.5 py-1 bg-yellow-400 hover:bg-yellow-300 text-slate-900 rounded font-bold text-[10px] cursor-pointer\">Main Idea</button>\n            <button onclick=\"app.highlightSentence(3, 'green')\" class=\"px-2.5 py-1 bg-emerald-500 hover:bg-emerald-400 text-white rounded font-bold text-[10px] cursor-pointer\">Major Detail</button>\n            <button onclick=\"app.highlightSentence(3, 'blue')\" class=\"px-2.5 py-1 bg-sky-400 hover:bg-sky-300 text-slate-900 rounded font-bold text-[10px] cursor-pointer\">Minor Detail</button>\n          </div>\n        </div>\n        <div id=\"u2-s3-feedback\" class=\"hidden text-[11px] font-sans pt-1\"></div>\n      </div>\n\n      <!-- S4 -->\n      <div id=\"u2-s4-box\" class=\"p-3 bg-slate-800/90 rounded-xl border border-slate-700 space-y-2 transition\">\n        <p id=\"u2-s4-text\" class=\"text-slate-200\">\n          (4) Second, accessible community green spaces substantially improve citizen mental health and emotional well-being.\n        </p>\n        <div class=\"flex items-center justify-between pt-1 border-t border-slate-700/60 font-sans text-xs\">\n          <span class=\"text-slate-400 text-[11px]\">เลือกบทบาทของประโยค (4):</span>\n          <div class=\"flex items-center space-x-1.5\">\n            <button onclick=\"app.highlightSentence(4, 'yellow')\" class=\"px-2.5 py-1 bg-yellow-400 hover:bg-yellow-300 text-slate-900 rounded font-bold text-[10px] cursor-pointer\">Main Idea</button>\n            <button onclick=\"app.highlightSentence(4, 'green')\" class=\"px-2.5 py-1 bg-emerald-500 hover:bg-emerald-400 text-white rounded font-bold text-[10px] cursor-pointer\">Major Detail</button>\n            <button onclick=\"app.highlightSentence(4, 'blue')\" class=\"px-2.5 py-1 bg-sky-400 hover:bg-sky-300 text-slate-900 rounded font-bold text-[10px] cursor-pointer\">Minor Detail</button>\n          </div>\n        </div>\n        <div id=\"u2-s4-feedback\" class=\"hidden text-[11px] font-sans pt-1\"></div>\n      </div>\n\n      <!-- S5 -->\n      <div id=\"u2-s5-box\" class=\"p-3 bg-slate-800/90 rounded-xl border border-slate-700 space-y-2 transition\">\n        <p id=\"u2-s5-text\" class=\"text-slate-200\">\n          (5) In a randomized survey of 450 university students, individuals who walked twenty minutes daily through natural botanical zones reported a 28% drop in salivary cortisol stress levels.\n        </p>\n        <div class=\"flex items-center justify-between pt-1 border-t border-slate-700/60 font-sans text-xs\">\n          <span class=\"text-slate-400 text-[11px]\">เลือกบทบาทของประโยค (5):</span>\n          <div class=\"flex items-center space-x-1.5\">\n            <button onclick=\"app.highlightSentence(5, 'yellow')\" class=\"px-2.5 py-1 bg-yellow-400 hover:bg-yellow-300 text-slate-900 rounded font-bold text-[10px] cursor-pointer\">Main Idea</button>\n            <button onclick=\"app.highlightSentence(5, 'green')\" class=\"px-2.5 py-1 bg-emerald-500 hover:bg-emerald-400 text-white rounded font-bold text-[10px] cursor-pointer\">Major Detail</button>\n            <button onclick=\"app.highlightSentence(5, 'blue')\" class=\"px-2.5 py-1 bg-sky-400 hover:bg-sky-300 text-slate-900 rounded font-bold text-[10px] cursor-pointer\">Minor Detail</button>\n          </div>\n        </div>\n        <div id=\"u2-s5-feedback\" class=\"hidden text-[11px] font-sans pt-1\"></div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Signal Words Reference & Practice [U2-5.2, U2-6.2.4] -->\n  <div class=\"p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3\">\n    <div class=\"flex items-center justify-between border-b border-slate-100 pb-2.5\">\n      <div class=\"flex items-center space-x-2\">\n        <i data-lucide=\"git-branch\" class=\"w-4 h-4 text-purple-700\"></i>\n        <h4 class=\"text-sm font-bold text-slate-900\">Signal Words Identification [U2-6.2.4]</h4>\n      </div>\n      <span class=\"text-[10px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-bold\">U2-5.2 &bull; Practice</span>\n    </div>\n\n    <p class=\"text-xs text-slate-700\">\n      ในประโยค (3) วลี <em>\"compared to\"</em> และในประโยค (2) คำว่า <em>\"First\"</em> แสดงความสัมพันธ์ของความคิดรูปแบบใด?\n    </p>\n\n    <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs\">\n      <div class=\"p-3 bg-purple-50 rounded-xl space-y-1\">\n        <span class=\"font-bold text-purple-900 block\">&bull; คำเชื่อม 'First' และ 'Second':</span>\n        <span class=\"text-purple-950 font-medium\">แสดงความสัมพันธ์แบบ <strong>Sequence / Order of Importance</strong> (ลำดับความสำคัญของประเด็นสนับสนุน)</span>\n      </div>\n      <div class=\"p-3 bg-amber-50 rounded-xl space-y-1\">\n        <span class=\"font-bold text-amber-900 block\">&bull; คำเชื่อม 'compared to':</span>\n        <span class=\"text-amber-950 font-medium\">แสดงความสัมพันธ์แบบ <strong>Compare & Contrast</strong> (เปรียบเทียบความแตกต่างระหว่างอุณหภูมิในสวนกับบนถนน)</span>\n      </div>\n    </div>\n  </div>\n\n  <!-- In-Class Pair Activity Card [U2-6.2.5] -->\n  <div class=\"p-4 bg-purple-100/70 border border-purple-200 rounded-2xl text-xs space-y-1.5\">\n    <div class=\"flex items-center space-x-2 text-purple-950 font-bold\">\n      <i data-lucide=\"users\" class=\"w-4 h-4 text-purple-700\"></i>\n      <span>In-class activity (กิจกรรมในชั้นเรียน) [U2-6.2.5]</span>\n    </div>\n    <p class=\"text-purple-900 leading-relaxed\">\n      ให้นักศึกษาจับคู่กับเพื่อน (Pair Work) เพื่อเปรียบเทียบการจัดหมวดหมู่สีไฮไลต์ในบทอ่านข้างต้น ร่วมกันอภิปรายเหตุผลว่าเพราะเหตุใดประโยค (3) และ (5) จึงจัดเป็น Minor Details พร้อมส่งตัวแทนแลกเปลี่ยนกับเพื่อนในห้อง\n    </p>\n  </div>\n\n  <!-- Feedback & Strategy Reflection [U2-6.2.6] -->\n  <div class=\"p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs space-y-1.5 text-emerald-950\">\n    <div class=\"flex items-center space-x-2 font-bold\">\n      <i data-lucide=\"check-circle\" class=\"w-4 h-4 text-emerald-700\"></i>\n      <span>Feedback & Strategy Reflection (สะท้อนผลการเรียนรู้) [U2-6.2.6]</span>\n    </div>\n    <p class=\"leading-relaxed\">\n      <strong>หลักการจำง่ายๆ:</strong> Main Idea คือ 'ร่มคันใหญ่' | Major Details คือ 'ก้านร่ม' | Minor Details คือ 'หยดน้ำฝนที่ตกลงมาใส่ก้านร่ม' หากคุณสามารถแยกแยะระดับของประโยคได้ คุณจะอ่านบทความวิจัยและทำข้อสอบ Reading Comprehension ได้อย่างแม่นยำ 100%\n    </p>\n  </div>\n\n  <!-- Navigation -->\n  <div class=\"flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-2\">\n    <button onclick=\"app.selectActivityStep('learn')\" class=\"w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center\">\n      ⬅ Back: Guided Demo\n    </button>\n    <button onclick=\"app.selectActivityStep('practice')\" class=\"w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer flex items-center justify-center space-x-2 shadow-md\">\n      <span>Next: Main Idea Challenge (Graded &bull; 70%)</span>\n      <i data-lucide=\"arrow-right\" class=\"w-4 h-4\"></i>\n    </button>\n  </div>\n</div>\n        ",
            "practice": "\n<div class=\"space-y-6\">\n  <!-- Header -->\n  <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 pb-4\">\n    <div>\n      <div class=\"flex items-center space-x-2\">\n        <span class=\"px-2.5 py-0.5 bg-amber-600 text-white rounded-md text-[10px] font-bold font-mono\">GRADED ASSESSMENT</span>\n        <span class=\"px-2.5 py-0.5 bg-purple-100 text-purple-800 rounded-md text-[10px] font-bold font-mono\">U2-5.5 &bull; U2-6.2.3</span>\n        <span class=\"px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-md text-[10px] font-bold\">Indicator 3.3</span>\n      </div>\n      <h3 class=\"text-lg sm:text-xl font-bold text-slate-900 mt-1\">Main Idea Challenge (แบบทดสอบท้าทายระดับประโยค)</h3>\n      <p class=\"text-xs text-slate-500\">จำแนก Main Idea vs Major Supporting Detail vs Minor Detail (เกณฑ์ผ่าน &ge; 70%) [U2-5.5, U2-6.2.3]</p>\n    </div>\n\n    <!-- Live Score Display -->\n    <div id=\"u2-challenge-score-badge\" class=\"flex items-center space-x-2 bg-purple-100 px-3.5 py-1.5 rounded-xl border border-purple-200 shrink-0 self-start sm:self-auto\">\n      <i data-lucide=\"award\" class=\"w-4 h-4 text-purple-700\"></i>\n      <span class=\"text-xs font-bold text-purple-900\">Score: <span id=\"u2-challenge-score\">0 / 6</span></span>\n    </div>\n  </div>\n\n  <!-- Instruction Box -->\n  <div class=\"p-4 bg-purple-50/80 rounded-2xl border border-purple-200 text-xs text-purple-950 space-y-1\">\n    <strong>คำชี้แจงการทำกิจกรรม (Graded Challenge):</strong>\n    <p class=\"leading-relaxed\">\n      จงพิจารณาข้อความที่กำหนดให้ในแต่ละข้อ แล้วระบุว่าข้อความนั้นทำหน้าที่เป็น <strong>Main Idea (ใจความสำคัญ)</strong>, <strong>Major Supporting Detail (ประเด็นสนับสนุนหลัก)</strong> หรือ <strong>Minor Supporting Detail (รายละเอียดสนับสนุนย่อย)</strong> โดยต้องได้คะแนนไม่ต่ำกว่า 70% (4 จาก 6 ข้อขึ้นไป) เพื่อผ่านเกณฑ์ตัวบ่งชี้ 3.3\n    </p>\n  </div>\n\n  <!-- 6 Challenging Items [U2-5.5, U2-6.2.3] -->\n  <div class=\"space-y-4\" id=\"u2-challenge-items\">\n    <!-- Item 1 -->\n    <div class=\"p-4 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3\">\n      <div class=\"flex items-center justify-between text-xs\">\n        <span class=\"font-bold text-purple-900\">Item 1 of 6</span>\n        <span class=\"text-[10px] font-mono text-slate-400\">Context: Renewable Energy</span>\n      </div>\n      <p class=\"text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200\">\n        \"Solar photovoltaic technology has become the most economically viable renewable energy source across rural Thailand.\"\n      </p>\n      <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs\">\n        <button onclick=\"app.submitUnit2Challenge(1, 0)\" class=\"u2-c1-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">A. Main Idea</button>\n        <button onclick=\"app.submitUnit2Challenge(1, 1)\" class=\"u2-c1-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">B. Major Supporting Detail</button>\n        <button onclick=\"app.submitUnit2Challenge(1, 2)\" class=\"u2-c1-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">C. Minor Supporting Detail</button>\n      </div>\n      <div id=\"u2-c1-fb\" class=\"hidden text-xs font-medium p-2.5 rounded-lg\"></div>\n    </div>\n\n    <!-- Item 2 -->\n    <div class=\"p-4 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3\">\n      <div class=\"flex items-center justify-between text-xs\">\n        <span class=\"font-bold text-purple-900\">Item 2 of 6</span>\n        <span class=\"text-[10px] font-mono text-slate-400\">Context: Renewable Energy</span>\n      </div>\n      <p class=\"text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200\">\n        \"One major advantage is the dramatic fifty-eight percent decline in solar panel manufacturing costs over the past decade.\"\n      </p>\n      <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs\">\n        <button onclick=\"app.submitUnit2Challenge(2, 0)\" class=\"u2-c2-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">A. Main Idea</button>\n        <button onclick=\"app.submitUnit2Challenge(2, 1)\" class=\"u2-c2-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">B. Major Supporting Detail</button>\n        <button onclick=\"app.submitUnit2Challenge(2, 2)\" class=\"u2-c2-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">C. Minor Supporting Detail</button>\n      </div>\n      <div id=\"u2-c2-fb\" class=\"hidden text-xs font-medium p-2.5 rounded-lg\"></div>\n    </div>\n\n    <!-- Item 3 -->\n    <div class=\"p-4 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3\">\n      <div class=\"flex items-center justify-between text-xs\">\n        <span class=\"font-bold text-purple-900\">Item 3 of 6</span>\n        <span class=\"text-[10px] font-mono text-slate-400\">Context: Renewable Energy</span>\n      </div>\n      <p class=\"text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200\">\n        \"According to the 2025 Energy Ministry Report, average installation costs dropped from 85 baht per watt to 36 baht per watt in Nakhon Ratchasima.\"\n      </p>\n      <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs\">\n        <button onclick=\"app.submitUnit2Challenge(3, 0)\" class=\"u2-c3-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">A. Main Idea</button>\n        <button onclick=\"app.submitUnit2Challenge(3, 1)\" class=\"u2-c3-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">B. Major Supporting Detail</button>\n        <button onclick=\"app.submitUnit2Challenge(3, 2)\" class=\"u2-c3-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">C. Minor Supporting Detail</button>\n      </div>\n      <div id=\"u2-c3-fb\" class=\"hidden text-xs font-medium p-2.5 rounded-lg\"></div>\n    </div>\n\n    <!-- Item 4 -->\n    <div class=\"p-4 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3\">\n      <div class=\"flex items-center justify-between text-xs\">\n        <span class=\"font-bold text-purple-900\">Item 4 of 6</span>\n        <span class=\"text-[10px] font-mono text-slate-400\">Context: University Life</span>\n      </div>\n      <p class=\"text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200\">\n        \"Effective time management empowers university students to balance academic rigor with personal well-being.\"\n      </p>\n      <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs\">\n        <button onclick=\"app.submitUnit2Challenge(4, 0)\" class=\"u2-c4-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">A. Main Idea</button>\n        <button onclick=\"app.submitUnit2Challenge(4, 1)\" class=\"u2-c4-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">B. Major Supporting Detail</button>\n        <button onclick=\"app.submitUnit2Challenge(4, 2)\" class=\"u2-c4-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">C. Minor Supporting Detail</button>\n      </div>\n      <div id=\"u2-c4-fb\" class=\"hidden text-xs font-medium p-2.5 rounded-lg\"></div>\n    </div>\n\n    <!-- Item 5 -->\n    <div class=\"p-4 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3\">\n      <div class=\"flex items-center justify-between text-xs\">\n        <span class=\"font-bold text-purple-900\">Item 5 of 6</span>\n        <span class=\"text-[10px] font-mono text-slate-400\">Context: University Life</span>\n      </div>\n      <p class=\"text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200\">\n        \"First, structured weekly scheduling prevents last-minute cramming and reduces anxiety before midterm examinations.\"\n      </p>\n      <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs\">\n        <button onclick=\"app.submitUnit2Challenge(5, 0)\" class=\"u2-c5-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">A. Main Idea</button>\n        <button onclick=\"app.submitUnit2Challenge(5, 1)\" class=\"u2-c5-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">B. Major Supporting Detail</button>\n        <button onclick=\"app.submitUnit2Challenge(5, 2)\" class=\"u2-c5-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">C. Minor Supporting Detail</button>\n      </div>\n      <div id=\"u2-c5-fb\" class=\"hidden text-xs font-medium p-2.5 rounded-lg\"></div>\n    </div>\n\n    <!-- Item 6 -->\n    <div class=\"p-4 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-3\">\n      <div class=\"flex items-center justify-between text-xs\">\n        <span class=\"font-bold text-purple-900\">Item 6 of 6</span>\n        <span class=\"text-[10px] font-mono text-slate-400\">Context: University Life</span>\n      </div>\n      <p class=\"text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200\">\n        \"Students using the Pomodoro technique of twenty-five minutes of study followed by a five-minute break completed assignments 30% faster.\"\n      </p>\n      <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs\">\n        <button onclick=\"app.submitUnit2Challenge(6, 0)\" class=\"u2-c6-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">A. Main Idea</button>\n        <button onclick=\"app.submitUnit2Challenge(6, 1)\" class=\"u2-c6-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">B. Major Supporting Detail</button>\n        <button onclick=\"app.submitUnit2Challenge(6, 2)\" class=\"u2-c6-btn p-2.5 rounded-xl border border-purple-200 hover:bg-purple-50 text-left font-medium cursor-pointer\">C. Minor Supporting Detail</button>\n      </div>\n      <div id=\"u2-c6-fb\" class=\"hidden text-xs font-medium p-2.5 rounded-lg\"></div>\n    </div>\n  </div>\n\n  <!-- Challenge Final Assessment Badge -->\n  <div id=\"u2-challenge-final-box\" class=\"hidden p-4 rounded-2xl border text-center space-y-2\"></div>\n\n  <!-- Navigation -->\n  <div class=\"flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-2\">\n    <button onclick=\"app.selectActivityStep('example')\" class=\"w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center\">\n      ⬅ Back: Highlighting Tool\n    </button>\n    <button onclick=\"app.selectStageAndStep('postReading', 'quiz')\" class=\"w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer flex items-center justify-center space-x-2 shadow-md\">\n      <span>Next Stage: Post-Reading Assessment & Review</span>\n      <i data-lucide=\"arrow-right\" class=\"w-4 h-4\"></i>\n    </button>\n  </div>\n</div>\n        "
          }
        },
        "postReading": {
          "title": "Post-Reading Stage",
          "steps": {
            "quiz": "\n<div class=\"space-y-6\">\n  <!-- Header -->\n  <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 pb-4\">\n    <div>\n      <div class=\"flex items-center space-x-2\">\n        <span class=\"px-2.5 py-0.5 bg-purple-700 text-white rounded-md text-[10px] font-bold font-mono\">UNIT 02</span>\n        <span class=\"px-2.5 py-0.5 bg-purple-100 text-purple-800 rounded-md text-[10px] font-bold font-mono\">U2-6.3.3 &bull; U2-6.3.4</span>\n        <span class=\"px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-md text-[10px] font-bold\">Post-Reading Stage</span>\n      </div>\n      <h3 class=\"text-lg sm:text-xl font-bold text-slate-900 mt-1\">Post-Reading Stage: Assessment & Review</h3>\n      <p class=\"text-xs text-slate-500\">แบบทดสอบวัดผลการสแกน, ข้อสอบความเข้าใจ, และสรุปข้อผิดพลาดที่พบบ่อย [U2-6.3.3, 6.3.4]</p>\n    </div>\n    <span class=\"text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-xl shrink-0 self-start sm:self-auto\">Final Stage &bull; Unit 2</span>\n  </div>\n\n  <!-- In-Class Activity Cards [U2-6.3.1, U2-6.3.2] -->\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs\">\n    <div class=\"p-4 bg-purple-100/70 border border-purple-200 rounded-2xl space-y-1.5\">\n      <div class=\"flex items-center space-x-2 text-purple-950 font-bold\">\n        <i data-lucide=\"layout-grid\" class=\"w-4 h-4 text-purple-700\"></i>\n        <span>In-class activity (กิจกรรมในชั้นเรียน) [U2-6.3.1]</span>\n      </div>\n      <p class=\"text-purple-900 leading-relaxed\">\n        <strong>Group Graphic Organizer:</strong> ให้นักศึกษาแบ่งกลุ่มสร้างผังลำดับความคิด (Hierarchical Tree Diagram) เพื่อเชื่อมโยง Main Idea, Major Supporting Details และ Minor Details จากบทอ่านที่ศึกษา\n      </p>\n    </div>\n\n    <div class=\"p-4 bg-indigo-100/70 border border-indigo-200 rounded-2xl space-y-1.5\">\n      <div class=\"flex items-center space-x-2 text-indigo-950 font-bold\">\n        <i data-lucide=\"presentation\" class=\"w-4 h-4 text-indigo-700\"></i>\n        <span>In-class activity (กิจกรรมในชั้นเรียน) [U2-6.3.2]</span>\n      </div>\n      <p class=\"text-indigo-900 leading-relaxed\">\n        <strong>Group Presentation:</strong> แต่ละกลุ่มส่งตัวแทนนำเสนอผังความคิดหน้าชั้นเรียน โดยเน้นชี้แจงความสัมพันธ์ระหว่างความคิด (Cause/Effect, Contrast, Sequence) และตอบข้อซักถามของอาจารย์\n      </p>\n    </div>\n  </div>\n\n  <!-- Individual Assessment Part 1: Post-Reading Timed Scanning Task [U2-5.6, U2-6.3.3] -->\n  <div class=\"p-4 sm:p-6 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl shadow-md space-y-4\">\n    <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-800 pb-3\">\n      <div>\n        <div class=\"flex items-center space-x-2\">\n          <span class=\"px-2 py-0.5 bg-amber-400 text-slate-950 font-bold text-[10px] rounded font-mono\">GRADED 3.3</span>\n          <span class=\"px-2 py-0.5 bg-purple-800 text-purple-200 font-bold text-[10px] rounded font-mono\">U2-5.6 &bull; U2-6.3.3</span>\n          <span class=\"text-xs font-bold text-amber-300\">Pass Mark &ge; 70%</span>\n        </div>\n        <h4 class=\"text-base font-bold mt-1 text-white flex items-center space-x-2\">\n          <i data-lucide=\"timer\" class=\"w-5 h-5 text-amber-400\"></i>\n          <span>Individual Assessment 1: Post-Reading Timed Scanning Task (90s)</span>\n        </h4>\n        <p class=\"text-xs text-purple-200\">สแกนหาข้อมูลเฉพาะเจาะจง 5 ข้อ ภายใน 90 วินาที</p>\n      </div>\n\n      <!-- Timer Control -->\n      <div class=\"flex items-center space-x-3 bg-slate-900/90 px-4 py-2 rounded-xl border border-indigo-700 shrink-0\">\n        <div class=\"text-right\">\n          <span class=\"text-[10px] text-purple-300 block uppercase font-bold tracking-wider\">Remaining</span>\n          <span id=\"u2-post-timer\" class=\"text-xl font-bold font-mono text-amber-300\">01:30</span>\n        </div>\n        <button id=\"u2-post-timer-btn\" onclick=\"app.startUnit2PostTimer()\" class=\"px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition cursor-pointer shadow\">\n          Start Timer\n        </button>\n      </div>\n    </div>\n\n    <!-- Scanning Text -->\n    <div class=\"p-4 bg-slate-900/90 rounded-xl border border-indigo-800/80 font-serif text-xs sm:text-sm leading-relaxed text-slate-200\">\n      <span class=\"font-sans font-bold text-amber-300 text-[11px] block uppercase tracking-wider mb-1\">\n        Fact Sheet: Asia Pacific Short Film Festival — Bangkok 2027\n      </span>\n      <p>\n        The Bangkok Arts Commission officially announced the <strong>2027 Asia Pacific Short Film Festival</strong>, scheduled to take place over four days at the Thailand Creative & Design Center. A selection committee of <strong>eighteen international judges</strong> will evaluate entries submitted from across the Asia Pacific region. Eligible filmmakers must have produced a short film under <strong>25 minutes in length</strong>, maintained a verified audience rating of <strong>2.80 stars or above</strong>, and registered through the official online portal. Each finalist receives an accommodation voucher worth <strong>38,000 baht per night</strong>. Complete entry portfolios must be submitted physically to <strong>Hall C, Ground Floor</strong> no later than <strong>March 20, 2027, at 17:00 PM</strong>.\n      </p>\n    </div>\n\n    <!-- 5 Precision Questions -->\n    <div class=\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-slate-900\">\n      <div class=\"p-3 bg-white rounded-xl space-y-1.5 shadow-xs\">\n        <span class=\"font-bold text-purple-950 block\">1. Minimum required audience rating?</span>\n        <div class=\"grid grid-cols-2 gap-1.5\">\n          <button onclick=\"app.setUnit2PostScanAnswer(1, '3.50')\" class=\"u2-postscan-q1 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">3.50</button>\n          <button onclick=\"app.setUnit2PostScanAnswer(1, '2.80')\" class=\"u2-postscan-q1 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">2.80</button>\n        </div>\n      </div>\n\n      <div class=\"p-3 bg-white rounded-xl space-y-1.5 shadow-xs\">\n        <span class=\"font-bold text-purple-950 block\">2. Accommodation voucher amount per night?</span>\n        <div class=\"grid grid-cols-2 gap-1.5\">\n          <button onclick=\"app.setUnit2PostScanAnswer(2, '38000')\" class=\"u2-postscan-q2 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">38,000 baht</button>\n          <button onclick=\"app.setUnit2PostScanAnswer(2, '50000')\" class=\"u2-postscan-q2 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">50,000 baht</button>\n        </div>\n      </div>\n\n      <div class=\"p-3 bg-white rounded-xl space-y-1.5 shadow-xs\">\n        <span class=\"font-bold text-purple-950 block\">3. Portfolio submission deadline?</span>\n        <div class=\"grid grid-cols-2 gap-1.5\">\n          <button onclick=\"app.setUnit2PostScanAnswer(3, 'Mar 20, 2027')\" class=\"u2-postscan-q3 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">Mar 20, 2027</button>\n          <button onclick=\"app.setUnit2PostScanAnswer(3, 'Apr 5, 2027')\" class=\"u2-postscan-q3 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">Apr 5, 2027</button>\n        </div>\n      </div>\n\n      <div class=\"p-3 bg-white rounded-xl space-y-1.5 shadow-xs\">\n        <span class=\"font-bold text-purple-950 block\">4. Portfolio submission location?</span>\n        <div class=\"grid grid-cols-2 gap-1.5\">\n          <button onclick=\"app.setUnit2PostScanAnswer(4, 'Hall C')\" class=\"u2-postscan-q4 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">Hall C, Ground Floor</button>\n          <button onclick=\"app.setUnit2PostScanAnswer(4, 'Hall B')\" class=\"u2-postscan-q4 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">Hall B, Level 2</button>\n        </div>\n      </div>\n\n      <div class=\"p-3 bg-white rounded-xl space-y-1.5 shadow-xs sm:col-span-2 md:col-span-2\">\n        <span class=\"font-bold text-purple-950 block\">5. How many international judges will evaluate entries?</span>\n        <div class=\"grid grid-cols-2 gap-1.5\">\n          <button onclick=\"app.setUnit2PostScanAnswer(5, '18')\" class=\"u2-postscan-q5 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">18 judges</button>\n          <button onclick=\"app.setUnit2PostScanAnswer(5, '25')\" class=\"u2-postscan-q5 p-2 rounded-lg border border-slate-200 hover:bg-purple-50 text-center font-medium cursor-pointer\">25 judges</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"flex items-center justify-between pt-2\">\n      <button onclick=\"app.submitUnit2PostScan()\" class=\"px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs transition cursor-pointer shadow\">\n        Submit Timed Scanning Test\n      </button>\n      <div id=\"u2-postscan-result\" class=\"text-xs font-bold text-amber-300\"></div>\n    </div>\n  </div>\n\n  <!-- Individual Assessment Part 2: Supporting Details & Reading Comprehension Test [U2-6.3.3] -->\n  <div class=\"p-4 sm:p-6 bg-white rounded-2xl border border-purple-100 shadow-sm space-y-4\">\n    <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3\">\n      <div>\n        <div class=\"flex items-center space-x-2\">\n          <span class=\"px-2 py-0.5 bg-purple-700 text-white font-bold text-[10px] rounded font-mono\">COMPREHENSION TEST</span>\n          <span class=\"px-2 py-0.5 bg-purple-100 text-purple-800 font-bold text-[10px] rounded font-mono\">U2-6.3.3</span>\n          <span class=\"text-xs font-bold text-purple-700\">Pass Mark &ge; 70%</span>\n        </div>\n        <h4 class=\"text-base font-bold text-slate-900 mt-1\">Individual Assessment 2: Supporting Details & Reading Comprehension Test</h4>\n        <p class=\"text-xs text-slate-500\">ทดสอบการวิเคราะห์ใจความสำคัญ รายละเอียดสนับสนุน และคำเชื่อม (6 ข้อ)</p>\n      </div>\n      <div id=\"u2-test-score-badge\" class=\"text-xs font-bold text-purple-900 bg-purple-100 px-3 py-1.5 rounded-xl\">\n        Score: <span id=\"u2-test-score\">0 / 6</span>\n      </div>\n    </div>\n\n    <!-- Reading Passage Box -->\n    <div class=\"p-4 sm:p-5 bg-slate-900 text-slate-100 rounded-xl font-serif text-xs sm:text-sm leading-relaxed space-y-2\">\n      <span class=\"font-sans font-bold text-purple-300 text-[11px] block uppercase tracking-wider mb-1\">\n        Reading Passage: The Global Honeybee Crisis and Pollination Technology\n      </span>\n      <p>\n        The rapid global decline of wild honeybee populations is threatening food security by undermining natural pollination across commercial fruit and vegetable crops. First, widespread agricultural use of neonicotinoid pesticides has devastated wild bee colonies by damaging their navigational memory and reproductive capacity. Field research across twelve European countries documented a forty-seven percent reduction in wild bee diversity in intensively farmed regions compared to organic farming areas. Second, robotic micro-drone pollination systems offer a promising technological solution where natural pollinators have disappeared. Traditional hand pollination of a single apple orchard requires six workers and ten full days; in contrast, a fleet of miniaturized autonomous drones completes the identical task within eighteen hours with zero human labor. Consequently, pilot orchards adopting robotic pollination reported a 31% improvement in fruit-setting rates alongside a 19% reduction in seasonal labor expenditure.\n      </p>\n    </div>\n\n    <!-- 6 Comprehension Questions -->\n    <div class=\"space-y-4\" id=\"u2-test-items\">\n      <!-- Q1 -->\n      <div class=\"p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs\">\n        <span class=\"font-bold text-slate-900 block\">1. What is the overarching Main Idea of the passage? [U2-5.1]</span>\n        <div class=\"space-y-1.5\">\n          <button onclick=\"app.submitUnit2Test(1, 0)\" class=\"u2-t1-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">A. Declining honeybee populations threaten crop yields, but robotic pollination drones offer an effective and cost-saving alternative</button>\n          <button onclick=\"app.submitUnit2Test(1, 1)\" class=\"u2-t1-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">B. Hand pollination is significantly faster and cheaper than using robotic drones</button>\n          <button onclick=\"app.submitUnit2Test(1, 2)\" class=\"u2-t1-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">C. Neonicotinoid pesticides are the only approved method for protecting bee colonies</button>\n        </div>\n        <div id=\"u2-t1-fb\" class=\"hidden font-sans text-[11px] p-2 rounded\"></div>\n      </div>\n\n      <!-- Q2 -->\n      <div class=\"p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs\">\n        <span class=\"font-bold text-slate-900 block\">2. Which of the following is a Major Supporting Detail? [U2-5.1]</span>\n        <div class=\"space-y-1.5\">\n          <button onclick=\"app.submitUnit2Test(2, 0)\" class=\"u2-t2-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">A. Neonicotinoid pesticides damaged bee navigational memory and reduced wild bee diversity by 47%</button>\n          <button onclick=\"app.submitUnit2Test(2, 1)\" class=\"u2-t2-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">B. Robotic micro-drone pollination systems provide a solution where natural pollinators have disappeared</button>\n          <button onclick=\"app.submitUnit2Test(2, 2)\" class=\"u2-t2-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">C. Hand pollination of a single orchard requires six workers and ten full days</button>\n        </div>\n        <div id=\"u2-t2-fb\" class=\"hidden font-sans text-[11px] p-2 rounded\"></div>\n      </div>\n\n      <!-- Q3 -->\n      <div class=\"p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs\">\n        <span class=\"font-bold text-slate-900 block\">3. In the sentence \"...in contrast, a fleet of miniaturized autonomous drones completes the identical task within eighteen hours\", what relationship does 'in contrast' indicate? [U2-5.2]</span>\n        <div class=\"space-y-1.5\">\n          <button onclick=\"app.submitUnit2Test(3, 0)\" class=\"u2-t3-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">A. Compare and Contrast (เปรียบเทียบความแตกต่างระหว่างวิธีดั้งเดิมกับโดรน)</button>\n          <button onclick=\"app.submitUnit2Test(3, 1)\" class=\"u2-t3-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">B. Chronological Timeline (บอกเวลาในอดีต)</button>\n          <button onclick=\"app.submitUnit2Test(3, 2)\" class=\"u2-t3-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">C. Cause and Effect (บอกเหตุและผลลัพธ์)</button>\n        </div>\n        <div id=\"u2-t3-fb\" class=\"hidden font-sans text-[11px] p-2 rounded\"></div>\n      </div>\n\n      <!-- Q4 -->\n      <div class=\"p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs\">\n        <span class=\"font-bold text-slate-900 block\">4. What is the role of the statistic \"a forty-seven percent reduction in wild bee diversity\"? [U2-5.1]</span>\n        <div class=\"space-y-1.5\">\n          <button onclick=\"app.submitUnit2Test(4, 0)\" class=\"u2-t4-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">A. It is a Minor Supporting Detail providing concrete numerical evidence for the Major Detail about pesticide damage to bees</button>\n          <button onclick=\"app.submitUnit2Test(4, 1)\" class=\"u2-t4-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">B. It is the overall Main Idea of the whole passage</button>\n          <button onclick=\"app.submitUnit2Test(4, 2)\" class=\"u2-t4-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">C. It is an irrelevant detail that should be removed</button>\n        </div>\n        <div id=\"u2-t4-fb\" class=\"hidden font-sans text-[11px] p-2 rounded\"></div>\n      </div>\n\n      <!-- Q5 -->\n      <div class=\"p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs\">\n        <span class=\"font-bold text-slate-900 block\">5. The transition word 'Consequently' in the final sentence indicates: [U2-5.2]</span>\n        <div class=\"space-y-1.5\">\n          <button onclick=\"app.submitUnit2Test(5, 0)\" class=\"u2-t5-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">A. A logical result or effect — the improved fruit-setting and reduced labor costs from adopting robotic pollination</button>\n          <button onclick=\"app.submitUnit2Test(5, 1)\" class=\"u2-t5-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">B. A definition of hexacopter hardware</button>\n          <button onclick=\"app.submitUnit2Test(5, 2)\" class=\"u2-t5-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">C. A contrast showing drones are dangerous</button>\n        </div>\n        <div id=\"u2-t5-fb\" class=\"hidden font-sans text-[11px] p-2 rounded\"></div>\n      </div>\n\n      <!-- Q6 -->\n      <div class=\"p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs\">\n        <span class=\"font-bold text-slate-900 block\">6. Summary Activity: Which single sentence provides the most accurate and complete summary of the passage? [U2-6.3.3]</span>\n        <div class=\"space-y-1.5\">\n          <button onclick=\"app.submitUnit2Test(6, 0)\" class=\"u2-t6-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">A. Honeybee population decline threatens global food security, and robotic pollination drones offer an effective, labor-saving solution for fruit orchards worldwide.</button>\n          <button onclick=\"app.submitUnit2Test(6, 1)\" class=\"u2-t6-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">B. Hexacopter drones spray fields in twenty-five minutes, which is faster than backpack spraying.</button>\n          <button onclick=\"app.submitUnit2Test(6, 2)\" class=\"u2-t6-btn w-full text-left p-2.5 rounded-lg border border-slate-200 hover:bg-white bg-white/70 transition font-medium cursor-pointer\">C. Robotic pollination drones have replaced all honeybees in commercial orchards across Europe.</button>\n        </div>\n        <div id=\"u2-t6-fb\" class=\"hidden font-sans text-[11px] p-2 rounded\"></div>\n      </div>\n    </div>\n\n    <div id=\"u2-test-final-box\" class=\"hidden p-4 rounded-2xl border text-center space-y-2\"></div>\n  </div>\n\n  <!-- Lesson Review & Common Mistakes [U2-6.3.4] -->\n  <div class=\"p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 shadow-xs space-y-4\">\n    <div class=\"flex items-center space-x-2 border-b border-slate-100 pb-2.5 text-purple-900 font-bold text-sm\">\n      <i data-lucide=\"alert-triangle\" class=\"w-4 h-4 text-amber-500\"></i>\n      <span>Lesson Review & Common Mistakes (ข้อผิดพลาดที่พบบ่อยในการอ่าน) [U2-6.3.4]</span>\n    </div>\n\n    <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs\">\n      <div class=\"p-3 bg-rose-50/80 border border-rose-200 rounded-xl space-y-1.5 text-rose-950\">\n        <strong class=\"font-bold flex items-center space-x-1 text-rose-900\">\n          <i data-lucide=\"x-circle\" class=\"w-3.5 h-3.5 text-rose-600\"></i>\n          <span>Mistake 1: สับสน Minor กับ Main Idea</span>\n        </strong>\n        <p class=\"leading-relaxed\">\n          นำตัวเลขสถิติที่สะดุดตา (เช่น 38% หรือ 25 นาที) ไปตอบเป็นใจความสำคัญ ทั้งที่ตัวเลขเป็นเพียง <em>Minor Detail</em> ที่มีไว้สนับสนุนประเด็นอื่นเท่านั้น\n        </p>\n      </div>\n\n      <div class=\"p-3 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1.5 text-amber-950\">\n        <strong class=\"font-bold flex items-center space-x-1 text-amber-900\">\n          <i data-lucide=\"x-circle\" class=\"w-3.5 h-3.5 text-amber-600\"></i>\n          <span>Mistake 2: สแกนโดยไม่อ่านคำนำ</span>\n        </strong>\n        <p class=\"leading-relaxed\">\n          กวาดสายตาหาตัวเลขโดยไม่อ่านคำขยายข้างหน้า เช่น โจทย์ถาม <em>\"operating costs reduction\"</em> แต่ไปคว้าตัวเลข <em>\"yields increase\"</em> เพราะไม่ได้ล็อกคำค้นหาที่แม่นยำ\n        </p>\n      </div>\n\n      <div class=\"p-3 bg-purple-50/80 border border-purple-200 rounded-xl space-y-1.5 text-purple-950\">\n        <strong class=\"font-bold flex items-center space-x-1 text-purple-900\">\n          <i data-lucide=\"x-circle\" class=\"w-3.5 h-3.5 text-purple-600\"></i>\n          <span>Mistake 3: มองข้าม Signal Words</span>\n        </strong>\n        <p class=\"leading-relaxed\">\n          อ่านข้ามคำเชื่อมสำคัญอย่าง <em>'in contrast'</em> หรือ <em>'consequently'</em> ทำให้เข้าใจสลับกันว่าเหตุการณ์ใดเกิดขึ้นก่อน หรือประเด็นใดเป็นผลลัพธ์\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Score Summary Dashboard Across All Unit 2 Graded Tasks [U2-6.3.4] -->\n  <div class=\"p-4 sm:p-5 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl space-y-3\">\n    <div class=\"flex items-center justify-between text-purple-950 font-bold text-sm\">\n      <span class=\"flex items-center space-x-2\">\n        <i data-lucide=\"trophy\" class=\"w-4 h-4 text-amber-500\"></i>\n        <span>Unit 2 Performance Score Summary (สรุปผลคะแนนประจำ Unit 2) [U2-6.3.4]</span>\n      </span>\n      <span class=\"text-[10px] font-mono bg-purple-200/80 px-2 py-0.5 rounded\">Indicator 3.3 Status</span>\n    </div>\n\n    <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs\">\n      <div class=\"p-3 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1\">\n        <span class=\"text-slate-500 text-[11px] block\">1. Main Idea Challenge</span>\n        <div class=\"flex items-center justify-between\">\n          <span id=\"summary-u2-challenge\" class=\"font-bold text-purple-900 text-sm\">-- / 6</span>\n          <span id=\"badge-u2-challenge\" class=\"text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600\">Pending</span>\n        </div>\n      </div>\n\n      <div class=\"p-3 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1\">\n        <span class=\"text-slate-500 text-[11px] block\">2. Timed Scanning Task</span>\n        <div class=\"flex items-center justify-between\">\n          <span id=\"summary-u2-scanning\" class=\"font-bold text-purple-900 text-sm\">-- / 5</span>\n          <span id=\"badge-u2-scanning\" class=\"text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600\">Pending</span>\n        </div>\n      </div>\n\n      <div class=\"p-3 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1\">\n        <span class=\"text-slate-500 text-[11px] block\">3. Comprehension Test</span>\n        <div class=\"flex items-center justify-between\">\n          <span id=\"summary-u2-test\" class=\"font-bold text-purple-900 text-sm\">-- / 6</span>\n          <span id=\"badge-u2-test\" class=\"text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600\">Pending</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Navigation & Review Unit -->\n  <div class=\"flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between pt-2\">\n    <button onclick=\"app.selectStageAndStep('whileReading', 'practice')\" class=\"w-full sm:w-auto px-5 py-2.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer text-center\">\n      ⬅ Back: Main Idea Challenge\n    </button>\n    <button onclick=\"app.selectStageAndStep('preReading', 'overview')\" class=\"w-full sm:w-auto px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl text-xs transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-md\">\n      <i data-lucide=\"rotate-ccw\" class=\"w-4 h-4\"></i>\n      <span>Review Unit 2 from Start ↺</span>\n    </button>\n  </div>\n</div>\n        "
          }
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
          steps: {
            overview: "Good readers use surrounding sentences to infer the meaning of unfamiliar vocabulary.",
            learn: "There are four primary clue types: Definition, Synonym, Antonym, and Example."
          }
        },
        whileReading: {
          title: "While-Reading Stage",
          steps: {
            learn: "Substitute candidate meanings into the sentence to check if the sentence makes logical sense.",
            passage: "The arid desert landscape made farming nearly impossible, as the extremely dry soil received less than 50 millimeters of rain each year.",
            audioText: "The arid desert landscape made farming nearly impossible, as the extremely dry soil received less than 50 millimeters of rain each year.",
            example: "Clue 'extremely dry soil received less than 50 millimeters of rain' reveals that 'arid' means very dry.",
            practice: {
              question: "What does 'arid' mean based on the passage context?",
              options: ["Fertile and green", "Extremely dry and barren", "Cold and snowy", "Mountainous"],
              answer: 1,
              explanation: "The text explains 'extremely dry soil received less than 50 millimeters of rain'."
            }
          }
        },
        postReading: {
          title: "Post-Reading Stage",
          steps: {
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
          steps: {
            overview: "Pronouns like 'it', 'they', 'this', and 'these' refer back to nouns mentioned earlier.",
            learn: "Find the antecedent by matching number (singular/plural) and meaning in the previous sentence."
          }
        },
        whileReading: {
          title: "While-Reading Stage",
          steps: {
            learn: "Notice headings and transition words to predict where the author's argument is heading.",
            passage: "Traffic congestion in city centers creates severe air pollution. To address this challenge, urban planners introduced electric bus lanes and bicycle paths.",
            audioText: "Traffic congestion in city centers creates severe air pollution. To address this challenge, urban planners introduced electric bus lanes and bicycle paths.",
            example: "Pattern: Problem ('Traffic congestion... air pollution') -> Solution ('introduced electric bus lanes...').",
            practice: {
              question: "What organizational pattern does the passage follow?",
              options: ["Chronological / Timeline", "Problem and Solution", "Classification / Division", "Narrative Story"],
              answer: 1,
              explanation: "The text identifies a problem (traffic & pollution) and offers concrete solutions (bus lanes, bike paths)."
            }
          }
        },
        postReading: {
          title: "Post-Reading Stage",
          steps: {
            quiz: {
              question: "What is the primary benefit of recognizing text structure?",
              options: ["It improves reading comprehension and retention", "It memorizes word spellings", "It counts syllables", "It writes code"],
              answer: 0,
              explanation: "Recognizing organization helps readers process and recall information systematically."
            }
          }
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
          steps: {
            overview: "Paraphrasing means restating an author's ideas in your own words while retaining the original meaning.",
            learn: "Change sentence structure and use accurate synonyms without altering the factual core."
          }
        },
        whileReading: {
          title: "While-Reading Stage",
          steps: {
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
            }
          }
        },
        postReading: {
          title: "Post-Reading Stage",
          steps: {
            quiz: {
              question: "Which phrase in a text signals that an OPINION is being stated?",
              options: ["According to official statistics", "In the author's opinion", "The research data shows", "Confirmed by measurements"],
              answer: 1,
              explanation: "'In the author's opinion' explicitly announces a subjective viewpoint."
            }
          }
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
          steps: {
            overview: "Skim and preview multi-paragraph academic texts before doing in-depth reading.",
            learn: "Combine title preview, subheadings, and first-paragraph topic sentences to build a mental map."
          }
        },
        whileReading: {
          title: "While-Reading Stage",
          steps: {
            learn: "Underline thesis statements, circle transition markers, and annotate margins with key takeaways.",
            passage: "A longitudinal study by the Ministry of Education highlighted that university students engaged in interactive reading software improved reading scores by 28% over 16 weeks.",
            audioText: "A longitudinal study by the Ministry of Education highlighted that university students engaged in interactive reading software improved reading scores by 28% over 16 weeks.",
            example: "Claim: Software improves reading. Evidence: 28% score increase over 16 weeks in a longitudinal study.",
            practice: {
              question: "What quantitative evidence is provided to support the effectiveness of reading software?",
              options: ["A 28% score improvement over 16 weeks", "A 50% decrease in study hours", "Only qualitative interviews", "Zero measured change"],
              answer: 0,
              explanation: "The text specifies a 28% increase over a 16-week period."
            }
          }
        },
        postReading: {
          title: "Post-Reading Stage",
          steps: {
            quiz: {
              question: "What is the ultimate objective of learning reading strategies at university?",
              options: [
                "To become an autonomous, analytical, and proficient lifelong reader",
                "To finish tests in five minutes",
                "To avoid reading books completely",
                "To translate every English sentence literally into Thai"
              ],
              answer: 0,
              explanation: "Strategies empower students to become independent and competent lifelong readers."
            }
          }
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
      scope: "Skimming for main ideas/gist, scanning for specific information",
      cefr: "A2-B1",
      icon: "eye",
      steps: [
        {
          stepNum: 1,
          title: "What is the strategy?",
          thaiTitle: "คืออะไร?",
          icon: "help-circle",
          content: "Skimming and scanning are twin high-speed reading techniques designed to locate information quickly without reading every single word:\n\n1. Skimming (การอ่านข้ามอย่างรวดเร็วเพื่อจับใจความสำคัญ): Reading at high speed (300–500 words per minute)—approximately 3 to 4 times faster than regular reading—to quickly capture the main idea, overall gist, theme, and structure of a text. You intentionally skip over minor details, lengthy examples, and unfamiliar words.\n\n2. Scanning (การกวาดสายตาเพื่อค้นหาข้อมูลเฉพาะ): Darting your eyes rapidly across the lines with a specific target in mind—such as a key name, number, date, year, percentage, room number, or technical term. You do not read whole sentences until your eyes lock directly onto your target keyword.",
          thaiExplanation: "Skimming คือการ 'อ่านข้ามเพื่อจับใจความสำคัญ' (What is it about?) เหมาะสำหรับดูภาพรวมและโครงสร้างเนื้อหาอย่างรวดเร็ว ส่วน Scanning คือการ 'กวาดสายตาหาข้อมูลเฉพาะ' (Where is the specific fact?) เช่น ค้นหาตัวเลข วันที่ ชื่อคน หรือคำศัพท์เฉพาะ ทั้งสองทักษะช่วยให้ผู้อ่านประหยัดเวลาได้อย่างมหาศาลและไม่ต้องอ่านทุกคำตั้งแต่ต้นจนจบ"
        },
        {
          stepNum: 2,
          title: "Why use it?",
          thaiTitle: "ทำไมต้องใช้?",
          icon: "lightbulb",
          content: "In academic study and standardized examinations, skimming and scanning deliver crucial advantages:\n1. Drastic Time Efficiency: Saves up to 70% of reading time, enabling you to finish lengthy exams (like TOEIC, IELTS, and university finals) well within the time limit.\n2. Prevents Cognitive Overload: Keeps you from getting trapped and frustrated by low-priority unknown words in dense paragraphs.\n3. Efficient Source Filtering: Enables university students to evaluate whether an entire library book, journal paper, or website is useful for their research in under two minutes.\n4. Pinpoint Accuracy: Scanning allows instant fact retrieval, leading to higher accuracy when answering detail-oriented comprehension questions.",
          thaiExplanation: "ช่วยประหยัดเวลาในการทำข้อสอบได้ถึง 70% ป้องกันอาการสมองล้าจากการอ่านคำศัพท์ยากๆ ที่ไม่จำเป็น ช่วยคัดกรองงานวิจัยและหนังสือในห้องสมุดได้อย่างรวดเร็ว และช่วยค้นหาคำตอบในข้อสอบได้อย่างแม่นยำตรงจุด"
        },
        {
          stepNum: 3,
          title: "When do I use it?",
          thaiTitle: "ใช้เมื่อไหร่?",
          icon: "calendar",
          content: "Apply these dual techniques in the following academic and daily scenarios:\n• Use Skimming when:\n  - Previewing textbook chapters or research articles before attending lectures.\n  - Deciding whether a journal article or online source is relevant to your term paper.\n  - Reviewing previously read chapters the evening before an examination to refresh key concepts.\n  - Reading newspaper headlines, editorial summaries, and magazine articles.\n• Use Scanning when:\n  - Answering exam questions starting with 'When...', 'Who...', 'Where...', 'How many...', or 'According to paragraph 2...'.\n  - Looking up flight departures, bus/train timetables, university exam schedules, or room assignments.\n  - Finding a word in a dictionary, glossary, index, or contact directory.\n  - Locating specific statistical figures, percentages, or research citations.",
          thaiExplanation: "ใช้ Skimming เมื่อต้องการสำรวจภาพรวมก่อนเรียน คัดกรองบทความวิจัย และทบทวนบทเรียนก่อนสอบ และใช้ Scanning เมื่อต้องตอบคำถามเฉพาะข้อในข้อสอบ ค้นหาตารางสอบ/ห้องสอบ ตรวจสอบตารางการเดินทาง หรือหาคำศัพท์ในพจนานุกรม"
        },
        {
          stepNum: 4,
          title: "How do I use it?",
          thaiTitle: "ใช้อย่างไร?",
          icon: "settings",
          content: "Follow the 5-Step Execution Protocol for Skimming & Scanning:",
          checklist: [
          "Step 1 (Determine Your Purpose): Ask yourself: 'Do I need the overall gist (Skim) or a specific piece of information (Scan)?'",
          "Step 2 (Skimming - Focus on High-Value Zones): Read the title, subheadings, the first paragraph (introduction), the topic sentence (first sentence) of each body paragraph, and the concluding paragraph.",
          "Step 3 (Skimming - Eye Movement Patterns): Move your eyes rapidly down the center of each page in smooth 'Z' or 'S' curves; ignore supporting adjectives and keep moving forward without back-tracking.",
          "Step 4 (Scanning - Formulate a Target Mental Image): Lock the exact keyword, number format (e.g., 4-digit year, percentage sign '%', or capital letter for a name) clearly in your mind before looking at the page.",
          "Step 5 (Scanning - Sweep & Lock On Target): Sweep your finger, pen, or eyes systematically down the text; the instant your target appears, halt immediately and read only that single sentence to confirm your answer."
          ]
        },
        {
          stepNum: 5,
          title: "Worked Example",
          thaiTitle: "ตัวอย่างการใช้",
          icon: "file-text",
          content: "Sample Text: 'Buriram Rajabhat University Announcement (October 2026): The Academic Resource Center will host the 2026 International Digital Literacy Conference from November 12 to 14, 2026, in the Golden Teak Auditorium (Building 15, Room 402). Keynote speaker Dr. Alan Montgomery from Cambridge University will deliver the opening address at 09:30 AM. Registered undergraduate students who check in before 09:00 AM will receive a complimentary e-certificate and 6 professional development credits.'",
          annotated: "Strategy Analysis (Unit 2 Model):\n• [Skimming Task (Title & Topic Sentence)]: Quickly reads the headline and first sentence -> Identifies the core event: BRU Academic Resource Center is hosting an International Digital Literacy Conference.\n• [Scanning Task 1 (Target Date)]: Visual target 'November' / '2026' -> Eye locks directly onto 'November 12 to 14, 2026' without reading the surrounding lines.\n• [Scanning Task 2 (Target Location)]: Visual target 'Room' / 'Building' -> Sweeps directly to 'Building 15, Room 402'.\n• [Scanning Task 3 (Keynote Speaker)]: Visual target capitalized name / 'Dr.' -> Pinpoints 'Dr. Alan Montgomery from Cambridge University'.\n• [Scanning Task 4 (Student Incentive)]: Visual target digits / 'credits' -> Locates '6 professional development credits' in 2 seconds.\n• [Verification]: Successfully extracted 4 critical data points in under 15 seconds!",
          takeaway: "Skimming reveals the overarching topic in 4 seconds; scanning extracts exact dates, rooms, and names without reading all 80 words."
        },
        {
          stepNum: 6,
          title: "Guided Practice",
          thaiTitle: "ฝึกปฏิบัติ",
          icon: "user-check",
          content: "Notice: 'Campus Library Examination Hours Notice: During final examination week (October 10-24, 2026), the Central Library will operate under extended hours: Monday through Friday from 07:30 AM to 23:00 PM, and Saturday through Sunday from 08:30 AM to 20:00 PM. High-speed study pods in Zone C (3rd Floor) require online reservation via the BRU Smart Portal at least 2 hours in advance. Late check-ins over 15 minutes will automatically release reserved workstations.'",
          question: "Scan the notice: What is the latest closing time for the library on weekdays during final examination week?",
          options: [
          "23:00 PM",
          "20:00 PM",
          "07:30 AM",
          "15 minutes"
          ],
          answer: 0,
          explanation: "By fixing your mental target on 'weekdays' / 'Monday through Friday' and scanning for closing time digits, your eyes immediately find '23:00 PM'."
        },
        {
          stepNum: 7,
          title: "Apply to a Short Text",
          thaiTitle: "นำไปใช้กับบทอ่านสั้น",
          icon: "book-open",
          passageTitle: "Sustainable Agrotechnology in Buriram Province",
          passage: "In 2025, agricultural scientists at Buriram Rajabhat University introduced solar-powered smart irrigation networks across 85 demonstration farms in Prakhon Chai district. The wireless soil moisture sensors transmit real-time telemetry every 15 minutes to farmers' mobile phones, enabling precision water delivery. Over a twelve-month evaluation period, participating farms documented a 42% reduction in groundwater usage and a 28% increase in organic jasmine rice yields. The provincial agricultural bureau has allocated a 15-million-baht grant to expand this solar IoT initiative to 300 additional farms by the end of 2027.",
          audioText: "In 2025, agricultural scientists at Buriram Rajabhat University introduced solar-powered smart irrigation networks across 85 demonstration farms in Prakhon Chai district. The wireless soil moisture sensors transmit real-time telemetry every 15 minutes to farmers' mobile phones, enabling precision water delivery. Over a twelve-month evaluation period, participating farms documented a 42% reduction in groundwater usage and a 28% increase in organic jasmine rice yields. The provincial agricultural bureau has allocated a 15-million-baht grant to expand this solar IoT initiative to 300 additional farms by the end of 2027.",
          taskQuestion: "Practice Scanning: By what percentage did organic jasmine rice yields increase during the evaluation period?",
          taskAnswer: "28% (Scanning for 'jasmine rice' and percentage symbols directly locates the 28% yield increase)."
        },
        {
          stepNum: 8,
          title: "Strategy Quiz",
          thaiTitle: "แบบทดสอบ",
          icon: "trophy",
          question: "Which of the following scenarios demonstrates the most appropriate use of SCANNING rather than skimming?",
          options: [
          "Looking up the departure gate for Flight TG 208 on an airport departure display monitor",
          "Reading through an entire introductory chapter to understand the major themes of sociology",
          "Deciding whether a 400-page historical novel has an appealing overall tone",
          "Grasping the main viewpoint of a newspaper editorial before deciding to buy the paper"
          ],
          answer: 0,
          explanation: "Scanning is designed for locating a specific known piece of data (such as flight number 'TG 208' or gate letter) in a list or display without reading other details."
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
          content: "Using context clues means uncovering the meaning of unfamiliar words and complex sentences by analyzing surrounding words, phrases, and punctuation marks provided by the author in the same paragraph.\n\nThe 4 Major Types of Context Clues (The D-S-A-E Framework):\n1. Definition / Restatement Clues (การให้คำจำกัดความ/การกล่าวซ้ำ): The author directly defines the term using linking phrases (is defined as, means, refers to) or punctuation marks like commas, em-dashes, or parentheses.\n2. Synonym Clues (คำเหมือนหรือคำที่มีความหมายใกล้เคียง): The author pairs the unfamiliar word with a familiar synonym or rephrasing using signal markers such as 'or', 'that is', 'also known as', or 'in other words'.\n3. Antonym / Contrast Clues (คำตรงข้ามหรือข้อความที่ขัดแย้ง): The author clarifies the word by contrasting it with its opposite using transition words such as 'unlike', 'however', 'but', 'on the other hand', 'in contrast', 'whereas', or 'although'.\n4. Example / Illustration Clues (การยกตัวอย่างประกอบ): The author explains the word by listing concrete real-world examples using signal phrases such as 'such as', 'for example', 'for instance', 'including', or 'e.g.'.",
          thaiExplanation: "บริบท (Context Clues) คือเบาะแสหรือข้อความแวดล้อมที่ผู้เขียนใส่ไว้เพื่อช่วยให้ผู้อ่านเข้าใจคำศัพท์ที่ไม่คุ้นเคยโดยไม่ต้องเปิดพจนานุกรม ประกอบด้วย 4 ประเภทหลัก: 1. การให้คำจำกัดความ (Definition) 2. คำเหมือน (Synonym) 3. คำตรงข้าม/ข้อความขัดแย้ง (Antonym/Contrast) และ 4. การยกตัวอย่างประกอบ (Example)"
        },
        {
          stepNum: 2,
          title: "Why use it?",
          thaiTitle: "ทำไมต้องใช้?",
          icon: "lightbulb",
          content: "In university-level reading and academic examinations, using context clues provides critical cognitive benefits:\n1. Preserves Reading Fluency & Momentum: Stopping to look up every single unknown word in a dictionary disrupts short-term memory, slows reading speed, and breaks your comprehension train of thought.\n2. Crucial for Timed Examinations: In standardized tests (like TOEIC, TOEFL, IELTS, and BRU exams), dictionaries and phones are strictly prohibited; context clues are your only tool to decode unknown terms.\n3. Unlocks Nuanced Academic Meanings: Many English words possess multiple definitions (polysemy); context clues reveal the precise shade of meaning intended by the author in that specific field.\n4. Accelerates Long-Term Vocabulary Acquisition: Research shows that discovering word meanings through authentic context leads to significantly stronger memory retention than memorizing word lists in isolation.",
          thaiExplanation: "ช่วยรักษาความต่อเนื่องในการอ่านโดยไม่ต้องหยุดเปิดพจนานุกรมบ่อยๆ เป็นทักษะชี้ขาดในห้องสอบที่ไม่อนุญาตให้นำอุปกรณ์ช่วยแปลเข้าไป ช่วยระบุความหมายเฉพาะทางของคำศัพท์ที่มีหลายความหมาย (Polysemy) และช่วยให้จดจำคำศัพท์ใหม่ได้อย่างยาวนานและเป็นธรรมชาติ"
        },
        {
          stepNum: 3,
          title: "When do I use it?",
          thaiTitle: "ใช้เมื่อไหร่?",
          icon: "calendar",
          content: "Use context clues whenever you encounter:\n• Low-frequency or specialized technical terminology in academic journal articles and textbooks.\n• Polysemous words where the common everyday meaning does not make sense (e.g., 'yield' meaning crop output vs. give way; 'table' meaning to postpone a debate).\n• Descriptive adjectives, adverbs, and idiomatic expressions in literature, news editorials, and fables.\n• Timed comprehension quizzes, university midterm/final exams, and professional English certifications.",
          thaiExplanation: "ใช้เมื่อเจอคำศัพท์วิชาการยากๆ ในตำราเรียนและงานวิจัย คำศัพท์ที่มีหลายความหมายแต่บริบททำให้ความหมายเปลี่ยนไป สำนวนและคำคุณศัพท์ในการอ่านวรรณกรรม และเมื่อทำแบบทดสอบวัดระดับภาษาอังกฤษในห้องสอบ"
        },
        {
          stepNum: 4,
          title: "How do I use it?",
          thaiTitle: "ใช้อย่างไร?",
          icon: "settings",
          content: "Follow the 5-Step Execution Protocol for Using Context Clues:",
          checklist: [
          "Step 1 (Isolate & Bracket): When you encounter an unknown word, do not panic or stop; read past the word to the end of the sentence to take in the complete thought.",
          "Step 2 (Hunt for Signal Words & Punctuation): Look closely for punctuation clues (commas, dashes, parentheses) and connective signal words (means, or, unlike, however, such as, for instance).",
          "Step 3 (Classify the Clue Category): Identify which clue type the author provided: Definition, Synonym, Contrast, or Example.",
          "Step 4 (Substitute a Trial Meaning): Think of a simple replacement word (e.g., 'helpful', 'dangerous', 'tool', 'gather') and mentally insert it in place of the unknown word.",
          "Step 5 (Verify Logical & Grammatical Fit): Re-read the modified sentence to ensure that your substituted meaning creates perfect logical and grammatical coherence in the paragraph."
          ]
        },
        {
          stepNum: 5,
          title: "Worked Example",
          thaiTitle: "ตัวอย่างการใช้",
          icon: "file-text",
          content: "Sample Text: 'Archaeologists excavating the ruins of Muang Tam Sanctuary discovered several subterranean chambers—underground rooms located beneath the stone foundation—which were used for preserving sacred offerings from tropical heat.'",
          annotated: "Strategy Analysis (Unit 3 Model):\n• [Target Vocabulary Word]: Unfamiliar academic term 'subterranean'.\n• [Punctuation Clue (Dashes)]: The author places explanatory em-dashes immediately after the word: '—underground rooms located beneath the stone foundation—'.\n• [Context Clue Type]: Definition / Restatement Clue directly defining the word between punctuation marks.\n• [Morphological Clue (Word Parts)]: Prefix 'sub-' (under/below) + Latin root 'terra' (earth/ground).\n• [Contextual Supporting Detail]: Purpose is 'preserving sacred offerings from tropical heat', confirming cool subterranean conditions.\n• [Decoded Definition]: 'Subterranean' means existing, occurring, or situated underground beneath the surface of the earth.\n• [Verification]: Substituting 'underground' into the sentence preserves perfect grammatical and semantic coherence.",
          takeaway: "Punctuation marks such as dashes, commas, and parentheses act as the author's built-in glossary—always examine the words between them first!"
        },
        {
          stepNum: 6,
          title: "Guided Practice",
          thaiTitle: "ฝึกปฏิบัติ",
          icon: "user-check",
          content: "Passage: 'While Professor Thanarat was known for his amicable and welcoming disposition, his colleague was sullen, hostile, and constantly avoided talking to students.'",
          question: "Based on the contrast clue 'While' and the opposites 'sullen and hostile', what is the most accurate meaning of 'amicable'?",
          options: [
          "Friendly, pleasant, and easy to get along with",
          "Extremely wealthy and powerful",
          "Tired, sleepy, and exhausted",
          "Strict, harsh, and punitive"
          ],
          answer: 0,
          explanation: "The contrast marker 'While' contrasts the professor's 'amicable' nature directly with his colleague who is 'sullen, hostile, and avoids talking', proving amicable means friendly and welcoming."
        },
        {
          stepNum: 7,
          title: "Apply to a Short Text",
          thaiTitle: "นำไปใช้กับบทอ่านสั้น",
          icon: "book-open",
          passageTitle: "Endangered Biodiversity in the Dong Phayayen-Khao Yai Forest",
          passage: "Biologists monitoring wildlife corridors in the Dong Phayayen forest complex are concerned about the decline of arboreal mammals, such as gibbons, flying squirrels, and tree shrews. These canopy-dwelling species spend almost their entire lifespans high in the treetops and rarely descend to the forest floor. When illegal logging fragments the continuous upper canopy, these agile creatures become isolated, severely impairing their ability to forage for seasonal fruits and find reproductive mates.",
          audioText: "Biologists monitoring wildlife corridors in the Dong Phayayen forest complex are concerned about the decline of arboreal mammals, such as gibbons, flying squirrels, and tree shrews. These canopy-dwelling species spend almost their entire lifespans high in the treetops and rarely descend to the forest floor. When illegal logging fragments the continuous upper canopy, these agile creatures become isolated, severely impairing their ability to forage for seasonal fruits and find reproductive mates.",
          taskQuestion: "Using the example clues ('such as gibbons, flying squirrels...') and sentence clues ('canopy-dwelling species... high in the treetops'), what does the word 'arboreal' mean?",
          taskAnswer: "'Arboreal' means living in or relating to trees and tree canopies (living off the ground)."
        },
        {
          stepNum: 8,
          title: "Strategy Quiz",
          thaiTitle: "แบบทดสอบ",
          icon: "trophy",
          question: "In the sentence 'Unlike synthetic fertilizers that degrade soil quality over time, compost is a natural soil enhancer; moreover, it is biodegradable, which means capable of being broken down safely by microorganisms', what TWO types of context clues are used?",
          options: [
          "Contrast clue ('Unlike') and Definition clue ('which means')",
          "Synonym clue and Sound imitation clue",
          "Rhyme clue and Punctuation ellipsis clue",
          "Chronological time clue and Question clue"
          ],
          answer: 0,
          explanation: "'Unlike' introduces a contrast clue against synthetic fertilizers, while 'which means' explicitly introduces a definition clue for 'biodegradable'."
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
          content: "Identifying text organization involves recognizing how an author systematically arranges ideas, claims, and factual evidence, as well as tracking reference words and transitional connectives that create cohesive flow.\n\nThe 4 Major Text Organization Patterns:\n1. Chronological / Sequence Pattern (ลำดับเวลา/ขั้นตอน): Organizes events, historical developments, or instructions in temporal order (Signal words: first, next, subsequently, then, meanwhile, finally, in 1990, dates).\n2. Cause and Effect Pattern (เหตุและผล): Explains why an event happened and what consequences resulted (Signal words: because, since, leads to, causes, consequently, therefore, as a result, resulting in).\n3. Compare and Contrast Pattern (เปรียบเทียบความเหมือนและความต่าง): Analyzes similarities and differences between two or more subjects (Signal words: similarly, likewise, in contrast, however, on the other hand, unlike, whereas, while).\n4. Problem and Solution Pattern (ปัญหาและแนวทางแก้ไข): Introduces an obstacle, dilemma, or challenge, followed by one or more proposed or implemented solutions (Signal words: problem, challenge, dilemma, solution, solve, resolve, overcome, remedy).\n\nReference Words & Cohesive Ties (คำอ้างอิงและตัวเชื่อมความสัมพันธ์):\nAuthors use pronouns (it, they, them, this, that, these, those, former, latter) to refer back to previously mentioned nouns (antecedents). Correctly identifying these links prevents confusion about subjects.",
          thaiExplanation: "การระบุโครงสร้างข้อความ คือการทำความเข้าใจรูปแบบการจัดระเบียบความคิดของผู้เขียน เช่น ลำดับเวลา (Chronological), เหตุและผล (Cause-Effect), เปรียบเทียบ (Compare-Contrast) และปัญหา-ทางออก (Problem-Solution) พร้อมทั้งการแกะรอยคำอ้างอิง (Pronoun Reference) เช่น it, they, this, these ว่าชี้กลับไปที่คำนามตัวใด เพื่อให้เข้าใจเนื้อหาได้อย่างแม่นยำไม่สับสน"
        },
        {
          stepNum: 2,
          title: "Why use it?",
          thaiTitle: "ทำไมต้องใช้?",
          icon: "lightbulb",
          content: "Recognizing structural patterns and reference markers provides essential academic reading benefits:\n1. Creates a Cognitive Roadmap: Knowing the organizational pattern helps you anticipate upcoming content (e.g., encountering a problem prepares your mind to search for the solution).\n2. Dramatically Improves Summarization: Every pattern has a natural summary template (e.g., Compare-Contrast yields a comparative table; Cause-Effect yields a causal chain).\n3. Prevents Subject Confusion: Tracking pronoun references (e.g., 'What does \"it\" refer to?') ensures you never misattribute actions or research findings to the wrong subject.\n4. Crucial for Academic Reading Exams: Structure and reference questions appear in nearly every university English test and standardized exam (TOEIC, TOEFL, IELTS).",
          thaiExplanation: "ช่วยสร้างแผนผังความคิดล่วงหน้า ทำให้คาดเดาเนื้อหาถัดไปได้ง่ายขึ้น สรุปความได้อย่างมีแบบแผน ป้องกันการสับสนประธานของประโยคเมื่อมีสรรพนามหลายตัว และตรงกับแนวข้อสอบวัดระดับภาษาอังกฤษที่มักถามโครงสร้างข้อความและ Pronoun Reference เสมอ"
        },
        {
          stepNum: 3,
          title: "When do I use it?",
          thaiTitle: "ใช้เมื่อไหร่?",
          icon: "calendar",
          content: "Apply this strategy when reading:\n• Academic research papers, thesis introductions, and scientific laboratory reports.\n• Historical chronicles, biographies, and chronological process explanations.\n• Persuasive essays, debate analyses, and policy evaluations comparing competing viewpoints.\n• Problem-solution case studies in business, environmental science, and public health.\n• Answering exam questions such as 'How is paragraph 2 organized?' or 'The word \"they\" in line 12 refers to...'.",
          thaiExplanation: "ใช้เมื่ออ่านบทความวิจัย รายงานการทดลองทางวิทยาศาสตร์ ลำดับเหตุการณ์ทางประวัติศาสตร์ บทความแสดงความคิดเห็นเชิงวิชาการ กรณีศึกษาทางธุรกิจและสิ่งแวดล้อม และเมื่อทำข้อสอบที่ถามหาโครงสร้างย่อหน้าหรือถามว่าคำสรรพนามหมายถึงสิ่งใด"
        },
        {
          stepNum: 4,
          title: "How do I use it?",
          thaiTitle: "ใช้อย่างไร?",
          icon: "settings",
          content: "Follow the 5-Step Execution Protocol for Text Organization & Reference Tracking:",
          checklist: [
          "Step 1 (Scan for Transitional Connectives): Survey the paragraph for signal markers (e.g., 'Consequently', 'In contrast', 'First... Next... Finally', 'The primary solution').",
          "Step 2 (Determine the Organizational Blueprint): Match the dominant connectives to one of the 4 patterns: Sequence, Cause-Effect, Comparison, or Problem-Solution.",
          "Step 3 (Trace Pronoun Antecedents): When encountering a reference pronoun ('it', 'they', 'these', 'this'), look back into the immediate preceding sentence to locate the matching noun (verify singular vs. plural agreement).",
          "Step 4 (Construct a Mental Flowchart): Mentally sketch the connection: Cause ➔ Effect, or Problem ➔ Solution, or Subject A vs. Subject B.",
          "Step 5 (Verify Paragraph Cohesion): Confirm that the structural pattern accurately represents the entire paragraph rather than just an isolated clause."
          ]
        },
        {
          stepNum: 5,
          title: "Worked Example",
          thaiTitle: "ตัวอย่างการใช้",
          icon: "file-text",
          content: "Sample Text: 'Urban heat islands represent a growing crisis in modern Southeast Asian metropolises. Concrete buildings and asphalt highways absorb intense solar radiation during daytime hours, causing city temperatures to surge 4 to 7 degrees Celsius higher than surrounding rural valleys. To address this severe environmental dilemma, municipal urban planners in Bangkok have launched a rooftop vegetation initiative. Under this green roof policy, commercial skyscraper owners receive property tax exemptions if they cover at least 40% of their rooftop surfaces with living shrubs and sedum plants. These eco-friendly installations absorb sunlight, insulate buildings, and successfully reduce ambient rooftop temperatures.'",
          annotated: "Strategy Analysis (Unit 4 Model):\n• [Structural Pattern (Problem)]: Opening sentence signals crisis: 'Urban heat islands represent a growing crisis in modern Southeast Asian metropolises'.\n• [Supporting Detail (Cause & Effect)]: Solar absorption in concrete/asphalt causes urban temperatures to rise 4 to 7 degrees Celsius.\n• [Transitional Connective (Solution)]: 'To address this severe environmental dilemma' shifts the text from Problem to Solution.\n• [Structural Pattern (Solution)]: Green roof policy with property tax exemptions for skyscraper owners covering 40% with living plants.\n• [Pronoun Reference 1]: 'they' in 'if they cover at least 40%' refers back to plural antecedent 'commercial skyscraper owners'.\n• [Pronoun Reference 2]: 'These eco-friendly installations' in the conclusion refers back to 'living shrubs and sedum plants' / 'green roofs'.\n• [Verification]: The complete paragraph organizes seamlessly into Problem (Urban Heat) -> Solution (Green Roof Tax Incentives).",
          takeaway: "Recognizing the Problem-Solution transition enables you to summarize an entire 100-word paragraph into two clear parts: Crisis = Urban heat; Solution = Green rooftop vegetation policy."
        },
        {
          stepNum: 6,
          title: "Guided Practice",
          thaiTitle: "ฝึกปฏิบัติ",
          icon: "user-check",
          content: "Passage: 'Traditional petroleum combustion engines emit substantial volumes of carbon dioxide, which directly accelerates atmospheric global warming. In contrast, electric vehicles produce zero tailpipe emissions during operation; however, their heavy reliance on lithium-ion batteries raises significant ecological concerns regarding open-pit mineral mining.'",
          question: "Which pair of transitional connectives establishes the primary organizational pattern between traditional engines and electric vehicles?",
          options: [
          "'In contrast' and 'however' establishing a Compare and Contrast relationship",
          "'First' and 'finally' establishing a Chronological Sequence",
          "'For example' and 'such as' establishing an Illustration pattern",
          "'Consequently' and 'therefore' establishing pure Cause and Effect"
          ],
          answer: 0,
          explanation: "'In contrast' directly compares petroleum engines with electric vehicles, while 'however' presents a contrasting counterpoint regarding battery mining."
        },
        {
          stepNum: 7,
          title: "Apply to a Short Text",
          thaiTitle: "นำไปใช้กับบทอ่านสั้น",
          icon: "book-open",
          passageTitle: "The Evolution of Silk Weaving in Buriram",
          passage: "Buriram's famous volcanic soil-dyed silk, known locally as Pha Sin Phukhao Fai, developed through a distinctive three-stage historical evolution. First, centuries ago, local Khmer-ancestry villagers harvested wild silkworms and extracted red dyes from indigenous tree bark. Second, during the mid-twentieth century, artisans began soaking woven threads in mineral-rich volcanic red clay mud gathered from extinct craters, which bestowed an exceptionally soft texture and distinctive terracotta sheen upon the fabric. Finally, in recent years, modern university designers collaborated with local weaving cooperatives to modernize loom techniques and market these exquisite textiles internationally. Today, they generate vital sustainable income for rural weaving communities across the province.",
          audioText: "Buriram's famous volcanic soil-dyed silk, known locally as Pha Sin Phukhao Fai, developed through a distinctive three-stage historical evolution. First, centuries ago, local Khmer-ancestry villagers harvested wild silkworms and extracted red dyes from indigenous tree bark. Second, during the mid-twentieth century, artisans began soaking woven threads in mineral-rich volcanic red clay mud gathered from extinct craters, which bestowed an exceptionally soft texture and distinctive terracotta sheen upon the fabric. Finally, in recent years, modern university designers collaborated with local weaving cooperatives to modernize loom techniques and market these exquisite textiles internationally. Today, they generate vital sustainable income for rural weaving communities across the province.",
          taskQuestion: "1. What is the overarching organizational structure? 2. What does the pronoun 'they' in the final sentence refer to?",
          taskAnswer: "1. Chronological Sequence / Historical Process (signaled by 'First', 'Second', 'Finally'). 2. 'They' refers to 'these exquisite textiles' / 'volcanic soil-dyed silk fabrics'."
        },
        {
          stepNum: 8,
          title: "Strategy Quiz",
          thaiTitle: "แบบทดสอบ",
          icon: "trophy",
          question: "In the sentence 'Excessive plastic pollution severely threatens marine ecosystems; consequently, over 80 coastal nations have passed legislation banning single-use shopping bags', what does the connective 'consequently' indicate?",
          options: [
          "A logical effect or result resulting from the preceding cause",
          "A chronological time order going backward in history",
          "A contrast showing that plastic is beneficial",
          "An example showing types of plastic polymers"
          ],
          answer: 0,
          explanation: "'Consequently' is a causal transition word signaling an effect or result of the preceding problem (severe threat of plastic pollution)."
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
          content: "Making inferences is drawing logical deductions and uncovering unstated meanings by synthesizing explicit textual clues with your prior real-world knowledge (Schema). It is widely known as 'reading between the lines'—discovering what the author implies or suggests without stating it word-for-word.\n\nThe Core Academic Inference Formula:\nText Clues (What the author explicitly writes) + Prior Knowledge (What you know about the world) = Logical Inference (Valid deduction)\n\nValid Inference vs. Wild Guess:\n• A Valid Inference is firmly anchored in concrete textual evidence and reasonable logical deduction.\n• An Invalid Inference (Wild Guess) is unsupported speculation, personal prejudice, or an assumption directly contradicted by the text.",
          thaiExplanation: "การอนุมาน (Making Inferences) คือการ 'อ่านระหว่างบรรทัด' เพื่อสรุปความหมาย เจตนา หรือความรู้สึกที่ผู้เขียนไม่ได้ระบุไว้ตรงๆ โดยใช้สมการ: หลักฐานในบทอ่าน (Text Clues) + ความรู้และประสบการณ์เดิม (Prior Knowledge) = ข้อสรุปที่สมเหตุสมผล (Logical Inference) โดยต้องมีหลักฐานสนับสนุนเสมอ ไม่ใช่การเดาอย่างไร้เหตุผล"
        },
        {
          stepNum: 2,
          title: "Why use it?",
          thaiTitle: "ทำไมต้องใช้?",
          icon: "lightbulb",
          content: "In academic literature and university reading assessments, making inferences delivers essential intellectual power:\n1. Decodes Author's Tone, Mood, and Attitude: Writers often express subtle irony, skepticism, humor, or empathy through descriptive details rather than direct declarations.\n2. Essential for High-Level Reading Tests: Standardized English tests (TOEIC, TOEFL, IELTS, CU-TEP, TU-GET) devote up to 30–40% of reading questions to inferences ('It can be inferred that...', 'The author implies...').\n3. Strengthens Critical Thinking: Transforms learners from passive decoders of words into active, analytical thinkers who evaluate unstated assumptions and underlying motives.\n4. Enhances Deeper Literary & Cultural Appreciation: Unlocks multi-layered character motivations, symbolic meanings, and thematic depths in stories, fables, and essays.",
          thaiExplanation: "ช่วยให้เข้าใจน้ำเสียง เจตนา และทัศนคติที่แท้จริงของผู้เขียน เป็นทักษะสำคัญที่ออกข้อสอบวัดระดับภาษาอังกฤษมากถึง 30-40% พัฒนาทักษะการคิดเชิงวิพากษ์ (Critical Thinking) และช่วยให้ซาบซึ้งกับวรรณกรรมและบทความเชิงวิเคราะห์ได้อย่างลึกซึ้ง"
        },
        {
          stepNum: 3,
          title: "When do I use it?",
          thaiTitle: "ใช้เมื่อไหร่?",
          icon: "calendar",
          content: "Apply inferencing whenever you encounter:\n• Exam questions asking: 'What can be inferred from paragraph 3?', 'What does the author imply about...?', or 'With which statement would the author most likely agree?'.\n• Literary narratives, fables, and dramas where characters' feelings and motives are shown through actions rather than told directly.\n• Opinion editorials, political columns, and persuasive essays where authors use nuanced rhetoric, sarcasm, or understatement.\n• Scientific discussion sections where researchers suggest broader implications of their experimental data.",
          thaiExplanation: "ใช้เมื่อเจอข้อสอบที่ถามว่าบทความนี้บอกเป็นนัยถึงสิ่งใด (Implied/Inferred) เมื่ออ่านนิทาน วรรณกรรม และบทละครที่ตัวละครแสดงอารมณ์ผ่านการกระทำ เมื่ออ่านคอลัมน์แสดงความคิดเห็น และเมื่ออ่านผลการทดลองทางวิทยาศาสตร์ที่ต้องตีความความหมายเชิงลึก"
        },
        {
          stepNum: 4,
          title: "How do I use it?",
          thaiTitle: "ใช้อย่างไร?",
          icon: "settings",
          content: "Follow the 5-Step Execution Protocol for Making Inferences:",
          checklist: [
          "Step 1 (Identify Explicit Text Clues): Highlight concrete facts, descriptive adjectives, character actions, dialogue, and tone words stated directly in the text.",
          "Step 2 (Activate Relevant Schema): Ask yourself: 'What do I know from real life, psychology, or history about people behaving or reacting this way?'",
          "Step 3 (Formulate the Logical Bridge): Combine the evidence: 'Because the text states [Clue] and I know [Schema], I can reasonably infer that [Inference]'.",
          "Step 4 (Test Against Alternative Explanations): Challenge your deduction: 'Is this the most probable explanation, or am I leaping to an extreme, unsupported assumption?'",
          "Step 5 (Verify Against Passage Facts): Ensure that your inference does not contradict any other stated statement or fact in the entire passage."
          ]
        },
        {
          stepNum: 5,
          title: "Worked Example",
          thaiTitle: "ตัวอย่างการใช้",
          icon: "file-text",
          content: "Sample Text: 'Dr. Kanya stared intently at the glowing computer monitor in the genetics lab at 02:45 AM. Her coffee cup had been cold for hours, and crumpled spreadsheets covered every square inch of the workbench. Suddenly, her eyes widened. She repeatedly double-checked the DNA sequencing readouts on screen, grabbed her smartphone with trembling fingers, and dialed the department chair's private home number despite the late hour.'",
          annotated: "Strategy Analysis (Unit 5 Model):\n• [Explicit Text Clue 1 (Time & Setting)]: '02:45 AM', 'coffee cold for hours', 'crumpled spreadsheets covered every square inch of the workbench'.\n• [Explicit Text Clue 2 (Physical Reaction)]: 'eyes widened', 'fingers trembling', 'repeatedly double-checked the DNA sequencing readouts'.\n• [Explicit Text Clue 3 (Action)]: 'dialed the department chair's private home number despite the late hour'.\n• [Prior Knowledge (Schema)]: Research scientists only make urgent 3 AM phone calls to university directors when they achieve a landmark breakthrough or critical milestone.\n• [Formulated Logical Inference]: Dr. Kanya has just discovered a groundbreaking, historic genetics breakthrough that warrants immediate notification.\n• [Verification & Error Check]: The text evidence firmly eliminates trivial explanations (e.g. routine lab chores or accidental errors).",
          takeaway: "The author never directly wrote 'She made a historic breakthrough', but her physical reactions and emergency late-night call make that deduction undeniable."
        },
        {
          stepNum: 6,
          title: "Guided Practice",
          thaiTitle: "ฝึกปฏิบัติ",
          icon: "user-check",
          content: "Passage: 'When the airline gate attendant announced that Flight 412 would be delayed by another five hours due to mechanical issues, Mr. Chen sighed deeply, slumped into his airport terminal chair, rubbed his throbbing temples, and slowly pulled a travel pillow from his backpack.'",
          question: "What can you logically infer about Mr. Chen's emotional state and immediate plan?",
          options: [
          "He is exhausted and frustrated by the delay, and plans to sleep at the airport terminal while waiting",
          "He is delighted that he gets to spend five more hours shopping at the airport duty-free stores",
          "He is angry at his travel pillow and decides to cancel his vacation completely",
          "He is an airline mechanic preparing to fix the aircraft engine himself"
          ],
          answer: 0,
          explanation: "Sighing deeply, slumping in a chair, rubbing throbbing temples (signs of fatigue and frustration), and retrieving a travel pillow strongly support the inference that he is tired and preparing to sleep."
        },
        {
          stepNum: 7,
          title: "Apply to a Short Text",
          thaiTitle: "นำไปใช้กับบทอ่านสั้น",
          icon: "book-open",
          passageTitle: "Digital Transformation in Buriram Classrooms",
          passage: "In 2021, teachers at a secondary school in Buriram spent an average of forty minutes each morning printing paper worksheets, manually grading multiple-choice quizzes with red pens, and collecting heavy paper exercise notebooks into cardboard storage crates. By 2026, every student entered the classroom holding a lightweight tablet. Morning quizzes were completed via interactive cloud apps that generated instantaneous analytics, and homework assignments were submitted with a single tap into digital portfolios. Teachers spent the first thirty minutes of class facilitating lively small-group discussions and providing individualized mentoring to struggling learners.",
          audioText: "In 2021, teachers at a secondary school in Buriram spent an average of forty minutes each morning printing paper worksheets, manually grading multiple-choice quizzes with red pens, and collecting heavy paper exercise notebooks into cardboard storage crates. By 2026, every student entered the classroom holding a lightweight tablet. Morning quizzes were completed via interactive cloud apps that generated instantaneous analytics, and homework assignments were submitted with a single tap into digital portfolios. Teachers spent the first thirty minutes of class facilitating lively small-group discussions and providing individualized mentoring to struggling learners.",
          taskQuestion: "What can you logically infer about how educational technology has transformed the daily role of classroom teachers?",
          taskAnswer: "Technology automated repetitive administrative chores (printing, paper grading), freeing teachers to focus on interactive mentoring and high-impact student engagement."
        },
        {
          stepNum: 8,
          title: "Strategy Quiz",
          thaiTitle: "แบบทดสอบ",
          icon: "trophy",
          question: "Which of the following represents a CRITICAL error when making inferences in reading comprehension tests?",
          options: [
          "Making an assumption based entirely on personal opinion that is not supported by any textual evidence",
          "Combining explicit factual clues with reasonable real-world background knowledge",
          "Checking whether the inferred idea contradicts any statement in the text",
          "Looking for clues in the characters' actions and emotional descriptions"
          ],
          answer: 0,
          explanation: "An inference must always be anchored in textual evidence. Making conclusions based on personal bias or unsupported speculation is an invalid wild guess."
        }
      ]
    },
    {
      id: "strat-u6",
      unitNumber: 6,
      title: "Integrated Strategy Review",
      thaiTitle: "การทบทวนกลยุทธ์แบบบูรณาการ",
      scope: "Applying multiple strategies together across Pre-reading, While-reading, and Post-reading stages",
      cefr: "B2",
      icon: "check-check",
      steps: [
        {
          stepNum: 1,
          title: "What is the strategy?",
          thaiTitle: "คืออะไร?",
          icon: "help-circle",
          content: "Integrated Strategy Review is the holistic orchestration and dynamic synthesis of all five core reading strategies across the Three-Phase Reading Model:\n\n1. Strategy Repertoire:\n• Previewing & Predicting (Unit 1): Surveying structural text features to anticipate topics and activate schema.\n• Skimming & Scanning (Unit 2): Skimming for general gist and scanning for targeted empirical data.\n• Using Context Clues (Unit 3): Deciphering unknown vocabulary through definitions, synonyms, contrasts, and examples.\n• Identifying Text Organization (Unit 4): Recognizing structural patterns and tracing cohesive pronoun references.\n• Making Inferences (Unit 5): Synthesizing explicit text clues with background schema to read between the lines.\n\n2. The Three-Phase Framework:\n• Pre-Reading Stage: Previewing titles, subheadings, diagrams; activating schema; formulating initial predictions.\n• While-Reading Stage: Skimming for macro structure; scanning for facts; solving unknown vocabulary with context clues; tracking text organization; inferring unstated meanings.\n• Post-Reading Stage: Verifying initial predictions; synthesizing core takeaways; evaluating authorial purpose and tone; formulating concise written summaries.",
          thaiExplanation: "การทบทวนกลยุทธ์แบบบูรณาการ คือการนำกลยุทธ์การอ่านทั้ง 5 ทักษะมาปรับใช้ร่วมกันอย่างยืดหยุ่นและเป็นระบบตลอด 3 ขั้นตอนการอ่าน: 1. ขั้นก่อนอ่าน (Pre-Reading) สำรวจและคาดเดา 2. ขั้นระหว่างอ่าน (While-Reading) กวาดสายตา แกะรอยบริบท วิเคราะห์โครงสร้าง และอนุมานความหมาย และ 3. ขั้นหลังอ่าน (Post-Reading) ตรวจสอบการคาดเดาและสังเคราะห์สรุปใจความสำคัญ"
        },
        {
          stepNum: 2,
          title: "Why use it?",
          thaiTitle: "ทำไมต้องใช้?",
          icon: "lightbulb",
          content: "Mastering integrated strategy orchestration provides profound academic and intellectual advantages:\n1. Fosters Autonomous, Self-Monitoring Readers: Transforms students from dependent readers who need constant word-by-word translation into autonomous scholars capable of tackling complex English materials independently.\n2. Delivers Mastery in High-Stakes Exams: Standardized university exit exams, TOEIC, TOEFL, and IELTS do not test strategies in isolation; high scores require seamless switching between skimming, scanning, context clues, and inferencing under time constraints.\n3. Prevents Cognitive Overload in Dense Academic Literature: Enables students to absorb 20-page research journal articles, thesis literature reviews, and policy documents without fatigue or confusion.\n4. Long-Term Knowledge Retention: Engaging with texts through a multi-strategy workflow encodes information deeply into long-term cognitive structures rather than superficial short-term memory.",
          thaiExplanation: "ช่วยพัฒนาผู้เรียนให้เป็นผู้อ่านอิสระ (Autonomous Reader) ที่สามารถกำกับและตรวจสอบความเข้าใจของตนเองได้ เป็นหัวใจสำคัญในการทำข้อสอบวัดระดับภาษาอังกฤษระดับสูง (TOEIC, TOEFL, IELTS) ช่วยให้อ่านบทความวิจัยขนาดยาวได้อย่างมีประสิทธิภาพโดยไม่เหนื่อยล้า และช่วยจดจำเนื้อหาได้อย่างลึกซึ้งและยาวนาน"
        },
        {
          stepNum: 3,
          title: "When do I use it?",
          thaiTitle: "ใช้เมื่อไหร่?",
          icon: "calendar",
          content: "Orchestrate integrated reading strategies in these demanding academic and professional settings:\n• Conducting comprehensive literature reviews for undergraduate senior projects, independent studies, and graduate theses.\n• Sitting for high-stakes standardized English proficiency and university exit examinations.\n• Analyzing multi-disciplinary academic textbooks, government policy whitepapers, and international industry reports.\n• Reading authentic literature, scholarly editorials, and peer-reviewed journals where complex arguments and technical data intersect.",
          thaiExplanation: "ใช้ในการค้นคว้าและทบทวนวรรณกรรมสำหรับงานวิจัยและวิทยานิพนธ์ การทำข้อสอบวัดระดับภาษาอังกฤษเพื่อสำเร็จการศึกษา การอ่านรายงานนโยบายภาครัฐและบทวิเคราะห์ระดับนานาชาติ และการอ่านตำราวิชาการระดับสูง"
        },
        {
          stepNum: 4,
          title: "How do I use it?",
          thaiTitle: "ใช้อย่างไร?",
          icon: "settings",
          content: "Execute the 5-Step Master Protocol for Strategy Integration:",
          checklist: [
          "Step 1 (Pre-Reading Orientation): Survey the title, abstract, subheadings, and visuals in 30 seconds; state a formal prediction: 'Based on text features, this passage will demonstrate...'",
          "Step 2 (First-Pass Skimming): Skim the introductory paragraph, topic sentences of body paragraphs, and concluding thoughts at 3x speed to map the overall thesis and structure.",
          "Step 3 (Active While-Reading & Context Clues): Read closely; when encountering unfamiliar academic jargon, immediately classify and apply context clues (IDEAS framework); trace pronoun referents ('it', 'they', 'this') back to their antecedents.",
          "Step 4 (Deep Inferencing & Data Scanning): When comprehension questions demand specific metrics or dates, scan directly for target patterns; read between the lines to deduce authorial tone, implied attitudes, and unstated conclusions.",
          "Step 5 (Post-Reading Synthesis & Summary): Revisit your Step 1 prediction (Confirmed, Refined, or Disproved?); construct a concise 1-to-2 sentence objective summary capturing the central thesis and supporting evidence."
          ]
        },
        {
          stepNum: 5,
          title: "Worked Example",
          thaiTitle: "ตัวอย่างการใช้",
          icon: "file-text",
          content: "Sample Text: 'Abstract: An Empirical Investigation into Community-Based Cultural Tourism along the Khmer Sanctuary Trail in Southern Buriram (Research Bulletin, Vol. 14, 2026). Traditional agricultural revenue in rural Buriram has experienced persistent volatility due to erratic rainfall cycles. In response, four rural subdistricts adjacent to Phanom Rung and Muang Tam sanctuaries established community-based homestay networks in 2023. These enterprises allow heritage travelers to engage directly in silk weaving, volcanic pottery craftsmanship, and local organic farming. Over a three-year assessment period, participating rural households experienced a 36% rise in supplemental annual income; however, researchers noted that municipal infrastructure—specifically rural road access and multilingual directional signage—remains inadequate to support peak festival seasons. Consequently, the provincial administration has allocated emergency infrastructure grants to resolve these transit bottlenecks before the upcoming 2027 tourism cycle.'",
          annotated: "Strategy Analysis (Unit 6 Model):\n• [Phase 1: Pre-Reading Preview]: Surveying title & journal source reveals subject: Community-based Khmer cultural heritage tourism in southern Buriram.\n• [Phase 2: Skimming for Gist]: Captures the core dilemma and response: Erratic rainfall reduced crop revenue, prompting farming communities to create homestay enterprises.\n• [Phase 2: Scanning for Specific Data]: Pinpoints empirical metrics: established in '2023', 'three-year assessment', and '36% rise in supplemental annual income'.\n• [Phase 2: Context Clues]: Decodes 'bottlenecks' via surrounding clue 'rural road access and multilingual signage remains inadequate' -> transit obstacles/delays.\n• [Phase 2: Text Organization & Reference]: Tracks Problem-Solution and Cause-Effect connectives ('In response', 'however', 'Consequently').\n• [Phase 2: Making Inferences]: Deduces that provincial government financial intervention was vital to prevent homestay tourism from collapsing during peak festival seasons.\n• [Phase 3: Post-Reading Synthesis]: Combining these 5 strategies synthesizes the entire 150-word research abstract into a coherent, highly actionable 2-sentence summary!",
          takeaway: "Orchestrating strategies transforms complex academic research into crystal-clear comprehension in under 60 seconds."
        },
        {
          stepNum: 6,
          title: "Guided Practice",
          thaiTitle: "ฝึกปฏิบัติ",
          icon: "user-check",
          content: "Scenario: You are given a 12-page research report on renewable bioenergy in Isan with 15 comprehension questions to answer in 20 minutes.",
          question: "Which sequential workflow represents the most effective integration of reading strategies under strict time pressure?",
          options: [
          "Preview title & headings -> Skim introduction & conclusion for gist -> Scan for question keywords to locate answers -> Use context clues & inference for analytical questions",
          "Start reading word-for-word from page 1 and look up every unknown word in an English-Thai dictionary",
          "Answer all 15 questions by guessing without looking at the text at all",
          "Read only the last sentence of each page and ignore headings and charts"
          ],
          answer: 0,
          explanation: "Master readers combine previewing to frame the topic, skimming for general structure, scanning to locate answers quickly, and context clues/inferencing to solve complex analytical questions."
        },
        {
          stepNum: 7,
          title: "Apply to a Short Text",
          thaiTitle: "นำไปใช้กับบทอ่านสั้น",
          icon: "book-open",
          passageTitle: "The Transformative Power of Strategic Reading",
          passage: "Cognitive educational research demonstrates that skilled readers are not merely faster decoders of alphabetical print; rather, they are active architects of comprehension. When confronted with dense, unfamiliar academic literature, expert readers dynamically adjust their reading velocity. They preview structural landmarks before diving in, rapidly skim to capture macro-level concepts, scan with laser focus for empirical data points, and effortlessly decipher cryptic vocabulary through contextual signals. Furthermore, by tracing cohesive connective markers and inferring unspoken implications, they extract profound meaning from complex arguments. Ultimately, mastering this integrated strategy repertoire transforms English language learners into autonomous, analytical, and confident lifelong scholars.",
          audioText: "Cognitive educational research demonstrates that skilled readers are not merely faster decoders of alphabetical print; rather, they are active architects of comprehension. When confronted with dense, unfamiliar academic literature, expert readers dynamically adjust their reading velocity. They preview structural landmarks before diving in, rapidly skim to capture macro-level concepts, scan with laser focus for empirical data points, and effortlessly decipher cryptic vocabulary through contextual signals. Furthermore, by tracing cohesive connective markers and inferring unspoken implications, they extract profound meaning from complex arguments. Ultimately, mastering this integrated strategy repertoire transforms English language learners into autonomous, analytical, and confident lifelong scholars.",
          taskQuestion: "Explain how expert readers demonstrate flexibility according to this passage, and synthesize the ultimate benefit of mastering integrated reading strategies.",
          taskAnswer: "Expert readers dynamically adjust their reading speed and strategy based on text demands (previewing, skimming, scanning, context clues, inferencing), which ultimately transforms them into autonomous, analytical, and confident lifelong scholars."
        },
        {
          stepNum: 8,
          title: "Strategy Quiz",
          thaiTitle: "แบบทดสอบ",
          icon: "trophy",
          question: "Which scenario best exemplifies an autonomous reader applying integrated reading strategies in an academic setting?",
          options: [
          "A student who previews the abstract and subheadings of a research paper, skims to find relevant sections, scans for statistical data, uses context clues for technical terms, and verifies conclusions",
          "A student who translates an entire 20-page textbook chapter word-by-word with a translation app",
          "A student who skips reading entirely and relies solely on lecture slides",
          "A student who reads every type of text—from poetry to bus schedules—at the exact same slow speed"
          ],
          answer: 0,
          explanation: "An autonomous reader flexibly selects, combines, and adapts reading strategies to match the specific reading purpose and complexity of the text."
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

  // Unit 1 Graded Quiz Database (4 Passages x 10 Questions = 40 Questions)
  unit1Quiz: {
    title: "Unit 1 Graded Quiz: Main Ideas & Topic Sentences",
    thaiTitle: "แบบทดสอบประเมินผลการเรียนรู้ Unit 1: ใจความสำคัญ (40 ข้อ)",
    totalQuestions: 40,
    passages: [
      {
        id: "quiz-p1",
        title: "Passage 1: The Crow and the Pitcher",
        thaiTitle: "บทอ่านที่ 1: อีกากับคนโทน้ำ (การแก้ปัญหาด้วยความพากเพียร)",
        genre: "Classic Narrative Fable",
        audioText: "On a sweltering summer afternoon, a thirsty Crow flew across the parched countryside searching desperately for water. After hours of searching, he discovered a tall glass pitcher standing outside an abandoned cottage. Peering eagerly inside, the bird noticed a small amount of clear water at the very bottom. However, the pitcher's neck was extremely narrow, and his beak could not reach the refreshing liquid. Giving up would mean dying of thirst, but the steadfast bird refused to surrender to despair. Looking around the garden, he noticed a heap of small pebbles on the dry ground. One by one, with patient determination, the clever Crow picked up the stones and dropped them directly into the pitcher. As the heavy pebbles filled the vessel, the water slowly rose to the top rim. Through calm ingenuity and tireless perseverance, the Crow quenched his thirst and saved his own life.",
        sentences: [
          "On a sweltering summer afternoon, a thirsty Crow flew across the parched countryside searching desperately for water.",
          "After hours of searching, he discovered a tall glass pitcher standing outside an abandoned cottage.",
          "Peering eagerly inside, the bird noticed a small amount of clear water at the very bottom.",
          "However, the pitcher's neck was extremely narrow, and his beak could not reach the refreshing liquid.",
          "Giving up would mean dying of thirst, but the steadfast bird refused to surrender to despair.",
          "Looking around the garden, he noticed a heap of small pebbles on the dry ground.",
          "One by one, with patient determination, the clever Crow picked up the stones and dropped them directly into the pitcher.",
          "As the heavy pebbles filled the vessel, the water slowly rose to the top rim.",
          "Through calm ingenuity and tireless perseverance, the Crow quenched his thirst and saved his own life."
        ],
        questions: [
          {
            id: 1,
            type: "mc",
            prompt: "What is the primary Topic (หัวข้อเรื่อง) of this passage?",
            options: [
              "Types of glass pitchers in ancient gardens",
              "The clever problem-solving of a thirsty crow",
              "How summer droughts affect wild birds",
              "The physical weight of small garden pebbles"
            ],
            correctAnswer: 1,
            explanation: "เรื่องนี้เน้นที่ความพยายามและการแก้ปัญหาอย่างชาญฉลาดของอีกาที่กระหายน้ำ จึงเป็น Topic ที่ถูกต้องที่สุด"
          },
          {
            id: 2,
            type: "highlight",
            prompt: "Tap/Select the sentence that serves as the Concluding Topic Sentence / Stated Main Idea of the story (ประโยคใจความสำคัญท้ายเรื่อง).",
            targetSentenceIndex: 8,
            explanation: "ประโยคสุดท้าย (ประโยคที่ 9) ทำหน้าที่เป็น Stated Main Idea ที่รวบยอดคติธรรมเรื่องความเฉลียวฉลาดและความเพียรพยายามที่ทำให้อีการอดชีวิต"
          },
          {
            id: 3,
            type: "mc",
            prompt: "What obstacle prevented the crow from drinking the water initially?",
            options: [
              "The water was contaminated with mud",
              "The pitcher was guarded by an eagle",
              "The pitcher's neck was too narrow for his beak",
              "The water froze into solid ice"
            ],
            correctAnswer: 2,
            explanation: "บทอ่านระบุชัดเจนในประโยคที่ 4 ว่าคอคนโทแคบมากจนจงอยปากเอื้อมไม่ถึงน้ำ"
          },
          {
            id: 4,
            type: "fillBlank",
            prompt: "Choose the correct vocabulary word meaning 'firm, resolute, and refusing to surrender':",
            sentenceWithBlank: "Giving up would mean dying of thirst, but the [ _______ ] bird refused to surrender to despair.",
            choices: ["arrogant", "steadfast", "frivolous", "complacent"],
            correctWord: "steadfast",
            explanation: "'steadfast' หมายถึง มั่นคงแน่วแน่ ไม่ย่อท้อต่ออุปสรรค ซึ่งสอดคล้องกับพฤติกรรมของอีกา"
          },
          {
            id: 5,
            type: "mc",
            prompt: "What role does sentence 6 ('Looking around the garden, he noticed a heap of small pebbles on the dry ground.') play?",
            options: [
              "It is the Main Idea of the story",
              "It is a Major Supporting Detail that introduces the solution",
              "It is a counterargument against the crow",
              "It is a definition of garden tools"
            ],
            correctAnswer: 1,
            explanation: "การสังเกตเห็นกองก้อนหินกรวดเป็น Major Supporting Detail ที่เป็นจุดเปลี่ยนสำคัญนำไปสู่วิธีการแก้ปัญหา"
          },
          {
            id: 6,
            type: "highlight",
            prompt: "Tap/Select the sentence that describes the crow's central conflict or physical barrier in reaching the water.",
            targetSentenceIndex: 3,
            explanation: "ประโยคที่ 4 ('However, the pitcher's neck was extremely narrow...') ระบุปมปัญหาและอุปสรรคทางกายภาพที่อีกาเผชิญ"
          },
          {
            id: 7,
            type: "fillBlank",
            prompt: "Complete the sentence with the key vocabulary word meaning 'continued steady effort':",
            sentenceWithBlank: "Through calm ingenuity and tireless [ _______ ], the Crow quenched his thirst and saved his own life.",
            choices: ["perseverance", "ridicule", "arrogance", "prudence"],
            correctWord: "perseverance",
            explanation: "'perseverance' หมายถึง ความเพียรพยายามอย่างไม่หยุดยั้ง เป็นคำศัพท์หัวใจของบทเรียนนี้"
          },
          {
            id: 8,
            type: "mc",
            prompt: "What does the word 'quenched' mean in the phrase 'quenched his thirst'?",
            options: [
              "Ignored or forgot completely",
              "Satisfied or relieved by drinking",
              "Increased and intensified",
              "Measured scientifically"
            ],
            correctAnswer: 1,
            explanation: "'quench thirst' เป็นสำนวนหมายถึง ดับกระหาย หรือดื่มน้ำจนหายหิวน้ำ"
          },
          {
            id: 9,
            type: "mc",
            prompt: "Which statement is an example of a 'TOO BROAD' (กว้างเกินไป) trap for this passage?",
            options: [
              "Animals are fascinating living organisms on planet Earth",
              "The crow dropped small pebbles into a tall glass pitcher",
              "Clever thinking and persistent effort help overcome difficult challenges",
              "The neck of the pitcher was very narrow"
            ],
            correctAnswer: 0,
            explanation: "'Animals are fascinating living organisms' เป็นกับดักประเภท Too Broad เพราะกว้างเกินไปจนไม่ระบุสาระสำคัญของเรื่องอีกา"
          },
          {
            id: 10,
            type: "highlight",
            prompt: "Tap/Select the sentence demonstrating the crow taking patient, repetitive physical action to solve his problem.",
            targetSentenceIndex: 6,
            explanation: "ประโยคที่ 7 ('One by one, with patient determination, the clever Crow picked up the stones...') แสดงการลงมือทำอย่างเป็นขั้นตอนและอดทน"
          }
        ]
      },
      {
        id: "quiz-p2",
        title: "Passage 2: The Benefits of Regular Morning Exercise",
        thaiTitle: "บทอ่านที่ 2: ประโยชน์ของการออกกำลังกายตอนเช้า (บทความเชิงข้อมูล)",
        genre: "Expository / Health & Student Life",
        audioText: "Starting each day with thirty minutes of light physical exercise provides immense benefits for university students. First, morning workouts stimulate blood circulation and release endorphins, which sharpen mental alertness and enhance concentration during long morning lectures. Students who jog or stretch before breakfast consistently report feeling more energized than those who sleep late. Second, regular morning activity helps regulate natural sleep cycles, allowing learners to fall asleep faster and enjoy deeper rest each night. In contrast, students who remain completely sedentary often struggle with chronic fatigue and academic stress. Finally, dedicating time to exercise every morning builds self-discipline and mental resilience, proving that personal consistency leads to long-term success. Overall, incorporating moderate morning exercise into your daily routine is an essential habit for achieving both physical wellness and academic excellence.",
        sentences: [
          "Starting each day with thirty minutes of light physical exercise provides immense benefits for university students.",
          "First, morning workouts stimulate blood circulation and release endorphins, which sharpen mental alertness and enhance concentration during long morning lectures.",
          "Students who jog or stretch before breakfast consistently report feeling more energized than those who sleep late.",
          "Second, regular morning activity helps regulate natural sleep cycles, allowing learners to fall asleep faster and enjoy deeper rest each night.",
          "In contrast, students who remain completely sedentary often struggle with chronic fatigue and academic stress.",
          "Finally, dedicating time to exercise every morning builds self-discipline and mental resilience, proving that personal consistency leads to long-term success.",
          "Overall, incorporating moderate morning exercise into your daily routine is an essential habit for achieving both physical wellness and academic excellence."
        ],
        questions: [
          {
            id: 11,
            type: "mc",
            prompt: "What is the primary Topic (หัวข้อเรื่อง) of Passage 2?",
            options: [
              "High-protein breakfast recipes for athletes",
              "The benefits of morning physical exercise for university students",
              "The history of modern Olympic sports",
              "How professors evaluate lecture attendance"
            ],
            correctAnswer: 1,
            explanation: "บทความทั้งหมดพูดถึงผลดีของการออกกำลังกายตอนเช้าสำหรับนักศึกษามหาวิทยาลัย"
          },
          {
            id: 12,
            type: "highlight",
            prompt: "Tap/Select the Topic Sentence located at the BEGINNING of this passage.",
            targetSentenceIndex: 0,
            explanation: "ประโยคแรก (ประโยคที่ 1) คือ Topic Sentence ต้นย่อหน้าที่ประกาศประเด็นหลักเรื่องประโยชน์อันมหาศาลของการออกกำลังกายตอนเช้า"
          },
          {
            id: 13,
            type: "mc",
            prompt: "What transition word in sentence 2 introduces the first major supporting detail?",
            options: ["However", "First", "Therefore", "In contrast"],
            correctAnswer: 1,
            explanation: "คำว่า 'First' เป็นคำสัญญาณบอกลำดับ (Sequence/Addition) ที่แนะนำเหตุผลสนับสนุนข้อแรก"
          },
          {
            id: 14,
            type: "fillBlank",
            prompt: "Fill in the blank with the vocabulary word meaning 'the mental strength to bounce back under pressure':",
            sentenceWithBlank: "Finally, dedicating time to exercise every morning builds self-discipline and mental [ _______ ]...",
            choices: ["resilience", "complacency", "arrogance", "fatigue"],
            correctWord: "resilience",
            explanation: "'resilience' หมายถึง ความยืดหยุ่นทางจิตใจหรือความสามารถในการฟื้นตัวเมื่อเผชิญแรงกดดัน"
          },
          {
            id: 15,
            type: "mc",
            prompt: "According to the passage, what negative effect do 'sedentary' students often experience?",
            options: [
              "Loss of appetite during lunch",
              "Chronic fatigue and academic stress",
              "Inability to borrow library books",
              "Sudden memory loss of childhood events"
            ],
            correctAnswer: 1,
            explanation: "ประโยคที่ 5 ระบุตรงไปตรงมาว่า นักศึกษาที่ไม่ค่อยขยับตัวมักเผชิญภาวะเหนื่อยล้าเรื้อรังและความเครียดจากการเรียน"
          },
          {
            id: 16,
            type: "highlight",
            prompt: "Tap/Select the sentence that introduces a DIRECT CONTRAST between active students and inactive students.",
            targetSentenceIndex: 4,
            explanation: "ประโยคที่ 5 ('In contrast, students who remain completely sedentary...') ใช้คำว่า In contrast เพื่อเปรียบเทียบข้อแตกต่างโดยตรง"
          },
          {
            id: 17,
            type: "mc",
            prompt: "Which choice represents a 'Detail Trap (Too Narrow)' if chosen as the Main Idea?",
            options: [
              "Morning exercise benefits both physical wellness and academic performance",
              "Exercise stimulates blood circulation and releases endorphins",
              "Daily physical activity has no effect on sleep quality",
              "University life involves attending morning lectures"
            ],
            correctAnswer: 1,
            explanation: "การกระตุ้นการไหลเวียนเลือดและหลั่งเอนดอร์ฟินเป็นเพียงรายละเอียดทางชีววิทยาข้อเดียว (Detail Trap) ไม่ใช่ใจความสำคัญของทั้งบทความ"
          },
          {
            id: 18,
            type: "fillBlank",
            prompt: "Complete the sentence with the word meaning 'absolutely necessary and extremely important':",
            sentenceWithBlank: "Overall, incorporating moderate morning exercise into your daily routine is an [ _______ ] habit for achieving wellness.",
            choices: ["essential", "frivolous", "arrogant", "harsh"],
            correctWord: "essential",
            explanation: "'essential' แปลว่า จำเป็นอย่างยิ่ง หรือขาดไม่ได้"
          },
          {
            id: 19,
            type: "highlight",
            prompt: "Tap/Select the CONCLUDING sentence that restates the Main Idea at the very end of the passage.",
            targetSentenceIndex: 6,
            explanation: "ประโยคสุดท้าย (ประโยคที่ 7) ขึ้นต้นด้วย 'Overall' และสรุปย้ำ Main Idea ของบทความอย่างสมบูรณ์"
          },
          {
            id: 20,
            type: "mc",
            prompt: "What does the word 'sedentary' mean in sentence 5?",
            options: [
              "Highly athletic and energetic",
              "Inactive, sitting down much of the time",
              "Sleeping outdoors in tents",
              "Traveling frequently across provinces"
            ],
            correctAnswer: 1,
            explanation: "'sedentary' หมายถึง มีพฤติกรรมเนือยนิ่ง หรือนั่งอยู่กับที่เป็นเวลานานโดยไม่ได้ออกกำลังกาย"
          }
        ]
      },
      {
        id: "quiz-p3",
        title: "Passage 3: The Shepherd Boy and the Wolf",
        thaiTitle: "บทอ่านที่ 3: เด็กเลี้ยงแกะกับหมาป่า (ผลลัพธ์ของความไม่ซื่อสัตย์)",
        genre: "Classic Narrative Fable",
        audioText: "A lonely Shepherd Boy tended his village's sheep on a grassy hillside near a dark forest. Finding his daily duties dull and repetitive, he decided to amuse himself by playing a mischievous trick on the hardworking villagers. Running frantically toward the village square, he screamed at the top of his lungs that a ferocious wolf was attacking the flock. The alarmed villagers dropped their tools and rushed up the hill to help, only to find the boastful boy laughing loudly at their panic. A few days later, the arrogant boy repeated the deceitful prank, once again mocking the foolish villagers who came running. However, on the following evening, an actual hungry wolf emerged from the shadows and attacked the terrified sheep. When the boy cried out in genuine terror, the villagers ignored his screams, believing it was merely another deceitful joke. The tragic consequence demonstrates that habitual liars are never believed, even when they speak the absolute truth.",
        sentences: [
          "A lonely Shepherd Boy tended his village's sheep on a grassy hillside near a dark forest.",
          "Finding his daily duties dull and repetitive, he decided to amuse himself by playing a mischievous trick on the hardworking villagers.",
          "Running frantically toward the village square, he screamed at the top of his lungs that a ferocious wolf was attacking the flock.",
          "The alarmed villagers dropped their tools and rushed up the hill to help, only to find the boastful boy laughing loudly at their panic.",
          "A few days later, the arrogant boy repeated the deceitful prank, once again mocking the foolish villagers who came running.",
          "However, on the following evening, an actual hungry wolf emerged from the shadows and attacked the terrified sheep.",
          "When the boy cried out in genuine terror, the villagers ignored his screams, believing it was merely another deceitful joke.",
          "The tragic consequence demonstrates that habitual liars are never believed, even when they speak the absolute truth."
        ],
        questions: [
          {
            id: 21,
            type: "mc",
            prompt: "What is the primary Topic (หัวข้อเรื่อง) of Passage 3?",
            options: [
              "Farming techniques in ancient European villages",
              "The shepherd boy's deceitful pranks and their consequence",
              "The hunting instincts of wild wolves in dark forests",
              "How to weave wool sweaters from sheep"
            ],
            correctAnswer: 1,
            explanation: "เนื้อเรื่องทั้งหมดมุ่งเน้นไปที่การแกล้งโกหกของเด็กเลี้ยงแกะและผลลัพธ์ที่ตามมาจากการกระทำนั้น"
          },
          {
            id: 22,
            type: "highlight",
            prompt: "Tap/Select the Stated Moral / Main Idea sentence located at the END of the passage.",
            targetSentenceIndex: 7,
            explanation: "ประโยคสุดท้าย (ประโยคที่ 8) ทำหน้าที่เป็น Stated Moral สรุปข้อคิดสำคัญว่าคนโกหกเป็นอาจิณจะไม่ได้รับความเชื่อถือแม้ในยามที่พูดความจริง"
          },
          {
            id: 23,
            type: "fillBlank",
            prompt: "In sentence 4, the boy is described as [ _______ ] because he loudly bragged and laughed at others' panic:",
            sentenceWithBlank: "...only to find the [ _______ ] boy laughing loudly at their panic.",
            choices: ["boastful", "humble", "industrious", "steadfast"],
            correctWord: "boastful",
            explanation: "'boastful' แปลว่า ขี้คุย ขี้อวด หรือชอบโอ้อวด"
          },
          {
            id: 24,
            type: "mc",
            prompt: "Why did the villagers ignore the boy's cries when an actual wolf attacked?",
            options: [
              "They were away visiting another town",
              "They believed it was merely another deceitful joke",
              "They wanted the wolf to eat the sheep",
              "They were sleeping deeply during the night"
            ],
            correctAnswer: 1,
            explanation: "ชาวบ้านเพิกเฉยเพราะคิดว่าเป็นเพียงเรื่องโกหกหลอกเล่นอีกครั้งของเด็กเลี้ยงแกะ"
          },
          {
            id: 25,
            type: "highlight",
            prompt: "Tap/Select the TURNING POINT sentence when real danger actually appeared.",
            targetSentenceIndex: 5,
            explanation: "ประโยคที่ 6 ('However, on the following evening, an actual hungry wolf emerged...') คือจุดเปลี่ยนที่หมาป่าตัวจริงปรากฏขึ้น"
          },
          {
            id: 26,
            type: "fillBlank",
            prompt: "Fill in the blank with the vocabulary word meaning 'having an exaggerated sense of one's own superiority':",
            sentenceWithBlank: "A few days later, the [ _______ ] boy repeated the deceitful prank, once again mocking the villagers.",
            choices: ["arrogant", "diligent", "prudent", "modest"],
            correctWord: "arrogant",
            explanation: "'arrogant' หมายถึง หยิ่งยะโส หรืออวดดี"
          },
          {
            id: 27,
            type: "mc",
            prompt: "What is the Main Idea of this fable?",
            options: [
              "Wolves prefer hunting sheep rather than birds in mountain forests",
              "Repeated dishonesty causes people to lose trust in you completely",
              "Herding sheep on a hillside is a tedious job for young teenagers",
              "Villagers should run uphill without bringing farming tools"
            ],
            correctAnswer: 1,
            explanation: "ใจความสำคัญคือ การโกหกซ้ำๆ ทำลายความไว้วางใจจนไม่มีใครเชื่อถืออีกต่อไป"
          },
          {
            id: 28,
            type: "highlight",
            prompt: "Tap/Select the sentence explaining the boy's initial MOTIVE for playing the mischievous trick.",
            targetSentenceIndex: 1,
            explanation: "ประโยคที่ 2 ('Finding his daily duties dull and repetitive...') อธิบายแรงจูงใจว่าเขาเบื่อหน้าที่ประจำที่ซ้ำซากจึงอยากหาเรื่องสนุก"
          },
          {
            id: 29,
            type: "mc",
            prompt: "What does the word 'deceitful' mean in the phrase 'deceitful prank'?",
            options: [
              "Honest and well-planned",
              "Misleading, untruthful, and dishonest",
              "Generous and community-oriented",
              "Related to mathematical numbers"
            ],
            correctAnswer: 1,
            explanation: "'deceitful' แปลว่า หลอกลวง ไม่ซื่อสัตย์ หรือมีเจตนาตบตาผู้อื่น"
          },
          {
            id: 30,
            type: "mc",
            prompt: "If a student chooses 'The boy tended sheep on a hillside' as the Main Idea, what error did they make?",
            options: [
              "Too Broad trap",
              "Too Narrow / Minor Detail trap",
              "Correct interpretation",
              "Irrelevant invented fact"
            ],
            correctAnswer: 1,
            explanation: "การบอกว่าเด็กเลี้ยงแกะอยู่บนเนินเขาเป็นเพียง Minor Detail (ฉากหลังของเรื่อง) ซึ่งแคบเกินไปที่จะเป็น Main Idea"
          }
        ]
      },
      {
        id: "quiz-p4",
        title: "Passage 4: How Modern Public Libraries Are Evolving",
        thaiTitle: "บทอ่านที่ 4: การปรับเปลี่ยนของห้องสมุดประชาชนยุคใหม่ (บทความเชิงสารคดีร่วมสมัย)",
        genre: "Expository / Modern Society & Technology",
        audioText: "Across the globe, modern public libraries are transforming from quiet book repositories into dynamic community technology centers. In the past, visitors entered libraries solely to borrow printed novels or study silently under strict supervision. Today, however, contemporary libraries provide free high-speed internet access, digital audiobooks, and collaborative multimedia workstations for students and freelancers. Furthermore, many modern urban libraries offer free coding workshops, 3D printing equipment, and professional development seminars to empower local residents. These innovative technological resources bridge the digital divide for underprivileged families who cannot afford expensive computers at home. Rather than becoming obsolete in the internet age, public libraries have successfully adapted their core mission to meet the evolving informational needs of modern society. By embracing digital innovation, community libraries remain vital institutions for lifelong learning, equal opportunity, and public education.",
        sentences: [
          "Across the globe, modern public libraries are transforming from quiet book repositories into dynamic community technology centers.",
          "In the past, visitors entered libraries solely to borrow printed novels or study silently under strict supervision.",
          "Today, however, contemporary libraries provide free high-speed internet access, digital audiobooks, and collaborative multimedia workstations for students and freelancers.",
          "Furthermore, many modern urban libraries offer free coding workshops, 3D printing equipment, and professional development seminars to empower local residents.",
          "These innovative technological resources bridge the digital divide for underprivileged families who cannot afford expensive computers at home.",
          "Rather than becoming obsolete in the internet age, public libraries have successfully adapted their core mission to meet the evolving informational needs of modern society.",
          "By embracing digital innovation, community libraries remain vital institutions for lifelong learning, equal opportunity, and public education."
        ],
        questions: [
          {
            id: 31,
            type: "mc",
            prompt: "What is the primary Topic (หัวข้อเรื่อง) of Passage 4?",
            options: [
              "The manufacturing process of 3D printers",
              "The transformation of modern public libraries into digital community centers",
              "The biographies of famous classical novelists",
              "Monthly subscription fees for internet service providers"
            ],
            correctAnswer: 1,
            explanation: "บทความมุ่งเน้นเรื่องการปรับโฉมของห้องสมุดประชาชนสู่ศูนย์กลางเทคโนโลยีเพื่อชุมชน"
          },
          {
            id: 32,
            type: "highlight",
            prompt: "Tap/Select the Topic Sentence in sentence 1 stating the overall transformation of public libraries.",
            targetSentenceIndex: 0,
            explanation: "ประโยคแรก ('Across the globe, modern public libraries are transforming...') คือ Topic Sentence ที่แถลงประเด็นการเปลี่ยนแปลงใหญ่ของห้องสมุด"
          },
          {
            id: 33,
            type: "fillBlank",
            prompt: "Fill in the blank with the vocabulary word meaning 'outdated or no longer in use because something newer exists':",
            sentenceWithBlank: "Rather than becoming [ _______ ] in the internet age, public libraries have successfully adapted their core mission...",
            choices: ["obsolete", "industrious", "arrogant", "steadfast"],
            correctWord: "obsolete",
            explanation: "'obsolete' หมายถึง ล้าสมัย หรือเลิกใช้ไปแล้วเพราะมีสิ่งใหม่มาแทนที่"
          },
          {
            id: 34,
            type: "mc",
            prompt: "What transition phrase in sentence 3 signals the shift from historical libraries to contemporary ones?",
            options: ["For instance", "Today, however", "In conclusion", "First of all"],
            correctAnswer: 1,
            explanation: "'Today, however' ทำหน้าที่เป็นคำเชื่อมบอกความขัดแย้ง (Contrast Transition) ระหว่างอดีตกับปัจจุบัน"
          },
          {
            id: 35,
            type: "highlight",
            prompt: "Tap/Select the sentence explaining how libraries help UNDERPRIVILEGED FAMILIES access modern technology.",
            targetSentenceIndex: 4,
            explanation: "ประโยคที่ 5 ('These innovative technological resources bridge the digital divide for underprivileged families...') ระบุการช่วยเหลือครอบครัวที่ขาดแคลนทุนทรัพย์"
          },
          {
            id: 36,
            type: "fillBlank",
            prompt: "Complete the sentence with the correct skill term mentioned in the text:",
            sentenceWithBlank: "Furthermore, many modern urban libraries offer free [ _______ ] workshops, 3D printing equipment, and seminars.",
            choices: ["coding", "hunting", "complacent", "swimming"],
            correctWord: "coding",
            explanation: "เนื้อเรื่องระบุว่าห้องสมุดมีเวิร์กช็อปสอน 'coding' (การเขียนโค้ดคอมพิวเตอร์) และอุปกรณ์พิมพ์ 3 มิติ"
          },
          {
            id: 37,
            type: "mc",
            prompt: "What is the Main Idea of Passage 4?",
            options: [
              "Printed paper books will soon be completely prohibited worldwide",
              "Libraries stay vital by adopting digital technology and community services for lifelong learning",
              "3D printing machines are too expensive for ordinary citizens to purchase",
              "Freelancers dislike using internet connections when working on campus"
            ],
            correctAnswer: 1,
            explanation: "Main Idea คือ ห้องสมุดยังคงเป็นสถาบันสำคัญเพราะปรับตัวนำเทคโนโลยีดิจิทัลมาให้บริการการเรียนรู้ตลอดชีวิตแก่ประชาชน"
          },
          {
            id: 38,
            type: "highlight",
            prompt: "Tap/Select the CONCLUDING sentence summarizing why community libraries remain vital institutions.",
            targetSentenceIndex: 6,
            explanation: "ประโยคสุดท้าย (ประโยคที่ 7) สรุปภาพรวมว่าห้องสมุดยังเป็นสถาบันที่มีชีวิตชีวาสำหรับการศึกษาและความเท่าเทียม"
          },
          {
            id: 39,
            type: "mc",
            prompt: "What does the phrase 'bridge the digital divide' mean in sentence 5?",
            options: [
              "Build a physical concrete bridge for high-speed fiber cables",
              "Reduce the gap between people who have digital access and those who do not",
              "Separate engineering majors from humanities majors",
              "Permanently delete all social media websites from library computers"
            ],
            correctAnswer: 1,
            explanation: "'bridge the digital divide' หมายถึง การลดช่องว่างทางดิจิทัล เพื่อให้ทุกคนสามารถเข้าถึงเทคโนโลยีได้อย่างเท่าเทียม"
          },
          {
            id: 40,
            type: "mc",
            prompt: "Which choice is a MINOR SUPPORTING DETAIL rather than the Main Idea?",
            options: [
              "Public libraries have adapted their core mission to meet modern societal needs",
              "Libraries offer 3D printing equipment and free coding workshops",
              "Modern libraries remain vital institutions for lifelong learning and equal opportunity",
              "Libraries transformed from quiet book repositories into dynamic community centers"
            ],
            correctAnswer: 1,
            explanation: "การเสนออุปกรณ์พิมพ์ 3 มิติและเวิร์กช็อปโค้ดดิ้งเป็นเพียงตัวอย่างย่อย (Minor Supporting Detail) สนับสนุนการบริการ"
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
