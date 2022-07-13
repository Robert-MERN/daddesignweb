import React, { Suspense, useEffect, lazy } from 'react';
// sections import 
const SectionFour = lazy(() => import("../sections/SectionFour"));
const SectionFive = lazy(() => import("../sections/SectionFive"));
const SectionSix = lazy(() => import("../sections/SectionSix"));
const SectionNine = lazy(() => import("../sections/SectionNine"));
// components import 
const Footer = lazy(() => import("../components/Footer"));


const About = () => {
  useEffect(() => {
    document.getElementById("topSection").scrollIntoView({ behavior: "auto" });
    document.getElementById("website-title").innerHTML = "Dad Designs Web | About"
  }, []);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour bgColor="#FBEC7A" about={"About"} />
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionFive bgColor="#FFC2E1" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionSix bgColor="#38F1B0" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionNine bgColor="#FBEC7A" />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <Footer bgColor="#FFCAA8" home={true} />
        </Suspense>
      </div>
    </>
  )
}

export default About