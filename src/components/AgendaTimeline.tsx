import { useState } from "react";
import { useSpring, animated } from "@react-spring/web"

const dates = ["02", "03", "04"];

const timelineData = [
    [
        { time: "7:30 am - 9:00 am", label: "Breakfast" },
        {
            time: "8:00 am - 5:30 pm",
            label: "Hands on Labs & Ask the Experts bar",
        },
        {
            time: "9:00 am - 10:45 am",
            label: "Opening Keynote* - Feat, Sahibzada Hassan Mansoor Bugvi",
        },
        { time: "10:45 am - 5:30 pm", label: "Solution Showcase and Expo" },
        {
            time: "11:15 am - 5:00 pm",
            label: "Breakout Sessions across 4 Tracks",
        },
        { time: "12:00 pm - 2:00 pm", label: "Lunch" },
        {
            time: "6:00 pm - 10:00 pm",
            label: "Dinner & Special Event w/ Alter Ego & DJ Graffiti",
        },
    ],
    [
        { time: "7:30 am - 9:00 am", label: "Continental Breakfast" },
        { time: "8:00 am - 4:00 pm", label: "Developer Workshops" },
        { time: "9:15 am - 10:00 am", label: "Morning Keynote - Feat, Dr. Ayesha Khanna" },
        { time: "10:15 am - 4:30 pm", label: "Tech Talks & Panels" },
        { time: "12:00 pm - 1:30 pm", label: "Networking Lunch" },
        { time: "4:30 pm - 6:00 pm", label: "Poster Sessions" },
        { time: "7:00 pm - 9:00 pm", label: "Gala Dinner & Awards Ceremony" },
    ],
    [
        { time: "7:30 am - 9:00 am", label: "Networking Breakfast" },
        { time: "9:00 am - 12:00 pm", label: "Industry Roundtables" },
        { time: "10:00 am - 3:00 pm", label: "Innovation Fair" },
        { time: "12:00 pm - 1:00 pm", label: "Lunch Break" },
        {
            time: "1:00 pm - 2:30 pm",
            label: "Closing Keynote - Feat, Dr. Neil deGrasse Tyson",
        },
        { time: "2:45 pm - 4:00 pm", label: "Final Networking & Goodbyes" },
        { time: "4:00 pm - 4:30 pm", label: "Conference Wrap-up" },
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
            <div className="bg-black h-[40rem] w-full p-4 lg:p-12 bg-opacity-50 flex lg:justify-end">
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
                                        timelineData[selectedDate].map((slot) => (
                                            <tr key={slot.time} className="border-b-2 border-violet-200 border-solid font-normal text-sm lg:text-md">
                                                <td className="lg:py-4">{slot.time}</td>
                                                <td className="lg:py-4 break-words max-w-32 lg:max-w-96">{slot.label}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </animated.div>
                        {/* <div>
                            * These sessions will be live streamed for virtual attendees
                            <br />
                            All times listed in Pacific Daylight Time and subject to
                            change
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
