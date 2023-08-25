import React from 'react'
import Footer from '../components/Footer/Footer'
import { DetailsProducts } from '../components/Details_Products/DetailsProducts'
import Navbar from '../components/navbar/Navbar'

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