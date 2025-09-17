export default function ABout() {
    return (
        <div className='z-10 flex-shrink-0 flex gap-20 justify-center h-full w-[80vw] items-center'>
            <img src="images/men.jpg" className='' alt="" />
            <div >
                <h1 className='text-7xl font-bold'>Stevan <br /> <span className='text-yellow'>Walker</span></h1>
                <div className='flex ml-14 mt-15 text-xl font-semibold gap-10'>
                    <ul className='flex flex-col gap-4 list-disc text-yellow'>
                        <li>
                            <span className='text-[#888888]'>Age:  <span className='text-white'> 27 years</span></span>

                        </li>
                        <li>
                            <span className='text-[#888888]'>Nationality:  <span className='text-white'> Indian</span></span>

                        </li>
                        <li>
                            <span className='text-[#888888]'>Freelance:  <span className='text-white'> Yes</span></span>

                        </li>
                        <li>
                            <span className='text-[#888888]'>Languages:  <span className='text-white'> Hindi</span></span>

                        </li>
                    </ul>
                    <ul className='flex flex-col gap-4 list-disc text-yellow'>
                        <li>
                            <span className='text-[#888888]'>Address:  <span className='text-white'> Kanpur</span></span>

                        </li>
                        <li>
                            <span className='text-[#888888]'>Phone:  <span className='text-white'> 885 8684 812</span></span>

                        </li>
                        <li>
                            <span className='text-[#888888]'>Email:  <span className='text-white'> find.anshumaan</span></span>

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