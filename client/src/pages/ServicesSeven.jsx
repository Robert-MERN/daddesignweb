import React, { useEffect, lazy, Suspense } from 'react'
// sections import 
const SectionSix = lazy(() => import("../sections/SectionSix"));
const SectionFour = lazy(() => import("../sections/SectionFour"));
const SectionFive = lazy(() => import("../sections/SectionFive"));
const SectionNine = lazy(() => import("../sections/SectionNine"));
// landing sections import 
const LandingSectionFive = lazy(() => import("../landingSection/LandingSectionFive"));
const LandingSectionSeven = lazy(() => import("../landingSection/LandingSectionSeven"));
const LandingSectionOne = lazy(() => import("../landingSection/LandingSectionOne"));
// components import
const Footer = lazy(() => import("../components/Footer"));

const ServicesSeven = () => {
  useEffect(() => {
    document.getElementById("topSection").scrollIntoView({ behavior: "auto" });
    document.getElementById("website-title").innerHTML = "Dad Designs Web | Graphic Design"
  }, []);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour
          serviceText="We can't all be artistic. But at Dad Designs, we are! Need something designed? Throw it at us. We have a team who can bring any vision you have to life. Flyers? Logos? Social media graphics or banners? Website graphics? You name it, we can design it. Just chat with one of our designers today and let us know what you need."
          bgColor="#FBEC7A"
          service="Graphic Design"
          image="gd.png"
        />
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionSix services={true} bgColor="#C6F4AF" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <LandingSectionFive half={true} bgColor="#FFC2E1" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <LandingSectionOne logo={true} bgColor="#ffc780" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionFive bgColor="#b3fffd" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <LandingSectionSeven serviceTwo={true} pageName={"service-page"} bgColor="#FBEC7A" />
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

export default ServicesSeven