import { Navbar } from "~/components/layout/navbar"
import { HeroSection } from "~/components/sections/hero"
import { SlidesSection } from "~/components/sections/slides"

export const LandingPage = () => {
    return(
        <main>
            <Navbar />
            <HeroSection />
            <SlidesSection />
        </main>
    )
}