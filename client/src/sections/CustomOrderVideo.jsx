import React, { lazy, useState } from 'react'
import Slider from '@mui/material/Slider';
import useStateContext from '../context/ContextProvider';
import { useEffect } from 'react';
const Button = lazy(() => import("../components/Button"));
const CustomOrderVideo = ({ bgColor }) => {
    const { orderVideoCustom } = useStateContext();
    // 1st 39.80
    // 2nd 39.80
    // 3rd 9.95 // 12.44
    // 4th 39.80

    const defaultValue = {
        basic: {
            total: 100,
            id: 1,
        },
        twoD: {
            total: 1500,
            id: 1,
        },
        threeD: {
            total: 2500,
            id: 1,
        },
        frame: {
            total: 10000,
            id: 1,
        }
    }
    const [totalPrice, setTotalPrice] = useState({
        basic: {
            total: 100,
            id: 1,
        },
        twoD: {
            total: 1500,
            id: 1,
        },
        threeD: {
            total: 2500,
            id: 1,
        },
        frame: {
            total: 10000,
            id: 1,
        }
    });
    const [sumPrice, setSumPrice] = useState(0);
    const [videoType, setVideoType] = useState({ name: "Basic Video Editing", id: 1 })
    const sliderChange = (e, id) => {
        if (id === "videoLength") {
            const cop = { ...totalPrice }
            if (videoType.name === "Basic Video Editing") {
                if (e.target.value <= 10) {
                    cop.basic.total = (e.target.value) * 100;
                } else if (e.target.value > 10 && e.target.value <= 20) {
                    cop.basic.total = 550 + (e.target.value) * 50;
                } else if (e.target.value > 20) {
                    cop.basic.total = 950 + (e.target.value) * 25;
                }
                cop.basic.id = e.target.value;
                setTotalPrice(cop);
            } else if (videoType.name === "Frame By Frame Animations") {
                cop.frame.total = (e.target.value) * 10000;
                cop.frame.id = e.target.value;
                setTotalPrice(cop);
            } else if (videoType.name === "2d Video Animations") {
                if (e.target.value <= 5) {
                    cop.twoD.total = (e.target.value) * 1500;
                } else if (e.target.value > 5 && e.target.value <= 10) {
                    cop.twoD.total = 3750 + (e.target.value) * 750;
                } else if (e.target.value > 10 && e.target.value <= 15) {
                    cop.twoD.total = 7500 + (e.target.value) * 375;
                } else if (e.target.value > 15 && e.target.value <= 20) {
                    cop.twoD.total = 10312.5 + (e.target.value) * 187.5;
                } else if (e.target.value > 20 && e.target.value <= 25) {
                    cop.twoD.total = 12187.5 + (e.target.value) * 93.75;
                } else if (e.target.value > 25 && e.target.value <= 30) {
                    cop.twoD.total = 13359.375 + (e.target.value) * 46.875;
                }
                cop.twoD.id = e.target.value;
                setTotalPrice(cop);

            } else if (videoType.name === "3d Video Animations") {
                if (e.target.value <= 5) {
                    cop.threeD.total = (e.target.value) * 2500;
                } else if (e.target.value > 5 && e.target.value <= 10) {
                    cop.threeD.total = 6250 + (e.target.value) * 1250;
                } else if (e.target.value > 10 && e.target.value <= 15) {
                    cop.threeD.total = 12500 + (e.target.value) * 625;
                } else if (e.target.value > 15 && e.target.value <= 20) {
                    cop.threeD.total = 17187.5 + (e.target.value) * 312.5;
                } else if (e.target.value > 20 && e.target.value <= 25) {
                    cop.threeD.total = 20312.5 + (e.target.value) * 156.25;
                } else if (e.target.value > 25 && e.target.value <= 30) {
                    cop.threeD.total = 22265.625 + (e.target.value) * 78.125;
                }
                cop.threeD.id = e.target.value;
                setTotalPrice(cop);

            }
        } else if (id === "typeOfAnimation") {
            if (e.target.value === 1) {
                setVideoType({ name: "Basic Video Editing", id: 1 });
            } else if (e.target.value === 2) {
                setVideoType({ name: "2d Video Animations", id: 2 });
            } else if (e.target.value === 3) {
                setVideoType({ name: "3d Video Animations", id: 3 });
            } else if (e.target.value === 4) {
                setVideoType({ name: "Frame By Frame Animations", id: 4 });
            }
            setTotalPrice(defaultValue);
        }
    }
    useEffect(() => {
        if (videoType.name === "Basic Video Editing") {
            setSumPrice({ price: totalPrice.basic.total, duration: totalPrice.basic.id });
        } else if (videoType.name === "2d Video Animations") {
            setSumPrice({ price: totalPrice.twoD.total, duration: totalPrice.twoD.id });
        } else if (videoType.name === "3d Video Animations") {
            setSumPrice({ price: totalPrice.threeD.total, duration: totalPrice.threeD.id });
        } else if (videoType.name === "Frame By Frame Animations") {
            setSumPrice({ price: totalPrice.frame.total, duration: totalPrice.frame.id });
        }
    }, [totalPrice, videoType]);
    const aggregatePrice = Number(sumPrice.price).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    return (
        <div style={{ backgroundColor: bgColor }} className="w-full h-auto flex justify-center py-20 px-4 md:px-12" >
            <div className='w-full lg:w-800 xl:w-1000 2xl:w-1400 flex flex-col justify-center items-center' >
                <p className='text-34 lg:text-72 mb-4 text-center' >Custom Order Form</p>
                <p className='text-center lg:text-24 text-18 font-semibold mb-8 font-sans' >Ready to get started, but can't find what you're looking for? Place a custom order now or get in touch with us via <a className='underline text-blue-500' href="javascript:$zopim.livechat.window.show()" >Live Chat</a> or <a className='underline text-blue-500' href="tel:647-660-1776">call us</a> for a custom quote.</p>
                <div style={{ background: "#bdacfc" }} className='border-5 border-black  hover:shadow-btn-shadow rounded-xl px-5 lg:px-12 lg:py-14 w-full lg:w-1000 transition-all duration-400 font-medium lg:font-bold text-17 md:text-20'>
                    <div className='flex flex-col lg:flex-row my-3 lg:my-6 font-sans ' >
                        <div className='flex-1' >
                            <p>Duration (Min):</p>
                        </div>
                        <div className='flex-1' >
                            <div className='flex justify-between text-14 lg:text-18 lg:font-medium' >
                                <p>1 (min)</p>
                                <p>30 (min)</p>
                            </div>
                            {
                                videoType.name === "Basic Video Editing" ?
                                    <div>
                                        <Slider
                                            defaultValue={1}
                                            valueLabelDisplay="auto"
                                            step={1}
                                            min={1}
                                            max={30}
                                            onChange={(e) => sliderChange(e, "videoLength")}
                                            color="primary"
                                            marks
                                        />
                                    </div>
                                    : videoType.name === "2d Video Animations" ?
                                        <Slider
                                            defaultValue={1}
                                            valueLabelDisplay="auto"

                                            step={1}
                                            min={1}
                                            max={30}
                                            onChange={(e) => sliderChange(e, "videoLength")}
                                            color="error"
                                            marks
                                        />
                                        : videoType.name === "3d Video Animations" ?
                                            <div>
                                                <Slider
                                                    defaultValue={1}
                                                    valueLabelDisplay="auto"

                                                    step={1}
                                                    min={1}
                                                    max={30}
                                                    onChange={(e) => sliderChange(e, "videoLength")}
                                                    color="secondary"
                                                    marks
                                                />
                                            </div>
                                            :
                                            <Slider
                                                defaultValue={1}
                                                valueLabelDisplay="auto"

                                                step={1}
                                                min={1}
                                                max={30}
                                                onChange={(e) => sliderChange(e, "videoLength")}
                                                color="success"
                                                marks
                                            />
                            }
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col lg:flex-row my-3 lg:my-6 font-sans transition-all h-200 md:h-150' >
                        <div className='flex-1 lg:mb-0 mb-5' >
                            <p>Type of a video:</p>
                        </div>
                        <div className='flex-1' >
                            <div className='flex justify-between h-50 items-center' >
                                <div className='flex justify-start' >
                                    <p className={`text-center transition-all duration-300 ${videoType.id === 1 ? "text-19 opacity-100 font-bold text-blue-700" : "opacity-70 text-16 font-normal mr-1"}`} >Basic Video Editing</p>
                                </div>
                                <div className='flex justify-end' >
                                    <p className={`text-center transition-all duration-300 ${videoType.id === 4 ? "text-19 opacity-100 font-bold text-green-700" : "opacity-70 text-16 font-normal ml-1"}`} >Frame By Frame Animations</p>
                                </div>
                            </div>
                            <Slider
                                defaultValue={1}
                                step={1}
                                min={1}
                                max={4}
                                marks
                                color="warning"
                                onChange={(e) => sliderChange(e, "typeOfAnimation")}
                            />
                            <div className='flex justify-between px-8 md:px-28 lg:px-12 h-50 items-center' >
                                <p className={`text-center transition-all duration-300 ${videoType.id === 2 ? "text-19 opacity-100 font-bold text-red-700" : "opacity-70 text-15 font-normal"}`} >2D Video Animations</p>
                                <p className={`text-center transition-all duration-300 ${videoType.id === 3 ? "text-19 opacity-100 font-bold text-purple-700" : "opacity-70 text-15 font-normal"}`} >3D Video Animations</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col w-full justify-center lg:justify-between my-6' >
                        <div className='flex flex-col lg:flex-row items-center justify-center' >
                            <p className='lg:mr-3 text-24 flex items-center' >Total Price<span className='hidden lg:block font-sans' >:</span></p>
                            <p className='text-38 flex items-center' ><span className='text-yellow-300 text-46 mr-2' >$ </span>{aggregatePrice}</p>
                        </div>
                        <div className='flex-1 flex lg:justify-end justify-center items-center' >
                            <Button customFunc={() => orderVideoCustom(aggregatePrice, videoType.name, (sumPrice.duration + " min"))} text="Order Now" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomOrderVideo