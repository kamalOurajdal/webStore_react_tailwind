import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
      className={` header w-full flex flex-col items-center justify-around px-16 pt-4 pb-2 bg-white`}
    >
      <div className="w-full flex items-center justify-around ">
        <h1 className="text-3xl font-bold">
          Kan<span className="text-[#e94560]">9ala</span>
        </h1>
        <div className="flex-grow mx-12 ">
          <div className=" flex items-center bg-[#F5F5F5] rounded-full pl-4 w-full ">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
            <input
              type="text"
              name=""
              id=""
              placeholder="Type to search products..."
              className="w-full h-11 bg-transparent rounded-full px-4 focus:outline-none placeholder:text-sm "
            />
          </div>
        </div>

        <div className="  flex  items-center justify-between space-x-8 text-gray-500">
          <Link to={"/card"}>
            <div className="relative cursor-pointer">
              <i class="fa-solid fa-cart-shopping text-xl"></i>
              <span className="absolute -right-2 -top-1 text-[9px] w-4 h-4 flex items-center justify-center  bg-[#e94560] rounded-full text-white font-semibold">
                2
              </span>
            </div>
          </Link>
          <Link to={"/wish_list"}><i class="fa-regular fa-heart text-xl cursor-pointer"></i></Link>
          <Link to={"profile"}><i class="fa-regular fa-user text-xl cursor-pointer"></i></Link>
          
        </div>
      </div>
      <div>
        <ul className="flex items-center space-x-6 text-gray-500 text-xs mt-2 ml-4">
          <li className="cursor-pointer hover:text-[#e94560] ">iphone case</li>
          <li className="cursor-pointer hover:text-[#e94560]">watch for men</li>
          <li className="cursor-pointer hover:text-[#e94560]">
            sunglasses women
          </li>
          <li className="cursor-pointer hover:text-[#e94560]">
            makeup brushes
          </li>
          <li className="cursor-pointer hover:text-[#e94560]">massage gun</li>
        </ul>
      </div>
    </section>
  );
}

export default Search;
