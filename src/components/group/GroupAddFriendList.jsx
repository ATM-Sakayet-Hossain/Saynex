import { getDatabase, onValue, push, ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";

const GroupAddFriendList = ({ name, avatar, id, groupData }) => {
  const [groupMember, setGroupMember] = useState([]);
  const db = getDatabase();
  const handelAddMember = () => {
    set(push(ref(db, "groupMember")), { // "groupMember/" + groupData.id
      gorupID: groupData.id,
      memberID: id,
      memberName: name,
      creatorId: groupData.creatorId,
      memberAvatar: avatar,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  };
  useEffect(() => {
    onValue(ref(db, "groupMember"), (snapshot) => { //"groupMember/" + groupData.id
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val().memberID);
      });
      setGroupMember(arr);
    });
  }, []);

  const isAdded = groupMember.includes(id);
  if (isAdded) return null;

  return (
    <div className="py-2 px-2 flex justify-between items-center group hover:bg-blue-400 duration-300 ease-in-out rounded-md">
      <div className="flex gap-3 items-center">
        <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-blue-400 group-hover:border-white ">
          <img src={avatar} alt="PP image" className="w-full" />
        </div>
        <div>
          <h3 className="font-inter font-semibold text-lg group-hover:text-white">
            {name}
          </h3>
        </div>
      </div>
      <button
        onClick={handelAddMember}
        className="px-6 py-2 rounded-lg bg-blue-400 font-inter font-normal text-lg group-hover:text-white group-hover:bg-green-400"
      >
        Add
      </button>
    </div>
  );
};

export default GroupAddFriendList;