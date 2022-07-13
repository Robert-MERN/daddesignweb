import React, { Suspense, useEffect, lazy } from 'react'
// sections import 
const SectionOne = lazy(() => import("../sections/SectionOne"));
const SectionEight = lazy(() => import("../sections/SectionEight"));
const SectionNine = lazy(() => import("../sections/SectionNine"));
// components import 
const Footer = lazy(() => import("../components/Footer"));

const Contact = () => {
    useEffect(() => {
        document.getElementById("topSection").scrollIntoView({ behavior: "auto" });
        document.getElementById("website-title").innerHTML = "Dad Designs Web | Contact Us";
      
    }, []);
    return (
        <>
            <div id="topSection" className='w-screen min-h-screen variation-one' >
                <SectionOne contact={true} />
                <Suspense>
                    <SectionNine bgColor="#FFC2E1" />
                </Suspense>
                <Suspense>
                    <SectionEight bgColor="#66B6FF" />
                </Suspense>
                <Suspense>
                    <Footer bgColor="#FFCAA8" home={true} />
                </Suspense>
            </div>
        </>

    )
}

export default Contact