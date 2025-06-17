import React from "react";
import { CiChat1 } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userData = useSelector((state) => state.userData.user);
  return (
    <>
      <nav className="h-screen py-8 px-4 shadow-xl flex flex-col w-sm bg-white">
        <h1 className="text-4xl font-bold mx-auto">Saynex</h1>
        <div className="flex flex-col mt-20 gap-2">
          <Link
            to="/"
            className=" py-3 px-6 text-black hover:text-white hover:bg-blue-400 text-xl font-semibold font-workSans rounded-sm flex! items-center gap-3 transition-all "
          >
            <CiChat1 /> Chat
          </Link>
          <Link
            to="/group"
            className=" py-3 px-6 text-black hover:text-white hover:bg-blue-400 text-xl font-semibold font-workSans rounded-sm flex! items-center gap-3 transition-all "
          >
            <GrGroup /> Group
          </Link>
          <Link
            to="/contacts"
            className=" py-3 px-6 text-black hover:text-white hover:bg-blue-400 text-xl font-semibold font-workSans rounded-sm flex! items-center gap-3 transition-all "
          >
            <IoIosContact /> Contacts
          </Link>
        </div>
        <Link className="mt-auto mb-2">
          <div className="py-2 px-2 flex justify-between items-start group hover:bg-blue-400 duration-300 ease-in-out rounded-md">
            <div className="flex gap-3 items-center">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-blue-400 group-hover:border-white ">
                <img
                  src={userData?.photoURL || "/Profile.jpg"}
                  alt="PP image"
                  className="w-full object-cover h-full items-center"
                />
              </div>
              <div>
                <h3 className="font-inter font-semibold text-lg group-hover:text-white">
                  {userData?.displayName || "User Name"}
                  {/* Default Name */}
                </h3>
                <p className="font-inter font-normal text-sm group-hover:text-white">
                  Edit Profile
                </p>
              </div>
            </div>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
