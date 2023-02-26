import React from 'react'

const Education = () => {
  return (
    <div className='flex h-screen mt-5 bg-gradient-to-r from-green-200 to-blue-200 hover:from-pink-200 hover:to-yellow-200'>
        <img className='h-20 ml-10 rounded-full hover:animate-spin mt-60 bg-slate-500'
        alt="skills"
        src="https://cdn.dribbble.com/users/227263/screenshots/4182498/media/ae56a90d51436180eebf5a54f7969771.png?compress=1&resize=400x300&vertical=top" />
        <div className='p-20 ml-2 hover:animate-bounce mt-60 h-96 hover:shadow-2xl'>
            <h1 className='mb-3 text-2xl font-bold '>September 2021- April 2023</h1>
            <ul className="p-5 text-xl rounded-full text-violet-700 ">
                    <li className='p-5'>✦ ✍Master of Applied Computing (Co-op)</li>
                    <li className='p-2 ml-20'>📍 Wilfrid Laurier University, Waterloo ON</li>
                   
                 </ul>
        </div>
        <div className='p-20 ml-2 hover:animate-bounce mt-60 h-96 hover:shadow-2xl'>
            <h1 className='mb-3 text-2xl font-bold '>2014-2018</h1>
            <ul className="p-5 text-xl rounded-full text-violet-700 ">
                    <li className='p-5'>✦ ✍Computer Science Of Engineering</li>
                    <li className='p-2 ml-20'>📍 Gitam University, Vizag, India</li>
                   
                 </ul>
        </div>
        
  
   </div>
   
  )
}

export default Education