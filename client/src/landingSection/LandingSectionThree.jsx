import React from 'react'

const LandingSectionThree = ({ bgColor }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (

        <>
            <div style={{ backgroundColor: bgColor }} className="w-full h-auto flex justify-center py-20 px-3 xl:px-8"  >
                <div className='w-full lg:w-800 xl:w-1000 2xl:w-1400 flex flex-col items-center' >
                    <p className='xl:leading-50 leading-40 text-26 xl:text-46 text-center my-12' >Our experienced team of web developers and designers will make sure you get nothing but the best solutions on the web for the perfect blend of design and functionality.</p>
                    <div className='flex flex-wrap xl:flex-row flex-col w-full justify-center items-center gap-24 my-20' >
                        <div className='xl:w-500 md:w-full w-300 cursor-pointer flex justify-center flex-col items-center' >
                            <img loading="lazy" src={`${PF}graphic1.webp`} className="object-contain w-320 xl:w-350" alt="" />
                            <p className='text-center text-19 xl:text-26' >Showcase your products or services</p>
                        </div>
                        <div className='xl:w-500 md:w-full w-300 cursor-pointer flex justify-center flex-col items-center' >
                            <img loading="lazy" src={`${PF}graphic2.webp`} className="object-contain w-320 xl:w-350" alt="" />
                            <p className='text-center text-19 xl:text-26' >Build full integrated storefronts or shops</p>
                        </div>
                        <div className='xl:w-500 md:w-full w-300 cursor-pointer flex justify-center flex-col items-center' >
                            <img loading="lazy" src={`${PF}graphic3.webp`} className="object-contain w-320 xl:w-350" alt="" />
                            <p className='text-center text-19 xl:text-26' >Engage your customers with chat or message functions</p>
                        </div>
                        <div className='xl:w-500 md:w-full w-300 cursor-pointer flex justify-center flex-col items-center' >
                            <img loading="lazy" src={`${PF}graphic4.webp`} className="object-contain w-320 xl:w-350" alt="" />
                            <p className='text-center text-19 xl:text-26' >Visitor analytics for more insights about your audience</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingSectionThree