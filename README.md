# 🌸 제주중앙고등학교 고교학점제 선택과목 신청 시스템

2027학년도 고교학점제 선택과목 모바일 신청 시스템 (Firebase 실시간 연동)

---

## 📋 페이지 구성

| 페이지 | 파일 | 대상 | URL |
|--------|------|------|-----|
| 학생 신청 | `index.html` | 학생 (QR코드) | `/` |
| 학부모 조회 | `parent.html` | 학부모 | `/parent.html` |
| 관리자 | `admin.html` | 교사/관리자 | `/admin.html` |
| QR코드 관리 | `qr.html` | 관리자 | `/qr.html` |
| 초기 설정 | `setup.html` | 최초 1회 | `/setup.html` |

---

## 🚀 시작하기 (배포 전 필수)

### 1단계 — Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com) 접속
2. **프로젝트 추가** → 프로젝트 이름 입력 (예: `jchs-subject-2026`)
3. **Realtime Database** → 데이터베이스 만들기 → **아시아(싱가포르)** 선택 → **테스트 모드**로 시작
4. **프로젝트 설정** → **웹 앱 추가** (`</>`) → 앱 닉네임 입력 → Firebase SDK 구성 복사

### 2단계 — firebase-config.js 수정

`js/firebase-config.js` 파일을 열어 `YOUR_*` 값을 모두 교체:

```js
const FIREBASE_CONFIG = {
  apiKey: "실제_API_KEY",
  authDomain: "프로젝트ID.firebaseapp.com",
  databaseURL: "https://프로젝트ID-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "프로젝트ID",
  ...
};
```

### 3단계 — Firebase 보안 규칙 설정

Firebase Console → Realtime Database → **규칙** 탭:

```json
{
  "rules": {
    "students":   { ".read": true,  ".write": false },
    "selections": { ".read": true,  ".write": true  },
    "config":     { ".read": true,  ".write": false }
  }
}
```

> ⚠️ 초기 업로드 시에만 `config`의 `.write`를 `true`로 임시 변경 후, 업로드 완료 후 다시 `false`로 변경하세요.

### 4단계 — 초기 데이터 업로드

`setup.html` 페이지에서 관리자 비밀번호와 학생 PIN을 설정하고 업로드 실행.

### 5단계 — GitHub Pages 배포

1. GitHub에서 새 저장소 생성 (예: `jchs-subject-selection`)
2. **Settings → Pages → Source: GitHub Actions** 선택
3. 이 코드를 push하면 자동 배포됨

```bash
git init
git add .
git commit -m "🌸 초기 배포"
git remote add origin https://github.com/사용자명/저장소명.git
git push -u origin main
```

배포 완료 후 URL: `https://사용자명.github.io/저장소명/`

---

## 🔒 보안 구조

| 항목 | 방식 |
|------|------|
| 학생 본인 확인 | 학번 + 생년월일 로컬 검증 |
| 수정 PIN | SHA-256 해시 → Firebase 비교 |
| 관리자 비밀번호 | SHA-256 해시 → Firebase 비교 |
| PIN 시도 제한 | 5회 초과 시 세션 잠금 |
| 로그인 시도 제한 | 5회 초과 시 차단 |
| 학생 데이터 노출 | 생년월일 미노출 (로컬 검증) |

---

## ⚡ 실시간 기능

- **학생 제출 시** → Firebase Realtime Database에 즉시 기록
- **관리자 대시보드** → `onValue()` 리스너로 자동 갱신
- **학부모 조회 페이지** → 자녀 데이터 실시간 감지

---

## 📅 신청 일정

- 1차 수강신청: **2026년 5월 18일(월) ~ 5월 20일(수) 23:55**

---

## 👥 학생 현황

- 1학년: 7~10반 각 25명 → 100명
- 2학년: 7반 25명, 8~10반 각 24명 → 97명
- **전체 197명**
