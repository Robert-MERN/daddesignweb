import React, { lazy, Suspense } from 'react'
import useStateContext from '../context/ContextProvider';
const Button = lazy(() => import("../components/Button"));
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const LandingSectionTwo = ({ bgColor }) => {
    const { openForm } = useStateContext();
    return (
        <>
            <div style={{ backgroundColor: bgColor }} className="w-full h-auto flex justify-center py-20 px-8"  >
                <div className='w-full lg:w-800 2xl:w-1000 flex flex-col items-center' >
                    <p className='text-34 xl:text-65 mb-10 lg:mb-24 text-center leading-50 xl:leading-60' >
                        You don't have to be a whiz at everything. Let us bring the Dad power. Over 2,000 businesses and individuals have trusted us with their projects. We get the job done, every time.
                    </p>
                    <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                        <Button customFunc={() => openForm("", "landing-page", "", "Contact us now to schedule a free consultation!")} text="Contact us now to schedule a free consultation!" />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default LandingSectionTwo