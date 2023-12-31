import "../../assets/css/Carta.css";
import React, { useEffect } from "react";
import { FetchProducts } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Carta = ({ searchQuery }) => {
  const urlProduct = "/productos";
  const { fetchDataProduct, dataProduct } = FetchProducts(urlProduct);

  useEffect(() => {
    fetchDataProduct();
    if (dataProduct != 0) {
      console.log(urlProduct);
    }
  }, [!dataProduct]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="contenedor-cartas-producto">
        <h1>Bicicletas {}</h1>
        <div className="cartas-producto">
          {!dataProduct
            ? "Cargando..."
            : dataProduct.map((data) => {
              return (
                <div className="cartap" key={data.id} category={data.marca} type={data.talla} itemType={data.categoria} color={data.color}>
                  <Link to={`/Detalles/${data.id}`} onClick={scrollToTop}>
                    <img src={data.ruta} alt="Bicicletas muy bonitas" />
                    <div className="cartap-info">
                      <h5>{data.nombre}</h5>
                    </div>
                    <p><b>Precio:</b> {data.precio}</p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export const DataProduct = () => {
  const urlProduct = "/productos";
  const { fetchDataProduct, dataProduct } = FetchProducts(urlProduct);

  useEffect(() => {
    fetchDataProduct();
  }, []);

  return dataProduct;
};

export default Carta;
