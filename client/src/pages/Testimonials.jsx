import React, { useEffect, lazy, Suspense } from 'react'
import LandingSectionOne from '../landingSection/LandingSectionOne';
// sections import 
const SectionSix = lazy(() => import("../sections/SectionSix"));
const SectionFour = lazy(() => import("../sections/SectionFour"));
const SectionFive = lazy(() => import("../sections/SectionFive"));
const SectionNine = lazy(() => import("../sections/SectionNine"));
// landing sections import 
const LandingSectionFive = lazy(() => import("../landingSection/LandingSectionFive"));
const LandingSectionSeven = lazy(() => import("../landingSection/LandingSectionSeven"));
// components import
const Footer = lazy(() => import("../components/Footer"));
const Testimonials = () => {
  useEffect(() => {
    document.getElementById("topSection").scrollIntoView({ behavior: "auto" });
    document.getElementById("website-title").innerHTML = "Dad Designs Web | Testimonials"
  }, []);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  return (
    <>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionFive top={true} bgColor="#b3fffd" />
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

export default Testimonials