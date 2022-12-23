import { exp } from "../types";

type propType = {
    el: exp,
    display: boolean;
}

function ExperienceContent(props: propType) {
    return (
        <div className={`h-full w-full ${props.display ? "block" : "hidden"} animate-[fadein_0.5s_linear_0s_forwards]`}>
            <div className="text-[#ccd6f6] md:text-xl text:lg font-bold">{props.el.position} <span className="text-[#64ffda]">@ <a href={props.el.link} target="_blank" className="un">{props.el.company}</a></span></div>
            <div className="mt-1 text-[#a8b2d1]">{props.el.startDate} - {props.el.endDate}</div>
            <ul className="mt-8 text-[#a8b2d1]">
                {
                    props.el.bullets.map(e => <li className="mt-2">{e}</li>)
                }
            </ul>
        </div>
    )
}

export default ExperienceContent;