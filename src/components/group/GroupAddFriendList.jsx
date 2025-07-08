import React from 'react'

const GroupAddFriendList = () => {
  return (
    <div className="py-2 px-2 flex justify-between items-center group hover:bg-blue-400 duration-300 ease-in-out rounded-md">
      <div className="flex gap-3 items-center">
        <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-blue-400 group-hover:border-white ">
          <img alt="PP image" className="w-full" />
        </div>
        <div>
          <h3 className="font-inter font-semibold text-lg group-hover:text-white">
            user Name
          </h3>
        </div>
      </div>
      <button className="px-6 py-2 rounded-lg bg-blue-400 font-inter font-normal text-lg group-hover:text-white group-hover:bg-green-400">
        Add
      </button>
    </div>
  )
}

export default GroupAddFriendList