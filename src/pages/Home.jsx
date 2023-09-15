import React from "react";
import Slider from "../components/home/Slider";
import Categories from "../components/home/Categories";
import SuperDeals from "../components/home/SuperDeals";
import Discounts from "../components/home/Discounts";

function Home() {
  return (
    <>
    <section className="m-auto w-[90%]">
        <div className="flex justify-between h-full w-full  ">
          <Categories />
          <Slider />
        </div>
        <SuperDeals/>
        <Discounts/>
      </section>
    
    </>
  );
}

export default Home;
