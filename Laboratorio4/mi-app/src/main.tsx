import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
//import ListasContador from './componentes/ListasContador'
import MyVirtualList from './componentes/MyVirtualList'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyVirtualList />
  </StrictMode>,
)
