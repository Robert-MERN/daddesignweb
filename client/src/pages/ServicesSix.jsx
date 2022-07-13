import React, { useEffect, lazy, Suspense } from 'react'
// sections import 
const SectionSix = lazy(() => import("../sections/SectionSix"));
const SectionFour = lazy(() => import("../sections/SectionFour"));
const SectionFive = lazy(() => import("../sections/SectionFive"));
const SectionNine = lazy(() => import("../sections/SectionNine"));
// landing sections import 
const LandingSectionOne = lazy(() => import("../landingSection/LandingSectionOne"));
const LandingSectionFive = lazy(() => import("../landingSection/LandingSectionFive"));
const LandingSectionSeven = lazy(() => import("../landingSection/LandingSectionSeven"));
// components import
const Footer = lazy(() => import("../components/Footer"));

const ServicesSix = () => {
  useEffect(() => {
    document.getElementById("topSection").scrollIntoView({ behavior: "auto" });
    document.getElementById("website-title").innerHTML = "Dad Designs Web | Mobile Application Development"
  }, []);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour
          serviceText="Got an idea for an app? Need help building it? We'd love to. With more than 1000+ apps developed, from native to cross-platform apps, we have the right combo of technology, people, and experience to deliver custom apps that fit your specifications. We're with you every step of the way- right from the initial concept design of your app to its launch on targeted platforms."
          bgColor="#FBEC7A"
          service="Mobile Application Development"
          image="mad.png"
        />
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionSix bgColor="#C6F4AF" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <LandingSectionFive half={true} bgColor="#FFC2E1" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <LandingSectionOne bgColor="#ffc780" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <LandingSectionSeven serviceSix={{ packageName: "Dad Bod Plan", price: "18,999.99" }} pageName={"service-page"} bgColor="#FBEC7A" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionFive bgColor="#b3fffd" />
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

export default ServicesSix