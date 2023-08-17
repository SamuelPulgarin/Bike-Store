import React, { useEffect } from 'react';
import { Home } from './pages/Home';
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrito from './pages/Carrito.jsx';
import Productos from './pages/Productos.jsx';
import { Inicio_Registro } from './pages/Inicio_Registro';



function App() {

  return (
    <>
      
      <Router>
        
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/perfil' element={<Inicio_Registro />} />
        </Routes>
      </Router>

    </>

  )
}

export default App
