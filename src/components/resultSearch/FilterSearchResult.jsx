import React, { useState } from "react";
import ReactSlider from "react-slider";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { brandOptions, brandStyles, colourOptions, colourStyles } from "./DataFilter";

function FilterSearchResult() {
  const animatedComponents = makeAnimated();
  const Min = 0;
  const Max = 200;

  const [priceRange, setPriceRange] = useState([Min, Max]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  
  const handleChangeColor = (selectedOption) => {
    setSelectedColor(selectedOption);
  };
  const handleChangeBrand = (selectedBrand) => {
    setSelectedBrand(selectedBrand);
  };

  return (
    <nav className="spac">
      <div className="w-72 h-screen p-4">
        <div className="mt-10">
          <h6 className="text-gray-500 ">Price range:</h6>
          <div className="w-full flex  justify-between font-bold">
            <h1>Min : {priceRange[0]}</h1>
            <h1>Max : {priceRange[1]}</h1>
          </div>
          <ReactSlider
            className=" w-full mt-6 "
            thumbClassName="cursor-pointer w-5 h-5 border border-blue-500 border-2 bg-white rounded-full -top-[8px] outline-none"
            trackClassName="track"
            defaultValue={[20, 80]}
            renderTrack={(props, state) => (
              <div {...props} className={props.className} />
            )}
            renderThumb={(props, state) => (
              <div {...props} className={props.className} />
            )}
            pearling
            min={Min}
            max={Max}
            onChange={setPriceRange}
            minDistance={10}
          />
        </div>
        <div className="mt-12">
          <h1>Brand:</h1>
          <Select
            components={animatedComponents}
            onChange={handleChangeBrand}
            isMulti
            options={brandOptions}
            styles={brandStyles}
          />
        </div>
        <div className="">
          <h1 className="">Color:</h1>
          <Select
            className=""
            components={animatedComponents}
            value={selectedColor}
            onChange={handleChangeColor}
            options={colourOptions}
            styles={colourStyles}
            isMulti
          />
        </div>
      </div>
    </nav>
  );
}

export default FilterSearchResult;
