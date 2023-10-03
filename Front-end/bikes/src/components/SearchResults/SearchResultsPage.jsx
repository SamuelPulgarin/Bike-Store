import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "../../assets/css/SearchResultsPage.css";
import { ConfirmModal } from "../Modal/ConfirmModal";
import "../../assets/CSS/Footer.css";
import Logo from "../../assets/img/Logo-BikeStore.svg";
import Copy from "../../assets/img/IconoCopy.svg";
import logox from "../../assets/img/Logo x.png";
import Warning from "../../assets/img/Warning.png";
import "../../assets/css/ErrorSearchModal.css";


export const SearchResultsPage = ({ dataProduct }) => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
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
      setShowErrorModal(filtered.length === 0);
    }
  }, [searchQuery, dataProduct]);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isUserLoggedIn");
    dispatch(signOut());
    closeModal();
  };

  return (
    <>
      <Navbar />
      <div className="searchContainer">
        <h2>Resultados de búsqueda:</h2>
        <div className="results">
          {searchResults.length === 0 && showErrorModal ? (
            <div className="container_error_search_modal">
              <div className="content_ErrorSearchModal">
                <div className="container_errorSearchModal_img">
                  <img src={Warning} alt="Imagen de error" />
                </div>
                <p>No se encontraron resultados. Intentelo de nuevo</p>
                <Link to="/">
                <button className="btn_volver_modal_error_search">
                  Volver
                </button>
                </Link>
              </div>
            </div>
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
                    <b>Precio:</b> {data.precio}
                  </p>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="FooterContain">
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="Follow_us">
          <h2>SIGUENOS EN</h2>
          <a href="https://www.facebook.com/bikestoreSCR" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/bikestore96/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com/BikeStorescr">
            <img src={logox} alt="Logo x de Twitter" className="logox" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCGTK5deG0RjqqaLfu0vmUCg"
            target="_blank"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="Copy">
          <img src={Copy} alt="Imagen de Copyright" />
          <h5>2023 Bike Store. Todos los derechos reservados</h5>
        </div>
      </div>
      {/* <ConfirmModal
        title="Cerrar Sesión"
        message="¿Seguro que deseas cerrar sesión?"
        openModal={isModalOpen}
        onConfirm={handleLogout}
        onCancel={closeModal}
      /> */}
    </>
  );
};

export default SearchResultsPage;