import React from 'react'
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';


const LandingSectionSix = ({ bgColor }) => {
    return (
        <>
            <div style={{ backgroundColor: bgColor }} className="w-full h-auto flex justify-center py-4 px-8"  >
                <div className='w-full lg:w-900 2xl:w-1400 flex xl:flex-row flex-col lg:justify-between items-center' >
                    <div>
                        <p className='lg:text-34 2xl:text-38 leading-40 w-full   text-28 xl:text-left text-center my-5' >
                            Call us and discuss your project with our experts today.
                        </p>
                    </div>
                    <div className='flex w-full justify-center xl:items-center :items-end my-5 cursor-normal' >
                        <CallIcon className="mr-3 lg:mr-7 2xl:mr-12 lg:scale-200 2xl:scale-300 mb-1" />
                        <div>
                            <p className='text-21' >CALL US</p>
                            <a href="tel:647-660-1776" target="_blank" rel="noopener noreferrer">
                                <p className='text-21 font-sans font-semibold cursor-pointer' >647-660-1776</p>
                            </a>
                        </div>
                    </div>
                    <div className='flex w-full justify-center xl:items-center :items-end my-5 cursor-normal' >
                        <MailIcon className="mr-4 lg:mr-8 2xl:mr-12 lg:scale-200 2xl:scale-300 scale-100 mb-1" />
                        <div>
                            <p className='text-21' >DISCUSS YOUR IDEAS</p>
                            <a href="mailto:sales@daddesignsweb.com" target="_blank" rel="noopener noreferrer">
                                <p className='text-21 font-sans font-semibold cursor-pointer' >sales@daddesignsweb.com</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default LandingSectionSix