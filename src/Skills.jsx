import {
    SiPython, SiOpenjdk, SiC, SiCplusplus,
    SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
    SiNodedotjs, SiExpress, SiMongodb
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di"
import { FaCode, FaGitAlt } from "react-icons/fa";
function Skills() {
    return (
        <>
            <div className="min-h-screen lg:min-h-0 w-full flex flex-col items-center justify-center align-middle mt-15">
                <h1 className="text-[#FFD700] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">Skills</h1>
                <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full max-w-5xl gap-6 px-6">
                    <div className="flex-1 bg-[#1A1A1C] p-8 rounded-lg flex flex-col gap-3 items-center text-center text-white">
                        <h4 className="mt-0 mb-6 text-2xl font-semibold text-[#E6B800] min-h-[3rem]">Programming</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <SiPython className="text-lg text-[#E6B800]" />Python
                            </li>
                            <li className="flex items-center gap-4">
                                <SiOpenjdk className="text-lg text-[#E6B800]" /> Java
                            </li>
                            <li className="flex items-center gap-4">
                                <SiC className="text-lg text-[#E6B800]" /> C
                            </li>
                            <li className="flex items-center gap-4">
                                <SiCplusplus className="text-lg text-[#E6B800]" /> C++
                            </li>
                            <li className="flex items-center gap-4">
                                <SiJavascript className="text-lg text-[#E6B800]" /> Java Script
                            </li>

                        </ul>

                    </div>
                    <div className="flex-1 bg-[#1A1A1C] p-8 rounded-lg flex flex-col gap-3 text-center items-center text-white">
                        <h4 className="mt-0 mb-6 text-2xl font-semibold text-[#E6B800] min-h-[3rem]">Frameworks</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <SiReact className="text-lg text-[#E6B800]" /> React
                            </li>
                            <li className="flex items-center gap-4">
                                <SiTailwindcss className="text-lg text-[#E6B800]" /> Tailwind CSS
                            </li>
                            <li className="flex items-center gap-4">
                                <SiNodedotjs className="text-lg text-[#E6B800]" /> Node.js
                            </li>
                            <li className="flex items-center gap-4">
                                <SiExpress className="text-lg text-[#E6B800]" /> Express.js
                            </li>
                        </ul>


                    </div>
                    <div className="flex-1 bg-[#1A1A1C] p-8 rounded-lg flex flex-col gap-3 text-center items-center text-white">
                        <h4 className="mt-0 mb-6 text-2xl font-semibold text-[#E6B800] min-h-[3rem]">Tools</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <SiMongodb className="text-lg text-[#E6B800]" /> MongoDB
                            </li>
                            <li className="flex items-center gap-4">
                                <FaGitAlt className="text-lg text-[#E6B800]" /> Git
                            </li>
                            <li className="flex items-center gap-4">
                                <DiVisualstudio className="text-lg text-[#E6B800]" /> VS Code
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills