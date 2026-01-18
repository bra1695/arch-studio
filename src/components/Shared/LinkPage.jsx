import { MoveRight } from 'lucide-react'
import React from 'react'

const LinkPage = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer" className='bg-black flex items-center justify-center w-60 text-white px-6 py-3 gap-4 font-semibold hover:bg-gray-800'>
        {props.text} <MoveRight  size={24} className='text-white' />
    </a>
  )
}

export default LinkPage