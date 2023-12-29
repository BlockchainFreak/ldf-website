import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const cards = [
    { bg: "/tertiary-card-1.svg", text: "Hear from the biggest luminaries in AI" },
    { bg: "/tertiary-card-2.svg", text: "See our groundbreaking AI roadmap" },
    { bg: "/tertiary-card-3.svg", text: "Attend a world- class AI seminar" },
    { bg: "/tertiary-card-1.svg", text: "Hear from the biggest luminaries in AI" },
    { bg: "/tertiary-card-2.svg", text: "See our groundbreaking AI roadmap" },
    { bg: "/tertiary-card-3.svg", text: "Attend a world- class AI seminar" },
]

export default function BrandScrollableSection() {

    return (
        <div className="flex flex-col gap-8 p-4 lg:p-16 bg-slate-900 text-white">
            <h2 className="text-4xl font-normal font-georgia">RESHAPING THE INDUSTRY WITH RESPONSIBLE AI</h2>
            <hr />
            <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
                <CarouselPrevious />
                <CarouselContent>
                    {cards.map((card, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="border-black rounded-3xl"
                                    style={{ backgroundImage: `url("${card.bg}")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                    <CardContent className="flex aspect-square p-12">
                                        <span className="text-white text-4xl font-semibold">{card.text}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext />
            </Carousel>
        </div>
    )
}
