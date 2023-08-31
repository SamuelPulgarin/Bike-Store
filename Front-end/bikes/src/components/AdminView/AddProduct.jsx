import React from 'react'
import '../../assets/css/AddProduct.css'

export const AddProduct = () => {
    return (
        <>
            <div className="container_add_product">
                <div className="container_form_add">
                    <form method="POST">
                        <div className="container_info_product">

                            <input type="number" name="id" placeholder="Codigo" />

                            <input type="text" placeholder="Nombre Producto" />

                            <input type="text" placeholder="Categoria" />

                            <div className="container_add_select">
                                <div className="select_add_color">
                                    <select name="color" id="add_colores">
                                        <option selected disabled>Seleccionar Color</option>
                                        <option value="Negro">Negro</option>
                                        <option value="Rojo">Rojo</option>
                                        <option value="Azul">Azul</option>
                                        <option value="Blanco">Blanco</option>
                                    </select>
                                </div>

                                <div className="select_add_talla">
                                    <select name="talla" id="add_talla">
                                        <option selected disabled>Seleccionar Talla</option>
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
                    </form>
                </div>
            </div>
        </>
    )
}
