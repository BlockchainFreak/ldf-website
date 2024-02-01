const sponsors = [
    "/sponsors/tevta.jpg",
    "/sponsors/risk-associates.png",
    "/sponsors/beechtree.jpg",
    "/sponsors/tower21.jpg",
]

const partners = [
    "/partners/FOF_Lahore.png",
    "/partners/designbaithak.png",
    "/partners/notion.png",
]

export default function Sponsors() {
    return (
        <section className="bg-[#f2f2f2] w-full p-4 lg:p-10" id="sponsors">
            <div className="container">
                <h2 className="text-start text-3xl weight-400 text-[#181818] font-georgia pt-10 mb-2">
                    SPONSORS
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-16">
                    {
                        sponsors.map((sponsor) => (
                            <div key={sponsor} className="flex justify-center items-center">
                                <img src={sponsor} width="200" height="150" />
                            </div>
                        ))
                    }
                </div>
                <h2 className="text-start text-3xl weight-400 text-[#181818] font-georgia pt-10 mb-2">
                    PARTNERS
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-16">
                    {
                        partners.map((partner) => (
                            <div key={partner} className="flex justify-center items-center">
                                <img src={partner} width="200" height="150" />
                            </div>
                        ))
                    }
                </div>
                <hr className="my-10" />
                <div className="container mx-auto p-4 ">
                    <div className="max-w-5xl mx-auto ">
                        <div className="bg-black rounded-xl shadow-md overflow-hidden py-6">
                            <div className="flex flex-col-reverse md:flex-row justify-between">
                                <div className="ml-10 mt-12">
                                    <h2 className="text-3xl text-white mb-2 font-georgia weight-400">Become a Sponsor</h2>
                                    <p className="text-[#767676] mb-5 font-georgia w-2/3">Reach out to our Sponsorship Team to learn more about sponsorship opportunities for the Lahore Design Festival.</p>
                                    <a href="/contact">
                                        <button className="text-sm font-bold bg-black text-white border-2 border-white px-4 py-2 rounded-3xl font-SpaceGrotesk hover:bg-white hover:text-black transition duration-300">
                                            Contact Us →
                                        </button>
                                    </a>
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