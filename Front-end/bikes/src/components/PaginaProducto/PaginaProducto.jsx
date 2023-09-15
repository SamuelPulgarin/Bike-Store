import React, { useEffect, useState } from "react";
import "../../assets/css/PaginaProducto.css";
import { ErrorModal } from "../../components/Modal/ErrorModal";
import products from "../../Data/products.js";

// const PaginaProducto = () => {
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

//   const openModalError = () => {
//     //Abre modal que manda error
//     setIsErrorModalOpen(true); //estado que abre el modal
//   };

//   const closeModalError = () => {
//     //Cierra modal que manda error
//     setIsErrorModalOpen(false); //estado que cierra el modal
//   };

//   // Manejar cambios en los checkboxes de marca
//   const handleBrandChange = (event) => {
//     const catProduct = event.target.getAttribute("category");
//     const isChecked = event.target.checked;

//     // Actualiza el estado de la marca seleccionada
//     if (isChecked) {
//       setSelectedBrands([catProduct]);
//     } else {
//       setSelectedBrands([]);
//     }

//     // Habilita o deshabilita otros checkboxes de marca
//     $(".checkBrands").not(event.target).prop("disabled", isChecked);
//     applyFilters();
//   };

//   // Manejar cambios en los checkboxes de talla
//   const handleSizeChange = (event) => {
//     const sizeProduct = event.target.getAttribute("type");
//     const isChecked = event.target.checked;

//     // Actualiza el estado de la talla seleccionada
//     if (isChecked) {
//       setSelectedSizes([sizeProduct]);
//     } else {
//       setSelectedSizes([]);
//     }

//     // Habilita o deshabilita otros checkboxes de talla
//     $(".checkSize").not(event.target).prop("disabled", isChecked);

//   };

// //   // Manejar cambios en los checkboxes de tipo
//   const handleTypeChange = (event) => {
//     const typeProduct = event.target.getAttribute("itemType");
//     const isChecked = event.target.checked;

//     // Actualiza el estado del tipo seleccionado
//     if (isChecked) {
//       setSelectedTypes([typeProduct]);
//     } else {
//       setSelectedTypes([]);
//     }

//     // Habilita o deshabilita otros checkboxes de tipo
//     $(".checkType").not(event.target).prop("disabled", isChecked);

//   };

//   // Manejar cambios en los checkboxes de color
//   const handleColorChange = (event) => {
//     const colorProduct = event.target.getAttribute("color");
//     const isChecked = event.target.checked;

//     // Actualiza el estado del color seleccionado
//     if (isChecked) {
//       setSelectedColors([colorProduct]);
//     } else {
//       setSelectedColors([]);
//     }

//     // Habilita o deshabilita otros checkboxes de color
//     $(".checkColor").not(event.target).prop("disabled", isChecked);

//   };

//   return (
//     <>
//       <div className="contenedor-filtros">
//         <div className="filtros">
//           <h1>Filtros</h1>

//           <div className="contenedor-checks">
//             <div className="filtro">
//               <h1>Marca:</h1>
//               <div className="label-check">
//                 <a href="#" className="category_item" category="Scott">
//                   <input
//                     type="checkbox"
//                     className="checkBrands"
//                     onChange={handleBrandChange}
//                   />
//                   <label>Scott</label>
//                 </a>
//               </div>
//               <div className="label-check">
//                 <a href="#" className="category_item" category="GW">
//                   <input
//                     type="checkbox"
//                     className="checkBrands"
//                     onChange={handleBrandChange}
//                   />
//                   <label>GW</label>
//                 </a>
//               </div>
//               <div className="label-check">
//                 <a href="#" className="category_item" category="Giant">
//                   <input
//                     type="checkbox"
//                     className="checkBrands"
//                     onChange={handleBrandChange}
//                   />
//                   <label>Giant</label>
//                 </a>
//               </div>
//               <div className="label-check">
//                 <a href="#" className="category_item" category="Trek">
//                   <input
//                     type="checkbox"
//                     className="checkBrands"
//                     onChange={handleBrandChange}
//                   />
//                   <label>Trek</label>
//                 </a>
//               </div>
//             </div>

//             <div className="filtro">
//               <h1>Talla:</h1>
//               <div className="label-check">
//                 <a href="#" className="size_item" type="XS">
//                   <input
//                     type="checkbox"
//                     className="checkSize"
//                     onChange={handleSizeChange}
//                   />
//                   <label>XS</label>
//                 </a>
//               </div>
//               <div className="label-check">
//                 <a href="#" className="size_item" type="S">
//                   <input
//                     type="checkbox"
//                     className="checkSize"
//                     onChange={handleSizeChange}
//                   />
//                   <label>S</label>
//                 </a>
//               </div>
//               <div className="label-check">
//                 <a href="#" className="size_item" type="M">
//                   <input
//                     type="checkbox"
//                     className="checkSize"
//                     onChange={handleSizeChange}
//                   />
//                   <label>M</label>
//                 </a>
//               </div>
//               <div className="label-check">
//                 <a href="#" className="size_item" type="L">
//                   <input
//                     type="checkbox"
//                     className="checkSize"
//                     onChange={handleSizeChange}
//                   />
//                   <label>L</label>
//                 </a>
//               </div>
//               <div className="label-check">
//                 <a href="#" className="size_item" type="XL">
//                   <input
//                     type="checkbox"
//                     className="checkSize"
//                     onChange={handleSizeChange}
//                   />
//                   <label>XL</label>
//                 </a>
//               </div>
//               <div className="label-check">
//                 <a href="#" className="size_item" type="XXL">
//                   <input
//                     type="checkbox"
//                     className="checkSize"
//                     onChange={handleSizeChange}
//                   />
//                   <label>XXL</label>
//                 </a>
//               </div>
//             </div>

//             <div className="filtro">
//               <h1>Tipo:</h1>
//               <div className="label-check">
//                 <a href="#" className="type_item" itemType="Ruta">
//                   <input
//                     type="checkbox"
//                     className="checkType"
//                     onChange={handleTypeChange}
//                   />
//                   <label>RUTA</label>
//                 </a>
//               </div>
//               <div className="label-check">
//                 <a href="#" className="type_item" itemType="Montaña">
//                   <input
//                     type="checkbox"
//                     className="checkType"
//                     onChange={handleTypeChange}
//                   />
//                   <label>MONTAÑA</label>
//                 </a>
//               </div>
//               <div className="label-check">
//                 <a href="#" className="type_item" itemType="BMX">
//                   <input
//                     type="checkbox"
//                     className="checkType"
//                     onChange={handleTypeChange}
//                   />
//                   <label>BMX</label>
//                 </a>
//               </div>
//               <div className="label-check">
//                 <a href="#" className="type_item" itemType="Híbrida">
//                   <input
//                     type="checkbox"
//                     className="checkType"
//                     onChange={handleTypeChange}
//                   />
//                   <label>HiBRIDAS</label>
//                 </a>
//               </div>
//             </div>

//             <div className="filtro">
//               <h1>Color:</h1>
//               <div className="label-check">
//                 <a href="#" className="color_item" color="Negro">
//                   <input
//                     type="checkbox"
//                     className="checkColor"
//                     onChange={handleColorChange}
//                   />
//                   <label>NEGRO</label>
//                 </a>
//               </div>
//               <div className="label-check">
//                 <a href="#" className="color_item" color="Rojo">
//                   <input
//                     type="checkbox"
//                     className="checkColor"
//                     onChange={handleColorChange}
//                   />
//                   <label>ROJO</label>
//                 </a>
//               </div>
//               <div className="label-check">
//                 <a href="#" className="color_item" color="Azul">
//                   <input
//                     type="checkbox"
//                     className="checkColor"
//                     onChange={handleColorChange}
//                   />
//                   <label>AZUL</label>
//                 </a>
//               </div>
//               <div className="label-check">
//                 <a href="#" className="color_item" color="Blanco">
//                   <input
//                     type="checkbox"
//                     className="checkColor"
//                     onChange={handleColorChange}
//                   />
//                   <label>BLANCO</label>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <ErrorModal
//         openErrorModal={openModalError}
//         CloseErrorModal={closeModalError}
//         titleError="Error"
//         messageError="Que le pasa a este modal que no quiere desaparecer chamo"
//       /> */}
//     </>
//   );
// };

// export default PaginaProducto;

const PaginaProducto = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const openModalError = () => {
    setIsErrorModalOpen(true);
  };

  const closeModalError = () => {
    setIsErrorModalOpen(false);
  };

  const applyFilters = () => {
    const filteredProducts = products.filter((product) => {
      return (
        selectedBrands.includes(product.category) &&
        selectedSizes.includes(product.type) &&
        selectedTypes.includes(product.itemType) &&
        selectedColors.includes(product.color)
      );
    });

    setIsErrorModalOpen(filteredProducts.length === 0);
  };

  useEffect(() => {
    // Llama a applyFilters cuando cambian las selecciones de filtros
    applyFilters();
  }, [selectedBrands, selectedSizes, selectedTypes, selectedColors]);

  const handleBrandChange = (event) => {
    const catProduct = event.target.getAttribute("category");
    const isChecked = event.target.checked;
  
    // Actualiza el estado de la marca seleccionada
    if (isChecked) {
      setSelectedBrands([...selectedBrands, catProduct]);
    } else {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== catProduct));
    }
  };


  const handleSizeChange = (event) => {
    const sizeProduct = event.target.getAttribute("type");
    const isChecked = event.target.checked;
  
    if (isChecked) {
        setSelectedSizes([...selectedSizes, sizeProduct]);
    } else {
        setSelectedSizes(selectedSizes.filter((brand) => brand !== sizeProduct));
    }
  };

  const handleTypeChange = (event) => {
    const typeProduct = event.target.getAttribute("itemType");
    const isChecked = event.target.checked;
  
    // Actualiza el estado de la marca seleccionada
    if (isChecked) {
        setSelectedTypes([...selectedTypes, typeProduct]);
    } else {
        setSelectedTypes(selectedTypes.filter((brand) => brand !== typeProduct));
    }
  };

  const handleColorChange = (event) => {
    const colorProduct = event.target.getAttribute("color");
    const isChecked = event.target.checked;
  
    // Actualiza el estado de la marca seleccionada
    if (isChecked) {
        setSelectedColors([...selectedColors, colorProduct]);
    } else {
        setSelectedColors(selectedColors.filter((brand) => brand !== colorProduct));
    }
  };


  return (
    <>
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
      {/* <ErrorModal
        openErrorModal={openModalError}
        CloseErrorModal={closeModalError}
        titleError="Error"
        messageError="No se encontraron bicicletas con estas características."
      /> */}
    </>
  );
};

export default PaginaProducto;