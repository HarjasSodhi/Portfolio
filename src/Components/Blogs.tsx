import BlogCard from './BlogCard'
import { useInView } from 'react-intersection-observer'

function Blogs() {

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

    let data = ["Redux In React", "Render Props", "Custom Hooks", "Refs In React", "Import vs Require", "REST API"];
    return (
        <div ref={ref} className={`min-h-screen flex flex-col md:gap-0 gap-10 pt-8 xl:px-10 mt-10 opacity-0 ${inView ? 'animate-[fadeintranslatebottom_1s_ease_0.7s_forwards]' : ""}`} id='blogs'>
            <div className=" text-[#ccd6f6] flex items-end">
                <span className='text-[#64ffda] text-md md:text-lg lg:text-xl'>04.</span>
                <div className="pl-5 text-xl md:text-2xl lg:text-3xl font-bold tracking-wide" > Blogs / Tutorials</div>
                <div className="grow border border-gray-700 self-center lg:grow-0 lg:w-1/3 ml-5"></div>
            </div>
            <div ref={ref2} className={`grow grid place-content-center lg:grid-cols-2 grid-cols-1 gap-5 opacity-0 ${inView2 ? 'animate-[fadeintranslatebottom_0.5s_ease_1.5s_forwards]' : ""}`}>
                {
                    data.map(el => {
                        return <BlogCard el={el} />
                    })
                }
            </div>
        </div>
    )
}

export default Blogs