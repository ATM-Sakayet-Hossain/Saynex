import { getDatabase, ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import UserChat from "./UserChat";
import UserList from "./UserList";

const ChatList = () => {
  const db = getDatabase();
  const [modal, setModal] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const arr =[];
    onValue(ref(db, "users/"), (snapshot) => {
      snapshot.forEach((item) => {
        arr.push({...item.val(), id: item.key});
      });
      setUserList(arr);
    });
  });
  console.log("userList", userList);
  
  return (
    <>
      <div className="w-xl flex flex-col pt-12 pl-5 truncate">
        <div>
          <div className="flex justify-between items-center pb-4 pr-4">
            <h2 className="text-2xl font-semibold">Chats</h2>
            <button
              onClick={() => setModal(true)}
              className="text-gray-800 text-2xl py-3 px-3 rounded hover:bg-blue-400 hover:text-white "
            >
              <AiOutlineUserAdd />
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
        <div className="pt-2 overflow-y-auto mt-2 h-screen scrollbar-none">
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            Love you.....
          </UserChat>
          <UserChat path="/" image="/MG_0197.jpg" name="ATM Sakayet Hossain">
            miss you.....
          </UserChat>
          <UserChat path="/" image="/unnamed.jpg" name="ATM Sakayet Hossain">
            bye
          </UserChat>
        </div>
        {modal && (
          <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full z-50 bg-[#dae1efb5] ">
            <div className="bg-white p-4 rounded-lg shadow-lg w-100 h-2/3 overflow-y-auto scrollbar-hide">
              <div className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm w-full">
                <CiSearch className="text-gray-500 text-[20px] mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
                />
              </div>
              <div>
                <UserList />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatList;
