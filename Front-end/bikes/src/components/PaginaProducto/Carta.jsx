import "../../assets/css/Carta.css";
import imgexample from "../../assets/img/bici-ejemplo.png";
import React, { useEffect } from "react";
import { useFetchProducts } from "../../hooks/useFetch";

const Carta = () => {
  const urlProduct = "/productos";
  const { fetchDataProduct, dataProduct } = useFetchProducts(urlProduct);

  useEffect(() => {
    fetchDataProduct();
    if (dataProduct != 0) {
      console.log(urlProduct);
    }
  }, [!dataProduct]);

  return (
    <>
      <div className="contenedor-cartas-producto">
        <h1>Bicicletas {}:</h1>
        <div className="cartas-producto">
          {!dataProduct
            ? "Cargando..."
            : dataProduct.map((data, index) => {
                return (
                  <div className="cartap">
                    <img src={data.ruta} alt="" />
                    <h3 key={index}>{data.nombre}</h3>
                    <p>${data.precio}</p>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default Carta;
