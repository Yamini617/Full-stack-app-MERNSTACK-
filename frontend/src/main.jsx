import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginContext from './contexts/LoginContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginContext>
      <App />
    </LoginContext>

  
  </StrictMode>,
)
