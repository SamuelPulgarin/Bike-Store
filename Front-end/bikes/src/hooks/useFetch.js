import React, { useState } from "react";


export const useFetch = (urlProduct, urlImage) => {

const [dataProduct, setDataProduct] = useState([0]);
const [dataImage, setDataImage] = useState([1]);

  const fetchDataProduct = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    await fetch(`http://localhost:3080${urlProduct}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDataProduct(result))
      .catch((error) => console.log("Error en la solicitud:", error));

  };



  const fetchDataImage = async() =>{
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(`http://localhost:3080${urlImage}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDataImage(result))
      .catch((error) => console.log("Error en la solicitud:", error))
  }

  return {
    fetchDataProduct,
    dataProduct,
    fetchDataImage,
    dataImage,
  };
};


export const useFetchProducts = (urlProductName, urlProductImg) =>{
  const [dataProduct, setDataProduct] = useState([0]);
  const [dataImg, setDataImg] = useState([1]);

  const fetchDataProduct = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    await fetch(`http://localhost:3080${urlProductName}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDataProduct(result))
      .catch((error) => console.log("Error en la solicitud: ", error));

  };



  const fetchDataImg = async() =>{
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(`http://localhost:3080${urlProductImg}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDataImg(result))
      .catch((error) => console.log("Error en la solicitud:", error))
  }

  return {
    fetchDataProduct,
    dataProduct,
    fetchDataImg,
    dataImg,
  };
}
