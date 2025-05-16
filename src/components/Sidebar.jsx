import React from "react";
import BtnPrimary from "./utils/BtnPrimary";
import { CiChat1, CiSettings } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <sidebar className="w-50 bg-white flex flex-col items-center py-12 px-6 truncate">
        <h1 className="text-4xl font-bold mb-6">Saynex</h1>
        <div>
          <BtnPrimary path="/" title="Chats">
            <CiChat1 />
          </BtnPrimary>
          <BtnPrimary path="/" title="Group">
            <GrGroup />
          </BtnPrimary>
          <BtnPrimary path="/" title="Contacts">
            <IoIosContact />
          </BtnPrimary>
        </div>
        <div className="mt-auto mb-2">
          <BtnPrimary path="/" title="Settings">
            <CiSettings />
          </BtnPrimary>
          <div className="py-1 px-1 text-black hover:text-white hover:bg-blue-400 truncate rounded-sm flex! items-center gap-3 transition-all">
            <img
              src="/Profile.jpg"
              alt="image"
              className="w-9 h-9 rounded-full"
            />
            <div>
              <h2 className="text-xl text-nowrap font-semibold ">Sakayet</h2>
              <p className="text-xs text-nowrap font-semibold ">Edit Profile</p>
            </div>
          </div>
        </div>
      </sidebar>
    </>
  );
};

export default Sidebar;

{
  /* <aside className="w-20 bg-white border-r flex flex-col items-center py-4">
  <h1 className="text-xl font-bold mb-6 rotate-[-90deg]">Chatt.</h1>
  
  <div className="mt-auto mb-2">
    <img
      src="https://via.placeholder.com/40"
      className="rounded-full"
      alt="profile"
    />
  </div>
</aside>; */
}
