import { proj } from "../types"

type propType = {
  el: proj,
  dis: boolean;
}

function ProjectCard(props: propType) {
  return (
    <a href={props.el.link ? props.el.link : ""} target='_blank' className={`card ${props.dis ? "flex" : "hidden"} proj-card flex-col bg-[#112240] shadow-sm shadow-black animate-[fadein_1s_ease_0s_forwards] rounded-xl p-8 transition-transform hover:-translate-y-2 ease-in`}>
      <div className="flex justify-between text-[#ccd6f6] transition text-xl">
        <div className='text-[#64ffda] text-5xl'><i className="fa-regular fa-folder"></i></div>
        <div className='flex gap-3'>
          {props.el.link ? <a href={props.el.link} target='_blank' className='hover:text-[#64ffda]'><i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a> : ""}
          {props.el.github ? <a href={props.el.github} target='_blank' className='hover:text-[#64ffda]'><i className="fa-brands fa-github"></i></a> : ""}
        </div>
      </div>
      <div className="proj-title mt-4 md:text-2xl text-xl text-[#ccd6f6] transition card-name">{props.el.title}</div>
      <div className="mt-3 text-[#8892b0] font-normal grow">{props.el.description}</div>
      <div className="mt-8 text-[#a8b2d1] text-[12px] tracking-wider">{props.el.stack}</div>
    </a>
  )
}

export default ProjectCard