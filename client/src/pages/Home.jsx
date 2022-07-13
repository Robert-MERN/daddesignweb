import React, { Suspense, useEffect, lazy } from 'react'
// setcions import
import SectionFive from '../sections/SectionFive'; 
import LandingSectionOne from '../landingSection/LandingSectionOne';
const SectionOne = lazy(() => import("../sections/SectionOne"));
const SectionTwo = lazy(() => import("../sections/SectionTwo"));
const SectionThree = lazy(() => import("../sections/SectionThree"));
const SectionFour = lazy(() => import("../sections/SectionFour"));
const SectionSix = lazy(() => import("../sections/SectionSix"));
const SectionSeven = lazy(() => import("../sections/SectionSeven"));
const SectionEight = lazy(() => import("../sections/SectionEight"));
const SectionNine = lazy(() => import("../sections/SectionNine"));
// components import 
const Footer = lazy(() => import("../components/Footer"));

const Home = () => {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    document.getElementById("topSection").scrollIntoView({ behavior: "auto" });
    document.getElementById("website-title").innerHTML = "Dad Designs Web | Home"
  }, []);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div id="topSection" className='w-screen min-h-screen variation-one' >
        {/* intro */}
        <SectionOne home="true" />
        {/* portfolio */}
        <LandingSectionOne bgColor="#ffc780" />
        {/* services */}
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionTwo bgColor="#FCEAC7" />
        </Suspense>
        {/* testimonials */}
        <SectionFive bgColor="#FFC2E1" />

        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionFour landingPage={true} bgColor="#C1F585" />
        </Suspense>

        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionThree bgColor="#FBEC7A" />
        </Suspense>

        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionSix bgColor="#38F1B0" />
        </Suspense>

        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionSeven bgColor="#BACE55" />
        </Suspense>

        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionEight bgColor="#C6F4AF" />
        </Suspense>

        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionNine bgColor="#66B6FF" />
        </Suspense>

        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <Footer bgColor="#FFCAA8" home={true} />
        </Suspense>
      </div>
    </>
  )
}

export default Home