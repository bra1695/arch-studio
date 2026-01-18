import React from 'react'
import { Link } from 'react-router-dom'

const LinkFooter = (props)  => {
  return (
        <Link to={props.link} className="text-slate-500 font-semibold text-lg hover:text-gray-900">
            {props.text}
        </Link>
  )
}

export default LinkFooter