import React, { lazy } from 'react'
import useStateContext from '../context/ContextProvider';
import { megaSectionOne, megaSectionTwo, megaSectionThree, packageCard1, packageCard2, packageCard3, packageCard4 } from "../data/data";
const Button = lazy(() => import("../components/Button"));
const Card = lazy(() => import("../components/Card"));


const SectionThree = ({ bgColor }) => {
  const { openForm } = useStateContext();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div style={{ backgroundColor: bgColor }} className='text-center py-20 w-full flex flex-col items-center' >
        <div className='2xl:w-1400 lg:w-1000 w-full px-4'>
          <div className='w-full xl:w-full flex items-center justify-center px-8 xl:px-20 xl:mt-12 xl:mb-24' >
            <div className='w-full xl:w-700 text-center mb-20' >
              <p className='xl:text-72 text-38 my-6 mb-8 xl:mb-24 leading-40 xl:leading-80'>THE PERFECT START TO COMPLETE BRANDING SOLUTIONS</p>
              <p className='font-sans font-semibold xl:text-24 text-21 my-6 mb-16 leading-40 xl:leading-45'>For brands seeking revamps or brand development from scratch, the startup combo is the perfect match. Our team of brand analysts made sure that the startup combo package perfectly caters to all your needs.</p>
              <div className='w-full flex justify-center' >
                <Button text="Start Project" customFunc={() => openForm("there was no price", "home-page", "THE PERFECT START TO COMPLETE BRANDING SOLUTIONS", "Start Project", "", "", true)} />
              </div>
            </div>
          </div>
          <p id="priceSection" className='text-center text-38 leading-50 xl:text-72 xl:leading-70 pb-2' >
            Pricing Plans That Work for Everyone!
          </p>
          <p className='text-center text-21 xl:text-28 font-sans py-2 pb-6' >
            Click & Scroll to review our plans!
          </p>
          <div className='flex justify-center items-center flex-col xl:flex-row w-full flex-wrap gap-x-4 gap-y-12' >
            <Card
              content={packageCard1}
              customFunc={() => openForm(449.99, "home-page", "Dad Next Door Plan", "Start a Project", "", "", true)}
              heading="Dad Next Door Plan"
              price="449.99"
              noPrice="749.99"
              bgColor="hover:bg-red-300"

            />
            <Card
              heading="Super Dad plan"
              content={packageCard4}
              customFunc={() => openForm(1449.99, "home-page", "Super Dad Plan", "Start a Project", "", "", true)}
              bgColor="hover:bg-violet-400"
              price="1449.99"
              noPrice="1799.99"
            />
            <Card
              content={packageCard2}
              customFunc={() => openForm(749.99, "landing-page", "Father Figure Plan", "Start a Project", "", "", true)}
              heading="Father Figure Plan"
              price="749.99"
              noPrice="1049.99"
              bgColor="hover:bg-green-300"

            />
            <Card
              content={packageCard3}
              bgColor="hover:bg-teal-200"
              heading="Thanks Dad Plan"
              price="1049.99"
              noPrice="1449.99"
              ribbon={true}
              customFunc={() => openForm(1049.99, "home-page", "Thanks Dad Plan", "Start a Project", "", "", true)}
            />
          </div>
          <div className='w-full flex items-center justify-center mt-16' >
            <div className="2xl:1400  lg:w-1000 md:w-700 w-full border-5 border-black rounded-xl  hover:shadow-btn-shadow pb-8 px-4 xl:px-12 transition-all duration-400 relative hover:bg-blue-400">
              <div className='w-full flex xl:flex-row flex-col-reverse justify-center items-center' >
                <div className="flex-1 flex justify-center xl:justify-end ">
                  <img loading="lazy" src={`${PF}bearglass.gif`} className="xl:w-350 object-contain w-200" alt="" />
                </div>
                <div className="flex-1">
                  <p className='xl:text-55 text-46 text-center p-0 xl:pl-8 leading-50' >I Need A beer Plan</p>
                </div>
                <div className='xl:flex-1 flex justify-center items-center my-4' >
                  <img loading="lazy" src={`${PF}premium.png`} className="drop-shadow w-200" alt="" />
                </div>
              </div>
              <div className='w-full flex justify-center items-center border-t-1 border-b-1 border-black mb-4 xl:mb-14' >
                <del><p className='text-18 xl:text-24' >$<del className='text-16 md:text-18 xl:text-28 mr-2 md:mr-4'>10,599.99</del></p></del>
                <h2 className='text-34' >$</h2>
                <p className='text-28 md:text-34 lg:text-55 xl:text-55 font-extrabold p-0 mx-2' >5499.99</p>
              </div>
              <div className='w-full flex 2xl:flex-row flex-col justify-center gap-0 xl:gap-4 2xl:h-fit h-500 lg:h-700 2xl:overflow-hidden overflow-y-scroll overflow-x-hidden card-scroll' >
                <div className='xl:flex-1 px-3  flex flex-col items-center 2xl:items-start 2xl:p-6' >
                  {megaSectionOne.map((item, index) => (
                    <div key={index} className='flex w-full items-center 2xl:justify-start xl:justify-center'>
                      <p className='mr-6 text-16 xl:text-24 2xl:block hidden' >•</p>
                      <p className='text-14 md:text-17 font-sans py-2 font-medium xl:font-bold text-left' >{item}</p>
                    </div>
                  ))}
                </div>
                <div className='xl:flex-1 px-3  flex flex-col items-center xl:items-start  2xl:p-6' >
                  {megaSectionTwo.map((item, index) => (
                    <div key={index} className='flex w-full items-center 2xl:justify-start xl:justify-center'>
                      <p className='mr-6 text-16 xl:text-24 2xl:block hidden' >•</p>
                      <p className='text-14 md:text-17 font-sans py-2 font-medium xl:font-bold text-left' >{item}</p>
                    </div>
                  ))}
                </div>
                <div className='xl:flex-1 px-3  flex flex-col items-center 2xl:items-start  2xl:p-6' >
                  {megaSectionThree.map((item, index) => (
                    <div key={index} className='flex w-full items-center 2xl:justify-start xl:justify-center'>
                      <p className='mr-6 text-16 xl:text-24 2xl:block hidden' >•</p>
                      <p className='text-14 md:text-17 font-sans py-2 font-medium xl:font-bold text-left' >{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className='w-full flex justify-center items-center border-t-1 border-black my-5' >
                <div className='flex-1 cursor-pointer border-r-1 border-black text-right pr-4 xl:pr-8' >
                  <p className='xl:text-21 text-15 font-sans font-medium xl:font-bold' >Speak with us</p>
                  <a href="tel:647-660-1776"><p className='font-sans text-14 xl:text-18 font-normal xl:font-semibold' >647-660-1776</p></a>
                </div>
                <div className='flex-1 flex flex-col items-start cursor-pointer pl-4 xl:pl-8' >
                  <p className='xl:text-21 text-15 font-sans font-medium xl:font-bold whitespace-nowrap ' >Want to discuss?</p>
                  <a href="javascript:$zopim.livechat.window.show()">
                    <p className='font-sans text-14 xl:text-18 font-normal xl:font-semibold' >Live Chat Now</p>
                  </a>
                </div>
              </div>
              <div className='w-full mt-4 justify-center flex' >
                <Button
                  customFunc={() => openForm(5499.99, "landing-page", "I need A beer plan", "Start a Project", "", "", true)}
                  text="Start Project." />
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default SectionThree