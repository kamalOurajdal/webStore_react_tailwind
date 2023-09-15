import React from "react";
import Data from "./Data";
import Slider from "react-slick";

function DiscountCard() {
  const { productItems } = Data;

  console.log(Data);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <>
      <Slider {...settings}>
        {productItems.map((value, index) => (
          <div>
            <div
              key={index}
              className=" mt-6 pt-4 bg-white  rounded-2xl shadow-md group cursor-pointer mx-4"
            >
              <div className="flex justify-center items-center ">
                <img src={value.cover} alt="" className="w-24 group-hover:w-28 transform duration-500 ease-in-out" />
              </div>
              <div className="ml-4 mt-3">
                <h4 className="font-bold">{value.name}</h4>
                <span>${value.price}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default DiscountCard;
