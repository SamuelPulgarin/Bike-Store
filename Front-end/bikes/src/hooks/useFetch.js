import React, { useState } from "react";
import { ErrorModal } from "../components/Modal/ErrorModal";
/*ja */


export const FetchProducts = (urlProductName, urlProductImg) =>{
  const [dataProduct, setDataProduct] = useState([0]);
  const [dataImg, setDataImg] = useState([1]);
  const [dataDetails, setDataDetails] = useState([2]);

  const fetchDataProduct = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    await fetch(`http://localhost:3060${urlProductName}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDataProduct(result))
      .catch((error) => console.log("Error en la solicitud: ", error));

  };

  const fetchDataImg = async() =>{
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(`http://localhost:3060${urlProductImg}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDataImg(result))
      .catch((error) => console.log("Error en la solicitud:", error))
  }

  //Detalles del producto
  const fetchDetails = async(id) =>{
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(`http://localhost:3060/get-products/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDataDetails(result))
      .catch((error) => console.error("Error en la solicitud", error))
  }

  //Eliminar un producto   
//Abrir error modal
const [isOpenErrorModal , setIsOpenErrorModal] = useState(false);

const openErrorModal = () => {
  setIsOpenErrorModal(true);
}

const closeErrorModal = () => {
  setIsOpenErrorModal(false);
} 

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3060/delete-products/${id}`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        console.log("Producto eliminado");
        fetchDataProduct();
        
      } else {
        console.log("ERROR, Producto no Eliminado Front")
        openErrorModal();
      }
    } catch (error) {
      console.error("Hubo un error en el servidor", error);
      openErrorModal();
    }
  }

  return {
    fetchDataProduct,
    dataProduct,
    fetchDataImg,
    dataImg,
    fetchDetails,
    dataDetails,
    deleteProduct,
    isOpenErrorModal,     // Agrega estas líneas
    openErrorModal,
    closeErrorModal,
  };
}
