import React, { useState } from "react";
import FilterSearchResult from "../components/resultSearch/FilterSearchResult";
import Data from "../components/home/Data";
import MoreToLoveCard from "../components/home/MoreToLoveCard";
import { useLocation } from "react-router-dom";

function SearchResult() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const under = searchParams.get('under');
  console.log("under ", under);


  const { productItems } = Data;
  return (
    <section className="  pt-10 pb-32 bg-[#f6f9fc]">
      <div className="w-[84%]  m-auto ">
        <h1 className=" text-3xl">
          Showing results for <span className="font-bold">Phone case</span>
        </h1>
        <h6 className="text-gray-500 mt-6">We found 102 products</h6>
        <div className="flex justify-between mt-4">
          <FilterSearchResult />
          <div className="grid grid-cols-4 gap-4  ">
            {productItems.map((product, index) => (
              <MoreToLoveCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchResult;
