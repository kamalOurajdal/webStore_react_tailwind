import React from "react";
import AboutCard from "../components/about/AboutCard";
import imag from "../media/about_us.jpg"

function About() {

  const data = [
    {
      title: "About Us",
      image: require("../media/about.jpg"),
      desc: `
      Kan9ala is Morocco's top online shopping platform, 
      offering a superior shopping experience across various 
      categories like fashion, electronics, home appliances, 
      books, sports gear, groceries, and more. We consistently 
      aim to enhance your shopping with unbeatable deals and discounts.`,
    },
    {
      title: "Exceptional Service",
      image: require("../media/service.jpg"),
      desc: `Your satisfaction is at the heart of our vision. 
      We're dedicated to providing a seamless and secure shopping 
      experience. From the moment you browse our platform to the 
      swift delivery of your order, we're here to exceed your 
      expectations at every step.`,
    },
    {
      title: "Community and Sustainability",
      image: require("../media/community.jpg"),
      desc: `Our vision extends beyond commerce.
       We aim to build a vibrant online community, fostering connections 
       among shoppers, brands, and local businesses. Additionally, 
       we are dedicated to sustainable practices, promoting eco-friendly
        products and packaging to create a better tomorrow.`,
    },


  ]

  return (
    <div className="bg-[#f6f9fc]">
      <div className="w-[90%]  m-auto pb-40 py-10 px-2 ">
        <h1 className="text-3xl font-bold mb-8">This is Kan<span className="text-[#e94560]">9ala</span> </h1>
        <p className="leading-8 ">
          Our vision is to create a better everyday life for the many people.
          Here you can discover what this means and find out<br/> who we are, what we
          do and what we’re working towards.
        </p>
        <div className="grid grid-cols-3 gap-6 mt-14">
          {data.map((item, index) => (
            <AboutCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
