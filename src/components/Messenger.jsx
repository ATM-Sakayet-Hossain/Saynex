import React from "react";

const Messenger = ({ person1, person2, style="mt-4" }) => {
  return (
    <div className={`flex items-center gap-10 justify-between px-5 ${style} `}>
      <p className="max-w-fit flex items-end justify-start text-base font-medium font-inter px-7.5 py-2 bg-blue-400 rounded-full">
        {person1}
      </p>
      <p className="max-w-fit flex items-end justify-end text-base font-medium font-inter px-7.5 py-2 bg-blue-200 rounded-full translate-y-12">
        {person2}
      </p>
    </div>
  );
};

export default Messenger;
