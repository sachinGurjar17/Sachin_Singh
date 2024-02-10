import InfoBox from "./InfoBox"
import Footer from "./Fotter"
function Projects(){
    return(
        <div className="w-full lg:w-2/3">
          <div className="bg-white flex flex-col space-y-10 rounded-3xl mt-28 mx-2 p-4  dark:dark:bg-slate-800 dark:text-white  dark:border-white dark:border dark:border-solid  text-md text-gray-700 font-medium ">
                  <p className="text-lg text-black font-semibold  dark:text-white">• Projects</p>                 
                  <p className='text-2xl sm:text-3xl font-medium p'>My Works</p>
                  <p className=" text-md ">Explore some of my exciting projects. Most projects are open source, and I welcome your inquiries for more details or collaboration opportunities.</p>
            <div className='bg-slate-100  rounded-3xl px-2 pb-2  dark:dark:bg-slate-900 dark:text-white  dark:border-white dark:border dark:border-solid'>
                  <InfoBox imageSrc={"./images/github.png"} siteLink={"https://github.com/sachinGurjar17"} header={"Open Source"} Info={"Participated in hactoberfest and contribute to many repos"}/>
                  <InfoBox imageSrc={"./images/mern.png"} siteLink={"#"} header={"Mern Stack Developer"} Info={"Knowledge of MERN tech stacks of web developments"}/>
                  <InfoBox imageSrc={"./images/leetcode.png"} siteLink={"https://leetcode.com/Sachin_singh6268/"} header={"LeetCode"} Info={"Solved 300+ Questions on LeetCode of problem solving"}/>
                  <InfoBox imageSrc={"./images/gfg.png"} siteLink={"https://auth.geeksforgeeks.org/user/sachinsg_17"} header={"LeetCode"} Info={"Solved 100+ days streak on Geeks for Geeks"}/>
                </div>
                <Footer/>
           </div>
        </div>
    )
}

export default Projects