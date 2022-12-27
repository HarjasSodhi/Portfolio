import { useInView } from 'react-intersection-observer';

function About() {
    const [ref, inView, entry] = useInView({
        root: null,
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div ref={ref} className={`pt-8 xl:px-10 opacity-0 ${inView ? 'animate-[fadeintranslatebottom_0.5s_ease_0.5s_forwards]' : ""}`} id='about'>
            <div className=" text-[#ccd6f6] flex items-end">
                <span className='text-[#64ffda] text-md md:text-lg lg:text-xl'>01.</span>
                <div className="pl-5 text-xl md:text-2xl lg:text-3xl font-bold" > About Me</div>
                <div className="grow border border-gray-700 self-center lg:grow-0 lg:w-1/3 ml-5"></div>
            </div>
            <div className="flex flex-col md:flex-row mt-8 text-[#8892b0] text-base md:text-lg items-center">
                <div className="md:w-3/5">
                    <p className="mt-4">
                        Hello! My name is Harjas and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I participated in a hackathon for the first time — turns out web-hackathons can teach you a lot about HTML, CSS & JS!
                    </p>
                    <p className="mt-4">Fast-forward to today, and I’ve had the privilege of working at an <a href="https://pepcoding.com" target='_blank' className="text-[#64ffda] un">Ed-Tech</a>, a<a target='_blank' className="un text-[#64ffda]" href="https://kyloapps.com"> Start-Up</a> and at <a target='_blank' className="un text-[#64ffda]" href="https://gdscgtbit.netlify.app/"><span className="text-blue">G</span><span className="text-red">o</span><span className="text-yellow">o</span><span className="text-blue">g</span><span className="text-green">l</span><span className="text-red">e</span> Developer Sudent Club</a>. My main focus these days is looking for full-time oppurtunities where I can build accessible digital experiences for a variety of clients.</p>
                    <p className="mt-4">I also recently participated in an <a href="https://github.com/girlscript/winter-of-contributing" target='_blank' className="text-[#64ffda] un">open source program</a> in which I provided documentation tutorials for various topics of React and Javascript.</p>
                    <p className="mt-4">Here are a few technologies I’ve been working with recently:
                        <ul className="skills mt-3 grid-cols-2 grid lg:grid-cols-3 gap-y-3 text-sm font-bold tracking-wider">
                            <li>Javascript</li>
                            <li>TypeScript</li>
                            <li>React.JS</li>
                            <li>Node.JS</li>
                            <li>MongoDB</li>
                            <li>Java</li>
                            <li>CSS</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </p>
                </div>
                <div className="imagediv mt-14 md:mt-0 md:ml-20 h-50 w-80 transition ease"><img className="h-30 w-30" src="/headshot.jpg" alt="" /></div>
            </div>
        </div>
    )
}

export default About