import React, { useState } from "react";
import Data from "../components/home/Data";
import LikedItem from "../components/favourites/LikedItem";
import AddListPopup from "../components/favourites/AddListPopup";
import { lists } from "../components/favourites/Data";

function Favourites() {
  const { productItems } = Data;
  const [showMoveToList, setShowMoveToList] = useState(false);
  const [showAddListPopup, setShowAddListPopup] = useState(false);

  const openMoveToList = () => {
    setShowMoveToList(true);
  };
  const closeMoveToList = () => {
    setShowMoveToList(false);
  };

  const openAddLisPopup = () => {
    setShowAddListPopup(true);
  };
  const closeAddListPopup = () => {
    setShowAddListPopup(false);
  };

  return (
    <section className="bg-[#f6f9fc] pb-32 pt-12">
      <div className="w-[84%] m-auto">
        <h1 className="text-2xl font-bold">Your favourites</h1>
        <div className="flex space-x-4 mt-4">
          <div className="w-1/4 h-fit p-4 text-center rounded-md">
            <h1 className="font-bold text-gray-600">My lists</h1>
            <hr />
            <div className="space-y-2 pt-4">
              {lists.map((list, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white shadow-md flex justify-between items-center border p-2 rounded cursor-pointer hover:scale-105 duration-500 ease-in-out "
                  >
                    <div className="">
                      <h1>{list.name}</h1>
                      <h6 className="text-xs text-gray-500">
                        {list.items} items
                      </h6>
                    </div>

                    <i className="fa-solid fa-trash-can cursor-pointer"></i>
                  </div>
                );
              })}
              <button
                className="text-center text-[#e94560] w-full  bg-white shadow-md  border p-2 rounded cursor-pointer hover:scale-105 duration-500 ease-in-out "
                onClick={openAddLisPopup}
              >
                <i className="fa-solid fa-circle-plus mr-1"></i>Add list
              </button>
              {showAddListPopup && <AddListPopup onClose={closeAddListPopup} />}
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-white rounded-md shadow-md  space-x-6 flex justify-between items-center border-b px-4 border-[#e4e4e4] py-4">
              <div
                className="flex items-center
                space-x-2"
              >
                <input
                  type="checkbox"
                  name="select-all"
                  id="select-all"
                  className="w-5 h-5"
                />
                <label htmlFor="select-all">Select all</label>
              </div>
              <h4>Home list</h4>
              <div className="flex items-center space-x-2">
                <p>Sort by:</p>
                <select name="sort" id="sort">
                  <option value="price">Price</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
            <div className="flex pt-4 h-screen overflow-auto">
              <div className="space-y-4 w-full">
                {productItems.map((product, index) => {
                  return (
                    <LikedItem
                      key={index}
                      product={product}
                      openMoveToList={openMoveToList}
                      closeMoveToList={closeMoveToList}
                      openAddLisPopup={openAddLisPopup}
                      showMoveToList={showMoveToList}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Favourites;
