import React from 'react'
import imageHeritageDesktop from '@/assets/about/desktop/image-heritage.jpg'
const HeritageSection = () => {
  return (
    <div className='relative my-12 font-spartan'>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='h-full flex flex-col gap-4  justify-end gap-8'>
              <h2 className='text-5xl font-bold'>
                Our <br /> Heritage
              </h2>
              <div className='w-96 break-all'>
                  Founded in 2007, we started as a trio of architects. Our complimentary skills and
                  relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
              </div>
              <div className='w-96 break-all'>
                  Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony
                  with their surroundings. We consider every detail from every surrounding element to inform our designs. 
              </div>
              <div className='w-96 break-all'>
                Our small team of world-class professionals provides input on every project.
              </div>
            </div>
            <div>
              <img src={imageHeritageDesktop} alt="Heritage"
                className="w-full h-[600px] object-cover grayscale"
              />
            </div>

        </div>
      </div>
    </div>
  )
}

export default HeritageSection