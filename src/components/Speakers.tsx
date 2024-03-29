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
        image: "/speakers/SBA.png",
        title: "Designing Opportunity: Accessibility of Higher Education in Pakistan",
    },
    {
        name: "Dr. Suleman Shahid",
        image: "/speakers/DrSuleman.jpg",
        title: "Designing Opportunity: Accessibility of Higher Education in Pakistan",
    },
    {
        name: "Faizan Ahmed",
        image: "/speakers/FaizanAhmed.jpg",
        title: "The Art of Storytelling",
    },
    {
        name: "Bilal Tanweer",
        image: "/speakers/BilalTanweer.jpg",
        title: "The Art of Storytelling",
    },
    {
        name: "Noor Maneka",
        image: "/speakers/NoorManeka.png",
        title: "Designing a Vertical Pakistan",
    },
    {
        name: "Adhar Malik",
        image: "/speakers/AdharMalik.png",
        title: "Designing a Vertical Pakistan",
    },
    {
        name: "Fatima Usman",
        image: "/speakers/FatimaUsman.png",
        title: "Designing a Vertical Pakistan",
    },
    {
        name: "Ammar Rasool",
        image: "/speakers/AmmarRasool.jpg",
        title: "Designing a Cinema of Resistance",
    },
    {
        name: "Usama Lali",
        image: "/speakers/UsamaLali.jpg",
        title: "Designing a Cinema of Resistance",
    },
    {
        name: "Dr. Murtaza Taj",
        image: "/speakers/MurtazaTaj.jpg",
        title: "Preserving Pakistani Heritage Sites",
    },
    {
        name: "Dr. Ali Cheema",
        image: "/speakers/AliCheema.jpg",
        title: "Empowering Innovators: LUMS, ITU, BNU",
    },
    {
        name: "Adnan Noor",
        image: "/speakers/AdnanNoor.jpg",
        title: "Empowering Innovators: LUMS, ITU, BNU",
    },
    {
        name: "Moeed Yusuf",
        image: "/speakers/MoeedYusuf.jpg",
        title: "Empowering Innovators: LUMS, ITU, BNU",
    },
    {
        name: "Engnr. Qurat ul Ain Memon",
        image: "/speakers/QuratUlAinMemon.jpg",
        title: "Beyond Degrees: Unlocking Potential in Pakistan",
    },
    {
        name: "Hassan Tahir Latif",
        image: "/speakers/HassanTahir.jpg",
        title: "Publishing Personal Narratives",
    },
    {
        name: "Mina Malik Hussain",
        image: "/speakers/MinaMalik.jpg",
        title: "Publishing Personal Narratives",
    },
    {
        name: "Imrana Ashraf",
        image: "/speakers/ImranaAshraf.png",
        title: "Designing Accessible Education in the Sciences: A Future for Women",
    },
    {
        name: "Qasim Mehmood",
        image: "/speakers/Qasim.jpg",
        title: "Designing Accessible Education in the Sciences: A Future for Women",
    },
    {
        name: "Maria Yzeul",
        image: "/speakers/Maria.jpg",
        title: "Designing Accessible Education in the Sciences: A Future for Women",
    },
    {
        name: "Nigham Arshad",
        image: "/speakers/Nigum.jpg",
        title: "Designing Accessible Education in the Sciences: A Future for Women",
    },
    {
        name: "Haris Mehmood",
        image: "/speakers/HarisMahmood.jpeg",
        title: "LUMS Kahani",
    },
    {
        name: "Minahil Noor",
        image: "/speakers/Minahil.jpg",
        title: "LUMS Kahani",
    },
    {
        name: "Saim Rehman",
        image: "/speakers/Saim.jpg",
        title: "LUMS Kahani",
    },
    {
        name: "Emil Hasnain",
        image: "/speakers/Emil.jpg",
        title: "LUMS Kahani",
    },
    {
        name: "Dr Ali Usman Qasmi",
        image: "/speakers/AliQasmi.jpeg",
        title: "Lahore Kay Rastay",
    },
    {
        name: "Ghazi Taimoor",
        image: "/speakers/GhaziTaimoor.jpeg",
        title: "Lahore Kay Rastay",
    },
    {
        name: "Zeerak Ahmad",
        image: "/speakers/Zeerak.jpeg",
        title: "Humanizing Technology",
    },
    {
        name: "Usama Waheed",
        image: "/speakers/UsamaWaheed.jpg",
        title: "Humanizing Technology",
    },
    {
        name: "Dr. Mohammad Zahid",
        image: "/speakers/MuhammadZahid.png",
        title: "Cybersecurity in an AI Dominated Future",
    },
    {
        name: "Hashim Mufti",
        image: "/speakers/placeholder.webp",
        title: "Cybersecurity in an AI Dominated Future",
    },
    {
        name: "Uzair Hasnain",
        image: "/speakers/UzairHasnain.png",
        title: "Notion as a Tool For Learning Acceleration",
    },
    {
        name: "Usman Aslam",
        image: "/speakers/UsmanAslam.png",
        title: "Notion as a Tool For Learning Acceleration",
    },
    {
        name: "Saboor Akram",
        image: "/speakers/Saboorayy.jpg",
        title: "A Picture is Worth a Thousand Prompts",
    },
    {
        name: "Subhan Noor",
        image: "/speakers/SubhanNoor.jpg",
        title: "A Picture is Worth a Thousand Prompts",
    },
    {
        name: "Imtiaz Khan",
        image: "/speakers/Imtiaz.jpg",
        title: "Transforming Supply Chain: Ethical Fashion & Conscious Consumption through Blockchain Technology",
    },
    {
        name: "Yasir Rasool",
        image: "/speakers/YasirRasool.jpg",
        title: "Transforming Supply Chain: Ethical Fashion & Conscious Consumption through Blockchain Technology",
    },
    {
        name: "Dr. Zafar Javed",
        image: "/speakers/ZafarJaved.jpg",
        title: "Transforming Supply Chain: Ethical Fashion & Conscious Consumption through Blockchain Technology",
    },
    {
        name: "Muhammad Ali Tariq",
        image: "/speakers/MuhammadAliTariq.png",
        title: "Philosophy of Design Communities in Pakistan",
    },
    {
        name: "Ali Imran Zuberi",
        image: "/speakers/AliImranZuberi.png",
        title: "Philosophy of Design Communities in Pakistan",
    },
    {
        name: "Nida Fatima Rizvi",
        image: "/speakers/Nida_Photo.png",
        title: "Philosophy of Design Communities in Pakistan",
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