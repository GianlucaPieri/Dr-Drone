import Card from "../molecules/Card";
import Buttom from "../atoms/Buttom";

export default function CardsGrid(){

       let paragraph = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quasi assumenda aut alias dolores, similique quod molestiae debitis magni dignissimos non necessitatibus." ;
        
       let btnText = "maggiori info...";

       let btnClasses = "p-2 bg-gray-200 hover:bg-secondary";

       const services = [

         {id: 1, code: "fa-gear"  , title: "Motori" , paragraph , btnText, btnClasses},

         {id: 2, code: "fa-camera" , title: "Obbiettivi" , paragraph , btnText, btnClasses},

         {id: 3, code: "fa-fan" , title: "Eliche" , paragraph , btnText, btnClasses},

         {id: 4, code: "fa-helicopter" , title: "Scocche" , paragraph , btnText, btnClasses},

         {id: 5, code: "fa-gamepad" , title: "Controller" , paragraph , btnText, btnClasses},
 
         {id: 6, code: "fa-car-battery" , title: "Batterie" , paragraph , btnText, btnClasses},
       ]

    return(
        <>
            <h2 className="text-center text-3xl  dark:bg-slate-600 dark:text-white ml-18 md:text-5xl  mt-28 md:mt-0 ">
              Esplora i servizi di assistenza
            </h2>

            <div className="flex justify-evenly flex-wrap  dark:bg-slate-600">

               {

                 services.map((service)=>{


                    return(

                        <Card
                         key={service.id}
                         code={service.code} 
                         title={service.title}    
                         paragraph={service.paragraph}    
                         btnText={service.btnText}
                         btnClasses={service.btnClasses}            
                        />

                    )

                 })

               }

            </div>

            <div className="dark:bg-slate-600 ">
              
              <Buttom className="px-14 py-6 mt-0 bg-primary border-4 dark:hover:bg-slate-900 dark:hover:text-primary dark:bg-cyan-700 dark:text-white hover:bg-secondary font-bold block mx-auto my-10 text-2xl ">
                 Maggiori Info...
              </Buttom>

            </div>
        
        </>


    )


}