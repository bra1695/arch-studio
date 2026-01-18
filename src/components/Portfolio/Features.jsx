import React from 'react'
import useScreenSize from '@/hooks/useScreenSize'
import image228bDesktop from '@/assets/portfolio/desktop/image-228b.jpg'
import imageDelSolDesktop from '@/assets/portfolio/desktop/image-del-sol.jpg'
import imagePrototypeDesktop from '@/assets/portfolio/desktop/image-prototype.jpg'
import imageEdelweissDesktop from '@/assets/portfolio/desktop/image-edelweiss.jpg'
import imageEeboxDesktop from '@/assets/portfolio/desktop/image-eebox.jpg'
import imageEeboxTablet from '@/assets/portfolio/tablet/image-eebox.jpg'
import imageEeboxMobile from '@/assets/portfolio/mobile/image-eebox.jpg'
import image228bTablet from '@/assets/portfolio/tablet/image-228b.jpg'
import imageDelSolTablet from '@/assets/portfolio/tablet/image-del-sol.jpg'
import imagePrototypeTablet from '@/assets/portfolio/tablet/image-prototype.jpg'
import image228bMobile from '@/assets/portfolio/mobile/image-228b.jpg'
import imageDelSolMobile from '@/assets/portfolio/mobile/image-del-sol.jpg'
import imagePrototypeMobile from '@/assets/portfolio/mobile/image-prototype.jpg'
import imageHyperDesktop from '@/assets/portfolio/desktop/image-hypers.jpg'
import imageHyperTablet from '@/assets/portfolio/tablet/image-hypers.jpg'
import imageHyperMobile from '@/assets/portfolio/mobile/image-hypers.jpg'
import imageNetcryDesktop from '@/assets/portfolio/desktop/image-netcry.jpg'
import imageNetcryTablet from '@/assets/portfolio/tablet/image-netcry.jpg'
import imageNetcryMobile from '@/assets/portfolio/mobile/image-netcry.jpg'
import imageParamourDesktop from '@/assets/portfolio/desktop/image-paramour.jpg'
import imageParamourTablet from '@/assets/portfolio/tablet/image-paramour.jpg'
import imageParamourMobile from '@/assets/portfolio/mobile/image-paramour.jpg'
import imageSeraphDesktop from '@/assets/portfolio/desktop/image-seraph.jpg'
import imageSeraphTablet from '@/assets/portfolio/tablet/image-seraph.jpg'
import imageSeraphMobile from '@/assets/portfolio/mobile/image-seraph.jpg'
import imageTrinityDesktop from '@/assets/portfolio/desktop/image-trinity.jpg'
import imageTrinityTablet from '@/assets/portfolio/tablet/image-trinity.jpg'
import imageTrinityMobile from '@/assets/portfolio/mobile/image-trinity.jpg'
import imageSxivDesktop from '@/assets/portfolio/desktop/image-sxiv.jpg'
import imageSxivTablet from '@/assets/portfolio/tablet/image-sxiv.jpg'
import imageSxivMobile from '@/assets/portfolio/mobile/image-sxiv.jpg'
import Feature from './Feature'

const Features = () => {
  const featureImages = [
  {
    title: 'Project 228B',
    desktop: image228bDesktop,
    tablet: image228bTablet,
    mobile: image228bMobile,
  },
  {
    title: 'Del Sol',
    desktop: imageDelSolDesktop,
    tablet: imageDelSolTablet,
    mobile: imageDelSolMobile,
  },
  {
    title: 'Prototype',
    desktop: imagePrototypeDesktop,
    tablet: imagePrototypeTablet,
    mobile: imagePrototypeMobile,
  },
  {
    title: 'Edelweiss',
    desktop: imageEdelweissDesktop,
    tablet: imageEdelweissDesktop,
    mobile: imageEdelweissDesktop,
  },
  {
    title: 'Eebox Building',
    desktop: imageEeboxDesktop,
    tablet: imageEeboxTablet,
    mobile: imageEeboxMobile,
  },
  {
    title: 'Hypers',
    desktop: imageHyperDesktop,
    tablet: imageHyperTablet,
    mobile: imageHyperMobile,
  },
  {
    title: 'Netcry',
    desktop: imageNetcryDesktop,
    tablet: imageNetcryTablet,
    mobile: imageNetcryMobile,
  },
  {
    title: 'Paramour',
    desktop: imageParamourDesktop,
    tablet: imageParamourTablet,
    mobile: imageParamourMobile,
  },
  {
    title: 'Seraph',
    desktop: imageSeraphDesktop,
    tablet: imageSeraphTablet,
    mobile: imageSeraphMobile,
  },
  {
    title: 'Trinity Bank',
    desktop: imageTrinityDesktop,
    tablet: imageTrinityTablet,
    mobile: imageTrinityMobile,
  },
  {
    title: 'SXIV Tower',
    desktop: imageSxivDesktop,
    tablet: imageSxivTablet,
    mobile: imageSxivMobile,
  },
]
  const screenSize = useScreenSize()
  const getImage = (index) => {
    const item = featureImages[index]
    switch (screenSize) {
      case 'mobile':
        return item.mobile
      case 'tablet':
        return item.tablet
      default:
        return item.desktop
    }
  }

  return (
    <div className='relative my-12 font-spartan'>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-7xl mx-40 px-4 sm:px-6 lg:px-0'>
        {featureImages.map((item, index) => (
           <Feature
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

export default Features