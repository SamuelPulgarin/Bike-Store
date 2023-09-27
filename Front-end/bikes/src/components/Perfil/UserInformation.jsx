import React, { useState } from 'react';
import image from "../../assets/img/website.png";
import "../../assets/css/UserInformation.css";
import { useEffect } from 'react';
import { History } from './History';
import { useNavigate } from 'react-router-dom';
import { ConfirmModal } from '../Modal/ConfirmModal';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from '../../redux/loginSlides';

export const UserInformation = () => {

    const [isOpenConfirm, setIsOpenConfirm] = useState(false);
    const [localEmail, setLocalEmail] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    const dataUser = JSON.parse(localStorage.getItem('authUser'));
    console.log(dataUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let user = {};


    const redirect = () => {

        navigate("/Uprofile");
    }


    const openModalConfirm = () => {
        setIsOpenConfirm(true);
    }

    const closeModalConnfrim = () => {
        setIsOpenConfirm(false);
    }

    useEffect(() => {
        const storedIsUserLoggedIn = localStorage.getItem('isUserLoggedIn');

        if (storedIsUserLoggedIn === 'true') {
            dispatch(signIn());
        } else {
            dispatch(signOut());
        }

        if (dataUser) {
            setLocalEmail(dataUser.email);

            fetch(`http://localhost:3060/getUserByEmail/${localEmail}`)
                .then((response) => {
                    if (response.ok) {

                        return response.json();
                    } else {

                        // if (response.status === 404){
                        //     alert('Usted no tiene ninguna compra en su historial')
                        // }
                        console.error('No se ha podido completar la accion, error del front-end')
                    }
                })
                .then((userData) => {
                    console.log(userData);
                    user = {
                        id: userData.id,
                        username: userData.username,
                        email: userData.email
                    };
                    //console.log(userData.username)

                    setEmail(userData.email);
                    setUsername(userData.username);

                    //Guardar datos en el localeStorage
                    localStorage.setItem('authUser', JSON.stringify(user));
                })
                .catch((err) => console.error('Error interno en el servidor', err))
        }

    }, [localEmail]);

    const handleLogout = () => {
        console.log('hola mundo')
        localStorage.removeItem('isUserLoggedIn');
        dispatch(signOut());
        localStorage.removeItem('authUser');
        closeModalConnfrim();
        navigate("/")
    }

    return (
        <>
            <div className='background-image-profile-container'>

                {dataUser ? (

                    <form className='profile-container'>

                        <div className="welcome-container">
                            <div className="profile-welcome-container">
                                <img src={image} alt="Perfil" />
                                <h2>¡Bienvenido {username}!</h2>
                            </div>
                        </div>

                        <div className="profile-options-container">
                            <div className="profile-information-container">

                                <div className="profile-small-information-container">
                                    <label htmlFor="username">Nombre de Usuario:</label>
                                    <input type="text" name='username' value={username || 'Cargando...'} readOnly />
                                </div>

                                <div className="profile-small-information-container">
                                    <label htmlFor="email">Correo Electronico:</label>
                                    <input type="text" name='email' value={email || 'Cargando...'} readOnly />
                                </div>
                            </div>
                            <div className="profile-edit-information-container">
                                <button id='profile-edit-information-button-container' onClick={redirect}>Editar Perfil</button>
                                <button id='profile-singout-button-container' onClick={openModalConfirm}>Cerrar Sesion</button>
                            </div>
                        </div>
                    </form>

                ) : (

                    <p>{'Cargando datos del usuario'}</p>
                )
            }


                    < div className="history-user-container">

                <div className="history-user-title-container">
                    <h1>Historial de Compras</h1>
                </div>

                <div className="history-user-list-container">
                    <History />
                </div>
            </div>
        </div >
            <ConfirmModal
                title="Cerrar Sesión"
                message="¿Estas seguro de cerrar sesión?"
                onCancel={closeModalConnfrim}
                onConfirm={handleLogout}
                openModal={isOpenConfirm}
            />
        </>
    )
}
