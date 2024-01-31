import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

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
    {
        name: "Syed Babar Ali",
        image: "/SBA.png",
        title: "Businessman, Philanthropist, Educationist"
    },
] satisfies SpeakerCardProps[]

export default function SpeakersSection() {

    return (
        <div className="flex flex-col gap-8 px-4 lg:px-16 text-white">
            <div className="flex justify-between">
                <h2 className="text-4xl font-normal font-georgia">Keynote Speakers</h2>
                <button className="bg-white py-4 px-12 text-lg font-semibold text-black rounded-[4rem]">View All Speakers →</button>
            </div>
            <hr />
            <Carousel className="w-full"
                opts={{ loop: true, align: "start" }}
                plugins={[Autoplay({ delay: 2000 })]}
            >
                <CarouselPrevious />
                <CarouselContent>
                    {speakers.map((card, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                            <SpeakerCard {...card} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext />
            </Carousel>
        </div>
    )
}

type SpeakerCardProps = {
    image: string;
    name: string;
    title: string;
}

function SpeakerCard({ name, image, title }: SpeakerCardProps) {
    return (
        <Card className="rounded-3xl bg-black border-black">
            <CardContent className="flex flex-col p-4 gap-4">
                <img src={image} className="w-full" />
                <div className="font-georgia font-normal mt-8 text-white">
                    <h5 className="text-2xl mb-4">{name}</h5>
                    <p className="text-xl">{title}</p>
                </div>
            </CardContent>
        </Card>
    )
}