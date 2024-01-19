const brands = [
    {
        person: "Asif Akram",
        logo: "/systems-logo.svg",
        image: "/asif-akram.png",
        title: "Opening Keynote: The Future of Work, Workspaces, and Remote Work",
        position: "COO, Systems Limited"
    },
    {
        person: "Asif Akram",
        logo: "/systems-logo.svg",
        image: "/asif-akram.png",
        title: "Opening Keynote: The Future of Work, Workspaces, and Remote Work",
        position: "COO, Systems Limited"
    },
    {
        person: "Asif Akram",
        logo: "/systems-logo.svg",
        image: "/asif-akram.png",
        title: "Opening Keynote: The Future of Work, Workspaces, and Remote Work",
        position: "COO, Systems Limited"
    },
] satisfies BrandCardProps[]

export default function BrandsSection() {
    return (
        <section className="flex flex-col gap-8 p-4 lg:p-16 text-white">
            <div className="flex justify-between">
                <h2 className="text-4xl font-normal font-georgia">Our Partners</h2>
                <button className="bg-white py-4 px-12 text-lg font-semibold text-black rounded-[4rem]">View All Speakers →</button>
            </div>

            <div className="overflow-x-auto overflow-y-auto">
                <div className="flex gap-6">
                    {brands.map((brand, i) => <BrandsCard {...brand} key={i} />)}
                </div>
            </div>
        </section>
    )
}

type BrandCardProps = {
    title: string;
    person: string;
    position: string;
    logo: `/${string}`;
    image: `/${string}`;
}

function BrandsCard({ person, position, logo, image, title }: BrandCardProps) {
    return (
        <div className="flex flex-col flex-shrink-0 w-80 lg:w-[28rem] gap-2 bg-black rounded-3xl font-gerorgia" id="brands">
            <div className="flex flex-col gap-2 p-4">
                <div className="w-36">
                    <img src={logo} />
                </div>
                <h3 className="text-2xl mb-4 font-normal">{title}</h3>
                <div className="font-normal mb-8 text-base">
                    <h5>{person}</h5>
                    <p>{position}</p>
                </div>
            </div>
            <div>
                <img src={image} />
            </div>
        </div>
    )
}