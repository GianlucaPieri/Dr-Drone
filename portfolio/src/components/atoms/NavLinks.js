import { NavLink as Link } from "react-router-dom"
export default function NavLinks({children , to ='#'}){

     return(
        
        <Link to={to} className=" rounded-2xl px-2 border-[1px] border-white md:border-none md:rounded-none text-[20px] md:text-2xl font-semibold">
          <p>{children}</p>
        </Link>
     )


}