import React from "react";
import MoreToLoveCard from "./MoreToLoveCard";
import Data from "./Data";
function MoreToLove() {
  return (
    <section className="w-full ">
      <div className="flex justify-center ">
        <div class="relative flex py-5 items-center mt-6 w-1/2">
          <div class="flex-grow border-t border-2 border-gray-300"></div>
          <h1 className="font-bold text-2xl mx-4">More to love</h1>
          <div class="flex-grow border-t border-2  border-gray-300"></div>
        </div>
      </div>
      <div className=" ">
        <div className="flex flex-wrap items-center  p-2 ">
          <MoreToLoveCard />
        </div>
      </div>
    </section>
  );
}

export default MoreToLove;
