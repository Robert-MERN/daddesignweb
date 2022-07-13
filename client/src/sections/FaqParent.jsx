import React, { Suspense, lazy } from 'react'
import useStateContext from '../context/ContextProvider'
const FaqSection = lazy(() => import("../components/FaqSection"));


const FaqParent = ({ bgColor }) => {
    const { heightAnimation, heightPress } = useStateContext();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const scrollToPrice = () => {
        document.getElementById("priceSection").scrollIntoView({ behavior: "smooth" });
        console.log("first")
      }

    return (
        <>
            <div style={{ backgroundColor: bgColor }} className="w-full h-auto flex flex-col items-center justify-center px-5 lg:px-28 2xl:px-14" >
                <p className='mt-0 mb-8 xl:my-24 2xl:text-100 text-55 xl:text-72 text-center leading-60 select-none' >FAQs</p>
                <FaqSection
                    heading="How much does a website cost?"
                    text="It depends on what you need, please click here to view some of the packages we offer."
                    func={() => heightPress("tabOne")}
                    show={heightAnimation.tabOne}
                    scrollTo={scrollToPrice}
                />
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <FaqSection
                        heading="How soon can my website launch?"
                        text="Your launch date will depend on the complexity of your website. Our usual turnaround is between 20-30 business days, depending on our client’s ability to provide feedback and the overall complexity of the build. If you have a specific launch date in mind, your Project Manager will be happy to work with you in setting up a timeline to achieve it."
                        func={() => heightPress("tabTwo")}
                        show={heightAnimation.tabTwo}
                    />
                </Suspense>
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <FaqSection
                        heading="Can someone help me write content? "
                        text="If you find yourself having difficulty writing your own content, we're happy to put you in touch with a content strategist or copywriter. You can have someone help you for your entire site, or just a few pages - we're happy to be flexible. "
                        func={() => heightPress("tabThree")}
                        show={heightAnimation.tabThree}
                    />
                </Suspense>
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <FaqSection
                        heading="How do I promote my new website? "
                        text="There are a number of great ways to promote your website when it launches, and we're happy to help! Here are a few of our favorite ways to promote your website launch: "
                        func={() => heightPress("tabFour")}
                        show={heightAnimation.tabFour}
                        keys={["Social Media Marketing", "Search Engine Optimization", "Email to Your Newsletter Subscribers", "Pay-Per-Click Advertising"]}
                       
                    />
                </Suspense>
                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <FaqSection
                        heading="Will you train me on how to use my website?"
                        text="Your Account Manager will walk through training on how to use your site as we approach launch. We wait until your site is almost complete so that you can learn to use the CMS and make updates on the backend of your actual website! We'll also record this training so you can see it in the future."
                        func={() => heightPress("tabFive")}
                        show={heightAnimation.tabFive}
                    />
                </Suspense>

            </div >
        </>
    )
}

export default FaqParent