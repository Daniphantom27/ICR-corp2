
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navegacion/Navbar';
import Inicio from './Components/Paginas/Inicio';
import Formulario from './Components/Paginas/Formulario';
import { useState } from 'react';

function App() {
  const [ingresoU, setIngresoU] = useState("");
  const [ingresoC, setIngresoC] = useState("");
  const [bd, setBd] = useState("");
  const [nav, setNav] = useState("");

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<Inicio/>}/>
          <Route path='/Formulario'  element={<Formulario
          ingresoU={ingresoU}
          setIngresoU={setIngresoU}
          ingresoC={ingresoC}
          setIngresoC={setIngresoC}
          bd={bd}
          setBd={setBd}
          nav={nav}
          setNav={setNav}
                    />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
