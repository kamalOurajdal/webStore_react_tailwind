import React, { useState } from "react";
import { lists } from "./Data";

function ListsPopup({  onClose, openAddLisPopup }) {
    const closeAndOpenAddListPopup = () => {
        onClose();
        openAddLisPopup();
      };
      
  return (
    <>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-10 "></div>

          <div className="bg-white z-50 w-1/3 rounded-lg pb-4">
            <div className=" flex justify-between items-center border-b py-2 px-4">
              <h1 className=" font-semibold ">Move to another list</h1>
              <i
                className="fa-solid fa-xmark text-gray-400 cursor-pointer text-2xl"
                onClick={onClose}
              ></i>
            </div>

            <div className="space-y-2 h-52 overflow-y-auto px-4 ">
              <button className="text-center text-[#e94560] w-full  bg-white   border-b p-2 rounded cursor-pointer hover:scale-105 duration-500 ease-in-out "
              onClick={closeAndOpenAddListPopup}>
                <i className="fa-solid fa-circle-plus mr-1"></i>Add list
              </button>
                
              {lists.map((list, index) => {
                return (
                  <div key={index} className="bg-white text-sm flex justify-center items-center border-b p-1 text-center rounded cursor-pointer ">
                    
                      <h1>{list.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    </>
  );
}

export default ListsPopup;
