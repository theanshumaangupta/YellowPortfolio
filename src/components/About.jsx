export default function ABout() {
    return (
        <div id="About" className=' z-10 flex-shrink-0 flex gap-20 justify-center h-full w-[80vw] items-center'>
            <img src="images/pfp.jpg" className='h-[25rem]' alt="" />
            <div >
                <h1 className='text-7xl font-bold'>Anshumaan <br /> <span className='text-yellow'>Gupta</span></h1>
                <div className='flex ml-14 mt-15 text-xl font-semibold gap-10'>
                    <ul className='flex flex-col gap-4 list-disc text-yellow'>
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
                            <span className='text-[#888888]'>Address:  <span className='text-white'> Kanpur</span></span>

                        </li>
                        <li>
                            <span className='text-[#888888]'>Phone:  <span className='text-white'> +91 8858684812</span></span>

                        </li>
                        <li>
                            <span className='text-[#888888]'>Github:  <span className='text-white'> theanshumaangupta</span></span>

                        </li>
                        <li>
                            <span className='text-[#888888]'>Skype:  <span className='text-white'> find.anshumaan</span></span>

                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}