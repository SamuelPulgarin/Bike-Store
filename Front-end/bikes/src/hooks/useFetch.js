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
      .catch((error) => console.log("erro: ", error));

  };



  const fetchDataImage = async() =>{
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(`http://localhost:3080${urlImage}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDataImage(result))
      .catch((error) => console.log("error: ", error))
  }

  return {
    fetchDataProduct,
    dataProduct,
    fetchDataImage,
    dataImage,
  };
};

const urlAPI = '';

export const useFetchProducts = (urlProductName, urlProductPrice) =>{

}