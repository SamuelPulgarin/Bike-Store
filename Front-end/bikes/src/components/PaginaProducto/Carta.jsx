import "../../assets/css/Carta.css";
import imgexample from "../../assets/img/bici-ejemplo.png";
import React, { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

const Carta = () => {
  const urlProduct = "/productos";
  const { fetchDataProduct, dataProduct } = useFetch(urlProduct);

  useEffect(() => {
    fetchDataProduct();
    if (dataProduct != 0) {
      console.log(dataProduct);
    }
  }, [!dataProduct]);

  return (
    <>
      {/* <ul>
        {!todos
          ? "Cargando..."
          : todos.map((todo, index) => {
              return <li key={index}>{todo.title}</li>;
            })}
      </ul> */ }

      <div className="contenedor-cartas-producto">
        <h1>Bicicletas {}:</h1>

        <div className="cartas-producto">
          <div className="cartap">
            <ul>
              {/*!useFetch
                ? "Cargando..."
                : useFetch.map((dataProduct, index) => {
                    return <li key={index}>{dataProduct.nombre}</li> 
                  })*/}
            </ul>
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
