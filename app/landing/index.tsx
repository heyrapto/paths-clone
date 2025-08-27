import { Footer } from '~/components/layout/footer';
import { Navbar } from '~/components/layout/navbar';
import { FirstCTASection, SecondCTASection } from '~/components/sections/cta';
import { FeaturesSection } from '~/components/sections/features';
import { HeroSection } from '~/components/sections/hero';
import { HowSlidesSection } from '~/components/sections/how-slides';
import { PreModelsSection } from '~/components/sections/pre-models';
import { SlidesSection } from '~/components/sections/slides';
import { useEffect } from 'react';

// Register GSAP plugins only on the client to avoid SSR crashes
// caused by accessing window/document during server rendering
const useRegisterGsap = () => {
  useEffect(() => {
    let isActive = true;
    (async () => {
      try {
        const gsapModule = await import('gsap');
        const scrollTriggerModule = await import('gsap/ScrollTrigger');
        if (!isActive) return;
        gsapModule.gsap.registerPlugin(scrollTriggerModule.ScrollTrigger);
      } catch {
        // no-op on server or if module fails to load
      }
    })();
    return () => {
      isActive = false;
    };
  }, []);
};

const LandingPage = () => {
  useRegisterGsap();
  return (
    <div style={{ ["--bg" as any]: "var(--black)", ["--fg" as any]: "var(--white)" }}>
      <main style={{backgroundColor:"var(--bg)",color:"var(--fg)"}}>
        <Navbar />
        <HeroSection />
        <SlidesSection />
        <HowSlidesSection />
        <FirstCTASection />
        <PreModelsSection />
        <FeaturesSection />
        <SecondCTASection />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;