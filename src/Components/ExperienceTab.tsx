import { exp } from '../types';

type propType = {
  el: exp,
  display: boolean;
  i: number,
  setIdx: React.Dispatch<React.SetStateAction<number>>,
}

function ExperienceTab(props: propType) {
  return (
    <div className={`text-sm sm:text-base text-center w-1/3 sm:w-full sm:p-8 py-5 hover:bg-gray-800 ${props.display ? "text-[#64ffda]" : "text-[#a8b2d1]"} transition-all duration-300`} onClick={(e) => {
      props.setIdx(props.i)
    }}>{props.el.company}</div>
  )
}

export default ExperienceTab