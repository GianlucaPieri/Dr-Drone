export default function InputHeader({id,  type, value="", className}){

   return(

       <input
         id={id}
         name={id}
         type={type}
         defaultValue={value}
         className={className}
       />
   )

}