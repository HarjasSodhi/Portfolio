import ProjectCard from "./ProjectCard"
import { proj } from '../types'
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import parse from 'html-react-parser';

let data: proj[] = [
    {
        link: 'https://www.linkedin.com/posts/harjas-sodhi-ab985317a_web-automation-hackathon-activity-6797120024126611456-b1at?utm_source=share&utm_medium=member_desktop',
        github: 'https://github.com/HarjasSodhi/Puppeteer-Automation-TwitterMarketingTool',
        title: "Twitter Marketing Tool",
        description: parse("A tool made for helping service providers <span className='text-[#64ffda]'>automate the task of cold messaging prospective clients on twitter</span>. The tool finds clients by <span className='text-[#64ffda]'>analyzing the tweets for keywords</span> provided to it and then sends the provided message to all suitable accounts hence saving time") as string,
        stack: "NodeJS, Puppeteer.JS"
    },
    {
        title: "Goorooit",
        description: parse("Developed at <a href='https://kyloapps.com' target='_blank' className='un text-[#64ffda]'>Kylo Apps</a>. Created the entire backend for an app where <span className='text-[#64ffda]'>professionals can register their skills and list their meeting price and aspirants can search them can pay for the meeting on the app</span>. The payment automatically gets split into app owner's commission and professional's cut and <span className='text-[#64ffda]'>meeting link is generated on the fly and sent to both the parties</span>. Implemented other features like referral system, reviews, Q&A forums etc. <span className='text-[#64ffda]'>Not yet in production.</span>") as string,
        stack: "Node.JS, Express.JS, MongoDB, Razorpay, Google-Cloud"
    },
    {
        link: 'https://harjassodhi.github.io/MS-Excel-Google-Sheets-Clone/',
        github: 'https://github.com/HarjasSodhi/MS-Excel-Google-Sheets-Clone',
        title: "Google Sheets Clone",
        description: parse("A google sheets clone with features like cell <span className='text-[#64ffda]'>targeted formulas</span>(which keep the value of the targeted cell updated even if the parent cell value changes), <span className='text-[#64ffda]'>applying styles and formatting, saving sheets in localstorage, creating new sheets etc.</span>") as string,
        stack: "HTML, CSS, Javscript"
    },
    {
        link: 'https://harjassodhi.github.io/Random-Color-Generator/',
        github: 'https://github.com/HarjasSodhi/Random-Color-Generator',
        title: "Random Color Generator",
        description: parse("A web app to generate <span className='text-[#64ffda]'>infinite number random colors and gradients</span> on the basis of generating a new HEX value each time. <span className='text-[#64ffda]'>The CSS code is also generated</span> each time and copied to the clipboard.") as string,
        stack: "HTML, Javascript, CSS"
    },
    {
        link: 'https://harjassodhi.github.io/Camera-Web-App/',
        github: 'https://github.com/HarjasSodhi/Camera-Web-App',
        title: "WebCam Tool",
        description: parse("A web app that allows users to <span className='text-[#64ffda]'>capture and download photographs and record videos using their webcams and apply filters to those photos.</span>") as string,
        stack: "HTML, Javascript, CSS, Mediastream APIs"
    },
    {
        link: 'https://dndtypestodo.netlify.app/',
        github: 'https://github.com/HarjasSodhi/Typescript-React-TodoList-DragnDrop',
        title: "Drag n Drop To-Do List",
        description: parse("A <span className='text-[#64ffda]'>Drag and Drop </span>To-Do list with persistent data that gets stored in browser's <span className='text-[#64ffda]'>local storage</span>") as string,
        stack: "Typescript, React.JS, CSS, React-Beautiful-DND"
    },
    {
        link: 'https://uimockup.netlify.app/',
        github: 'https://github.com/HarjasSodhi/Designer-Landing-Page-Mockup',
        title: "CxMax",
        description: parse("A sample landing page for a business website with a lot of <span className='text-[#64ffda]'>interactivity, complete responsiveness and components like carousels etc.</span>") as string,
        stack: "HTML, CSS, Javascript"
    },
    {
        link: 'https://harjassodhi.github.io/JiraClone-to-doList/',
        github: 'https://github.com/HarjasSodhi/JiraClone-to-doList',
        title: "Jira Clone",
        description: parse("A minimalistic JIRA clone with features like <span className='text-[#64ffda]'>issuing tickets, deleting tickets, recycle bin, changing priorities, search and dark mode.</span>") as string,
        stack: "HTML, CSS, Javascript"
    },
    {
        link: 'https://harjassodhi.com',
        github: 'https://github.com/HarjasSodhi/Portfolio',
        title: "Dev Portfolio",
        description: "My Developer Portfolio",
        stack: "React.JS, Typescript, Tailwind.CSS"
    }
];

function Projects() {

    const [ref, inView, entry] = useInView({
        root: null,
        threshold: 0.1,
        triggerOnce: true,
    });

    const [ref2, inView2, entry2] = useInView({
        root: null,
        threshold: 0.1,
        triggerOnce: true,
    });

    const [ref3, inView3, entry3] = useInView({
        root: null,
        threshold: 0.1,
        triggerOnce: true,
    });

    const [ref4, inView4, entry4] = useInView({
        root: null,
        threshold: 0.1,
        triggerOnce: true,
    });

    const [ref5, inView5, entry5] = useInView({
        root: null,
        threshold: 0.1,
        triggerOnce: true,
    });

    const [disp, setDisp] = useState(false)
    const [dispSize, setDispSize] = useState(4);

    function handleDisp() {
        setDisp(!disp);
    }

    return (
        <div className={`pt-8 flex flex-col xl:px-8 mt-20`} id='projects'>
            <div ref={ref} className={` text-[#ccd6f6] flex opacity-0 items-end ${inView ? 'animate-[fadeintranslatebottom_0.5s_ease_0.5s_forwards]' : ""}`}>
                <span className='text-[#64ffda] text-md md:text-lg lg:text-xl'>03.</span>
                <div className="pl-5 text-xl md:text-2xl lg:text-3xl font-bold" >Some Things I’ve Built</div>
                <div className="grow border border-gray-700 self-center lg:grow-0 lg:w-1/3 ml-5"></div>
            </div>
            <div ref={ref2} className={`md:flex featured-card mt-20 opacity-0 relative ${inView2 ? 'animate-[fadeintranslatebottom_0.7s_ease_0.5s_forwards]' : ""}`}>
                <a href='https://flywise.in/' target='_blank' className="md:block h-full rounded md:w-2/3 md:aspect-video shadow-lg shadow-black hidden"><img className="h-full w-full" src="/flywise.png" /></a>
                <div className="bg-[url('/flywisemd.png')] bg-contain md:bg-none p-8 md:p-0 md:grow md:text-right tracking-wider bg-[rgb(2,12,27)] opacity-80 md:opacity-100 md:bg-transparent rounded">
                    <a href='https://flywise.in/' target='_blank' className="flex flex-col md:items-end md:text-3xl text-2xl text-[#ccd6f6] font-bold mt-3 hover:text-[#64ffda] transition ease" >
                        <div className='text-[#64ffda] text-sm tracking-wide mb-5'>Featured Project</div>
                        <div className="inline un">Flywise</div>
                    </a>
                    <div className="md:absolute right-0 md:z-10 md:w-1/2 my-5 text-[#a8b2d1] md:text-right" >
                        <div className="md:p-5 md:shadow-md shadow-black md:bg-[rgb(2,12,27)] md:opacity-90 md:text-[#a8b2d1] text-[#ccd6f6] text-sm">Developed At <a href="https://kyloapps.com" target='_blank' className="text-[#64ffda] un">Kylo Apps. </a> <br />
                            Implemented backend functionality for <span className="text-[#64ffda] un"> CRUD, Searching, Sorting and Filtering </span>of University, Courses and Blogs data on the basis of <span className="text-[#64ffda] un">10+</span> attributes among <span className="text-[#64ffda] un">1000+</span> data entries.
                        </div>
                        <div className="text-[#64ffda] mt-5 flex md:justify-end flex-wrap text-sm tracking-wider">
                            <div className="md:ml-4">Node.JS</div>
                            <div className="ml-4">Express.JS</div>
                            <div className="ml-4">MongoDB</div>
                            <div className="ml-4">Cloudinary</div>
                        </div>
                        <div className="md:justify-end text-[#a8b2d1] mt-8 inline-block p-5 md:border-b-4 border-white hover:border-[#64ffda] transition">
                            <a href="https://flywise.in/" target='_blank' className="text-2xl md:m-2 ml-3 hover:text-[#64ffda]">
                                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={ref3} className={`md:flex featured-card relative opacity-0 xl:mt-44 lg:mt-60 md:mt-80 mt-20 mb-10 ${inView3 ? 'animate-[fadeintranslatebottom_0.7s_ease_0.5s_forwards]' : ""}`}>
                <div className="bg-[url('/getChefd.png')] md:bg-none p-8 md:p-0 md:grow tracking-wider opacity:80 md:opacity-100 md:bg-transparent rounded">
                    <a href='https://getchefd.netlify.app' target='_blank' className=" flex flex-col md:items-start md:text-3xl text-2xl text-[#ccd6f6] font-bold mt-3 hover:text-[#64ffda] transition ease" >
                        <div className='text-[#64ffda] text-sm tracking-wide mb-5'>Featured Project</div>
                        <div className="inline un">GetChef'd</div>
                    </a>
                    <div className="md:absolute left-0 md:z-10 md:w-1/2 my-5 text-[#a8b2d1]" >
                        <div className="text-sm md:p-5 md:shadow-md shadow-black md:bg-[rgb(2,12,27)] md:opacity-90 md:text-[#a8b2d1] text-[#ccd6f6]">A full stack online meal plan booking website project with modern and responsive UI and dynamic content with features like <span className="text-[#64ffda]">adding ratings, reviews, online payment using Razorpay Gateway, viewing/cancelling past orders and user authentication features like login, signup, forgot /reset password </span></div>
                        <div className="text-[#64ffda] mt-5 flex flex-wrap text-sm tracking-wider">
                            <div className="mr-4">React</div>
                            <div className="mr-4">NodeJS</div>
                            <div className="mr-4">MongoDB</div>
                            <div className="mr-4">Bootstrap</div>
                            <div className="mr-4">Razorpay</div>
                        </div>
                        <div className="text-[#a8b2d1] mt-8 md:border-b-4 border-white inline-block p-5 hover:border-[#64ffda] transition">
                            <a href="https://github.com/HarjasSodhi/GetChef-d---MERN-Stack" target='_blank' className="text-2xl md:m-2 hover:text-[#64ffda] transition ease">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://getchefd.netlify.app" target='_blank' className="text-2xl md:m-2 ml-3 hover:text-[#64ffda]">
                                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <a href='https://getchefd.netlify.app/' target='_blank' className="hidden md:block h-full rounded md:w-2/3 md:aspect-video shadow-lg shadow-black"><img className="h-full w-full" src="/getChefd.png" /></a>
            </div>

            <div ref={ref5} className={`md:flex featured-card relative opacity-0 xl:mt-44 lg:mt-60 md:mt-80 my-20 ${inView5 ? 'animate-[fadeintranslatebottom_0.7s_ease_0.5s_forwards]' : ""}`}>
                <a href='https://harjassodhi.github.io/React-GameHub-project/' target='_blank' className="md:block h-full rounded md:w-2/3 md:aspect-video shadow-lg shadow-black hidden"><img className="h-full w-full" src="/gamehub.png" /></a>
                <div className="bg-[url('/gamehubmd.png')] md:bg-none p-8 md:p-0 md:grow md:text-right tracking-wider bg-[rgb(2,12,27)] opacity-80 md:opacity-100 md:bg-transparent rounded">
                    <a href='https://harjassodhi.github.io/React-GameHub-project/' target='_blank' className="flex flex-col md:items-end md:text-3xl text-2xl text-[#ccd6f6] font-bold mt-3 hover:text-[#64ffda] transition ease" >
                        <div className='text-[#64ffda] text-sm tracking-wide mb-5'>Featured Project</div>
                        <div className="inline un">GameHub</div>
                    </a>
                    <div className="md:absolute right-0 md:z-10 md:w-1/2 my-5 text-[#a8b2d1] md:text-right" >
                        <div className="md:p-5 md:shadow-md shadow-black md:bg-[rgb(2,12,27)] md:opacity-90 md:text-[#a8b2d1] text-[#ccd6f6] text-sm">
                            A Web App of collection of popular games like <span className="text-[#64ffda] un">Tic-tac-toe, Match-it , High-Low and Sudoku </span> with features like error detection and highlighting made from scratch.
                        </div>
                        <div className="text-[#64ffda] mt-5 flex md:justify-end flex-wrap text-sm tracking-wider">
                            <div className="md:ml-4">React.JS</div>
                            <div className="ml-4">HTML</div>
                            <div className="ml-4">CSS</div>
                        </div>
                        <div className="md:justify-end text-[#a8b2d1] mt-8 inline-block p-5 md:border-b-4 border-white hover:border-[#64ffda] transition">
                            <a href="https://github.com/HarjasSodhi/React-GameHub-project" target='_blank' className="text-2xl md:m-2 ml-3 hover:text-[#64ffda]">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://harjassodhi.github.io/React-GameHub-project/" target='_blank' className="text-2xl md:m-2 ml-3 hover:text-[#64ffda]">
                                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={ref4} className={`${inView4 ? 'animate-[fadeintranslatebottom_1s_ease_0.7s_forwards]' : ""} flex flex-col opacity-0 items-center xl:mt-24 lg:mt-36 md:mt-52 mt-8 font-bold`}>
                <div className="text-2xl text-[#ccd6f6] text-center">Other Noteworthy Projects</div>
                <div className={`mt-14 place-content-evenly w-full grid 2xl:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5`}>
                    {
                        data.map((el, idx) => {
                            return <ProjectCard el={el} dis={disp || idx < dispSize} />
                        })
                    }
                </div>
                <button onClick={handleDisp} className="mt-10 font-bold border text-[#64ffda] border-[#64ffda] rounded p-4 hover:bg-gray-700 transition ease 0.5s">{disp ? "Show Less" : "Show More"}</button>
            </div>
        </div>
    )
}

export default Projects