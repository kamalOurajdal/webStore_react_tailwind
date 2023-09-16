import React from "react";

function ShoppingCard({ product }) {
  return (
    <div className="h-44  bg-white shadow-md spacy flex justify-between px-12 rounded-md">
      <div className="flex flex-col justify-center items-start ">
        <img src={product.cover} alt={product.name} className="w-20 " />
        <h2 className="">{product.name}</h2>
        <p className="">{product.price}</p>
        <p className="">{product.desc}</p>
      </div>
      <div className="flex flex-col justify-between py-5">
        <div className="flex justify-end space-x-4 text-gray-500">
          <i className="fa-solid fa-heart cursor-pointer"></i>
          <i className="fa-solid fa-trash-can cursor-pointer"></i>
        </div>
        <div className="flex justify-between items-center w-40">
          <button className="text-2xl font-medium bg-[#f6f9fc] text-[#e94560] w-10 h-10 rounded-full border ">
            -
          </button>
          <h1 className="font-bold text-gray-500">1</h1>
          <button className="text-2xl font-medium bg-[#f6f9fc] text-[#e94560] w-10 h-10  rounded-full border ">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCard;
