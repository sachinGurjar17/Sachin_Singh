function SkillBOx({imageSrc , header , Info }){
    return (
        <>
          <div className="bg-white  mt-4 p-3 rounded-3xl shadow-2xl  dark:dark:bg-slate-700 dark:text-white  dark:border-white dark:border dark:border-solid" >        
             <div className="flex justify-center items-center">
                <img src={imageSrc} alt="Logo" className=" hidden sm:block h-12 w-12 mr-3 rounded-full  border border-solid border-slategray p-2 shadow-lg"/>           
                <p className=" text-md sm:text-lg font-large font-bold ">{header}</p> 
                <p className="font-normal  items-end ml-auto text-3xl sm:text-2xl ">{Info}</p>   
             </div>
                      
            </div>
        </>
    )
}

export default SkillBOx ;