import "../../assets/css/DetailsProduct.css";
import bike from "../../../uploads/1692995410871-Bicicleta Ruta Contessa Addict 35 2022.jpg";
import '../../assets/css/DetailsProduct.css'
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";


export const DetailsProducts = () => {

    const { id } = useParams();
    const [data, setData] = useState([]); // dentro del estado hay [] porque tiene que ser en un array porque es un objeto
  
    useEffect(() => {
      if (id) {
        fetch(`http://localhost:3060/get-products/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
          })
          .then((productData) => {
            setData(productData); // Asigna los datos a la variable data
          })
          .catch((error) => {
            console.error("Error al cargar los detalles del producto:", error);
          });
      }
    }, [id]);

    return (
        <>
            <div className="container_all_details">

                <div className="container__details">
                    <div className="cotiner_img_btn">
                        <div className="contaier_img_details">
                            <img src={bike} className="img__details" alt="bicicleta" />
                        </div>
                        <div className="container_btn_details">
                            <button>Agregar Al Carrito</button>
                        </div>
                    </div>
                    <div className="container_info_details">
                        <h1 className='title_details'>{data.nombre}</h1>
                        <h2 className='precio'><span>Precio: $</span>{data.precio}</h2>
                        <h2 className='title-description'>Descripción:</h2>
                        <div className="container_description">
                            <p>{data.descripcion}</p>
                        </div>
                        <div className="container_select_details">
                            <div className="select_color">
                                <select name="colores" id="colores">
                                    {data.color && <option value={data.color}>{data.color}</option>}
                                </select>
                            </div>
                            <div className="select_talla">
                                <select name="talla" id="talla">
                                    {data.talla && <option value={data.talla}>{data.talla}</option>}     
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
