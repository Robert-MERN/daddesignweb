import React, { lazy, Suspense } from 'react'
import { Link } from "react-router-dom";
const Button = lazy(() => import("../components/Button"));



const SectionSeven = ({ bgColor }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div style={{ backgroundColor: bgColor }} className="w-full h-auto flex justify-center py-20 px-8"  >
        <div className='w-full xl:w-1000 lg:w-800 flex flex-col items-center' >
          <p className='text-46 lg:w-72 2xl:text-100 mb-24 text-center leading-60 2xl:leading-90' >Contact us now to schedule a free consultation!</p>
          <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>}  >
            <Link to="/contact">
              <Button text="Contact now." />
            </Link>
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default SectionSeven