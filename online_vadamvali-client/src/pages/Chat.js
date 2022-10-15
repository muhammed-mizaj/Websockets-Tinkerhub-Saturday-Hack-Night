import React from 'react'
import { useState } from 'react';
export const Chat = () => {
  const [right, setRight] = useState(50);
const handleUserClick = () => {
    // emit 2
    setRight((right) => right - 2);
}
const handleOponentClick = () => {
    setRight((right) => right + 1/100);
}
  return (
    
<div className='w-full flex flex-col items-center h-screen'>
<div className='bg-white w-3/4 h-3/4 p-4 px-10'>


    {/* ee divinde porthek vannal win cheyum */}
    <div className='w-full bg-white h-full relative border-x-4 border-red-500'>
        <div style={{
            right: `${right}%`,
            transition: "right 200ms ease-in-out"
        }} className='border-2 p-1 w-2 bg-black border-black h-full absolute right-[50%]'>

        </div>
    </div>
</div>
<button onClick={handleUserClick} className='bg-white rounded px-4 mt-10'>click</button>


</div>

  )
}

export default Chat


