import React from "react";
import GroupChatList from "../components/group/GroupChatList";

const Group = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100 w-full">
        <GroupChatList />
        {/* {activeFriend ? (
          <GroupChatBox />
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