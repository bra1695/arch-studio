import React from 'react'
import HeroSection from '../components/About/HeroSection'
import HeritageSection from '../components/About/HeritageSection'
import LeadersSection from '../components/About/LeadersSection'
import TitlePage from '../components/Shared/TitlePage'

const About = () => {
  return (
    <div>
      <TitlePage name={'About Us'} />
      <HeroSection />
      <HeritageSection />
      <LeadersSection />
    </div>
  )
}

export default About