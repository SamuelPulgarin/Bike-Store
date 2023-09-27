import React, { useState } from 'react';
import image from "../../assets/img/website.png";
import "../../assets/css/UserInformation.css";
import { useEffect } from 'react';
import { History } from './History';
import { useNavigate } from 'react-router-dom';

export const UserInformation = () => {

    const dataUser = JSON.parse(localStorage.getItem('authUser'));
    const navigate = useNavigate();

    const redirect = ()=>{
        
        navigate("/Uprofile");
    }

    return (
        <>
            <div className='background-image-profile-container'>


                <div className="profile-container">

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
                                <input type="text" name='username' value={dataUser.username} />
                            </div>

                            <div className="profile-small-information-container">
                                <label htmlFor="email">Correo Electronico:</label>
                                <input type="text" name='email' value={dataUser.email} />
                            </div>
                        </div>
                        <div className="profile-edit-information-container">
                            <button id='profile-edit-information-button-container' onClick={redirect}>Editar Perfil</button>
                            <button id='profile-singout-button-container'>Cerrar Sesion</button>
                        </div>
                    </div>
                </div>

                <div className="history-user-container">

                    <div className="history-user-title-container">
                        <h1>Historial de Compras</h1>
                    </div>

                    <div className="history-user-list-container">
                        <History/>
                   </div>
                </div>
            </div>
        </>
    )
}
