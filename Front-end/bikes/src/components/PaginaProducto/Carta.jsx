import "../../assets/css/Carta.css";
import React, { useEffect} from "react";
import { FetchProducts } from "../../hooks/useFetch";


const Carta = () => {
  const urlProduct = "/productos";
  const { fetchDataProduct, dataProduct } = FetchProducts(urlProduct);

  useEffect(() => {
    fetchDataProduct();
    if (dataProduct != 0) {
      console.log(urlProduct);
    }
  }, [!dataProduct]);

  
/*ja */
  return (
    <>
      <div className="contenedor-cartas-producto">
        <h1>Bicicletas {}:</h1>
        <div className="cartas-producto">
          {!dataProduct
            ? "Cargando..."
            :dataProduct.map((data) => {
              return (
                <>
                  <div className="cartap" key={data.id} category={data.marca} type={data.talla} itemType={data.categoria} typeof={data.color}>
                    <img src={data.ruta} alt="" />
                    <div className="cartap-info">
                      <h5>{data.nombre}</h5>
                    </div>
                    <p><b>Precio:</b> ${data.precio}</p>
                  </div>
                </>
              );
            })}
        </div>
      </div> 
    </>
  );
};

export default Carta;
