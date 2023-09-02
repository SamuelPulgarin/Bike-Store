import React from 'react'
import { useState } from 'react'
import '../../assets/css/AddProduct.css'
import algo from '../../../uploads/1692995725372-Bicicleta Scott Addict RC 10 2023.jpg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


export const AddProduct = () => {

    const schema = yup.object().shape({
        id: yup.number().required('Este campo es requerido'),
        nombre: yup.string().required('Este campo es requerido'),
        imagen: yup.string()
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const [selectedImage, setSelectedImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            console.log(imageUrl);
        }
    }

    async function add(product) {
        console.log(product);
    }

    return (
        <>
            <main className='background_add_product'>
                <div className="container_add_product">
                    <div className="container_form_add">
                        <h1>Agregar Producto</h1>
                        <form method="POST" onSubmit={handleSubmit(add)} encType='multipart/form-data'>
                            <div className="container_info_product">

                                <input type="number" name="id" placeholder="Codigo" {...register('id')} />

                                <input type="text" name="nombre" placeholder="Nombre Producto" {...register('nombre')} />

                                <div className="container_add_select">

                                    <div className="select_add">
                                        <select name="categoria" id="categoria_add" {...register('categoria')}>
                                            <option value="" selected disabled>Seleccionar Categoria</option>
                                            <option value="Ruta">Ruta</option>
                                            <option value="Montaña">Montaña</option>
                                            <option value="BMX">BXM</option>
                                            <option value="Hibridas">Hibridas</option>
                                        </select>
                                    </div>

                                    <div className="select_add">
                                        <select name="marca" id="marca_add" {...register('marca')}>
                                            <option value="" selected disabled>Seleccionar Marca</option>
                                            <option value="Scott">Scott</option>
                                            <option value="GW">GW</option>
                                            <option value="Giant">Giant</option>
                                            <option value="Trek">Trek</option>
                                        </select>
                                    </div>

                                    <div className="select_add">
                                        <select name="color" id="add_colores" {...register('color')}>
                                            <option value="" selected disabled>Seleccionar Color</option>
                                            <option value="Negro">Negro</option>
                                            <option value="Rojo">Rojo</option>
                                            <option value="Azul">Azul</option>
                                            <option value="Blanco">Blanco</option>
                                        </select>
                                    </div>

                                    <div className="select_add">
                                        <select name="talla" id="add_talla" {...register('talla')}>
                                            <option value="" selected disabled>Seleccionar Talla</option>
                                            <option value="XS">XS</option>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="Xl">XL</option>
                                            <option value="XXL">XXL</option>
                                        </select>
                                    </div>
                                </div>

                                <label>Descripción:</label>
                                <textarea name="descripcion" cols="30" rows="10" {...register('descripcion')}></textarea>

                                <input type="number" name="stock" placeholder='Stock' {...register('stock')} />

                                <input type="number" name="precio" placeholder='Precio' {...register('precio')} />

                            </div>

                            <div className="img_add">
                                <div className="container_img_add">
                                    <img src={selectedImage ? selectedImage : algo} alt="bike" />
                                </div>

                                <div className="file-upload">
                                    <input name='imagen' type="file" id="file-input" accept='image/*' onChange={handleFileChange} {...register('imagen')} />
                                    <label htmlFor="file-input">Seleccionar archivo</label>
                                </div>


                                <div className="container_btns_add">
                                    <button className='btn_cancel_add'>Cancelar</button>
                                    <button type='submit' className='btn_add_product'>Agregar Producto</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}
