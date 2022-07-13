import React, { useRef, useEffect } from 'react'
import Button from "./Button"
import CloseIcon from '@material-ui/icons/Close';
import useStateContext from '../context/ContextProvider'

const Form = ({ classes }) => {
    const { closeForm, form, submitForm, handleChangeForm, formSubmitted, setFormSubmitted, setFormDetail, formDetail, setParentForm} = useStateContext();
    const heightRef = useRef();
    let totalHeight = { height: heightRef.current?.offsetHeight };
    const isMounted = useRef();
    useEffect(() => {
        if (isMounted.current) return
        isMounted.current = true;
        totalHeight.height = heightRef.current?.offsetHeight;
    })
    
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <div className={`inset-0 bg-transparent forms fixed flex justify-center items-center ${form? "translate-x-0" : "translate-x-full"} transition-all duration-700 ${classes}`} >
                <div className='xl:w-550 md:w-450 h-full xl:h-fit w-full flip-card' >
                    <div className='relative w-full h-full flex items-center flip-card-inner' rotate={formSubmitted ? "true" : ""} >
                        <div ref={heightRef} className='absolute w-full h-full md:w-450 md:h-fit lg:h-550 2xl:h-fit 2xl:w-550 right-0 flip-card-front' >
                            <div style={{ backgroundColor: "#FBEC7A" }} className='md:border-8 w-full h-full  md:border-black md:rounded-xl px-6 xl:px-4 pt flex justify-center items-center  overflow-hidden   '>
                                <form onSubmit={submitForm} className='px-2'> 
                                    <p className='text-26 2xl:text-38 my-4 mt-4 lg:mt-6 2xl:mt-8 text-center leading-30 2xl:leading-50' >Let's Discuss Your
                                        Requirements</p>
                                    <div className='w-full flex xl:flex-row flex-col xl:gap-4 2xl:gap-10 mb-4 lg:mb-2' >
                                        <div className='w-full xl:w-fit flex flex-col'>
                                            <label className='text-18 2xl:text-21 font-sans font-bold' htmlFor="">Full Name<span className='text-red-500'>*</span></label>
                                            <input value={formDetail.fullName || ""} name="fullName" onChange={handleChangeForm} required type="text" autoCorrect='false' spellCheck={false} className='w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-1 2xl:py-3  px-4 outline-none text-18 xl:text-21' />
                                        </div>
                                    </div>
                                    <div className='w-full xl:w-fit flex flex-col' >
                                        <label className='text-18 2xl:text-21 font-sans font-bold' htmlFor="">Email<span className='text-red-500'>*</span></label>
                                        <input value={formDetail.email || ""} name="email" onChange={handleChangeForm} required type="email" autoCorrect='false' spellCheck={false} className='w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-1 2xl:py-3  px-4 outline-none text-18 xl:text-21' />
                                    </div>
                                    <div className='w-full xl:w-fit flex flex-col' >
                                        <label className='text-18 2xl:text-21 font-sans font-bold' htmlFor="">Phone<span className='text-red-500'>*</span></label>
                                        <input value={formDetail.phone || ""} name="phone" onChange={handleChangeForm} required type="tel" autoCorrect='false' spellCheck={false} className='w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-1 2xl:py-3  px-4 outline-none text-18 xl:text-21' />
                                    </div>
                                    <div className='w-full xl:w-fit flex flex-col my-4 lg:my-2 2xl:gap-4' >
                                        <label className='text-18 2xl:text-21 font-sans font-bold' htmlFor="">Project Details<span className='text-red-500'>*</span></label>
                                        <textarea value={formDetail.text || ""} name="text" onChange={handleChangeForm} required id="" className='w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-2 2xl:py-5  px-3 outline-none text-18 xl:text-21 resize-none'></textarea>
                                    </div>
                                    <div className='w-full xl:w-fit  mb-4 2xl:mb-8' >
                                        <Button text="Submit" type="submit" />
                                    </div>
                                </form>
                                <div className='fixed md:absolute md:top-2 md:right-2 sm:top-3 sm:right-3 xl:top-2 xl:right-2 top-1 right-0' >
                                    <button className='scale-200 hover:scale-250 transition-all  mt-2 mr-3' type='button' onClick={() => { closeForm(); setFormDetail({ subject: "Dad-Designs-Web Project" }); }}>
                                        <CloseIcon className='hover:drop-shadow-3xl' />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div style={{ height: totalHeight.height + "px" }} className='absolute w-full md:w-450 2xl:w-550 right-0 flip-card-back' >
                            <div style={{ backgroundColor: "#FBEC7A" }} className='md:border-8 w-full h-full  md:border-black md:rounded-xl px-6 xl:px-4 pt flex justify-center items-center  overflow-x-hidden overflow-y-scroll'>
                                <img loading="lazy" src={`${PF}thankyou.webp`} alt="" />
                                <div className='fixed md:absolute md:top-2 md:right-2 sm:top-3 sm:right-3 xl:top-2 xl:right-2 top-1 right-0' >
                                    <button className='scale-200 hover:scale-250 2xl:scale-200 lg:hover:scale-200 lg:scale-150 2xl:hover:scale-250 transition-all mt-2 mr-3' type='button' onClick={() => { closeForm(); setFormDetail({ subject: "Dad-Designs-Web Project" }); setFormSubmitted(false); setParentForm(false) }}>
                                        <CloseIcon className='hover:drop-shadow-3xl' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form