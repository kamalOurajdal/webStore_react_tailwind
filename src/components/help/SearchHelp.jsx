import React from "react";

function SearchHelp() {
  return (
    <div className="flex justify-between px-20  pt-10 bg-gradient-to-b from-[#FFECEA] to-white">
      <div className="leading-10">
        <h1 className="text-3xl font-bold ">Hi,</h1>
        <h1>What can we help you with?</h1>
      </div>
      <div className="w-1/2">
        <div className="container_input flex items-center  h-11 rounded w-full bg-white bg-opacity-90">
          <input
            type="text"
            placeholder="Search for questions"
            className="w-full h-full px-5 outline-none bg-transparent placeholder:text-sm"
          />
          <i className="fa-solid fa-magnifying-glass  m-1 h-9 w-11 rounded flex items-center justify-center bg-[#FF472E] text-white cursor-pointer "></i>
        </div>
        <div>
          <div className="flex justify-start text-xs mt-2 space-x-8 text-gray-400 ">
            <h1 className="hover:text-gray-800 cursor-pointer transform duration-300 ease-in-out">not received goods</h1>
            <h1 className="hover:text-gray-800 cursor-pointer transform duration-300 ease-in-out">not satisfied with product</h1>
            <h1 className="hover:text-gray-800 cursor-pointer transform duration-300 ease-in-out">How to solve payment issues?</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHelp;
