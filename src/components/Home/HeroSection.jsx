import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useScreenSize from '@/hooks/useScreenSize'
import paramour from '@/assets/home/desktop/image-hero-paramour.jpg'
import paramourTablet from '@/assets/home/tablet/image-hero-paramour.jpg'
import paramourMobile from '@/assets/home/mobile/image-hero-paramour.jpg'
import federal from '@/assets/home/desktop/image-hero-federal.jpg'
import federalTablet from '@/assets/home/tablet/image-hero-federal.jpg'
import federalMobile from '@/assets/home/mobile/image-hero-federal.jpg'
import seraph from '@/assets/home/desktop/image-hero-seraph.jpg'
import seraphTablet from '@/assets/home/tablet/image-hero-seraph.jpg'
import seraphMobile from '@/assets/home/mobile/image-hero-seraph.jpg'
import trinity from '@/assets/home/desktop/image-hero-trinity.jpg'
import trinityTablet from '@/assets/home/tablet/image-hero-trinity.jpg'
import trinityMobile from '@/assets/home/mobile/image-hero-trinity.jpg'
import LinkPage from '../Shared/LinkPage'

const HeroSection = () => {
    const screenSize = useScreenSize()
    const [currentIndex, setCurrentIndex] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % arrayImages.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])
    
    const arrayImages = [
        { desktop: paramour, 
          tablet: paramourTablet, 
          mobile: paramourMobile, 
          title1: 'Project',
          title2: 'Paramour', 
          description: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.' 
        },
        { 
            desktop: seraph, 
            tablet: seraphTablet, 
            mobile: seraphMobile, 
            title1: 'Seraph',
            title2: 'Station', 
            description: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.'
        },         
        { 
            desktop: federal, 
            tablet: federalTablet, 
            mobile: federalMobile,
            title1: 'Federal II',
            title2: 'Tower', 
            description: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.'
        },
        { 
            desktop: trinity, 
            tablet: trinityTablet, 
            mobile: trinityMobile,
            title1: 'Trinity Bank',
            title2: 'Tower',
            description: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.'
        },
    ]
    
    const getImage = (index) => {
        const item = arrayImages[index]
        switch (screenSize) {
            case 'mobile':
                return item.mobile
            case 'tablet':
                return item.tablet
            default:
                return item.desktop
        }
    }

    const currentItem = arrayImages[currentIndex]

    return (
        <div className='relative my-6 md:my-12'>
            <div className="max-w-7xl relative mx-4 md:mx-8 lg:mx-40 px-4 sm:px-6 lg:px-0 h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8 }}
                        style={{ backgroundImage: `url(${getImage(currentIndex)})` }}
                        className="absolute inset-0 bg-cover bg-center"
                    >
                        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-white"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className='text-white absolute top-8 md:top-20 lg:top-40 left-4 md:left-8 lg:left-40 font-spartan tracking-widest'
                        >
                            <h2 className='text-3xl md:text-5xl lg:text-7xl font-bold leading-tight'>
                                {currentItem.title1} <br /> {currentItem.title2}
                            </h2>
                            <p className='text-xs md:text-sm w-64 md:w-80 lg:w-96 font-normal mt-2 md:mt-4'>
                                {currentItem.description}
                            </p>
                            <motion.div 
                                className='mt-3 md:mt-4'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <LinkPage link="/portfolio" text="See Our Portfolio" className="" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
            
            {/* Navigation Buttons */}
            <motion.div 
                className='grid grid-cols-4 w-32 md:w-48 lg:w-64 h-10 md:h-12 lg:h-14 absolute bottom-0 left-4 md:left-12 lg:left-24'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                {arrayImages.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`col-span-1 flex items-center justify-center font-semibold text-xs md:text-sm text-center transition-all duration-300 ${
                            currentIndex === index ? 'bg-black text-white' : 'bg-white text-slate-500 hover:bg-gray-100'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {String(index + 1).padStart(2, '0')}
                    </motion.button>
                ))}
            </motion.div>
        </div>
    )
}

export default HeroSection