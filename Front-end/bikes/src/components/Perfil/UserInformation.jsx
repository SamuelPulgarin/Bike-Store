import React, { useState } from 'react';
import image from "../../assets/img/website.png";
import "../../assets/css/UserInformation.css";
import { useEffect } from 'react';

export const UserInformation = () => {

    let Anastasiolanomagno = 'Anastasiolanomagno';
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() =>{

        fetch()

    }, [])


    return (
        <>
            <div className="profile-container">

                <div className="profile-welcome-container">
                    <img src={image} alt="Perfil" />
                    <h2>¡Bienvenido {Anastasiolanomagno}!</h2>
                </div>

                <div className="profile-information-container">

                    <div className="profile-small-information-container">
                        <label htmlFor="username">Nombre de Usuario:</label>
                        <input type="text" name='username' />
                    </div>

                    <div className="profile-small-information-container">
                        <label htmlFor="email">Correo Electronico:</label>
                        <input type="text" name='email' />
                    </div>
                </div>
            </div>

        </>
    )
}
