import "../../assets/css/Carta.css";
import React, { useEffect, useState } from "react";
import { FetchProducts } from "../../hooks/useFetch";
import { data } from "../../Api/data";

const Carta = () => {
  const urlProduct = "/productos";
  const { fetchDataProduct, dataProduct } = FetchProducts(urlProduct);

  useEffect(() => {
    fetchDataProduct();
    if (dataProduct != 0) {
      console.log(urlProduct);
    }
  }, [!dataProduct]);

  const [datosFiltrados, setDatosFiltrados] = useState([]);

  return (
    <>
      <div className="contenedor-cartas-producto">
        <h1>Bicicletas {}:</h1>
        <div className="cartas-producto">
          {dataProduct
            ?  dataProduct.map((data, index) => {
              return (
                <>
                  <div className="cartap">
                    <img src={data.ruta} alt="" />
                    <div className="cartap-info">
                      <h5 key={index}>{data.nombre}</h5>
                    </div>
                    <p><b>Precio:</b> ${data.precio}</p>
                  </div>
                </>
              );
            }): 
            <div className="container-info-selected">
              {datosFiltrados.map(item =>(
                <div className="cartap">
                <img src={item.ruta} alt="" />
                <div className="cartap-info">
                  <h5 key={item}>{item.nombre}</h5>
                </div>
                <p><b>Precio:</b> ${item.precio}</p>
              </div>
              ))}
            </div>
            }
        </div>
      </div>

      {}
    </>
  );
};

export default Carta;
