"use client"
import { useEffect } from "react";

export default function Skills() {
    useEffect(() => {
        const boxes = document.querySelectorAll('.box');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('in-view');
                    },(index)* 200);

                }
            });
        }, {
            root: null,          // viewport
            threshold: 1,      // 20% visible hone par trigger
        });

        boxes.forEach(box => observer.observe(box));
        return () => {
            boxes.forEach(box => observer.unobserve(box));
        };
    })


    return (
        <div className='z-10 flex-shrink-0 h-full flex items-center'>
            <h1 className='text-6xl font-bold -rotate-90'>
                My Skills
            </h1>
            <div className='grid grid-cols-4  gap-20 px-10'>
                <div className='box top-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className="text-yellow devicon-wordpress-plain -rotate-45 text-4xl text-white"></i>
                    </span>
                    Javascript
                </div>
                <div className='box top-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className=" text-yellow devicon-wordpress-plain -rotate-45 text-4xl text-white"></i>
                    </span>
                    Javascript
                </div>
                <div className='box top-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className="text-yellow devicon-wordpress-plain -rotate-45 text-4xl text-white"></i>
                    </span>
                    Javascript
                </div>
                <div className='box top-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className="text-yellow devicon-wordpress-plain -rotate-45 text-4xl text-white"></i>
                    </span>
                    Javascript
                </div>
                <div className='box bottom-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className="text-yellow devicon-wordpress-plain -rotate-45 text-4xl text-white"></i>
                    </span>
                    Javascript
                </div>
                <div className='box bottom-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className="text-yellow devicon-wordpress-plain -rotate-45 text-4xl text-white"></i>
                    </span>
                    Javascript
                </div>
                <div className='box bottom-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className="text-yellow devicon-wordpress-plain -rotate-45 text-4xl text-white"></i>
                    </span>
                    Javascript
                </div>
                <div className='box bottom-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className="text-yellow devicon-wordpress-plain -rotate-45 text-4xl text-white"></i>
                    </span>
                    Javascript
                </div>
            </div>
        </div>
    )
}