import React, { useState, useEffect, useRef } from "react";
import store_logo from "../media/store_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
      className={` header w-full flex items-center justify-around py-3 bg-white`}
    >
      <h1>
        <span></span>
      </h1>
      <div className="border flex items-center rounded-full pl-4 w-1/2">
        <FontAwesomeIcon
          icon={faSearch}
          className="rounded-full h-5 cursor-pointer text-gray-600"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Type to search products..."
          className="  h-9 rounded-full px-4 focus:outline-none"
        />
      </div>

      <div className="w-28 flex items-center justify-between">
        <div className="relative">
          <FontAwesomeIcon
            icon={faShoppingBag}
            className="rounded-full h-7 cursor-pointer "
          />
          <span className="absolute -right-2 -top-1 text-sm w-5 text-center bg-red-500 rounded-full text-white">
            0
          </span>
        </div>

        <FontAwesomeIcon
          icon={faUser}
          className="rounded-full h-7 cursor-pointer "
        />
      </div>
    </section>
  );
}

export default Search;
