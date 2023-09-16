import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <section className="w-full shadow-md relative">
      <nav
        className="flex justify-end items-center h-16 bg-white text-black "
        role="navigation"
      >
        <div className="pr-8 md:block hidden">
          <Link to="/" className=" mx-4  hover:text-rose-500">
            Home
          </Link>
          <Link to="/about" className=" mx-4 hover:text-rose-500">
            About
          </Link>
          <Link to="/contact" className=" mx-4 hover:text-rose-500">
            Contact
          </Link>
          <Link to="/products" className=" mx-4 hover:text-rose-500">
            Products
          </Link>
          <Link to="/help" className=" mx-4 hover:text-rose-500">
            Help
          </Link>
          <Outlet />
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
