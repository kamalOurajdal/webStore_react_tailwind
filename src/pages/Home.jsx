import React from "react";
import Slider from "../components/home/Slider";
import Categories from "../components/home/Categories";
import SuperDeals from "../components/home/SuperDeals";
import Discounts from "../components/home/Discounts";
import MoreToLove from "../components/home/MoreToLove";
import TrustInfo from "../components/home/TrustInfo";

function Home() {
  return (
    <section className="">
      <div className="flex flex-col items-center text-3xl fixed right-2 bottom-32 space-y-4">
        <i className="fa-brands fa-facebook text-[#1877F2]"></i>
        <i className="fa-brands fa-twitter text-[#1DA1F2]"></i>
        <i className="fa-brands fa-pinterest text-[#BD081C]"></i>
        <i className="fa-brands fa-linkedin text-[#0A66C2]"></i>
      </div>
      <div className="m-auto w-[90%] flex justify-between h-full   bg-white">
        <Categories />
        <Slider />
      </div>
      <div className="bg-[#f6f9fc] pb-28">
        <div className="bg-[#f6f9fc] m-auto w-[90%]">
          <SuperDeals />
          <Discounts />
          <MoreToLove />
          <TrustInfo />
        </div>
      </div>
    </section>
  );
}

export default Home;
