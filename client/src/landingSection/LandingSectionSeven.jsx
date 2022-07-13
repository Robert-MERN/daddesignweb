import React, { lazy, Suspense } from 'react'
import useStateContext from '../context/ContextProvider';
import { megaSectionOne, megaSectionTwo, megaSectionThree, packageCard1, packageCard2, packageCard3, packageCard4, serviceTwoPackage, serviceTwoPackage2, SEOPackage, serviceFivePackage, serviceFivePackage2, serviceFivePackage3, serviceFivePackage4, contentPricing } from "../data/data";
const Button = lazy(() => import("../components/Button"));
const Card = lazy(() => import("../components/Card"));

const LandingSectionSeven = ({ bgColor, serviceTwo, serviceThree, serviceFour, serviceFive, serviceSix, pageName, content }) => {
    const { openForm } = useStateContext();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <div id="priceSection" className='px-4 xl:px-10 w-screen min-h-screen flex flex-col items-center' style={{ backgroundColor: bgColor }} >
                <div className={`2xl:w-1400 ${content ? "lg:w-1200" : "lg:w-800"} w-full lg:px-8`} >
                    <div className='w-full my-28 flex-col flex items-center'>
                        <p className='text-center text-55 leading-50 xl:text-72 xl:leading-70 pb-2' >
                            Pricing Plans That Work for Everyone!
                        </p>
                        <p className='text-center text-21 xl:text-28 font-sans pb-2' >
                            Click & Scroll to review our plans!
                        </p>
                        {!serviceTwo && !serviceThree && !serviceFour && !serviceFive && !serviceSix && !content &&
                            <div className='2xl:w-1400 lg:w-1000 w-full flex xl:flex-row flex-col flex-wrap gap-12 xl:gap-20 justify-center items-center my-16'>
                                <Card
                                    content={packageCard1}
                                    customFunc={() => openForm(449.99, pageName, "Dad Next Door Plan", "Start a Project", "", "", true)}
                                    heading="Dad Next Door Plan"
                                    price="449.99"
                                    noPrice="749.99"
                                    bgColor="hover:bg-red-300"
                                />
                                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                                    <Card
                                        content={packageCard2}
                                        customFunc={() => openForm(749.99, pageName, "Father Figure Plan", "Start a Project", "", "", true)}
                                        heading="Father Figure Plan"
                                        price="749.99"
                                        noPrice="1049.99"
                                        bgColor="hover:bg-green-300"

                                    />
                                </Suspense>
                                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                                    <Card
                                        content={packageCard3}
                                        bgColor="hover:bg-teal-200"
                                        heading="Thanks Dad Plan"
                                        price="1049.99"
                                        noPrice="1449.99"
                                        ribbon={true}
                                        customFunc={() => openForm(1049.99, pageName, "Thanks Dad Plan", "Start a Project", "", "", true)}
                                    />
                                </Suspense>
                                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                                    <Card
                                        content={packageCard4}
                                        customFunc={() => openForm(1449.99, pageName, "Super Dad Plan", "Start a Project", "", "", true)}
                                        heading="Super Dad Plan"
                                        bgColor="hover:bg-violet-400"
                                        price="1449.99"
                                        noPrice="1799.99"
                                    />
                                </Suspense>

                            </div>
                        }
                        {serviceTwo &&
                            <div className='2xl:w-1400 lg:w-1000 w-full flex xl:flex-row flex-col flex-wrap gap-12 xl:gap-20 justify-center items-center my-16'>
                                <Card
                                    content={serviceTwoPackage}
                                    customFunc={() => openForm(1449.99, pageName, "Tie-Tightner Plan", "Start a Project", "", "", true)}
                                    heading="Tie-Tightner Plan"
                                    bgColor="hover:bg-green-300"
                                    price="149.99"
                                />
                                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >

                                    <Card
                                        content={serviceTwoPackage2}
                                        customFunc={() => openForm(1449.99, pageName, "Hand-Holding Plan", "Start a Project", "", "", true)}
                                        heading="Hand-Holding Plan"
                                        bgColor="hover:bg-violet-400"
                                        price="249.99"
                                    />
                                </Suspense>
                            </div>
                        }
                        {serviceFour &&
                            <div className='2xl:w-1400 lg:w-1000 w-full flex xl:flex-row flex-col flex-wrap gap-12 xl:gap-20 justify-center items-center my-16'>
                                <Card
                                    content={SEOPackage}
                                    customFunc={() => openForm(999.99, pageName, "The Fix It Plan", "Start a Project", "", "", true)}
                                    heading="The Fix It Plan"
                                    bgColor="hover:bg-green-300"
                                    price="999.99"
                                    month="/month"
                                    single={true}
                                />
                            </div>
                        }
                        {serviceFive &&
                            <div className='2xl:w-1400 lg:w-1000 w-full flex xl:flex-row flex-col flex-wrap gap-12 xl:gap-20 justify-center items-center my-16'>
                                <Card
                                    content={serviceFivePackage}
                                    customFunc={() => openForm(1449.99, pageName, "DAD BRONZE PLAN", "Start a Project", "", "", true)}
                                    heading="DAD BRONZE PLAN"
                                    bgColor="hover:bg-green-300"
                                    price="249.99"
                                    month="/month"
                                />
                                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >

                                    <Card
                                        content={serviceFivePackage2}
                                        customFunc={() => openForm(1449.99, pageName, "DAD SILVER PLAN", "Start a Project", "", "", true)}
                                        heading="DAD SILVER PLAN"
                                        bgColor="hover:bg-violet-400"
                                        price="499.99"
                                        month="/month"
                                    />
                                </Suspense>
                                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >

                                    <Card
                                        content={serviceFivePackage3}
                                        customFunc={() => openForm(1449.99, pageName, "DAD GOLD PLAN", "Start a Project", "", "", true)}
                                        heading="DAD GOLD PLAN"
                                        bgColor="hover:bg-red-300"
                                        price="499.99"
                                        month="/month"
                                    />
                                </Suspense>
                                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >

                                    <Card
                                        content={serviceFivePackage4}
                                        customFunc={() => openForm(1449.99, pageName, "DAD ULTRA PLAN", "Start a Project", "", "", true)}
                                        heading="DAD ULTRA PLAN"
                                        bgColor="hover:bg-teal-200"
                                        price="999.99"
                                        month="/month"
                                    />
                                </Suspense>
                            </div>
                        }
                        {content &&
                            <div className='xl:w-1600 w-full flex xl:flex-row flex-col flex-wrap gap-6 lg:gap-3 2xl:gap-8 justify-center items-center my-16'>
                                <Card
                                    content={contentPricing}
                                    customFunc={() => openForm(1449.99, pageName, "1 Pages", "Start a Project", "", "", true)}
                                    heading="1 Pages"
                                    bgColor="hover:bg-green-300"
                                    price="39.80"
                                    price2="9.95"
                                    price3="12.44"
                                    writing={true}

                                />
                                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >

                                    <Card
                                        content={contentPricing}
                                        customFunc={() => openForm(1449.99, pageName, "5 Pages", "Start a Project", "", "", true)}
                                        heading="5 Pages"
                                        bgColor="hover:bg-violet-400"
                                        price="199.00"
                                        price2="49.75"
                                        price3="62.19"
                                        writing={true}

                                    />
                                </Suspense>
                                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >

                                    <Card
                                        content={contentPricing}
                                        customFunc={() => openForm(1449.99, pageName, "10 Pages", "Start a Project", "", "", true)}
                                        heading="10 Pages"
                                        bgColor="hover:bg-red-300"
                                        price="375.00"
                                        price2="93.74"
                                        price3="117.19"
                                        writing={true}
                                    />
                                </Suspense>
                            </div>
                        }
                        {!serviceTwo && !serviceFour && !serviceFive && !content &&
                            <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                                <div className="2xl:1400 xl:w-1200 lg:w-1000 md:w-700  w-full border-5 border-black rounded-xl  hover:shadow-btn-shadow pb-8 px-4 xl:px-12 transition-all duration-400 relative hover:bg-blue-400">
                                    <div className='w-full flex xl:flex-row flex-col-reverse justify-center items-center' >
                                        {!serviceSix &&
                                            <div className="flex-1 flex justify-center xl:justify-end ">
                                                <img loading="lazy" src={`${PF}bearglass.gif`} className="xl:w-350 object-contain w-200" alt="" />
                                            </div>
                                        }
                                        <div className="flex-1">
                                            <p className='xl:text-55 text-46 text-center p-0 xl:pl-8 leading-50 my-8' >{serviceSix?.packageName || "I Need A Beer Plan"}</p>
                                        </div>

                                        {!serviceSix &&
                                            <div className='xl:flex-1 flex justify-center items-center my-4' >
                                                <img loading="lazy" src={`${PF}premium.png`} className="drop-shadow w-200" alt="" />
                                            </div>}
                                    </div>
                                    <div className='w-full flex justify-center items-center border-t-1 border-b-1 border-black mb-4 xl:mb-14' >

                                        <del><p className='text-17 xl:text-21' >$<del className='text-15 md:text-17 xl:text-28 mr-2 md:mr-4'>10,599.99</del></p></del>

                                        <h2 className='text-28' >$</h2>
                                        <p className='text-28 md:text-34 lg:text-55 xl:text-55 font-extrabold p-0 mx-2' >{serviceSix?.price || "5499.99"}</p>
                                    </div>
                                    <div className='w-full flex xl:flex-row flex-col justify-center gap-0 xl:gap-4 xl:h-fit h-600 xl:overflow-hidden overflow-y-scroll overflow-x-hidden card-scroll' >
                                        <div className='xl:flex-1 px-3  flex flex-col items-center xl:items-start xl:p-6' >
                                            {megaSectionOne.map((item, index) => (
                                                <div key={index} className='flex w-full items-center'>
                                                    <p className='mr-6 text-16 xl:text-24' >•</p>
                                                    <p className='text-14 md:text-17 font-sans py-2 font-medium xl:font-bold text-left' >{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='xl:flex-1 px-3  flex flex-col items-center xl:items-start  xl:p-6' >
                                            {megaSectionTwo.map((item, index) => (
                                                <div key={index} className='flex w-full items-center'>
                                                    <p className='mr-6 text-16 xl:text-24' >•</p>
                                                    <p className='text-14 md:text-17 font-sans py-2 font-medium xl:font-bold text-left' >{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='xl:flex-1 px-3  flex flex-col items-center xl:items-start  xl:p-6' >
                                            {megaSectionThree.map((item, index) => (
                                                <div key={index} className='flex w-full items-center'>
                                                    <p className='mr-6 text-16 xl:text-24' >•</p>
                                                    <p className='text-14 md:text-17 font-sans py-2 font-medium xl:font-bold text-left' >{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-center items-center border-t-1 border-black my-5' >
                                        <div className='flex-1 cursor-pointer border-r-1 border-black text-right pr-4 xl:pr-8' >
                                            <p className='xl:text-21 text-15 font-sans font-medium xl:font-bold' >Speak with us</p>
                                            <a href="tel:647-660-1776"><p className='font-sans text-14 xl:text-18 font-normal xl:font-semibold' >647-660-1776</p></a>
                                        </div>
                                        <div className='flex-1 cursor-pointer pl-4 xl:pl-8' >
                                            <p className='xl:text-21 text-15 font-sans font-medium xl:font-bold whitespace-nowrap ' >Want to discuss?</p>
                                            <a href="javascript:$zopim.livechat.window.show()">
                                                <p className='font-sans text-14 xl:text-18 font-normal xl:font-semibold' >Live Chat Now</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='w-full mt-4 justify-center flex' >
                                        <Button
                                            customFunc={() => openForm(5499.99, pageName, "I need A beer plan", "Start a Project", "", "", true)}
                                            text="Start Project." />
                                    </div>

                                </div>
                            </Suspense>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingSectionSeven