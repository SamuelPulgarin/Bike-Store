import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import '../assets/css/SignIn.css';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from '../redux/loginSlides';
import { Loader } from '../components/Loader/Loader';
import { Link } from 'react-router-dom';
import { addUser } from '../redux/userSlides';

/*ja */

const schema = yup.object().shape({
    email: yup.string().email('El E-mail es invalido').required('Es requerido el E-mail'),
    password: yup.string().min(8, 'Minimo 8 caracteres').required('Es necesaria la contraseña')
})

export const SignIn = () => {

    //Aqui empieza el redux
    const session = useSelector((state) => state.login.session);
    const { username, email } = useSelector((state) => state.user);
    //console.log(session)
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();

    useEffect(() =>{
        console.log(username, email)
        console.log(session)
    },[])


    async function SubmitLogin(DataLogin) {
        console.log(DataLogin)
        try {
            const response = await fetch('http://localhost:3060/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(DataLogin)
            });

            if (response.ok) {
                /*console.log('Querido usuario bienvenido');
                console.log(DataLogin);*/

                try{

                    await fetch(`http://localhost:3060/getUserByEmail/${DataLogin.email}`)
                        .then((reresponse) => {
                        return reresponse.json();
                    })
                    .then((productData) => {
                        const user = {
                            username: productData.username,
                            email: productData.email
                        };
                        //console.log(productData.username)
                        dispatch(addUser(user));

                    })

                } catch(error){
                    console.error('Algo ha ocurrido', error);
                }

                navigate("/")
                dispatch(signIn())
                // En la acción Redux (signIn)
                localStorage.setItem('isUserLoggedIn', 'true');


            }
            else {
                console.log('Error ¿Quien es ud? Vaya a registrase');
            }
        }
        catch (error) {
            console.error('Error al conectarse con el sevidor', error);
        }
    }

    return (
        <>
            <main className='Fondo__signin'>
                <div className="contenedor__todo">
                    <div className="caja__trasera">
                        <div className="Container__formulario__login">
                            <form className='Formulario__login' onSubmit={handleSubmit(SubmitLogin)} method='POST'>

                                <h2>Iniciar Sesión</h2>

                                <input name='email' type="email" placeholder='E-mail' {...register('email')} />
                                <span className='error1'>{errors.email?.message}</span>

                                <input name='password' type="password" placeholder='Contraseña' {...register('password')} />
                                <span className='error1'>{errors.password?.message}</span>

                                <div className="container__btn">
                                    <button className='btn__I' >Iniciar Sesión</button>
                                </div>

                            </form>
                        </div>
                        <div className="caja__trasera-login">
                            <h3>¿Aún no tienes una cuenta?</h3>
                            <p>Registrate para que puedas, iniciar sesión</p>

                            <div className="container__btn">
                                <Link to={"/signUp"}>
                                    <button type='submit'>Registrate</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
