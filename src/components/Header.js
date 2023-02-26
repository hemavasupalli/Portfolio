import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between text-sky-700 bg-gradient-to-r '>
        <a href="/">
        <h1 className='col-span-1 mt-4 text-2xl font-bold cursor-pointer h-26 p-14 hover:animate-pulse'
       >Hema V.</h1>
        </a>
        <ul className='flex justify-between col-span-10 mt-16 text-2xl font-bold cursor-pointer space-x-9 mr-44'>
           <li className='hover:text-violet-700'><Link to="/">About Me</Link></li>
           <li className='hover:text-violet-700'><Link to="/skills">Skills</Link></li>
            <li className='hover:text-violet-700'><Link to="/education">Education</Link></li>
            <li className='hover:text-violet-700'><Link to="/experience">Experience</Link></li>
            <li className='hover:text-violet-700'><Link to="/projects">Projects</Link></li>
        </ul>
    </div>
  )
}

export default Header