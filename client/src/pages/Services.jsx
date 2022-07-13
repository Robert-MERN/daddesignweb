import React, { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

// sections import 
const SectionOne = lazy(() => import("../sections/SectionOne"));
const SectionTwo = lazy(() => import("../sections/SectionTwo"));
const SectionEight = lazy(() => import("../sections/SectionEight"));
const SectionNine = lazy(() => import("../sections/SectionNine"));

// components import
const Footer = lazy(() => import("../components/Footer"));

const Services = () => {
  useEffect(() => {
    document.getElementById("topSection").scrollIntoView({ behavior: "auto" });
    document.getElementById("website-title").innerHTML = "Dad Designs Web | Mobile Application"
  }, []);
  const location = useLocation().state;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div id="topSection" className='w-screen min-h-screen variation-one' >
        <SectionOne Services={true} />

        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionTwo serviceNav={location} bgColor="#FCEAC7" Services={true} />
        </Suspense>

        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <SectionEight bgColor="#C6F4AF" />
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

export default Services