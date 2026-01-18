import React from 'react'
import HeroSection from '../components/Contact/HeroSection'
import ContactInfoSection from '../components/Contact/ContactInfoSection'
import MapSection from '../components/Contact/MapSection'
import SendSection from '../components/Contact/SendSection'
import TitlePage from '../components/Shared/TitlePage'

const Contact = () => {
  return (
    <div>
      <TitlePage name={'Contact Us'} />
      <HeroSection />
      <ContactInfoSection />
      <MapSection />
      <SendSection />
    </div>
  )
}

export default Contact