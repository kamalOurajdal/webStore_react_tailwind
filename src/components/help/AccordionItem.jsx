import React from "react";
import { Collapse } from "react-collapse";

function AccordionItem({ open, toggle, title, desc }) {
  return (
    <div className="">
      <div
        className=" p-4 rounded-md bg-[#f6f9fc] cursor-pointer flex  items-center shadow-md"
        onClick={toggle}
      >
        <i
          className={`fa-solid fa-chevron-down transform duration-500 ease-in-out ${
            open ? "rotate-180" : ""
          }`}
        ></i>
        <h1 className="ml-2">{title}</h1>
      </div>
      <Collapse isOpened={open} style={""}>
        <div className="bg-[#f6f9fc] px-20 pb-10">
          <p>{desc}</p>
        </div>
      </Collapse>
    </div>
  );
}

export default AccordionItem;
