import React from "react";
// import Slideer from "../slider/Slideer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slideer from "../slider/Slideer";
const Properties = ({ propertyList, value }) => {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    cssEase: "linear",
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
  const { properties } = propertyList[value];
  return (
    // <>
    //   <div className="slider-container">
    //     <Slideer/>
    //   </div>
    // </>
    <article className="list">
      <Slider {...settings}>
        {properties.map((items) => {
          const {id, name, location, image, price } = items;
          return (
            <div key={id} className="property-container">
              <div className="property-img-container">
                <img src={image} alt="" />
              </div>
              <div className="property-details-container">
                <div className="property-details-left">
                  <h4>{name}</h4>
                  <p>{location}</p>
                </div>
                <p className="property-details-right">{price}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </article>
  );
};

export default Properties;
