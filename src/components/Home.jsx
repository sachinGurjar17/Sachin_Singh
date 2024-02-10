import { CiLinkedin } from "react-icons/ci";
import { FaRegCopy } from "react-icons/fa";
import InfoBox from './InfoBox';
import Footer from "./Fotter";
import { useCallback ,useRef, useState} from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { useTypewriter , Cursor } from "react-simple-typewriter";

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
          <div className="w-full lg:w-2/3">
            <div className="mx-2 bg-white flex flex-col space-y-10 rounded-3xl mt-28  dark:dark:bg-slate-800 dark:text-white  dark:border-white dark:border dark:border-solid pb-4 shadow-2xl">
              <div >
                <div className='flex justify-between font-semi-bold p-4 sm:p-8 '>
                  <p className= ' text-md sm:text-3xl'>• Full Stack Developer</p>
                  <p className='ml-auto  bg-green-200 rounded-3xl font-bold p-2 text-[10px] text-green-600'>⊙ ONLINE</p>
                </div>
              </div>

              <div className='flex flex-col  justify-center items-center sm:flex md:flex-row sm:justify-center sm:items-center gap-4 lg:gap-20 mx-4'>
                <img
                        src="./images/sachinImg.jpeg"
                        alt="Sachin Profile Pic"
                        className='w-44 h-44  rounded-full border-8 border-solid border-slategray p-4 shadow-lg'
                />
                <div className='flex flex-col justify-center items-center '>
                <p className='font-bold text-xl sm:text-3xl py-4'>
                  I am 
                  <span className="text-green-400 ">
                    {text}
                  </span>
                  <span className="font-thin text-white dark:text-slate-800">
                    <Cursor/>
                  </span>
                </p>
                  <p className='font-semibold text-slate-500 text-md sm:text-xl'>Currently pursuing B.Tech in CS grad  </p>
                </div> 
                 
              </div>

              <div className=' flex space-x-4 justify-center items-center '>
                <a href="https://www.linkedin.com/in/sachin-singh-b74601255/" rel="noopener noreferrer"  target="_blank"  className='flex items-center text-sm sm:text-lg font-bold bg-blue-600 text-white  rounded-2xl p-2 shadow-xl'><span className='text-lg sm:text-3xl'><CiLinkedin /></span> LinkedIn</a>
                <button onClick={copyPasswordToClipboard} className='hover:bg-slate-300 flex items-center text-sm sm:text-lg font-bold bg-slate-400 text-black rounded-2xl p-2 shadow-xl'><span className='text-lg sm:text-2xl'>
                      {isCopied ? <IoCheckmarkDone/>:<FaRegCopy/>}
                  </span> Copy Email</button> 
              </div>

              <div className='bg-slate-200 m-3 rounded-3xl p-2  dark:dark:bg-slate-900 dark:text-white  dark:border-white dark:border dark:border-solid'>
                  <p className='flex text-[20px] font-medium pl-4 pt-4'>• Coding Experience</p>
                  <InfoBox imageSrc={"./images/github.png"} siteLink={"https://github.com/sachinGurjar17"} header={"Open Source"} Info={"Participated in hactoberfest and contribute to many repos"}/>
                  <InfoBox imageSrc={"./images/mern.png"} siteLink={"#"} header={"Mern Stack Developer"} Info={"Knowledge of MERN tech stacks of web developments"}/>
                  <InfoBox imageSrc={"./images/leetcode.png"} siteLink={"https://leetcode.com/Sachin_singh6268/"} header={"LeetCode"} Info={"Solved 300+ Questions on LeetCode of problem solving"}/>
                  <InfoBox imageSrc={"./images/gfg.png"} siteLink={"https://auth.geeksforgeeks.org/user/sachinsg_17"} header={"Geeks for geeks"} Info={"Solved 100+ days streak on Geeks for Geeks"}/>
                </div>

                <div className='flex flex-col justify-center items-center space-y-4 m-4 sm:m-6 rounded-3xl sm:p-8 p-4  dark:dark:bg-slate-900 dark:text-white '>
                  <h1 className='text-xl sm:text-3xl font-extrabold'> Let's grow together.</h1>
                  <p className='tex-md font-seibold text-slate-600'>Connect with me to talk, work, and share ideas</p>
                </div>
                <Footer/>
            </div>
          </div>
    </>
  )
}

export default Home
