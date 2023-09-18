import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "../../assets/css/SearchResultsPage.css";
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

  const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('isUserLoggedIn');
        dispatch(signOut());
        closeModal();
    }


  return (
    <>
      <Navbar />
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
        <ConfirmModal
                title="Cerrar Sesión"
                message="¿Seguro que deseas cerrar sesión?"
                openModal={isModalOpen}
                onConfirm={handleLogout}
                onCancel={closeModal}
            />
      </div>
    </>
  );
};

export default SearchResultsPage;
