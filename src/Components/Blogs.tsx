import BlogCard from './BlogCard'

function Blogs() {

    let data = ["Redux In React", "Render Props", "Custom Hooks", "Refs In React", "Import vs Require", "REST API"];

    return (
        <div className='flex flex-col md:gap-0 gap-10 pt-8 min-h-screen xl:px-10 mt-10' id='blogs'>
            <div className=" text-[#ccd6f6] flex items-end">
                <span className='text-[#64ffda] text-md md:text-lg lg:text-xl'>04.</span>
                <div className="pl-5 text-xl md:text-2xl lg:text-3xl font-bold tracking-wide" > Blogs / Tutorials</div>
                <div className="grow border border-gray-700 self-center lg:grow-0 lg:w-1/3 ml-5"></div>
            </div>
            <div className='grow grid place-content-center lg:grid-cols-2 grid-cols-1 gap-5'>
                {
                    data.map(el => <BlogCard el={el} />)
                }
            </div>
        </div>
    )
}

export default Blogs