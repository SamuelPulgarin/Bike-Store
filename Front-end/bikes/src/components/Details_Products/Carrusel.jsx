import React, { useEffect } from "react";
import "../../assets/css/Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FetchProducts } from "../../hooks/useFetch";

//Fundamentales que no estan en la documentacion
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Carrusel = () => {

  const [dataCarousel, setDataCarousel] = useState([])

  //redux
  const marca = useSelector((state) => state.carousel.dato);
  //console.log(marca);

  useEffect(() => {

    if (marca && marca.length !== 0) {
      //console.log(carousel.length)

      const response = fetch(`http://localhost:3060/producto/${marca}`)
        .then((response) => response.json())
        .then((result) => {
          if (result !== null) {
            //console.log(result);
            setDataCarousel(result);
            //console.log(dataCarousel);
          }
        })
        .catch((err) => console.error('Error al intentar traer los productos: ', err))
    }

  }, [marca, dataCarousel])

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
          <h2>Relacionados</h2>

          <Slider {...settings}>
            {
              dataCarousel && dataCarousel.map((data) => {
                return (
                  <>
                    <div className="box" key={data.id}>
                      <Link to={`/Detalles/${data.id}`} onClick={scrollToTop}>
                        <img src={`../../${data.ruta}`} alt="Bicicletas muy bonitas" />
                        <div className="cartap-info">
                          <h5>{data.nombre}</h5>
                        </div>
                        <p><b>Precio:</b> {data.precio}</p>
                      </Link>
                    </div>
                  </>
                );
              })

            }
            {/* <div className="box">
              <h3>{dataCarousel[2] && dataCarousel[2].nombre}</h3>
            </div>
            <div className="box">
              <h3>2</h3>
            </div>
            <div className="box">
              <h3>3</h3>
            </div>
            <div className="box">
              <h3>4</h3>
            </div>
            <div className="box">
              <h3>5</h3>
            </div>
            <div className="box">
              <h3>6</h3>
            </div>
            <div className="box">
              <h3>7</h3>
            </div>
            <div className="box">
              <h3>8</h3>
            </div>
            <div className="box">
              <h3>9</h3>
            </div>
            <div className="box">
              <h3>10</h3>
            </div> */}
          </Slider>
        </div>
      </div>

    </>
  );
};
