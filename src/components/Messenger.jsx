import React from 'react'

const Messenger = ({parson1, parson2, style="mt-4"}) => {
  return (
    <div className={`flex items-center justify-between px-5 ${style}`}>
        <p className=' text-base font-medium font-inter px-7.5 py-2 bg-blue-400 rounded-full'>{parson1}</p>
        <p className=' text-base font-medium font-inter px-7.5 py-2 bg-blue-200 rounded-full translate-y-13'>{parson2}</p>
    </div>
  )
}

export default Messenger