import React from 'react'
import '../../assets/css/FormCompra.css'

const FormCompra = () => {
    return (
        <>
            <main className='all_container_form_info_buy'>
                <div className="container_form_info_buy">
                    <form method="POST" className='Form_info_buy'>
                        <h2>Tus Datos:</h2>
                        <div className="name_lastname">
                            <input type="text" placeholder='Nombre' />

                            <input type="text" placeholder='Apellidos' />
                        </div>
                        <div className="container_select-input">
                            <div className="container_select_buy">
                                <select name="Documento">
                                    <option value="" selected disabled>Seleccione Documento</option>
                                    <option value="Targeta Identidad">TI</option>
                                    <option value="Cedula">CC</option>
                                </select>
                            </div>

                            <input type="number" placeholder='Documento' />
                        </div>
                        <div className="container_select-input">
                            <div className="container_select_buy">
                                <select name="Indicadicativo">
                                    <option value="" selected disabled>Seleccione Indicativo</option>
                                    <option value="+57">+57</option>
                                </select>
                            </div>

                            <input type="number" placeholder='Telefono' />
                        </div>
                        <input type="email" placeholder='E-mail' />
                        <h2>Direccion de Envío:</h2>
                        <div className="container_departamento_ciudad">
                            <input type="text" name='Departamento' placeholder='Departamento'/>

                            <input type="text" name='Ciudad' placeholder='Ciudad' />
                        </div>
                        
                        <input type="text" name='DetallesDireccion' placeholder='Barrio/Edificio/Apartamento' />

                        <input type="text" name='Direccion' placeholder='Dirección' />
                    </form>
                </div>
            </main>
        </>
    )
}

export default FormCompra