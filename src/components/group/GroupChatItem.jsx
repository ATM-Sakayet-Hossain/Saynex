import React, { useEffect, useState } from "react";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import GroupAddFriendList from "./GroupAddFriendList";
import { getDatabase, onValue, ref } from "firebase/database";
import { selectGroup } from "../../../store/slices/conversationSlice";

const GroupChatItem = ({ data }) => {
  const userInfo = useSelector((state) => state.userData.user);
  const [addMemberModal, setAddMemberModal] = useState(false);
  const [friendList, setFriendList] = useState([]);
  const dispatch = useDispatch();
  const db = getDatabase();

  useEffect(() => {
    onValue(ref(db, "friendList"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (
          item.val().participentID === userInfo.uid ||
          item.val().creatorID === userInfo.uid
        ) {
          arr.push({ ...item.val(), id: item.key });
        }
      });
      setFriendList(arr);
    });
  }, []);

  const handelClick = () => {
    dispatch(selectGroup(data));
  };

  // Close modal on outside click
  window.addEventListener("mousedown", (e) => {
    if (addMemberModal && !e.target.closest(".bg-white")) {
      setAddMemberModal(false);
    }
  });
  return (
    <>
      <div
        onClick={handelClick}
        className="w-full flex items-center gap-4 my-4 cursor-pointer"
      >
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
                {data.creatorName} has created this group.
              </p>
            </div>
          </div>
          <p className="font-inter font-normal text-3xl group-hover:text-white ml-auto">
            <PiDotsThreeCircleVertical
              onClick={() => setAddMemberModal(true)}
            />
          </p>
        </div>
        {addMemberModal && (
          <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full z-10 bg-[#0000003e]">
            <div className="bg-white p-5 rounded-xl">
              <button
                onClick={() => setAddMemberModal(false)}
                className="text-xl font-bold"
              >
                X
              </button>
              <div className="h-96 w-sm overflow-y-auto">
                <h3>Add Member in {data.groupName} group</h3>
                <div className="mt-10 h-8/10 overflow-y-auto">
                  {friendList.map((item) =>
                    item.creatorID == userInfo.uid ? (
                      <GroupAddFriendList
                        key={item.id}
                        conVoID={item.id}
                        name={item.participentName}
                        avatar={item.participentAvatar}
                        id={item.participentID}
                        groupData={data}
                      />
                    ) : (
                      <GroupAddFriendList
                        key={item.id}
                        conVoID={item.id}
                        name={item.creatorName}
                        avatar={item.creatorAvatar}
                        id={item.creatorID}
                        groupData={data}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GroupChatItem;
