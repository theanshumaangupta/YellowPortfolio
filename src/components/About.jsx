export default function ABout() {
    return (
        <div id="About" className=' z-10 flex-shrink-0 flex gap-20 justify-center h-full items-center'>
            <img src="images/pfp.jpg" className='h-[25rem]' alt="" />
            <div className="flex-shrink-0" >
                <h1 className='text-7xl font-bold'>Anshumaan <br /> <span className='text-yellow'>Gupta</span></h1>
                <div className='flex ml-14 mt-15 text-xl font-semibold flex-shrink-0 gap-10'>
                    <ul className='flex flex-col gap-4 list-disc  text-yellow'>
                        <li>
                            <span className='text-[#888888]'>Age:  <span className='text-white'> 19 years</span></span>

                        </li>
                        <li>
                            <span className='text-[#888888]'>Nationality:  <span className='text-white'> Indian</span></span>

                        </li>
                        <li>
                            <span className='text-[#888888]'>Freelance:  <span className='text-white'> Yes</span></span>

                        </li>
                        <li>
                            <span className='text-[#888888]'>Languages:  <span className='text-white'> Hindi, Eng</span></span>

                        </li>
                    </ul>
                    <ul className='flex flex-col gap-4 list-disc text-yellow'>
                        <li>
                            <span className='text-[#888888]'>Address:  <span className='text-white'> Kanpur, India</span></span>

                        </li>
                        <li>
                            <span className='text-[#888888]'>University:  <span className='text-white'>AKTU, Lucknow</span></span>

                        </li>
                        <li>
                            <span className='text-[#888888]'>Education:  <span className='text-white'> B.Tech 2023-27</span></span>

                        </li>
                        <li>
                            <span className='text-[#888888]'>Branch:  <span className='text-white'> Computer Science</span></span>

                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}