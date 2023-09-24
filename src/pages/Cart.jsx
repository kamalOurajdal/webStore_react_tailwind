import React, { useState } from "react";
import ShoppingCard from "../components/cart/ShoppingCard";
import SummaryCard from "../components/cart/SummaryCard";

function Cart({ decrementQty, cartItem, addToCart, setCartItem }) {

  let totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const handelRemoveProduct = (product) => {
    const updatedProductItems = cartItem.filter((item) => item.id !== product.id);
    setCartItem(updatedProductItems);
  };

  return (
    <section className="w-full bg-[#f6f9fc] pb-20  pt-12">
      <div className="w-[84%] m-auto">
        <h1 className="text-3xl font-semibold mb-9">Shopping Cart</h1>
        <h6 className="text-gray-500 mb-2">{cartItem.length} item in total</h6>
        <div className="flex space-x-8">
          <div className="w-[64%] space-y-4 ">
            {cartItem.map((product, index) => {
              return (
                <ShoppingCard
                  key={index}
                  product={product}
                  decrementQty={decrementQty}
                  addToCart={addToCart}
                  handelRemoveProduct={handelRemoveProduct}
                />
              );
            })}
          </div>
          <SummaryCard totalPrice={totalPrice} />
        </div>
      </div>
    </section>
  );
}

export default Cart;
