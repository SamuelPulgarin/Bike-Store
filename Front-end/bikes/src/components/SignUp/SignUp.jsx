import React from 'react'
import '../../assets/css/SignUp.css'

export const SignUp = () => {
    return (
        <>
            <main className='Fondo__SignUp'>
                <div className="container__All">
                    <div className="box__backgraound">
                        <div className="box__backG_SignUp">
                            <h3>¿Ya tienes una cuenta?</h3>
                            <p>Inicia sesión para entrar a la página</p>
                            <div className="container__button">
                                <button id='btn__iniciar-sesion'>Iniciar Sesión</button>
                            </div>
                        </div>

                        <div className="container__form_SignUp">
                            {/*Registro*/}
                            <form action="" className='Formulario__register'>
                                <h2>Regístrarse</h2>

                                <input type="text" placeholder='Nombre Completo' />
                                <input type="email" placeholder='E-mail' />
                                <input type="password" placeholder='Contraseña' />
                                <input type="password" placeholder='Confirmar Contraseña' />
                                <div className="container__btn">
                                    <button className='btn__f'>Regístrarse</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
