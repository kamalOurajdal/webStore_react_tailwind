import React from 'react'
import SearchHelp from '../components/help/SearchHelp'
import TopicsHelp from '../components/help/TopicsHelp'
import ContactSupport from '../components/help/ContactSupport'

function Help() {
  return (
    <section  className="w-full  pb-32  px-20  pt-10 bg-gradient-to-b from-orange-100 to-[#f6f9fc]">
        <SearchHelp/>
        <TopicsHelp/>
        <ContactSupport/>
    </section>
  )
}

export default Help
