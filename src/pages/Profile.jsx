import React, { useState } from "react";
import profile_img from "../media/profile2.jpg";
import { Collapse } from "react-collapse";
import PersonalInfo from "../components/profile/PersonalInfo";
import ChangePassword from "../components/profile/ChangePassword";
import DeleteAccount from "../components/profile/DeleteAccount";

function Profile() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <section className=" pb-20 pt-20 bg-[#f6f9fc]">
      <div className="w-[90%] m-auto rounded-md flex justify-between">
        <div className="w-2/5 bg-white pb-6  flex flex-col h-fit">
          <img src={profile_img} alt="" className=" rounded-t-md" />
          <div className="px-4 leading-9 mt-6">
            <h3 className="font-bold text-2xl">
              Welcome to your Kan9ala account!
            </h3>
            This is your special place at Kan9ala where you can change your
            information.
          </div>
        </div>

        <div className="w-3/5 ml-10">
          <h1 className="font-semibold mb-4">Your profile</h1>
          <hr />
          <div
            className="flex items-center justify-between py-4 border-b cursor-pointer"
            onClick={() => toggle(1)}
          >
            <div className="flex items-center ">
              <i class="fa-solid fa-user mr-5 text-xl "></i>
              <div>
                <h1>kamal ourajdal</h1>
                <p className="text-xs">View and edit your information</p>
              </div>
            </div>
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <Collapse isOpened={open === 1}>
            <PersonalInfo />
          </Collapse>
          <div
            className="cursor-pointer flex items-center justify-between py-4 border-b"
            onClick={() => toggle(2)}
          >
            <div className="flex items-center">
              <i class="fa-solid fa-lock mr-5 text-xl"></i>
              <div>
                <h1>Change password</h1>
                <p className="text-xs">Require current password</p>
              </div>
            </div>
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <Collapse isOpened={open === 2}>
            <ChangePassword />
          </Collapse>
          <div
            className="cursor-pointer flex items-center justify-between py-4 border-b"
            onClick={() => toggle(3)}
          >
            <div className="flex items-center ">
              <i class="fa-solid fa-trash-can mr-5 text-xl"></i>
              <div>
                <h1>Delete account</h1>
                <p className="text-xs">Leave whenever you wish</p>
              </div>
            </div>
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <Collapse isOpened={open === 3}>
            <DeleteAccount />
          </Collapse>
        </div>
      </div>
    </section>
  );
}

export default Profile;
