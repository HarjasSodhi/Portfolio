function SocialsBar() {
    return (
        <>
            <div className="animate-[fadein_0.5s_linear_5.5s_forwards] left-socials fixed hidden md:block opacity-0 bottom-0 left-12 text-[#a8b2d1] text-xl">
                <ul className='flex flex-col justify-center items-center'>
                    <li className="transition ease hover:text-[#64ffda] transform hover:-translate-y-1"><a href='https://www.github.com/HarjasSodhi' target='_blank'><i className="fa-brands fa-github my-3"></i></a></li>
                    <li className="transition ease hover:text-[#64ffda] transform hover:-translate-y-1"><a href='https://www.linkedin.com/in/harjas-sodhi-ab985317a/' target='_blank'><i className="fa-brands fa-linkedin-in my-3"></i></a></li>
                    <li className='transition ease hover:text-[#64ffda] transform hover:-translate-y-1 flex flex-col justify-center items-center after:h-24 after:border after:border-[#a8b2d1] after:mt-5'><a href='https://www.leetcode.com/HarjasSodhi01/' target='_blank'><i className="fa-solid fa-code my-3 mb-5"></i></a></li>
                </ul>
            </div>
            <div className="animate-[fadein_0.5s_linear_5.5s_forwards] right-socials fixed hidden md:block opacity-0 bottom-0 right-12 text-[#a8b2d1] text-sm">
                <ul className='flex flex-col justify-center items-center'>
                    <li className='transition ease hover:text-[#64ffda] transform tracking-widest rotate-270 text-center' style={{ writingMode: 'vertical-rl' }} >harjassodhi9@gmail.com</li>
                    <li className='flex flex-col justify-center items-center after:h-24 after:border after:border-[#a8b2d1] mt-4 after:mt-5'></li>
                </ul>
            </div>
        </>
    )
}

export default SocialsBar