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
                <hr />
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
                <hr />
                <h3>TOTAL: $449.000</h3>
                <br />
                <button>Ir a Pagar</button>
            </div>

        </>
    )
}
export default AmountPrice
