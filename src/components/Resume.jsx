export default function Resume() {
    return (
        <div className=" flex-shrink-0 h-screen flex items-center p-r-10">
            <div className="relative flex items-center pr-30">
                <h1 className="text-6xl font-bold -rotate-90">My Resume</h1>
                <div className=" flex flex-col justify-center gap-5 items-center">
                    <div className="flex gap-10">
                        <div className="box top-box rounded-2xl p-8  w-75  h-45 bg-gray">
                            <h1 className="text-yellow text-2xl font-semibold mb-4">Project Manager</h1>
                            <h2 className="text-[20px]   ">2019 - Now</h2>
                            <h2 className="text-[20px]">Adobe Company</h2>
                        </div>
                        <div className="box top-box rounded-2xl p-8  w-75  h-45 bg-gray">
                            <h1 className="text-yellow text-2xl font-semibold mb-4">Project Manager</h1>
                            <h2 className="text-[20px]   ">2019 - Now</h2>
                            <h2 className="text-[20px]">Adobe Company</h2>
                        </div>
                        <div className="box top-box rounded-2xl p-8  w-75  h-45 bg-gray">
                            <h1 className="text-yellow text-2xl font-semibold mb-4">Project Manager</h1>
                            <h2 className="text-[20px]   ">2019 - Now</h2>
                            <h2 className="text-[20px]">Adobe Company</h2>
                        </div>
                    </div>
                    <div className=" flex items-center">
                        <div className="h-4 w-4 rounded-sm bg-yellow rotate-45"></div>
                        <div className="h-[1px] w-40 bg-gray"></div>
                        <div className="h-4 w-4 rounded-sm bg-yellow rotate-45"></div>
                        <div className="h-[1px] w-40 bg-gray"></div>
                        <div className="h-4 w-4 rounded-sm bg-yellow rotate-45"></div>
                        <div className="h-[1px] w-40 bg-gray"></div>
                        <div className="h-4 w-4 rounded-sm bg-yellow rotate-45"></div>
                        <div className="h-[1px] w-40 bg-gray"></div>
                        <div className="h-4 w-4 rounded-sm bg-yellow rotate-45"></div>

                    </div>
                    <div className="flex gap-10">
                        <div className="box bottom-box rounded-2xl p-8  w-75  h-45 bg-gray">
                            <h1 className="text-yellow text-2xl font-semibold mb-4">Project Manager</h1>
                            <h2 className="text-[20px]   ">2019 - Now</h2>
                            <h2 className="text-[20px]">Adobe Company</h2>
                        </div>
                        <div className="box bottom-box rounded-2xl p-8  w-75  h-45 bg-gray">
                            <h1 className="text-yellow text-2xl font-semibold mb-4">Project Manager</h1>
                            <h2 className="text-[20px]   ">2019 - Now</h2>
                            <h2 className="text-[20px]">Adobe Company</h2>
                        </div>
                    </div>
                </div>
                <img src="images/right-cut.png" className="z-1 absolute right-0 translate-x-[52%] rotate-90  w-[100vh]" alt="" />
            </div>
            {/* My achievements  */}
            <div
                style={{ backgroundImage: "url('assets/backgrounds/facts.jpg')" }}
                className="min-w-[80rem] relative h-full flex flex-col justify-center items-center bg-center bg-cover bg-fixed bg-no-repeat"
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="flex gap-40">
                    <div className="box right-box w-40 h-40 rotate-45 rounded-2xl bg-gray flex items-center justify-center">
                        <div className="-rotate-45 text-center">
                            <h1 className="text-yellow text-2xl font-bold">13</h1>
                            <p className="text-white text-xl">Years Of</p>
                            <p className="text-white text-xl">Experience</p>
                        </div>
                    </div>

                    <div className="box right-box w-40 h-40 rotate-45 rounded-2xl bg-gray flex items-center justify-center">
                        <div className="-rotate-45 text-center">
                            <h1 className="text-yellow text-2xl font-bold">20</h1>
                            <p className="text-white text-xl">Completed</p>
                            <p className="text-white text-xl">Projects</p>
                        </div>
                    </div>

                    <div className="box right-box w-40 h-40 rotate-45 rounded-2xl bg-gray flex items-center justify-center">
                        <div className="-rotate-45 text-center">
                            <h1 className="text-yellow text-2xl font-bold">50+</h1>
                            <p className="text-white text-xl">Happy</p>
                            <p className="text-white text-xl">Clients</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-40 mt-10">
                    <div className="box right-box w-40 h-40 rotate-45 rounded-2xl bg-gray flex items-center justify-center">
                        <div className="-rotate-45 text-center">
                            <h1 className="text-yellow text-2xl font-bold">10</h1>
                            <p className="text-white text-xl">Awards</p>
                            <p className="text-white text-xl">Won</p>
                        </div>
                    </div>

                    <div className="box right-box w-40 h-40 rotate-45 rounded-2xl bg-gray flex items-center justify-center">
                        <div className="-rotate-45 text-center">
                            <h1 className="text-yellow text-2xl font-bold">24/7</h1>
                            <p className="text-white text-xl">Customer</p>
                            <p className="text-white text-xl">Support</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}