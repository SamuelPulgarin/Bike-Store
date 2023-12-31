import React, { useEffect } from 'react'
import { useState } from "react";
import "../../assets/css/AddProduct.css";
import defaultImage from "../../assets/img/defaul.jpg";
import useValidationUpdate from '../../hooks/useValidationUpdate';
import { useParams } from 'react-router-dom';
import { ModalExitoCrud } from '../Modal/ModalExitoCrud';
import { ErrorModal } from '../Modal/ErrorModal';

export const UpdateProduct = () => {

    //Modal Exito
    const [isOpen, setIsOpen] = useState(false);

    const openModalExito = () => {
        setIsOpen(true);
    }

    const closeModalExito = () => {
        setIsOpen(false);
    }

    //Error Modal
    const [isOpenError, setIsOpenError] = useState(false);

    const openErrorModal = () => {
        setIsOpenError(true);
    }

    const CloseErrorModal = () => {
        setIsOpenError(false);
    }

    const { identificador } = useParams();
    const [nombre, setNombre] = useState("");
    const [marca, setMarca] = useState("");
    const [talla, setTalla] = useState("");
    const [color, setColor] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [NewStock, setNewStock] = useState("");
    const [imagen, setImagen] = useState(null);
    const [imagePreview, setImagePreview] = useState(defaultImage);

    const convertPriceToNumber = (priceString) => {
        // Remueve el signo de dólar, comas y puntos, y convierte la cadena en un número entero
        const numericPrice = parseInt(priceString.replace(/\$|\.|,/g, ''), 10);
        // Divide por 100 para eliminar los dos últimos ceros
        return numericPrice / 100;
    };


    useEffect(() => {
        if (identificador) {
            fetch(`http://localhost:3060/get-products/${identificador}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then((productData) => {
                    console.log(productData)
                    setNombre(productData.nombre);
                    setMarca(productData.marca);
                    setTalla(productData.talla);
                    setColor(productData.color);
                    setDescripcion(productData.descripcion);
                    setCategoria(productData.categoria);
                    setPrecio(convertPriceToNumber(productData.precio));
                    setStock(productData.stock);
                    setImagePreview(`../../${productData.ruta}`);
                })
                .catch((error) => {
                    console.error("Error al cargar los detalles del producto:", error);
                });
        }
    }, [identificador])



    const { errors, validateForm } = useValidationUpdate();

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result); // Actualiza imagen preview
            };
            reader.readAsDataURL(selectedImage);
        } else {
            setImagePreview(defaultImage); // Reset to default image if no image selected
        }

        setImagen(selectedImage);
    };

    const Update = async (e) => {


        e.preventDefault();

        const formData = new FormData(); // Cambia el nombre de la variable aquí

        formData.append("nombre", nombre);
        formData.append("marca", marca);
        formData.append("talla", talla);
        formData.append("color", color);
        formData.append("descripcion", descripcion);
        formData.append("categoria", categoria);
        formData.append("precio", precio);
        formData.append("stock", stock);
        formData.append("NewStock", NewStock);
        if (imagen) {
            formData.append("imagen", imagen);
        }
        //Para depurar errores y confirmar informacion
        // console.log(
        //     nombre, marca, talla, color, descripcion, categoria, precio, stock, imagen
        // )
        // for (const entry of formData.entries()) {
        //     console.log(entry);
        // }

        //        if (validateForm(formData)) {  Si el formulario es válido, procede con el envío.
        try {
            const response = await fetch(`http://localhost:3060/update-product/${identificador}`, {
                method: "PUT",
                body: formData,
            })
            if (response.ok) {
                console.log("Producto actualizado correctamente");
                openModalExito()
            }
            else {
                console.log("ERROR, Producto no actualizado");
                openErrorModal()
            }
        }
        catch (error) {
            console.error("Error del servidor", error)
            openErrorModal()
        }
        //        }
    }



    return (
        <>
            <main className="background_add_product">
                <div className="container_add_product">
                    <div className="container_form_add">
                        <h1>Agregar Producto</h1>
                        <form method="PUT" onSubmit={Update} encType="multipart/form-data">
                            <div className="container_info_product">

                                <input
                                    type="text"
                                    name="nombre"
                                    placeholder="Nombre Producto"
                                    onChange={(e) => setNombre(e.target.value)}
                                    value={nombre} // Asigna el valor del nombre del producto
                                />
                                <span className="error_add">{errors.nombre}</span>

                                <div className="container_add_select">
                                    <div className="container__select">
                                        <div className="select_add">
                                            <select
                                                name="categoria"
                                                id="categoria_add"
                                                onChange={(e) => setCategoria(e.target.value)}
                                                value={categoria}
                                            >
                                                <option value="" selected disabled>
                                                    Seleccionar Categoria
                                                </option>
                                                <option value="Ruta">Ruta</option>
                                                <option value="Montaña">Montaña</option>
                                                <option value="BMX">BXM</option>
                                                <option value="Hibridas">Hibridas</option>
                                            </select>
                                        </div>
                                        <span className="error_add">{errors.categoria}</span>
                                    </div>

                                    <div className="container__select">
                                        <div className="select_add">
                                            <select
                                                name="marca"
                                                id="marca_add"
                                                onChange={(e) => setMarca(e.target.value)}
                                                value={marca}
                                            >
                                                <option value="" selected disabled>
                                                    Seleccionar Marca
                                                </option>
                                                <option value="Scott">Scott</option>
                                                <option value="GW">GW</option>
                                                <option value="Giant">Giant</option>
                                                <option value="Trek">Trek</option>
                                            </select>
                                        </div>
                                        <span className="error_add">{errors.marca}</span>

                                    </div>

                                    <div className="container__select">
                                        <div className="select_add">
                                            <select
                                                name="color"
                                                id="add_colores"
                                                onChange={(e) => setColor(e.target.value)}
                                                value={color}
                                            >
                                                <option value="" selected disabled>
                                                    Seleccionar Color
                                                </option>
                                                <option value="Negro">Negro</option>
                                                <option value="Rojo">Rojo</option>
                                                <option value="Azul">Azul</option>
                                                <option value="Blanco">Blanco</option>
                                            </select>
                                        </div>
                                        <span className="error_add">{errors.color}</span>
                                    </div>

                                    <div className="container__select">
                                        <div className="select_add">
                                            <select
                                                name="talla"
                                                id="add_talla"
                                                onChange={(e) => setTalla(e.target.value)}
                                                value={talla}
                                            >
                                                <option value="" selected disabled>
                                                    Seleccionar Talla
                                                </option>
                                                <option value="XS">XS</option>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="Xl">XL</option>
                                                <option value="XXL">XXL</option>
                                            </select>
                                        </div>
                                        <span className="error_add">{errors.talla}</span>
                                    </div>
                                </div>

                                <label>Descripción:</label>
                                <textarea
                                    name="descripcion"
                                    cols="30"
                                    rows="10"
                                    onChange={(e) => setDescripcion(e.target.value)}
                                    value={descripcion}
                                ></textarea>
                                <span className="error_add">{errors.descripcion}</span>

                                <label> Stock Actual:</label>
                                <input
                                    type="number"
                                    name="stock"
                                    placeholder="Stock"
                                    onChange={(e) => setStock(e.target.value)}
                                    value={stock}
                                />
                                <span className="error_add">{errors.stock}</span>

                                <label>Adicionar Stock:</label>
                                <input
                                    type="number"
                                    name="NewStock"
                                    placeholder="Adicionar Stock"
                                    onChange={(e) => setNewStock(e.target.value)}
                                />


                                <input
                                    type="number"
                                    name="precio"
                                    placeholder="Precio"
                                    onChange={(e) => setPrecio(e.target.value)}
                                    value={precio}
                                />
                                <span className="error_add">{errors.precio}</span>

                            </div>

                            <div className="img_add">
                                <div className="container_img_add">
                                    {<img src={imagePreview} alt="bike" />}
                                </div>
                                <div className="file-upload">
                                    <input
                                        name="imagen"
                                        type="file"
                                        id="imageFile"
                                        accept="image/jpeg, image/jpg, image/png"
                                        onChange={handleImageChange}
                                    />
                                    <label htmlFor="file-input">Seleccionar archivo</label>
                                </div>
                                <span className="error_add">{errors.imagen}</span>

                                <div className="container_btns_add">
                                    <button className="btn_cancel_add">Cancelar</button>
                                    <button type="submit" className="btn_add_product">Guardar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <ModalExitoCrud
            isOpen={isOpen}
            onClose={closeModalExito}
            title="¡Exito!"
            content="Producto actualizado Correctamente"
            />
            <ErrorModal 
            openErrorModal={isOpenError}
            CloseErrorModal={CloseErrorModal}
            titleError="¡Error! Al actualizar Producto"
            messageError="Ha ocurrido un error al actualizar el Producto."
            />
        </>
    )
}
