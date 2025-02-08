import InfoBox from "./InfoBox"
import Footer from "./Footer"
import projectsData from '../data/projects.json'

function Projects(){
    return(
        <div className="w-full lg:w-2/3">
          <div className="bg-white flex flex-col gap-2 rounded-3xl mt-28 mx-2 sm:p-4 p-2  dark:bg-zinc-800 dark:text-gray-200 dark:border-gray-500 dark:border  text-md text-gray-700 font-medium ">
                  <p className="text-lg font-bold mb-10">• Projects</p>                 
                  <p className='text-2xl sm:text-3xl font-semibold'>My Works</p>
                  <p className=" text-md dark:text-zinc-500 ">Explore some of my exciting projects. Most projects are open source, and I welcome your inquiries for more details or collaboration opportunities.</p>
                  <div className='dark:bg-zinc-900 rounded-3xl p-2 sm:p-8 flex flex-col gap-10'>
                      {projectsData.projects.map((project)=>(
                        <InfoBox header={project.title} Info={project.description} imageSrc={project.image} githubLink={project.githubLink} liveLink={project.liveLink} techStack={project.techStack}/>
                      ))}
                  </div>
                <Footer/>
           </div>
        </div>
    )
}

export default Projects