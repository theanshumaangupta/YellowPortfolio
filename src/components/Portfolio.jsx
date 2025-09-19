'use client'
import { useEffect, useRef } from "react"

export default function Portfolio() {
    const mainref = useRef(null)
    const currentIndex = useRef(0)
    const noOfProject = 3
    let interval = 0
    let givengap = 12
    useEffect(() => {
        if (mainref.current) {
            interval = (main.scrollHeight * (1 / noOfProject)) + givengap
        }
    }, [])
    function scrollUp() {
        currentIndex.current -= 1
        if (currentIndex.current < 0) currentIndex.current = noOfProject - 1
        main.scrollTo({
            top: currentIndex.current * interval,
            behavior: "smooth"
        });


    }
    function scrollDown() {

        currentIndex.current += 1
        if (currentIndex.current >= noOfProject) currentIndex.current = 0
        main.scrollTo({
            top: currentIndex.current * interval,
            behavior: "smooth"
        });


    }

    return (
        <div id="Portfolio" className=" flex-shrink-0 h-screen flex items-center p-r-10">
            <div className="w-[100vw]  items-center flex h-full relative bg-primary">
                <img src="images/right-cut.png" className="absolute z-1 left-0 translate-x-[-52%] -rotate-90  w-[100vh] " alt="" />
                <h1 className="text-6xl font-bold -rotate-90">My Portfolio</h1>
                {/* Slider Section */}
                <div id="main" ref={mainref} className="overflow-hidden transform w-auto flex gap-5 flex-col h-[60vh] " >
                    {/* Slider 1 */}
                    <div className="flex h-full items-center flex-shrink-0 gap-10" >
                        <div className="w-[40vw] h-[60vh] bg-gray rounded-4xl overflow-hidden ">
                            <img src="assets/portfolio/project-1.jpg" className="object-cover h-full w-full" alt="" />
                        </div>
                        <div className="flex flex-col gap-5 ">
                            <h1 className="text-4xl font-bold">Slider Project</h1>
                            <p className="text-xl font-bold"><span className="font-medium text-lightgray">Project:</span> Mobile App</p>
                            <p className="text-xl font-bold"><span className="font-medium text-lightgray">Client:</span>Envato</p>
                            <p className="text-xl font-bold"><span className="font-medium text-lightgray">Duration:</span>3 months</p>
                            <p className="text-xl font-bold"><span className="font-medium text-lightgray">Framework:</span>WordPress</p>
                            <button className="outline-none border-none rounded-4xl bg-yellow p-3 bg-gray w-[80%] ">Preview</button>
                        </div>
                    </div>
                    {/* Slider 2 */}
                    <div className="flex h-full items-center flex-shrink-0 gap-10" >
                        <div className="w-[40vw] h-[60vh] bg-gray rounded-4xl overflow-hidden ">
                            <img src="assets/portfolio/project-2.jpg" className="object-cover h-full w-full" alt="" />
                        </div>
                        <div className="flex flex-col gap-5 ">
                            <h1 className="text-4xl font-bold">Slider Project</h1>
                            <p className="text-xl font-bold"><span className="font-medium text-lightgray">Project:</span> Mobile App</p>
                            <p className="text-xl font-bold"><span className="font-medium text-lightgray">Client:</span>Envato</p>
                            <p className="text-xl font-bold"><span className="font-medium text-lightgray">Duration:</span>3 months</p>
                            <p className="text-xl font-bold"><span className="font-medium text-lightgray">Framework:</span>WordPress</p>
                            <button className="outline-none border-none rounded-4xl bg-yellow p-3 bg-gray w-[80%] ">Preview</button>
                        </div>
                    </div>
                    {/* Slider 3 */}
                    <div className="flex h-full items-center flex-shrink-0 gap-10" >
                        <div className="w-[40vw] h-[60vh] bg-gray rounded-4xl overflow-hidden ">
                            <img src="assets/portfolio/project-3.jpg" className="object-cover h-full w-full" alt="" />
                        </div>
                        <div className="flex flex-col gap-5 ">
                            <h1 className="text-4xl font-bold">Slider Project</h1>
                            <p className="text-xl font-bold"><span className="font-medium text-lightgray">Project:</span> Mobile App</p>
                            <p className="text-xl font-bold"><span className="font-medium text-lightgray">Client:</span>Envato</p>
                            <p className="text-xl font-bold"><span className="font-medium text-lightgray">Duration:</span>3 months</p>
                            <p className="text-xl font-bold"><span className="font-medium text-lightgray">Framework:</span>WordPress</p>
                            <button className="outline-none border-none rounded-4xl bg-yellow p-3 bg-gray w-[80%] ">Preview</button>
                        </div>
                    </div>
                </div>
                {/* Up DOwn Butons */}
                <div className=" relative left-[40px] flex flex-col gap-5 ">
                    <div onClick={() => scrollUp()} className='-rotate-90 z-10 rounded-[25px]   p-4 bg-yellow flex justify-center items-center '>
                        <img src="images/right.svg" className='w-10' alt="" />
                    </div>
                    <div onClick={() => scrollDown()} className='rotate-90 z-10 rounded-[25px]   p-4 bg-yellow flex justify-center items-center '>
                        <img src="images/right.svg" className='w-10' alt="" />
                    </div>
                </div>
                <img src="images/right-cut.png" className="z-1 absolute right-0 translate-x-[52%] rotate-90  w-[100vh]" alt="" />
            </div>

            {/*Employee Rating */}
            <div
                style={{ backgroundImage: "url('assets/backgrounds/testimonials.jpg')" }}
                className="w-[90vw] relative h-full flex flex-col justify-center items-center bg-center bg-cover bg-fixed bg-no-repeat"
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="flex gap-40 mt-10">
                    <div className="max-w-[25rem] p-10 rounded-2xl bg-gray relative ">
                        <p className="text-[18px] livic mb-10 italic leading-10">" I worked with Steven, he was very helpful and fast to respond to my inquiry to help with Wordpress website issues and all technical problems. "</p>
                        <p className="text-[18px] livic text-yellow">Jasmin Aniston</p>
                        <p className="text-[18px] livic">Director - Adobe</p>
                        <img src="assets/testimonials/testimonial-1.jpg" className="h-25 w-25 absolute rounded-full -right-[33px]" alt="" />
                    </div>

                    <div className="max-w-[25rem] p-10 rounded-2xl relative bg-gray">
                        <p className="text-[18px] livic mb-10 italic leading-10">" I worked with Steven, he was very helpful and fast to respond to my inquiry to help with Wordpress website issues and all technical problems. "</p>
                        <p className="text-[18px] livic text-yellow">Jasmin Aniston</p>
                        <p className="text-[18px] livic">Director - Adobe</p>
                        <img src="assets/testimonials/testimonial-2.jpg" className="h-25 w-25 absolute rounded-full -right-[33px]" alt="" />

                    </div>
                </div>
            </div>

            {/* Get in Touch */}
            <div id="Contact" className="w-[80vw] items-center flex h-full relative  bg-primary">
                <img src="images/right-cut.png" className="z-1 absolute left-0 translate-x-[-52%] -rotate-90  w-[100vh] " alt="" />
                <h1 className="text-6xl font-bold -rotate-90">Get In Touch</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-15 w-[40rem] max-w-4xl  py-10">
                    {/* Phone */}
                    <div className="py-10 justify-center relative bg-neutral-900 rounded-2xl p-6 text-center flex flex-col items-center">
                        <div className="absolute -top-8 w-16 h-16 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                            <span className="text-yellow-500 text-2xl">📞</span>
                        </div>
                        <p className="mt-8 text-gray-400">Phone</p>
                        <p className="font-semibold text-lg">+216 21 184 010</p>
                    </div>

                    {/* Email */}
                    <div className="py-10 justify-center relative bg-neutral-900 rounded-2xl p-6 text-center flex flex-col items-center">
                        <div className="absolute -top-8 w-16 h-16 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                            <span className="text-yellow-500 text-2xl">✉️</span>
                        </div>
                        <p className="mt-8 text-gray-400">Email</p>
                        <p className="font-semibold text-lg">contact@steven.net</p>
                    </div>

                    {/* Address */}
                    <div className="py-10 justify-center relative bg-neutral-900 rounded-2xl p-6 text-center flex flex-col items-center">
                        <div className="absolute -top-8 w-16 h-16 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                            <span className="text-yellow-500 text-2xl">📍</span>
                        </div>
                        <p className="mt-8 text-gray-400">Address</p>
                        <p className="font-semibold text-lg">London, England</p>
                    </div>

                    {/* Follow Me */}
                    <div className="py-10 justify-center relative bg-neutral-900 rounded-2xl p-6 text-center flex flex-col items-center">
                        <div className="absolute -top-8 w-16 h-16 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                            <span className="text-yellow-500 text-2xl">🔗</span>
                        </div>
                        <p className="mt-8 text-gray-400">Follow Me</p>
                        <div className="flex gap-4 mt-2 text-white text-xl">
                            <span>🐙</span> <span>🐦</span> <span>🏀</span> <span>📘</span>
                        </div>
                    </div>
                </div>
                <img src="images/right-cut.png" className="z-1 absolute right-0 translate-x-[52%] rotate-90  w-[100vh]" alt="" />
            </div>

            {/* My clients */}
            <div
                style={{ backgroundImage: "url('assets/backgrounds/facts.jpg')" }}
                className="relative w-[100vw] h-full flex flex-col justify-center items-center bg-center bg-cover bg-fixed bg-no-repeat"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="text-6xl font-bold mb-10 text-white">My Clients</h1>

                    <div className="flex gap-10">
                        <div className="w-70 h-30 rounded-2xl bg-gray flex items-center justify-center">
                            <img src="assets/logos/graphicriver-dark-background.png" className="w-[60%]" alt="" />
                        </div>
                        <div className="w-70 h-30 rounded-2xl bg-gray flex items-center justify-center">
                            <img src="assets/logos/themeforest-dark-background.png" className="w-[60%]" alt="" />
                        </div>
                        <div className="w-70 h-30 rounded-2xl bg-gray flex items-center justify-center">
                            <img src="assets/logos/photodune-dark-background.png" className="w-[60%]" alt="" />
                        </div>
                    </div>

                    <div className="flex gap-10 mt-10">
                        <div className="w-70 h-30 rounded-2xl bg-gray flex items-center justify-center">
                            <img src="assets/logos/codecanyon-dark-background.png" className="w-[60%]" alt="" />
                        </div>
                        <div className="w-70 h-30 rounded-2xl bg-gray flex items-center justify-center">
                            <img src="assets/logos/audiojungle-dark-background.png" className="w-[60%]" alt="" />
                        </div>
                        <div className="w-70 h-30 rounded-2xl bg-gray flex items-center justify-center">
                            <img src="assets/logos/3docean-dark-background.png" className="w-[60%]" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}