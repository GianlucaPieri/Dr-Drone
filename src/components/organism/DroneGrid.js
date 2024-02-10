import DroniCards from "../molecules/DroniCards";

export default function DroneGrid(){

    const droni =[

        {id: 1, droneImage:"/media/Professionale.png", droneName:"Professionale", altDrone:"Professionale"},
        {id: 2, droneImage:"/media/dr.png", droneName:"Svago", altDrone:"Svago"},
        {id: 3, droneImage:"/media/Dronemedio.png", droneName:"Mini-droni", altDrone:"mini-droni"},



    ]

    return(

        <div className="min-h-[600px] dark:bg-slate-800 bg-gray-400 md:mx-20 md:rounded-tl-[50px] md:rounded-br-[50px] my-20 ">

            <h2 className=" text-5xl borderTitle2 underline dark:text-white text-center pt-10">i nostri prodotti</h2>

            <div className="flex flex-col md:flex-row justify-around pb-20">
               
               {
                  droni.map((drone)=>{

                    return(

                       <DroniCards
                          key={DroneGrid.id}
                          droneImage={drone.droneImage}
                          droneName={drone.droneName}
                          altDrone={drone.altDrone}
                       
                        />
                       


                    )


                  })
               
               
               }
             


            </div>




        </div>


    )

       

    

  


}