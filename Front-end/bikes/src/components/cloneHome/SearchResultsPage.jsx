import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';



export const SearchResultsPage = ({ dataProduct }) => {

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Realiza la búsqueda utilizando el término de búsqueda (searchQuery)
    // Puedes utilizar tu conjunto de datos (dataProduct) para buscar
    const filtered = dataProduct.filter((bike) => {
      const searchTerm = searchQuery.toLowerCase();
      const bikeName = bike.nombre.toLowerCase();
      const bikeBrand = bike.marca.toLowerCase();
      const bikeType = bike.talla.toLowerCase();

      return (
        bikeName.includes(searchTerm) ||
        bikeBrand.includes(searchTerm) ||
        bikeType.includes(searchTerm)
      );
    });

    // Actualiza el estado searchResults con los resultados de la búsqueda
    setSearchResults(filtered);
  }, [searchQuery]);

  return (
    <>
    <div>
        <h2>Resultados de búsqueda:</h2>
        {searchResults.length === 0 ? (
          <p>No se encontraron resultados para "{searchQuery}"</p>
        ) : (
          searchResults.map((data) => (
            <div key={data.id}>
              {/* Muestra la información de cada bicicleta */}
              <p>Nombre: {data.nombre}</p>
              <p>Marca: {data.marca}</p>
              <p>Tipo: {data.talla}</p>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default SearchResultsPage;