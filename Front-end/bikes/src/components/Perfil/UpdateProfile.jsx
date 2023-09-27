import React, { useState } from 'react';
import image from "../../assets/img/website.png";
import "../../assets/css/UserInformation.css";
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const UpdateProfile = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const dataUser = JSON.parse(localStorage.getItem('authUser'));
    //console.log(dataUser)

    const navigate = useNavigate();

    useEffect(() => {

        if (dataUser) {
            setUsername(dataUser.username);
            setEmail(dataUser.email);
        }

    }, [])

    const update = async(e) =>{

        e.preventDefault();

        const formData = new FormData();

        formData.append("username", username);
        formData.append("email", email);

        try {
            const response = await fetch(`http://localhost:3060/update-user/${dataUser.email}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email

                })
            })
            if (response.ok) {
                console.log("Usuario actualizado correctamente");
                navigate("/profile")
            }
            else {
                console.log("ERROR, usuario no actualizado");

            }
        }
        catch (error) {
            console.error("Error del servidor", error)
        }
    }

    return (
        <>
            <div className='background-image-profile-update-container'>

                <form method="PUT" onSubmit={update} className='profile-container'>

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
                            <button id='profile-edit-information-button-container' type="submit">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
