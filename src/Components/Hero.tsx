import { useInView } from 'react-intersection-observer';

function Hero() {
    const [ref, inView, entry] = useInView({
        root: null,
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <div ref={ref} className={`min-h-screen text-white pt-16`} >
            <div className={`${inView ? 'animate-[fadeintranslatebottom_1s_ease_2.7s_forwards]' : ""} opacity-0 text-[#64ffda] tracking-widest`}>Hi, my name is</div>
            <div className={`name font-bold ${inView ? 'block' : "hidden"} opacity-0`}>Harjas Sodhi.</div>
            <div className={`${inView ? 'animate-[fadeintranslatebottom_0.5s_ease_3.7s_forwards]' : ""} opacity-0 lg:text-7xl md:text-5xl text-3xl my-3 text-[#8892b0] font-bold`}>I build things for the web.</div>
            <div className={`mt-4 mb-14 w-full xl:w-1/2 text-[#8892b0] ${inView ? 'animate-[fadeintranslatebottom_0.5s_ease_4.2s_forwards]' : ""} opacity-0`}>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m pursuing my undergrad in <span className='text-[#64ffda] un'>Computer Science Engineering</span> and looking for opputunities in <span className='un text-[#64ffda]'>Software  Development</span>.</div>
            <a className={`tracking-wider border p-5 border-[#64ffda] text-[#64ffda] rounded transition ease hover:bg-gray-700 ${inView ? 'animate-[fadeintranslatebottom_0.5s_ease_4.7s_forwards]' : ""} opacity-0`} href="#contact">Get In Touch</a>
        </div>
    )
}

export default Hero