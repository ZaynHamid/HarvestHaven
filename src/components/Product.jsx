import React from 'react'
import OptimizedImage from './OptimizedImage'

const Product = ({ img, title }) => {
    return (
        // Product component
        <div className='bg-white shadow-xl p-3 rounded-2xl md:my-0 my-4'>
            <OptimizedImage
                src={img}
                alt='wheat'
                classNames='w-full md:h-80 object-cover' // Adjust the height value as needed
            />
            <h1 className='font-bold md:text-2xl my-3 text-center text-xl'>{title}</h1>
            <p className='text-[#6c757d] md:text-lg text-center mx-auto my-4'>
                Proin non odio vitae odio interdum suscipit. Sed id justo quis
                dolor lobortis feugiat nec id ipsum
            </p>
        </div>

    )
}

export default Product