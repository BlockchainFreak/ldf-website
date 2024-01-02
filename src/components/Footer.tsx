export default function Footer() {
    return (
        <footer className="border border-solid border-black w-full p-4 bg-black">
            <div className="container mx-auto mt-20 mb-4 flex flex-col items-center text-gray-400 text-xs md:text-sm">
                <div className="flex justify-between items-center w-full px-4 lg:px-16">
                    {/* Left Container: Logo, Mission Statement, and Social Media Icons */}
                    <div className="flex flex-col space-y-6 items-start">
                        <img src="/ldf-logo.svg" alt="Logo" className="h-12" />
                            <p className="text-gray-300 text-lg font-normal">Tech. Design. Reimagine.</p>
                            <div className="flex space-x-2">
                                <a href="#" className="text-white">
                                    <img src="/instagram.svg" alt="Instagram" className="h-9" />
                                </a>

                                <a href="#" className="text-white">
                                    <img src="/twitterx.svg" alt="X" className="h-8" />
                                </a>

                                <a href="#" className="text-white">
                                    <img src="/linkedin.svg" alt="LinkedIn" className="h-9" />
                                </a>

                                <a href="#" className="text-white">
                                    <img src="/tiktok.svg" alt="TikTok" className="h-9" />
                                </a>
                            </div>
                    </div>

                    {/* Right Container: Contact, Address, Email, and Phone Number */}
                    <div className="flex flex-col space-y-10">
                        <p className="text-[#BFB9FA] text-base font-normal">Contact</p>
                        <div className="flex flex-col space-y-2">
                            <p>LUMS, Sector U, DHA Phase V<br />Lahore, Pakistan</p><br />
                            <p>index@lums.edu.pk</p>
                            <p>+112 4322 221</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Links Container */}
                <div className="flex justify-between mt-16 w-64 md:w-96">
                    <a href="#">&copy;2023 Index </a>
                    <a href="#"> Code of Conduct </a>
                    <a href="#"> Privacy Policy </a>
                    <a href="#"> Contact us</a>
                </div>

            </div>

        </footer>

    )
}