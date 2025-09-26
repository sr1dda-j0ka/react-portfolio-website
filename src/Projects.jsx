import { useState } from "react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import {motion} from "framer-motion"
function ProjectCard({ title, demo, repo, desc }) {
    const [isHover,setIsHover]=useState(false);
    return (
        <div className="w-68 h-60 [perspective:1000px]"
            onMouseEnter={()=>setIsHover(true)}
            onMouseLeave={()=>setIsHover(false)}
        >
            
            <motion.div className="relative w-full h-full [transform-style:preserve-3d] cursor-pointer"
            animate={{ rotateY: isHover ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            >
            
            <div className="absolute w-full h-full bg-[#1A1A1C] p-8 rounded-lg flex flex-col gap-4 items-center justify-center text-center text-white [backface-visibility:hidden]">
                <h6 className="text-[#FFD700] text-2xl sm:text-2xl md:text-2xl lg:text-2xl">{title}</h6>
                <p>{desc}</p>
                
            </div>

            <div className="absolute w-full h-full bg-[#FFD700] p-8 rounded-lg flex flex-col gap-3 items-center justify-center text-center text-black [backface-visibility:hidden] [transform:rotateY(180deg)]">
                {demo?<a href={demo} target="_blank" className="flex items-center gap-2 hover:underline"><FaExternalLinkAlt className="text-lg text-[#060606]" />Live Site</a>:null}
                <a href={repo} target="_blank" className="flex items-center gap-2 hover:underline"><FaGithub className="text-lg text-[#060606]" />Repository</a>
            </div>
            
            </motion.div>
            
        </div>
        
    )
}
function Projects() {
    const projects = [
        {
            title: "Nothing Website Clone",
            demo: "https://sr1dda-j0ka.github.io/Nothing-Website-Clone/",
            repo: "https://github.com/sr1dda-j0ka/Nothing-Website-Clone",
            desc: "Clone of the Nothing India landing page made using HTML and CSS",
           
            
        },
        {
            title: "Pacman Clone",
            demo: "https://sr1dda-j0ka.github.io/Pacman/",
            repo: "https://github.com/sr1dda-j0ka/Pacman",
            desc: "Classic Pacman game replicated using JavaScipt and HTML canvas",
            
            
        },
        {
            title: "Dataset Processing",
            repo: "https://github.com/sr1dda-j0ka/Data-Preprocessing",
            desc: "Cleaning and Preparing an air quality data set for further analysis or predictive modelling",
            
            
        },
        {
            title: "Full Stack Blog App",
            repo: "https://github.com/sr1dda-j0ka/BlogApp-nodejs-ejs",
            desc: "Simple CRUD blog application using nodeJS and expressJS",
            
            
        }
        
    ]
    return (
        <>
            <div className="min-h-screen w-full flex flex-col items-center justify-center">
                <h1 className="text-[#FFD700] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 mt-30">Projects</h1>
                <div className="flex flex-col items-center justify-center flex-wrap">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl p-8">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
                </div>
            </div>

        </>
    )
}
export default Projects