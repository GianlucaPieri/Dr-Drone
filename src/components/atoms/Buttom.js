export default function Buttom({children, className}){

    return(
        
        <button className={`${className} rounded-[10px] border-4 border-gray-400`}>      
            {children}

        </button>
    )
    


}