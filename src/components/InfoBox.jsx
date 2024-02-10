import { GoArrowUpRight } from "react-icons/go";
function InfoBox({imageSrc , header , Info , siteLink}){
    return (
        <>
          <a href={siteLink} className="bg-white  mt-6 p-4 rounded-3xl shadow-2xl flex justify-center items-center dark:dark:bg-slate-700 dark:text-white  dark:border-white dark:border dark:border-solid" target="_blank" rel="noopener noreferrer ">
            <div className="mr-4 flex  justify-center items-center  space-x-3">
              <img src={imageSrc} alt="Logo" className="h-16 w-16 mr-3 rounded-full  border border-solid border-slategray p-2 shadow-lg"/>
              <div className="flex flex-col">
                <p className=" text-md sm:text-lg font-large font-bold ">{header}</p> 
                <p className="font-normal ">{Info}</p>
              </div>              
            </div>
            <div className=" text-lg sm:text-2xl text-center text-slate-600 pt-4 items-end ml-auto"><GoArrowUpRight /></div>
          </a>
        </>
    )
}

export default InfoBox ;