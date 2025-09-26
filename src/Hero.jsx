import myPhoto from "./assets/pic.jpg"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si"
function Hero() {
    return (
        <>
            <div className="flex flex-row h-screen w-full items-center justify-center gap-y-4 p-6">
                <motion.div className="profile-card flex flex-col md:flex-row items-center md:items-center 
                      bg-[#1A1A1C]  border border-gray-700 
                      rounded-2xl p-6 md:p-10 max-w-5xl w-full shadow-xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="image flex justify-center basis-1/2">
                        <img src={myPhoto} alt="pic" className="w-32 sm:w-40 md:w-56 lg:w-72 rounded-3xl border-4 border-yellow-400" />
                    </div>
                    <div className="intro text-center basis-1/2">
                        <h5 className="text-[#C0C0C0] text-xl">Hello, I'm</h5>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFD700]">SRIDDA JOKA</h1>
                        <p className="text-xl text-[#C0C0C0]">
                            <Typewriter
                                words={['Web Developer', 'AI/ML Enthusiast', 'Computer Science Student']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </p>
                        <div className="flex justify-center mt-12 gap-6">
                        <a href="https://www.linkedin.com/in/sridda-joka-007324321/" target="_blank"><SiLinkedin className="text-[#FFD700]  cursor-pointer size-6" /></a>
                        <a href="mailto:sridda@gmail.com" target="_blank"><SiGmail className="text-[#FFD700] cursor-pointer size-6"/></a>
                        <a href="https://github.com/sr1dda-j0ka" target="_blank"><SiGithub className="text-[#FFD700] cursor-pointer size-6"/></a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
export default Hero