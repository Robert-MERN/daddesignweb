import React, { lazy } from 'react'
import useStateContext from '../context/ContextProvider'
const Button = lazy(() => import("../components/Button"));



const SectionNine = ({ bgColor }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { submitForm, handleChangeForm, formDetail, openForm } = useStateContext();

  return (
    <>
      <div style={{ backgroundColor: `${bgColor || ""}` }} className='pt-20 px-4 lg:px-10 w-screen h-fit flex flex-col items-center ' >
        <div className='2xl:w-1400 xl:w-1000 lg:w-800 flex flex-col xl:flex-row mb-20' >
          <form onSubmit={(e) => { openForm("", "landing-page-v1", "", "Website Form", false, true); submitForm(e);  }} className='flex-1 px-2'>
            <p className='text-34 lg:text-38 mb-14 text-center leading-40 2xl:leading-80' >Let's Discuss Your Requirements</p>
            <div className='w-full flex xl:flex-row flex-col xl:gap-10 mb-6' >
              <div className='w-full xl:w-fit flex flex-col'>
                <label className='text-21 font-sans font-bold' htmlFor="">First Name<span className='text-red-500'>*</span></label>
                <input name="firstName" value={formDetail.firstName || ""} onChange={handleChangeForm} required type="text" autoCorrect='false' spellCheck={false} className='w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-3 px-4 outline-none text-20' />
              </div>
              <div className='w-full xl:w-fit flex flex-col' >
                <label className='text-21 font-sans font-bold' htmlFor="">Last Name<span className='text-red-500'>*</span></label>
                <input name="lastName" value={formDetail.lastName || ""} onChange={handleChangeForm} required type="text" autoCorrect='false' spellCheck={false} className='w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-3 px-4 outline-none text-20' />
              </div>
            </div>
            <div className='w-full flex xl:flex-row flex-col  xl:gap-10 mb-6' >
              <div className='w-full xl:w-fit flex flex-col' >
                <label className='text-21 font-sans font-bold' htmlFor="">Email<span className='text-red-500'>*</span></label>
                <input name="email" value={formDetail.email || ""} onChange={handleChangeForm} required type="text" autoCorrect='false' spellCheck={false} className='w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-3 px-4 outline-none text-20' />
              </div>
              <div className='w-full xl:w-fit flex flex-col' >
                <label className='text-21 font-sans font-bold' htmlFor="">Phone<span className='text-red-500'>*</span></label>
                <input name="phone" value={formDetail.phone || ""} onChange={handleChangeForm} required type="text" autoCorrect='false' spellCheck={false} className='w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-3 px-4 outline-none text-20' />
              </div>
            </div>
            <div className='w-full xl:w-fit flex flex-col mb-8 lg:mb-16 xl:gap-4' >
              <label className='text-21 font-sans font-bold' htmlFor="">Project Details<span className='text-red-500'>*</span></label>
              <textarea name="text" value={formDetail.text || ""} onChange={handleChangeForm} required id="" className='w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-5 px-3 outline-none text-20 resize-none'></textarea>
            </div>
            <div>
              <Button text="Submit" type="submit" />
            </div>
          </form>
          <div className='flex-1  flex items-center lg:px-8' >
            <img loading="lazy" src={`${PF}side5.png`} className='object-cover' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionNine