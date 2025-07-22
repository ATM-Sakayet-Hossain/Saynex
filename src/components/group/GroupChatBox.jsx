import { IoSend } from "react-icons/io5";
import { useSelector } from "react-redux";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import React, { useEffect, useRef, useState } from "react";
import { HiDotsVertical, HiPhone, HiVideoCamera } from "react-icons/hi";
import {
  getDatabase,
  onValue,
  push,
  ref,
  set,
  update,
} from "firebase/database";

const GroupChatBox = () => {
  const activeGroup = useSelector((state) => state.activeFriend.group);
  const userInfo = useSelector((state) => state.userData.user);
  const [chatContent, setChatContent] = useState("");
  const [messages, setMessages] = useState([]);
  const [emoji, setEmoji] = useState(false);
  const emojiRef = useRef(null);
  const chatboxRef = useRef(null);
  const db = getDatabase();
  const handelsend = () => {
    set(push(ref(db, "messages")), {
      senderID: userInfo.uid,
      reciverID: activeGroup.id,
      message: chatContent,
      senderName: userInfo.displayName,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    // Update the last message in the friend list
    update(ref(db, "groups/" + activeGroup.id), {
      lastMessage: chatContent,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    // Clear the chat input
    setChatContent("");
    setEmoji(false);
  };

  useEffect(() => {
    onValue(ref(db, "messages"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (
          item.val().reciverID === activeGroup.id ||
          item.val().senderID === activeGroup.id
        ) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setMessages(arr);
    });
  }, [activeGroup]);

  // Scroll to the bottom of the chatbox when messages change
  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);
  // Close emoji picker on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emoji &&
        emojiRef.current &&
        !emojiRef.current.contains(event.target)
      ) {
        setEmoji(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [emoji]);


  return (
    <div className="flex flex-col h-full w-full pt-12  bg-gray-100">
      <div className="flex items-center justify-between px-6 py-4 bg-gray-200 border-gray-700">
        <div className="flex space-x-6 items-center">
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 bg-blue-950 flex items-center justify-center border-blue-400 group-hover:border-white ">
            <p className="text-3xl font-bold text-white">
              {activeGroup.groupName[0]}
            </p>
          </div>
          <h2 className="text-xl font-semibold text-blue-600">
            {activeGroup.groupName}
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
                className="flex flex-col text-end px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-br-none ml-auto max-w-4/5"
              >
                {item.message}
                <span className="text-xs">{item.senderName}</span>
              </p>
            ) : (
              <p
                key={item.key}
                className="flex flex-col text-start px-4 py-2 bg-slate-200 w-fit text-primary rounded-xl rounded-bl-none max-w-4/5"
              >
                {item.message}
                <span className="text-xs">{item.senderName}</span>
              </p>
            )
          )}
        </div>
      </div>
      <div className=" relative mt-auto">
        {emoji && (
          <div ref={emojiRef} className="absolute bottom-20 left-4 z-10">
            <EmojiPicker
              emojiStyle="google"
              onEmojiClick={(emojiData) => {
                setChatContent((prev) => prev + emojiData.emoji);
              }}
            />
          </div>
        )}
        <div className="flex items-center px-4 py-3 bg-gray-200 ">
          <div className="flex gap-2 text-xl">
            <ImAttachment className=" rotate-180" />
            <BsEmojiSmile
              value={emoji}
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

export default GroupChatBox;
