import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  const productDropdown = (
    <div
      className={`h-0 py-0 group-hover:block group-hover:h-20 top-5 transform-w duration-500 ease-in-out 
      overflow-hidden  absolute z-40 text-xs bg-white   w-48  rounded-lg shadow-md text-gray-600`}
    >
      <div className="w-full space-y-4 pt-4">
        <Link
          to="/products/new"
          className="flex items-center justify-between px-4  hover:text-rose-500"
        >
          New products <i className="fa-solid fa-caret-right"></i>
        </Link>
        <Link
          to="/products/top-sellers"
          className="flex items-center justify-between px-4  hover:text-rose-500"
        >
          Our top sellers <i className="fa-solid fa-caret-right"></i>
        </Link>
      </div>
    </div>
  );
  const dealDropdown = (
    <div
      className={`h-0 py-0 group-hover:block group-hover:h-[140px] 
      top-5 transform-w duration-500 ease-in-out overflow-hidden 
       absolute z-40 text-xs  bg-white   w-48  rounded-lg shadow-md text-gray-600`}
    >
      <div className="w-full space-y-4 pt-4 ">
        <Link
          to="/deals/lowest"
          className="flex items-center justify-between px-4  hover:text-rose-500"
        >
          The Lowest price <i className="fa-solid fa-caret-right"></i>
        </Link>
        <Link
          to="/deaks/under?5"
          className="flex items-center justify-between px-4  hover:text-rose-500"
        >
          Solutions under 5$ <i className="fa-solid fa-caret-right"></i>
        </Link>
        <Link
          to="/deaks/under?7.5"
          className="flex items-center justify-between px-4  hover:text-rose-500"
        >
          Solutions under 7.5$ <i className="fa-solid fa-caret-right"></i>
        </Link>
        <Link
          to="/deaks/under?10"
          className="flex items-center justify-between px-4  hover:text-rose-500"
        >
          Solutions under 10$ <i className="fa-solid fa-caret-right"></i>
        </Link>
      </div>
    </div>
  );

  return (
    <nav className="w-full shadow-md relative h-14 text-sm flex flex-col justify-center ">
      <div className="w-[95%] flex justify-end items-center  text-black">
        <Link to="/" className="mx-4 hover:text-rose-500">
          Home
        </Link>
        <div className="relative group">
          <p className="mx-4 group-hover:text-rose-500 cursor-pointer ">
            Products{" "}
            <i
              className={`group-hover:rotate-180 fa-solid fa-caret-up ml-1 transform duration-300 ease-in-out`}
            ></i>
          </p>
          {productDropdown}
        </div>
        <div className="relative group">
          <p className="mx-4 group-hover:text-rose-500 cursor-pointer ">
            Deals{" "}
            <i
              className={`group-hover:rotate-180 fa-solid fa-caret-up ml-1 transform duration-300 ease-in-out`}
            ></i>
          </p>
          {dealDropdown}
        </div>
        <Link to="/about" className="mx-4 hover:text-rose-500">
          About
        </Link>
        <Link to="/contact" className="mx-4 hover:text-rose-500">
          Contact
        </Link>
        <Link to="/help" className="ml-4 hover:text-rose-500">
          Help Center
        </Link>
        <Outlet />
      </div>
    </nav>
  );
}

export default Navbar;
