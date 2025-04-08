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