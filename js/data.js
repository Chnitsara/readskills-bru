/**
 * ReadSkills BRU Data Store
 * Based on Chapter 3 & Lesson Plans 1-6 (Buriram Rajabhat University)
 */

window.ReadSkillsData = {
  // 6 Units based on Blueprint Lesson Plans 1-6
  units: [
    {
      id: 1,
      code: "UNIT-01",
      title: "Main Ideas",
      thaiTitle: "ใจความสำคัญของเรื่อง",
      description: "Learn how to identify the topic, state the main idea, and differentiate topic sentences from supporting details.",
      cefr: "A1-A2",
      stages: {
        preReading: {
          title: "Pre-Reading Stage",
          topics: [
            {
              id: "u1-pre-1",
              title: "Predicting Text Content",
              thaiTitle: "การคาดเดาเนื้อหาจากภาพและหัวข้อ",
              steps: {
                overview: "Pre-reading helps activate background knowledge before reading.",
                learn: "Look at headlines, images, and bold words to form predictions.",
                passage: "Buriram Rajabhat University is famous for its vibrant campus and rich cultural heritage in Isan Thailand.",
                audioText: "Buriram Rajabhat University is famous for its vibrant campus and rich cultural heritage in Isan Thailand.",
                example: "Headline: 'New Innovation Lab Opens at BRU' -> Prediction: The article discusses technology and facilities at BRU.",
                practice: {
                  question: "What is the primary prediction for a text titled 'Tips for Effective Reading Strategies'?",
                  options: [
                    "A story about a famous novelist",
                    "Techniques to improve reading comprehension",
                    "A guide on how to write code",
                    "History of printing presses"
                  ],
                  answer: 1,
                  explanation: "The title directly mentions 'Tips for Effective Reading Strategies', so the text will cover techniques for comprehension."
                },
                quiz: {
                  question: "Which pre-reading element gives the quickest hint about the main idea?",
                  options: ["Page numbers", "Heading / Title", "Font style", "Index"],
                  answer: 1,
                  explanation: "Headings and titles synthesize the main topic in a few keywords."
                }
              }
            }
          ]
        },
        whileReading: {
          title: "While-Reading Stage",
          topics: [
            {
              id: "u1-while-1",
              title: "Locating Stated Main Ideas",
              thaiTitle: "การหาใจความสำคัญที่ระบุไว้อย่างชัดเจน",
              steps: {
                overview: "A stated main idea is often found in the topic sentence of a paragraph.",
                learn: "Topic sentences commonly appear at the beginning or end of a paragraph.",
                passage: "Regular reading expands vocabulary and strengthens critical thinking skills. It allows students to absorb complex concepts smoothly. Therefore, daily reading is essential for academic success.",
                audioText: "Regular reading expands vocabulary and strengthens critical thinking skills. It allows students to absorb complex concepts smoothly. Therefore, daily reading is essential for academic success.",
                example: "First sentence: 'Regular reading expands vocabulary...' summarizes the core message.",
                practice: {
                  question: "Where is the topic sentence most frequently located?",
                  options: ["Always in the middle", "At the start or end of a paragraph", "Only in footnotes", "In the reference list"],
                  answer: 1,
                  explanation: "Writers often place the main thesis at the start to set context, or at the end as a concluding summary."
                },
                quiz: {
                  question: "In the passage above, what is the stated main idea?",
                  options: [
                    "Daily reading is essential for academic success",
                    "Books are expensive to buy",
                    "Vocabulary is never useful",
                    "Critical thinking cannot be learned"
                  ],
                  answer: 0,
                  explanation: "The concluding sentence encapsulates the main message supported by previous details."
                }
              }
            }
          ]
        },
        postReading: {
          title: "Post-Reading Stage",
          topics: [
            {
              id: "u1-post-1",
              title: "Summarizing Main Ideas",
              thaiTitle: "การสรุปใจความสำคัญหลังการอ่าน",
              steps: {
                overview: "Post-reading consolidates understanding into short summaries.",
                learn: "Combine the topic and key supporting points in your own words without adding personal opinions.",
                passage: "Students who practice active reading strategies score higher on proficiency tests and retain information longer than passive readers.",
                audioText: "Students who practice active reading strategies score higher on proficiency tests and retain information longer than passive readers.",
                example: "Summary: Active reading improves test scores and long-term memory.",
                practice: {
                  question: "What should NOT be included in an objective summary?",
                  options: ["Main idea", "Key supporting points", "Personal opinions and biases", "Author's thesis"],
                  answer: 2,
                  explanation: "A summary must remain objective and state only the author's key points."
                },
                quiz: {
                  question: "Which sentence best summarizes the passage?",
                  options: [
                    "Passive readers are better than active readers",
                    "Active reading leads to higher achievement and better retention",
                    "Proficiency tests are unnecessary",
                    "Students dislike active reading"
                  ],
                  answer: 1,
                  explanation: "It captures both key benefits mentioned in the text."
                }
              }
            }
          ]
        }
      }
    },
    {
      id: 2,
      code: "UNIT-02",
      title: "Supporting Details & Idea Relationships",
      thaiTitle: "รายละเอียดสนับสนุนและความสัมพันธ์ของความคิด",
      description: "Analyze major vs minor details, cause-and-effect signals, and logical contrast relationships.",
      cefr: "A2",
      stages: { preReading: { title: "Pre-Reading Stage", topics: [] }, whileReading: { title: "While-Reading Stage", topics: [] }, postReading: { title: "Post-Reading Stage", topics: [] } }
    },
    {
      id: 3,
      code: "UNIT-03",
      title: "Vocabulary in Context & Sentence Meaning",
      thaiTitle: "คำศัพท์จากบริบทและความหมายของประโยค",
      description: "Use context clues (definition, synonym, antonym, example) to decode unfamiliar English words.",
      cefr: "A2-B1",
      stages: { preReading: { title: "Pre-Reading Stage", topics: [] }, whileReading: { title: "While-Reading Stage", topics: [] }, postReading: { title: "Post-Reading Stage", topics: [] } }
    },
    {
      id: 4,
      code: "UNIT-04",
      title: "References, Connectives & Text Organization",
      thaiTitle: "คำอ้างอิง คำเชื่อม และการจัดโครงสร้างข้อความ",
      description: "Identify pronoun references (it, they, which) and logical transitions (however, furthermore, as a result).",
      cefr: "B1",
      stages: { preReading: { title: "Pre-Reading Stage", topics: [] }, whileReading: { title: "While-Reading Stage", topics: [] }, postReading: { title: "Post-Reading Stage", topics: [] } }
    },
    {
      id: 5,
      code: "UNIT-05",
      title: "Text Interpretation & Paraphrased Meaning",
      thaiTitle: "การตีความและการถอดความข้อความ",
      description: "Recognize valid paraphrases, infer author's tone, and distinguish fact from opinion.",
      cefr: "B1-B2",
      stages: { preReading: { title: "Pre-Reading Stage", topics: [] }, whileReading: { title: "While-Reading Stage", topics: [] }, postReading: { title: "Post-Reading Stage", topics: [] } }
    },
    {
      id: 6,
      code: "UNIT-06",
      title: "Integrated Reading Practice",
      thaiTitle: "การฝึกอ่านแบบบูรณาการ",
      description: "Synthesize all strategies across multi-paragraph academic and workplace texts.",
      cefr: "B2",
      stages: { preReading: { title: "Pre-Reading Stage", topics: [] }, whileReading: { title: "While-Reading Stage", topics: [] }, postReading: { title: "Post-Reading Stage", topics: [] } }
    }
  ],

  // Reading Strategies - 8 Step Learning Flow
  strategies: [
    {
      id: "strat-1",
      name: "Skimming for Gist",
      thaiName: "การอ่านข้ามเพื่อจับใจความรวม (Skimming)",
      icon: "eye",
      steps: [
        { title: "1. What is the strategy?", content: "Skimming is reading rapidly to get a general overview of the text without reading every word." },
        { title: "2. Why use it?", content: "It saves time when deciding if a text is relevant and prepares your mind for detailed reading." },
        { title: "3. When do I use it?", content: "Before reading long articles, scanning textbooks, or reviewing large amounts of information." },
        { title: "4. How do I use it?", content: "Read titles, first and last sentences of paragraphs, and glance at bullet points or visual illustrations." },
        { title: "5. Worked Example", content: "Glance at the paragraph below: 'Solar energy is becoming the dominant renewable source in Asia due to falling panel costs...'", annotated: "Key takeaway: Solar energy is growing rapidly in Asia due to low costs." },
        { title: "6. Guided Practice", content: "Skim this passage in 10 seconds: 'Smart agriculture at BRU uses IoT sensors to monitor soil moisture, boosting rice yield by 25%.'", question: "What is the main topic?", options: ["IoT in smart agriculture", "History of traditional tools", "Soil erosion in Europe"], answer: 0 },
        { title: "7. Apply to a Short Text", content: "Read the short passage and identify the main topic using skimming skills.", passage: "Digital literacy is essential for modern university graduates. Employers seek candidates who can evaluate online sources, collaborate via cloud tools, and protect personal data.", audioText: "Digital literacy is essential for modern university graduates. Employers seek candidates who can evaluate online sources, collaborate via cloud tools, and protect personal data." },
        { title: "8. Strategy Quiz", question: "What is the primary goal of skimming?", options: ["To memorize dates", "To get the main idea quickly", "To correct grammar errors", "To translate every word"], answer: 1, explanation: "Skimming focuses on obtaining the overall gist efficiently." }
      ]
    },
    {
      id: "strat-2",
      name: "Scanning for Specific Details",
      thaiName: "การอ่านกวาดสายตาเพื่อหาข้อมูลเฉพาะ (Scanning)",
      icon: "search",
      steps: [
        { title: "1. What is the strategy?", content: "Scanning is searching for specific words, numbers, dates, or terms in a text." },
        { title: "2. Why use it?", content: "Allows you to locate key facts immediately without reading line-by-line." },
        { title: "3. When do I use it?", content: "Looking up flight schedules, exam dates, specific vocabulary definitions, or statistical figures." },
        { title: "4. How do I use it?", content: "Keep the target keyword/number in mind and let your eyes dart quickly over the page." },
        { title: "5. Worked Example", content: "Find the year BRU was founded in the snippet: 'Established in 1971, Buriram Rajabhat University expanded its faculties...'", annotated: "Target word: Year -> 1971." },
        { title: "6. Guided Practice", content: "Scan for the room number: 'The English Seminar will take place in Room 402 on Friday at 9:00 AM.'", question: "Where is the seminar?", options: ["Room 402", "Friday", "9:00 AM", "Main Hall"], answer: 0 },
        { title: "7. Apply to a Short Text", content: "Scan the text below for the percentage of students participating in e-learning.", passage: "A recent survey at BRU revealed that 84% of undergraduate students regularly use the online portal for assignment submissions.", audioText: "A recent survey at BRU revealed that 84% of undergraduate students regularly use the online portal for assignment submissions." },
        { title: "8. Strategy Quiz", question: "Which of the following is best suited for scanning?", options: ["Finding a specific phone number in a directory", "Enjoying a poetry novel", "Analyzing poetic theme", "Writing a summary"], answer: 0, explanation: "Scanning is ideal for pinpointing specific data like numbers or names." }
      ]
    }
  ],

  // Practice Quizzes & Games
  practiceOptions: {
    games: [
      { id: "g1", title: "Word Matcher Challenge", description: "Match English reading terms with their Thai definitions.", icon: "gamepad-2" },
      { id: "g2", title: "Speed Main Idea Race", description: "Pick the correct main idea sentence within 15 seconds!", icon: "zap" }
    ],
    quizzes: [
      { id: "q1", title: "Unit 1 Comprehension Quiz", questionsCount: 5, timeMinutes: 10 },
      { id: "q2", title: "Mixed Strategy Assessment", questionsCount: 10, timeMinutes: 15 }
    ]
  },

  // Student Database Records for Teacher Admin Report Dashboard
  studentsReport: [
    { id: "STD-6501", name: "Somsak Jaidee (สมศักดิ์ ใจดี)", email: "somsak@bru.ac.th", onlineHours: "14.5 hrs", onlineSeconds: 52200, completedUnits: "5/6 Units", quizAvg: "88%", lastActive: "2026-09-21 14:15" },
    { id: "STD-6502", name: "Kanya Wongsuwan (กัญญา วงศ์สุวรรณ)", email: "kanya@bru.ac.th", onlineHours: "18.2 hrs", onlineSeconds: 65520, completedUnits: "6/6 Units", quizAvg: "94%", lastActive: "2026-09-21 13:40" },
    { id: "STD-6503", name: "Niran Suwannarat (นิรันดร์ สุวรรณรัตน์)", email: "niran@bru.ac.th", onlineHours: "9.8 hrs", onlineSeconds: 35280, completedUnits: "3/6 Units", quizAvg: "76%", lastActive: "2026-09-20 18:22" },
    { id: "STD-6504", name: "Ploypailin Rattana (พลอยไพลิน รัตนะ)", email: "ploy@bru.ac.th", onlineHours: "22.0 hrs", onlineSeconds: 79200, completedUnits: "6/6 Units", quizAvg: "96%", lastActive: "2026-09-21 15:00" },
    { id: "STD-6505", name: "Chaiwat Prasert (ชัยวัฒน์ ประเสริฐ)", email: "chaiwat@bru.ac.th", onlineHours: "6.4 hrs", onlineSeconds: 23040, completedUnits: "2/6 Units", quizAvg: "68%", lastActive: "2026-09-19 11:05" }
  ]
};
