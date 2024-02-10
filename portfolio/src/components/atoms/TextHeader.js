import { useSpring, animated } from '@react-spring/web'
 
 function TextHeader(){
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

        <div className=' flex-col font-semibold text-white text-center md:flex '>
            <animated.div style={springsfall}>
                <h1 className='text-[56px] font-normal md:text-[86px]'>Hello, i'm</h1>
            </animated.div>

            <div className='text-[56px] md:text-[86px] font-black'>
                <animated.div style={springs1fall}>
                 <h1>Gianluca Pieri</h1>
                 </animated.div>

                <animated.div style={springs2fall}>
                    <h1>Web Designer</h1>
                </animated.div>

            </div>

            <animated.div style={springs3fall}>
                <h1 className='text-[56px] font-normal md:text-[86px]'>Based in Viterbo</h1>
            </animated.div>

        </div>
    )

}
export default TextHeader;