import React, { useEffect, useState } from "react";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";

const UserList = ({ data }) => {
  const userInfo = useSelector((state) => state.userData.user);
  const [friendList, setFriendList] = useState([]);
  const db = getDatabase();

  const handleAdd = () => {
    set(push(ref(db, 'friendList')), {
      creatorName: userInfo.displayName,
      creatorID: userInfo.uid,
      creatorAvatar: userInfo.photoURL,
      participentName: data.username,
      participentID: data.id,
      participentAvatar: data.profile_picture,
      lastMessage: "",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
  });
  };
  useEffect(()=> {
    onValue(ref(db, "friendList"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val().creatorID + item.val().participentID);
      });
      setFriendList(arr);
    });
  },[]);

  return (
    <div className="py-2 px-2 flex justify-between items-center group hover:bg-blue-400 duration-300 ease-in-out rounded-md">
      <div className="flex gap-3 items-center">
        <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-blue-400 group-hover:border-white ">
          <img src={data.profile_picture} alt="PP image" className="w-full" />
        </div>
        <div>
          <h3 className="font-inter font-semibold text-lg group-hover:text-white">
            {data.username}
          </h3>
        </div>
      </div>
      {
        friendList.includes(userInfo.uid + data.id) || friendList.includes(data.id + userInfo.uid) ? (
          <button disabled className="px-6 py-2 rounded-lg bg-blue-400 font-inter font-normal text-lg group-hover:text-white group-hover:bg-green-400">
            Friend
          </button>
        ) : (
          <button onClick={handleAdd} className="px-6 py-2 rounded-lg bg-blue-400 font-inter font-normal text-lg group-hover:text-white group-hover:bg-green-400">
            Add
          </button>
        )
      }
    </div>
  );
};

export default UserList;
