import React from "react";
import Sdata from "./SliderData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";

function SliderCardData() {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
  };
  
  return (
    <div className="w-4/5 h-[65vh] bg-white shadow-md ">
      <Slider {...settings} className="h-full w-full">
        {Sdata.map((value, index) => (
          <div className="flex justify-center items-center  h-[65vh] pl-5" key={index}>
            <div className="flex justify-between items-center h-full relative">
              <div className="w-full font-bold top-8 text-gray-600 flex flex-col">
                <div className="absolute top-20">
                  <h1 className="text-red-500 text-3xl font-bold text-center">{value.title}</h1>
                  <p className="mt-4 text-xl">{value.desc}</p>
                </div>
                <button className="bg-[#e94560] text-white rounded-md p-2 mt-20 w-fit hover:bg-orange-400">
                  Visit Collections
                </button>
              </div>
              <img src={value.cover} alt="" className="h-96 mt-6 mr-20" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderCardData;
