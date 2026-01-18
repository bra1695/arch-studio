import React, { useState } from 'react'

const SendSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className='relative my-12 font-spartan'>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Tell us about<br />your project
            </h2>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-900 outline-none bg-transparent text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-900 outline-none bg-transparent text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-900 outline-none bg-transparent text-gray-900 placeholder-gray-500 resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:gap-3 transition-all bg-black text-white px-8 py-3"
              >
                <span>→</span>
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default SendSection