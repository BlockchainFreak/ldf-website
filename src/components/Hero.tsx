export default function HeroSection() {
    return (
        <section className="flex justify-center mt-4">
            <div className="flex flex-col gap-8 w-80 lg:w-[32rem]">
                <div className="relative">
                    <div className="absolute">
                        <img src="/purple-stars.svg" className="relative bottom-10 lg:bottom-8 right-10 lg:right-12 w-16 lg:w-24"/>
                    </div>
                    <img src="/hero-logo.png" className="w-full"/>
                </div>
                <div className="w-full flex flex-col gap-8 items-center">
                    <div className="flex justify-between text-white w-80 font-SpaceGrotesk">
                        <span>FEB 02, 03, 04</span>
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