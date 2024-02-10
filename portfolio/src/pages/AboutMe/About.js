import { useState } from "react";
import NavBar from '@organisms/NavBar'

export default function About(){
    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleClickImage = (imageSrc) => {
      setSelectedImage(imageSrc);
      setShowOverlay(true);
    };
  
    const handleCloseOverlay = () => {
      setShowOverlay(false);
      setSelectedImage(null);
    };
     return(
        <>
        <NavBar></NavBar>
        
        <div className='md:flex md:justify-center md:gap-[50px] '>
         
          <div className='flex flex-col items-center md:flex md:flex-col gap-2'>
             <h1 className='text-[55px] text-white font-bold mt-10'>ABOUT ME</h1>
            <div className='px-3 w-[380px] h-[400px] bg-primary border-[5px] shadow-xl shadow-primary rounded-xl shrink overflow-hidden md:flex  md:justify-between md:w-[900px] md:h-[650px]'>
              <p className='text-white text-[30px] px-6 leading-relaxed overflow-y-auto'>Hello, my name is Gianluca Pieri, I am a 31 year old boy residing in the province of Viterbo and I was born into a family of great artisans in the art of baking, I graduated in accounting but over the years I discovered that it was not what I wanted to do in my life. One day at the age of 25 I understood my passion was in the Tech world... With the passion for video games I had to assemble a desktop PC with the help of tutorials on YouTube and right in that instant I understood that that was my path .I enrolled in a course for smartphone repairers and PC assembly, passing with the highest grade 100/100. In the province where I live there is not much demand for IT technicians and while browsing the web I came across adverts for web developers, I did some coding tests which went quite well. Getting more and more passionate about it, I decided to enroll in a specialized course in Web Designer where I learned the basics of coding and the fundamental concepts for a web designer.</p>
            </div>
          </div>
  
          <div className='flex flex-col-reverse items-center mb-2  gap-3 text-white text-xl underline md:flex md:flex-col-reverse md:items-start'>
            
            <img className='w-[100px] h-[75px] rounded-xl cursor-pointer md:w-[200px] md:h-[150px]' src='/media/volta.jpg' alt='Image 2' onClick={() => handleClickImage('/media/volta.jpg')} />
            <img className='w-[300px] h-[225px] rounded-xl cursor-pointer md:w-[600px] md:h-[450px]' src='/media/aulab.jpg' alt='Image 1' onClick={() => handleClickImage('/media/aulab.jpg')} />
            <p>Click to enlarge:</p>
          </div>
        </div>
  
        {showOverlay && (
          <div className='fixed top-0 left-0 px-10 py-10 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
            <img className='max-w-full max-h-full rounded-xl' src={selectedImage} alt='Selected Image' onClick={handleCloseOverlay} />
          </div>
        )}
        </>


     )


}