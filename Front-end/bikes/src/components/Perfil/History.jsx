import React, { useState } from 'react';
import "../../assets/css/History.css";
import { useEffect } from 'react';
import logo from "../../assets/img/Logo-circle.png"

export const History = () => {

    const [userHistory, setUserHistory] = useState([]);
    const [email, setEmail] = useState("");

    const dataUser = JSON.parse(localStorage.getItem('authUser'));


    useEffect(() => {

        if (dataUser) {
            setEmail(dataUser.email);

            fetch(`http://localhost:3060/history-user/${email}`)
                .then((response) => {
                    if (response.ok) {

                        return response.json();
                    }else{

                        // if (response.status === 404){
                        //     alert('Usted no tiene ninguna compra en su historial')
                        // }
                        console.error('No se ha podido completar la accion, error del front-end')
                    }
                })
                .then((historyData) => {
                    setUserHistory(historyData);
                    console.log(historyData);
                })
                .catch((err) => console.error('Error interno en el servidor', err))
        }


    }, [dataUser, email]);

    return (
        <>
            <div className="history-user">
                {
                    userHistory && userHistory.map((item) => {

                        return (
                            <>
                                <div className="history-cart-container" key={item.ruta}>

                                    <div className="history-cart-details">
                                        <div className="history-cart-card">
                                            <div className="history-cart-image">
                                                <img src={logo} alt="Logo Bike Store" id='history-img' />
                                            </div>
                                            <div className="history-cart-data-container">
                                                <h3>Bicicleta: {item.nombre}</h3>
                                                <h3>Precio: {item.precio}</h3>
                                                <h3>Cantidad: {item.cantidad}</h3>
                                                <h3>Costo: {item.total}</h3>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
