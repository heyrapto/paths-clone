import { useState, useEffect, useRef } from "react";
import { useMobile } from "../../hooks/use-mobile";

const slidesData = [
  {
    id: "no-programming",
    title: "No Programming",
    description: "Even in high mix, high variance, low volume environments.",
  },
  {
    id: "zero-capex",
    title: "Zero CapEx",
    description: "No upfront costs with our pay-as-you-go subscription model.",
  },
  {
    id: "risk-free-deployment",
    title: "Risk-free Deployment",
    description: "All preventative maintenance needs are covered by Path.",
  },
];

export const SlidesSection = () => {
  const [activeSlide, setActiveSlide] = useState<any>(0);
  const sectionRef = useRef<HTMLDivElement | any>(null);
  const slideRefs = useRef<HTMLDivElement | any>([]);
  const { isDesktop } = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      const viewportHeight = window.innerHeight;

      // Check if section is in view
      if (sectionTop > viewportHeight || sectionBottom < 0) return;

      // Find which slide is most visible
      let maxVisibility = 0;
      let mostVisibleSlide = 0;

      slideRefs.current.forEach((slide: any, index: number) => {
        if (!slide) return;
        
        const slideRect = slide.getBoundingClientRect();
        const slideTop = slideRect.top;
        const slideBottom = slideRect.bottom;
        
        // Calculate visibility percentage
        const visibleTop = Math.max(0, Math.min(slideBottom, viewportHeight) - Math.max(slideTop, 0));
        const slideHeight = slideRect.height;
        const visibility = visibleTop / slideHeight;
        
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleSlide = index;
        }
      });

      setActiveSlide(mostVisibleSlide);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    {isDesktop ? (
    <section 
      ref={sectionRef}
      className="home_slides__IpXtK" 
      id="slides"
    >
      <div className="home_inner__L8_72">
        {/* Sticky Indicators */}
        <ul
          className="indicators_indicators__ShvfX is-inview sticky"
          style={{
            position: 'sticky',
            top: '20vh',
            zIndex: 10,
            transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
          }}
        >
          {slidesData.map((_, i) => (
            <li
              key={i}
              className={i === activeSlide ? "indicators_active__YPE0D" : ""}
              style={{
                transition: 'opacity 0.3s ease',
                opacity: i === activeSlide ? 1 : 0.5
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </li>
          ))}
        </ul>

        {/* Slides */}
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            ref={el => slideRefs.current[index] = el as any}
            id={slide.id}
            className="full-height-slide_wrapper__eSiU7 is-inview"
            style={{
              transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${
                index * 60
              }, 0, 1)`,
              opacity: index === activeSlide ? 0.75 : 1,
              minHeight: '100vh', 
            }}
          >
            <div className="home_slide__nf2Eh">
              <div className="home_content__fn2aj">
                <h2 className="h1 or-3-col home_title__svGc_">{slide.title}</h2>
              </div>
              <aside>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 22 21"
                  className="home_arrow-icon__g__27"
                >
                  <path
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    d="m1 1 20 19M5 20h16V5"
                  />
                </svg>
                <div className="home_action__ojUj6">
                  <p className="s mb-2">{slide.description}</p>
                  <button className="home_no-link__EP0Uu s text-muted">
                    Watch the Video
                  </button>
                </div>
              </aside>
            </div>
          </div>
        ))}
      </div>

      {/* Stripes */}
      <div aria-hidden="true" className="stripes_wrapper__rRsa5">
        <span className="stripes_line__0mC2c stripes_f__mnJYv"></span>
      </div>
    </section>
  ) : (
    <section className="home_slides__IpXtK" id="slides">
      <div className="home_inner__L8_72">
        {/* Indicators */}
        <ul
          className="indicators_indicators__ShvfX"
          data-scroll="true"
          data-scroll-sticky="true"
          data-scroll-target="#slides"
        >
          <li className="indicators_active__YPE0D">01</li>
          <li>02</li>
          <li>03</li>
        </ul>

        {/* Slide 1 - No Programming */}
        <div
          data-scroll="true"
          data-scroll-offset="100%"
          data-scroll-speed=".5"
          data-scroll-delay="0.05"
          data-scroll-id="no-programming"
          id="no-programming"
          className="full-height-slide_wrapper__eSiU7 is-inview"
          style={{ opacity: 0.980187 }}
        >
          <div className="home_slide__nf2Eh">
            <div className="home_content__fn2aj">
              <h2 className="h1 or-3-col home_title__svGc_">No Programming</h2>
            </div>
            <aside className="ol-1-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 21"
                className="home_arrow-icon__g__27"
              >
                <path
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  d="m1 1 20 19M5 20h16V5"
                />
              </svg>
              <div className="home_action__ojUj6">
                <p className="s mb-2">
                  Even in high mix, high variance, low volume environments.
                </p>
                <button className="home_no-link__EP0Uu s text-muted">
                  Watch the Video
                </button>
              </div>
            </aside>
          </div>
        </div>

        {/* Slide 2 - Zero CapEx */}
        <div
          data-scroll="true"
          data-scroll-offset="100%"
          data-scroll-speed=".5"
          data-scroll-delay="0.05"
          data-scroll-id="zero-capex"
          id="zero-capex"
          className="full-height-slide_wrapper__eSiU7 is-inview"
          style={{ opacity: 0.307159 }}
        >
          <div className="home_slide__nf2Eh">
            <div className="home_content__fn2aj">
              <h2 className="h1 or-3-col home_title__svGc_">Zero CapEx</h2>
            </div>
            <aside className="ol-1-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 21"
                className="home_arrow-icon__g__27"
              >
                <path
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  d="m1 1 20 19M5 20h16V5"
                />
              </svg>
              <div className="home_action__ojUj6">
                <p className="s mb-2">
                  No upfront costs with our pay-as-you-go subscription model.
                </p>
                <button className="home_no-link__EP0Uu s text-muted">
                  Watch the Video
                </button>
              </div>
            </aside>
          </div>
        </div>

        {/* Slide 3 - Risk-free Deployment */}
        <div
          data-scroll="true"
          data-scroll-offset="100%"
          data-scroll-speed=".5"
          data-scroll-delay="0.05"
          data-scroll-id="risk-free-deployment"
          id="risk-free-deployment"
          className="full-height-slide_wrapper__eSiU7"
        >
          <div className="home_slide__nf2Eh">
            <div className="home_content__fn2aj">
              <h2 className="h1 or-3-col home_title__svGc_">
                Risk-free Deployment
              </h2>
            </div>
            <aside className="ol-1-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 21"
                className="home_arrow-icon__g__27"
              >
                <path
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  d="m1 1 20 19M5 20h16V5"
                />
              </svg>
              <div className="home_action__ojUj6">
                <p className="s mb-2">
                  All preventative maintenance needs are covered by Path.
                </p>
                <button className="home_no-link__EP0Uu s text-muted">
                  Watch the Video
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )}
  </>
  );
};