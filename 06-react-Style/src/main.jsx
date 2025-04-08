import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//학생용 APP 컴포넌트
// import App from './try-it/App.jsx' 
// 선생용 APP 컴포넌트
import App from './final-code/App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
