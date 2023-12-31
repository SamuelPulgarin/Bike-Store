import React from 'react'
import '../../assets/css/FormCompra.css'
import { useForm } from 'react-hook-form'
import useValidationInfoClient from '../../hooks/useValidationInfoClient'
import { useDispatch, useSelector } from 'react-redux'
import { setFactura } from '../../redux/dataFactureSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { MoldalCompraExitosa } from '../Modal/MoldalCompraExitosa'
import { ErrorModal } from '../Modal/ErrorModal'


const FormCompra = () => {

    const authUser = JSON.parse(localStorage.getItem('authUser'));
    let email = authUser.email;

    //const dataStorageForm = JSON.parse(localStorage.getItem('facturaData'));


    //Redux
    //const { username, email } = useSelector((state) => state.user);
    const cartItems = useSelector((state) => state.carrito.items);
    console.log(cartItems)
    

    //Funcion para realizar el proceso de compra
    const actualizarStock = async ({ productId, cantidad, precio }) => {

        try {
            const response = await fetch('http://localhost:3060/buy-complete', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productId,
                    cantidad,
                    precio,
                    email
                })
            });

            if (response.ok) {
                console.log("Actualizaciones exitosas");
                //openModalCorrect();
            } else {
                console.log("Error actualizar FRONT-END");
                //openErrorModal();
            }

        } catch (error) {

            console.error('Error en el servidor: ', error)
        }
    }

    //redux
    const dispatch = useDispatch();
    //const reduxDataClient = useSelector((state) => state.factura.dataFactura)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {
        NOMBRE,
        APELLIDO,
        TIPO_DOCUMENTO,
        DOCUMENTO,
        INDICATIVO,
        TELEFONO,
        EMAIL,
        DEPARTAMENTO,
        CIUDAD,
        DETALLES_DIRECCION,
        DIRECCION, } = useValidationInfoClient()
    
    const [formData, setFormData] = useState({});
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false);

    const openModalCompra = () => {
        setShowModal(true);
    }

    const closeModalCompra = () => {
        setShowModal(false);
    }

    const [isErrorModal, setIsErrorModal] = useState(false);

    const openModalError = () => {
        setIsErrorModal(true);
    }

    const closeModalError = () => {
        setIsErrorModal(false);
    }

    function infoClientPago(dataClient) {
        setFormData(dataClient);
    
        dispatch(setFactura({ dataClient }));

        localStorage.setItem('facturaData', JSON.stringify(dataClient));

    
        cartItems.forEach((item) => {
            const { id, cantidad, precio } = item.data;
            actualizarStock({ productId: id, cantidad, precio });
        });
    
        // Verificar si el formulario está lleno y cartItems tiene productos
        if (Object.keys(errors).length === 0 && cartItems.length > 0) {
            openModalCompra();
        }
        else {
            openModalError()
        }
    }


    
    return (
        <>
            <main className='all_container_form_info_buy'>
                <div className="container_form_info_buy">
                    <form method="POST" className='Form_info_buy' onSubmit={handleSubmit(infoClientPago)}>
                        <h2>Tus Datos:</h2>

                        <div className="name_lastname">
                            <div className='acomodar_inputs'>
                                <input type="text" name='Nombre' placeholder='Nombre' {...register('Nombre', NOMBRE)} />
                                {
                                    errors.Nombre && <span className='error'>{errors.Nombre?.message}</span>
                                }
                            </div>
                            <div className='acomodar_inputs'>
                                <input type="text" name='Apellidos' placeholder='Apellidos' {...register('Apellidos', APELLIDO)} />
                                {
                                    errors.Apellidos && <span className='error'>{errors.Nombre?.message}</span>
                                }
                            </div>
                        </div>

                        <div className="container_select-input">
                            <div className="acomodar_inputs">
                                <div className="container_select_buy">
                                    <select name="TipoDocumento" {...register('TipoDocumento', TIPO_DOCUMENTO)}>
                                        <option value="" selected disabled>Seleccione Documento</option>
                                        <option value="TI">TI</option>
                                        <option value="CC">CC</option>
                                    </select>
                                </div>
                                {
                                    errors.TipoDocumento && <span className='error'>{errors.TipoDocumento?.message}</span>
                                }
                            </div>

                            <div className="acomodar_inputs">
                                <input type="number" name='Documento' placeholder='Documento' {...register('Documento', DOCUMENTO)} />
                                {
                                    errors.Documento && <span className='error'>{errors.Documento?.message}</span>
                                }
                            </div>

                        </div>
                        <div className="container_select-input">

                            <div className="acomodar_inputs">
                                <div className="container_select_buy">
                                    <select name="Indicativo" {...register('Indicativo', INDICATIVO)}>
                                        <option value="" selected disabled>Seleccione Indicativo</option>
                                        <option value="+57">+57</option>
                                    </select>
                                </div>
                                {
                                    errors.Indicativo && <span className='error'>{errors.Indicativo?.message}</span>
                                }
                            </div>

                            <div className="acomodar_inputs">
                                <input type="number" name='Telefono' placeholder='Telefono' {...register('Telefono', TELEFONO)} />
                                {
                                    errors.Telefono && <span className='error'>{errors.Telefono?.message}</span>
                                }
                            </div>

                        </div>

                        <div className="acomodar_inputs">
                            <input type="email" name='email' placeholder='E-mail' {...register('email', EMAIL)} />
                            {
                                errors.email && <span className='error'>{errors.email?.message}</span>
                            }
                        </div>

                        <h2>Dirección de Envío:</h2>

                        <div className="container_departamento_ciudad">

                            <div className="acomodar_inputs">
                                <input type="text" name='Departamento' placeholder='Departamento' {...register('Departamento', DEPARTAMENTO)} />
                                {
                                    errors.Departamento && <span className='error'>{errors.Departamento?.message}</span>
                                }
                            </div>

                            <div className="acomodar_inputs">
                                <input type="text" name='Ciudad' placeholder='Ciudad' {...register('Ciudad', CIUDAD)} />
                                {
                                    errors.Ciudad && <span className='error'>{errors.Ciudad?.message}</span>
                                }
                            </div>

                        </div>

                        <div className="acomodar_inputs">
                            <input type="text" name='DetallesDireccion' placeholder='Barrio/Edificio/Apartamento' {...register('DetallesDireccion', DETALLES_DIRECCION)} />
                            {
                                errors.DetallesDireccion && <span className='error'>{errors.DetallesDireccion?.message}</span>
                            }
                        </div>

                        <div className="acomodar_inputs">
                            <input type="text" name='Direccion' placeholder='Dirección' {...register('Direccion', DIRECCION)} />
                            {
                                errors.Direccion && <span className='error'>{errors.Direccion?.message}</span>
                            }
                        </div>

                        <div className="container_btn_form_buy">
                            <button type='submit'>Pagar</button>
                        </div>
                    </form>
                </div>
            </main>
            <MoldalCompraExitosa
            isOpen={showModal}
            onClose={closeModalCompra}
            title="¡Compra Exitosa!"
            content="Gracias por su compra"
            />
            <ErrorModal
            openErrorModal={isErrorModal}
            CloseErrorModal={closeModalError}
            titleError="¡ Error !"
            messageError="El Carrito se encuentra vacio"
            />
        </>
    )
}

export default FormCompra