export default function Employ() {
    return (

            <div
                style={{ backgroundImage: "url('assets/backgrounds/testimonials.jpg')" }}
                className="p-[10vw] relative h-full flex flex-col justify-center items-center bg-center bg-cover bg-fixed bg-no-repeat"
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="flex gap-40 mt-10">
                    <div className="box right-box  max-w-[25rem] p-10 rounded-2xl bg-gray relative ">
                        <p className="text-[18px] livic mb-10 italic leading-10">" I worked with Steven, he was very helpful and fast to respond to my inquiry to help with Wordpress website issues and all technical problems. "</p>
                        <p className="text-[18px] livic text-yellow">Jasmin Aniston</p>
                        <p className="text-[18px] livic">Director - Adobe</p>
                        <img src="assets/testimonials/testimonial-1.jpg" className="h-25 w-25 absolute rounded-full -right-[33px]" alt="" />
                    </div>

                    <div className="box right-box  max-w-[25rem] p-10 rounded-2xl relative bg-gray">
                        <p className="text-[18px] livic mb-10 italic leading-10">" I worked with Steven, he was very helpful and fast to respond to my inquiry to help with Wordpress website issues and all technical problems. "</p>
                        <p className="text-[18px] livic text-yellow">Jasmin Aniston</p>
                        <p className="text-[18px] livic">Director - Adobe</p>
                        <img src="assets/testimonials/testimonial-2.jpg" className="h-25 w-25 absolute rounded-full -right-[33px]" alt="" />

                    </div>
                </div>
            </div>
    )
}