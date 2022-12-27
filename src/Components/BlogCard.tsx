import { Link } from "react-router-dom"

type propType = {
    el: string
}

function BlogCard(props: propType) {
    return (
        <Link className="duration-200 blog-card transition-all transform hover:-translate-y-2 hover:border-[#64ffda] tracking-wider hover:text-[#64ffda] border-white bg-[#112240] opacity-90 p-5 md:text-xl text-lg text-[#ccd6f6] font-bold rounded-xl shadow-md shadow-black flex gap-4" to={"/blog/" + props.el.split(' ').join("_")}>
            <span><i className="fa-solid fa-person-chalkboard"></i></span>
            <span className='blog-title'>{props.el}</span>
        </Link>
    )
}

export default BlogCard