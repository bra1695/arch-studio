import React from 'react'

const ContactInfoSection = () => {
  return (
    <div className='relative my-12 font-spartan'>
      <section class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          <div>
            <h2 class="text-4xl font-bold text-gray-900 leading-tight">
              Contact<br />Details
            </h2>
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-semibold text-gray-900">Main Office</h3>

            <p class="text-gray-600">
              <span class="font-medium text-gray-800">Mail :</span>
              archone@mail.com
            </p>
            <p class="text-gray-600">
              <span class="font-medium text-gray-800">Address :</span>
              1892 Chenoweth Drive TN
            </p>
            <p class="text-gray-600">
              <span class="font-medium text-gray-800">Phone :</span>
              123-456-3451
            </p>

            <a
              href="#"
              class="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:gap-3 transition-all"
            >
              View on Map
              <span>→</span>
            </a>
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-semibold text-gray-900">Office II</h3>

            <p class="text-gray-600">
              <span class="font-medium text-gray-800">Mail :</span>
              archtwo@mail.com
            </p>
            <p class="text-gray-600">
              <span class="font-medium text-gray-800">Address :</span>
              3399 Wines Lane TX
            </p>
            <p class="text-gray-600">
              <span class="font-medium text-gray-800">Phone :</span>
              832-123-4321
            </p>

            <a
              href="#"
              class="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:gap-3 transition-all"
            >
              View on Map
              <span>→</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  )
}

export default ContactInfoSection