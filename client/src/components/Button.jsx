import React from 'react'
import CallIcon from '@material-ui/icons/Call';

const Button = ({ text, customFunc, margin, type, tab, click, classes, call, extraPadding }) => {
  return (
    <>
      <button id="button-check" type={type ? "submit" : "button"} style={{ backgroundColor: `${tab ? (click ? "#FFF85E" : "transparent") : "#FFF85E"}` }} onClick={customFunc} className={`py-2 pb-4 ${extraPadding?"px-14 xl:px-24":"px-4 xl:px-8"} border-3  ${tab ? (click ? "border-black rounded-full" : "border-transparent") : "border-black rounded-full"} ${tab ? "shadow-none" : "shadow-btn-shadow"} hover:shadow-none  w-fit transition-all duration-400 cursor-pointer select-none 2xl:text-24 text-16 ${margin ? "my-3 mt-8" : "my-0"} pt-4 btn-move transition-all duration-300 ${classes} flex justify-center items-center ${call ? "text-blue-800" : ""}`} >
        {call &&
          <CallIcon className='mr-3 text-red-400' />
        }
        {text}
      </button>
    </>
  )
}

export default Button