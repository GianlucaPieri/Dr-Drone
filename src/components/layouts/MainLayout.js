import Navbar from "../organism/Navbar"
import Footer from "../organism/Footer"

export default function MainLayout({header, children}){
   
    return(
       <> 
          <Navbar></Navbar>

            {header}
            {children}

          <Footer></Footer>
       </>  

    )

}