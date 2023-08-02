import React, { useEffect } from 'react';
import {Home} from './pages/Home';
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carrito from './pages/Carrito.jsx';
import Productos from './pages/Productos.jsx';
import { Inicio_Registro } from './pages/Inicio_Registro';
import { useFetch } from './hooks/useFetch';



function App() {

  const url = '/productos';
  const {fetchData, data} = useFetch(url);
  

  useEffect(()=>{

    fetchData()

    if(data != 0){
      console.log(data)
      console.log(Array.isArray(data))
    }
  },[!data]);



  return (
    <>
      {/*data.map((items) =>{
        return (
        <h1 key={items.id}>{items.nombre}</h1>
        )
      })*/}
        
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/perfil' element={<Inicio_Registro/>} />
        </Routes>
      </Router>
    </>

  )
}

export default App
