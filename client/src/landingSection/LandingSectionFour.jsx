import React, { lazy, Suspense } from 'react'
const ProcessCard = lazy(() => import("../components/ProcessCard"));

const LandingSectionFour = ({ bgColor }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <div style={{ backgroundColor: bgColor }} className="w-full h-auto flex justify-center py-20 px-4 xl:px-8"  >
                <div className='w-full lg:w-800 2xl:w-1200 flex flex-col items-center' >
                    <p className='lg:text-72 2xl:text-100 leading-60 text-72 text-center my-12' >Our Process</p>
                    <div className='w-full flex flex-col items-center' >
                        <div className="2xl:block hidden" >
                            <img loading="lazy" src={`${PF}curvedarrow.png`} className="w-100 -rotate-12" alt="" />
                        </div>
                        <div className='w-full flex items-center' >
                            <div className="2xl:block hidden" >
                                <img loading="lazy" src={`${PF}curvedarrow.png`} className="w-80 -rotate-90" alt="" />
                            </div>
                            <div className='flex flex-wrap xl:flex-row flex-col w-full justify-center items-center gap-8' >
                                <ProcessCard
                                    number="01"
                                    heading="Planning"
                                    text="Consult with our team of dad-approved experts to communicate your site needs, and determine the best layout for your site that combines aesthetics and functionality."
                                    bgColor={"hover:bg-slate-200"}
                                />
                                <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                                    <ProcessCard
                                        number="02"
                                        heading="Design"
                                        text="We will take your vision and lay down an outline of the visual concepts and flow of your site."
                                        bgColor={"hover:bg-red-400"}
                                    />
                                </Suspense>
                                <div className='w-full flex-wrap flex xl:flex-row-reverse flex-col justify-center items-center gap-8' >
                                    <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                                        <ProcessCard
                                            number="03"
                                            heading="Launch"
                                            text="This step will launch your site, and we will consult you every step of the way to make sure you’re satisfied with the results. Design aspects will be tweaked and fine-tuned to match your branding guidelines."
                                            bgColor={"hover:bg-yellow-500"}
                                        />
                                    </Suspense>
                                    <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                                        <ProcessCard
                                            number="04"
                                            heading="Construction"
                                            text="Our developers will make sure everything flows smoothly on your site, from start to finish - including any app integrations."
                                            bgColor={"hover:bg-teal-400"}
                                        />
                                    </Suspense>
                                </div>

                            </div>
                            <div className="2xl:block hidden" >
                                <img loading="lazy" src={`${PF}curvedarrow.png`} className="w-80 rotate-45" alt="" />
                            </div>
                        </div>
                        <div className="2xl:block hidden" >
                            <img loading="lazy" src={`${PF}curvedarrow.png`} className="w-100 rotate-180" alt="" />
                        </div>
                    </div>
                </div >
            </div >
        </>

    )
}

export default LandingSectionFour