import React from 'react';
import {Home} from './pages/Home';
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carrito from './pages/Carrito.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Productos from './pages/Productos.jsx';
import { Signin_Signup } from './components/Signin-SignUp/Signin_Signup';


function App() {

  return (
    <>

      <Router>
        <Home/>
        <Routes>
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/perfil' element={<Signin_Signup/>} />
        </Routes>
      </Router>
      
    </>

  )
}

export default App
