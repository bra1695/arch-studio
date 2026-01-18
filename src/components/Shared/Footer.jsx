import React from 'react'
import { motion } from 'framer-motion'
import logoWhite from '@/assets/logo_white.svg'
import { Link } from 'react-router-dom'
import LinkFooter from './LinkFooter'
import LinkPage from './LinkPage'

const Footer = () => {
  return (
    <footer className='relative mt-12 font-spartan animate-fade-in'>
      <nav className="max-w-7xl mx-auto w-full relative h-auto md:h-32 flex flex-col md:flex-row items-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between bg-slate-100 w-full md:w-10/12 p-4 md:p-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-16">
            <motion.div 
              className='bg-black h-20 md:h-32 flex items-center px-6 w-full md:w-auto justify-center'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="text-xl font-bold text-gray-900">
                <img src={logoWhite} alt="Logo Arch Studio" className="h-6 md:h-auto" />
              </Link>
            </motion.div>

            <div className='flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left'>
              <LinkFooter link="/portfolio" text="Portfolio" />
              <LinkFooter link="/about" text="About" /> 
              <LinkFooter link="/contact" text="Contact" />
            </div>
          </div>
        </div>
        
        <motion.div 
          className='mt-4 md:mt-0 md:absolute md:right-10'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <LinkPage link="/portfolio" text="See All" className="" />
        </motion.div>
      </nav>
    </footer>
  )
}

export default Footer