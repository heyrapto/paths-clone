import { Navbar } from "~/components/layout/navbar"
import { CTASection } from "~/components/sections/cta"
import { HowItWorksSection } from "~/components/sections/how-it-works"
import { HeroSection } from "~/components/sections/hero"
import { ImageSection } from "~/components/sections/image"
import { PreModelsSection } from "~/components/sections/pre-models"
import { SlidesSection } from "~/components/sections/slides"

export const LandingPage = () => {
    return(
        <main>
            <Navbar />
            <HeroSection />
            <SlidesSection />
            <ImageSection />
            <HowItWorksSection />
            <CTASection />
            <PreModelsSection />
            <CTASection />
        </main>
    )
}