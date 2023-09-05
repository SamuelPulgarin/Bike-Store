import React from 'react'
import "../../assets/css/AmountPrice.css"

const AmountPrice = () => {
    return (
        <>
            <div className="price-container">
                <h3 id='title-cart'>Mi Carrito</h3>
                <div className="sesion-price-container">

                    <div className="individual-sesion-price-container">
                        <p>Subtotal: </p>
                        <p>$399.000</p>
                    </div>
                    <div className="individual-sesion-price-container">
                        <p>Envio: </p>
                        <p>$50.000</p>
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
                <h3>TOTAL: $449.000</h3>
                <div className="button-price-container">
                    <button><b>Ir a Pagar</b></button>
                </div>
                
            </div>

        </>
    )
}
export default AmountPrice
