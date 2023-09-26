import React, { useState} from "react";
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
import { Perfil } from "./pages/Perfil";
//import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ComfirBuy } from "./pages/ComfirBuy";
import { Uproduct } from "./pages/Uproduct";
import { FacturaPDF } from "./components/Compra/FacturaPDF";



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
              <Route path="/Update/:identificador" element={<Uproduct/>}/>
              <Route path="/ComfirmBuy" element={<ComfirBuy/>} />
              <Route path="/pdf" element={<FacturaPDF/>}/>
              <Route path="/profile" element={<Perfil/>} />
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