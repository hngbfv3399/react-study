# 📘 React Practice

이 저장소는 **리역트 강의 실습용 프로젝트 모음**입니다.  
각 폴더는 주제별 실습으로 구성되어 있으며,  
`try-it`(과제용) 과 `final-code`(실습 참고용) 폴더가 함께 제공됩니다.

---

## 🧑‍💻 폴더 구성 안내

- `try-it`: 직접 **과제를 수행하는 코드**입니다.  
- `final-code`: 강의와 함께 보며 **개념을 익히는 예제 코드**입니다.

---

## 🗝 실습을 시작하는 방법

💡 `src/main.jsx`에서 어느 App 컴포넌트를 사용할지 선택할 수 있습니다.

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// [학생용] 실습용 App 컴포넌트
import App from './try-it/App.jsx'

// [강사용] 예제 코드 App 컴포넌트
// import App from './final-code/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

> ✅ 실습할 때는 `try-it`을, 강의 시청 중에는 `final-code`를 사용하세요.  
> 📌 `//` 주석을 통해 필요한 App을 활용/비활용 할 수 있습니다.

---

## 📦 설치 및 실행 방법

### 1. 저장소 클론

```bash
git clone https://github.com/hngbfv3399/react-study.git
cd react-study
```

### 2. 실습 프로젝트로 이동

```bash
cd [프로젝트명]  # 예: components-study
npm install
npm run dev
```

> 각 프로젝트 `src/` 폴더 안에 `try-it`, `final-code`으로 구성이 되어있습니다..

---

## 📁 폴더 구성 예시

```bash
react-study/
├── 01-components-study/
│   └── src/
│       ├── try-it/
│       │   └── App.jsx
│       └── final-code/
│           └── App.jsx
├── 02-useState/
│   └── src/
│       ├── try-it/
│       │   └── App.jsx
│       └── final-code/
│           └── App.jsx
...
```

---

## 💡 참고 사항

- 각 실습 프로젝트에는 규칙적인 `README.md`가 포함되어 있을 수 있습니다.
- `npm run dev`는 Vite 기준 실행 명령어입니다.
- 실습은 순서대로 해도 좋고, 관심 있는 주제부터 시작해도 가능해요!

---

> 만든 사람: 김지호 (a.k.a 취미로개발)  
> GitHub: [@hngbfv3399](https://github.com/hngbfv3399)

