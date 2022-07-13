import React, { useEffect, lazy, Suspense } from 'react'
//sections import
const SectionFour = lazy(() => import("../sections/SectionFour"));
// components import
const Footer = lazy(() => import("../components/Footer"));

const PrivacyPolicy = () => {
  useEffect(() => {
    document.getElementById("topSection").scrollIntoView({ behavior: "auto" });
    document.getElementById("website-title").innerHTML = "Dad Designs Web | Privacy Policy"
  }, []);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour bgColor="#FBEC7A" PrivacyPolicy={"Privacy & Policy"} />
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <Footer bgColor="#FFCAA8" home={true} />
        </Suspense>
      </div>
    </>
  )
}

export default PrivacyPolicy