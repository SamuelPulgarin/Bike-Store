import React from 'react'
import '../../assets/css/FormCompra.css'
import { useForm } from 'react-hook-form'
import useValidationInfoClient from '../../hooks/useValidationInfoClient'

const FormCompra = () => {

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

    function infoClientPago(dataClient) {
        console.log(dataClient)
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
                                        <option value="Targeta Identidad">TI</option>
                                        <option value="Cedula">CC</option>
                                    </select>
                                </div>
                                {
                                    errors.TipoDocumento && <span className='error'>{errors.TipoDocumento?.message}</span>
                                }
                            </div>

                            <div className="acomodar_inputs">
                                <input type="number" placeholder='Documento' {...register('Documento', DOCUMENTO)} />
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
                                <input type="number" placeholder='Telefono' {...register('Telefono', TELEFONO)} />
                                {
                                    errors.Telefono && <span className='error'>{errors.Telefono?.message}</span>
                                }
                            </div>

                        </div>

                        <div className="acomodar_inputs">
                            <input type="email" placeholder='E-mail' {...register('email', EMAIL)} />
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
        </>
    )
}

export default FormCompra