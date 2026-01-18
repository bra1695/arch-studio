import React from 'react'
import welcome from '@/assets/home/desktop/image-welcome.jpg'
const WelcomeSection = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <h2 className='watermark-text z-50'>Welcome</h2>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-96">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          {/* Left column - Text content */}
          <div className="space-y-4 ">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mt-36">
              Welcome to
              <br />
              Arch Studio
            </h2>

            <p className="text-base md:text-md text-foreground/80 leading-relaxed">
              We have a unique network and skillset to help bring your projects to life. Our small team of highly
              skilled individuals combined with our large network put us in a strong position to deliver exceptional
              results.
            </p>

            <p className="text-base md:text-md text-foreground/80 leading-relaxed">
              Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we
              create spaces that inspire and delight.
            </p>

            <p className="text-base md:text-md text-foreground/80 leading-relaxed">
              We work closely with our clients so that we understand the intricacies of each project. This allows us to
              work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
            </p>
          </div>

          {/* Right column - Image */}
          <div className="relative h-96 md:h-full md:min-h-96">
            <img
              src={welcome}
              alt="Arch Studio architectural design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection