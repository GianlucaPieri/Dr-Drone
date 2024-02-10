import { createBrowserRouter } from "react-router-dom";
import Root from '@pages/Root.js'
import Home from'@pages/Home'
import AboutMeAbout from '../pages/AboutMe/About'
import SkillSkills from "../pages/Skill/Skills";




const router = createBrowserRouter([

     {
        path :'/',
        element : <Home/>

     },
      
     {
         path :'/aboutme',
         element : <Root/>,
         children : [

            {
               path :'/aboutme',
               element : <AboutMeAbout/>
      
            },
         ] 
          
      

      },

      {
         path :'/skill',
         element : <Root/>,
         children : [

            {
               path :'/skill',
               element : <SkillSkills/>
      
            },
         ] 
          
      

      },

     





    


]);

export default router;

