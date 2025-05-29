import React, { Children } from "react";
import { Link } from "react-router-dom";

const UserChat = ({ path, image, name, children }) => {
  return (
    <div
      to={path}
      className="py-2 px-2 flex justify-between items-start group hover:bg-blue-400 duration-300 ease-in-out rounded-md"
    >
      <div className="flex gap-3 items-center">
        <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-blue-400 group-hover:border-white " >
          <img src={image} alt="PP image" className="w-full" />
        </div>
        <div>
          <h3 className="font-inter font-semibold text-lg group-hover:text-white">
            {name}
          </h3>
          <p className="font-inter font-normal text-sm group-hover:text-white">
            {children}
          </p>
        </div>
      </div>
      <p className="font-inter font-normal text-xs group-hover:text-white">
        10:30 PM
      </p>
    </div>
  );
};

export default UserChat;
