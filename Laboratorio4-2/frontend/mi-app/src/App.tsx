import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import './index.css';

const App = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/perfil" element={<Perfil/>}></Route>
        <Route path="*" element={<h1>404- Pagina no encontrada</h1>}></Route>
      </Routes>
    </Router>
  )
}

export default App;