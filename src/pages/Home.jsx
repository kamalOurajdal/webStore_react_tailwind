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
