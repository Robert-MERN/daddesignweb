import React, { useEffect, lazy, Suspense } from 'react'
// sections import 
const SectionFour = lazy(() => import("../sections/SectionFour"));
const SectionFive = lazy(() => import("../sections/SectionFive"));
const SectionNine = lazy(() => import("../sections/SectionNine"));
const CustomOrderSection = lazy(() => import("../sections/CustomOrderSection"));
// landing sections import 
const LandingSectionFive = lazy(() => import("../landingSection/LandingSectionFive"));
const LandingSectionSeven = lazy(() => import("../landingSection/LandingSectionSeven"));
// components import
const Footer = lazy(() => import("../components/Footer"));

const ServicesNine = () => {
  useEffect(() => {
    document.getElementById("topSection").scrollIntoView({ behavior: "auto" });
    document.getElementById("website-title").innerHTML = "Dad Designs Web | Content Writing"
  }, []);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour
          serviceText="Need some words to go with that? Consult your trusty dads for help with content writing - we can craft anything from blogs and newsletters to landing pages and websites. Let us know what you want to communicate and we'll do the rest while making sure you sound fresh, snappy and on-brand."
          bgColor="#FBEC7A"
          service="Content Writing & Publications"
          image="cw.png"
        />
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <LandingSectionFive half={true} bgColor="#FFC2E1" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionFive bgColor="#b3fffd" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <LandingSectionSeven pageName={"content-writing"} content={true} bgColor="#FBEC7A" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <CustomOrderSection
          slider1={{name:"No of Pages", min: 1, max: 100}}
          bgColor="#ffc780" />
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

export default ServicesNine