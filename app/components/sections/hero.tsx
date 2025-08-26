import { useEffect, useRef } from "react";

export const HeroSection = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const header1Ref = useRef<HTMLHeadElement | any>(null);
    const header2Ref = useRef<HTMLHeadElement | any>(null);

    useEffect(() => {
        const hero = heroRef.current;
        const header1 = header1Ref.current;
        const header2 = header2Ref.current;
        
        if (!hero || !header1 || !header2) return;

        // Set initial position for "Truly" to be 50px above
        header1.style.transform = 'translateY(-50px)';
        header2.style.transform = 'translateY(0px)';

        const handleScroll = () => {
            const heroRect = hero.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Calculate how much of the hero section has been scrolled
            const scrollProgress = Math.max(0, Math.min(1, -heroRect.top / viewportHeight));
            
            // Total movement distance after sync (adjust as needed)
            const maxMovement = 500;
            
            // Calculate the progress needed for "Truly" to reach "Autonomous Welding" level
            const catchUpProgress = 150 / (150 + maxMovement); // 150px out of total movement
            
            let header1Movement, header2Movement;
            
            if (scrollProgress <= catchUpProgress) {
                // Phase 1: Only "Truly" moves down to catch up
                // "Autonomous Welding" stays at 0
                header1Movement = -50 + (scrollProgress / catchUpProgress) * 150;
                header2Movement = 0;
            } else {
                // Phase 2: Both move together
                // "Truly" is now at level 0, both move down together
                const syncProgress = (scrollProgress - catchUpProgress) / (1 - catchUpProgress);
                header1Movement = 100 + (syncProgress * maxMovement); // Start from synced position (100px)
                header2Movement = syncProgress * maxMovement;
            }
            
            header1.style.transform = `translateY(${header1Movement}px)`;
            header2.style.transform = `translateY(${header2Movement}px)`;
        };

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);
        
        // Initial call
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="home_hero__vJLkN" id="hero" ref={heroRef}>
            <img
                src="/hero.png"
                alt=""
                className="home_hero-image__QFiue"
            />
            <div className="home_heading__56sD2">
                <h2 className="h1" id="header_1" ref={header1Ref}>
                    Truly
                </h2>
                <h1 className="h1 ol-5-col" id="header_2" ref={header2Ref}>
                    Autonomous Welding
                </h1>
            </div>
            <div aria-hidden="true" className="stripes_wrapper__rRsa5">
                <span className="stripes_line__0mC2c stripes_a__dlk6e"></span>
                <span className="stripes_line__0mC2c stripes_b__ZbuGG"></span>
                <span className="stripes_line__0mC2c stripes_c__bKlfI"></span>
                <span className="stripes_line__0mC2c stripes_d__TV6Zt"></span>
                <span className="stripes_line__0mC2c stripes_e__fTlAj"></span>
                <span className="stripes_line__0mC2c stripes_f__mnJYv"></span>
                <span className="stripes_line__0mC2c stripes_g__sg_6e"></span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 189 214" className="home_mark__85LkS">
                <g clipPath="url(#path-mark_svg__a)">
                    <path fill="currentColor" d="M146 106c3-9 5-19 5-30 0-42-31-76-75-76C31 0 0 34 0 76v138h38v-79c11 12 26 17 43 17 7 0 15-1 21-3v-43c-6 7-16 12-26 12-21 0-38-19-38-42s17-41 38-41 38 18 38 41c0 12-5 22-12 30h44v43h43v-43h-43Z"></path>
                </g>
                <defs>
                    <clipPath id="path-mark_svg__a">
                        <path fill="#fff" d="M0 0h189v214H0z"></path>
                    </clipPath>
                </defs>
            </svg>
            <p className="home_callout__haRsE s or-15-col">
                We create manufacturing robots that autonomously scan, position, and weld your parts without the need for skilled welders or robot programmers.
            </p>
        </section>
    )
}