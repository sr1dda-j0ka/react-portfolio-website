import { FiHome, FiFolder, FiMail, FiTool } from "react-icons/fi";
function Navbar(){
    return(
        <>
            <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 h-[48px] w-[292px] bg-[#1C1F21] mx-auto my-2 rounded-lg flex justify-center gap-12 items-center shadow-lg">
                <div className="flex flex-col relative items-center cursor-pointer group">
                    <a href="#about"><FiHome className="text-2xl mb-1 text-[#E6B800] transition-transform duration-200 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_#E6B800]"/></a>
                    <span className="absolute top-10 text-s text-[#E6B800] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">About</span>
                </div>

                <div className="flex flex-col relative items-center cursor-pointer group">
                    <a href="#skills"><FiTool className="text-2xl mb-1 text-[#E6B800] transition-transform duration-200 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_#E6B800]" /></a>
                    <span className="absolute top-10 text-s text-[#E6B800] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">Skills</span>
                </div>

                <div className="flex flex-col relative items-center cursor-pointer group">
                    <a href="#projects"><FiFolder className="text-2xl mb-1 text-[#E6B800] transition-transform duration-200 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_#E6B800]" /></a>
                    <span className="absolute top-10 text-s text-[#E6B800] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">Projects</span>
                </div>

                <div className="flex flex-col relative items-center cursor-pointer group">
                    <a href="#contact"><FiMail className="text-2xl mb-1 text-[#E6B800] transition-transform duration-200 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_#E6B800]" /></a>
                    <span className="absolute top-10 text-s text-[#E6B800] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">Contact</span>
                </div>
            </nav>
        </>
    )
}
export default Navbar