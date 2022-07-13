import React, { lazy, Suspense } from 'react'
import useStateContext from '../context/ContextProvider';
import ChatIcon from '@material-ui/icons/Chat';
import CallIcon from '@material-ui/icons/Call';
import CheckIcon from '@material-ui/icons/Check';



const Button = lazy(() => import("../components/Button"));
const SectionOne = ({ landingPage, home, contact, Services, price }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { openForm } = useStateContext();
  const scrollToService = () => {
    document.getElementById("servicesSection").scrollIntoView({ behavior: "smooth" });
  }
  const scrollToPrice = () => {
    document.getElementById("priceSection").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <React.Fragment>
      <div className='bg-gradient-to-b from-violet-300 to-cyan-100 pt-36 xl:pt-48 px-6 md:px-10 w-full min-h-screen text-center flex flex-col items-center' >

        {landingPage &&
          <div className='2xl:w-1400 lg:w-1000 xl:1200 flex flex-col xl:flex-row-reverse mb-20' >
            <div className='flex-1 px-0 lg:px-8 flex justify-center items-center lg:items-start 2xl:items-center' >
              <img src={`${PF}monitors.webp`} className="object-contain" alt="" />
            </div>
            <div className='flex-1 px-0 md:px-4 2xl:px-8' >
              <p className='text-46 lg:text-55 2xl:text-72 mb-12 text-center xl:text-left leading-50 xl:leading-70 font-1200'>Stunning custom websites that convert <span style={{ color: "#44017c" }} className='text-yellow-500' >Starting from just ${price || "449.99"}.</span></p>
              <p className='text-21 font-sans mb-12 font-semibold text-center xl:text-left' >From personal websites to complex corporate pages or online stores, Dad Designs Web is your one stop shop for all things web.</p>
              <div className='flex items-center text-21 font-extrabold mb-6 text-center xl:text-left font-sans' >
                <p>Tell us what you need. We'll do the rest.</p>
              </div>
              <div className='w-full justify-center flex xl:justify-start items-center my-5' >
                <div className='flex-1 cursor-pointer flex xl:justify-start justify-center items-center border-r-1 border-black text-right' >
                  <CallIcon className='mr-2 md:mr-4  text-24 text-blue-800' />
                  <a href="tel:647-660-1776"><p className='font-sans text-14 xl:text-21 font-normal xl:font-bold' >647-660-1776</p></a>
                </div>
                <a href="javascript:$zopim.livechat.window.show()" className='flex-1 cursor-pointer flex items-center justify-center'>
                  <ChatIcon className='mr-1 md:mr-2 text-24 text-yellow-500' />
                  <p id="live-chat" className='font-sans text-14 xl:text-21 font-normal xl:font-bold' >Live Chat Now</p>
                </a>
              </div>
              <div className='py-10 flex flex-col xl:flex-row xl:justify-between items-center gap-y-12 xl:gap-y-0' >
                <Button
                  customFunc={() => openForm("", "landing-page-v1", "", "Get Started Now", true, false)}
                  text="Get Started Now" />
                <img loading="lazy" src={`${PF}rating.png`} className="object-contain" alt="" />
              </div>
            </div>
          </div>
        }

        {contact &&
          <div className='xl:w-1000 lg:w-800 mb-20' >
            <p className='text-65 xl:text-100 mb-20 leading-60 xl:leading-100' >Get In Touch With Us 24/7!</p>
            <p className='text-24 font-sans font-semibold mb-20' >We love taking on exciting new projects for aspiring businesses and growth-oriented clients. Get in touch with us today for a free strategic consultation!</p>
            <div className='w-full flex justify-center' >
              <Button
                customFunc={() => openForm("", "contact", "", "Let's Get started", true)}
                text="Let's Get started" />
            </div>
          </div>
        }
        {contact &&
          <div className='xl:w-1000 lg:w-800 w-full items-center flex justify-center mb-8 xl:my-58 relative' >
            <img loading="lazy" src={`${PF}yellowcircle.svg`} alt="" className='relative icon w-300 md:w-600 z-0' />
            <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>}  >
              <img loading="lazy" src={`${PF}logo.webp`} className='w-80 sm:w-120 md:w-250 xl:w-250 object-contain absolute m-auto inset-0 text-center' alt="" />
            </Suspense>
          </div>
        }


        {Services &&
          <div className='xl:w-1000 lg:w-800 mb-20' >
            <p className='text-65 xl:text-100 mb-20 leading-60 xl:leading-100' >
              The Services
            </p>
            <p className='text-24 font-sans font-semibold text-center xl:text-left flex items-center mb-2 w-full justify-center lg:justify-start' >
              <span className='mr-5 font-extrabold hidden lg:block' >
                <CheckIcon className='mr-8 hidden xl:block text-left align-middle' />
              </span>
              Unique Web Design to Build Your Brand
            </p>
            <p className='text-24 font-sans font-semibold mb-20 text-center xl:text-left flex items-center w-full justify-center lg:justify-start' >
              <span className='mr-5 font-extrabold hidden lg:block' >
                <CheckIcon className='mr-8 hidden xl:block text-left align-middle' />
              </span>
              Create live segments and target the right people for messages based on their behaviors.
            </p>
            <div className='w-full flex justify-center' >
              <Button customFunc={scrollToService} text="view services" />
            </div>
          </div>
        }

        {Services &&
          <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>}  >
            <div className='xl:w-1000 lg:w-800 w-full items-center flex justify-center mb-8 xl:my-58 relative' >
              <img loading="lazy" src={`${PF}yellowcircle.svg`} alt="" className='relative icon w-300 md:w-600 z-0' />
              <img loading="lazy" src={`${PF}logo.webp`} className='w-80 sm:w-120 md:w-250 xl:w-250 object-contain absolute m-auto inset-0 text-center' alt="" />
            </div>
          </Suspense>
        }

        {Services &&
          <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>}  >
            <div className='xl:w-1000 lg:w-800 mb-20' >
              <p className='text-34 xl:text-55 mb-20 leading-40 xl:leading-70 text-center' >
                First impressions are everything and your website is a representation of who you are. It's the first place anyone looks when it comes to selling your services, showcasing your work, or connecting with new leads. Let's build you a website that you (and your dad!) would be proud of. Complex, multi-page website? Small, simple landing page? If you can dream it, we can build it.
              </p>
            </div>
          </Suspense>
        }
        {Services &&
          <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>}  >
            <div className='xl:w-1000 lg:w-800 mb-20' >
              <p className='text-34 xl:text-55 mb-20 leading-40 xl:leading-60 text-center' >
                Our team of experienced web developers will work with you from start to finish to figure out exactly what you need and how we can translate your unique personality onto the web.
              </p>
            </div>
          </Suspense>
        }
        {home &&
          <div className='xl:w-1000 lg:w-800 mb-20' >
            <p className='text-65 xl:text-72 2xl:text-100 mb-20 leading-60 xl:leading-100' >Create anything on the internet. we've got you.</p>
            <p className='text-24 font-sans font-semibold mb-14' >Dad Designs Web is a full-service agency ready to help with all your web, content, marketing, and development needs. Let our experienced team of experts help bring your vision to life</p>
            <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>}  >
              <div className='flex items-center text-21 font-sans font-extrabold mb-6 text-center justify-center' >
                <p>Tell us what you need. We'll do the rest.</p>
              </div>
            </Suspense>
            <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>}  >
              <div className='w-full justify-center flex xl:justify-start items-center mb-5' >
                <div className='flex-1 cursor-pointer flex justify-end items-center border-r-1 border-black text-right pr-4' >
                  <CallIcon className='mr-4  text-24 xl:text-28 text-blue-800' />
                  <a href="tel:647-660-1776"><p className='font-sans text-14 xl:text-21 font-normal xl:font-bold' >647-660-1776</p></a>
                </div>
                <a href="javascript:$zopim.livechat.window.show()" className='flex-1 cursor-pointer flex items-center  pl-4'>
                  <ChatIcon className='mr-2 text-24 xl:text-28 text-yellow-500' />
                  <p id="live-chat" className='font-sans text-14 xl:text-21 font-normal xl:font-bold' >Live Chat Now</p>
                </a>
              </div>
            </Suspense>
            <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>}  >
              <div className='w-full flex justify-center' >
                <Button customFunc={scrollToPrice} text="view Pricing" />
              </div>
            </Suspense>
          </div>
        }


        {
          home &&
          <div className='xl:w-1000 lg:w-800 w-full items-center flex justify-center mb-8 xl:my-58 relative' >
            <img loading="lazy" src={`${PF}yellowcircle.svg`} alt="" className='relative icon w-300 md:w-600 z-0' />
            <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>}  >
              <img loading="lazy" src={`${PF}logo.webp`} className='w-80 sm:w-120 md:w-250 xl:w-250 object-contain absolute m-auto inset-0 text-center' alt="" />
            </Suspense>
          </div>
        }

        {/* landing page */}
        {
          landingPage &&
          <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>}  >
            <div className='xl:w-1000 lg:w-800 flex flex-col items-center'>
              <p className='text-46 xl:text-38 mb-4 leading-50'>We build interactive and beautiful websites that engage your customers, and lead to more conversions in less time.</p>
              <div className='flex xl:w-800 w-full flex-row justify-between my-10' >
                <img loading="lazy" className='xl:w-200 md:w-250 sm:w-150 w-100' src={`${PF}goodfirm.webp`} alt="" />
                <img loading="lazy" className='xl:w-200 md:w-250 sm:w-150 w-100' src={`${PF}clutch.webp`} alt="" />
                <img loading="lazy" className='xl:w-200 md:w-250 sm:w-150 w-100' src={`${PF}certified.webp`} alt="" />
              </div>
            </div>
          </Suspense>
        }
      </div >
    </React.Fragment>
  )
}

export default SectionOne
