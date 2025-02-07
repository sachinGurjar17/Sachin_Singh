import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";

function Footer(){
  return(
    <>
      <div className='bg-slate-100 m-4 sm:m-6 rounded-3xl sm:p-8 p-4  dark:dark:bg-zinc-900 dark:text-white border  dark:border-gray-600'>
        <div className='flex flex-col justify-center items-center space-y-4  sm:flex sm:flex-row sm:justify-center sm:items-center '>
                <p className='text-md sm:text-lg font-semibold'>• Follow me</p>
                <ul className='flex space-x-4 justify-center sm:items-end sm:ml-auto text-2xl'>
                <a href="https://www.linkedin.com/in/sachin-singh-b74601255" rel="noopener noreferrer"  target="_blank"><BsLinkedin/></a>
                <a href="https://www.instagram.com/sachin_sg17" rel="noopener noreferrer"  target="_blank"><FaInstagram/></a>
                <a href = "https://github.com/sachinGurjar17" rel="noopener noreferrer"  target="_blank"><FiGithub/></a>
                <a href="https://twitter.com/sachin_sg17" rel="noopener noreferrer"  target="_blank"><FaXTwitter/></a>
                </ul>
            </div>
        </div>

        <div className='bg-slate-100 m-4 sm:m-6 rounded-3xl sm:p-8 p-4  dark:dark:bg-zinc-900 dark:text-white border  dark:border-gray-600 '>
            <a href='https://www.linkedin.com/in/sachin-singh-b74601255/' rel="noopener noreferrer"  target="_blank" className='flex justify-center items-center text-md sm:text-lg font-semibold text-slate-500 p-4 '>Share your feedback/suggestions about this website on LinkedIn<GoArrowUpRight/></a>
        </div>
    </>
  )
}
export default Footer