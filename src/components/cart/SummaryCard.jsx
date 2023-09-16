import React from "react";

function SummaryCard() {
  return (
    <div className="bg-white shadow-md h-fit flex-grow p-5 flex flex-col items-center rounded-md">
      <div className="leading-9 w-full">
        <h1 className="font-bold text-xl text-[#e94560] mb-4">Summary</h1>
        <div className="flex justify-between">
          <p>SubTotal</p>
          <p>$200</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>$200</p>
        </div>
        <div className="flex items-center justify-between font-bold">
          <p>Total</p>
          <p className="text-[#e94560] text-lg">$200</p>
        </div>
      </div>
      <button className="bg-[#FA374E] w-full rounded-md mt-4 py-1 text-white font-medium">Checkout</button>
    </div>
  );
}

export default SummaryCard;
