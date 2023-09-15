import React, { useEffect, useState } from 'react'
import "../../assets/css/AmountPrice.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AmountPrice = () => {

    const [cantidad, setCantidad] = useState(0);

    //redux
    const cartItems = useSelector((state) => state.carrito.items);

    const convertPriceToNumber = (priceString) => {
        // Remueve el signo de dólar, comas y puntos, y convierte la cadena en un número entero
        const numericPrice = parseInt(priceString.replace(/\$|\.|,/g, ''), 10);
        // Divide por 100 para eliminar los dos últimos ceros
        return numericPrice / 100;
      };

    // Calcula el precio total usando reduce y la función de conversión
    const totalPrice = cartItems.reduce((total, item) => {
        if (item.data) {
          return (total + convertPriceToNumber(item.data.precio)) * parseInt(item.data.cantidad);
        }
        return total;
      }, 0);  

    //Coste del envío
    const sent = 50000;

      useEffect(() =>{
         setCantidad(cartItems.length)
      }, [cartItems])


      console.log(cantidad)



    return (
        <>
            <div className="price-container">
                <h3 id='title-cart'>Mi Carrito</h3>
                <div className="sesion-price-container">

                    <div className="individual-sesion-price-container">
                        <p>Acumulado: </p>
                        <p>{totalPrice.toLocaleString()}</p>
                    </div>
                    <div className="individual-sesion-price-container">
                        <p>Envio: </p>
                        <p>{sent.toLocaleString()}</p>
                    </div>
                </div>
                <div className="line-price-container">
                    <hr />
                </div>
                <div className="sesion-price-container">
                    <div className="individual-sesion-price-container">
                        <p>Descuentos: </p>
                        <p>$0</p>
                    </div>
                    <div className="individual-sesion-price-container">
                        <p>Total Descuentos: </p>
                        <p>$0</p>
                    </div>
                </div>
                <div className="line-price-container">
                    <hr />
                </div>
                <h3>TOTAL: {(totalPrice + sent).toLocaleString()}</h3>
                <div className="button-price-container">
                    {
                        cantidad > 0 ? (
                            <Link to={"/ComfirmBuy"}><button><b>Ir a Pagar</b></button></Link>
                        ) 
                        : 
                        ( <button><b>Ir a Pagar</b></button>)
                    }
                </div>
                
            </div>

        </>
    )
}
export default AmountPrice
