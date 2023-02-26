import React from 'react'

const Skills = () => {
  return (
    
    <div className='flex h-screen mt-5 bg-gradient-to-r from-green-200 to-blue-200 hover:from-pink-200 hover:to-yellow-200'>
        <img className='h-20 ml-10 rounded-full hover:animate-spin mt-44 bg-slate-500'
        alt="skills"
        src="https://www.seekpng.com/png/detail/969-9690881_honestly-priced-skills-icon-without-background.png" />
        <div className='p-20 ml-2 hover:animate-bounce mt-36 h-96 hover:shadow-2xl'>
            <h1 className='mb-3 text-2xl font-bold '>Languages</h1>
            <ul className="text-xl rounded-full text-violet-700 ">
                    <li>Html</li>
                    <li>CSS</li>
                    <li>Sass</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                 </ul>
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
        <div className='p-20 ml-8  hover:animate-bounce mt-36 h-96 hover:shadow-2xl'>
        <h1 className='mb-3 text-2xl font-bold '>Tools</h1>
                <ul className="text-xl rounded-full text-violet-700 ">
                    <li >Microsoft VSCode</li>
                    <li >Eclipse</li>
                    <li >Gitlab</li>
                    <li>jira</li>
                    <li>Confluence</li>
                 </ul>
        </div>
  
   </div>
  )
}

export default Skills