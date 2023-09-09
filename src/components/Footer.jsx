import React from 'react'
import Image from "../assets/pexels-jenny-k-580276-min.webp";
import { Facebook, Instagram, Youtube } from "../icons";

const Footer = () => {
    return (
        <div className="h-[60vh] relative md:mt-32 mt-16 bg-cover bg-center" style={{ backgroundImage: `url(${Image})` }}>
            <div className="container mx-auto">
                <div className='flex items-center md:px-0 px-6'>
                    <div>
                        <h1 className='font-bold text-4xl mt-32 text-white'>Get Updates from Harvest Haven</h1>
                        <h1 className='font-semibold text-2xl mt-4 text-white'>Subscribe to our newsletter!</h1>
                        <div className=' bg-white mt-8 flex items-center md:py-3 py-1.5 rounded-full relative'>
                            <input type="text" className='w-full md:text-xl text-lg text-[#6c757d] bg-transparent px-4 outline-none' placeholder='Email' />
                            <button className='bg-[#30ad5d] rounded-full absolute top-0 right-0 bottom-0 md:px-8 px-6 text-lg text-white'>Submit</button>
                        </div>
                    </div>

                </div>
                <div className='text-3xl absolute bottom-10 right-20'>
                    <div className='flex gap-6 text-white'>
                        <Facebook />
                        <Youtube />
                        <Instagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer