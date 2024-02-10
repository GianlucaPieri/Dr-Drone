import Instagram from "@icons/Instagram"
import Facebook from "@icons/Facebook"
import Linkedin from "@icons/Linkedin"
import Gmail from "@icons/Gmail"
import { useSpring, animated } from '@react-spring/web'


 function Social(){
   const springsfall = useSpring({
      from: { x: 200 },
      to: { x: 0 },
      config:{
        duration: 200
      }
    });

    const springs1fall = useSpring({
      from: { x: 200 },
      to: { x: 0 },
      config:{
        duration: 300
      }
    });

    const springs2fall = useSpring({
      from: { x: 200 },
      to: { x: 0 },
      config:{
        duration: 400
      }
    });

    const springs3fall = useSpring({
      from: { x: 200 },
      to: { x: 0 },
      config:{
        duration: 500
      }
    });

     return(

        <div className="flex gap-7 px-2 md:flex md:flex-col md:gap-10">
         <animated.div style={springsfall}>
            <Gmail className={'w-[44px] h-[44px] md:w-[82px] md:h-[71px] '}/>
         </animated.div>

         <animated.div style={springs1fall}>
            <Instagram className={'w-[44px] h-[44px] md:w-[82px] md:h-[71px] '}/>
         </animated.div>

         <animated.div style={springs2fall}>
            <Facebook className={'w-[44px] h-[44px] md:w-[82px] md:h-[71px] '}/>
         </animated.div>

         <animated.div style={springs3fall}>
            <Linkedin className={'w-[44px] h-[44px] md:w-[82px] md:h-[71px] '}/>
         </animated.div>


        
        
        
        </div>
     )

        
        

}
export default Social;