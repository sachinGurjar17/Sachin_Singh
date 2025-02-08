import { CiLinkedin } from "react-icons/ci";
import { FaRegCopy } from "react-icons/fa";
import InfoBox from './InfoBox';
import Footer from "./Footer";
import { useCallback ,useRef, useState} from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { useTypewriter , Cursor } from "react-simple-typewriter";
import SkillBOx from "./SkillBox";
import Projects from "./Projects";
import { Button } from "./ui/button";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { ImWhatsapp } from "react-icons/im";

function Home() {

  const [isCopied , setIsCopied] = useState(false)


  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText('sachinsg17rp@gmail.com')
    setIsCopied(true);

    setTimeout(()=>{
      setIsCopied(false);
    },2000)
  }, [])

  const [text] = useTypewriter({
    words :[' Sachin Singh', ' web developer'],
    loop:{},
  });

  return (
    <>     
          <div className="w-full lg:w-2/3 ">
            <div className="mx-2 bg-white flex flex-col space-y-10 rounded-3xl mt-28  dark:dark:bg-zinc-800 dark:text-white dark:border-gray-600 dark:border-[0.5px] pb-4 shadow-lg">
              <div >
                <div className='flex justify-between p-4'>
                  <p className= 'text-sm sm:text-xl'>• Full Stack Developer</p>
                  <div class="group ">
                    <a href="https://github.com/sachinGurjar17" target="_blank">
                    <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <span class="absolute -top-10 left-[50%] -translate-x-[50%] 
                    z-20 origin-left scale-0 px-3 border rounded-xl 
                    border-gray-300 bg-white py-1 text-sm font-bold
                    shadow-md transition-all duration-300 ease-in-out 
                    group-hover:scale-100 text-black">GitHub</span></div>
                </div>
              </div>

              <div className='flex flex-col  justify-center items-center gap-4'>
                <img
                        src="./images/pip.png"
                        alt="Sachin Profile Pic"
                        className='w-56 h-44 rounded-3xl'
                />
                <div className='flex flex-col justify-center items-center '>
                <p className='font-mono !text-[3rem] mt-2 max-sm:!text-[1.6rem] !whitespace-nowrap tracking-tighter text-center '>
                  Hi, I'm Sachin Singh
                </p>
                <p className=" px-24 mt-2 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6 ">Full Stack Web Developer Building Impactful Web Applications. I specialize in creating production-ready web apps from the ground up, with a focus on both frontend and backend development. Passionate about solving real-world problems and always open to new challenges. </p>
                </div> 
                 
              </div>

              <div className=' flex space-x-4 justify-center items-center '>
                <a href="https://drive.google.com/file/d/1JV8a_rjv9-tBXJ9_Rw2__VtJi9EZ-tuG/view?usp=drive_link" target="_blank" className="  flex-nowrap flex flex-row justify-center items-center px-3 py-1 text-lg rounded-xl gap-2 bg-black text-white hover:text-black hover:border-black hover:border dark:hover:border-white dark:text-black hover: border-white border-solid dark:border-black dark:bg-white hover:bg-white dark:hover:bg-black dark:hover:text-white">Resume <IoCloudDownloadOutline/></a>

                <Button onClick={copyPasswordToClipboard} className=" bg-gray-400 text-black rounded-xl hover:bg-white hover:text-black shadow-lg "> <span className='text-lg sm:text-2xl '>
                      {isCopied ? <IoCheckmarkDone/>:<FaRegCopy/>}
                  </span> Copy Email</Button> 
              </div>
              
              <div className='flex flex-col justify-center items-center space-y-4 m-4 sm:m-6 rounded-3xl sm:p-8 p-4  '>
                  <h1 className='text-xl sm:text-3xl font-extrabold'> Let's grow together.</h1>
                  <p className='tex-md font-seibold text-gray-600 dark:text-white '>Connect with me to talk, work, and share ideas</p>

                  <a href="https://wa.me/6268486185?text=Hello%20there!" target="_blank" className="flex text-black flex-row gap-2 justify-center items-center bg-green-500 hover:bg-green-400 hover:text-gray-700 p-2  rounded">
                    <ImWhatsapp/><span>Chat on WhatsApp </span>
                  </a>
                </div>
                <Footer/>
            </div>
          </div>
    </>
  )
}

export default Home
