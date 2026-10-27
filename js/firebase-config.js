/**
 * Firebase configuration for Reading Skills (BRU)
 *
 * วิธีตั้งค่า (ดูรายละเอียดเต็มใน FIREBASE_SETUP.md):
 * 1. สร้างโปรเจกต์ที่ https://console.firebase.google.com
 * 2. Build > Authentication > Get started > เปิด "Email/Password"
 * 3. Build > Firestore Database > Create database
 * 4. Project settings > Your apps > Web (</>) > คัดลอกค่า firebaseConfig มาวางแทนด้านล่าง
 * 5. วางกฎความปลอดภัยจากไฟล์ firestore.rules ที่แท็บ Firestore > Rules
 *
 * หมายเหตุ: ค่า apiKey ของ Firebase Web ไม่ใช่ความลับ (ความปลอดภัยควบคุมด้วย firestore.rules)
 */
window.BRU_FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
