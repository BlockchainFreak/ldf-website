const events = [
    {
        name: "Visual Communication Convention",
        image: "/vcc.svg",
        description: "Get hands-on technical product training with over 30 instructor-led courses and interactive labs covering the entire Webex portfolio.",
    },
    {
        name: "Inspir-Ed: DESIGNing Education",
        image: "/sample-event-icon.svg",
        description: "Learn from the experts with over 40 breakout sessions on topics like AI, office transformation, sustainability, customer experience, and more.",
    },
    {
        name: "Tech Product Convention",
        image: "/sample-event-icon.svg",
        description: "Let loose and dance the night away with parties featuring DJ Graffiti and Alter Ego. Plus, experience the thrill of racing with our McLaren simulators.",
    },
] satisfies EventConventionCardProps[]

export default function EventConventions() {
    return (
        <section className="text-white font-georgia flex flex-col gap-8 p-4 lg:p-16" id="events">
            <h2 className="font-normal text-3xl">Event< br/> Conventions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {events.map((event, i) => (<EventConventionCard key={i} {...event}/>))}
            </div>
        </section>
    )    
}

type EventConventionCardProps = {
    image: string;
    name: string;
    description: string;
}

function EventConventionCard({ name, image, description }: EventConventionCardProps) {

    return (
        <div className="flex flex-col gap-4 bg-white p-6 flex-shrink-0 text-black rounded-3xl">
            <h3 className="text-3xl font-normal">{name}</h3>
            <p className="text-lg text-gray-500">{description}</p>
            {/* <div className="mx-32">
                <img src={image}/>
            </div> */}
        </div>
    )
}