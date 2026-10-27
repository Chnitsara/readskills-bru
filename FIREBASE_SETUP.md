# ตั้งค่าระบบสมาชิกจริง (Firebase Authentication + Firestore)

ระบบสมาชิกของ Reading Skills ใช้ **Firebase** (ฟรีระดับ Spark) — ไม่ต้องมีเซิร์ฟเวอร์ของตัวเอง

## 1) สร้างโปรเจกต์ Firebase
1. ไปที่ https://console.firebase.google.com → **Add project**
2. **Build → Authentication → Get started → Sign-in method → Email/Password → Enable**
3. **Build → Firestore Database → Create database** (เลือกโหมด *Production*, ภูมิภาค `asia-southeast1` หรือใกล้เคียง)
4. **Project settings (⚙️) → Your apps → Web `</>`** → ลงทะเบียนแอป แล้วคัดลอก `firebaseConfig`

## 2) ใส่ค่า config
เปิด `js/firebase-config.js` แล้วแทนที่ค่า `YOUR_...` ด้วยค่าที่คัดลอกมา

## 3) วางกฎความปลอดภัย
Firestore → แท็บ **Rules** → วางเนื้อหาจากไฟล์ `firestore.rules` → **Publish**

กฎนี้ทำให้:
- นักศึกษาอ่าน/เขียนได้เฉพาะข้อมูลของตัวเอง
- สมัครใหม่ได้เฉพาะ role `student` (แก้ role ตัวเองไม่ได้)
- เฉพาะอาจารย์ (`role = instructor`) เท่านั้นที่ดูข้อมูลนักศึกษาทั้งหมดได้

## 4) อนุญาตโดเมนที่ใช้งาน
Authentication → **Settings → Authorized domains** → เพิ่มโดเมนที่ deploy (เช่น `yourname.github.io`)
(`localhost` ถูกอนุญาตไว้แล้ว) — ต้องเปิดเว็บผ่าน `http://localhost` หรือโดเมนจริง ไม่ใช่เปิดไฟล์ `index.html` ตรงๆ

ตัวอย่างรันในเครื่อง: `python -m http.server 8000` แล้วเปิด http://localhost:8000

## 5) สร้างบัญชีอาจารย์
1. สมัครสมาชิกในเว็บตามปกติ (จะได้ role = `student`)
2. Firebase Console → Firestore → collection `users` → เอกสารของอีเมลนั้น
3. แก้ฟิลด์ `role` เป็น `instructor` → ผู้ใช้จะเห็นเมนู **Teacher Report** หลังเข้าสู่ระบบใหม่

## ข้อมูลที่บันทึกลงฐานข้อมูล (`users/{uid}`)
| ฟิลด์ | ความหมาย |
|---|---|
| `name`, `email`, `role` | ข้อมูลสมาชิกและสิทธิ์ |
| `onlineSeconds` | เวลาออนไลน์สะสม (นับเฉพาะตอนเปิดแท็บ บันทึกทุก 30 วินาที) |
| `quizScores` | คะแนนแบบทดสอบประจำบท Unit 1–6 (`q1`–`q6`) |
| `activeDays` | วันที่เข้าใช้งาน (ใช้แสดง Access Frequency) |
| `lastActiveAt` | เวลาใช้งานล่าสุด |

> หมายเหตุ: คะแนนกิจกรรมย่อยในแต่ละบทเรียน (เกม/แบบฝึกหัดระหว่างเรียน) ยังเก็บในเบราว์เซอร์ของผู้เรียน
> ส่วนรายงานของอาจารย์ใช้คะแนนแบบทดสอบประจำบท + เวลาออนไลน์ ซึ่งบันทึกลงฐานข้อมูลกลาง
