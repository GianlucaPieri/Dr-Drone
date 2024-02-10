import NavBar from "@organisms/NavBar";
import TextHeader from "@atoms/TextHeader";
import Social from "@molecules/Social";


function Home() {

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <NavBar></NavBar>
      <header className='min-h-[80vh] w-full flex flex-col items-center mt-16 text-[65px] h-1/2 md:items-center md:justify-center md:gap-40 md:flex md:flex-row md:mt-10 '>
        <img className='size-[250px] rounded-full md:size-[500px]' src="/media/Gifimg.gif" alt="" />
        <TextHeader />
        <Social />
      </header>
      
      
      
    </div>
  );
}

export default Home;
