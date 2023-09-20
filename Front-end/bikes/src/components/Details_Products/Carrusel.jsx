import React, { useEffect } from "react";
import "../../assets/css/Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FetchProducts } from "../../hooks/useFetch";

//Fundamentales que no estan en la documentacion
import Slider from "react-slick";
import { useSelector } from "react-redux";

export const Carrusel = () => {

  //redux
  const carousel = useSelector((state) => state.carousel.dato);
  console.log(carousel);

  const { carouselItems, dataCarousel} = FetchProducts(carousel);

  useEffect(() =>{

    carouselItems();
    if(dataCarousel != 3){
      console.log(dataCarousel);
    }
    console.log(dataCarousel)

  }, [dataCarousel])

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
          <h2>Carousel de prueba</h2>

          <Slider {...settings}>
            <div className="box">
              <h3>1</h3>
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
            </div>
          </Slider>
        </div>
      </div>

    </>
  );
};
