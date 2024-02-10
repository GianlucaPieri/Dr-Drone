export  default function LabelHeader({htmlFor, children}){

   return(

    <label
    
       className="text-2xl italic" 
       htmlFor={htmlFor}>
       {children}

    </label>


   )

}