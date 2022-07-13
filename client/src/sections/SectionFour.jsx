import React from 'react'
import CheckIcon from '@material-ui/icons/Check';
import { policy, termsCondition, aboutUs } from '../data/data';
import { Markup } from 'interweave';


const SectionFour = ({ bgColor, landingPage, PrivacyPolicy, terms, about, service, serviceText, image }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div style={{ backgroundColor: bgColor }} className='text-center py-6 lg:py-32 w-full flex flex-col items-center'>
        <p className={`2xl:text-100 lg:text-72 text-46 mb-4 lg:mb-20 ${service || about || terms || PrivacyPolicy ? "pt-16" : ""} ${(!PrivacyPolicy && !terms && !service && !about) ? "xl:block hidden" : ""}`} >{PrivacyPolicy || terms || about || service || "Why Choose Us"}</p>
        <div className='2xl:w-1400 xl:w-1000 lg:w-800 w-full xl:flex-row flex-col-reverse xl:justify-center  items-center flex' >

          {(!PrivacyPolicy && !terms && !about && !service) &&
            <div className='flex-1 text-left' >
              <div className='flex 2xl:w-760 px-8 mb-8 items-start'>
                <div className='xl:block hidden' >
                  <CheckIcon className='scale-150 mr-8 text-left mt-2' />
                </div>
                <p className='xl:hidden text-24 mr-8' >•</p>
                <p className='font-sans text-21 font-semibold'>
                  We're a team of dads. That's right. We're just like you. Our name was born out of a team of dads who formed a collective of nerds to help people on the web, just like your dad would help you with your kitchen sink. You can trust us to treat you like family, every time.</p>
              </div>
              <div className='flex xl:w-760 px-8 mb-8 items-start'>
                <div className='xl:block hidden' >
                  <CheckIcon className='scale-150 mr-8 mt-2' />
                </div>
                <p className='xl:hidden text-24 mr-8' >•</p>
                <p className='font-sans text-21 font-semibold'>
                  We want you to be happy! We believe in timely delivery and customer satisfaction. If you aren't happy with your results, let us know. We'll work with you until you are, or your money back, guaranteed.</p>
              </div>
              <div className='flex xl:w-760 px-8 mb-8 items-start'>
                <div className='xl:block hidden' >
                  <CheckIcon className='scale-150 mr-8 mt-2' />
                </div>
                <p className='xl:hidden text-24 mr-8' >•</p>
                <p className='font-sans text-21 font-semibold'>We're experts! We're good at what we do, because we love what we do. Our team has over 8 years of experience in the industry.</p>
              </div>
              <div className='flex xl:w-760 px-8 mb-8 items-start'>
                <div className='xl:block hidden' >
                  <CheckIcon className='scale-150 mr-8 mt-2' />
                </div>
                <p className='xl:hidden text-24 mr-8' >•</p>
                <p className='font-sans text-21 font-semibold'>
                  We can create anything on the web. Trust us with your vision. We'll make it. Let us save you valuable time and energy, giving you more time to focus on your priorities.
                </p>
              </div>
            </div>}
          {landingPage &&
            <div className="flex-1">
              <img loading="lazy" src={`${PF}whychoose.png`} className='object-contain' alt="" />
            </div>
          }
          {PrivacyPolicy &&
            <div className='w-full flex flex-col px-5' >
              {policy.map((item, index) => (
                <div key={index} className='w-full my-5' >
                  <p className='text-28 xl:text-38  font-bold text-left font-sans leading-30 my-4'>{item.title}</p>
                  <p className='text-18 xl:text-24 font-semibold text-left font-sans'>
                    <Markup content={item.text} />
                  </p>
                </div>
              ))}
            </div>}
          {terms &&
            <div className='w-full flex flex-col px-5' >
              {termsCondition.map((item, index) => (
                <div key={index} className='w-full my-5' >
                  <p className='text-28 xl:text-38  font-bold text-left font-sans leading-30 my-4'>{item.title}</p>
                  <p className='text-18 xl:text-24 font-semibold text-left font-sans'>{item.text}</p>
                </div>
              ))}

            </div>}
          {about &&
            <div className='w-full flex flex-col px-5' >
              {aboutUs.map((item, index) => (
                <div key={index} className='w-full my-5' >
                  <p className='text-18 xl:text-24 font-semibold text-left font-sans'>{item}</p>
                </div>
              ))}

            </div>}
          {service &&
            <div className='w-screen flex flex-col justify-center px-3 lg:px-12' >
              <div className='2xl:w-1400 xl:w-1200 w-full px-3 xl:px-8 flex md:flex-row flex-col justify-center items-center' >
                <div className='flex-1' >
                  <img loading="lazy" src={`${PF}${image}`} className="object-contain" alt="" />
                </div>
                <div className='flex-1 p-0 lg:p-4' >
                  <p className='text-19 xl:text-24 font-semibold text-center md:text-left font-sans my-4'>{serviceText}</p>
                </div>
              </div>
            </div>
          }

        </div>
      </div>
    </>
  )
}

export default SectionFour