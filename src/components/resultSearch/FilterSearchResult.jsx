import React, { useState } from "react";
import ReactSlider from "react-slider";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  brandOptions,
  brandStyles,
  colourOptions,
  colourStyles,
  sortByOptions,
} from "./DataFilter";

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

  const handleChangePrice =(e) =>{
    /* check witch value is changing */
    const name = e.target.name;
    if(name ==="min"){
      e.target.value > 0 ? setPriceRange([e.target.value, priceRange[1]]) : setPriceRange(["", priceRange])
    }
    else{
      e.target.value > 0 ? setPriceRange([priceRange[0], e.target.value]) : setPriceRange([priceRange[0], ""])
    }
  }

  return (
    <nav className=" bg-white rounded-md shadow-md border">
      <div className="w-72 p-4 ">
        <div>
          <h1 className="text-lg font-semibold text-gray-500">
            {" "}
            <i className="fa-solid fa-filter text-sm"></i> Filters
          </h1>
          <hr />
          {/* sort by */}
          <div className="mt-4">
            <h1 className="font-bold">Sort by:</h1>
            <div className="flex flex-col">
              {sortByOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center cursor-pointer mt-2 border px-4 h-9 rounded hover:bg-blue-100"
                >
                  {option.value}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h6 className="font-semibold">Price range:</h6>
          <div className="w-full flex  justify-between ">
            <label htmlFor="min">
              Min:
              <input
                type="number"
                id="min"
                name="min"
                className="w-16 px-2 outline-none h-8 border  rounded-med"
                onChange={handleChangePrice}
                value={priceRange[0]}
              />
            </label>
            <label htmlFor="max" className="">
              Max:
              <input
                type="number"
                id="max"
                name="max"
                className="w-16 px-2 outline-none h-8 border rounded-med"
                onChange={handleChangePrice}
                value={priceRange[1]}
              />
            </label>
          </div>
          <ReactSlider
            className=" w-full mt-6 "
            thumbClassName="cursor-pointer w-4 h-4 border border-[#e94560] border-2 bg-[#e94560] rounded-full -top-[6px] outline-none"
            trackClassName="track"
            defaultValue={[20, 80]}
            value={priceRange}
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
        <div className="mt-16">
          <h1>Brand:</h1>
          <Select
            components={animatedComponents}
            onChange={handleChangeBrand}
            isMulti
            options={brandOptions}
            styles={brandStyles}
          />
        </div>
        <div className="mt-2">
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
