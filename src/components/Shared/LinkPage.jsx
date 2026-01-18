import { MoveRight } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const LinkPage = ({ link, text, className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <Link 
        to={link} 
        className='bg-black flex items-center justify-center w-full md:w-60 text-white px-4 md:px-6 py-3 gap-2 md:gap-4 font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm md:text-base'
      >
        <span>{text}</span>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <MoveRight size={20} className='text-white' />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default LinkPage