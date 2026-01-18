import React from 'react'
import { motion } from 'framer-motion'

const ContactInfoSection = () => {
  return (
    <motion.div 
      className='relative my-8 md:my-12 font-spartan'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Contact<br />Details
            </h2>
          </motion.div>

          <motion.div 
            className="space-y-3 md:space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base md:text-lg font-semibold text-gray-900">Main Office</h3>

            <p className="text-sm md:text-base text-gray-600">
              <span className="font-medium text-gray-800">Mail :</span>
              archone@mail.com
            </p>
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-medium text-gray-800">Address :</span>
              1892 Chenoweth Drive TN
            </p>
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-medium text-gray-800">Phone :</span>
              123-456-3451
            </p>

            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-900 hover:gap-3 transition-all"
              whileHover={{ x: 5 }}
            >
              View on Map
              <span>→</span>
            </motion.a>
          </motion.div>

          <motion.div 
            className="space-y-3 md:space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base md:text-lg font-semibold text-gray-900">Office II</h3>

            <p className="text-sm md:text-base text-gray-600">
              <span className="font-medium text-gray-800">Mail :</span>
              archtwo@mail.com
            </p>
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-medium text-gray-800">Address :</span>
              3399 Wines Lane TX
            </p>
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-medium text-gray-800">Phone :</span>
              832-123-4321
            </p>

            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-900 hover:gap-3 transition-all"
              whileHover={{ x: 5 }}
            >
              View on Map
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default ContactInfoSection