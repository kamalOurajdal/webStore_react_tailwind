import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <section className='w-full shadow-md relative'>
      <nav className='flex justify-end items-center h-16 bg-white text-black relative shadow-sm font-mono' role='navigation'>
       
          <FontAwesomeIcon
            icon={showNavLinks ? faClose : faBars }
            className='px-4 cursor-pointer md:hidden' onClick={toggleNavLinks}/>
        
        <div className={`md:block  ${showNavLinks ? '' : 'hidden'}`}>
          <div className=" md:hidden bg -white w-48 py-4 absolute right-0 top-16 shadow-lg z-10">
            <Link to="/" className='block mx-4 px-2 hover:text-rose-500'>Home</Link>
            <Link to="/about" className='block mx-4'>About</Link>
            <Link to="/contact" className='block mx-4'>Contact</Link>
            <Link to="/products" className='block mx-4'>Products</Link>
            <Outlet />
          </div>
          <div className="pr-8 md:block hidden">
            <Link to="/" className=' mx-4 px-2 hover:text-rose-500'>Home</Link>
            <Link to="/about" className=' mx-4'>About</Link>
            <Link to="/contact" className=' mx-4'>Contact</Link>
            <Link to="/products" className=' mx-4'>Products</Link>
            <Outlet />
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
