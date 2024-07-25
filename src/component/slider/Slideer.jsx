import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import buildings from "../../pages/dashboard/utils/propertyListData";
const Slideer = () => {

  return (
    <Slider>
      {buildings.map((item) => {
        <div key={item.id} className="">
          <img src={item.image} alt="" />
        </div>;
      })}
    </Slider>
  );
};

export default Slideer;
