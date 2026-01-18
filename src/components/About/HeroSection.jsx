import React from 'react'
import { motion } from 'framer-motion'
import heroImageDesktop from '@/assets/about/desktop/image-hero.jpg'
import heroImageTablet from '@/assets/about/tablet/image-hero.jpg'
import heroImageMobile from '@/assets/about/mobile/image-hero.jpg'
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
    <div className='relative my-6 md:my-12 font-spartan'>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <motion.div 
            className="relative order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={getHeroImage()} alt="Hero"
              className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover grayscale"
            />
            <div className="absolute z-40 top-0 left-0 w-full h-full bg-black opacity-30" />
            <div className="absolute z-50 bottom-0 right-0 w-1/4 md:w-1/3 h-24 md:h-48 lg:h-80 bg-white" />
          </motion.div>
          
          <motion.div 
            className="p-4 md:p-6 lg:p-8 bg-white relative order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="hidden lg:block absolute top-[2rem] right-[10rem] xl:right-[20rem] text-[8rem] xl:text-[12rem] font-bold text-gray-100 z-50 select-none pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              About
            </motion.h2>
            
            <div className='h-full flex flex-col justify-center lg:justify-end gap-4 md:gap-6 lg:gap-8'>
              <motion.h2 
                className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Your team of <br /> professionals
              </motion.h2>
              
              <motion.div 
                className='text-sm md:text-base max-w-full lg:max-w-96 leading-relaxed'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection