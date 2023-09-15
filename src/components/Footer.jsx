import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0f3060] w-full pt-20 pb-4 px-20 mt-20 ">
      <div className="relative w-full  flex justify-center">
        <div className=" absolute -top-32 shadow-xl bg-[#c1cfda]  w-2/3 flex justify-between items-center px-8 rounded-md py-6">
          <h1 className="font-bold text-2xl"> Subscribe to our news</h1>
          <div className="flex justify-between items-center w-2/3">
            <input
              type="email"
              placeholder="Enter your email"
              className=" h-10 flex-grow rounded-full pl-5 focus:outline-none ml-4"
            />
            <button className="bg-[#e94560] rounded-xl p-3 ml-6 font-medium">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start text-gray-400">
        <div className="">
          <h1 className="font-bold text-3xl text-[#e94560]">Kan9ala</h1>
          <p className="mt-8">
            Where Style Meets Comfort. Discover fashion-forward clothing <br />{" "}
            and accessories that prioritize quality, affordability, and
            sustainability. <br />
            Elevate your wardrobe with Kan9ala today.
          </p>
          <div className=" flex justify-between mt-6">
            <button className="bg-[#c1cfda] p-3 rounded text-black font-medium bg-opacity-70">
              <i class="fa-brands fa-google-play mr-2"></i>
              <span>Google Play</span>
            </button>
            <button className="bg-[#c1cfda] p-3 rounded text-black font-medium bg-opacity-70">
              <i class="fa-brands fa-app-store-ios mr-2"></i>
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
              <i class="fa-solid fa-envelope"></i> Kan9ala.help@gmail.com
            </li>
            <li>
              <i class="fa-solid fa-phone"></i> +1 1123 456 780
            </li>
          </ul>
        </div>
      </div>
      <div class="relative flex py-5 items-center mt-6">
        <div class="flex-grow border-t border-gray-400"></div>
        <div className="flex items-center space-x-6 text-gray-400 px-4">
          <i className="fab fa-facebook-f text-2xl"></i>
          <i className="fab fa-twitter text-2xl"></i>
          <i className="fab fa-instagram text-2xl"></i>
          <i className="fab fa-youtube text-2xl"></i>
        </div>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
    </footer>
  );
}

export default Footer;
