import React, { useEffect, lazy, Suspense } from 'react'
// sections import 
const SectionFour = lazy(() => import("../sections/SectionFour"));
const SectionFive = lazy(() => import("../sections/SectionFive"));
const SectionNine = lazy(() => import("../sections/SectionNine"));
// landing sections import 
const LandingSectionFive = lazy(() => import("../landingSection/LandingSectionFive"));
const LandingSectionSeven = lazy(() => import("../landingSection/LandingSectionSeven"));
// components import
const Footer = lazy(() => import("../components/Footer"));
const ServicesFive = () => {
  useEffect(() => {
    document.getElementById("topSection").scrollIntoView({ behavior: "auto" });
    document.getElementById("website-title").innerHTML = "Dad Designs Web | Social Media Marketing"
  }, []);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour
          serviceText="Facebook and TikTok and Instagram, oh my! Staying relevant in today's world of short attention spans and consumer mindset can be overwhelming. If you don't have a clue where to start when it comes to social media, don't worry. Our marketing department will assign you a strategist that will work with you from start to finish to figure out:"
          bgColor="#FBEC7A"
          service="Social Media Marketing"
          image="ssm.png"
        />
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <LandingSectionFive half={true} bgColor="#FFC2E1" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionFive bgColor="#b3fffd" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <LandingSectionSeven serviceFive={true} pageName={"service-page"} bgColor="#FBEC7A" />
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

export default ServicesFive