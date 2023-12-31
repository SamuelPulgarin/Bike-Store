import React, { useState, useEffect, createContext } from "react";
import { CardsCategory } from "../components/Category-Cards/CardsCategory";
import { Marcas } from "../components/Marcas/Marcas";
import Navbar from "../components/navbar/Navbar.jsx";
import Banner_search from "../components/BannerAndSearch/Banner_search";
import Footer from "../components/Footer/Footer";
import { Loader } from "../components/Loader/Loader";




export const Home = () => {

    return (
        <>
            <Navbar />
            <Banner_search />
            <CardsCategory />
            <Marcas />
            <Footer />
        </>
    )
}