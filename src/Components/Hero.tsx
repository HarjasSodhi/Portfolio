function Hero() {
    return (
        <div className='text-white pt-16 min-h-screen' >
            <div className='text-[#64ffda] tracking-widest'>Hi, my name is</div>
            <div className='name font-bold'>Harjas Sodhi.</div>
            <div className='lg:text-7xl md:text-5xl text-3xl my-3 text-[#8892b0] font-bold'>I build things for the web.</div>
            <div className='mt-4 mb-14 w-full xl:w-1/2 text-[#8892b0]'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m pursuing my undergrad in <span className='text-[#64ffda] un'>Computer Science Engineering</span> and looking for opputunities in <span className='un text-[#64ffda]'>Software  Development</span>.</div>
            <a className='tracking-wider border p-5 border-[#64ffda] text-[#64ffda] rounded transition ease hover:bg-gray-700' href="#contact">Get In Touch</a>
        </div>
    )
}

export default Hero