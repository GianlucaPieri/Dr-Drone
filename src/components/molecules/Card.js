import CardParagraph from "../atoms/CardParagraph";
import CardIcon from "../atoms/CardIcon";
import CardTitle from "../atoms/CardTitle";
import Buttom from "../atoms/Buttom";

export default function Card({code, title, paragraph, btnText, btnClasses}){

    return(

        <div className="h-[350px] md:w-1/4 m-10 border-1 rounded-[20px] dark:bg-slate-400 bg-white shadow shadow-primary flex flex-col items-center justify-evenly my-10">
                
          <CardIcon code={code}></CardIcon>

          <CardTitle>{title}</CardTitle>

          <CardParagraph>{paragraph}</CardParagraph>

          <Buttom className={btnClasses}>{btnText}</Buttom>

        </div>
    )


  






}
