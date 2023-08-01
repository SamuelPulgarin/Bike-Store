import React, { useEffect } from 'react';
import {Home} from './pages/Home';
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carrito from './pages/Carrito.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Productos from './pages/Productos.jsx';
import { Signin_Signup } from './components/Signin-SignUp/Signin_Signup';
import { useFetch } from './hooks/useFetch';


function App() {

  const {fetchData, data} = useFetch();
  

  useEffect(()=>{

    fetchData()

    if(data != 0){
      console.log(data)
    }
  },[!data]);



  return (
    <>
      <h1>{data[0].nombre}</h1>
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
