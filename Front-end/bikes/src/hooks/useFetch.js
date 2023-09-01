import React, { useState } from "react";
/*ja */


export const FetchProducts = (urlProductName, urlProductImg) =>{
  const [dataProduct, setDataProduct] = useState([0]);
  const [dataImg, setDataImg] = useState([1]);

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

  return {
    fetchDataProduct,
    dataProduct,
    fetchDataImg,
    dataImg,
  };
}
