import React from 'react'
import '../../assets/css/SignIn.css'

export const SignIn = () => {
    return (
        <>
            <main className='Fondo__signin'>
                <div className="contenedor__todo">
                    <div className="caja__trasera">
                        <div className="Container__formulario__login">
                            <form action="" className='Formulario__login'>

                                <h2>Iniciar Sesión</h2>

                                <input type="email" placeholder='E-mail' />
                                <input type="password" placeholder='Contraseña' />
                                <div className="container__btn">
                                    <button className='btn__I' >Iniciar Sesión</button>
                                </div>

                            </form>
                        </div>

                        <div className="caja__trasera-login">
                            <h3>¿Aún no tienes una cuenta?</h3>
                            <p>Registrate para que puedas, iniciar sesión</p>
                            <div className="container__btn">
                                <button>Registrate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}
