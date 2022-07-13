import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SectionEight = ({ bgColor }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  const Button = () => {
    return (
      <button className='hidden' >click</button>
    )
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Button />,
    prevArrow: <Button />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };
  return (
    <>
      <div style={{ backgroundColor: bgColor }} className="py-28 px-8 flex justify-center" >
        <div className='2xl:w-1400 lg:w-800 md:w-500 w-250' >
          <div>
            <Slider autoplay={true} {...settings}>
              <img loading="lazy" src={`${PF}vogue.png`} alt="" className='w-200 xl:px-8 px-3' />
              <img loading="lazy" src={`${PF}forbes.png`} alt="" className='w-200 xl:px-8 px-3' />
              <img loading="lazy" src={`${PF}complex.png`} alt="" className='w-200 xl:px-8 px-3' />
              <img loading="lazy" src={`${PF}buzzfeed.webp`} alt="" className='w-200 xl:px-8 px-3' />
              <img loading="lazy" src={`${PF}supreme.webp`} alt="" className='w-200 xl:px-8 px-3' />
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionEight