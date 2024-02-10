import React from "react";
import Footer from "./Fotter";

function About(){
    return (
        <div className="w-full lg:w-2/3">
            <div className=" mx-2 bg-white flex flex-col  space-y-10 rounded-3xl mt-28  flex-wrap  pb-6  dark:dark:bg-slate-800 dark:text-white  dark:border-white dark:border dark:border-solid  text-md text-gray-700 font-medium p-4 shadow-2xl">
                <p className="text-lg text-black font-semibold  dark:text-white">• About</p>
                <h2 className="text-xl sm:text-4xl font-bold text-black dark:text-white">It's me, Sachin!</h2>
                <p>I am a Software Developer at Oracle. Previously, I had interned at Oracle and before that at Newzera (a robo-journalism startup). The uniqueness comes from my work experience in a large tech company as well as in a startup. I graduated with a bachelor's degree in Computer Science and Engineering from the Indian Institute of Technology Ropar in May 2023. Along with my major, I have a specialization in Artificial Intelligence (AI).</p>

                <p>I find it fascinating to learn what goes behind the world's most influential technologies. I have worked with React, GraphQL, Docker, and Kubernetes in my career which has helped me understand both - the pleasing consumer-facing frontend and the robust backend.</p> 

                <h2 className="text-xl sm:text-4xl font-bold text-black dark:text-white">LooKing Forward</h2>   

                <p >I want to explore the world of entrepreneurship. I'm passionate about tech, education, linguistics, and social causes. At Oracle, I often take part in volunteering activities available to me. If you have any projects or opportunities in tech and education, feel free to reach out on LinkedIn or send me an email.</p> 
                <Footer/>        
            </div>
        </div>
    )
}

export default About ;