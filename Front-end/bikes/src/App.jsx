import React from 'react';
import {Home} from './pages/Home';
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carrito from './pages/Carrito.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Productos from './pages/Productos.jsx';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';




function App() {

  return (
    <>
      {/*<Router>
        <Home/>
        <Routes>
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/perfil' element={<Signin_Signup/>} />
        </Routes>
      </Router>
      <SignUp></SignUp>*/}
      <SignIn></SignIn>
    </>

  )
}

export default App
