import React, { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carrito from "./pages/Carrito.jsx";
import Productos from "./pages/Productos.jsx";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Loader } from "./components/Loader/Loader";
import Detalles from "./pages/Detalles";
import { Admin } from "./pages/Admin";
import { Cproduct } from "./pages/Cproduct";
import { SearchResultsPage } from './components/SearchResults/SearchResultsPage'
import { DataProduct } from "./components/PaginaProducto/Carta"

//import { ShoppingCartProvider } from "./context/ShoppingCartContext";


/*ja */
function App() {
  const [loading, setLoading] = useState(true);
  const dataProduct = DataProduct();

  window.onload = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (

  //      <ShoppingCartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/Carrito" element={<Carrito />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/Detalles/:id" element={<Detalles />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Add" element={<Cproduct />} />
              <Route exact path="/" component={Home} />
              <Route path="/search-results" element={<SearchResultsPage dataProduct={dataProduct} />} />
            </Routes>
          </Router>
  //     </ShoppingCartProvider>
      )}
    </>
  );
}

export default App;


//Metodo 2
  // const [domLoaded, setDomLoaded] = useState(false);

  // useEffect(() => {
  //     const timeout =setTimeout(() => {
  //         setDomLoaded(true);
  //     }, 2000);
  //     return () => clearTimeout(timeout);
  // },[])