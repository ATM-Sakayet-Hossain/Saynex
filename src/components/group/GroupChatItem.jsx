import React from 'react'
import { PiDotsThreeCircleVertical } from 'react-icons/pi'

const GroupChatItem = ({data}) => {
  console.log(data);
  
  return (
    <div
      className="py-2 px-2 flex justify-between items-center group hover:bg-blue-400 duration-300 ease-in-out rounded-md"
    >
      <div className="flex gap-3 items-center">
        <div className="w-11 h-11 rounded-full overflow-hidden border-2 bg-blue-950 flex items-center justify-center border-blue-400 group-hover:border-white " >
          <p className='text-3xl font-bold text-white'>{data.groupName[0]}</p>
        </div>
        <div>
          <h3 className="font-inter font-semibold text-lg group-hover:text-white">
            {data.groupName}
          </h3>
          <p className="font-inter font-normal text-sm group-hover:text-white">
            {data.creatorName} has created this group.
          </p>
        </div>
      </div>
      <p className="font-inter font-normal text-3xl group-hover:text-white ml-auto">
        <PiDotsThreeCircleVertical />
      </p>
    </div>
  )
}

export default GroupChatItem