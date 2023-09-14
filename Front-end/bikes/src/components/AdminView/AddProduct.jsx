import React from "react";
import { useState } from "react";
import "../../assets/css/AddProduct.css";
import defaultImage from "../../assets/img/defaul.jpg";
import useValidationAddProductos from "../../hooks/useValidationAddProductos";
import { ErrorModal } from "../Modal/ErrorModal";
import { ModalExitoCrud } from "../Modal/ModalExitoCrud"

export const AddProduct = () => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [marca, setMarca] = useState("");
    const [talla, setTalla] = useState("");
    const [color, setColor] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [imagen, setImagen] = useState(null);
    const [imagePreview, setImagePreview] = useState(defaultImage);

    const { errors, validateForm } = useValidationAddProductos();

    const [isModalError, setIsModalError] = useState(false); //Abrir Modal Error

    const openErrorModal = () => {
        setIsModalError(true);
    };

    const closeModalError = () => {
        setIsModalError(false);
    };

    const { isModalCorrect, setIsModalCorrect } = useState(false);

    const openModalCorrect = () => {
        setIsModalCorrect(true);
    };

    const closeModalCorrect = () => {
        setIsModalCorrect(false);
    }

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

    const add = async (e) => {
        e.preventDefault();

        const formData = {
            id,
            nombre,
            marca,
            talla,
            color,
            descripcion,
            categoria,
            precio,
            stock,
            imagen,
        };

        if (validateForm(formData)) {
            // Si el formulario es válido, procede con el envío.

            const formData = new FormData();
            formData.append("id", id);
            formData.append("nombre", nombre);
            formData.append("marca", marca);
            formData.append("talla", talla);
            formData.append("color", color);
            formData.append("descripcion", descripcion);
            formData.append("categoria", categoria);
            formData.append("precio", precio);
            formData.append("stock", stock);
            if (imagen) {
                formData.append("imagen", imagen);
            }

            try {
                const response = await fetch("http://localhost:3060/create-product", {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    console.log("Producto Registrado exitosamente");
                    openModalCorrect();
                } else {
                    console.log("Error agregar producto Front");
                    openErrorModal();
                }
            } catch (error) {
                console.error("Error del servidor", error);
                openErrorModal();
            }
        } else {
            // Form is not valid, do not submit
            console.log("Form is not valid");
        }
    };


    return (
        <>
            <main className="background_add_product">
                <div className="container_add_product">
                    <div className="container_form_add">
                        <h1>Agregar Producto</h1>
                        <form method="POST" onSubmit={add} encType="multipart/form-data">
                            <div className="container_info_product">
                                <input
                                    type="number"
                                    name="id"
                                    placeholder="Codigo"
                                    onChange={(e) => setId(e.target.value)}
                                />
                                <span className="error_add">{errors.id}</span>

                                <input
                                    type="text"
                                    name="nombre"
                                    placeholder="Nombre Producto"
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                <span className="error_add">{errors.nombre}</span>

                                <div className="container_add_select">
                                    <div className="container__select">
                                        <div className="select_add">
                                            <select
                                                name="categoria"
                                                id="categoria_add"
                                                onChange={(e) => setCategoria(e.target.value)}
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
                                ></textarea>
                                 <span className="error_add">{errors.descripcion}</span>
                                

                                <input
                                    type="number"
                                    name="stock"
                                    placeholder="Stock"
                                    onChange={(e) => setStock(e.target.value)}
                                />
                                <span className="error_add">{errors.stock}</span>


                                <input
                                    type="number"
                                    name="precio"
                                    placeholder="Precio"
                                    onChange={(e) => setPrecio(e.target.value)}
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
                                    <button type="submit" className="btn_add_product">Agregar Producto</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <ModalExitoCrud 
            isOpen={isModalCorrect}
            onClose={closeModalCorrect}
            title="¡Exito!"
            content="Producto añadido Correctamente"
            />
            <ErrorModal 
            openErrorModal={isModalError}
            CloseErrorModal={closeModalError}
            titleError="¡Error! Al agregar Producto"
            messageError="Ha ocurrido un error al agregar el Producto."
            />
        </>
    );
};
