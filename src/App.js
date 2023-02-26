
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
const appRouter = createBrowserRouter([{
  path:"/",
  element :<Body/>,
  children:[
    {
      path:"/",
  element :<AboutMe/>

  },
  {
    path:"skills",
element :<Skills/>,
},
{
  path:"education",
element :<Education/>,
},
{
  path:"experience",
element :<Experience/>,
},
{
  path:"projects",
element :<Projects/>,
},

  ]
}])
function App() {
  return (
    
   <div>
    
    <RouterProvider router={appRouter} />
   </div>
  );
}

export default App;
/*

Header -
  logo
  home
  portfolio
  skills
   time line
   education
   exprience
   contact
*/