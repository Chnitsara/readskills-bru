/**
 * BRUCloud – Firebase Authentication + Firestore wrapper (Reading Skills, BRU)
 *
 * โครงสร้างข้อมูล Firestore:  users/{uid}
 *   name, email, role ('student' | 'instructor'), onlineSeconds,
 *   quizScores { q1..q6: {score, correctCount, total, passed, completedAt} },
 *   activeDays ['YYYY-MM-DD', ...], createdAt, lastActiveAt
 *
 * บัญชีอาจารย์: สมัครเป็นนักศึกษาก่อน แล้วเปลี่ยนฟิลด์ role เป็น "instructor"
 * ใน Firebase Console > Firestore > users > (เอกสารของผู้ใช้นั้น)
 */
(function () {
  const cfg = window.BRU_FIREBASE_CONFIG || {};
  const configured = !!cfg.apiKey && cfg.apiKey !== 'YOUR_API_KEY' && !!cfg.projectId && cfg.projectId !== 'YOUR_PROJECT_ID';
  const sdkLoaded = typeof window.firebase !== 'undefined';

  let auth = null;
  let db = null;

  if (configured && sdkLoaded) {
    if (!firebase.apps.length) firebase.initializeApp(cfg);
    auth = firebase.auth();
    db = firebase.firestore();
  }

  const todayKey = () => {
    const d = new Date();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${m}-${day}`;
  };

  const errorMessage = (err) => {
    const code = (err && err.code) || '';
    const map = {
      'auth/email-already-in-use': 'อีเมลนี้ถูกใช้สมัครสมาชิกแล้ว กรุณาเข้าสู่ระบบ หรือใช้อีเมลอื่น',
      'auth/invalid-email': 'รูปแบบอีเมลไม่ถูกต้อง',
      'auth/weak-password': 'รหัสผ่านสั้นเกินไป (ต้องมีอย่างน้อย 6 ตัวอักษร)',
      'auth/user-not-found': 'ไม่พบบัญชีนี้ในระบบ กรุณาสมัครสมาชิกก่อน',
      'auth/wrong-password': 'รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
      'auth/invalid-credential': 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
      'auth/invalid-login-credentials': 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
      'auth/too-many-requests': 'ลองผิดหลายครั้งเกินไป กรุณารอสักครู่แล้วลองใหม่',
      'auth/network-request-failed': 'เชื่อมต่ออินเทอร์เน็ตไม่ได้ กรุณาตรวจสอบเครือข่าย',
      'auth/user-disabled': 'บัญชีนี้ถูกระงับการใช้งาน',
      'permission-denied': 'ไม่มีสิทธิ์เข้าถึงข้อมูล (ตรวจสอบ Firestore Rules)'
    };
    return map[code] || ('เกิดข้อผิดพลาด: ' + ((err && err.message) || code || 'ไม่ทราบสาเหตุ'));
  };

  const defaultProfile = (user, name) => ({
    name: name || user.displayName || (user.email ? user.email.split('@')[0] : 'Student'),
    email: user.email,
    role: 'student',
    onlineSeconds: 0,
    quizScores: {},
    activeDays: [],
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    lastActiveAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  window.BRUCloud = {
    isConfigured: () => configured && sdkLoaded && !!auth,
    errorMessage,

    onAuthChanged(callback) {
      return auth.onAuthStateChanged(callback);
    },

    async signUp(name, email, password) {
      const cred = await auth.createUserWithEmailAndPassword(email, password);
      await cred.user.updateProfile({ displayName: name });
      await db.collection('users').doc(cred.user.uid).set(defaultProfile(cred.user, name));
      return cred.user;
    },

    signIn(email, password) {
      return auth.signInWithEmailAndPassword(email, password);
    },

    signOut() {
      return auth.signOut();
    },

    sendPasswordReset(email) {
      return auth.sendPasswordResetEmail(email);
    },

    /** โหลดโปรไฟล์ผู้ใช้ (ถ้ายังไม่มีเอกสาร จะสร้างให้อัตโนมัติ) */
    async loadProfile(user) {
      const ref = db.collection('users').doc(user.uid);
      const snap = await ref.get();
      if (!snap.exists) {
        await ref.set(defaultProfile(user));
        const created = await ref.get();
        return created.data();
      }
      return snap.data();
    },

    /** บันทึกเวลาออนไลน์ (วินาทีที่เพิ่มขึ้น) + วันที่เข้าใช้งาน */
    saveOnline(uid, deltaSeconds) {
      if (!deltaSeconds || deltaSeconds <= 0) return Promise.resolve();
      return db.collection('users').doc(uid).update({
        onlineSeconds: firebase.firestore.FieldValue.increment(Math.round(deltaSeconds)),
        lastActiveAt: firebase.firestore.FieldValue.serverTimestamp(),
        activeDays: firebase.firestore.FieldValue.arrayUnion(todayKey())
      });
    },

    /** บันทึกคะแนนแบบทดสอบประจำบท */
    saveQuizScore(uid, quizId, result) {
      return db.collection('users').doc(uid).update({
        ['quizScores.' + quizId]: result,
        lastActiveAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    },

    /** รายชื่อนักศึกษาทั้งหมด (เฉพาะอาจารย์ — บังคับด้วย Firestore Rules) */
    async fetchStudents() {
      const snap = await db.collection('users').where('role', '==', 'student').get();
      return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
    }
  };
})();
