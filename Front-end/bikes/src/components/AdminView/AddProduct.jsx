import React from 'react'
import { useState } from 'react'
import '../../assets/css/AddProduct.css'
import defaultImage from '../../../uploads/1692995725372-Bicicleta Scott Addict RC 10 2023.jpg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'



export const AddProduct = () => {

    const schema = yup.object().shape({
        id: yup.number()
        .integer('El codigo debe ser un numero entero')
        .positive('El codigo debe ser un numero positivo')
        .required('Este campo es requerido'),
        nombre: yup.string().required('Este campo es requerido'),
        imagen: yup.mixed()
        .test('file', 'Debe seleccionar una imagen', (value) => {
          return value && value.length > 0;
        })
        .test('fileType', 'Formato de archivo no válido', (value) => {
          if (!value || value.length === 0) return true;
          return (
            value && ['image/jpeg', 'image/png'].includes(value[0].type)
          );
        }),
        categoria: yup.string().required('Seleccione una Categoria'),
        marca: yup.string().required('Seleccione una Marca'),
        color: yup.string().required('Seleccione un Color'),
        talla: yup.string().required('Seleccione una Talla'),
        descripcion: yup.string().required('Es necesaria una Descripción'),
        stock: yup.number()
        .integer('El stock debe ser un numero entero')
        .positive('El stock debe ser un numero positivo')
        .required('Este campo es requerido'),
        precio: yup.number()
        .positive('El precio debe ser un numero positivo')
        .required('Este campo es requerido')
    })

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const imageFile = watch('imagen'); // Nombre del campo del input type="file"
    const [imageUrl, setImageUrl] = useState(defaultImage);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageUrl(e.target.result);
                setValue('imagen', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    function add(product) {
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
                                <span className='error_add'>{errors.id?.message}</span>

                                <input type="text" name="nombre" placeholder="Nombre Producto" {...register('nombre')} />
                                <span className='error_add'>{errors.nombre?.message}</span>

                                <div className="container_add_select">

                                    <div className="select_add">
                                        <select name="categoria" id="categoria_add" {...register('categoria')}>
                                            <option value="" selected disabled>Seleccionar Categoria</option>
                                            <option value="Ruta">Ruta</option>
                                            <option value="Montaña">Montaña</option>
                                            <option value="BMX">BXM</option>
                                            <option value="Hibridas">Hibridas</option>
                                        </select>
                                        <span className='error_add'>{errors.categoria?.message}</span>
                                    </div>

                                    <div className="select_add">
                                        <select name="marca" id="marca_add" {...register('marca')}>
                                            <option value="" selected disabled>Seleccionar Marca</option>
                                            <option value="Scott">Scott</option>
                                            <option value="GW">GW</option>
                                            <option value="Giant">Giant</option>
                                            <option value="Trek">Trek</option>
                                        </select>
                                        <span className='error_add'>{errors.marca?.message}</span>
                                    </div>

                                    <div className="select_add">
                                        <select name="color" id="add_colores" {...register('color')}>
                                            <option value="" selected disabled>Seleccionar Color</option>
                                            <option value="Negro">Negro</option>
                                            <option value="Rojo">Rojo</option>
                                            <option value="Azul">Azul</option>
                                            <option value="Blanco">Blanco</option>
                                        </select>
                                        <span className='error_add'>{errors.color?.message}</span>
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
                                        <span className='error_add'>{errors.talla?.message}</span>
                                    </div>
                                </div>

                                <label>Descripción:</label>
                                <textarea name="descripcion" cols="30" rows="10" {...register('descripcion')}></textarea>
                                <span className='error_add'>{errors.descripcion?.message}</span>

                                <input type="number" name="stock" placeholder='Stock' {...register('stock')} />
                                <span className='error_add'>{errors.stock?.message}</span>

                                <input type="number" name="precio" placeholder='Precio' {...register('precio')}/>
                                <span className='error_add'>{errors.precio?.message}</span>

                            </div>

                            <div className="img_add">
                                <div className="container_img_add">
                                    {imageUrl && <img src={imageUrl} alt="Vista previa de la imagen" />}
                                </div>
                                <div className="file-upload">
                                    <input
                                        name='imagen'
                                        type="file"
                                        id="imageFile"
                                        accept='image/*'
                                        {...register('imagen')}
                                        onChange={handleImageChange} />
                                    <label htmlFor="file-input">Seleccionar archivo</label>
                                    <span className='error_add'>{errors.imagen?.message}</span>
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
