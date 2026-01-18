

import React from 'react'

const FeatureCard = ({ title, image, index }) => {
    return (
        <div key={index} className='relative h-96 md:h-[500px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'>
            <img
                src={image}
                alt={title}
                className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
            <div className='absolute top-2 -right-3 text-white/60 text-[160px] font-bold'>
                {String(index + 1)}
            </div>
            <div className='absolute bottom-0 left-0 right-0 p-6'>
                <h3 className='text-white text-3xl font-bold'>{title}</h3>
                <a href="/features" className="text-gray-300 hover:text-white text-sm font-medium">View Project</a>
            </div>
        </div>
    )
}

export default FeatureCard