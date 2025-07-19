// import React from 'react'
import leftCertain from './../assets/leftu-certain.png'
import rightCertain from './../assets/right-certain.png'
function Frame() {
  return (
    <div className='flex justify-between items-center w-full fixed top-0 z-5'>
      <img src={leftCertain} alt="left-certain" width={70} height={50}/>
      <img src={rightCertain} alt="right-certain" width={70} height={50}/>
    </div>
  )
}

export default Frame
