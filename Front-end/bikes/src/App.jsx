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
//import { ShoppingCartProvider } from "./context/ShoppingCartContext";


/*ja */
function App() {
  const [loading, setLoading] = useState(true);

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
              <Route path="/Detalles" element={<Detalles />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Add" element={<Cproduct />} />
            </Routes>
          </Router>
  //     </ShoppingCartProvider>
      )}
    </>
  );

  //Metodo 2
  // const [domLoaded, setDomLoaded] = useState(false);

  // useEffect(() => {
  //     const timeout =setTimeout(() => {
  //         setDomLoaded(true);
  //     }, 2000);
  //     return () => clearTimeout(timeout);
  // },[])
}

export default App;
