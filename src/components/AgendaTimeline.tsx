import { useState } from "react";
import { useSpring, animated } from "@react-spring/web"

const dates = ["02", "03", "04"];

const timelineData = [
    [
        {
            "TimeSpan": 2,
            "Time": "14:00 - 15:00",
            "Auditorium": "9-B2",
            "Panel Name": "Designing Opportunity: Accessibility of Higher Education in Pakistan",
            "Panelists": "Syed Babar Ali, Dr. Suleman Shahid",
            "Moderator": "Taneer Jannat"
        },
        {
            "Auditorium": "B2",
            "Panel Name": "The Art of Storytelling",
            "Panelists": "Faizan Ahmad, Bilal Tanweer",
            "Moderator": "Salman Tausene Khwaja"
        },
        {
            "TimeSpan": 2,
            "Time": "16:00 - 17:00",
            "Auditorium": "NIB",
            "Panel Name": "Preserving Pakistani Heritage Sites",
            "Panelists": "Dr. Murtaza Taj",
            "Moderator": "Ibrahim Iftikhar"
        },
        {
            "Auditorium": "SS",
            "Panel Name": "Designing a Vertical Pakistan",
            "Panelists": "Noor Maneka, Adhar Malik and Fatima Usman",
            "Moderator": "Khadija Shafiq"
        },
        {
            "Time": "18:00 - 19:00",
            "Auditorium": "SS",
            "Panel Name": "Designing a Cinema of Resistance",
            "Panelists": "Ammar Rasool, Usama Lali",
            "Moderator": "Mashal Fatima Rizvi"
        }
    ],
    [
        {
            "Time": "12:00 - 13:00",
            "Auditorium": "B3",
            "Panel Name": "Empowering Innovators: LUMS, ITU, BNU",
            "Panelists": "Dr. Ali Cheema, Adnan Noor, Moeed Yusuf",
            "Moderator": "Taneer Jannat"
        },
        {
            "Time": "13:00 - 14:00",
            "Auditorium": "SS",
            "Panel Name": "Beyond Degrees: Unlocking Potential in Pakistan",
            "Panelists": "Engnr. Qurat ul Ain Memon",
            "Moderator": "Ayesha Amir"
        },
        {
            "Time": "14:00 - 15:00",
            "Auditorium": "B2",
            "Panel Name": "Publishing Personal Narratives",
            "Panelists": "Hassan Tahir Latif, Mina Malik Hussain",
            "Moderator": "Zain Alizai"
        },
        {
            "TimeSpan": 2,
            "Time": "16:00 - 17:00",
            "Auditorium": "SS",
            "Panel Name": "Designing Accessible Education in the Sciences: A Future for Women",
            "Panelists": "Imrana Ashraf, Qasim Mehmood, Maria Yzuel, Nigum Arshed",
            "Moderator": "Malaik Kabir"
        },
        {
            "Auditorium": "NIB",
            "Panel Name": "LUMS Kahani",
            "Panelists": "Haris Mehmood, Minahil Noor, Saim Rehman, Emil Hasnain",
            "Moderator": "Owais Sabri"
        },
        {
            "Time": "18:00 - 19:00",
            "Auditorium": "B2",
            "Panel Name": "Lahore Kay Rastay",
            "Panelists": "Dr Ali Usman Qasmi, Ghazi Taimoor",
            "Moderator": "Musfirah Khurshid"
        }
    ],
    [
        {
            "TimeSpan": 2,
            "Time": "12:00 - 13:00",
            "Auditorium": "SS",
            "Panel Name": "Humanizing Technology",
            "Panelists": "Zeerak Ahmad, Usama Waheed",
            "Moderator": "Saad Hasnain"
        },
        {
            "Auditorium": "B3",
            "Panel Name": "Surviving the Start-Up Ecosystem of Pakistan",
            "Panelists": "SadaPay, Cardpay, Pattern App, and LCE",
            "Moderator": "Hashir Bin Nasir"
        },
        {
            "TimeSpan": 2,
            "Time": "14:00 - 15:00",
            "Auditorium": "SS",
            "Panel Name": "Cybersecurity in an AI Dominated Future",
            "Panelists": "Dr. Mohammad Zahid, Hashim Mufti",
            "Moderator": "Anam Tahir"
        },
        {
            "Auditorium": "B2",
            "Panel Name": "Notion as a Tool For Learning Acceleration",
            "Panelists": "Uzair Hasnain, Usman Aslam",
            "Moderator": "Arsalan Abid"
        },
        {
            "TimeSpan": 3,
            "Time": "16:00 - 17:00",
            "Auditorium": "B2",
            "Panel Name": "A Picture is Worth a Thousand Prompts",
            "Panelists": "Saboor Akram, Subhan Noor",
            "Moderator": "Laiba Shahid"
        },
        {
            "Auditorium": "SS",
            "Panel Name": "Transforming Supply Chain: Ethical Fashion & Conscious Consumption through Blockchain Technology",
            "Panelists": "Imtiaz Khan, Yasir Rasool, Dr. Zafar Javed",
            "Moderator": "Ahmad Mukhtar Bhatti"
        },
        {
            "Auditorium": "A-11",
            "Panel Name": "Philosophy of Design Communities in Pakistan",
            "Panelists": "FOF Team: Muhammad Ali Tariq, Ali Imran Zuberi, Nida Fatima Rizvi",
            "Moderator": "Sahibzada Hassan Mansoor Bugvi, Maham Ahmad Bhimra"
        }
    ],
];


export default function AgendaTimeline() {

    const [selectedDate, setSelectedDate] = useState(0)

    const fadeInAndGrow = useSpring({
        from: { opacity: 0, transform: 'scale(0.5)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { tension: 300, friction: 20, duration: 400 }, // Customize the spring dynamics
        reset: true, // Reset the animation when the key changes
    });

    return (
        <section className="m-4 lg:m-16 flex flex-col gap-4 text-white">
            <div className="text-4xl font-normal font-georgia">AGENDA AT A GLANCE</div>
            <div className="bg-black min-h-[44rem] w-full p-4 lg:p-12 bg-opacity-50 flex lg:justify-end">
                <div
                    className="w-[84%] flex gap-4 justify-normal lg:justify-between font-georgia pt-8 flex-col lg:flex-row"
                >
                    <div className="w-64 flex flex-col gap-4 mr-4">
                        <div className="text-6xl">February</div>
                        <div className="flex flex-row justify-between">
                            {
                                dates.map((date, index) => (
                                    <div
                                        key={date}
                                        className={`cursor-pointer text-6xl ${index === selectedDate ? "text-white" : "text-gray-500"}`}
                                        onClick={() => setSelectedDate(index)}
                                    >
                                        {date}
                                    </div>
                                ))
                            }
                        </div>
                        <div className="font-bold font-SpaceGrotesk">
                            {`View Agenda →`}
                        </div>
                    </div>
                    <div className="w-[40rem] flex flex-col justify-between">
                        <animated.div style={fadeInAndGrow} className="origin-top-left">
                            <table className="w-96 lg:w-full overflow-scroll">
                                <tbody>
                                    {
                                        timelineData[selectedDate].map((slot, index) => (
                                            <tr key={index} className="border-b-2 border-violet-200 border-solid font-normal text-sm lg:text-md">
                                                {slot.Time && <td className="lg:py-4" rowSpan={slot.TimeSpan ?? 1}>{slot.Time}</td>}
                                                <td className="lg:py-4 break-words max-w-32 lg:max-w-96 font-sans">{slot["Auditorium"]}</td>
                                                <td className="lg:py-4 break-words max-w-32 lg:max-w-96">
                                                    <p>{slot["Panel Name"]}</p>
                                                    <p className="text-gray-400">{slot["Panelists"]}</p>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </animated.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
