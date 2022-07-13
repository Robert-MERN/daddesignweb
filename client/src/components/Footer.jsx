import React from 'react'
import { Link } from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const Footer = ({ home, bgColor }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>

      <div style={{ backgroundColor: bgColor }} className="py-8 px-8 flex flex-col items-center" >
        {home &&
          <div className='w-full lg:w-1000 2xl:w-1200 flex xl:flex-row flex-col justify-center flex-wrap' >
            <div className="flex-1 px-6  mb-14 cursor-pointer flex justify-center">
              <Link to="/home" >
                <img loading="lazy" src={`${PF}icon.webp`} className='object-contain w-fit lg:w-400  xl:w-fit' alt="" />
              </Link>
            </div>
            <div className="flex-2 px-0 sm:px-3 mb-14 xl:text-left text-center">
              <p className='text-24 my-1 mb-6' >quick links</p>
              <Link to="/home" >
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Home</p>
              </Link>
              <Link to="/services" >
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Services</p>
              </Link>
              <Link to="/about" >
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >About</p>
              </Link>
              <Link to="/contact" >
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Contact</p>
              </Link>
            </div>
            <div className="flex-2 px-0 sm:px-3 mb-14 xl:text-left text-center">
              <p className='text-24 my-1 mb-6' >Services</p>
              <Link to="/web-design-services-v1-A" target="_blank">
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Web Design Promo</p>
              </Link>
              <Link to="/web-design-development">
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Web Design & Development</p>
              </Link>
              <Link to="/logo-design">
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Logo Design</p>
              </Link>
              <Link to="/web-application-development">
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Web Application Development</p>
              </Link>
              <Link to="/search-engine-optimization">
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Search Engine Optimization</p>
              </Link>
              <Link to="/social-media-marketing">
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Social Media Marketing</p>
              </Link>
              <Link to="/mobile-application-development">
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Mobile Application Development</p>
              </Link>
              <Link to="/graphic-design">
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Graphic Design</p>
              </Link>
              <Link to="/video-editing">
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Video Editing</p>
              </Link>
              <Link to="/content-writing-publications">
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Content Writing & Publications</p>
              </Link>
              <Link to="/testimonials">
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Testimonials</p>
              </Link>
            </div>
            <div className="flex-1 px-0 sm:px-3 mb-14 xl:text-left">
              <p className='text-24 my-1 mb-6 text-center xl:text-left' >Contact</p>
              <a rel="noreferrer noopener" href="tel:647-660-1776">
                <p className='text-18 font-bold font-sans my-1 flex xl:justify-start justify-center w-full items-center cursor-pointer hover:underline' ><CallIcon className='mr-3' /> <span>647-660-1776</span></p>
              </a>
              <a rel="noreferrer noopener" href="mailto:sales@daddesignsweb.com">
                <p className='text-18 font-bold font-sans my-3 flex xl:justify-start justify-center w-full items-center cursor-pointer hover:underline' ><MailIcon className='mr-3' /> <span>sales@daddesignsweb.com</span></p>
              </a>
              <p className='text-18 font-bold font-sans mt-3 flex xl:justify-start justify-center w-full items-start xl:items-center text-center xl:text-left' >
                <LocationOnIcon className='mr-0 sm:mr-3' style={{ transform: "scale(1.2)" }} />
                <span>218-39 New Delhi Drive, Markham ON L3S 0E1</span></p>
            </div>
          </div>
        }
        <div className={`w-full lg:w-1000 2xl:w-1400 items-center flex justify-between flex-col xl:flex-row py-6 ${home && "border-t-1 border-black"}`}>
          <div>
            <p className='text-17 font-medium font-sans my-1 text-center' >Copyright © Dad Designs Web - All Rights Reserved 2022</p>
          </div>
          {!home &&
            <Link to="/home" >
              <img loading="lazy" className='w-300 object-contain' src={`${PF}icon.webp`} alt="" />
            </Link>
          }
          <div className='flex' >
            <Link to="/terms-conditions" >
              <p className='text-14 sm:text-17 font-medium font-sans pr-4 my-1 border-r border-slate-500 cursor-pointer' >Terms & Conditions</p>
            </Link>
            <Link to="/privacy-policy" >
              <p className='text-14 sm:text-17 font-medium font-sans my-1  pl-4 cursor-pointer' >Privacy Policy</p>
            </Link>
          </div>
          <div className='flex items-center justify-between my-4' >
            <a rel="noreferrer noopener" href="https://www.instagram.com/daddesignsweb/" target="_blank" >
              <InstagramIcon className='scale-150 mr-3' />
            </a>
            <a rel="noreferrer noopener" href="https://www.facebook.com/daddesignsweb" target="_blank" >
              <FacebookIcon className='scale-150 ml-3' />
            </a>
          </div>
        </div>
        {!home &&
          <div className={`w-full lg:w-1000 2xl:w-1400 flex md:flex-row flex-col items-center mb-10 xl:mb-0 `} >
            <a rel="noreferrer noopener" href="tel:647-660-1776" className="flex-1 md:border-r-1 md:border-black md:pr-5 flex md:justify-end justify-center font-sans text-18 font-semibold items-center">
              <CallIcon className='mr-3' /> <span>647-660-1776</span>
            </a>
            <a rel="noreferrer noopener" href="mailto:sales@daddesignsweb.com" className="flex-1 md:pl-5 flex font-sans text-18 font-semibold items-center">
              <MailIcon className='mr-3' /> <span>sales@daddesignsweb.com</span>
            </a>
          </div>
        }

      </div >
    </>
  )
}

export default Footer