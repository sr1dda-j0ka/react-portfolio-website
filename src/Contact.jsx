function Contact(){
    return(
        <>
            <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6">
            <h1 className="text-[#FFD700] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">Get In Touch</h1>
            <form className="flex flex-col gap-5 w-full max-w-md">
                <input id="name" type="text" placeholder="Your Name" className="p-3 rounded-lg border border-gray-300 bg-[#1A1A1C] text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"/>
                <input id="mailid" type="email" placeholder="Your email" className="p-3 rounded-lg border border-gray-300 bg-[#1A1A1C] text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"/>
                <textarea id="message" type="text-area" placeholder="Your message" className="p-3 rounded-lg border border-gray-300 bg-[#1A1A1C] text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"/>
                <div className="flex justify-center">
                    <button className="p-3 rounded-3xl bg-black border-2 text-[#FFD700] font-semibold hover:bg-yellow-400 hover:text-black transition w-20">Send</button>
                </div>
                
            </form>
            </div>
        </>
    )
}
export default Contact