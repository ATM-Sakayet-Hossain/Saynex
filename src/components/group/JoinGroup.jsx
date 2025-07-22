import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
// import { selectGroup } from "../../../store/slices/conversationSlice";

const JoinGroup = ({ data }) => {
  const userInfo = useSelector((state) => state.userData.user);
  const [addMemberModal, setAddMemberModal] = useState(false);
  const [groupMember, setGroupMember] = useState([]);
  const db = getDatabase();

  const handelJoin = () => {
    set(push(ref(db, "groupMember/" + data.id)), {
      gorupID: data.id,
      memberID: userInfo.uid,
      memberName: userInfo.displayName,
      creatorId: data.creatorId,
      memberAvatar: userInfo.photoURL,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  };

  useEffect(() => {
    onValue(ref(db, "groupMember/"), (snapshot) => {
      let arr = {};
      snapshot.forEach((item) => {
        const groupId = item.key;
        let arr2 = [];
        item.forEach((data) => {
          arr2.push(data.val().memberID);
        });
        arr[groupId] = arr2;
      });
      setGroupMember(arr);
    });
  }, []);

  if (data.creatorId === userInfo.uid) return null;
  if (groupMember[data.id]?.includes(userInfo.uid)) return null;
  // Close modal on outside click
  window.addEventListener("mousedown", (e) => {
    if (addMemberModal && !e.target.closest(".bg-white")) {
      setAddMemberModal(false);
    }
  });

  return (
    <>
      <div className="w-full flex items-center gap-4 my-4 cursor-pointer">
        <div className="w-full py-2 px-2 flex items-center hover:bg-blue-400 duration-300 ease-in-out rounded-md">
          <div className="flex gap-3 items-center">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 bg-blue-950 flex items-center justify-center border-blue-400 group-hover:border-white ">
              <p className="text-3xl font-bold text-white">
                {data.groupName[0]}
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-lg group-hover:text-white">
                {data.groupName}
              </h3>
              <p className="font-inter font-normal text-sm group-hover:text-white">
                {data.creatorName && data.creatorName.length > 15
                  ? data.creatorName.substring(0, 7) +
                    "... has created this group."
                  : `${data.creatorName || "Unknown"} has created this group.`}
              </p>
            </div>
          </div>
          <button
            onClick={handelJoin}
            className="font-inter font-normal text-md bg-green-400 py-2 px-4 rounded-xl group-hover:text-white ml-auto"
          >
            Join
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinGroup;
