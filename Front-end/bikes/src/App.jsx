import React, { useEffect } from 'react';
import { Home } from './pages/Home';
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrito from './pages/Carrito.jsx';
import Productos from './pages/Productos.jsx';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { SuccessModal } from './components/Modal/SuccessModal';




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
      <SuccessModal></SuccessModal>
    </>

  )
}

export default App
