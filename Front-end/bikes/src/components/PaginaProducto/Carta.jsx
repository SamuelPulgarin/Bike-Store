import "../../assets/css/Carta.css";
import React, { useEffect, useState } from "react";
import { FetchProducts } from "../../hooks/useFetch";
import { Link } from "react-router-dom";


const Carta = ({ searchQuery }) => {
  const urlProduct = "/productos";
  const { fetchDataProduct, dataProduct } = FetchProducts(urlProduct);
  const [filteredBikes, setFilteredBikes] = useState([]);

  useEffect(() => {
    fetchDataProduct();
    if (dataProduct != 0) {
      console.log(urlProduct);
    }
  }, [!dataProduct]);

  // useEffect(() => {
  //   // Filtra las bicicletas según el término de búsqueda
  //   const filtered = dataProduct.filter((bike) => {
  //     const searchValue = searchQuery.toLowerCase();
  //     return (
  //       bike.nombre.toLowerCase().includes(searchValue) ||
  //       bike.marca.toLowerCase().includes(searchValue) ||
  //       bike.categoria.toLowerCase().includes(searchValue)
  //     );
  //   });
  //   setFilteredBikes(filtered);
  // }, [searchQuery, dataProduct]);


  /*ja */
  return (
    <>
      <div className="contenedor-cartas-producto">
        <h1>Bicicletas { }</h1>
        <div className="cartas-producto">
          {!dataProduct
            ? "Cargando..."
            : dataProduct.map((data) => {
              return (
                <div className="cartap" key={data.id} category={data.marca} type={data.talla} itemType={data.categoria} color={data.color}>
                  <Link to={`/Detalles/${data.id}`}>
                    <img src={data.ruta} alt="Bicicletas muy bonitas" />
                    <div className="cartap-info">
                      <h5>{data.nombre}</h5>
                    </div>
                    <p><b>Precio:</b> ${data.precio}</p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Carta;