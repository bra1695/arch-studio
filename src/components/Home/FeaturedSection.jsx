import React from 'react'
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
    <div className='relative my-12 font-spartan'>
      <div className='flex flex-row justify-between max-w-7xl mx-40 px-4 sm:px-6 lg:px-0'>
        <h2 className='sm:text-3xl text-2xl md:text-6xl font-bold'>Featured</h2>
        <LinkPage link="/features" text="See All" className="" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-7xl mx-40 px-4 sm:px-6 lg:px-0'>
        {arrayImages.map((item, index) => (
           <FeatureCard
             key={index}
             title={item.title}
             image={getImage(index)}
             index={index}
           />
        ))}
      </div>

    </div>
  )
}

export default FeaturedSection