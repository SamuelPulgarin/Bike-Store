import React, { useEffect } from 'react';
import { Home } from './pages/Home';
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrito from './pages/Carrito.jsx';
import Productos from './pages/Productos.jsx';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';




function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
        </Routes>
      </Router>
    </>

  )
}

export default App
