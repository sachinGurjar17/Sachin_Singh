import React, { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { FiSun } from "react-icons/fi";
import { Link ,NavLink} from 'react-router-dom';


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
          <div className="mx-2 h-20 bg-white p-2   sm:px-18 flex  mt-2 rounded-3xl  dark:dark:bg-slate-700 dark:text-white  dark:border-white dark:border dark:border-solid  shadow-2xl">
            <div className="flex items-center flex-grow p-4 gap-3.5 ">
              <NavLink to="/Sachin_Singh/" className=" hover:text-gray-300 text-xl md:text-3xl rounded-full border p-2"><IoHomeOutline/></NavLink>
              <NavLink to="/Sachin_Singh/about" className="hover:text-gray-300 text-xl md:text-3xl rounded-full  border p-2 "><FaRegUser/></NavLink>
              <NavLink to="/Sachin_Singh/projects" className="hover:text-gray-300 text-xl md:text-xl rounded-full  border p-2 sm:p-4 "><GrProjects/></NavLink>
              <NavLink to="/Sachin_Singh/blogs" className="hover:text-gray-300 text-xl md:text-3xl rounded-full  border p-2"><GoBook/></NavLink>
            </div>

            <div className="flex items-center gap-3.5 justify-around ">
              <button onClick={()=>setThemeMode(!themeMode)} className=" hover:text-slate-500 text-xl md:text-3xl rounded-full  border p-2 dark:bg-black mr-4 sm:mr-0"><FiSun/></button>
                <a className= "hidden sm:inline"href="https://www.linkedin.com/in/sachin-singh-b74601255/" target="_blank" rel="noopener noreferrer">
                  <img src="./images/linkedin.png" alt="" className="w-8 h-8 sm:h-14 sm:w-14" />
                </a>
            </div>
          </div>
        </div>
        
    )
}

export default Navbar ;
