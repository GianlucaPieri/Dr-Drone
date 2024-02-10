import { useState } from 'react';
import NavBar from '@organisms/NavBar'
import Iconhtml from '@icons/Iconhtml';
import Iconreact from '@icons/Iconreact';
import Iconjs from '@icons/Iconjs';
import Icontail from '@icons/Icontail';
import Iconfig from '@icons/Iconfig';

export default function Skills(){
    const [videoPlaying, setVideoPlaying] = useState(false);

    const playVideo = () => {
        setVideoPlaying(true);
    };

    return(
        <>
            <NavBar />
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-[55px] font-black'>SKILL</h1>
                <div className='flex flex-col  rounded-3xl bg-bgHeader bg-cover bg-no-repeat md:gap-10 md:px-10 md:py-10'>
                    <div className='flex justify-center items-center'>
                        <div className='flex gap-3 mt-2 md:flex md:gap-52'>
                            <Iconjs className={'size-[40px] md:size-auto'}/>
                            <Iconhtml className={'size-[40px] md:size-auto'}/>
                            <Iconreact className={'size-[40px] md:size-auto'}/>
                            <Icontail className={'size-[40px] md:size-auto'}/>
                            <Iconfig className={'size-[40px] md:size-auto'}/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-4 md:flex md:flex-row md:justify-evenly md:items-center'>
                        <ul className='flex flex-col text-white  underline font-semibold gap-8 mt-10 md:text-2xl'>
                            <li>- Atomic Design</li>
                            <li>- React Router Dom</li>
                            <li>- Great use of AI</li>
                            <li>- Excellent team work</li>
                            <li>- Good problem solving</li>
                            <li>- Mastery in assembling workstations (dekstop)</li>
                            <li>- Excellent PC maintenance</li>
                        </ul>
                        <div>
                            <p className='text-yellow-500 font-semibold'>What is Atomic Design?</p>
                            <iframe id="atomicDesignVideo" autoplay={videoPlaying ? 'true' : 'false'} className='w-[300px] h-[175px] rounded-xl border-[3px] border-yellow-700 md:h-[350px] md:w-[600px]' src="/media/AtomicDesign.mp4" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

