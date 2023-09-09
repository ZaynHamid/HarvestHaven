import React from 'react'
import Image from "../assets/pexels-tom-fisk-1595108-min.webp"
import OptimizedImage from "./OptimizedImage";
const Achievement = () => {
    return (
        <div className='container mx-auto md:mt-32'>
            <div className="md:flex gap-4 justify-center">
                <div className='md:w-1/2 md:my-0 my-12 md:px-0 px-2 md:mt-24'>
                    <h1 className='md:text-4xl text-2xl  uppercase font-bold tracking-wide md:leading-[3.5rem] leading-normal text-[#1d1d1f]/90 md:w-9/12'>Harvest Haven: Trusted by thousands of people</h1>
                    <p className='text-[#6c757d] md:text-xl text-lg md:w-9/12 my-6'> Proin non odio vitae odio interdum suscipit. Sed id justo quis dolor lobortis feugiat nec id ipsum. Quisque nec eros nec urna volutpat volutpat vel eu massa. Maecenas vitae efficitur justo.</p>
                    <div className='md:px-20 px-10 mt-12 py-4 bg-[#157538] md:w-9/12 rounded-2xl text-center text-white flex justify-between'>
                        <div className='flex flex-col'>
                            <p className='font-bold text-2xl'>20,000+</p>
                            <p className='text-lg font-semibold'>Servings around the globe</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-2xl'>20+</p>
                            <p className='text-lg font-semibold'>Countries</p>
                        </div>
                    </div>

                </div>
                <div className='md:w-1/2'>
                    <div className='w-full max-h-400px'>
                        <OptimizedImage src={Image} classNames="md:w-[500px] md:h-[600px] w-full h-[500px] md:px-0 px-4 object-cover shadow-2xl" alt="girl holding strawberries" style={{ borderRadius: "10px 140px 90px 90px" }} />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Achievement