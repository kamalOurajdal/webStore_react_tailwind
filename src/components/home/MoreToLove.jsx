import React from "react";
import MoreToLoveCard from "./MoreToLoveCard";
import Data from "./Data";
function MoreToLove({ productItems, addToFavourite, addToCart }) {
  return (
    <section className="w-full ">
      <div className="flex justify-center ">
        <div className="relative flex py-5 items-center mt-6 w-1/2">
          <div className="flex-grow border-t border-[1px] border-gray-300"></div>
          <h1 className="font-bold text-2xl mx-4">More to love</h1>
          <div className="flex-grow border-t border-[1px]  border-gray-300"></div>
        </div>
      </div>
      <div className=" ">
        <div className="grid grid-cols-5 gap-4 ">
          <MoreToLoveCard productItems={ productItems } addToCart={addToCart} addToFavourite={addToFavourite}/>
        </div>
      </div>
    </section>
  );
}

export default MoreToLove;
