import React, { useState } from 'react';
import image from "../../assets/img/website.png";
import "../../assets/css/UserInformation.css";
import { useEffect } from 'react';

export const UpdateProfile = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const dataUser = JSON.parse(localStorage.getItem('authUser'));
    useEffect(() => {

        if (dataUser) {
            setUsername(dataUser.username);
            setEmail(dataUser.email);
        }

    }, [])


    return (
        <>
            <div className='background-image-profile-update-container'>

                <form method="post" className='profile-container'>

                    <div className="welcome-container">
                        <div className="profile-welcome-container">
                            <img src={image} alt="Perfil" />
                            <h2>¡Bienvenido {dataUser.username}!</h2>
                        </div>
                    </div>

                    <div className="profile-options-container">
                        <div className="profile-information-container">

                            <div className="profile-small-information-container">
                                <label htmlFor="username">Nombre de Usuario:</label>
                                <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>

                            <div className="profile-small-information-container">
                                <label htmlFor="email">Correo Electronico:</label>
                                <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="profile-edit-information-container">
                            <button id='profile-edit-information-button-container'>Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
