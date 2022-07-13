import React, { lazy, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import useStateContext from '../context/ContextProvider';
const Button = lazy(() => import("./Button"));

//  bg-top bg-no-repeat bg-contain hover:bg-hero-pattern

const Card = ({ price, price2, price3, noPrice, heading, customFunc, normal, content, bgColor, ribbon, month, single, writing }) => {
    const { openForm } = useStateContext();
    const [sumPrice, setSumPrice] = useState(Number(price));
    const [stars, setStars] = useState(3);
    const addPrice = () => {
        if (stars < 5) {
            if (stars === 3) {
                setSumPrice(sumPrice + Number(price2));
            } else if (stars === 4) {
                setSumPrice(sumPrice + Number(price3));
            }
            setStars(stars + 1);

        }
    }
    const lessPrice = () => {
        if (stars > 3) {
            if (stars === 5) {
                setSumPrice(sumPrice - Number(price3));
            } else if (stars === 4) {
                setSumPrice(sumPrice - Number(price2));
            }
            setStars(stars - 1);
        }
    }
    return (
        <>
            <div className={`border-5 border-black  hover:shadow-btn-shadow rounded-xl ${normal ? "h-fit" : writing ? "lg:h-950 2xl:h-900 h-750" : "lg:h-900 h-750"} ${single ? "2xl:w-800 w-full" : "w-full sm:w-320 md:w-650 lg:w-400  2xl:w-450"} transition-all duration-400 ${normal ? "px-2 py-16" : "px-10 py-16"}  ${bgColor || "hover:bg-fuchsia-300"} relative`} >
                {ribbon &&
                    <div style={{ margin: "0 auto" }} className='py-1 absolute w-250 md:w-400 xl:w-350 right-0 left-0 rounded-t-lg bg-red-500 -top-10' >
                        <p className='text-18 text-white font-sans text-center font-semibold' >Best Seller</p>
                    </div>
                }
                <div className='text-center'>
                    <p className='text-34 mb-2 leading-30' >{heading}</p>
                    <div className={`flex items-center w-full justify-center px-2 ${normal ? "mb-0" : "mb-4"}`} >
                        {noPrice ?
                            <del><p className='text-24' >$<del className='text-17 sm:text-19 2xl:text-28 mr-4'>{noPrice}</del></p></del> :
                            <span></span>
                        }
                        <h2 className='text-26 lg:text-34' >$</h2>
                        <p className='text-28 md:text-38 lg:text-55 2xl:text-55 font-extrabold p-0 mx-2' >{sumPrice.toFixed(2)} {month ? (<span className='xl:text-21 text-19 font-bold'>{month}</span>) : ""}</p>
                    </div>
                    {writing &&
                        <div className='w-full flex justify-center items-center mb-3' >
                            <div className='flex py-1 px-2 items-center justify-between rounded-full border-black border-3 xl:border-5 w-170 xl:w-150 ' >
                                <div onClick={lessPrice} className='flex justify-center items-center p-1 rounded-full hover:bg-teal-500 active:g-teal-300 cursor-pointer transition-all' >
                                    <RemoveIcon  className='' />
                                </div>
                                <p className='text-18 xl:text-24 select-none' >{stars} Star</p>
                                <div onClick={addPrice} className='flex justify-center items-center p-1 rounded-full hover:bg-teal-500 active:g-teal-300 cursor-pointer transition-all' >
                                    <AddIcon className='' />
                                </div>
                            </div>
                        </div>
                    }

                    <div className={`${normal ? "" : "xl:h-440 h-330 overflow-x-hidden overflow-y-scroll px-2 card-scroll"}`} >
                        {(!normal && content) && content.map((text, index) => (
                            <p key={index} className='border-black border-b-1 w-full p-3 font-sans font-bold text-17 xl:text-21' >{text}</p>
                        ))}
                    </div>
                    <div className='w-full flex justify-center items-center border-t-1 border-black my-5' >
                        <div className='flex-1 cursor-pointer border-r-1 border-black' >
                            <p className='xl:text-21 text-13 sm:text-15 font-sans font-medium xl:font-bold' >Speak with us</p>
                            <a href="tel:647-660-1776"><p className='font-sans text-12 sm:text-14 xl:text-18 font-normal xl:font-semibold' >647-660-1776</p></a>
                        </div>
                        <div className='flex-1 cursor-pointer' >
                            <p className='xl:text-21 text-13 sm:text-15 font-sans font-medium xl:font-bold whitespace-nowrap ml-1' >Want to discuss?</p>
                            <a rel="noreferrer noopener" href="javascript:$zopim.livechat.window.show()">
                                <p className='font-sans text-12 sm:text-14 xl:text-18 font-normal xl:font-semibold' >Live Chat Now</p>
                            </a>
                        </div>
                    </div>
                    <div className='w-full flex justify-center' >
                        <Button customFunc={()=> writing? openForm(sumPrice.toFixed(2), "content-writing-page", heading, "Start a Project", "", "", true) : customFunc()} text="Start Project" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card