export default function Resume() {
    return (
        <div className=" flex-shrink-0 h-screen flex items-center">
            <div className="relative flex items-center">
                <h1 className="text-6xl font-bold -rotate-90">My Resume</h1>
                <div className=" flex flex-col gap-10 justify-center items-center">
                    <div className="flex gap-10">
                        <div className="rounded-2xl p-8  w-75  h-45 bg-[#0B0B0B]">
                            <h1 className="text-yellow text-2xl font-semibold mb-4">Project Manager</h1>
                            <h2 className="text-[20px]   ">2019 - Now</h2>
                            <h2 className="text-[20px]">Adobe Company</h2>
                        </div>
                        <div className="rounded-2xl p-8  w-75  h-45 bg-[#0B0B0B]">
                            <h1 className="text-yellow text-2xl font-semibold mb-4">Project Manager</h1>
                            <h2 className="text-[20px]   ">2019 - Now</h2>
                            <h2 className="text-[20px]">Adobe Company</h2>
                        </div>
                        <div className="rounded-2xl p-8  w-75  h-45 bg-[#0B0B0B]">
                            <h1 className="text-yellow text-2xl font-semibold mb-4">Project Manager</h1>
                            <h2 className="text-[20px]   ">2019 - Now</h2>
                            <h2 className="text-[20px]">Adobe Company</h2>
                        </div>
                    </div>
                    <div className=" flex items-center">
                        <div className="h-4 w-4 rounded-sm bg-yellow rotate-45"></div>
                        <div className="h-[1px] w-40 bg-gray-600"></div>
                        <div className="h-4 w-4 rounded-sm bg-yellow rotate-45"></div>
                        <div className="h-[1px] w-40 bg-gray-600"></div>
                        <div className="h-4 w-4 rounded-sm bg-yellow rotate-45"></div>
                        <div className="h-[1px] w-40 bg-gray-600"></div>
                        <div className="h-4 w-4 rounded-sm bg-yellow rotate-45"></div>
                        <div className="h-[1px] w-40 bg-gray-600"></div>
                        <div className="h-4 w-4 rounded-sm bg-yellow rotate-45"></div>

                    </div>
                    <div className="flex gap-10">
                        <div className="rounded-2xl p-8  w-75  h-45 bg-[#0B0B0B]">
                            <h1 className="text-yellow text-2xl font-semibold mb-4">Project Manager</h1>
                            <h2 className="text-[20px]   ">2019 - Now</h2>
                            <h2 className="text-[20px]">Adobe Company</h2>
                        </div>
                        <div className="rounded-2xl p-8  w-75  h-45 bg-[#0B0B0B]">
                            <h1 className="text-yellow text-2xl font-semibold mb-4">Project Manager</h1>
                            <h2 className="text-[20px]   ">2019 - Now</h2>
                            <h2 className="text-[20px]">Adobe Company</h2>
                        </div>
                    </div>
                </div>
                <img src="images/right-cut.png" className="absolute right-0 translate-x-[52%] rotate-90  w-[100vh]" alt="" />

            </div>
            <div style={{ backgroundImage: "url('assets/backgrounds/facts.jpg')" }}
                className="w-[100vw] h-full bg-center bg-cover bg-fixed bg-no-repeat" >
            </div>
            <div className="w-[100vw] h-full bg-black">

            </div>
        </div>
    )
}