import React from 'react';
import { CardsCategory } from '../components/Category-Cards/CardsCategory';
import { Marcas } from '../components/Marcas/Marcas';
import Navbar from "../components/navbar/Navbar.jsx";

export const Home = () => {
  return (
    <>
        <Navbar/>
        <CardsCategory></CardsCategory>
        <Marcas></Marcas>
    </>
  )
}

