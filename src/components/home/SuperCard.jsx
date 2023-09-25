import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <button className=" text-white font-bold text-xl absolute top-[45%] -right-2 w-14 h-14 bg-[#0f3460] rounded-full z-20">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <button className=" text-white font-bold text-xl absolute top-[45%] -left-2 w-14 h-14 bg-[#0f3460] rounded-full z-20">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
const SuperCard = ({ productItems, addToCart, addToFavourite }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings} className="">
        {productItems.map((item, index) => {
          return (
            <Link to={"/product_details"}>
              <div className=" w-full group" key={index}>
                <div className=" bg-[#fff] relative shadow-md rounded-md m-4  flex flex-col justify-between ">
                  <div className="img  h-44 my-8 flex flex-col justify-center items-center">
                    <span className="  absolute top-0 left-0 bg-[#e94560] py-1 px-3 font-[poppins] rounded-full text-white m-2 ">
                      {item.discount}% Off
                    </span>
                    <img src={item.cover} alt="" className="w-32" />
                    <div className="absolute top-0 right-0 m-2 opacity-0 transform duration-500 group-hover:opacity-100">
                      <i
                        className="fa-regular fa-heart text-xl my-2 mx-1 hover:text-[#e94560] cursor-pointer"
                        onClick={() => addToFavourite(item)}
                      ></i>
                    </div>
                  </div>

                  <div className="text-lg  flex flex-col justify-end pb-8 px-4">
                    <h3 className="font-bold">{item.name}</h3>
                    <div className="rate text-[#ffcd4e]  py-2 ">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="font-bold flex justify-between text-xl text-[#e94560]">
                      <h4>${item.price}.00 </h4>
                      <button
                        className="  text-[#e94560] text-2xl   rounded-md px-2"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa-solid fa-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </>
  );
};

export default SuperCard;
