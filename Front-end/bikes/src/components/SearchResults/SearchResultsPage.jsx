import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "../../assets/css/SearchResultsPage.css";
import carrito from "../../assets/img/agregar-carrito.png";
import peril from "../../assets/img/sesion.png";
import salir from "../../assets/img/logout.png";
import logo1 from "../../assets/img/Logo-circle.png";
import logo2 from "../../assets/img/Logo-short.png";
import toggler from "../../assets/img/menu.png";
import options from "../../assets/img/option.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from "../../redux/loginSlides";
import { ConfirmModal } from "../Modal/ConfirmModal";

export const SearchResultsPage = ({ dataProduct }) => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Verifica que dataProduct sea un arreglo antes de filtrar
    if (Array.isArray(dataProduct)) {
      const filtered = dataProduct.filter((bike) => {
        const searchValue = searchQuery.toLowerCase();
        return (
          bike.nombre.toLowerCase().includes(searchValue) ||
          bike.marca.toLowerCase().includes(searchValue) ||
          bike.categoria.toLowerCase().includes(searchValue)
        );
      });
      setSearchResults(filtered);
    }
  }, [searchQuery, dataProduct]);

  // const [isModalOpen, setIsModalOpen] = useState(false);

  //   const openModal = () => {
  //       setIsModalOpen(true);
  //   };

  //   const closeModal = () => {
  //       setIsModalOpen(false);
  //   };

  //   const handleLogout = () => {
  //       localStorage.removeItem('isUserLoggedIn');
  //       dispatch(signOut());
  //       closeModal();
  //   }

  //   //Aqui empieza el redux
  //   const session = useSelector((state) => state.login.session);
  //   const dispatch = useDispatch();

  //   React.useEffect(() => {
  //       const storedIsUserLoggedIn = localStorage.getItem('isUserLoggedIn');

  //       if (storedIsUserLoggedIn === 'true') {
  //           dispatch(signIn());
  //       } else {
  //           dispatch(signOut());
  //       }

  //   }, [])

  //   const navigate = useNavigate();

  //   const categorias = (e) => {
        
  //       navigate("/productos")
  //   }

  return (
    <>
     {/* <nav className="navbar">
                <div className="logos">
                    <Link to={"/"}><img src={logo1} alt="Aqui va nuestro precioso loguito" id="logo1" /></Link>
                    <Link to={"/"}><img src={logo2} alt="Aqui va nuestro precioso loguito" id="logo2" /></Link>
                </div>
                <input type="checkbox" id="toggler" />
                <label htmlFor="toggler"><i className="ri-menu-list"><img src={toggler} alt="toggler" /></i></label>
                <div className="menu">
                    <ul className="list">
                        <div className="desplegable">
                            <li><img src={options} alt="Hola soy una imagen" id="opcion" /></li>
                            <li><select id="categorias" onChange={categorias}>
                                <option disabled={true}>CATEGORIAS</option>
                                <option value={"1"}>Ruta</option>
                                <option value={"2"}>Montaña</option>
                                <option value={"3"}>hibridas</option>
                                <option value={"4"}>Bmx</option>
                            </select></li>
                        </div>
                        <li><Link to={"/Carrito"}><img src={carrito} alt="Hola soy una imagen" id="carrito" /></Link></li>
                        <li>{session ?
                            <Link onClick={openModal}>
                                <img src={session ? salir : peril} alt="Cerrar sesión" id="perfil" />
                            </Link>
                            :
                            <Link to={"/signUp"}>
                                <img src={session ? salir : peril} alt="Cerrar sesión" id="perfil" />
                            </Link>}
                        </li>
                    </ul>
                </div>
            </nav> */}
      <div className="searchContainer">
        <h2>Resultados de búsqueda:</h2>
        <div className="results">
          {searchResults.length === 0 ? (
            <h1>No se encontraron resultados para "{searchQuery}"</h1>
          ) : (
            searchResults.map((data) => (
              <div
                className="cartap"
                key={data.id}
                category={data.marca}
                type={data.talla}
                itemType={data.categoria}
                color={data.color}
              >
                <Link to={`/Detalles/${data.id}`}>
                  <img src={data.ruta} alt="Bicicletas muy bonitas" />
                  <div className="cartap-info">
                    <h5>{data.nombre}</h5>
                  </div>
                  <p>
                    <b>Precio:</b> ${data.precio}
                  </p>
                </Link>
              </div>
            ))
          )}
        </div>
        <Footer />
        {/* <ConfirmModal
                title="Cerrar Sesión"
                message="¿Seguro que deseas cerrar sesión?"
                openModal={isModalOpen}
                onConfirm={handleLogout}
                onCancel={closeModal}
            /> */}
      </div>
    </>
  );
};

export default SearchResultsPage;
