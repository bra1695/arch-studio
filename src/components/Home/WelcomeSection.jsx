import React from 'react'
import { motion } from 'framer-motion'
import welcome from '@/assets/home/desktop/image-welcome.jpg'

const WelcomeSection = () => {
  return (
    <section className="py-8 md:py-12 lg:py-20 relative overflow-hidden">
      <motion.h2 
        className='hidden lg:block watermark-text z-50'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Welcome
      </motion.h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-96">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-32 items-center">
          {/* Left column - Text content */}
          <motion.div 
            className="space-y-4 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mt-0 lg:mt-36">
              Welcome to
              <br />
              Arch Studio
            </h2>

            <motion.p 
              className="text-sm md:text-base text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We have a unique network and skillset to help bring your projects to life. Our small team of highly
              skilled individuals combined with our large network put us in a strong position to deliver exceptional
              results.
            </motion.p>

            <motion.p 
              className="text-sm md:text-base text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we
              create spaces that inspire and delight.
            </motion.p>

            <motion.p 
              className="text-sm md:text-base text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We work closely with our clients so that we understand the intricacies of each project. This allows us to
              work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
            </motion.p>
          </motion.div>

          {/* Right column - Image */}
          <motion.div 
            className="relative h-64 md:h-80 lg:h-96 lg:min-h-96 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={welcome}
              alt="Arch Studio architectural design"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection