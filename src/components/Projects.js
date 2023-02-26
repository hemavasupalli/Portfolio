import React from 'react'
import youtube from "../youtube.png"

const Projects = () => {
  return (
    <div className='flex h-screen mt-5 bg-gradient-to-r from-green-200 to-blue-200 hover:from-pink-200 hover:to-yellow-200'>
        
        <div className='p-20 ml-2 shadow-2xl mt-36 h-96 '>
            <img className='w-72'
            alt="youtube"
            src={youtube}
            />

            <h1 className='p-2 text-2xl font-bold text-violet-700 '>Youtube App</h1>
            <p className="text-xl rounded-full text-violet-700 ">
                    Developed this youtube replica app using Webpack , Tailwind Css and React
                 </p>
                 <button className='border border-orange-700 bg-sky-700'>Github</button>
        </div>

        <div className='p-20 ml-8 hover:animate-bounce mt-36 h-96 hover:shadow-2xl'>
        <h1 className='mb-3 text-2xl font-bold '>Technologies</h1>
                <ul className="text-xl rounded-full text-violet-700 ">
                    <li >React</li>
                    <li>ES6</li>
                    <li >Typescript</li>
                    <li >Node js</li>
                    <li>Tailwind css</li>
                    <li>Redux</li>
                    <li>Jest</li>
                    <li>React Router</li>
                    <li>React Hooks</li>

                 </ul>
        </div>
        <div className='p-20 ml-8 hover:animate-bounce mt-36 h-96 hover:shadow-2xl'>
        <h1 className='mb-3 text-2xl font-bold '>Platform</h1>
                <ul className="text-xl rounded-full text-violet-700 ">
                    <li >Git</li>
                    <li >Bitbucket</li>
                    <li>Webpack</li>
                    <li>Parcel</li>
                    <li>Material UI</li>
                    <li >MangoDb</li>
                    

                 </ul>
        </div>
        
  
   </div>
  )
}

export default Projects