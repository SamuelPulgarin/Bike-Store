import React from "react";
import { useState } from "react";
import "../../assets/css/AddProduct.css";
import defaultImage from "../../assets/img/defaul.jpg";

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

  // const [imageUrl, setImageUrl] = useState(defaultImage);

  // const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImagen(selectedImage);
    // const file = e.target.files[0]; // Obtiene el archivo seleccionado

    // if (file) {
    //     const reader = new FileReader();
    //     reader.onload = (e) => {
    //         setImageUrl(e.target.result); // Actualiza vista previa de la imagen
    //     };
    //     reader.readAsDataURL(file);

    //     // Set the value of the input using the ref
    //     fileInputRef.current.value = ''; // Se limpia
    //     fileInputRef.current.files = e.target.files; // inserta el valor en el input
    // }
  };

  const add = async (e) => {
    e.preventDefault();
    console.log("Verifica si la imagen esta definida: ", imagen);

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
        body: formData
      });
      
      if (response.ok) {
        console.log("Producto Registrado exitosamente");
      } else {
        console.log("Error agregar producto Front");
      }
    } catch (error) {
      console.error("Error del servidor", error);
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

                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre Producto"
                  onChange={(e) => setNombre(e.target.value)}
                />

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
                  </div>
                </div>

                <label>Descripción:</label>
                <textarea
                  name="descripcion"
                  cols="30"
                  rows="10"
                  onChange={(e) => setDescripcion(e.target.value)}
                ></textarea>

                <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  onChange={(e) => setStock(e.target.value)}
                />

                <input
                  type="number"
                  name="precio"
                  placeholder="Precio"
                  onChange={(e) => setPrecio(e.target.value)}
                />
              </div>

              <div className="img_add">
                <div className="container_img_add">
                  {/* {<img src={imageUrl} alt="bike" />} */}
                </div>
                <div className="file-upload">
                  <input
                    name="imagen"
                    type="file"
                    id="imageFile"
                    accept="image/jpeg, image/jpg, image/png"
                    // {ref={fileInputRef}}
                    onChange={handleImageChange}
                  />
                  <label htmlFor="file-input">Seleccionar archivo</label>
                </div>

                <div className="container_btns_add">
                  <button className="btn_cancel_add">Cancelar</button>
                  <button type="submit" className="btn_add_product">
                    Agregar Producto
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
