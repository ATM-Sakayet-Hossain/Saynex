import React, { Children } from "react";
import { Link } from "react-router";

const BtnPrimary = ({ path, title, children }) => {
  return (
    <Link
      to={path}
      className=" py-3 px-6 text-black hover:text-white hover:bg-blue-400 text-xl font-semibold font-workSans rounded-sm flex! items-center gap-3 transition-all "
    >
      {children}
      <span>{title}</span>
    </Link>
  );
};

export default BtnPrimary;
