import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const data = [
    {
        "question": "What is the Lahore Design Festival?",
        "answer": "The Lahore Design Festival is an annual event that showcases the importance and influence of design in various industries. It brings together design professionals, enthusiasts, and students for a series of workshops, exhibitions, lectures, and networking opportunities."
    },
    {
        "question": "When and where will the Lahore Design Festival take place?",
        "answer": "The Lahore Design Festival is scheduled for January 21, 2024, at the Alhamra Arts Center, which is a premier cultural and arts venue located in the heart of Lahore."
    },
    {
        "question": "How can I purchase tickets for the Lahore Design Festival?",
        "answer": "Tickets for the festival can be acquired through the official Lahore Design Festival website or at authorized ticketing outlets. We recommend purchasing tickets early to take advantage of any early bird specials."
    },
    {
        "question": "Are there any discounts for students or groups?",
        "answer": "Yes, we offer discounted rates for students with a valid ID and for groups. For more information on group discounts, please contact our ticketing support team."
    },
    {
        "question": "What types of events are included in the festival?",
        "answer": "Attendees can look forward to a diverse range of events, including interactive workshops, inspiring keynote presentations, panel discussions on current design trends, an exhibition of innovative design works, and plenty of networking opportunities with industry leaders."
    },
    {
        "question": "Will there be opportunities to meet with professional designers?",
        "answer": "Yes, the festival will facilitate meetings with professional designers through scheduled meet-and-greets, portfolio review sessions, and informal gatherings, providing attendees with valuable industry insights and connections."
    },
    {
        "question": "Is the Alhamra Arts Center accessible for attendees with disabilities?",
        "answer": "Absolutely, the Alhamra Arts Center is fully accessible for attendees with disabilities. The venue includes features such as wheelchair ramps, accessible seating, and restrooms designed to accommodate all our guests comfortably."
    }
]

export default function FAQs() {
    return (
        <section className="flex flex-col items-center px-16 py-12 font-georgia bg-[#f2f2f2]">
            <div className="w-full gap-2 mb-12">
                <p className="text-4xl mb-4">FAQs</p>
                <p className="text-2xl text-zinc-500">All your most pressing questions, answered.</p>
            </div>
            <div className="mx-12">
                <Accordion type="single" collapsible className="font-SpaceGrotesk w-96 lg:w-[64rem]">
                    {
                        data.map((item, index) => (
                            <AccordionItem className="bg-white px-4 first:rounded-t-3xl last:rounded-b-3xl"
                                key={`item-${index}`} value={`item-${index}`}
                            >
                                <AccordionTrigger className="font-medium">{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </section>
    )
}
