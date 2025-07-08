import React from "react";
import GroupList from "../components/group/GroupList";

const Group = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100 w-full">
        <GroupList />
        {/* {activeFriend ? (
          <ChatBox />
        ) : (
          <div className="w-full bg-slate-50 h-screen flex items-center justify-center">
            <p className="text-secondary text-center">
              Select a chat or start a new conversation
            </p>
          </div>
        )} */}
      </div>
    </>
  );
};

export default Group;