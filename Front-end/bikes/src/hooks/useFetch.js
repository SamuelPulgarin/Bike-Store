import React, { useState } from "react";


export const useFetch = () => {

const [data, setData] = useState([0]);

  const fetchData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch("http://localhost:3060/productos", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));

  };

  return {
    fetchData,
    data,
  };
};
