export default function CTA() {
    return (
        <section className="container font-SpaceGrotesk text-white">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4">
                <div className="bg-[rgb(24,24,24)] pt-10 pb-16 px-8 rounded-xl col-span-2">
                    <p className="text-lg leading-loose px-5">Be part of the LDF experience!Engage with AI pioneers, witness cutting-edge audio-video advancements, and explore our transformation of hybrid work and customer experience. </p><br />
                    <p className="text-lg leading-loose py-10 px-5"> Don't miss out on 40+ breakout sessions, 30 technical training courses, and insights from top-tier customer speakers.</p>
                </div>
                <TicketCard passName="One Day Pass" />
                <TicketCard passName="Full Day Pass" />
            </div>
        </section>
    )
}

type TicketCardProps = {
    passName: string
}

function TicketCard({ passName }: TicketCardProps) {
    return (
        <div className="bg-black border border-slate-500 border-solid hover:scale-105 p-4 rounded-xl relative transition ease-linear">
            <div className="relative">
                <img src="/ticket-frame.svg" alt="Image" className="w-full h-auto" />
                <h5 className="text-lg font-medium mb-4 absolute top-2 left-4">{passName}</h5>
            </div>
            <p className="leading-loose mb-8 text-xl px-2 font-georgia">Attend the event in Lahore, Pakistan and get access to the full festival.</p>
            <div className="text-sm font-bold flex justify-end">Register Now</div>
        </div>
    )
}