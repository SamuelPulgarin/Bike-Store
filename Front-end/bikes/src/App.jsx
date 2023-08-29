import React, { useEffect } from "react";
import { Home } from "./pages/Home";
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carrito from "./pages/Carrito.jsx";
import Productos from "./pages/Productos.jsx";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { SuccessModal } from "./components/Modal/SuccessModal";
import { Loader } from "./components/Loader/Loader";
import { useState } from "react";

/*ja */
function App() {
  const [isLoader, setIsLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 1000);
  }, [])


  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Carrito" element={<Carrito />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
