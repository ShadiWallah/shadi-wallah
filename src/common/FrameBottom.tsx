import React from 'react'
import leftFlower from './../assets/left-flower.png'
import rightFlower from './../assets/right-flower.png'
function FrameBottom() {
  return (
    <div className='flex justify-between items-center w-full fixed bottom-0 z-5'>
    <img src={leftFlower} alt="left-certain" width={70} height={50} className="sm:flex hidden"/>
    <img src={rightFlower} alt="right-certain" width={70} height={50} className="sm:flex hidden"/>
  </div>
  )
}

export default FrameBottom
