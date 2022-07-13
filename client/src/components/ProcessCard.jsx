import React from 'react'

const ProcessCard = ({ number, heading, text, bgColor }) => {
  return (
    <>
      <div className={`p-10 w-full sm:w-320 h-fit lg:w-450 2xl:w-500 md:w-550  xl:h-400 border-7 border-black rounded-xl hover:shadow-btn-shadow cursor-pointer bg-inherit ${bgColor} transition-all duration-400`} >
        <p className='xl:text-72 text-46' >{number}</p>
        <p className='xl:text-28 mb-6 text-24' >{heading}</p>
        <p className='font-sans font-bold xl:text-18 text-17' >{text}</p>
      </div>
    </>
  )
}

export default ProcessCard