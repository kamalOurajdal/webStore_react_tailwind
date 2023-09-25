import React from "react";
function MoreToLoveCard({ product, addToCart, addToFavourite }) {
  return (
    <>
      <div
        className="group bg-[#fff] relative shadow-md rounded-md m-2 flex-grow flex flex-col justify-between  h-72  "
      >
        <div className="h-48 my-8 flex flex-col justify-center items-center">
          <span className="  absolute top-0 left-0 bg-[#e94560] py-1 px-3 font-[poppins] rounded-full text-white m-2 ">
            {product.discount}% Off
          </span>
          <img src={product.cover} alt="" className="w-28" />
          <div className="absolute top-0 right-0 m-2 opacity-0 transform duration-500 group-hover:opacity-100">
            <i
              className="fa-regular fa-heart text-xl my-2 mx-1 hover:text-[#e94560] cursor-pointer"
              onClick={() => addToFavourite(product)}
            ></i>
          </div>
        </div>

        <div className="text-lg  flex flex-col justify-end pb-4 px-4">
          <h3 className="font-bold">{product.name}</h3>
          <div className="rate text-[#ffcd4e]  py-2 ">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="font-bold flex justify-between text-xl text-[#e94560]">
            <h4>${product.price}.00 </h4>
            {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
            <button
              className="  text-[#e94560] text-2xl   rounded-md px-2"
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
