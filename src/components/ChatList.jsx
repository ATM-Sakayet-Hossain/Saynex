import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai"
import { Link } from "react-router-dom"

const ChatList = () => {
  return (
    <>
      <div className="w-90 border-r flex flex-col">
        <div className="py-6 px-4 flex justify-between items-center ">
          <h2 className="text-lg font-semibold">Chats</h2>
          <ul className="flex items-center gap-5">
            <li>
              <Link className="text-gray-800 px-3 py-1 rounded">
                <AiOutlineUserAdd />
              </Link>
            </li>
            <li>
              <Link className="text-gray-800 px-3 py-1 rounded">
                <AiOutlineUserAdd />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ChatList;

{
  /* 
      <div className="w-80 border-r flex flex-col">
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Chat</h2>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">
            Add
          </button>
        </div>
        <div className="px-4 mb-2">
          <div className="flex items-center bg-gray-100 rounded px-2 py-1">
            <HiOutlineSearch />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none ml-2 w-full"
            />
          </div>
        </div>
        <div className="overflow-y-auto flex-1">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src="https://via.placeholder.com/40"
                alt=""
                className="rounded-full w-10 h-10"
              />
              <div className="flex-1">
                <h4 className="font-medium text-sm">User {i + 1}</h4>
                <p className="text-xs text-gray-500">Last message preview...</p>
              </div>
              <span className="text-xs text-gray-400">10:3{i} PM</span>
            </div>
          ))}
        </div>
      </div> */
}
