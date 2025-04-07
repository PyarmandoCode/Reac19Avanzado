import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Teamdeveloper from './Componentes/Avanzado01/Teamdeveloper.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Teamdeveloper />
  </StrictMode>,
)
