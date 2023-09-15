import React from "react";
import DiscountCard from "./DiscountCard";

function Discounts() {
  return (
    <>
      <section className=" rounded-xl flex items-center justify-center">
        <div className="w-full h-60">
          <div className="flex justify-between items-center">
            <div className="flex items-center ml-4">
              <i class="fa-solid fa-gift mr-1 text-xl text-[#e94560]"></i>
              <h2 className="font-bold ">Big Discounts</h2>
            </div>
            <div className="flex items-center ">
              <span>View all</span>
              <i className="fa-solid fa-caret-right mr-4"></i>
            </div>
          </div>
          <DiscountCard />
        </div>
      </section>
    </>
  );
}

export default Discounts;
