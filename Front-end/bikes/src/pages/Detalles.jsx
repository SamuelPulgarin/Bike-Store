import React from 'react'
import Footer from '../components/Footer/Footer'
import { DetailsProducts } from '../components/Details_Products/DetailsProducts'
import Navbar from '../components/navbar/Navbar'
import { Carrusel } from '../components/Details_Products/Carrusel'

const Detalles = () => {
  return (
    <>
        <Navbar></Navbar>
        <DetailsProducts></DetailsProducts>
        <Carrusel></Carrusel>
        <Footer></Footer>
    </>
  )
}

export default Detalles