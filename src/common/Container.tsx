import React from 'react'

function Container({children}:{children: React.ReactNode}) {
  return (
    <div className='flex w-full justify-center'>
      <div className='max-w-6xl w-full px-4 bg-white shadow-lg rounded-lg  sm:md-30 md:mt-20 mt-10 mb-20'>
      {children}
      </div>
    </div>
  )
}

export default Container
