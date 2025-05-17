import React from "react";
import { FaCircle } from "react-icons/fa"
import { HiDotsVertical, HiPhone, HiVideoCamera } from "react-icons/hi";
import { ImAttachment } from "react-icons/im"
import { IoSend } from "react-icons/io5"
import { PiImageLight } from "react-icons/pi"
import { Link } from "react-router-dom"

const Chatwindow = () => {
  return (
    <div className="flex flex-col h-full w-14/20 pt-12 justify-between bg-gray-100">
      <div className="flex items-center justify-between px-6 py-4 bg-gray-200 border-gray-700">
        <div className="flex space-x-6">
          <img src="/unnamed.jpg" alt="" className="w-12 rounded-full" />
          <div>
            <h2 className="text-xl font-semibold text-blue-600">
              ATM Sakayet Hossain
            </h2>
            <div className="flex items-center justify-start gap-2 text-green-400">
              <p className="text-xl">online</p>
              <span className="text-xs">
                <FaCircle />
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 text-blue-800 text-2xl">
          <HiPhone className="cursor-pointer hover:text-white" />
          <HiVideoCamera className="cursor-pointer hover:text-white" />
          <HiDotsVertical className="cursor-pointer hover:text-white" />
        </div>
      </div>
      <div className="flex items-center px-4 py-3 bg-gray-200 ">
        <div className="flex gap-2 text-xl">
          <Link>
            <PiImageLight />
          </Link>
          <Link className=" rotate-180">
            <ImAttachment />
          </Link>
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-transparent px-4 py-2 focus:outline-none "
        />
        <button className="text-blue-500 hover:text-white hover:bg-blue-500 text-2xl p-3 rounded-full">
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default Chatwindow;
