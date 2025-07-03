import { getDatabase, ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import UserChat from "./UserChat";
import UserList from "./UserList";

const ChatList = () => {
  const db = getDatabase();
  const [modal, setModal] = useState(false);
  const [userList, setUserList] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const userInfo = useSelector((state) => state.userData.user);

  useEffect(() => {
    let arr = [];
    onValue(ref(db, "users/"), (snapshot) => {
      snapshot.forEach((items) => {
        if (items.key !== userInfo.uid) {
          arr.push({ ...items.val(), id: items.key });
        }
      });
      setUserList(arr);
    });
  }, [db, userInfo.uid]);
  window.addEventListener("mousedown", (e) => {
    if (modal && !e.target.closest(".bg-white")) {
      setModal(false);
    }
  });
  useEffect(() => {
    onValue(ref(db, "friendList"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if(item.val().participentID === userInfo.uid || item.val().creatorID === userInfo.uid ){
          arr.push({...item.val(), id: item.key});
        }
      });
      setFriendList(arr);
    });
  }, []);

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
          {
            friendList.map((item) =>  item.creatorID == userInfo.uid ? (
              <UserChat
                key={item.id}
                path={item.participentID}
                image={item.participentAvatar}
                name={item.participentName}
              >
                {item.participentName} is now your friend.
              </UserChat>
            )
            : (
              <UserChat
                key={item.id}
                path={item.creatorID}
                image={item.creatorAvatar}
                name={item.creatorName}
              >
                {item.creatorName} is now your friend.
              </UserChat>
            ))
          }
        </div>
        {modal && (
          <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full z-50 bg-[#dae1efb5] ">
            <div className="bg-white p-4 rounded-lg shadow-lg h-6/10 overflow-hidden">
              <div className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 mb-4 shadow-sm w-full">
                <CiSearch className="text-gray-500 text-[20px] mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
                />
              </div>
              <div className="w-sm h-full overflow-y-auto scrollbar-hide">
                {/* {userList.map((item) => (
                  <UserList key={item.id} data={item} />
                ))} */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatList;
