import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si"
function Footer() {
    return (
        <>
            <div className="w-full flex-col justify-center items-center gap-3">
                <div className="flex justify-center mt-12 gap-6 mb-20">
                    <a href="https://www.linkedin.com/in/sridda-joka-007324321/" target="_blank"><SiLinkedin className="text-[#FFD700]  cursor-pointer size-6" /></a>
                    <a href="mailto:sridda@gmail.com" target="_blank"><SiGmail className="text-[#FFD700] cursor-pointer size-6" /></a>
                    <a href="https://github.com/sr1dda-j0ka" target="_blank"><SiGithub className="text-[#FFD700] cursor-pointer size-6" /></a>    
                </div>
                <p className="text-[#FFD700] text-center mb-10">© 2025 Sridda Joka. All rights reserved.</p>
            </div>
        </>
    )
}
export default Footer