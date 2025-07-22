import React from "react";
import ChatList from "../components/ChatList";
import ChatBox from "../components/ChatBox";
import { useSelector } from "react-redux";

const Home = () => {
  const activeFriend = useSelector((state) => state.activeFriend.friend);
  return (
    <>
      <div className="flex h-screen bg-gray-100 w-full">
        <ChatList />
        {activeFriend ? (
          <ChatBox />
        ) : (
          <div className="w-full bg-slate-50 h-screen flex items-center justify-center">
            <p className="text-secondary text-center">
              Select a chat or start a new conversation
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
