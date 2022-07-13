import React, { useRef } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const FaqSection = ({ show, func, heading, text, keys, scrollTo }) => {
    const optionHeight = useRef();
    return (
        <>

            <div className='h-fit select-none w-full xl:w-1000 flex flex-col items-center cursor-pointer'  >
                <div style={{ backgroundColor: "#F9E7C3" }} onClick={func} className='my-3 lg:my-6 items-center w-full border-4 border-black p-6 xl:text-38 md:text-19 text-18 rounded-3xl flex justify-between'  >
                    <p className='xl:leading-40 leading-20' >
                        {heading}
                    </p>
                    <div className={`${show ? "rotate-90" : "rotate-0"} transition-all duration-400`} >
                        <ArrowForwardIosIcon className={`scale-110`} />
                    </div>
                </div>
                <div onClick={scrollTo} ref={optionHeight} style={{ height: `${show ? optionHeight.current?.scrollHeight + "px" : "0px"}` }} className=" overflow-y-hidden transition-all duration-400" >
                    <p className={`font-sans font-bold text-21 xl:text-24 mt-3 mb-6 ${!keys ? "text-center lg:text-left" : "text-left"} px-3 lg:px-3`}>{text}
                    </p>
                    <div className='flex flex-col text-left w-full mt-4' >
                        {keys && keys.map((text, index) => (
                            <div key={index} className='flex my-1 lg:my-2' >
                                <p className='mr-4 font-sans text-24 text-center xl:text-left'>•</p>
                                <p className='font-sans font-bold xl:text-24'>{text}.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqSection