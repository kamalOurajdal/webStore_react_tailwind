import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const toggleShowNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  const productDropdown = (
    <div className={`${showNavLinks ? "h-[180px]":"h-0  py-0"} py-2 top-8 transform-w duration-500 ease-in-out overflow-hidden  absolute z-40 text-sm  bg-white  space-y-4 w-48  rounded-lg shadow-md text-gray-600`}>
      <Link
        to="/products/new"
        className="flex items-center justify-between px-4  hover:text-rose-500"
      >
        New products <i class="fa-solid fa-caret-right"></i>
      </Link>
      <Link
        to="/products/top-sellers"
        className="flex items-center justify-between px-4  hover:text-rose-500"
      >
        Our top sellers <i class="fa-solid fa-caret-right"></i>
      </Link>
      <Link
        to="/products/limited-edition"
        className="flex items-center justify-between px-4  hover:text-rose-500"
      >
        Limited edition <i class="fa-solid fa-caret-right"></i>
      </Link>
      <Link
        to="/products/last-chance"
        className="flex items-center justify-between px-4  hover:text-rose-500"
      >
        Last chance to buy <i class="fa-solid fa-caret-right"></i>
      </Link>
      <Link
        to="/products/trending"
        className="flex items-center justify-between px-4  hover:text-rose-500"
      >
        Trending <i class="fa-solid fa-caret-right"></i>
      </Link>
    </div>
  );

  return (
    <nav className="w-full shadow-md relative">
      <div className="mr-8 flex justify-end items-center h-16 bg-white text-black">
        <Link to="/" className="mx-4 hover:text-rose-500">
          Home
        </Link>
        <div className="relative " onClick={() => toggleShowNavLinks()}> 
          <Link to="/" className="mx-4 hover:text-rose-500 ">
            Products <i class={`${showNavLinks ? "rotate-180" : ""} fa-solid fa-caret-up ml-1 transform duration-300 ease-in-out`}></i>
          </Link>
              {productDropdown}
        </div>
        <Link to="/about" className="mx-4 hover:text-rose-500">
          About
        </Link>
        <Link to="/contact" className="mx-4 hover:text-rose-500">
          Contact
        </Link>
        <Link to="/help" className="mx-4 hover:text-rose-500">
          Help
        </Link>
        <Outlet />
      </div>
    </nav>
  );
}

export default Navbar;
