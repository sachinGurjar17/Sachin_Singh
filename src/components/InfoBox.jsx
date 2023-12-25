import { GoArrowUpRight } from "react-icons/go";
function InfoBox({imageSrc , header , Info , siteLink}){
    return (
        <>
          <a href={siteLink} className="bg-white flex flex-col justify-center items-center mt-6 p-2 rounded-3xl shadow-2xl  dark:dark:bg-slate-700 dark:text-white  dark:border-white dark:border dark:border-solid" target="_blank" rel="noopener noreferrer ">
           <div className="mr-4  flex  flex-grow space-x-4">
               <img src={imageSrc} alt="Logo" className="h-16 w-16 mr-3 rounded-full  border border-solid border-slategray p-2 shadow-lg"/>
              <p className=" text-sm sm:text-lg font-large font-bold mb-4 mt-4">{header}</p> 
              <div className=" text-lg sm:text-2xl text-center text-slate-600 pt-4 items-end ml-auto"><GoArrowUpRight /></div> 
            </div>
            <p className="text-{3px} sm:text-md sm:text-xl font-medium mt-2 ">{Info}</p>
            
          </a>
        </>
    )
}

export default InfoBox ;