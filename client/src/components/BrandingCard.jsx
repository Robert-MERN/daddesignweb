import React from 'react'

const BrandingCard = ({ bgColor, icon, text }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div className={`border-4 border-transparent  xl:w-270 xl:min-h-200 md:h-300  md:w-450  w-270 min-h-200 rounded-xl transition-all duration-400  p-4  flex flex-col items-center justify-center`} >
        <div className='w-full flex justify-center my-4'>
          <img loading="lazy" src={`${PF}${icon}`} className="w-100" alt="" />
        </div>
        <p className='text-19 text-center leading-none my-4' >{text}</p>
      </div>
    </>
  )
}

export default BrandingCard