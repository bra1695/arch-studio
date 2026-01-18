import React from 'react'
import { motion } from 'framer-motion'
import LinkPage from '../Shared/LinkPage'
import useScreenSize from '@/hooks/useScreenSize'
import imagetowerDesktop from '@/assets/portfolio/desktop/image-228b.jpg'
import imagedelsolDesktop from '@/assets/portfolio/desktop/image-del-sol.jpg'
import imageprototypeDesktop from '@/assets/portfolio/desktop/image-prototype.jpg'
import imagetowerTablet from '@/assets/portfolio/tablet/image-228b.jpg'
import imagedelsolTablet from '@/assets/portfolio/tablet/image-del-sol.jpg'
import imageprototypeTablet from '@/assets/portfolio/tablet/image-prototype.jpg'
import imagetowerMobile from '@/assets/portfolio/mobile/image-228b.jpg'
import imagedelsolMobile from '@/assets/portfolio/mobile/image-del-sol.jpg'
import imageprototypeMobile from '@/assets/portfolio/mobile/image-prototype.jpg'
import FeatureCard from '../Shared/FeatureCard'

const FeaturedSection = () => {
  const screenSize = useScreenSize()
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
  
  const arrayImages = [
    { title: 'Project Del Sol', desktop: imagetowerDesktop, tablet: imagetowerTablet, mobile: imagetowerMobile },
    { title: '228B Tower', desktop: imagedelsolDesktop, tablet: imagedelsolTablet, mobile: imagedelsolMobile },
    { title: 'Prototype', desktop: imageprototypeDesktop, tablet: imageprototypeTablet, mobile: imageprototypeMobile },
  ]
  
  return (
    <motion.div 
      className='relative my-8 md:my-12 font-spartan'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 max-w-7xl mx-4 md:mx-8 lg:mx-40 px-4 sm:px-6 lg:px-0'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>Featured</h2>
        <LinkPage link="/portfolio" text="See All" className="" />
      </motion.div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 max-w-7xl mx-4 md:mx-8 lg:mx-40 px-4 sm:px-6 lg:px-0'>
        {arrayImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <FeatureCard
              title={item.title}
              image={getImage(index)}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default FeaturedSection