import React from 'react'
import imageJake from '@/assets/about/desktop/avatar-jake.jpg'
import imageThompson from '@/assets/about/desktop/avatar-thompson.jpg'
import imageJackson from '@/assets/about/desktop/avatar-jackson.jpg'
import imageMaria from '@/assets/about/desktop/avatar-maria.jpg'
const LeadersSection = () => {
  const leaders = [
    {
      name: "Jake Richards",
      role: "Chief Architect",
      image: imageJake,
    },
    {
      name: "Thompson Smith",
      role: "Head of Finance",
      image: imageThompson,
    },
    {
      name: "Jackson Rourke",
      role: "Lead Designer",
      image: imageJackson,
    },
    {
      name: "Maria Simpson",
      role: "Senior Architect",
      image: imageMaria,
    },
  ];
  return (
    <div className='relative my-12 font-spartan'>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Title */}
          <div className="lg:col-span-1">
            <h2 className="text-6xl font-bold text-gray-900 leading-tight">
              The <br /> Leaders
            </h2>
          </div>

          {/* Leaders grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {leaders.map((leader, index) => (
              <div key={index} className="flex flex-col">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover "
                />

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {leader.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {leader.role}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}

export default LeadersSection