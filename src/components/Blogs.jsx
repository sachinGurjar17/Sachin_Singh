import { FaRegBookmark } from "react-icons/fa";
import Footer from "./Footer";

function Blogs(){
    return(
        <div className="w-full lg:w-2/3">
          <div className="bg-white flex flex-col space-y-10 rounded-3xl mt-28 mx-2 p-4  dark:dark:bg-zinc-800 dark:text-white  dark:border dark:border-gray-500  text-md text-gray-700 font-medium  ">
            <p className="text-lg text-black font-semibold  dark:text-white">• Blogs</p>
            <p className='text-2xl sm:text-3xl font-medium p-2'>My Blogs</p>
            <p className="text-gray-500 text-lg ">I write my opinions, thoughts, and tutorials sometimes, read all of them here.</p>

            <div className="dark:bg-zinc-700 flex flex-col justify-center items-center mt-10 p-4 sm:p-20 rounded-3xl shadow-2xl   dark:text-white  dark:border dark:border-gray-500 " target="_blank" rel="noopener noreferrer ">
              <div className="text-6xl mb-2"><FaRegBookmark/></div>
              <div className="text-lg" >There are no blogs yet</div>
            </div>
            <Footer/>
           </div>
        </div>
    )
}

export default Blogs