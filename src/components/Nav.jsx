import React, { useState } from 'react'
import Gradient from "../assets/60cb6b0a1ffa9d6586ad6292_hero-glow-2.svg";
import '../../node_modules/flowbite/dist/flowbite';

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <>
            <img src={Gradient} alt='gradient' width={400} className='absolute -top-24 -left-20' />
            <div className='container mx-auto'>

                <nav>
                    <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                        <h2 className='md:text-2xl text-xl font-semibold'>Harvest Haven</h2>
                        <button onClick={toggleNav} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none" aria-controls="navbar-default" aria-expanded={isNavOpen}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden={isNavOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col md:items-center p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-4 md:mt-0 md:border-0">
                                <li>
                                    <p className="block py-2 pl-3 pr-4 text-gray-900 cursor-pointer hover:text-[#30ad5d] rounded" aria-current="page">Home</p>
                                </li>
                                <li>
                                    <p className="block py-2 pl-3 pr-4 text-gray-900 cursor-pointer hover:text-[#30ad5d] rounded">Product</p>
                                </li>
                                <li>
                                    <p className="block py-2 pl-3 pr-4 text-gray-900 cursor-pointer hover:text-[#30ad5d] rounded">Shop</p>
                                </li>
                                <li>
                                    <p className="block py-2 pl-3 pr-4 text-gray-900 cursor-pointer hover:text-[#30ad5d] rounded">Service</p>
                                </li>
                                <li>
                                    <button className="block py-1 px-6 md:my-0 my-3 text-gray-900 border-2 border-black rounded-[30px] hover:bg-black hover:text-white transition-all duration-150">Contact</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Nav