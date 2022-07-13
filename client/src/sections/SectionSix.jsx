import React from 'react'

const SectionSix = ({ bgColor, services, services2 }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div style={{ backgroundColor: bgColor }} className="w-full h-auto flex flex-col items-center py-20 px-8 2xl:px-8" >
        <p className='text-46 lg:text-72 2xl:text-100 mb-14 text-center xl:leading-80 leading-50' >{"Our tech stack"}</p>
        <div className='2xl:w-1400 lg:w-1000 w-full p-6 ' >
          {!services && !services2 &&
            <p className='xl:text-34 text-28 text-center' >Front-End</p>
          }
          {!services && !services2 &&
            <div className='flex justify-center flex-wrap w-full my-10 gap-3 lg:gap-8 2xl:gap-20'>
              <img loading="lazy" src={`${PF}html.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}css.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}react.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}angular.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}vue.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}bootstrap.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}go.png`} className='object-contain w-100' alt="" />
            </div>
          }
          {!services && !services2 &&
            <p className='xl:text-34 text-28 text-center' >Back-End</p>
          }
          {!services && !services2 &&
            <div className='flex 2xl:w-full justify-center flex-wrap w-full my-10 gap-3 lg:gap-8 2xl:gap-20'>
              <img loading="lazy" src={`${PF}php.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}javascript.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}python.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}java.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}node.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}falcon.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}android.png`} className='object-contain w-100' alt="" />
            </div>
          }
          {
            services &&
            <div className='flex justify-center flex-wrap w-full my-10 gap-3 lg:gap-8 2xl:gap-20'>
              <img loading="lazy" src={`${PF}a-i.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}pro-c.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}p-s.png`} className='object-contain w-100' alt="" />
            </div>
          }
          {
            services2 &&
            <div className='flex justify-center flex-wrap w-full my-10 gap-3 lg:gap-8 2xl:gap-20'>
              <img loading="lazy" src={`${PF}p-r.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}f-c-p.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}3d-max.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}maya.png`} className='object-contain w-100' alt="" />
              <img loading="lazy" src={`${PF}blender.png`} className='object-contain w-100' alt="" />
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default SectionSix