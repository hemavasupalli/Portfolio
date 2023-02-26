import React, { useState } from 'react'
const Section =({title,li1,li2,li3 ,isVisible,setisVisible})=>{
   
    return(
      <div>
        <div className='flex p-5 mt-5 shadow-xl w-100 mr-44 ml-44 rounded-xl'>
        <h1 className='mt-20 ml-20 mr-4 text-xl font-bold text-cyan-700'>{title}</h1>
        {isVisible ? 
         (  <button className='mt-20 mr-2 font-bold ml-44 ' onClick={()=> {
            
         }}>-</button>):
       ( <button className='mt-20 mr-2 font-bold ml-44 ' onClick={()=>setisVisible(true)}>▼</button>)
     
        }
    </div>
        
       { isVisible && 
       <>
       <ul className='p-2 mt-10 ml-56 font-bold mr-44'>
        <li className='mb-4 '>{li1}</li>
        <li className='mb-4'>{li2}</li>
        <li className='mb-4'>{li3}</li>

        </ul>
        
        </>}
    </div>
    )
}
const Experience = () => {
    const [isVisibleConfig , setisVisibleConfig]= useState("");
  return (
    <div className='h-screen mt-5 bg-gradient-to-r from-green-200 to-blue-200 hover:from-pink-200 hover:to-yellow-200'>
    <Section 
    title={"Front End Developer Intern | Property Vista    (May 2022 - December 2022)"} 
    li1={"Developed web applications using React for Property management Pages"}
    li2={"As the sole developer, indulged in requirement gathering, UX design discussions, development, deployment, and maintenance."}
    li3={"Involved in code reviews, unit/functional test case reviews, refactoring. Used Jest for mocking functions and writing unit tests for testing component coverage reports"}
    //description={"  "}
    

    isVisible={isVisibleConfig==="show1"}
    setisVisible={()=>
    { 
      setisVisibleConfig("show1")
      

    }}
     />
      <Section 
    title={"Teaching Assistant | Wilfrid Laurier University    (September 2021 - April 2022)"} 
    li1={"Working as an Instructional Assistant for the course Data Structures and Algorithms. Assigned work includes doubt Solving in Java/Python, helping students, grading assignments and lab and other administrative tasks."}
   
    isVisible={isVisibleConfig==="show2"}
    setisVisible={()=>
    { 
      setisVisibleConfig("show2")

    }}

    
     />
      <Section 
    title={"Application Development Analyst | Accenture    (October 2018 - August 2021) "} 
    li1={"Worked on ES6 features for handling asynchronous data requests, Deep functional knowledge in building reusable components and libraries for future use and also have Good Understanding of Document Object Model (DOM)"}
    li2={"Oversaw all Agile methodologies and ceremonies - sprint planning, backlog reﬁnement. Used Jira for user story tracking processes and streamlining agile planning."}
    li3={"Involved designing web pages using HTML5, CSS3, JavaScript, Bootstrap, SASS, React.js, Redux, Flex."}
    isVisible={isVisibleConfig==="show3"}
    setisVisible={()=>
    { 
      setisVisibleConfig("show3")

    }}
     />
    </div>

  )
}

export default Experience