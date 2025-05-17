import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai"
import { CiSearch } from "react-icons/ci"
import { Link } from "react-router-dom"
import UserChat from "./UserChat"

const ChatList = () => {
  return (
    <>
      <div className="w-106 border-r flex flex-col pt-12 px-5 truncate">
        <div className="flex justify-between items-center pb-4 ">
          <h2 className="text-2xl font-semibold">Chats</h2>
          <div className="flex items-center text-2xl">
            <Link className="text-gray-800 py-3 px-3 rounded hover:bg-blue-400 hover:text-white ">
              <AiOutlineUserAdd />
            </Link>
            <Link className="text-gray-800 py-3 px-3 rounded hover:bg-blue-400 hover:text-white ">
              <AiOutlineUserAdd />
            </Link>
          </div>
        </div>
        <div className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm w-full">
          <CiSearch className="text-gray-500 text-[20px] mr-2" />
          <input
            type="text"
            placeholder="Search"
            // className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
          />
        </div>
        <div className="pt-2 overflow-y-auto h-screen">
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
          <UserChat path="/" image="/meherun.png" name="Meherunnesa">
            Miss you.....
          </UserChat>
          <UserChat path="/" image="/MG_0197.jpg" name="ATM Sakayet Hossain">
            miss you.....
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            bye
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            hu ru ru ru
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
        </div>
      </div>
    </>
  );
};

export default ChatList;
