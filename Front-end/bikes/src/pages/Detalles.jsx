import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { DetailsProducts } from '../components/Details_Products/DetailsProducts'

const Detalles = () => {
  return (
    <>
        <Navbar></Navbar>
        <DetailsProducts></DetailsProducts>
        <Footer></Footer>
    </>
  )
}

export default Detalles