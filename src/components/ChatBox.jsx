import { IoSend } from "react-icons/io5";
import { useSelector } from "react-redux";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import React, { useEffect, useState } from "react";
import { HiDotsVertical, HiPhone, HiVideoCamera } from "react-icons/hi";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const ChatBox = () => {
  const activeFriend = useSelector((state) => state.activeFriend.friend);
  const userInfo = useSelector((state) => state.userData.user);
  const [chatContent, setChatContent] = useState("");
  const [messages, setMessages] = useState([]);
  const [emoji, setEmoji] = useState(false);
  const db = getDatabase();
  const handelsend = () => {
    set(push(ref(db, "messages/")), {
      senderID: userInfo.uid,
      reciverID: activeFriend.id,
      message: chatContent,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    });
    setChatContent("");
    setEmoji(false);
  };

  useEffect(() => {
    onValue(ref(db, "messages/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (
          (item.val().reciverID === userInfo.uid ||
            item.val().senderID === userInfo.uid) &
          (item.val().reciverID === activeFriend.id ||
            item.val().senderID === activeFriend.id)
        ) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setMessages(arr);
    });
  }, [activeFriend]);
  console.log(emoji);

  // window.addEventListener("mousedown", (e) => {
  //   if (emoji && !e.target.closest(".bg-white")) {
  //     setEmoji(flase);
  //   }
  // });

  return (
    <div className="flex flex-col h-full w-full pt-12  bg-gray-100">
      <div className="flex items-center justify-between px-6 py-4 bg-gray-200 border-gray-700">
        <div className="flex space-x-6 items-center">
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-blue-400 ">
            <img src={activeFriend.image} alt="PP image" className="w-full" />
          </div>
          <h2 className="text-xl font-semibold text-blue-600">
            {activeFriend.name}
          </h2>
        </div>
        <div className="flex space-x-4 text-blue-800 text-2xl">
          <HiPhone className="cursor-pointer hover:text-white" />
          <HiVideoCamera className="cursor-pointer hover:text-white" />
          <HiDotsVertical className="cursor-pointer hover:text-white" />
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-hide text-ellipsis my-4 flex-1">
        <div className="flex flex-col gap-5 pb-10 px-3">
          {messages.map((item) =>
            item.senderID === userInfo.uid ? (
              <p
                key={item.key}
                className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5"
              >
                {item.message}
              </p>
            ) : (
              <p
                key={item.key}
                className="px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5"
              >
                {item.message}
              </p>
            )
          )}
        </div>
      </div>
      <div className="mt-auto">
        {emoji && (
          <EmojiPicker
            className="bg-transparent"
            emojiStyle="google"
            onEmojiClick={(i) => setChatContent((prev) => prev + i.emoji)}
          />
        )}
        <div className="flex items-center px-4 py-3 bg-gray-200 ">
          <div className="flex gap-2 text-xl">
            <ImAttachment className=" rotate-180" />
            <BsEmojiSmile
              className=" text-xl text-brand cursor-pointer"
              onClick={() => setEmoji(!emoji)}
            />
          </div>
          <input
            type="text"
            value={chatContent}
            placeholder="Type a message..."
            className="flex-1 bg-transparent px-4 py-2 focus:outline-none "
            onChange={(e) => setChatContent(e.target.value)}
          />
          <button
            onClick={handelsend}
            disabled={!chatContent}
            className="text-blue-500 hover:text-white hover:bg-blue-500 text-2xl p-3 rounded-full"
          >
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
