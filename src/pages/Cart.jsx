import React from "react";
import ShoppingCard from "../components/cart/ShoppingCard";
import Data from "../components/home/Data";
import SummaryCard from "../components/cart/SummaryCard";

function Cart() {
  const { productItems } = Data;
  return (
    <section className="w-full bg-[#f6f9fc] mb-20  px-20  pt-10">
      <div className="flex space-x-8">
        <div className="w-[64%] space-y-4">
          {productItems.map((product, index) => {
            return <ShoppingCard key={index} product={product} />;
          })}
        </div>
        <SummaryCard />
      </div>
    </section>
  );
}

export default Cart;
