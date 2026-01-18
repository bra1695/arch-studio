import React from 'react'
import heroImageDesktop from '@/assets/contact/desktop/image-hero.jpg'
import heroImageTablet from '@/assets/contact/tablet/image-hero.jpg'
import heroImageMobile from '@/assets/contact/mobile/image-hero.jpg'
import useScreenSize from '@/hooks/useScreenSize'

const HeroSection = () => {
  const screenSize = useScreenSize()

  const getHeroImage = () => {
    if (screenSize === 'desktop') {
      return heroImageDesktop
    }
    if (screenSize === 'tablet') {
      return heroImageTablet
    }
    return heroImageMobile
  }

  return (
    <div className='relative my-12 font-spartan'>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative">
            <img src={getHeroImage()} alt="Hero"
              className="w-full h-[400px] lg:h-[600px] object-cover grayscale"
            />
            <div className="absolute z-40 top-0 left-0 w-full h-full bg-black opacity-30" />
            <div className="absolute z-50 bottom-0 right-0 w-1/3 h-48 lg:h-80 bg-white" />

          </div>
          <div className="p-8 bg-white">
            <h2 class="absolute top-[2rem] right-[20rem] 
            text-[12rem] font-bold 
            text-gray-100 
            z-50 
            select-none pointer-events-none">Contact</h2>
            <div className='h-full flex flex-col  justify-end gap-8'>
              <h2 className='text-5xl font-bold'>
                Tell us about  <br /> your project
              </h2>
              <div className='w-96 break-all'>
We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection