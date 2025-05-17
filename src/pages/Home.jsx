import React from "react";
import Sidebar from "../components/Sidebar";
import ChatList from "../components/ChatList";
import Chatwindow from "../components/Chatwindow";

const Home = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <ChatList />
        <Chatwindow />
      </div>
    </>
  );
};

export default Home;
