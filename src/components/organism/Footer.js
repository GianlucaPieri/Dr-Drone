import Link from "../atoms/Link";
import FooterIcon from "../atoms/FooterIcon";
export default function Footer(){

  return(

     
    <footer className="min-h-[100px] borderd-2 dark:bg-slate-600 border-indigo-200/50  flex flex-wrap justify-evenly">

          <div className="w-full md:w-1/8 mt-5 text-center">

              <h3 className="text-4xl dark:text-white text-black">
                  perchè dr.Drone ?
              </h3>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab commodi culpa natus minima? Sit sint ducimus laborum? Provident    enim  tempore exercitationem mollitia eos excepturi, ipsa consequuntur! Distinctio, obcaecati excepturi?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iste enim accusamus hic magni. Nisi ducimus animi rerum sunt iusto magni. Magni, nostrum. Dolorum quos optio nesciunt libero ipsum dolor?
              </p>

          </div>


            <div className="w-full md:w-1/5 mt-5 text-center">

              <h3 className="text-2xl  dark:text-white text-black ">
                  Quick Links
              </h3>

              <ul className="my-5 list-disc  dark:text-white">
                  <Link>cerca l'assistenza</Link>
                  <Link>Servizi</Link>
                  <Link>Professionisti</Link>

              </ul>


            </div>

            <div className="mt-5 w-1/2 md:w-1/6 flex flex-col">

              <h3 className="text-2xl text-center text-black   dark:text-white">
                  contatti
              </h3>

                <div className="flex justify-between items-center h-20 text-2xl text-primary rounded-full p-4 bg-black my-5">

                  <FooterIcon
                      code={"fa-facebook"}
                  />

                  <FooterIcon
                      code={"fa-instagram"}
                  />

                  <FooterIcon
                      code={"fa-twitter"}
                  />



                </div>

            </div>


    </footer>


  )



}
