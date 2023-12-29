export default function HeroSection() {
    return (
        <section className="flex justify-center">
            <div className="flex flex-col gap-12 w-80 lg:w-[44rem]">
                <div className="relative">
                    <div className="absolute">
                        <img src="/purple-stars.svg" className="relative bottom-10 right-10 w-16 lg:bottom-16 lg:right-12 lg:w-24"/>
                    </div>
                    <img src="/ldf-logo.svg" className="w-full"/>
                </div>
                <div className="w-full flex flex-col gap-16 items-center">
                    <div className="flex justify-between text-white w-80 font-SpaceGrotesk">
                        <span>JAN 19, 20, 21</span>
                        <span className="text-gray-400">|</span>
                        <span>LAHORE</span>
                        <span className="text-gray-400">|</span>
                        <span>ALHAMRA</span>
                    </div>
                    <button className="rounded-3xl py-4 px-6 bg-white hover:bg-slate-200 hover:scale-105 transition ease-in-out text-black w-48">
                        Register Now
                    </button>
                </div>
            </div>
        </section>
    )
}