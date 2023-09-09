import React from 'react'
import Image from "../assets/pexels-jonathan-borba-15672283-min.webp"
import OptimizedImage from './OptimizedImage'
const Hero = () => {
    return (
        <div className='container mx-auto mt-20'>
            <div className="md:flex gap-4 justify-center">
                <div className='md:w-1/2 md:my-0 my-12 md:px-0 px-2 md:mt-24'>
                    <h1 className='md:text-5xl text-3xl  uppercase font-bold tracking-wide md:leading-[3.5rem] leading-normal text-[#1d1d1f]/90'>Harvest Haven: From <br />grain to bread</h1>
                    <p className='text-[#6c757d] md:text-2xl text-xl md:w-9/12 my-6'> Proin non odio vitae odio interdum suscipit. Sed id justo quis dolor lobortis feugiat nec id ipsum. Quisque nec eros nec urna volutpat volutpat vel eu massa. Maecenas vitae efficitur justo.</p>
                    <div className='border border-[#6c757d]/80 md:w-9/12 flex items-center md:py-3 py-1.5 rounded-full relative'>
                        <input type="text" className='w-full md:text-xl text-lg text-[#6c757d] bg-transparent px-4 outline-none' placeholder='Search' />
                        <button className='bg-[#30ad5d] rounded-full absolute top-0 right-0 bottom-0 md:px-8 px-6 text-lg text-white'>Search</button>
                    </div>

                </div>
                <div className='md:w-1/2'>
                    <div className='w-full max-h-600px'>
                        <OptimizedImage src={Image} classNames='md:w-[600px] md:h-[700px] w-full h-[500px] md:px-0 px-4 object-cover shadow-2xl' style={{ borderRadius: "90px 90px 0 140px" }} alt="girl holding strawberries" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero