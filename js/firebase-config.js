// ⚠️ Firebase 설정 - 아래 값을 본인의 Firebase 프로젝트 값으로 교체하세요
// Firebase Console → 프로젝트 설정 → 웹 앱 추가에서 확인

const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 관리자 비밀번호 SHA-256 해시 (기본: jchs6425)
// 변경: https://emn178.github.io/online-tools/sha256.html 에서 새 해시 생성 후 교체
const ADMIN_PASSWORD_HASH = "a2e4c5d1b3f6e8a9c0d2e4f6a8b0c2d4e6f8a0b2c4d6e8f0a2b4c6d8e0f2a4b6"; // 실제 사용 전 교체 필요
const STUDENT_PIN_HASH    = "b3f5a7c9e1d3f5a7c9e1b3f5a7c9e1d3f5a7c9e1b3f5a7c9e1d3f5a7c9e1b3f5"; // 실제 사용 전 교체 필요

// SHA-256 해시 함수 (브라우저 내장 SubtleCrypto 사용)
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
