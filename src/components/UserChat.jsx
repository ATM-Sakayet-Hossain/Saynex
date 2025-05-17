import React, { Children } from "react";
import { Link } from "react-router-dom"

const UserChat = ({path, image, name, children}) => {
  return (
    <Link
      to={path}
      className="py-3.5 px-3 flex justify-between items-start group hover:bg-blue-400 duration-300 ease-in-out rounded-md"
    >
      <div className="flex gap-3 items-center">
        <img src={image} alt="PP image" className="w-12 rounded-full" />
        <div>
          <h3 className="font-inter font-semibold text-lg group-hover:text-white">
            {name}
          </h3>
          <p className="font-inter font-normal text-sm group-hover:text-white">
            {children}
          </p>
        </div>
      </div>
      <small className="font-inter font-normal text-xs group-hover:text-white">
        10:30 PM
      </small>
    </Link>
  );
};

export default UserChat;
