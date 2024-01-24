import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, type IParallax } from '@react-spring/parallax'
import IndustryGrid from "@/components/IndustryGrid.tsx"
import BrandsScollable from "@/components/BrandsScollable.tsx"
import AgendaTimeline from "@/components/AgendaTimeline.tsx"
import Header from "@/components/Header.tsx"
import Hero from "@/components/Hero.tsx"
import CTA from "@/components/CTA.tsx"
import Speakers from "@/components/Speakers.tsx"
import EventConventions from "@/components/EventConventions.tsx"
import Sponsors from "@/components/Sponsors.tsx"
import FAQs from "@/components/FAQs.tsx"
import Footer from "@/components/Footer.tsx"

export default function ParallaxSectionGroup() {
    const parallax = useRef<IParallax>(null!)
    return (
        <div className='w-screen h-screen bg-slate-950'>
            {/* <Parallax ref={parallax} pages={16}>
                <ParallaxLayer
                    offset={0}
                    speed={0.4}
                    factor={4}
                    style={{
                        backgroundImage: 'url(/stars.svg)',
                        backgroundSize: 'cover',
                    }}
                />
                <ParallaxLayer
                    offset={4}
                    speed={0.4}
                    factor={4}
                    style={{
                        backgroundImage: 'url(/stars.svg)',
                        backgroundSize: 'cover',
                    }}
                /> */}

                {/* <ParallaxLayer offset={0} speed={0}> */}
                    <div className="flex flex-col gap-12 bg-slate-950">
                        <Header />
                        <Hero />
                        <CTA />
                        <Speakers />
                        <IndustryGrid />
                        <BrandsScollable />
                        <AgendaTimeline />
                        <EventConventions />
                        <div>
                            <Sponsors />
                            <FAQs />
                            <Footer />
                        </div>
                    </div>
                {/* </ParallaxLayer> */}
            {/* </Parallax> */}
        </div>
    )
}
