import React, { useState, lazy, Suspense } from 'react'
import { projectLinks, projectLogo } from "../data/data";
import VideoCard from '../components/VideoCard';
const Button = lazy(() => import("../components/Button"));

const LandingSectionOne = ({ bgColor, logo }) => {
    const [index, setIndex] = useState(6)
    const [index2, setIndex2] = useState(6)
    const project = projectLinks.slice(0, index);
    const project2 = projectLogo.slice(0, index2);
    const addingContent = () => {
        if (index <= 6) {
            setIndex(index + 6);
        } else {
            setIndex(index + 6);
        }
    }
    const addingContent2 = () => {
        if (index2 <= 6) {
            setIndex2(index2 + 6);
        } else {
            setIndex2(index2 + 6);
        }
    }

    return (
        <>
            <div className='pt-20 pb-8 px-4 xl:px-10 w-screen min-h-screen flex flex-col items-center' style={{ backgroundColor: bgColor }} >
                <div className='2xl:w-1400 lg:w-900 w-full' >

                    <div className='flex w-full xl:flex-row flex-col' >
                        <div className="flex-1">
                            <p className='2xl:text-100 2xl:leading-80 leading-60 lg:text-65 text-55 pb-4 xl:text-left text-center' >
                                The Work We Have Done
                            </p>
                        </div>
                        <div className="flex-1">
                            <p className='font-sans text-20 xl:text-28 font-semibold xl:font-bold  xl:text-left text-center' >
                                Take a look at our portfolio to get an idea of our creativity.
                            </p>
                        </div>
                    </div>
                    {!logo &&
                        <div className='w-full flex xl:flex-row flex-col flex-wrap gap-6 justify-center items-center mb-8 mt-16'>
                            {project.map((item, index) => (
                                <VideoCard key={index} image={item.img} text={item.title} />
                            ))
                            }
                        </div>
                    }
                    {(projectLinks.length > 6 && project.length !== projectLinks.length && !logo) &&
                        <div className='w-full flex justify-center' >
                            <Button customFunc={addingContent} text="view more." />
                        </div>
                    }
                    {logo &&
                        <div className='w-full flex xl:flex-row flex-col flex-wrap gap-6 justify-center items-center mb-8 mt-24'>
                            {project2.map((item, index) => (
                                <VideoCard size="object-contain" bgColor="bg-white" key={index} image={item.img} text={item.title} />
                            ))
                            }
                        </div>
                    }
                    {(projectLogo.length > 6 && project2.length !== projectLogo.length && logo) &&
                        <div className='w-full flex justify-center' >
                            <Button customFunc={addingContent2} text="view more." />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default LandingSectionOne