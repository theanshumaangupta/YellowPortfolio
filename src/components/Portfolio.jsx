'use client'
import { useEffect, useRef } from "react"

import Employ from "./Employ";
import GetInTouch from "./GetInTouch";

export default function Portfolio() {
    const mainref = useRef(null)
    const currentIndex = useRef(0)
    const noOfProject = 3
    let interval = 0
    function SliderDot(index) {
        const el = document.querySelector(".project-1-parent");
        if (!el) return;

        const slides = document.querySelectorAll(".sub-p-1").length; // number of images inside
        el.scrollTo({
            left: (el.scrollWidth / slides) * index, // scroll to that slide
            behavior: "smooth",
        });
    }
    useEffect(() => {

        if (mainref.current) {
            const firstSlide = mainref.current.firstElementChild;
            const style = window.getComputedStyle(mainref.current);
            const gap = parseInt(style.rowGap || style.gap || 0, 10);
            interval = firstSlide.clientHeight + gap;
        }
    }, []);

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
        <div id="Portfolio" className=" flex-shrink-0 h-screen  flex items-center p-r-10">
            <div className="min-w-[90rem] flex-shrink-0 pr-10  items-center flex h-full relative bg-primary">
                <img src="images/right-cut.png" className="absolute z-1 left-0 translate-x-[-52%] -rotate-90  w-[100vh] " alt="" />
                <h1 className="box right-box text-6xl font-bold -rotate-90">My Portfolio</h1>
                {/* Slider Section */}
                <div id="main" ref={mainref} className="left-[100px] box right-box  overflow-hidden h-[25rem] transform flex gap-15 flex-col " >


                    {/* Slider 1 */}
                    <div className="flex h-full items-center flex-shrink-0 gap-10" >
                        <div className="project-1-parent w-[35rem] h-full bg-gray rounded-4xl overflow-hidden flex">

                            {/* For Sub Slider Images */}
                            <img src="assets/portfolio/project-1.jpg" className="sub-p-1 object-cover h-full w-full" alt="" />
                            <img src="assets/portfolio/project-2.jpg" className="sub-p-1 object-cover h-full w-full" alt="" />
                            <img src="assets/portfolio/project-3.jpg" className="sub-p-1 object-cover h-full w-full" alt="" />
                            {/* For Dots Of Slider */}
                            <div className="slider-dots-parent cursor-pointer flex gap-2 absolute bottom-5 left-[16rem]">
                                {Array.from({ length:document.querySelectorAll(".sub-p-1")?.length || 3}).map(
                                    (_, i) => (
                                        <div
                                            key={i}
                                            onClick={() => SliderDot(i)}
                                            className="slider-dot h-2 w-2 rounded-full bg-yellow"
                                        ></div>
                                    )
                                )}
                            </div>


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
                        <div className="w-[35rem] h-full bg-gray rounded-4xl overflow-hidden ">
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
                        <div className="w-[35rem] h-full bg-gray rounded-4xl overflow-hidden ">
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
                {/* Up Down Butons */}
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

            <Employ />
            <GetInTouch />


        </div>
    )
}