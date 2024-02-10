import Carrelicon from "../atoms/Carrelicon";

export default function DroniCards({droneImage, altDrone, droneName}){

   return(
     
             
        <div className="w-1/7 md:w-1/5 flex flex-col items-center m-6 md:m-0">

         <img className="rounded-[30px] w-[250px] bg-secondary shadow relative top-32" src={droneImage} alt={altDrone} />
      
            <div className="w-full rounded-[30px] h-[220px] bg-primary dark:bg-cyan-600 text-end shadow ">

             <h4 className="text-center pt-36 text-3xl font-bold underline">
               {droneName}
             </h4>
              
              <Carrelicon></Carrelicon>
            </div>

        </div> 

   )


}