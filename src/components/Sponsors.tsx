export default function Sponsors() {
    return (
        <section className="bg-[#f2f2f2] w-full p-4 lg:p-16" id="sponsors">
            <h2 className="text-start ml-8 text-3xl weight-400 text-[#181818] font-georgia pt-10 mb-2">
                SPONSORS
            </h2>
            <div className="container">
                <h3 className="text-xl ml-0 mb-8 font-georgia weight-400 text-[#767676] ">Platinum</h3>
                <div className="flex flex-col items-start">
                    <img src="sponsors/sp1.png" alt="Placeholder logo" className="w-25 h-25  mb-5" />
                    <p className="text-left font-georgia text-sm text-[#767676] w-1/2 mb-3">Whether your team works on a different floor or around the
                        globe, distance doesn’t matter. They can collaborate as if
                        sitting in the same room. Let our experts work with you to
                        solve your voice and collaboration challenges and accelerate
                        outcomes. Your business deserves the AT&T Business
                        difference.</p>
                </div>
                <hr className="mb-4" />
                <h3 className="text-xl ml-0 mb-2 font-georgia weight-400 text-[#767676] ">Gold</h3>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                    <img src="sponsors/sp2.png" alt="Placeholder logo" className="w-20 h-20 mx-auto" />
                    <img src="sponsors/sp3.png" alt="Placeholder logo" className="w-20 h-20 mx-auto" />
                    <img src="sponsors/sp4.png" alt="Placeholder logo" className="w-30 h-20 mx-auto" />
                    <img src="sponsors/sp15.png" alt="Placeholder logo" className="w-30 h-15 mx-auto" />
                    <img src="sponsors/sp13.png" alt="Placeholder logo" className="w-25 h-15 mx-auto" />
                    <img src="sponsors/sp7.png" alt="Placeholder logo" className="w-20 h-20 mx-auto" />
                </div>
                <hr className="mb-4" />
                <h3 className="text-xl ml-0 mb-2 font-georgia weight-400 text-[#767676] ">Silver</h3>
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <img src="sponsors/sp8.png" alt="Placeholder logo" className="w-20 h-20 mx-auto" />
                    <img src="sponsors/sp9.png" alt="Placeholder logo" className="w-20 h-20 mx-auto" />
                    <img src="sponsors/sp14.png" alt="Placeholder logo" className="w-20 h-20 mx-auto" />
                </div>
                <hr className="mb-4" />
                <h3 className="text-xl ml-0 mb-2 font-georgia weight-400 text-[#767676]">Bronze</h3>
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <img src="sponsors/sp10.png" alt="Placeholder logo" className="w-20 h-20 mx-auto" />
                    <img src="sponsors/sp11.png" alt="Placeholder logo" className="w-20 h-20 mx-auto" />
                    <img src="sponsors/sp12.png" alt="Placeholder logo" className="w-20 h-20 mx-auto" />
                </div>
                <hr className="mb-10" />
                <div className="container mx-auto p-4 ">
                    <div className="max-w-5xl mx-auto ">
                        <div className="bg-black rounded-xl shadow-md overflow-hidden py-6">
                            <div className="flex flex-col-reverse md:flex-row justify-between">
                                <div className="ml-10 mt-12">
                                    <h2 className="text-3xl text-white mb-2 font-georgia weight-400">Become a Sponsor</h2>
                                    <p className="text-[#767676] mb-5 font-georgia w-2/3">Reach out to our Sponsorship Team to learn more about sponsorship opportunities for the Lahore Design Festival.</p>
                                    <button className="text-sm font-bold bg-black text-white border-2 border-white px-4 py-2 rounded-3xl font-SpaceGrotesk hover:bg-white hover:text-black transition duration-300">
                                        Contact Us →
                                    </button>
                                </div>
                                <div className="flex justify-center px-8">
                                    <img src="/sponsor-img.png" width="200" height="150" className="my-10 float-right mr-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}