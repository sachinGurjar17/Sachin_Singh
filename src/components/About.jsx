import React from "react";
import Footer from "./Footer";
import ProjectData from "../data/projects.json"

function About(){
    const timelineData = [
        { year: "2022 - 2026", title: "B.Tech in CSE", institution: "IPS College, Gwalior" },
        { year: "2021 - 2022", title: "Class XII (92.2%)", institution: "Model H.S. School, Gwalior" }
      ];

    return (
        <div className="w-full lg:w-2/3">
            <div className="mx-2 bg-white flex flex-col space-y-10 rounded-3xl mt-28  flex-wrap  pb-6  dark:dark:bg-zinc-800 dark:text-white dark:border dark:border-gray-500 text-md text-gray-700 font-medium p-4 shadow-2xl">
                <p className="text-lg text-black font-semibold  dark:text-white">• About</p>
                <h2 className="text-xl sm:text-4xl font-bold text-black dark:text-white">It's me, Sachin!</h2>
                <p className="w-full">Full Stack Web Developer Building Impactful Web Applications. I specialize in creating production-ready web apps from the ground up, with a focus on both frontend and backend development. Passionate about solving real-world problems and always open to new challenges.</p>

                <p className="w-full">I find it fascinating to learn what goes behind the world's most influential technologies. I have worked with React, Next.js, Docker, and Node.js in my career which has helped me understand both - the pleasing consumer-facing frontend and the robust backend.</p> 
                <h2 className="text-xl sm:text-4xl font-bold text-black dark:text-white text-center">Skills</h2>
                <div className="flex flex-row gap-2 flex-wrap justify-center items-center w-full">
                    {ProjectData.skills.map((skill)=>( 
                        <div class="flex items-center justify-center">
                            <div class=" group">
                                <button
                                class=" inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
                                >
                                    <span class="z-10 block px-6 py-3 rounded-xl bg-neutral-900">
                                        <div class="z-10 flex items-center space-x-3">
                                        <span
                                            class="transition-all text-sm duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                                            >{skill}</span
                                        >
                                        </div>
                                    </span>
                                </button>
                            </div>
                        </div>

                    ))}
                </div>
                
                
                <h2 className="text-xl sm:text-4xl font-bold text-black dark:text-white">Looking Forward</h2>   

                <p >I want to explore the worldd of Technology. I'm passionate about tech, education, linguistics, and social causes.I often take part in volunteering activities available to me. If you have any projects or opportunities in tech and education, feel free to reach out on LinkedIn or send me an email.</p> 
                <Footer/>        
            </div>
        </div>
    )
}

export default About ;