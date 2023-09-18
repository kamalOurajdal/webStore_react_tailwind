import React from "react";
import { useState } from "react";
import Data from "./Data";
function MoreToLoveCard({ product }) {
    const { productItems } = Data;
    const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  return (
    <>
      {productItems.map((productItems) => {
        return (
            <div className="group bg-[#fff] relative shadow-md rounded-md m-2 flex-grow flex flex-col justify-between  h-72  ">
              <div className="h-48 my-8 flex flex-col justify-center items-center">
                <span className="  absolute top-0 left-0 bg-[#e94560] py-1 px-3 font-[poppins] rounded-full text-white m-2 ">
                  {productItems.discount}% Off
                </span>
                <img src={productItems.cover} alt="" className="w-28" />
                <div className="absolute top-0 right-0 m-2 opacity-0 transform duration-500 group-hover:opacity-100">
                  <label className="bg-[#0f3460] py-1 px-2 text-white rounded-md">
                    {count}
                  </label>{" "}
                  <br />
                  <i
                    className="fa-regular fa-heart text-xl my-2 mx-1 hover:text-[#e94560] cursor-pointer"
                    onClick={increment}
                  ></i>
                </div>
              </div>

              <div className="text-lg  flex flex-col justify-end pb-4 px-4">
                <h3 className="font-bold">{productItems.name}</h3>
                <div className="rate text-[#ffcd4e]  py-2 ">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="font-bold flex justify-between text-xl text-[#e94560]">
                  <h4>${productItems.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button className="  text-[#e94560] text-lg border  rounded-md px-2">
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
        );
      })}
    </>
  );
}

export default MoreToLoveCard;
