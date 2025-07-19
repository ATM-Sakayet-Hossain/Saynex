import React, { useEffect, useState } from "react";
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from "react-icons/ai";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { CiSearch } from "react-icons/ci";
import GroupChatItem from "./GroupChatItem";
import { GrGroup } from "react-icons/gr";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import JoinGroup from "./JoinGroup";

const GroupChatList = () => {
  const userInfo = useSelector((state) => state.userData.user);
  const [createGrpModel, setCreateGrpModel] = useState(false);
  const [joinModel, setJoinModel] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [allGroups, setAllGroups] = useState([]);
  const [groupMembers, setGroupMembers] = useState([]);

  const db = getDatabase();

  const handelCreateGrp = () => {
    if (!groupName) return toast("Group name is required.");
    set(push(ref(db, "groups/")), {
      groupName,
      creatorName: userInfo.displayName,
      creatorId: userInfo.uid,
    });
    setCreateGrpModel(false);
    setGroupName("");
  };

  useEffect(() => {
    onValue(ref(db, "groupMember"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        item.forEach((data) => {
          if (data.val().memberID === userInfo.uid) {
          arr.push(data.val().gorupID);
        }
        })
      });
      setGroupMembers(arr);
    });
    onValue(ref(db, "groups"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), id: item.key });
      });
      setAllGroups(arr);
    });
  }, []);
  // Close modal on outside click
  window.addEventListener("mousedown", (e) => {
    if (createGrpModel && !e.target.closest(".bg-white")) {
      setCreateGrpModel(false);
    }
    if (joinModel && !e.target.closest(".bg-white")) {
      setJoinModel(false);
    }
  });

  return (
    <>
      <div className="w-xl flex flex-col pt-12 pl-5 h-screen bg- truncate">
        <ToastContainer position="top-right" theme="light" />
        <div>
          <div className="flex justify-between items-center pb-4 pr-4">
            <h2 className="text-2xl font-semibold">Chats with Group</h2>
            <button className="text-gray-800 text-2xl py-3 px-3 rounded hover:bg-blue-400 hover:text-white ">
              <GrGroup onClick={() => setCreateGrpModel(true)} />
            </button>
            <button className="text-gray-800 text-2xl py-3 px-3 rounded hover:bg-blue-400 hover:text-white ">
              <AiOutlineUsergroupAdd onClick={() => setJoinModel(true)} />
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
          {allGroups.map(
            (item) =>
              (item.creatorId === userInfo.uid ||
                groupMembers.includes(item.id)) && (
                <GroupChatItem key={item.id} data={item} />
              )
          )}
        </div>
      </div>
      {createGrpModel && ( //create group
        <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full z-50 bg-[#dae1efb5] ">
          <div className="bg-white p-4 rounded-lg shadow-lg h-1/5">
            <button
              className="w-8 h-8 flex justify-center items-center text-2xl rounded-2xl hover:bg-blue-400 px-2 hover:rounded-2xl hover:text-white "
              onClick={() => setCreateGrpModel(false)}
            >
              X
            </button>
            <div className="h-20 w-sm flex flex-col items-center justify-center gap-3 my-4">
              <div className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm w-full">
                <input
                  type="text"
                  placeholder="Create a Group"
                  className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
                  onChange={(e) => setGroupName(e.target.value)}
                />
              </div>
              <button
                onClick={handelCreateGrp}
                className="bg-green-400 px-10 py-2 rounded-2xl"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {joinModel && ( //join friend protal
        <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full z-50 bg-[#dae1efb5] ">
          <div className="bg-white p-4 rounded-lg shadow-lg h-6/10 overflow-hidden">
            <button
              className="w-8 h-8 flex justify-center items-center text-2xl rounded-2xl hover:bg-blue-400 px-2 hover:rounded-2xl hover:text-white "
              onClick={() => setJoinModel(false)}
            >
              X
            </button>
            <div className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 my-4 shadow-sm w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
              />
            </div>
            <div className="w-sm h-full overflow-y-auto scrollbar-hide">
              {/* {allGroups.map(
                (item) => <JoinGroup key={item.id} data={item} />
              )} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default GroupChatList;
