import React from "react";
import Slider from "../components/home/Slider";
import Categories from "../components/home/Categories";
import SuperDeals from "../components/home/SuperDeals";
import Discounts from "../components/home/Discounts";
import MoreToLove from "../components/home/MoreToLove";

function Home() {
  return (
    <>
    <section className="m-auto w-[90%] bg-[#f6f9fc]">
        <div className="flex justify-between h-full w-full  ">
          <Categories />
          <Slider />
        </div>
        <SuperDeals/>
        <Discounts/>
        <MoreToLove/>
      </section>
    
    </>
  );
}

export default Home;
