import React from 'react';
import Wheat from "../assets/pexels-pixabay-265216-min.webp";
import Rice from "../assets/pexels-sergei-a-2589457-min.webp";
import Vegetables from "../assets/pexels-viktoria-slowikowska-5678108-min.webp";
import Product from './Product';
const Products = () => {
    return (
        <div className='container mx-auto bg-[#f8f8f8] md:p-8 p-4'>
            <div className='text-center md:mt-32 mt-14'>
                <h2 className='md:text-2xl text-xl font-semibold'>Featured Products</h2>
                <p className='text-[#6c757d] md:text-lg md:w-1/3 mx-auto my-4'> Proin non odio vitae odio interdum suscipit. Sed id justo quis dolor lobortis feugiat nec id ipsum</p>
            </div>
            <div className="md:flex gap-4 items-center flex-grow">
                <Product img={Wheat} title="Wheat" />
                <Product img={Vegetables} title="Vegetables" />
                <Product img={Rice} title="Rice" />
            </div>
            <p className='underline md:text-xl text-lg text-center text-[#30ad5d] mt-12'>View All Products</p>
        </div>
    )
}

export default Products