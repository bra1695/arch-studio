import React from 'react'
import { motion } from 'framer-motion'
import imageSmallTeam from '@/assets/home/desktop/image-small-team.jpg'
import imageSmallTeamTablet from '@/assets/home/tablet/image-small-team.jpg'
import imageSmallTeamMobile from '@/assets/home/mobile/image-small-team.jpg'
import useScreenSize from '@/hooks/useScreenSize'
import LinkPage from '../Shared/LinkPage'

const AboutUsSection = () => {
  const screenSize = useScreenSize()
  const getImage = () => {
    switch (screenSize) {
      case 'mobile':
        return imageSmallTeamMobile
      case 'tablet':
        return imageSmallTeamTablet
      default:
        return imageSmallTeam
    }
  }
  
  return (
    <motion.div 
      className='relative my-6 md:my-12'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div 
        style={{ backgroundImage: `url(${getImage()})` }} 
        className="max-w-7xl relative mx-4 md:mx-8 lg:mx-40 px-4 sm:px-6 lg:px-0 h-[300px] md:h-[500px] lg:h-[600px] bg-cover bg-center overflow-hidden rounded-lg"
      >
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-white"></div>
        <motion.div 
          className='text-white absolute top-8 md:top-20 lg:top-40 left-4 md:left-16 lg:left-64 font-spartan tracking-widest'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight'>
            Small team, <br /> big ideas
          </h2>
          <motion.div 
            className='mt-3 md:mt-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <LinkPage link="/about" text="About Us" className="" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AboutUsSection