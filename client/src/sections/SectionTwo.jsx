import React, { useEffect, lazy } from 'react'
import { Link } from 'react-router-dom';
import useStateContext from '../context/ContextProvider';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const Button = lazy(() => import("../components/Button"));


const SectionTwo = ({ Services, bgColor }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { setSpecificService, specificService, openForm } = useStateContext();
  useEffect(() => {
    setTimeout(() => {
      if (specificService === "servicesSection") {
        document.getElementById("servicesSection")?.scrollIntoView({ behavior: "smooth" });
        setSpecificService("");
      } else if (specificService === "marketing") {
        document.getElementById("marketing")?.scrollIntoView({ behavior: "smooth" });
        setSpecificService("");
      } else if (specificService === "design-creative") {
        document.getElementById("design-creative")?.scrollIntoView({ behavior: "smooth" });
        setSpecificService("");
      } else {
        setSpecificService("");
      }

    }, 100);
  }, [setSpecificService, specificService]);



  const services = ["Ecommerce/Shopify", "Portfolio sites", "Wordpress builds", "Personal sites", "Business sites", "App integration"];
  const services2 = ["Logos", "Website graphics", "Social media graphics or banners", "Corporation branding", "Video editing", "2D/3D Animation", "Promo videos"];
  const services3 = ["Search Engine Optimization", "Social Media Marketing", "Content Writing"];
  return (
    <>
      <div style={{ backgroundColor: bgColor }} className='pt-20 px-10 w-screen min-h-screen flex flex-col items-center ' >
        <p className='text-55 xl:text-100 mb-20 text-center leading-60' >{Services ? "" : "The services"}</p>

        {!Services &&
          <div className='xl:w-1000 2xl:w-1200  lg:w-800 flex flex-col xl:flex-row mb-16 lg:mb-32' >
            <div className='flex-1 px-8' >
              <img loading="lazy" src={`${PF}wd.png`} alt="" />
            </div>
            <div className='flex-1 xl:px-8' >
              <p className='text-46 xl:text-72 mb-12 text-center xl:text-left leading-50 xl:leading-70'>Web Design & Development</p>
              <p className='text-21 font-sans mb-12 font-semibold' >We can design any type of website from simple landing pages to complex storefronts.</p>
              {services.map((service, index) => (
                <div key={index} className='flex text-21 font-sans font-semibold mb-3 2xl:mb-6' >
                  <ArrowForwardIcon className='mr-6 text-28 mt-1' />
                  <p>{service}</p>
                </div>
              ))}
              <div className='py-10 w-full flex justify-center lg:justify-start' >
                <Link to="/services" >
                  <Button customFunc={() => setSpecificService("servicesSection")} text="Read More." />
                </Link>
              </div>
            </div>
          </div>
        }


        {!Services &&
          <div className='xl:w-1000 2xl:w-1200  lg:w-800 flex flex-col xl:flex-row-reverse mb-16 lg:mb-32' >
            <div className='flex-1 px-8' >
              <img loading="lazy" src={`${PF}gd.png`} alt="" />
            </div>
            <div className='flex-1 xl:px-8' >
              <p className='text-46 xl:text-72 mb-12 text-center xl:text-left leading-50 xl:leading-70'>Design / Creative</p>
              <p className='text-21 font-sans mb-12 font-semibold' >Your image matters. Let us help you with your personal or corporate branding.</p>
              {services2.map((service, index) => (
                <div key={index} className='flex text-21 font-sans font-semibold mb-3 2xl:mb-6' >
                  <ArrowForwardIcon className='mr-6 text-28 mt-1' />
                  <p>{service}</p>
                </div>
              ))}
              <div className='py-10 w-full flex justify-center lg:justify-start' >
                <Link to="/services" >
                  <Button customFunc={() => setSpecificService("design-creative")} text="Read More." />
                </Link>
              </div>
            </div>
          </div>}



        {!Services &&
          <div className='xl:w-1000 2xl:w-1200  lg:w-800  flex flex-col xl:flex-row mb-16 lg:mb-32' >
            <div className='flex-1 xl:px-8' >
              <img loading="lazy" src={`${PF}ssm.png`} alt="" />
            </div>
            <div className='flex-1 xl:px-8' >
              <p className='text-46 xl:text-72 mb-12 text-center xl:text-left leading-50 xl:leading-70'>Marketing</p>
              <p className='text-21 font-sans mb-8 font-semibold' >We'll be your voice.</p>
              {services3.map((service, index) => (
                <div key={index} className='flex text-21 font-sans font-semibold mb-3 2xl:mb-6' >
                  <ArrowForwardIcon className='mr-6 text-28 mt-1' />
                  <p>{service}</p>
                </div>
              ))}
              <div className='pt-10 w-full flex justify-center lg:justify-start' >
                <Link to="/services" >
                  <Button customFunc={() => setSpecificService("marketing")} text="Read More." />
                </Link>
              </div>
            </div>
          </div>}

        {Services &&
          <div id="servicesSection" className='xl:w-1000 2xl:w-1200  lg:w-800 flex flex-col xl:flex-row mb-16 lg:mb-32' >
            <div id='' className='flex-1 xl:px-8' >
              <img loading="lazy" src={`${PF}wd.png`} alt="" />
            </div>
            <div className='flex-1 xl:px-8' >
              <p className='text-46 xl:text-72 mb-12 text-center xl:text-left leading-50 xl:leading-70'>Web Design & Development</p>
              <p className='text-21 font-sans mb-12 font-semibold text-center xl:text-left ' >
                First impressions are everything and your website is a representation of who you are. It's the first place anyone looks when it comes to selling your services, showcasing your work, or connecting with new leads. Let's build you a website that you (and your dad!) would be proud of. Complex, multi-page website? Small, simple landing page? If you can dream it, we can build it. Our team of experienced web developers will work with you from start to finish to figure out exactly what you need and how we can translate your unique personality onto the web.
              </p>
              <div className='py-10 w-full flex justify-center lg:justify-start' >
                <Link to="/web-design-development" >
                  <Button text="Read More." />
                </Link>
              </div>
            </div>
          </div>
        }

        {Services &&
          <div className='xl:w-1000 2xl:w-1200  lg:w-800 flex flex-col xl:flex-row-reverse mb-16 lg:mb-32' >
            <div className='flex-1 xl:px-8' >
              <img loading="lazy" src={`${PF}ld.png`} alt="" />
            </div>
            <div className='flex-1 xl:px-8' >
              <p className='text-46 xl:text-72 mb-12 text-center xl:text-left leading-50 xl:leading-70'>Logo Design</p>
              <p className='text-21 font-sans mb-12 font-semibold text-center xl:text-left ' >
                Logo design might seem like a simple task, but can be one of the trickiest parts of branding. Your logo is the first line of branding and becomes an icon that people associate with who YOU are. Work with our team of experienced designers throughout the whole creative process to design a logo that conveys your image, the way you want.
              </p>
              <div className='py-10  w-full flex justify-center lg:justify-start' >

                <Link to="/logo-design" >
                  <Button text="Read More." />
                </Link>
              </div>
            </div>
          </div>
        }

        {Services &&
          <div className='xl:w-1000 2xl:w-1200  lg:w-800 flex flex-col xl:flex-row mb-16 lg:mb-32' >
            <div className='flex-1 xl:px-8' >
              <img loading="lazy" src={`${PF}monitors.webp`} alt="" />
            </div>
            <div className='flex-1 xl:px-8' >
              <p className='text-46 xl:text-72 mb-12 text-center xl:text-left leading-50 xl:leading-70'>
                Web-Application Development
              </p>
              <p className='text-21 font-sans mb-12 font-semibold text-center xl:text-left ' >
                Need a custom web application built from the ground up? Don't know where to start? We know you may not have the in-house expertise to build a strong, functional product. Let us do it for you. We build & launch responsive web apps that combine high performance with ease of use.
              </p>
              <p className='text-21 font-sans mb-12 font-semibold text-center xl:text-left ' >
                Our tech-obsessed dads are all up to date on the latest tech stacks, and can work with you to build exactly what you need from the ground up.
              </p>
              <div className='py-10 w-full flex justify-center lg:justify-start' >
                <Link to="/web-application-development" >
                  <Button text="Read More." />
                </Link>
              </div>
            </div>
          </div>
        }

        {Services &&
          <div className='xl:w-1000 2xl:w-1200  lg:w-800 flex flex-col xl:flex-row-reverse  mb-16 lg:mb-32' >
            <div className='flex-1 xl:px-8' >
              <img loading="lazy" src={`${PF}seo.png`} alt="" />
            </div>
            <div className='flex-1 xl:px-8' >
              <p className='text-46 xl:text-72 mb-12 text-center xl:text-left leading-50 xl:leading-70'>Search Engine Optimization</p>
              <p className='text-21 font-sans mb-12 font-semibold text-center xl:text-left ' >
                What's SEO? SEO targets unpaid traffic through the use of search engines and keywords rather than using ad spend to bring more quality, relevant visitors to your website, resulting in more conversions or leads for your business. If you haven't been optimizing your site or content for SEO, start now! Our team will help develop a targeted strategy that will work for your specific niche.
              </p>
              <div className='py-10 w-full flex justify-center lg:justify-start' >
                <Link to="/search-engine-optimization" >
                  <Button text="Read More." />
                </Link>
              </div>
            </div>
          </div>
        }


        {Services &&
          <div id="marketing" className='xl:w-1000 2xl:w-1200  lg:w-800 flex flex-col xl:flex-row mb-16 lg:mb-32' >
            <div className='flex-1 xl:px-8' >
              <img loading="lazy" src={`${PF}ssm.png`} alt="" />
            </div>
            <div className='flex-1 xl:px-8' >
              <p className='text-46 xl:text-72 mb-12 text-center xl:text-left leading-50 xl:leading-70'>Social Media Marketing</p>
              <p className='text-21 font-sans mb-12 font-semibold text-center xl:text-left ' >
                Facebook and TikTok and Instagram, oh my! Staying relevant in today's world of short attention spans and consumer mindset can be overwhelming. If you don't have a clue where to start when it comes to social media, don't worry. Our marketing department will assign you a strategist that will work with you from start to finish to figure out:
              </p>
              {services3.map((service, index) => (
                <div key={index} className='flex text-21 font-sans font-semibold mb-6' >
                  <ArrowForwardIcon className='mr-6 text-28 mt-1' />
                  <p>{service}</p>
                </div>
              ))}
              <div className='py-10 w-full flex justify-center lg:justify-start' >
                <Link to="/social-media-marketing" >
                  <Button text="Read More." />
                </Link>
              </div>
            </div>
          </div>
        }

        {Services &&
          <div className='xl:w-1000 2xl:w-1200  lg:w-800 flex flex-col xl:flex-row-reverse  mb-16 lg:mb-32' >
            <div className='flex-1 xl:px-8' >
              <img loading="lazy" src={`${PF}mad.png`} alt="" />
            </div>
            <div className='flex-1 xl:px-8' >
              <p className='text-46 xl:text-72 mb-12 text-center xl:text-left leading-50 xl:leading-70'>Mobile Application Development</p>
              <p className='text-21 font-sans mb-12 font-semibold text-center xl:text-left ' >
                Got an idea for an app? Need help building it? We'd love to. With more than 1000+ apps developed, from native to cross-platform apps, we have the right combo of technology, people, and experience to deliver custom apps that fit your specifications. We're with you every step of the way- right from the initial concept design of your app to its launch on targeted platforms.
              </p>
              <div className='py-10 w-full flex justify-center lg:justify-start' >
                <Link to="/mobile-application-development" >
                  <Button text="Read More." />
                </Link>
              </div>
            </div>
          </div>
        }
        {Services &&
          <div id="design-creative" className='xl:w-1000 2xl:w-1200  lg:w-800 flex flex-col xl:flex-row mb-16 lg:mb-32' >
            <div className='flex-1 xl:px-8' >
              <img loading="lazy" src={`${PF}gd.png`} alt="" />
            </div>
            <div className='flex-1 xl:px-8' >
              <p className='text-46 xl:text-72 mb-12 text-center xl:text-left leading-50 xl:leading-70'>
                Graphic Design
              </p>
              <p className='text-21 font-sans mb-12 font-semibold text-center xl:text-left ' >
                We can't all be artistic. But at Dad Designs, we are! Need something designed? Throw it at us.
                We have a team who can bring any vision you have to life. Flyers? Logos? Social media graphics or banners? Website graphics? You name it, we can design it. Just chat with one of our designers today and let us know what you need.
              </p>
              <div className='py-10 w-full flex justify-center lg:justify-start' >
                <Link to="/graphic-design" >
                  <Button text="Read More." />
                </Link>
              </div>
            </div>
          </div>
        }
        {Services &&
          <div className='xl:w-1000 2xl:w-1200  lg:w-800 flex flex-col xl:flex-row-reverse  mb-16 lg:mb-32' >
            <div className='flex-1 xl:px-8' >
              <img loading="lazy" src={`${PF}ve.png`} alt="" />
            </div>
            <div className='flex-1 xl:px-8' >
              <p className='text-46 xl:text-72 mb-12 text-center xl:text-left leading-50 xl:leading-70'>
                Video Editing
              </p>
              <p className='text-21 font-sans mb-12 font-semibold text-center xl:text-left ' >
                Take your branding a step further and bring it to life. Video is the future of the web, from social media to advertising. We offer 2D and 3D animation from scratch, or we can create promo or product videos if you already have footage. Let us tell your story.
              </p>
              <div className='py-10 w-full flex justify-center lg:justify-start' >
                <Link to="/video-editing" >
                  <Button text="Read More." />
                </Link>
              </div>
            </div>
          </div>
        }
        {Services &&
          <div className='xl:w-1000 2xl:w-1200  lg:w-800 flex flex-col xl:flex-row mb-16 lg:mb-32' >
            <div className='flex-1 xl:px-8' >
              <img loading="lazy" src={`${PF}cw.png`} alt="" />
            </div>
            <div className='flex-1 xl:px-8' >
              <p className='text-46 xl:text-72 mb-12 text-center xl:text-left leading-50 xl:leading-70'>
                Content Writing & Publications</p>
              <p className='text-21 font-sans mb-12 font-semibold text-center xl:text-left ' >Need some words to go with that? Consult your trusty dads for help with content writing - we can craft anything from blogs and newsletters to landing pages and websites. Let us know what you want to communicate and we'll do the rest while making sure you sound fresh, snappy and on-brand.</p>
              <div className='py-10 w-full flex justify-center lg:justify-start' >
                <Link to="/content-writing-publications" >
                  <Button text="Read More." />
                </Link>
              </div>
            </div>
          </div>
        }
        {Services &&
          <div className='xl:w-1000 2xl:w-1200  lg:w-800 mb-20 flex flex-col items-center' >
            <p className='text-46 xl:text-72 mb-20 leading-40 xl:leading-70 text-center' >
              12 years of building digital products and we are just getting started!
            </p>
            <Button
              customFunc={() => openForm("", "service-page", "", "Start a project", true)}
              text="Start a project."
            />
          </div>
        }
        {!Services &&
          <div className='w-full flex justify-center mb-8' >
            <Link to="/services" >
              <Button extraPadding={true} customFunc={() => setSpecificService("none")} text="View More" />
            </Link>
          </div>
        }
      </div>
    </>
  )
}

export default SectionTwo