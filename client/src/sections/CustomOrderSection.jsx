import React, { lazy, useState } from 'react'
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import useStateContext from '../context/ContextProvider';
const Button = lazy(() => import("../components/Button"));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const CustomOrderSection = ({ bgColor }) => {
    const { orderContentCustom } = useStateContext();
    // 1st 39.80
    // 2nd 39.80
    // 3rd 9.95 // 12.44
    // 4th 39.80
    const [totalPrice, setTotalPrice] = useState({
        stars: {
            total: 0,
            id: 3,
        },
        words: {
            total: 0,
            id: 500,

        },
        pages: {
            total: 0,
            id: 1,
        }
    });
    const [urgent, setUrgent] = useState(0)
    const urgencyChange = (e) => {
        if (e.target.checked) {
            setUrgent(39.80);
        } else {
            setUrgent(0);
        }
    }
    const [keywordSearch, setKeywordSearch] = useState(false)
    const keyword = (e) => {
        setKeywordSearch(e.target.checked);
    }
    const sliderChange = (e, id) => {
        if (id === "words" && e.target.value !== totalPrice.words.id) {
            const cop = { ...totalPrice }
            if (e.target.value === 500) {
                cop.words.total = 0;
            } else if (e.target.value === 1000) {
                cop.words.total = 39.80;
            } else if (e.target.value === 1500) {
                cop.words.total = 2 * 39.80;
            } else if (e.target.value === 2000) {
                cop.words.total = 3 * 39.80;
            } else if (e.target.value === 2500) {
                cop.words.total = 4 * 39.80;
            } else if (e.target.value === 3000) {
                cop.words.total = 5 * 39.80;
            } else if (e.target.value === 3500) {
                cop.words.total = 6 * 39.80;
            } else if (e.target.value === 4000) {
                cop.words.total = 7 * 39.80;
            }
            cop.words.id = e.target.value;
            setTotalPrice(cop);
        } else if (id === "pages" && e.target.value !== totalPrice.pages.id) {
            const cop = { ...totalPrice }
            if (cop.pages.id > e.target.value) {
                cop.pages.total = (e.target.value - 1) * 39.80;
                cop.pages.id = e.target.value;
            } else {
                cop.pages.total = (e.target.value - 1) * 39.80;
                cop.pages.id = e.target.value;
            }
            setTotalPrice(cop);
        } else if (id === "stars" && e.target.value !== totalPrice.stars.id) {
            const cop = { ...totalPrice }
            if (e.target.value === 3) {
                cop.stars.total = 0;
            } else if (e.target.value === 4) {
                cop.stars.total = 9.95;
            } else if (e.target.value === 5) {
                cop.stars.total = 22.39;
            }
            cop.stars.id = e.target.value;
            setTotalPrice(cop);
        }
    }
    const aggregatePrice = (38.90 + totalPrice.stars.total + totalPrice.words.total + totalPrice.pages.total + urgent).toFixed(2);
    return (
        <div style={{ backgroundColor: bgColor }} className="w-full h-auto flex justify-center py-20 px-4 md:px-12" >
            <div className='w-full lg:w-800 xl:w-1000 2xl:w-1400 flex flex-col justify-center items-center' >
                <p className='text-34 lg:text-72 mb-4 text-center' >Custom Order Form</p>
                <p className='text-center lg:text-24 text-18 font-semibold mb-8 font-sans' >Ready to get started, but can't find what you're looking for? Place a custom order now or get in touch with us via <a className='underline text-blue-500' href="javascript:$zopim.livechat.window.show()" >Live Chat</a> or <a className='underline text-blue-500' href="tel:647-660-1776">call us</a> for a custom quote.</p>
                <div style={{ background: "#bdacfc" }} className='border-5 border-black  hover:shadow-btn-shadow rounded-xl px-5 lg:px-12 lg:py-14 w-full lg:w-1000 transition-all duration-400 font-medium lg:font-bold text-17 md:text-20'>
                    <div className='flex flex-col lg:flex-row my-3 lg:my-6 font-sans ' >
                        <div className='flex-1' >
                            <p>No. of Pages:</p>
                        </div>
                        <div className='flex-1' >
                            <div className='flex justify-between text-14 lg:text-18 lg:font-medium' >
                                <p>1</p>
                                <p>100</p>
                            </div>
                            <Slider
                                aria-label="Temperature"
                                defaultValue={1}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={100}
                                onChange={(e) => sliderChange(e, "pages")}

                            />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row my-3 lg:my-6 font-sans ' >
                        <div className='flex-1' >
                            <p>Word Count:</p>
                        </div>
                        <div className='flex-1' >
                            <div className='flex justify-between text-14 lg:text-18 lg:font-medium' >
                                <p>500</p>
                                <p>4000</p>
                            </div>
                            <Slider
                                aria-label="Temperature"
                                defaultValue={500}
                                valueLabelDisplay="auto"
                                step={500}
                                marks
                                min={500}
                                max={4000}
                                color="secondary"
                                onChange={(e) => sliderChange(e, "words")}

                            />
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col lg:flex-row my-3 lg:my-6 font-sans ' >
                        <div className='flex-1' >
                            <p>Quality:</p>
                        </div>
                        <div className='flex-1' >
                            <div className='flex justify-between text-14 lg:text-18 lg:font-medium' >
                                <p>3 Stars</p>
                                <p>5 Stars</p>
                            </div>
                            <Slider
                                aria-label="Temperature"
                                defaultValue={3}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={3}
                                max={5}
                                color="warning"
                                onChange={(e) => sliderChange(e, "stars")}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row my-1 lg:my-6 font-sans' >
                        <div className='flex flex-1 my-3 lg:my-4' >
                            <p className='flex-1' >Urgency:</p>
                            <p className='flex-1 flex lg:justify-start justify-end' >
                                <Switch {...label} color="warning" onChange={urgencyChange} />
                            </p>
                        </div>
                        <div className='flex flex-1 my-3 lg:my-4' >
                            <p className='flex-1' >Turnaround Time:</p>
                            <p className='flex-1 flex lg:justify-start justify-end' >{urgent ? "1" : "2"} Business Days</p>
                        </div>
                    </div>
                    <div className='flex flex-1 my-3 lg:my-6 justify-between lg:items-center font-sans' >
                        <p className='lg:flex-1' >Do you need keyword research?</p>
                        <p className='lg:flex-1 lg:flex lg:justify-start justify-end' >
                            <Switch size='large' {...label} color="warning" onChange={keyword} />
                        </p>
                    </div>
                    <div className='flex lg:flex-row flex-col w-full justify-center lg:justify-between my-6' >
                        <div className='flex flex-col lg:flex-row items-center justify-center' >
                            <p className='lg:mr-3 text-24 flex items-center' >Total Price<span className='hidden lg:block font-sans' >:</span></p>
                            <p className='text-38 flex items-center' ><span className='text-yellow-300 text-46 mr-2' >$ </span>{aggregatePrice}</p>
                        </div>
                        <div className='flex-1 flex lg:justify-end justify-center items-center' >
                            <Button customFunc={() => orderContentCustom(aggregatePrice, totalPrice.stars.id, totalPrice.words.id, totalPrice.pages.id, (urgent ? "Urgently required" : "Not urgent"), (keywordSearch ? "keyword Search required" : "i don't need of keyword research"))} text="Order Now" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomOrderSection