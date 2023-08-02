import React, { useEffect } from 'react';
import { Home } from './pages/Home';
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrito from './pages/Carrito.jsx';
import Productos from './pages/Productos.jsx';
import { Inicio_Registro } from './pages/Inicio_Registro';
import { useFetch } from './hooks/useFetch';



function App() {

  const urlProduct = '/productos';
  const urlImage = '/imagenes';
  const { fetchDataProduct, dataProduct, fetchDataImage, dataImage } = useFetch(urlProduct, urlImage);


  useEffect(() => {

    fetchDataProduct()
    if (dataProduct != 0) {
      console.log(dataProduct)
    }

    fetchDataImage()
    if (dataImage != 1) {
      console.log(dataImage)
    }

  }, [!dataProduct]);



  return (
    <>
      {dataProduct.map((items) => {
        return (
          <h1 key={items.id}>{items.nombre}</h1>
        )
      })
      }
      {
        dataImage.length > 0 && <img src={"./" + dataImage[1].ruta}/>
      }
      

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
