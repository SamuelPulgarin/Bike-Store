import React, { useEffect } from "react";
import "../../assets/css/DetailsProduct.css";
import bike from "../../../uploads/1692995410871-Bicicleta Ruta Contessa Addict 35 2022.jpg";
import { FetchProducts } from "../../hooks/useFetch";

export const DetailsProducts = () => {
  const urlProduct = "/productos";
  const { fetchDataProduct, dataProduct } = FetchProducts(urlProduct);

  useEffect(() => {
    fetchDataProduct();
    if (dataProduct != 0) {
      console.log(urlProduct);
    }
  }, [!dataProduct]);

  return (
    <>
      {/* {!dataProduct
        ? "Cargando..."
        : dataProduct.map((details) => { */}
            <div className="container_all_details">
              <div className="container__details">
                <div className="cotiner_img_btn">
                  <div className="contaier_img_details">
                    <img
                      src={bike}
                      className="img__details"
                      alt="bicicleta muy bonita"
                    />
                  </div>
                  <div className="container_btn_details">
                    <button>Agregar Al Carrito</button>
                  </div>
                </div>
                <div className="container_info_details">
                  <h1 className="title_details">cicla</h1>
                  <h2 className="precio">
                    <span>Precio: $</span>349.000
                  </h2>
                  <h2 className="title-description">Descripción:</h2>
                  <div className="container_description">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Provident rerum dolore fugit in, ut iure qui enim aliquid
                      alias aut doloribus maxime, commodi asperiores tenetur
                      dolores a natus. Nisi, omnis. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Aperiam dolorum quaerat
                      blanditiis rem quisquam minus harum magnam pariatur.
                      Libero quo accusantium commodi exercitationem explicabo
                      deleniti similique vero repellendus quis ipsam. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium minima est, similique voluptatum dignissimos
                      reprehenderit cum doloribus quam. Omnis iste eum quas
                      accusamus dolorum? At necessitatibus cumque velit saepe
                      voluptas.
                    </p>
                  </div>
                  <div className="container_select_details">
                    <div className="select_color">
                      <select name="colores" id="colores">
                        <option selected disabled>
                          Seleccionar Color
                        </option>
                        <option value="Negro">Negro</option>
                        <option value="Rojo">Rojo</option>
                        <option value="Azul">Azul</option>
                        <option value="Blanco">Blanco</option>
                      </select>
                    </div>
                    <div className="select_talla">
                      <select name="talla" id="talla">
                        <option selected disabled>
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
              </div>
            </div>;
          {/* })} */}
    </>
  );
};
