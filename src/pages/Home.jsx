import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import WelcomeSection from '../components/Home/WelcomeSection'
import AboutUsSection from '../components/Home/AboutUsSection'
import FeaturedSection from '../components/Home/FeaturedSection'
import TitlePage from '../components/Shared/TitlePage'

const Home = () => {
  return (
    <div>
      <TitlePage name={'Home'} />
      <HeroSection />
      <WelcomeSection />
      <AboutUsSection />
      <FeaturedSection />
    </div>
  )
}

export default Home