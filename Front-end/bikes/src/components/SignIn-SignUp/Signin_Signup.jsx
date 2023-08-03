import React from 'react'
import '../../assets/css/SignIn_SignUp.css'

export const Signin_Signup = () => {
    return (
        <>
            <main className='Fondo__login__register'>
                <main className='Login__Register'>

                    <div className="contenedor__todo">
                        <div className="caja__trasera">
                            <div className="caja__trasera-login">
                                <h3>¿Ya tienes una cuenta?</h3>
                                <p>Inicia sesión para entrar a la página</p>
                                <button id='btn__iniciar-sesion'>Iniciar Sesión</button>
                            </div>
                            <div className="caja__trasera-register">
                                <h3>¿Aún no tienes una cuenta?</h3>
                                <p>Registrate para que puedas, iniciar sesión</p>
                                <button id='btn__iniciar-sesion'>Registrate</button>
                            </div>
                        </div>
                        {/*Formulario del login y registro*/}
                        <div className="contenedor__login-register">
                            {/*Login*/}
                            <form action="" className='Formulario__login'>

                                <h2>Iniciar Sesión</h2>

                                <input type="email" placeholder='E-mail' />
                                <input type="password" placeholder='Contraseña' />
                                <div className="container__btn">
                                    <button className='btn__f' >Iniciar Sesión</button>
                                </div>

                            </form>
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

                </main>

            </main>

        </>

    )
}
