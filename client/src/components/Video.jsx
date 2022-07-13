import React, { useEffect } from 'react';

const Video = ({ source, poster }) => {
    return (
        <>
            <div id="myVideoFile" className='xl:w-400 md:w-500 sm:w-320 w-full h-250 border-4 border-black rounded-2xl cursor-pointer bg-black' >
                <video poster={poster} playsInline className='object-contain w-full h-full' controls disablePictureInPicture src={source}></video>
            </div>
        </>
    )
}

export default Video