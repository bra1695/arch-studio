import React from 'react'
import { motion } from 'framer-motion'

const Feature = ({ title, image, index }) => {
    return (
        <motion.div 
            className='relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg cursor-pointer group'
            whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.img
                src={image}
                alt={title}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
            />
            <motion.div 
                className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent'
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
            />
            <motion.div 
                className='absolute bottom-0 left-0 right-0 p-4 md:p-6'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <h3 className='text-white text-lg md:text-xl lg:text-2xl font-bold mb-2'>{title}</h3>
                <motion.a 
                    href="/portfolio" 
                    className="text-gray-300 hover:text-white text-xs md:text-sm font-medium transition-colors duration-200"
                    whileHover={{ x: 5 }}
                >
                    View Project →
                </motion.a>
            </motion.div>
        </motion.div>
    )
}

export default Feature