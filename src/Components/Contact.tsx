import ContactButton from "./ContactButton"
import { useInView } from 'react-intersection-observer'
import ReactGA from 'react-ga';


function handleAnaClick(title: string) {
    ReactGA.initialize(import.meta.env.VITE_trackingKey);
    return () => {
        ReactGA.event({
            category: title,
            action: "click"
        })
    }
}

function Contact() {

    const [ref, inView, entry] = useInView({
        root: null,
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div ref={ref} className={`pt-8 xl:px-10 mt-5 flex flex-col items-center opacity-0 ${inView ? 'animate-[fadeintranslatebottom_1s_ease_0.5s_forwards]' : ""}`} id='contact'>
            <div className="mt-5 tracking-wider text-[#64ffda]">04. What’s Next?</div>
            <div className="mt-8 text-3xl tracking-wider font-bold text-[#ccd6f6]">Get In Touch.</div>
            <div className="mt-8 text-lg tracking-wider text-[#8892b0] max-w-lg text-center">I’m currently looking for fulltime opportunities and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you as soon as possible!</div>
            <ContactButton />
            <div className="tracking-wider text-[#64ffda]">Or</div>
            <div className="mt-3 text-3xl tracking-wider font-bold text-[#ccd6f6] text-center">Check Out My Resumes</div>
            <div className="flex flex-col md:flex-row md:gap-8 mt-10 gap-3">
                <a onClick={handleAnaClick('frontend resume')} className='text-[#64ffda] p-5 hover:bg-gray-700 text-center transition border border-[#64ffda] rounded' href="/Harjas-sodhi-frontend_resume.pdf" target='_blank'>Frontend Resume</a>
                <a onClick={handleAnaClick('SDE resume')} className='text-[#64ffda] p-5 hover:bg-gray-700 text-center transition border border-[#64ffda] rounded' href="/Harjas-Sodhi-Resume.pdf" target='_blank'>SDE Resume</a>
            </div>
            <div className="text-md text-[#8892b0] flex flex-col items-center md:mt-24 mt-32 mb-4">
                <ul className='text-xl flex justify-center items-center gap-4 md:hidden'>
                    <li className="transition ease hover:text-[#64ffda]"><a onClick={handleAnaClick('github footer')} href='https://www.github.com/HarjasSodhi' target='_blank'><i className="fa-brands fa-github"></i></a></li>
                    <li className="transition ease hover:text-[#64ffda]"><a onClick={handleAnaClick('linkedin footer')} href='https://www.linkedin.com/in/harjas-sodhi-ab985317a/' target='_blank'><i className="fa-brands fa-linkedin-in my-2"></i></a></li>
                </ul>
                <a href='https://leetcode.com/HarjasSodhi01' onClick={handleAnaClick('leetcode footer')} target='_blank' className="un transition ease hover:text-[#64ffda]">Leetcode.com/HarjasSodhi01</a>
                <div className='transition ease hover:text-[#64ffda] md:hidden tracking-widest text-center' >harjassodhi9@gmail.com</div>
                <a href='https://github.com/HarjasSodhi/Portfolio' onClick={handleAnaClick('portfolio footer')} target='_blank' className="un transition ease hover:text-[#64ffda] font-bold">Built By Harjas Sodhi</a>
            </div>
        </div>
    )
}

export default Contact