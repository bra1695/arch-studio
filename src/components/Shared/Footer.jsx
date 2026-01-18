import React from 'react'
import logoWhite from '@/assets/logo_white.svg'
import { Link } from 'react-router-dom'
import LinkFooter from './LinkFooter'
import LinkPage from './LinkPage'
const Footer = () => {
  return (
    <footer className='relative mt-12 font-spartan'>

        <nav className="max-w-7xl mx-auto w-full  relative  h-32 flex items-center">
        <div className="flex justify-between bg-[#eeeff4] w-10/12">
          <div className="flex items-center space-x-16">
            <div className='bg-black h-32 flex items-center px-6'>
            <Link to="/" className="text-xl font-bold text-gray-900">
              <img src={logoWhite} alt="Logo Arch Studio" />
            </Link>
            </div>

            <div className='flex flex-row gap-8'>
            <LinkFooter link="/portfolio" text="Portfolio" />
            <LinkFooter link="/about" text="About" /> 
            <LinkFooter link="/contact" text="Contact" />
            </div>

          </div>
        </div>
        <div className='absolute right-10'>
          <LinkPage link="/features" text="See All" className="" />
        </div>

      </nav>
    </footer>
  )
}

export default Footer