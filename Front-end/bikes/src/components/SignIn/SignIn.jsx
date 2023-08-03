import React from 'react'
import '../../assets/css/SignIn.css'

export const SignIn = () => {
    return (
        <>
            <main className='Fondo__signin'>
                <main className='SignIn'>
                    <div className="contenedor__SignIn">
                        <div className="caja__trasera__SignIn">
                            <div className="caja__trasera-register">
                                <h3>¿Aún no tienes una cuenta?</h3>
                                <p>Registrate para que puedas, iniciar sesión</p>
                                <button id='btn__iniciar-sesion'>Registrate</button>
                            </div>
                            {/*Formulario del SignIn*/}
                            {/*
                            <div className="contenedor__SignIn">
                                {/*SignIn*
                                
                                <form action="" className='Formulario__SigIn'>
                                    <h2>Iniciar Sesión</h2>

                                    <input type="email" placeholder='E-mail' />
                                    <input type="password" placeholder='Contraseña' />
                                    <div className="__btn">
                                        <button className='btn__i' >Iniciar Sesión</button>
                                    </div>
                                </form>
                            </div>*/}
                        </div>
                    </div>
                </main>
            </main>

        </>
    )
}
