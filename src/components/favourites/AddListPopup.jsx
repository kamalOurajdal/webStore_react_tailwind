import React from "react";

function AddListPopup({ onClose}) {
  return (
    <>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50 "></div>

          <div className="bg-white z-50 w-1/3 rounded-lg px-4 pb-4">
            <div className=" rounded-lg ">
              <div className="flex justify-between items-center">
                <h1 className=" font-semibold">Add to list</h1>
                <i
                  className="fa-solid text-gray-400 fa-xmark cursor-pointer text-2xl"
                  onClick={onClose}
                ></i>
              </div>
              <hr />
            </div>
            <div className=" mt-4 flex flex-col space-y-2">
              <div className="text-left">
                <label className="block text-sm ml-4">List name</label>
                <input
                  type="text"
                  className="pl-4 w-full border border-gray-300 p-2 rounded-md focus:outline-none"
                />
                <h6 className="text-xs text-right mt-1">0/50</h6>
                
              </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={onClose}
                >
                  save
                </button>
            </div>
          </div>
        </div>
    </>
  );
}

export default AddListPopup;
