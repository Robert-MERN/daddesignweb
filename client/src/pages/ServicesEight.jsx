import React, { useEffect, lazy, Suspense } from 'react'

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
const CustomOrderVideo = lazy(() => import("../sections/CustomOrderVideo"));

const ServicesEight = () => {
  useEffect(() => {
    document.getElementById("topSection").scrollIntoView({ behavior: "auto" });
    document.getElementById("website-title").innerHTML = "Dad Designs Web | Video Editing"
  }, []);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour
          serviceText="Take your branding a step further and bring it to life. Video is the future of the web, from social media to advertising. We offer 2D and 3D animation from scratch, or we can create promo or product videos if you already have footage. Let us tell your story."
          bgColor="#FBEC7A"
          service="Video Editing"
          image="ve.png"
        />
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionFive services={true} bgColor="#b3fffd" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionSix services2={true} bgColor="#C6F4AF" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <LandingSectionFive half={true} bgColor="#FFC2E1" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionFive bgColor="#d1b3ff" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <CustomOrderVideo bgColor="#ffc780" />
        </Suspense>
        {/* <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <LandingSectionSeven pageName={"sevices-page"} bgColor="#FBEC7A" />
        </Suspense> */}
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

export default ServicesEight