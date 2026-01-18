import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo.svg'
import LinkHeader from './LinkHeader'
const Header = () => {
  return (
    <header className="bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center space-x-16">
            <Link to="/" className="text-xl font-bold text-gray-900">
              <img src={logo} alt="Logo Arch Studio" />
            </Link>
            <div className='flex flex-row gap-8'>
            <LinkHeader link="/portfolio" text="Portfolio" />
            <LinkHeader link="/about" text="About" /> 
            <LinkHeader link="/contact" text="Contact" />
            </div>

          </div>
    
        </div>
      </nav>
    </header>
  )
}

export default Header