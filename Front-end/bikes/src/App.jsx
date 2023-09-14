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
import { ComfirBuy } from "./pages/ComfirBuy";
import { Uproduct } from "./pages/Uproduct";




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
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Carrito" element={<Carrito />} />
                        <Route path="/productos" element={<Productos />} />
                        <Route path="/signUp" element={<SignUp />} />
                        <Route path="/signIn" element={<SignIn />} />
                        <Route path="/Detalles/:id" element={<Detalles />} />
                        <Route path="/Admin" element={<Admin/>}/>
                        <Route path="/Update/:identificador" element={<Uproduct/>}/>
                        <Route path="/Add" element={<Cproduct/>} />
                        <Route path="/ComfirmBuy" element={<ComfirBuy/>} />
                    </Routes>
                </Router>
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
