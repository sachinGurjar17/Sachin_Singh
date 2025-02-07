import React from "react";
import Footer from "./Footer";

function About(){
    return (
        <div className="w-full lg:w-2/3">
            <div className=" mx-2 bg-white flex flex-col  space-y-10 rounded-3xl mt-28  flex-wrap  pb-6  dark:dark:bg-zinc-800 dark:text-white  dark:border-white dark:border dark:border-solid  text-md text-gray-700 font-medium p-4 shadow-2xl">
                <p className="text-lg text-black font-semibold  dark:text-white">• About</p>
                <h2 className="text-xl sm:text-4xl font-bold text-black dark:text-white">It's me, Sachin!</h2>
                <p>Full Stack Web Developer Building Impactful Web Applications. I specialize in creating production-ready web apps from the ground up, with a focus on both frontend and backend development. Passionate about solving real-world problems and always open to new challenges.</p>

                <p>I find it fascinating to learn what goes behind the world's most influential technologies. I have worked with React, Next.js, Docker, and Node.js in my career which has helped me understand both - the pleasing consumer-facing frontend and the robust backend.</p> 

                <h2 className="text-xl sm:text-4xl font-bold text-black dark:text-white">Looking Forward</h2>   

                <p >I want to explore the worldd of entrepreneurship. I'm passionate about tech, education, linguistics, and social causes. At Oracle, I often take part in volunteering activities available to me. If you have any projects or opportunities in tech and education, feel free to reach out on LinkedIn or send me an email.</p> 
                <Footer/>        
            </div>
        </div>
    )
}

export default About ;