import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const LinkHeader = ({ link, text, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link 
        to={link} 
        onClick={onClick}
        className="text-slate-500 font-semibold text-base md:text-lg hover:text-gray-900 transition-colors duration-200 block py-2 md:py-0"
      >
        {text}
      </Link>
    </motion.div>
  )
}

export default LinkHeader