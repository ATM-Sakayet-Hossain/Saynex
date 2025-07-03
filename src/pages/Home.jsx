import React from "react";
import ChatList from "../components/ChatList";
import ChatBox from "../components/ChatBox";

const Home = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100 w-full">
        <ChatList />
        <ChatBox />
      </div>
    </>
  );
};

export default Home;
