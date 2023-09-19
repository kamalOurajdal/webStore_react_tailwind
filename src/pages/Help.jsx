import React from "react";
import SearchHelp from "../components/help/SearchHelp";
import TopicsHelp from "../components/help/TopicsHelp";
import ContactSupport from "../components/help/ContactSupport";

function Help() {
  return (
    <section className="w-full  pb-32  ">
      <SearchHelp />
      <div className="px-20  pt-10 ">
        <TopicsHelp />
        <ContactSupport />
      </div>
    </section>
  );
}

export default Help;
