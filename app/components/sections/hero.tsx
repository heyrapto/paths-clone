import { useEffect, useRef } from "react";
import { useMobile } from "../../hooks/use-mobile";

export const HeroSection = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const header1Ref = useRef<HTMLHeadElement | any>(null);
    const header2Ref = useRef<HTMLHeadElement | any>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const { isDesktop } = useMobile();

    useEffect(() => {
        if(!isDesktop) return;

        const hero = heroRef.current;
        const header1 = header1Ref.current;
        const header2 = header2Ref.current;
        const image = imageRef.current;

        if (!hero || !header1 || !header2 || !image) return;

        // set initial position for "Truly" to be 50px above
        header1.style.transform = 'translateY(-50px)';
        header2.style.transform = 'translateY(0px)';
        image.style.transform = 'translateY(0px)';

        const handleScroll = () => {
            const heroRect = hero.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // calculate how much of the hero section has been scrolled
            const scrollProgress = Math.max(0, Math.min(1, -heroRect.top / viewportHeight));

            // total movement distance after sync (adjust as needed)
            const maxMovement = 500;

            // calculate the progress needed for "truly" to reach "Autonomous Welding" level
            const catchUpProgress = 150 / (150 + maxMovement); // 150px out of total movement

            let header1Movement, header2Movement, imageMovement;

            if (scrollProgress <= catchUpProgress) {
                // phase 1: only "truly" moves down to catch up
                // "autonomous Welding" stays at 0
                // image starts moving up gently
                header1Movement = -50 + (scrollProgress / catchUpProgress) * 150;
                header2Movement = 0;
                imageMovement = -(scrollProgress / catchUpProgress) * 100; // move up 100px during catch-up phase
            } else {
                // phase 2: Both move together
                // "truly" is now at level 0, both move down together
                // image continues moving up more dramatically
                const syncProgress = (scrollProgress - catchUpProgress) / (1 - catchUpProgress);
                header1Movement = 100 + (syncProgress * maxMovement);
                header2Movement = syncProgress * maxMovement;
                imageMovement = -100 - (syncProgress * 300);
            }

            header1.style.transform = `translateY(${header1Movement}px)`;
            header2.style.transform = `translateY(${header2Movement}px)`;
            image.style.transform = `translateY(${imageMovement}px)`;
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isDesktop]);

    return (
        <>
            {isDesktop ? (
                <section className="home_hero__vJLkN" id="hero" ref={heroRef}>
                    <img
                        ref={imageRef}
                        src="/hero.png"
                        alt=""
                        className="home_hero-image__QFiue"
                    />
                    <div className="home_heading__56sD2">
                        <h2 className="h1" id="header_1" ref={header1Ref}>
                        Truly
                        </h2>
                        <h1 className="h1 ol-5-col" id="header_2" ref={header2Ref}>
                        Autonomous Robotics
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
                    A global reputation infrastructure that gives every robot a secure digital identity, measurable reputation, and the ability to prove reliability, accountability, and skill in a decentralized economy.
                    </p>
                </section>
            ) : (
                <section className="home_hero__vJLkN" id="hero">
                    {/* Hero Image */}
                    <img
                        src="/hero.png"
                        alt="Hero"
                        className="home_hero-image__QFiue is-inview"
                        data-scroll="true"
                        data-scroll-speed="10"
                    />

                    {/* Headings */}
                    <div className="home_heading__56sD2">
                        <h2
                            className="h1 is-inview"
                            data-scroll="true"
                            data-scroll-sticky="true"
                            data-scroll-target="#hero"
                            data-scroll-offset="0, 66%"
                        >
                            Truly
                        </h2>
                        <h1
                            className="h1 ol-1-col"
                            data-scroll="true"
                            data-scroll-sticky="true"
                            data-scroll-target="#hero"
                            data-scroll-offset="16%, 50%"
                        >
                            Autonomous Robotics
                        </h1>
                    </div>

                    {/* Decorative Stripes */}
                    <div aria-hidden="true" className="stripes_wrapper__rRsa5">
                        <span className="stripes_line__0mC2c stripes_f__mnJYv"></span>
                    </div>

                    {/* SVG Logo / Mark */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 189 214"
                        className="home_mark__85LkS"
                    >
                        <g clipPath="url(#path-mark_svg__a)">
                            <path
                                fill="currentColor"
                                d="M146 106c3-9 5-19 5-30 0-42-31-76-75-76C31 0 0 34 0 76v138h38v-79c11 12 26 17 43 17 7 0 15-1 21-3v-43c-6 7-16 12-26 12-21 0-38-19-38-42s17-41 38-41 38 18 38 41c0 12-5 22-12 30h44v43h43v-43h-43Z"
                            />
                        </g>
                        <defs>
                            <clipPath id="path-mark_svg__a">
                                <path fill="#fff" d="M0 0h189v214H0z" />
                            </clipPath>
                        </defs>
                    </svg>

                    {/* Callout Text */}
                    <p className="home_callout__haRsE s or-2-col">
                    A global reputation infrastructure that gives every robot a secure digital identity, measurable reputation, and the ability to prove reliability, accountability, and skill in a decentralized economy.
                    </p>
                </section>
            )
            }
        </>
    )
}