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

  const bikeId = 111;
  const bike = dataProduct.find(dataBike => dataProduct.id === bikeId);

  return (
    <>

      <div className="contenedor-cartas-producto">
        <h1>Bicicletas {}:</h1>
        <div className="cartas-producto">
          <div className="cartap">
              {!dataProduct
                ? "Cargando..."
                : dataProduct.map((bike, index) => {
                    return <p key={index}>{bike["111"].nombre}</p> 
                  })}
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
          <div className="cartap">
            <img src={imgexample} alt="" />
            <h3>MTB TREK SUPERCALIBER</h3>
            <p>Precio: 4'930.500</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carta;
