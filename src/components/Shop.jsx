import React from 'react';
import Image from "../assets/pexels-min-an-1006115-min.webp";
import externalLink from '../assets/external-link-icon-2048x2048-wo7lfgrz.webp'
import OptimizedImage from './OptimizedImage';

const Shop = () => {
    return (
        <div className='md:mt-32 mt-16 container mx-auto'>
            <div className='md:flex'>
                <div className='md:w-1/2  md:my-0 my-4'>
                    <div className='w-full max-h-500px'>
                        <OptimizedImage src={Image} classNames='md:w-[550px] mx-auto md:h-[640px] w-full h-[450px] md:px-0 px-4 object-cover shadow-2xl' style={{ borderRadius: "90px 0px 140px 90px" }} alt="girl holding strawberries" />
                    </div>
                </div>
                <div className="md:w-1/2 md:mt-12 md:px-0 md:my-0 my-4 px-4">
                    <p className='text-[#30ad5d] text-xl font-semibold'>Feeding the world since 25 years</p>
                    <h1 className='md:text-4xl text-2xl uppercase font-bold tracking-wide md:leading-[2.5rem] my-2 leading-normal text-[#1d1d1f]/90'>taste the goodness of Harvest Haven</h1>
                    <p className='text-[#6c757d] md:text-xl text-lg md:w-9/12 my-6'> Proin non odio vitae odio interdum suscipit. Sed id justo quis dolor lobortis feugiat nec id ipsum. Quisque nec eros nec urna volutpat volutpat vel eu massa. Maecenas vitae efficitur justo.</p>
                    <p className='text-[#6c757d] md:text-xl text-lg md:w-9/12 my-6'> Proin non odio vitae odio interdum suscipit. Sed id justo quis dolor lobortis feugiat nec id ipsum. Quisque nec eros nec urna volutpat volutpat vel eu massa. Maecenas vitae efficitur justo.</p>
                    <button className='bg-[#30ad5d] rounded-full md:px-10 px-6 text-lg py-3 flex gap-3 items-center text-white font-semibold'>Discover <OptimizedImage src={externalLink} alt='external link' classNames="w-[20px]" /></button>


                </div>
            </div>
        </div>
    )
}

export default Shop;