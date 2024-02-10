import { Link } from "react-router-dom"
import GroupNav from "@molecules/GroupNav"
export default function NavBar(){


   return(

    <nav className=' flex items-center mt-10 rounded-b-3xl justify-center md:mt-0 md:h-[100px] md:gap-20 px-4'>
        <Link to='/' className='mt-3'>
        <img className="size-1/2 md:size-auto" src="/media/Logo.png" alt="" />
        </Link>
        <GroupNav/>
    
    </nav>


   )

}