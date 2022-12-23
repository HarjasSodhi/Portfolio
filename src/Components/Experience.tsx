import { exp } from '../types';
import { useState, useEffect, useRef } from 'react';
import ExperienceContent from './ExperienceContent';
import ExperienceTab from './ExperienceTab';

function Experience() {

    let data: exp[] = [
        {
            position: "Backend Engineer Intern",
            company: "Kylo Apps",
            link: "https://kyloapps.com",
            startDate: "February 2022",
            endDate: "April 2022",
            bullets: ["Skills- NodeJS, ExpressJS, REST, MongoDB, Google Cloud, etc", "Write modern, performant, maintainable code for a diverse array of clients and integrating it with databases for 4+ Projects", "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"]
        },
        {
            position: "Software Developer Trainee",
            company: "Pepcoding",
            link: "https://pepcoding.com",
            startDate: "March 2021",
            endDate: "December 2021",
            bullets: ["Gained exposure to various Data-Structures and Algorithms and methodoligies used in software development", "Attained proficiency in Web Development using MERN stack and other web technologies"]
        },
        {
            position: "B.Tech Undergrad (Computer Science Engineering)",
            company: "GGSIPU",
            link: "http://www.ipu.ac.in/",
            startDate: "August 2019",
            endDate: "June 2023",
            bullets: ["Relevant Course Work :-", "Applied Mathematics", "Data Structures And Algorithms", "Database Management Systems", "Operating Systems", "Computer Networks ", "Object Oriented Programming", "Computer Organization and Architecture"]
        }
    ]

    const [idx, setIdx] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const titlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sliderRef.current && titlesRef.current) {
            if (window.innerWidth < 640) {
                sliderRef.current.style.width = titlesRef.current.children[idx].clientWidth + "px";
                sliderRef.current.style.height = 1 + "px";
                sliderRef.current.style.left = (idx * titlesRef.current.children[idx].clientWidth) + "px";
            } else {
                sliderRef.current.style.height = titlesRef.current.children[idx].clientHeight + "px";
                sliderRef.current.style.width = 1 + "px";
                sliderRef.current.style.top = (idx * titlesRef.current.children[idx].clientHeight) + "px";
            }
        }
    }, [idx])


    return (
        <div className="pt-8 flex flex-col min-h-screen xl:px-8 mt-20" id='experience'>
            <div className=" text-[#ccd6f6] flex items-end">
                <span className='text-[#64ffda] text-md md:text-lg lg:text-xl'>02.</span>
                <div className="pl-5 text-xl md:text-2xl lg:text-3xl font-bold" >Work & Education</div>
                <div className="grow border border-gray-700 self-center lg:grow-0 lg:w-1/3 ml-5"></div>
            </div>
            <div className="viewer mt-10 sm:mt-24 flex flex-col sm:flex-row items-center sm:justify-between sm:items-start lg:px-20 sm:px-14 px-3 tracking-wider">
                <div className="bar sm:flex transition ease h-fit sm:w-fit w-full">
                    <div className='slide h-auto relative transition ease'>
                        <div className='slider w-[1px] bg-[#64ffda] absolute transition-all ease duration-500' ref={sliderRef}></div>
                    </div>
                    <div className='flex sm:block titles' ref={titlesRef}>
                        {
                            data.map((el, i) => {
                                return <ExperienceTab key={i} el={el} display={i == idx ? true : false} i={i} setIdx={setIdx} />;
                            })
                        }
                    </div>
                </div>
                <div className="bar-content mt-10 sm:mt-0 grow md:pl-14 sm:pl-8" >
                    {
                        data.map((el, i) => {
                            return <ExperienceContent key={i} el={el} display={i == idx ? true : false} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience