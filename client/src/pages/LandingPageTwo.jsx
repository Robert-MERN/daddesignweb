import React, { useEffect, lazy, Suspense } from 'react'

// sections import 
const SectionOne = lazy(() => import("../sections/SectionOne"));
const SectionFour = lazy(() => import("../sections/SectionFour"));
const SectionFive = lazy(() => import("../sections/SectionFive"));
const SectionNine = lazy(() => import("../sections/SectionNine"));
const FaqParent = lazy(() => import("../sections/FaqParent"));
// landing sections import 
const LandingSectionOne = lazy(() => import("../landingSection/LandingSectionOne"));
const LandingSectionTwo = lazy(() => import("../landingSection/LandingSectionTwo"));
const LandingSectionThree = lazy(() => import("../landingSection/LandingSectionThree"));
const LandingSectionFour = lazy(() => import("../landingSection/LandingSectionFour"));
const LandingSectionFive = lazy(() => import("../landingSection/LandingSectionFive"));
const LandingSectionSix = lazy(() => import("../landingSection/LandingSectionSix"));
const LandingSectionSeven = lazy(() => import("../landingSection/LandingSectionSeven"));
// components import
const Footer = lazy(() => import("../components/Footer"));


const LandingPage = () => {
    useEffect(() => {
        document.getElementById("topSection").scrollIntoView({ behavior: "auto" });
        document.getElementById("website-title").innerHTML = "Stunning Custom Websites That Convert Starting From Just $149.99"
    }, []);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <div id="topSection" className='w-screen min-h-screen variation-one' >
                <SectionOne price={"149.99"} landingPage={true} />
                <img loading="lazy" src={`${PF}landLine1.webp`} alt="" />
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <LandingSectionOne bgColor="#FBEC7A" />
                </Suspense>
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <img loading="lazy" src={`${PF}customline3.jpg`} alt="" />
                    <SectionFive landingPage={true} bgColor="#FFC2E1" />
                </Suspense>
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <img loading="lazy" src={`${PF}customline2.jpg`} alt="" />
                    <LandingSectionThree bgColor="#FCEAC7" />
                </Suspense>
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <img loading="lazy" src={`${PF}landLine4.jpg`} alt="" />
                    <LandingSectionFour bgColor="#F8C5E0" />
                </Suspense>
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <img loading="lazy" src={`${PF}landLinejack.jpg`} alt="" />
                    <LandingSectionFive bgColor="#FCEAC7" />
                </Suspense>
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <img loading="lazy" src={`${PF}landLine5.jpg`} alt="" />
                    <LandingSectionSix bgColor="#C1F585" />
                </Suspense>
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <img loading="lazy" src={`${PF}customline.jpg`} alt="" />
                    <LandingSectionSeven pageName={"landing-page"} bgColor="#FBEC7A" />
                </Suspense>
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <img loading="lazy" src={`${PF}custom36.jpg`} alt="" />
                    <SectionFour bgColor="#C1F585" landingPage={true} />
                </Suspense>
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <img loading="lazy" src={`${PF}custom35.jpg`} alt="" />
                    <FaqParent bgColor="#F8C5E0" />
                </Suspense>
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <img loading="lazy" src={`${PF}landLine9.jpg`} alt="" />
                    <LandingSectionTwo bgColor="#66B6FF" />
                </Suspense>
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <img loading="lazy" src={`${PF}linemiddle.jpg`} alt="" />
                    <SectionNine bgColor="#dbc074" />
                </Suspense>
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <img loading="lazy" src={`${PF}linelast.jpg`} alt="" />
                    <Footer home={false} bgColor="#FFCAA8" />
                </Suspense>
            </div>
        </>
    )
}

export default LandingPage