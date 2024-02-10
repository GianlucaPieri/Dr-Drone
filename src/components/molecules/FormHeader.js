import InputHeader from "../atoms/InputHeader"
import LabelHeader from "../atoms/LabelHeader"

export default function FormHeader(){
   
    return(

      <form className="mt-4 md:flex md:flex-wrap ">

        <div>

          <LabelHeader htmlFor="visita">
             Cerca assistenza...
          </LabelHeader>

          <InputHeader
            id="visita"
            name="visita"
            type="text"
            className="rounded-[5px] flex flex-col flex-wrap shadow shadow-indigo-300 px-8 py-2 text-2xl text-bold"
          />

        </div>

        <InputHeader 
          type="submit"
          value="Invia"
          className="rounded-[5px] ml-32 mt-8 flex shadow shadow-indigo-300 px-4 py-2 text-2xl md:ml-4"
        />


        

      </form>


    )




}