import React from 'react'
import useScreenSize from '@/hooks/useScreenSize'
import mapDesktop from '@/assets/contact/desktop/image-map.png'
import mapTablet from '@/assets/contact/tablet/image-map.png'
import mapMobile from '@/assets/contact/mobile/image-map.png'

const MapSection = () => {
  const screenSize = useScreenSize()

  const getMapImage = () => {
    switch (screenSize) {
      case 'mobile':
        return mapMobile
      case 'tablet':
        return mapTablet
      default:
        return mapDesktop
    }
  }

  return (
    <div className='relative my-12 font-spartan'>
      <div class="max-w-7xl mx-auto px-6 py-16">
        <img
          src={getMapImage()}
          alt="Office locations map"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}

export default MapSection