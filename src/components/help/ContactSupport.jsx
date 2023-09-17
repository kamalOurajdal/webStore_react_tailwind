import React from "react";

function ContactSupport() {
  return (
    <div className=" m-auto flex flex-col items-center">
        <div class=" flex  items-center  w-1/2">
          <div class="flex-grow border-t  border-gray-300"></div>
          <h1 className="font-bold text-xl mx-4 text-gray-500">Need more help</h1>
          <div class="flex-grow border-t  border-gray-300"></div>
        </div>
      <div className="w-1/2">
        <form action="" className="w-full mt-10 ">
          <div className="relative ">
            <input
              type="email"
              name="email"
              className="px-4 shadow-md bg-white peer  border-b outline-none w-full  h-12 rounded placeholder:text-center"
              placeholder=" "
            />
            <label
              for="email"
              className="
              absolute 
              left-4 
              -top-5 
             peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:top-2
                peer-focus:-top-6 
                peer-focus:text-gray-600
                
              pointer-events-none
              transition-all transform ease-out"
            >
              Email
            </label>
          </div>

          <div className="mt-10 relative">
            <textarea
              type="textarea"
              name="problem"
              className="px-4 peer bg-white border-b outline-none w-full  h-40 shadow-md placeholder:text-sm "
              placeholder=" "
            />
            <label
              for="problem"
              className="
              absolute 
              left-4
              -top-5 
             peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:top-2
                peer-focus:-top-6 
                peer-focus:text-gray-600
                
                pointer-events-none
              transition-all transform ease-out"
            >
              Provide details about your issue here.
            </label>
          </div>
          <button
            type="submit"
            className="font-bold  bg-[#FF472E] text-white w-40 rounded-xl mt-5 py-2 hover:bg-[#EC5B6A] transform duration-500 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSupport;