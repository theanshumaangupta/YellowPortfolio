"use client"
import { useEffect } from "react";
import { IoLogoJavascript } from "react-icons/io5";

export default function Skills() {
    useEffect(() => {
        const boxes = document.querySelectorAll('.box');
        const observers = [];

        boxes.forEach((box) => {
            const delay = parseInt(box.dataset.delay || 0, 10);
            const margin = box.dataset.margin || "0px 0px -100px -0px"; // default

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('in-view');
                        }, delay);
                    }
                });
            }, {
                root: null,
                threshold: 0.1,
                rootMargin: margin,
            });

            observer.observe(box);
            observers.push(observer);
        });

        // cleanup: disconnect all observers
        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);



    return (
        <div className='z-10 flex-shrink-0 h-full flex items-center'>
            <h1 className='text-6xl font-bold -rotate-90'>
                My Skills
            </h1>
            <div className='grid grid-cols-4  gap-20 px-10'>
                <div className='box top-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className="text-yellow devicon-javascript-plain -rotate-45 text-4xl text-white"></i>
                    </span>
                    Javascript
                </div>
                <div className='box top-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className=" text-yellow devicon-nextjs-original-wordmark -rotate-45 text-6xl"></i>
                    </span>
                    Next JS
                </div>
                <div className='box bottom-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className="text-yellow devicon-react-original -rotate-45 text-4xl"></i>
                    </span>
                    React JS
                </div>
                <div className='box top-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className="text-yellow devicon-mongodb-plain -rotate-45 text-4xl"></i>
                    </span>
                    Javascript
                </div>
                <div className='box top-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className="text-yellow devicon-postgresql-plain -rotate-45 text-4xl"></i>
                    </span>
                    Javascript
                </div>
                <div className='box bottom-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className="text-yellow devicon-python-plain  -rotate-45 text-4xl"></i>
                    </span>
                    Javascript
                </div>
                <div className='box bottom-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className="text-yellow devicon-django-plain -rotate-45 text-4xl"></i>
                    </span>
                    Javascript
                </div>

                <div className='box bottom-box flex flex-col items-center gap-10'>
                    <span className='h-25 w-25 rotate-45 rounded-[25px] bg-[#222222] flex justify-center items-center'>
                        <i className="text-yellow devicon-wordpress-plain -rotate-45 text-4xl"></i>
                    </span>
                    Javascript
                </div>
            </div>
        </div>
    )
}