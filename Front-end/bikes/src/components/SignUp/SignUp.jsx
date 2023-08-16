import React from 'react';
import { useForm } from 'react-hook-form'; //Maneja estados del formulario
import * as yup from 'yup'; // Para validaciones del formulario
import { yupResolver } from '@hookform/resolvers/yup'; //permite integrar fácilmente el esquema de validación de yup con la librería react-hook-form
import { useFetchPost } from '../../hooks/useFetchPost';
import '../../assets/css/SignUp.css';

const schema = yup.object().shape({
    username: yup.string().required('El nombre es requerido'),
    email: yup.string().email('El E-mail no es valido').required('El E-mail es requerido'),
    password: yup.string().min(8, '8 caracteres minimo').required('La contraseña es requerida'),
    confirmpassword: yup.string().min(8, '8 carcateres minimo').oneOf([yup.ref('password'), null], 'Las contraseñas deben conincidir').required('Confirmación de contraseña es requerida')
});


export const SignUp = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    async function onSubmit(DataRegister){
        try{
            const response = await fetch('http://localhost:3060/registerUser',{
                method: 'POST',
                headers: {
                    'Contend-Type': 'applications/json'
                },
                body: JSON.stringify(DataRegister)
            });

            if(response.ok){
                console.log('Usuario resgistrado exitosamente');
                console.log(DataRegister);
            }
            else{
                console.log('Error al registrar el usuario');
            }
        }
        catch(error){
            console.error('Error al conectarse con el sevidor', error);
        }
        
    }

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
                            <form onSubmit={handleSubmit(onSubmit)} className='Formulario__register'>
                                <h2>Regístrarse</h2>

                                <input type="text" placeholder='Nombre Completo' {...register('username')}/>
                                <span className='error'>{errors.username?.message}</span>

                                <input type="email" placeholder='E-mail' {...register('email')}/>
                                <span className='error'>{errors.email?.message}</span>

                                <input type="password" placeholder='Contraseña' {...register('password')}/>
                                <span className='error'>{errors.password?.message}</span>

                                <input type="password" placeholder='Confirmar Contraseña' {...register('confirmpassword')}/>
                                <span className='error'>{errors.confirmpassword?.message}</span>
                                <div className="container__btn">
                                    <button className='btn__f' type='submit'>Regístrarse</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
