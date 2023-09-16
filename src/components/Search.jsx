import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

function Search() {
  window.addEventListener("scroll", function () {
    const search = this.document.querySelector("section");
    if (this.window.scrollY > 100) {
      search.classList.add("fixed", "top-0", "left-0", "shadow-lg", "z-50");
    } else {
      search.classList.remove("fixed", "top-0", "left-0", "shadow-lg", "z-50");
    }
  });

  return (
    <section
      className={` header w-full flex items-center justify-around py-4 bg-white`}
    >
      <h1 className="text-3xl font-bold">
        Kan<span className="text-[#e94560]">9ala</span>
      </h1>
      <div className="border-2 flex items-center rounded-full pl-4 w-1/2 ">
        <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
        <input
          type="text"
          name=""
          id=""
          placeholder="Type to search products..."
          className="  h-11 rounded-full px-4 focus:outline-none placeholder:text-sm w-full"
        />
      </div>

      <div className="  flex  items-center justify-between px-2  text-gray-500">
        <Link to={"/card"}>
          <div className="relative cursor-pointer">
            <i className="fa-solid fa-bag-shopping text-2xl "></i>
            <span className="absolute -right-2 -top-0 text-xs w-4 text-center  bg-red-500 rounded-full text-white font-semibold">
              0
            </span>
          </div>
        </Link>

        {/* <i className="fa-solid fa-user text-2xl"></i> */}
        <div className="flex justify-between space-x-6 ml-12">
          {/* buttons for signing and register */}
          <button className="text-sm font-semibold text-black hover:text-gray-700 border  px-3 py-[7px] rounded ">
            Sign in
          </button>
          <button className="text-sm font-semibold text-white bg-orange-400 px-3 py-[7px] rounded">
            Register
          </button>
        </div>
      </div>
    </section>
  );
}

export default Search;
