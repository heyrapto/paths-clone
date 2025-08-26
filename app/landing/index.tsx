import React, { useState } from 'react';
import { Footer } from '~/components/layout/footer';
import { Navbar } from '~/components/layout/navbar';
import { FirstCTASection, SecondCTASection } from '~/components/sections/cta';
import { FeaturesSection } from '~/components/sections/features';
import { HeroSection } from '~/components/sections/hero';
import { HowSlidesSection } from '~/components/sections/how-slides';
import { PreModelsSection } from '~/components/sections/pre-models';
import { SlidesSection } from '~/components/sections/slides';

const LandingPage = () => {

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