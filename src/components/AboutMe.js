import React from 'react'
import hema from "../hema.png"

const AboutMe = () => {
  return (
    <div className='flex h-screen bg-gradient-to-r from-green-200 to-blue-200 hover:from-pink-200 hover:to-yellow-200'>
    <img className='col-span-1 ml-10 rounded-full cursor-pointer h-80 mt-28'
        alt="logo"
       src={hema}
        />
        <div className=''>
        <h1 className='px-20 text-3xl font-bold hover:animate mt-28 text-cyan-700 hover:text-pink-600'>Front End React Developer</h1>
      
        <p className='mt-6 ml-20 mr-20 font-bold animate-pulse scroll'>
        Hello! This is Hema , I am a Full Stack Web Developer who has Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model and Thorough understanding of React.js and its core principles
        </p>
        </div>
        </div>
  )
}

export default AboutMe