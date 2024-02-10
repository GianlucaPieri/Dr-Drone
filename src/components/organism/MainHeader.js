import FormHeader from "../molecules/FormHeader"

export default function MainHeader(){
  
  return(
     
        <header className="mt-20 w-full min-h-[800px] dark:bg-slate-600 flex flex-wrap flex-col-reverse justify-center items-center md:min-h-[700px] md:flex-row">

          <div className="w-full md:w-1/3 p-7 md:p-0 ">

              <h1 className="dark:text-white text-6xl font-semibold stroke-yellow-400 md:text-8xl ">dr.Drone</h1>

              <h2 className="dark:text-white text-2xl italic underline text-black">
                Il tuo dottore di droni a portata di click
              </h2>

              <p className="mt-12 md:mt-10">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus placeat cupiditate vitae dolorem eum id eos est necessitatibus sunt quisquam nulla assumenda enim blanditiis, magnam maiores dolore illo nisi dignissimos?
              </p>

              <FormHeader></FormHeader>





          </div>

          <div className="w-full md:w-1/3">
              <img className="w-[500px] md:w-[600px] block mx-auto" src="./media/Robottino.png" alt="" />
          </div>

        </header>

  )



}