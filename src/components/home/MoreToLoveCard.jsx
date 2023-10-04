import React from "react";
function MoreToLoveCard({ product, addToCart, addToFavourite }) {
  return (
    <>
      <div className="group bg-[#fff] relative shadow-md rounded-md mt-4 lg:mt-0 lg:m-2 flex-grow flex flex-col justify-between  h-80  ">
        <div className="h-48 my-8 flex flex-col justify-center items-center">
          <img src={product.cover} alt="" className="w-32" />
        </div>

        <div className="lg:text-lg  flex flex-col justify-end pb-4 px-4">
          <h3 className="font-bold">{product.name}</h3>
          <div className=" text-[#ffcd4e] text-xs lg:text-base py-2 ">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="font-bold flex justify-between items-center text-xl text-[#e94560]">
            <i
              className="fa-regular fa-heart text-xl my-2 mx-1 hover:text-[#e94560] cursor-pointer"
              onClick={() => addToFavourite(product)}
            ></i>
            <h4>${product.price}.00 </h4>
            {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
            <button
              className="  text-[#e94560] text-xl   rounded-md px-2"
              onClick={() => addToCart(product)}
            >
              <i className="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreToLoveCard;
