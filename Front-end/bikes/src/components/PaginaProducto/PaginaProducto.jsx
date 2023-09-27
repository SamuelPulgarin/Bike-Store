import React, { useEffect, useState } from "react";
import "../../assets/css/PaginaProducto.css";
import { filterBrandSizeColorAndType } from "../../hooks/useFilter";
import $ from "jquery";
import "../../assets/css/ErrorFilterModal.css";
import Close from "../../assets/img/close.png";
import Warning from "../../assets/img/Warning.png";

const PaginaProducto = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  useEffect(() => {
    filterBrandSizeColorAndType();
  }, []);

  // Manejar cambios en los checkboxes de marca
  const handleBrandChange = (event) => {
    const catProduct = event.target.getAttribute("category");
    const isChecked = event.target.checked;

    // Actualiza el estado de la marca seleccionada
    if (isChecked) {
      setSelectedBrands([catProduct]);
    } else {
      setSelectedBrands([]);
    }

    // Habilita o deshabilita otros checkboxes de marca
    $(".checkBrands").not(event.target).prop("disabled", isChecked);
  };

  // Manejar cambios en los checkboxes de talla
  const handleSizeChange = (event) => {
    const sizeProduct = event.target.getAttribute("type");
    const isChecked = event.target.checked;

    // Actualiza el estado de la talla seleccionada
    if (isChecked) {
      setSelectedSizes([sizeProduct]);
    } else {
      setSelectedSizes([]);
    }

    // Habilita o deshabilita otros checkboxes de talla
    $(".checkSize").not(event.target).prop("disabled", isChecked);
  };

  //   // Manejar cambios en los checkboxes de tipo
  const handleTypeChange = (event) => {
    const typeProduct = event.target.getAttribute("itemType");
    const isChecked = event.target.checked;

    // Actualiza el estado del tipo seleccionado
    if (isChecked) {
      setSelectedTypes([typeProduct]);
    } else {
      setSelectedTypes([]);
    }

    // Habilita o deshabilita otros checkboxes de tipo
    $(".checkType").not(event.target).prop("disabled", isChecked);
  };

  // Manejar cambios en los checkboxes de color
  const handleColorChange = (event) => {
    const colorProduct = event.target.getAttribute("color");
    const isChecked = event.target.checked;

    // Actualiza el estado del color seleccionado
    if (isChecked) {
      setSelectedColors([colorProduct]);
    } else {
      setSelectedColors([]);
    }

    // Habilita o deshabilita otros checkboxes de color
    $(".checkColor").not(event.target).prop("disabled", isChecked);
  };
  const resetFilters = () => {
    // Restablecer los filtros aquí
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedTypes([]);
    setSelectedColors([]);
    $(".checkBrands, .checkSize, .checkColor, .checkType").prop(
      "checked",
      false
    );
    filterBrandSizeColorAndType(); // Vuelve a aplicar los filtros
  };

  const handleContinueErrorModal = () => {
    $("#error-modal").hide();
    resetFilters();
    navigateToProductos();
  };

  return (
    <>
      <div className="overlay_error_modal" id="error-modal">
        <div className="ErrorModal-content">
          <div className="container_btn_close_modal_error"></div>
          <div className="container_img_errorModal">
            <img src={Warning} alt="Imagen de error" />
          </div>
          <h2>¡Error!</h2>
          <p>
            No se encontraron productos con estas características. Por favor
            seleccione otro filtro
          </p>
        </div>
      </div>

      <div className="contenedor-filtros">
        <div className="filtros">
          <h1>Filtros</h1>
          <div className="contenedor-checks">
            <div className="filtro">
              <h1>Marca:</h1>
              <div className="label-check">
                <a href="#" className="category_item" category="Scott">
                  <input
                    type="checkbox"
                    className="checkBrands"
                    onChange={handleBrandChange}
                  />
                  <label>Scott</label>
                </a>
              </div>
              <div className="label-check">
                <a href="#" className="category_item" category="GW">
                  <input
                    type="checkbox"
                    className="checkBrands"
                    onChange={handleBrandChange}
                  />
                  <label>GW</label>
                </a>
              </div>
              <div className="label-check">
                <a href="#" className="category_item" category="Giant">
                  <input
                    type="checkbox"
                    className="checkBrands"
                    onChange={handleBrandChange}
                  />
                  <label>Giant</label>
                </a>
              </div>
              <div className="label-check">
                <a href="#" className="category_item" category="Trek">
                  <input
                    type="checkbox"
                    className="checkBrands"
                    onChange={handleBrandChange}
                  />
                  <label>Trek</label>
                </a>
              </div>
            </div>

            <div className="filtro">
              <h1>Talla:</h1>
              <div className="label-check">
                <a href="#" className="size_item" type="XS">
                  <input
                    type="checkbox"
                    className="checkSize"
                    onChange={handleSizeChange}
                  />
                  <label>XS</label>
                </a>
              </div>
              <div className="label-check">
                <a href="#" className="size_item" type="S">
                  <input
                    type="checkbox"
                    className="checkSize"
                    onChange={handleSizeChange}
                  />
                  <label>S</label>
                </a>
              </div>
              <div className="label-check">
                <a href="#" className="size_item" type="M">
                  <input
                    type="checkbox"
                    className="checkSize"
                    onChange={handleSizeChange}
                  />
                  <label>M</label>
                </a>
              </div>
              <div className="label-check">
                <a href="#" className="size_item" type="L">
                  <input
                    type="checkbox"
                    className="checkSize"
                    onChange={handleSizeChange}
                  />
                  <label>L</label>
                </a>
              </div>
              <div className="label-check">
                <a href="#" className="size_item" type="XL">
                  <input
                    type="checkbox"
                    className="checkSize"
                    onChange={handleSizeChange}
                  />
                  <label>XL</label>
                </a>
              </div>
              <div className="label-check">
                <a href="#" className="size_item" type="XXL">
                  <input
                    type="checkbox"
                    className="checkSize"
                    onChange={handleSizeChange}
                  />
                  <label>XXL</label>
                </a>
              </div>
            </div>

            <div className="filtro">
              <h1>Tipo:</h1>
              <div className="label-check">
                <a href="#" className="type_item" itemType="Ruta">
                  <input
                    type="checkbox"
                    className="checkType"
                    onChange={handleTypeChange}
                  />
                  <label>RUTA</label>
                </a>
              </div>
              <div className="label-check">
                <a href="#" className="type_item" itemType="Montaña">
                  <input
                    type="checkbox"
                    className="checkType"
                    onChange={handleTypeChange}
                  />
                  <label>MONTAÑA</label>
                </a>
              </div>
              <div className="label-check">
                <a href="#" className="type_item" itemType="BMX">
                  <input
                    type="checkbox"
                    className="checkType"
                    onChange={handleTypeChange}
                  />
                  <label>BMX</label>
                </a>
              </div>
              <div className="label-check">
                <a href="#" className="type_item" itemType="Híbrida">
                  <input
                    type="checkbox"
                    className="checkType"
                    onChange={handleTypeChange}
                  />
                  <label>HiBRIDAS</label>
                </a>
              </div>
            </div>

            <div className="filtro">
              <h1>Color:</h1>
              <div className="label-check">
                <a href="#" className="color_item" color="Negro">
                  <input
                    type="checkbox"
                    className="checkColor"
                    onChange={handleColorChange}
                  />
                  <label>NEGRO</label>
                </a>
              </div>
              <div className="label-check">
                <a href="#" className="color_item" color="Rojo">
                  <input
                    type="checkbox"
                    className="checkColor"
                    onChange={handleColorChange}
                  />
                  <label>ROJO</label>
                </a>
              </div>
              <div className="label-check">
                <a href="#" className="color_item" color="Azul">
                  <input
                    type="checkbox"
                    className="checkColor"
                    onChange={handleColorChange}
                  />
                  <label>AZUL</label>
                </a>
              </div>
              <div className="label-check">
                <a href="#" className="color_item" color="Blanco">
                  <input
                    type="checkbox"
                    className="checkColor"
                    onChange={handleColorChange}
                  />
                  <label>BLANCO</label>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaginaProducto;
