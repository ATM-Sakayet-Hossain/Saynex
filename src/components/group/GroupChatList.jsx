import React from 'react';
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import GroupChatItem from './GroupChatItem';
import { GrGroup } from 'react-icons/gr';

const GroupChatList = () => {
      return (
        <>
          <div className="w-md flex flex-col pt-12 pl-5 h-screen bg- truncate">
            <div>
              <div className="flex justify-between items-center pb-4 pr-4">
                <h2 className="text-2xl font-semibold">Chats with Group</h2>
                <button className="text-gray-800 text-2xl py-3 px-3 rounded hover:bg-blue-400 hover:text-white ">
                  <GrGroup />
                </button>
                <button className="text-gray-800 text-2xl py-3 px-3 rounded hover:bg-blue-400 hover:text-white ">
                  <AiOutlineUsergroupAdd />
                </button>
              </div>
              <div className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm w-full">
                <CiSearch className="text-gray-500 text-[20px] mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
                />
              </div>
            </div>
            <div className="pt-2 mt-2 h-full overflow-y-auto scrollbar-none">
                <GroupChatItem />
            </div>
          </div>
        </>
      );
    };

export default GroupChatList