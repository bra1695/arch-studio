import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '@/assets/logo.svg'
import hamburger from '@/assets/icons/icon-hamburger.svg'
import close from '@/assets/icons/icon-close.svg'
import LinkHeader from './LinkHeader'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className=" relative z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-24">
          <Link to="/" className="text-xl font-bold text-gray-900 animate-fade-in">
            <img src={logo} alt="Logo Arch Studio" className="h-8 md:h-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex flex-row gap-8 animate-slide-in-right'>
            <LinkHeader link="/portfolio" text="Portfolio" />
            <LinkHeader link="/about" text="About" /> 
            <LinkHeader link="/contact" text="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 animate-scale-in"
          >
            <img 
              src={isMenuOpen ? close : hamburger} 
              alt="Menu" 
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200 absolute left-0 right-0 top-16 shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <LinkHeader link="/portfolio" text="Portfolio" onClick={() => setIsMenuOpen(false)} />
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <LinkHeader link="/about" text="About" onClick={() => setIsMenuOpen(false)} />
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <LinkHeader link="/contact" text="Contact" onClick={() => setIsMenuOpen(false)} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header