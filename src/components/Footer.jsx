import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0f3060] w-full pt-20 px-20 ">
      
      <div className="relative w-full  flex justify-center">
        <div className=" absolute -top-32  shadow-[rgba(0,_0,_0,_0.3)_4px_2px_10px] bg-white   w-2/3 flex justify-between items-center px-8 rounded-md py-6">
          <h1 className="font-bold text-2xl text-[#0f3060]" > Subscribe to our news</h1>
          <div className="flex justify-between items-center w-2/3">
            <input
              type="email"
              placeholder="Enter your email"
              className=" h-10 flex-grow rounded-full bg-gray-100 pl-5 focus:outline-none ml-4"
            />
            <button className="bg-red-500 rounded-full px-4 py-2 ml-6 font-medium text-white">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start text-gray-400">
        <div className="w-1/4">
          <h1 className="font-bold text-3xl text-[#e94560]">Kan9ala</h1>
          <p className="mt-8 text-justify">
            Where Style Meets Comfort. Discover fashion-forward clothing 
            and accessories that prioritize quality, affordability, and
            sustainability.  Elevate your wardrobe with Kan9ala today.
          </p>
          <div className=" flex justify-between mt-6">
            <button className="bg-[#c1cfda] p-3 rounded text-black font-medium bg-opacity-70">
              <i className="fa-brands fa-google-play mr-2"></i>
              <span>Google Play</span>
            </button>
            <button className="bg-[#c1cfda] p-3 rounded text-black font-medium bg-opacity-70">
              <i className="fa-brands fa-app-store-ios mr-2"></i>
              <span>App Store</span>
            </button>
          </div>
        </div>

        <div className="">
          <h2 className="text-white font-bold text-lg ">About Us</h2>
          <ul className="leading-8 pt-5">
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-white font-bold text-lg">Customer Care</h2>
          <ul className="leading-8 pt-5">
            <li>Help Center </li>
            <li>How to Buy </li>
            <li>Track Your Order </li>
            <li>Corporate & Bulk Purchasing </li>
            <li>Returns & Refunds </li>
          </ul>
        </div>
        <div className="box">
          <h2 className="text-white font-bold text-lg">Contact Us</h2>
          <ul className="leading-8 pt-5">
            <li>
              Amjdadar Ikniouen Tinghir,
              <br /> Morocco, Zip 45302{" "}
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i> Kan9ala.help@gmail.com
            </li>
            <li>
              <i className="fa-solid fa-phone"></i> +1 1123 456 780
            </li>
          </ul>
        </div>
      </div>
      <div className="relative flex py-5 items-center mt-6">
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="flex items-center space-x-6 text-gray-400 px-4">
          <i className="fab fa-facebook-f text-2xl"></i>
          <i className="fab fa-twitter text-2xl"></i>
          <i className="fab fa-instagram text-2xl"></i>
          <i className="fab fa-youtube text-2xl"></i>
        </div>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
    </footer>
  );
}

export default Footer;
