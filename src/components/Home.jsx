export default function Home() {
    return (
        <div id="Home" className='z-10 flex-shrink-0 flex relative justify-center h-full w-screen items-center'>
            <h1 className='font-bold livic text-9xl [text-shadow:0px_0px_#FFA,12px_14px_#222] tracking-[1rem] text-[150px] leading-[160px]'>
                Hello<span className='text-yellow'>.</span>
                <br />
                <span>
                    I  am
                </span>
                <br />
                Anshu
            </h1>
            <div className='z-10 rounded-[25px] absolute right-[5rem] h-15 w-15 bg-yellow flex justify-center items-center '>
                <img src="images/right.svg" className='w-10' alt="" />
            </div>

        </div>
    )
}