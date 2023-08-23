import React, { useState, useEffect } from 'react';
import * as yup from 'yup'; // Para validaciones del formulario
import { yupResolver } from '@hookform/resolvers/yup'; //permite integrar fácilmente el esquema de validación de yup con la librería react-hook-form
import '../assets/css/SignUp.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; //Maneja estados del formulario
import { SuccessModal } from '../components/Modal/SuccessModal';
import { Loader } from '../components/Loader/Loader';


const schema = yup.object().shape({
    username: yup.string().required('El nombre es requerido'),
    email: yup.string().email('El E-mail no es valido').required('El E-mail es requerido'),
    password: yup.string().min(8, '8 caracteres minimo').required('La contraseña es requerida'),
    confirmpassword: yup.string().min(8, '8 carcateres minimo').oneOf([yup.ref('password'), null], 'Las contraseñas deben conincidir').required('Confirmación de contraseña es requerida')
});


export const SignUp = () => {

    const [isModalOpen, setIsModalOpen] = useState(false); //UseState para abrir y cerrar el modal
    const [ModalContent, setModalContent] = useState(''); //UseState para manejar contenido del modal
    const [ModalTitle, setModalTitle] = useState('');

    const openModal = (title, content) => {
        setIsModalOpen(true);
        setModalTitle(title);
        setModalContent(content);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();



    async function onSubmit(DataRegister) {
        setIsLoader(true);
        console.log(DataRegister);

        try {
            const response = await fetch('http://localhost:3060/registrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(DataRegister)
            });

            if (response.ok) {
                /*console.log('Usuario resgistrado exitosamente');
                console.log(DataRegister);*/
                const title = '¡Registro Exitoso!'
                const content = 'Tu registro se ha completado correctamente.';
                openModal(title, content);

            }
            else {
                console.log('Error al registrar el usuario front');
            }
        }
        catch (error) {
            console.error('Error al conectarse con el sevidor', error);
        }
        finally {
            setIsLoader(false);
        }

    }

    return (
        <>
            {isLoader ? (<Loader />) : (
                <main className='Fondo__SignUp'>
                    <div className="container__All">
                        <div className="box__backgraound">
                            <div className="box__backG_SignUp">
                                <h3>¿Ya tienes una cuenta?</h3>
                                <p>Inicia sesión para entrar a la página</p>
                                <div className="container__button">
                                    <a href="/signIn">
                                        <button id='btn__iniciar-sesion'>Iniciar Sesión</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container__form_SignUp">
                                {/*Registro*/}
                                <form onSubmit={handleSubmit(onSubmit)} className='Formulario__register' method='POST'>
                                    <h2>Regístrarse</h2>

                                    <input type="text" name='username' placeholder='Nombre Completo' {...register('username')} />
                                    <span className='error'>{errors.username?.message}</span>

                                    <input type="email" name='email' placeholder='E-mail' {...register('email')} />
                                    <span className='error'>{errors.email?.message}</span>

                                    <input type="password" name='password' placeholder='Contraseña' {...register('password')} />
                                    <span className='error'>{errors.password?.message}</span>

                                    <input type="password" name='confirmpassword' placeholder='Confirmar Contraseña' {...register('confirmpassword')} />
                                    <span className='error'>{errors.confirmpassword?.message}</span>

                                    <div className="container__btn">
                                        <button className='btn__f' type='submit'>Regístrarse</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>)}
            <SuccessModal isOpen={isModalOpen} onClose={closeModal} title={ModalTitle} content={ModalContent} />
        </>
    )
}
