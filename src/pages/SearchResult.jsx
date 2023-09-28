import React, { useState } from "react";
import FilterSearchResult from "../components/resultSearch/FilterSearchResult";
function SearchResult() {


  return (
    <section className="  pt-10 pb-32">
      <div className="w-[84%]  m-auto ">
        <h1 className=" text-3xl">
          Showing results for <span className="font-bold">Phone case</span>
        </h1>
        <h6 className="text-gray-500 mt-6">We found 102 products</h6>
        <div className="flex ">
          <FilterSearchResult/>
          <div className="flex-grow h-screen bg-green-200">d</div>
        </div>
      </div>
    </section>
  );
}

export default SearchResult;
