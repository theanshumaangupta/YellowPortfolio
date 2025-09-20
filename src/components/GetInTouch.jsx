import { FaShareAlt, FaGithub, FaLinkedin, FaWhatsapp, } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
export default function GetInTouch() {
    return (
        <>
            {/* Get in Touch */}
            <div id="Contact" className="w-[80rem] items-center justify-evenly flex h-full relative  bg-primary">
                <img src="images/right-cut.png" className="z-1 absolute left-0 translate-x-[-52%] -rotate-90  w-[100vh] " alt="" />
                <h1 className="text-6xl font-bold  [writing-mode:sideways-lr] [text-orientation:mixed]">Get In Touch</h1>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-15 w-[40rem] max-w-4xl  py-10">
                    {/* Phone */}
                    <div className="box top-box py-10 justify-center relative bg-neutral-900 rounded-2xl p-6 text-center flex flex-col items-center">
                        <div className="absolute -top-8 w-16 h-16 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                            <img src="/assets/Icons/phone.png" className=" w-full p-2" alt="" />
                        </div>
                        <p className="mt-8 text-gray-400">Phone</p>
                        <p className="font-semibold text-lg">+91 88586 84812</p>
                    </div>

                    {/* Email */}
                    <div className="box top-box py-10 justify-center relative bg-neutral-900 rounded-2xl p-6 text-center flex flex-col items-center">
                        <div className="absolute -top-8 w-16 h-16 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                            <img src="/assets/Icons/mail.png" className=" w-full p-2" alt="" />
                        </div>
                        <p className="mt-8 text-gray-400">Email</p>
                        <p className="font-semibold text-lg">theanshumangupta@gmail</p>
                    </div>

                    {/* Address */}
                    <div className="box bottom-box py-10 justify-center relative bg-neutral-900 rounded-2xl p-6 text-center flex flex-col items-center">
                        <div className="absolute -top-8 w-16 h-16 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                            <img src="/assets/Icons/location.png" className=" w-full p-2" alt="" />
                        </div>
                        <p className="mt-8 text-gray-400">Address</p>
                        <p className="font-semibold text-lg">Kanpur, India</p>
                    </div>

                    {/* Follow Me */}
                    <div className="box bottom-box py-10 justify-center relative bg-neutral-900 rounded-2xl p-6 text-center flex flex-col items-center">
                        <div className="absolute -top-8 w-16 h-16 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                            <FaShareAlt className="text-yellow w-full h-full text-center p-4" />

                        </div>
                        <p className="mt-8 text-gray-400">Follow Me</p>
                        <div className="flex gap-4 mt-2 text-white text-xl">
                            <a href="https://www.linkedin.com/in/findanshumaangupta/"> <FaLinkedin /></a>
                            <a href="https://wa.me/918858684812"><FaWhatsapp /></a>
                            <a href="https://github.com/theanshumaangupta"><FaGithub /></a>
                            <a href="https://www.hackerrank.com/profile/theanshumangupta"><SiHackerrank /></a>
                        </div>
                    </div>
                </div>
                <img src="images/right-cut.png" className="z-1 absolute right-0 translate-x-[52%] rotate-90  w-[100vh]" alt="" />
            </div>

            {/* My clients */}
            <div
                id="Clients"
                style={{ backgroundImage: "url('assets/backgrounds/clients.jpg')" }}
                className="relative w-[90rem] h-full flex flex-col justify-center items-center bg-center bg-cover bg-fixed bg-no-repeat"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="box right-box relative z-10 flex flex-col items-center">
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
        </>
    )
}