const speakers = [
    {
        name: "Syed Babar Ali",
        image: "/SBA.png",
        title: "Businessman, Philanthropist, Educationist"
    },
    {
        name: "Syed Babar Ali",
        image: "/SBA.png",
        title: "Businessman, Philanthropist, Educationist"
    },
    {
        name: "Syed Babar Ali",
        image: "/SBA.png",
        title: "Businessman, Philanthropist, Educationist"
    },
    {
        name: "Syed Babar Ali",
        image: "/SBA.png",
        title: "Businessman, Philanthropist, Educationist"
    },
] satisfies SpeakerCardProps[]

export default function SpeakersSection() {
    return (
        <section className="flex flex-col gap-8 p-4 lg:p-16 text-white">
            <div className="flex justify-between">
                <h2 className="text-4xl font-normal font-georgia">Visionary Speakers</h2>
                <button className="bg-white py-4 px-12 text-lg font-semibold text-black rounded-[4rem]">View All Speakers →</button>
            </div>

            <div className="overflow-x-auto overflow-y-auto">
                <div className="flex gap-6">
                    {speakers.map((speaker, i) => <SpeakerCard {...speaker} key={i} />)}
                </div>
            </div>
        </section>
    )
}

type SpeakerCardProps = {
    image: string;
    name: string;
    title: string;
}

function SpeakerCard({ name, image, title }: SpeakerCardProps) {
    return (
        <div className="flex flex-col flex-shrink-0 w-80 gap-12 bg-black rounded-3xl p-4" id="speakers">
            <div>
                <img src={image} />
            </div>
            <div className="font-georgia font-normal mb-8">
                <h5 className="text-2xl mb-4">{name}</h5>
                <p className="text-xl">{title}</p>
            </div>
        </div>
    )
}