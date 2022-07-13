import React from 'react'


const VideoCard = ({ image, text, bgColor, size}) => {

    return (
        <>
            <a rel="noreferrer noopener" href={image} target="_blank" >
                <div className='lg:w-400 2xl:w-450 md:w-550 xl:h-250 md:h-350 w-320 h-250 border-5 border-black  rounded-xl transition-all duration-400 video-card overflow-hidden relative cursor-pointer' >
                    <img src={image} className={`${size || "object-cover"} h-full w-full transition-all duration-300 ${bgColor}`} alt="" />
                    <p className='text-center w-full font-sans text-white text-21 font-extrabold absolute cardText px-2' >{text}</p>
                </div>
            </a>
        </>
    )
}

export default VideoCard