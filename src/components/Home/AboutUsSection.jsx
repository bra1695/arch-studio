import React from 'react'
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
    <div className='relative my-12'>
      <div style={{ backgroundImage: `url(${getImage()})` }} className="max-w-7xl relative mx-40 px-4 sm:px-6 lg:px-0 h-[600px] bg-cover bg-center">
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-white"></div>
        <div className='text-white absolute top-40 left-64 font-spartan   tracking-widest'>
          <h2 className='text-7xl font-bold'>Small team,  <br /> big ideas</h2>
          <div className='mt-4'>
            <LinkPage link="/about" text="About Us" className="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUsSection