import React, { useState } from "react";
import ListsPopup from "./ListsPopup";

function LikedItem({
  product,
  openMoveToList,
  closeMoveToList,
  openAddLisPopup,
  showMoveToList,
}) {
  return (
    <div className="h-44  bg-white shadow-md spacy flex justify-between px-12 rounded-md">
      <div className="flex  justify-center items-center space-x-4 w-1/2">
        <label
          htmlFor={`item${product.id}`}
          className="relative text-sm  text-gray-500 cursor-pointer"
        >
          <input
            type="checkbox"
            name={`item${product.id}`}
            id={`item${product.id}`}
            className="  outline-none  w-5 h-5 appearance-none border border-gray-500 rounded-full checked:bg-[#FA462D] peer"
          />
          <i className="fa-solid fa-check absolute left-1 top-1 font-bold opacity-0 text-white peer-checked:opacity-100  "></i>
        </label>
        <img src={product.cover} alt={product.name} className="h-24 " />

        <div className="">
          <h2 className="mb-1 font-semibold">{product.name}</h2>
          <h2 className=" text-sm text-gray-500">
            iste facilis suscipit, itaque nobis voluptatum facere libero!
          </h2>
        </div>
      </div>

      <div className="flex flex-col justify-around py-5 ">
        <button className="flex items-center justify-center space-x-2 border p-2 rounded-md text-[#e94560] hover:bg-[#e94560] hover:text-white duration-500 ease-in-out">
          <i className="fa-solid fa-cart-plus "></i>
          <h2 className="text-sm ">Move to cart</h2>
        </button>
        <button
          className="flex items-center justify-center space-x-2 border p-2 rounded-md text-[#e94560] hover:bg-[#e94560] hover:text-white duration-500 ease-in-out"
          onClick={openMoveToList}
        >
          <i className="fa-solid fa-list "></i>
          <h2 className="text-sm ">Move to list</h2>
        </button>
        {showMoveToList && (
          <ListsPopup
            onClose={closeMoveToList}
            openAddLisPopup={openAddLisPopup}
          />
        )}
        <button className="flex items-center justify-center space-x-2 border p-2 rounded-md text-red-500 hover:bg-red-500 hover:text-white duration-500 ease-in-out">
          <i className="fa-solid fa-trash-can "></i>
          <h2 className="text-sm ">Remove</h2>
        </button>
      </div>
    </div>
  );
}

export default LikedItem;
