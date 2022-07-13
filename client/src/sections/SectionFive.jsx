import React, { Suspense, useState, lazy } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-material-ui-carousel'
import { videoLinks, videoLinks2 } from '../data/data';
import Video from '../components/Video';
const Button = lazy(() => import("../components/Button"));


const SectionFive = ({ landingPage, bgColor, services, top }) => {
  const [index, setIndex] = useState(6)
  const project = videoLinks.slice(0, index);
  const project2 = videoLinks2.slice(0, index);
  const addingContent = () => {
    if (index <= 9) {
      setIndex(index + 7);
    } else {
      setIndex(index + 6);

    }
  }
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;




  return (
    <>
      <div style={{ backgroundColor: bgColor }} className={`"w-full min-h-100 flex flex-col ${landingPage ? "justify-between" : "justify-center"} items-center ${top? "pt-32 pb-8": "py-8"} px-8" `}>
        {!services &&
          <p className='text-46 xl:text-72 2xl:text-100 text-center' >Our Happy Customers</p>
        }
        {!services &&
          <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
            <Carousel className='my-8' animation='slide' duration={1700} navButtonsAlwaysInvisible={true} cycleNavigation={true} autoPlay={false} >
              <div className='2xl:w-1000 xl:w-800 w-full p-6' >
                <p className='xl:text-24 text-21 font-sans xl:font-semibold font-medium text-center mb-12' >
                  “I hate outsourcing anything. I never trust anyone and always firmly believe that I can do everything myself. Well. I just learned a lesson. I'm starting my own small business and am constantly overloaded with work. My friend suggested I hand over my social media marketing to Dad Designs Web, who she uses. I thought that was stupid. I could just do it myself. I lost so much sleep and worked way more hours than I needed to until I finally gave in and agreed to try them out. Absolutely no regrets! I can't believe I ever lived without them. Their team is quick, efficient, and so easy to work with. I would never trust anyone else but them to handle my social media.”
                </p>
                <p className='text-38 text-center' >-Shauna T.</p>
                <p className='font-sans font-bold text-24 text-amber-200 text-center' >Business Owner.</p>
              </div>
              <div className='xl:w-1000 w-full p-6'>
                <p className='xl:text-24 text-21 font-sans xl:font-semibold font-medium text-center mb-12' >
                  “Working with Dad Designs Web really was like working with your dad! - My whole experience from start to finish was impressive. I had a complex, multi-page storefront that I needed built and they were able to deliver above and beyond what I thought was possible for the pricing. Since they built my site I asked if they could also do a logo redesign for me as well. The team worked with me to make sure I got exactly what I wanted.”
                </p>
                <p className='text-38 text-center' >-Rayna P.</p>
                <p className='font-sans font-bold text-24 text-amber-200 text-center' >E-Commerce Store Owner</p>
              </div>
              <div className='xl:w-1000 w-full p-6' >
                <p className='xl:text-24 text-21 font-sans xl:font-semibold font-medium text-center mb-12' >
                  “I have no experience in web design. I needed a quick fix for a client and my usual developer was unavailable. I tried to figure out how to do it myself but no luck. Wasn't really sure who to turn to, and stumbled across Dad Designs. They were super helpful and finished the landing page I needed before the requested delivery date. No complaints here.”
                </p>
                <p className='text-38 text-center' >-TIM R.</p>
                <p className='font-sans font-bold text-24 text-amber-200 text-center' >Agency Owner</p>
              </div>
              <div className='xl:w-1000 w-full p-6' >
                <p className='xl:text-24 text-21 font-sans xl:font-semibold font-medium text-center mb-12' >
                  “The main thing I'd like to compliment here is the customer service and communication! From the beginning, I felt like they cared and I wasn't just another number. They made sure they fully understood exactly what I wanted for my site and even made suggestions I hadn't thought of to make it better. Multiple progress check ins to make sure everything was what I wanted. The end result was a beautiful site that showcased my product and its offerings better than I could have imagined.”
                </p>
                <p className='text-38 text-center' >-Chris T.</p>
                <p className='font-sans font-bold text-24 text-amber-200 text-center' >Startup Founder.</p>
              </div>
              <div className='xl:w-1000 w-full p-6' >
                <p className='xl:text-24 text-21 font-sans xl:font-semibold font-medium text-center mb-12' >
                  “I originally came to Dad Designs Web for what I thought would be a simple, one and done website I needed built for an event I was hosting. I was so happy with the service and the end product that I stayed for marketing and design services as well. The team I was working with had already taken the effort to fully understand my brand and value prop, and communicated it well, so why wouldn't I want to continue working with them?”
                </p>
                <p className='text-38 text-center' >-Tara C.</p>
                <p className='font-sans font-bold text-24 text-amber-200 text-center' >Health Coach.</p>
              </div>
            </Carousel>
          </Suspense>

        }
        {!services &&
          <div className='w-full xl:w-1000 2xl:1200 2xl:w-1400 flex xl:flex-row flex-col flex-wrap gap-6 justify-center items-center mb-8 mt-28 px-3'>
            {project.map((item, index) => (
              <Video key={index} poster={item.poster} source={item.src} />
            ))
            }
          </div>

        }
        {services &&
          <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
            <div className='2xl:w-1400 lg:w-900 w-full' >
              <div className='flex w-full xl:flex-row flex-col' >
                <div className="flex-1">
                  <p className='2xl:text-100 2xl:leading-80 leading-60 text-72 py-4 xl:text-left text-center' >The Work We Have Done</p>
                </div>
                <div className="flex-1">
                  <p className='font-sans text-20 xl:text-28 font-semibold xl:font-bold py-8 xl:text-left text-center' >Take a look at our portfolio to get an idea of our creativity.</p>
                </div>
              </div>
              <div className='px-3 w-full xl:1200 2xl:w-1400 flex xl:flex-row flex-col flex-wrap gap-6 justify-center items-center mb-8 mt-28'>
                {project2.map((item, index) => (
                  <Video key={index} source={item} />
                ))
                }
              </div>
            </div>
          </Suspense>
        }

        {!services &&
          (videoLinks.length > 6 && project.length !== videoLinks.length) &&
          <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
            <div className='w-full flex justify-center' >
              <Button customFunc={addingContent} text="view more." />
            </div>
          </Suspense>
        }
        {services &&
          (videoLinks2.length > 6 && project2.length !== videoLinks2.length) &&
          <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
            <div className='w-full flex justify-center' >
              <Button customFunc={addingContent} text="view more." />
            </div>
          </Suspense>
        }
      </div>
    </>
  )
}

export default SectionFive
