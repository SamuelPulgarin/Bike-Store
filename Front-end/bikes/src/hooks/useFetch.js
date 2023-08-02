import React, { useState } from "react";


export const useFetch = (url) => {

const [data, setData] = useState([0]);

  const fetchData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(`http://localhost:3060${url}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));

  };

  return {
    fetchData,
    data,
  };
};
