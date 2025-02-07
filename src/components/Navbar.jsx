import React, { useEffect, useState } from "react";
import { IoHomeOutline, IoPersonAddOutline } from "react-icons/io5";
import { RiCodeSSlashLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5"
import { GoBook } from "react-icons/go";
import { FiSun } from "react-icons/fi";
import { NavLink} from 'react-router-dom';
import { BsLinkedin } from "react-icons/bs";


function Navbar(){
      
  const [themeMode , setThemeMode ] = useState(true);

  useEffect(()=>{
    if(themeMode){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[themeMode])

    return(
        <div className="fixed top-0 w-full lg:w-2/3 " >
          <div className="mx-2 p-2 bg-white sm:px-18 flex mt-2 rounded-2xl dark:bg-zinc-700 dark:text-white shadow-sm border dark:border-gray-500">
            <div className="flex items-center flex-grow px-4 py-2 gap-3.5 ">
              <NavLink to="/" className={ ({isActive})=> `group hover:text-gray-300 text-lg md:text-2xl rounded-full p-2 ${isActive ? "dark:bg-gray-900 text-yellow-600 font-bold" : ""}`}>
                <IoHomeOutline/>
                <span className="absolute left-[1.95rem] bottom-[-0.7rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-gray-800 dark:bg-white dark:text-black font-semibold py-[2px] text-white px-1 border rounded">
                  Home
                </span>
              </NavLink>
              <NavLink to="/about" className={ ({isActive})=> `group hover:text-gray-300 text-lg md:text-2xl rounded-full p-2 ${isActive ? "dark:bg-gray-900 text-yellow-600 font-bold" : ""}`}>
                <IoPersonOutline/>
                <span className="absolute left-[5.5rem] bottom-[-0.7rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-gray-800 dark:bg-white dark:text-black font-semibold py-[2px] text-white px-1 border rounded">
                  About
                </span>
                </NavLink>
              <NavLink to="/projects" className={ ({isActive})=> `group hover:text-gray-300 text-lg md:text-2xl rounded-full p-2 ${isActive ? "dark:bg-gray-900 text-yellow-600 font-bold" : ""}`}>
                <RiCodeSSlashLine/>
                <span className="absolute left-[9rem] bottom-[-0.7rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-gray-800 dark:bg-white dark:text-black font-semibold py-[2px] text-white px-1 border rounded">
                  Projects
                </span>
                </NavLink>
              <NavLink to="/blogs" className={ ({isActive})=> `group hover:text-gray-300 text-lg md:text-2xl rounded-full p-2 ${isActive ? "dark:bg-gray-900 text-yellow-600 " : ""}`}>
                <GoBook/>
                <span className="absolute bottom-[-0.7rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-gray-800 dark:bg-white dark:text-black font-semibold py-[2px] text-white px-1 border rounded">
                  Blogs
                </span>
              </NavLink>
            </div>

            <div className="flex items-center gap-3.5 justify-around pr-3 group">
              <button onClick={()=>setThemeMode(!themeMode)} className=" hover:text-slate-500 text-lg md:text-2xl rounded-full  border p-2 dark:bg-black mr-4 sm:mr-0">{themeMode ? <FiSun/> : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg> }</button>
              <span className="absolute right-[9rem] bottom-[-1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-gray-800 dark:bg-white dark:text-black font-semibold py-[2px] text-white px-1 border rounded">
                {themeMode ? <>Light Mode</>:<>Dark Mode</>}
              </span>
              <a href="https://www.linkedin.com/in/sachinsg17/" target='_blank' className="hidden dark:bg-cyan-500 sm:flex flex-row justify-center items-center px-3 py-2 text-lg rounded-xl gap-2 bg-cyan-600 text-white dark:text-black"><BsLinkedin/>Linkedin</a>
            </div>
          </div>
        </div>
        
    )
}

export default Navbar ;
