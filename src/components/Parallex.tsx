import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, type IParallax } from '@react-spring/parallax'
import IndustryGrid from "@/components/IndustryGrid.tsx"
import BrandsScollable from "@/components/BrandsScollable.tsx"
import AgendaTimeline from "@/components/AgendaTimeline.tsx"
import Header from "@/components/Header.tsx"
import Hero from "@/components/Hero.tsx"
import CTA from "@/components/CTA.tsx"
import Speakers from "@/components/Speakers.tsx"
// import EventConventions from "@/components/EventConventions.tsx"
// import Sponsors from "@/components/Sponsors.tsx"
// import FAQs from "@/components/FAQs.tsx"
import Footer from "@/components/Footer.tsx"
import FAQs from './FAQs'

// Little helpers ...
const url = (name: string, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function ParallaxSectionGroup() {
    const parallax = useRef<IParallax>(null!)
    return (
        <div className='w-screen h-screen bg-slate-950'>
            <Parallax ref={parallax} pages={3}>
                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundImage: url('stars', true),
                        backgroundSize: 'cover',
                    }}
                />

                <ParallaxLayer offset={0} speed={0.5}>
                    <Header />
                </ParallaxLayer>

                <ParallaxLayer offset={2.9} speed={0.5}>
                    <Footer />
                </ParallaxLayer>

                {/* <ParallaxLayer offset={0.5} speed={1}>
                    <IndustryGrid />
                </ParallaxLayer> */}
                <ParallaxLayer offset={0.5} speed={1}>
                    <BrandsScollable />
                </ParallaxLayer>
                <ParallaxLayer offset={1.2} speed={1}>
                    <AgendaTimeline />
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={1}>
                    <FAQs />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
