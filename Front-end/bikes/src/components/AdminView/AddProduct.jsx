import React from 'react'
import { useState } from 'react'
import '../../assets/css/AddProduct.css'
import defaultImage from '../../assets/img/defaul.jpg'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import useValidationAddProduct from '../../hooks/useValidationAddProduct'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'



export const AddProduct = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { ID, NOMBRE, CATEGORIA, MARCA, COLOR, TALLA, DESCRIPCION, STOCK, PRECIO, IMAGEN } = useValidationAddProduct();
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3060/get-products/${id}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then((productData) => {
                    setData(productData); // Asigna los datos a la variable data
                    // Llena los campos del formulario con los datos del producto
                    setValue('id', productData.id);
                    setValue('nombre', productData.nombre);
                    setValue('categoria', productData.categoria);
                    setValue('marca', productData.marca);
                    setValue('color', productData.color);
                    setValue('talla', productData.talla);
                    setValue('descripcion', productData.descripcion);
                    setValue('stock', productData.stock);
                    setValue('precio', productData.precio);
                })
                .catch((error) => {
                    console.error("Error al cargar los detalles del producto:", error);
                });
        }
    }, [id, setValue]);


    // const imageFile = watch('imagen'); // Nombre del campo del input type="file"
    // const [imageUrl, setImageUrl] = useState(defaultImage);

    // const fileInputRef = useRef(null);

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0]; // Obtiene el archivo seleccionado

    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             setImageUrl(e.target.result); // Actualiza vista previa de la imagen
    //         };
    //         reader.readAsDataURL(file);

    //         fileInputRef.current.value = ''; // Se limpia
    //         fileInputRef.current.files = e.target.files; // inserta el valor en el input
    //     }
    // };

    // Funcion para agregar producto
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setValue('imagen', selectedImage);
    }

    const add = async (data) => {
        try {
            const formData = new FormData();
            formData.append('id', data.id);
            formData.append('nombre', data.nombre);
            formData.append('categoria', data.categoria);
            formData.append('marca', data.marca);
            formData.append('color', data.color);
            formData.append('talla', data.talla);
            formData.append('descripcion', data.descripcion);
            formData.append('stock', data.stock);
            formData.append('precio', data.precio);
            formData.append('imagen', data.imagen);

            const response = await fetch('http://localhost:3060/create-product', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Producto Registrado exitosamente');
            } else {
                console.log('Error al agregar producto');
            }
        } catch (error) {
            console.error('Error del servidor', error);
        }
    };


    return (
        <>
            <main className='background_add_product'>
                <div className="container_add_product">
                    <div className="container_form_add">
                        <h1>Agregar Producto</h1>
                        <form method="POST" onSubmit={handleSubmit(add)} enctype="multipart/form-data">
                            <div className="container_info_product">

                                <input type="number" name="id" placeholder="Codigo" {...register('id', ID)} />
                                {
                                    errors.id && <span className='error_add'>{errors.id?.message}</span>
                                }

                                <input type="text" name="nombre" placeholder="Nombre Producto" {...register('nombre', NOMBRE)} />
                                {
                                    errors.nombre && <span className='error_add'>{errors.nombre?.message}</span>
                                }

                                <div className="container_add_select">
                                    <div className="container__select">
                                        <div className="select_add">
                                            <select name="categoria" id="categoria_add" {...register('categoria', CATEGORIA)}>
                                                <option value="" selected disabled>Seleccionar Categoria</option>
                                                <option value="Ruta">Ruta</option>
                                                <option value="Montaña">Montaña</option>
                                                <option value="BMX">BXM</option>
                                                <option value="Hibridas">Hibridas</option>
                                            </select>
                                        </div>
                                        {
                                            errors.categoria && <span className='error_add'>{errors.categoria?.message}</span>
                                        }
                                    </div>

                                    <div className="container__select">
                                        <div className="select_add">
                                            <select name="marca" id="marca_add" {...register('marca', MARCA)}>
                                                <option value="" selected disabled>Seleccionar Marca</option>
                                                <option value="Scott">Scott</option>
                                                <option value="GW">GW</option>
                                                <option value="Giant">Giant</option>
                                                <option value="Trek">Trek</option>
                                            </select>
                                        </div>
                                        {
                                            errors.marca && <span className='error_add'>{errors.marca?.message}</span>
                                        }
                                    </div>

                                    <div className="container__select">
                                        <div className="select_add">
                                            <select name="color" id="add_colores" {...register('color', COLOR)}>
                                                <option value="" selected disabled>Seleccionar Color</option>
                                                <option value="Negro">Negro</option>
                                                <option value="Rojo">Rojo</option>
                                                <option value="Azul">Azul</option>
                                                <option value="Blanco">Blanco</option>
                                            </select>
                                        </div>
                                        {
                                            errors.color && <span className='error_add'>{errors.color?.message}</span>
                                        }
                                    </div>

                                    <div className="container__select">
                                        <div className="select_add">
                                            <select name="talla" id="add_talla" {...register('talla', TALLA)}>
                                                <option value="" selected disabled>Seleccionar Talla</option>
                                                <option value="XS">XS</option>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="Xl">XL</option>
                                                <option value="XXL">XXL</option>
                                            </select>
                                        </div>
                                        {
                                            errors.talla && <span className='error_add'>{errors.talla?.message}</span>
                                        }
                                    </div>

                                </div>

                                <label>Descripción:</label>
                                <textarea name="descripcion" cols="30" rows="10" {...register('descripcion', DESCRIPCION)}></textarea>
                                {
                                    errors.descripcion && <span className='error_add'>{errors.descripcion?.message}</span>
                                }

                                <input type="number" name="stock" placeholder='Stock' {...register('stock', STOCK)} />
                                {
                                    errors.stock && <span className='error_add'>{errors.stock?.message}</span>
                                }

                                <input type="number" name="precio" placeholder='Precio' {...register('precio', PRECIO)} />
                                {
                                    errors.precio && <span className='error_add'>{errors.precio?.message}</span>
                                }

                            </div>

                            <div className="img_add">
                                <div className="container_img_add">
                                    {/* {imageUrl && <img src={imageUrl} alt="Vista previa de la imagen" />} */}
                                </div>
                                <div className="file-upload">
                                    <input
                                        type="file"
                                        id="imageFile"
                                        accept='image/jpeg, image/jpg, image/png'
                                        {...register('imagen')}
                                        onChange={handleImageChange}
                                    />
                                    <label htmlFor="file-input">Seleccionar archivo</label>
                                </div>
                                {
                                    errors.imagen && <span className='error_add'>{errors.imagen?.message}</span>
                                }

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
