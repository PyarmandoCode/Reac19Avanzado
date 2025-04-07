import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
//import Contador from './Componentes/Contador'
//import ContadorReducer from './Componentes/ContadorReducer'
import TodoApp from './Componentes/TodoApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
)
