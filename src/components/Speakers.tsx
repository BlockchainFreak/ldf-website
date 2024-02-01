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
        title: "Designing Opportunity: Accessibility of Higher Education in Pakistan"
    },
    {
        name: "Dr. Suleman Shahid",
        image: "/SBA.png",
        title: "Designing Opportunity: Accessibility of Higher Education in Pakistan"
    },
    {
        name: "Faizan Ahmed",
        image: "/SBA.png",
        title: "The Art of Storytelling"
    },
    {
        name: "Bilal Tanweer",
        image: "/SBA.png",
        title: "The Art of Storytelling"
    },
    {
        name: "Khadija Shafiq",
        image: "/SBA.png",
        title: "Designing a Vertical Pakistan"
    },
    {
        name: "Ammar Rasool",
        image: "/SBA.png",
        title: "Designing a Cinema of Resistance"
    },
    {
        name: "Usama Lali",
        image: "/SBA.png",
        title: "Designing a Cinema of Resistance"
    },
    {
        name: "Dr. Murtaza Taj",
        image: "/SBA.png",
        title: "Preserving Pakistani Heritage Sites"
    },
    {
        name: "Dr. Ali Cheema",
        image: "/SBA.png",
        title: "Empowering Innovators: LUMS, ITU, BNU"
    },
    {
        name: "Adnan Noor",
        image: "/SBA.png",
        title: "Empowering Innovators: LUMS, ITU, BNU"
    },
    {
        name: "Moeed Yusuf",
        image: "/SBA.png",
        title: "Empowering Innovators: LUMS, ITU, BNU"
    },
    {
        name: "Hassan Tahir Latif",
        image: "/SBA.png",
        title: "Publishing Personal Narratives"
    },
    {
        name: "Mina Malik Hussain",
        image: "/SBA.png",
        title: "Publishing Personal Narratives"
    },
    {
        name: "Imrana Ashraf",
        image: "/SBA.png",
        title: "Designing Accessible Education in the Sciences: A Future for Women"
    },
    {
        name: "Qasim Mehmood",
        image: "/SBA.png",
        title: "Designing Accessible Education in the Sciences: A Future for Women"
    },
    {
        name: "Maria Yzeul",
        image: "/SBA.png",
        title: "Designing Accessible Education in the Sciences: A Future for Women"
    },
    {
        name: "Nigham Arshad",
        image: "/SBA.png",
        title: "Designing Accessible Education in the Sciences: A Future for Women"
    },
    {
        name: "Haris Mehmood",
        image: "/SBA.png",
        title: "LUMS Kahani"
    },
    {
        name: "Minahil Noor",
        image: "/SBA.png",
        title: "LUMS Kahani"
    },
    {
        name: "Saim Rehman",
        image: "/SBA.png",
        title: "LUMS Kahani"
    },
    {
        name: "Emil Hasnain",
        image: "/SBA.png",
        title: "LUMS Kahani"
    },
    {
        name: "Dr Ali Usman Qasmi",
        image: "/SBA.png",
        title: "Lahore Kay Rastay"
    },
    {
        name: "Ghazi Taimoor",
        image: "/SBA.png",
        title: "Lahore Kay Rastay"
    },
    {
        name: "Zeerak Ahmad",
        image: "/SBA.png",
        title: "Humanizing Technology"
    },
    {
        name: "Usama Waheed",
        image: "/SBA.png",
        title: "Humanizing Technology"
    },
    {
        name: "Dr. Mohammad Zahid",
        image: "/SBA.png",
        title: "Cybersecurity in an AI Dominated Future"
    },
    {
        name: "Hashim Mufti",
        image: "/SBA.png",
        title: "Cybersecurity in an AI Dominated Future"
    },
    {
        name: "Uzair Hasnain",
        image: "/SBA.png",
        title: "Notion as a Tool For Learning Acceleration"
    },
    {
        name: "Usman Aslam",
        image: "/SBA.png",
        title: "Notion as a Tool For Learning Acceleration"
    },
    {
        name: "Saboor Akram",
        image: "/SBA.png",
        title: "A Picture is Worth a Thousand Prompts"
    },
    {
        name: "Subhan Noor",
        image: "/SBA.png",
        title: "A Picture is Worth a Thousand Prompts"
    },
    {
        name: "Imtiaz Khan",
        image: "/SBA.png",
        title: "Transforming Supply Chain: Ethical Fashion & Conscious Consumption through Blockchain Technology"
    },
    {
        name: "Yasir Rasool",
        image: "/SBA.png",
        title: "Transforming Supply Chain: Ethical Fashion & Conscious Consumption through Blockchain Technology"
    },
    {
        name: "Dr. Zafar Javed",
        image: "/SBA.png",
        title: "Transforming Supply Chain: Ethical Fashion & Conscious Consumption through Blockchain Technology"
    },
    {
        name: "Muhammad Ali Tariq",
        image: "/SBA.png",
        title: "Philosophy of Design Communities in Pakistan"
    },
    {
        name: "Ali Imran Zuberi",
        image: "/SBA.png",
        title: "Philosophy of Design Communities in Pakistan"
    },
    {
        name: "Nida Fatima Rizvi",
        image: "/SBA.png",
        title: "Philosophy of Design Communities in Pakistan"
    },
] satisfies SpeakerCardProps[]

export default function SpeakersSection() {

    return (
        <div className="flex flex-col gap-8 px-4 lg:px-16 text-white">
            <div className="flex justify-between">
                <h2 className="text-4xl font-normal font-georgia">Speakers</h2>
                <a href="/speakers">
                    <button className="bg-white py-4 px-12 text-lg font-semibold text-black rounded-[4rem]">View All Speakers →</button>
                </a>
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