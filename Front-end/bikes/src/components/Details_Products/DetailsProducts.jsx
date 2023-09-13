import "../../assets/css/DetailsProduct.css";
import bike from "../../../uploads/1694392860882-BicicletaGiantRevoltAdvancedPro123.jpg";
import '../../assets/css/DetailsProduct.css'
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/carritoSlice";
import { useSelector } from 'react-redux';


export const DetailsProducts = () => {

    //redux
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.carrito.items);
    console.log(cartItems);

    /*
    const [cart, setCart] = useState(CartContext);
    const addToCart = ()=>{
        setCart((currItems) =>{
            const isItemFound = currItems.find((item) => item.id === id)

            if(isItemFound){
                return currItems.map((item) => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item;
                    }
                })
            } else {
                return [...currItems, {id, quantity: 1}]
            }
        })
    }
*/
    const handleAddToCart = ()=>{

        const foundItem = cartItems.find(item => parseInt(item.data.id, 10) === parseInt(data.id, 10));
        
        if(foundItem){
            alert('Este producto ya se encuentra agregado al carrito de compras');
        }else{
            dispatch(addToCart({ data }));
        }
    }

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
                            <button onClick={handleAddToCart}>Agregar Al Carrito</button>
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
