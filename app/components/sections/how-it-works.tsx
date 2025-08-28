import { slides } from "~/constants";
import { useMobile } from "../../hooks/use-mobile";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export const HowItWorksSection = () => {
  const { isDesktop } = useMobile();
  const sectionRef = useRef<any>(null);
  const slidesRef = useRef<any>([]);
  const stripesRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!isDesktop) return;

    // === ASIDE FADE + UPWARD TRANSITIONS ===
    gsap.utils.toArray<HTMLElement>(".slide-aside").forEach((el, i, arr) => {
      if (i === 0) {
        // First aside: show immediately, then keep normal fade-out
        gsap.set(el, { y: 0, opacity: 1 });
      } else {
        // Others: fade in when scrolled into view
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 55%",
              scrub: true,
            },
          }
        );
      }
    
      // Two-stage exit: scroll up then fade (skip last aside)
      if (i < arr.length - 1) {
        // Stage 1: Scroll up naturally (pushed by next slide)
        gsap.to(el, {
          y: -80,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 5%",   
            end: "top -10%",   
            scrub: true,
          },
        });
        
        // Stage 2: Fade out after scrolling up
        gsap.to(el, {
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top -10%",  // Start fading after scroll-up completes
            end: "top -20%",    // Quick fade
            scrub: true,
          },
        });
      }
    });
    
  }, [isDesktop]);

  return (
    <>
      {isDesktop ? (
        <section
          className="home_how-slides__ZIMoN"
          id="how-slides"
          ref={sectionRef}
        >
          {/* Stripes */}
          <div aria-hidden="true" className="stripes_wrapper__rRsa5">
            <span
              className="stripes_line__0mC2c stripes_f__mnJYv"
              ref={stripesRef}
            ></span>
          </div>

          {/* Slides */}
          <div className="illustration_inner__K_MDy">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="illustration_slide__aNxYI"
                style={
                  isDesktop
                    ? {
                        top: `calc(10vh + ${index * 5}em)`,
                        marginBottom: `${(slides.length - index - 1)*5}rem`} : {top:0}
                }
                id={slide.id}
                ref={(el) => (slidesRef.current[index] = el) as any}
              >
                <div
                  className="illustration_content__5njKj"
                  style={
                    isDesktop
                      ? {
                          position: "sticky",
                          top: `calc(10vh + ${index * 2}rem)`,
                          zIndex: slides.length - index,
                        }
                      : {}
                  }
                >
                  <p className="text-micro text-accent">{slide.number}</p>
                  <p className="h3">{slide.title}</p>
                  <div className="illustration_how-illustration__BLE8s">
                    <div>
                      {slide.icon && (
                        <img src={slide.icon} alt="" className="" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Aside that will fade/slide */}
                <aside
                  className="slide-aside"
                  style={{
                    position: "static",
                    top: `calc(10vh + ${index * 2}rem)`,
                    zIndex: slides.length - index,
                  }}
                >
                  <p className="s">{slide.description}</p>
                </aside>
              </div>
            ))}
          </div>
        </section>
      ) :
       (
        <section className="home_how-slides__ZIMoN" id="how-slides">
        <div aria-hidden="true" className="stripes_wrapper__rRsa5">
          <span className="stripes_line__0mC2c stripes_a__dlk6e"></span>
        </div>
  
        <div className="illustration_inner__K_MDy">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="illustration_slide__aNxYI is-inview"
              id={slide.id}
            >
              <div
                className="illustration_content__5njKj is-inview"
              >
                <p className="text-micro text-accent">{slide.number}</p>
                <p className="h2">{slide.title}</p>
                <div className="illustration_how-illustration__BLE8s">
                  <div>
                    <img src={slide.mobileIcon} alt="" className="" />
                    </div>
                </div>
              </div>
              <aside
              >
                <p className="s">{slide.description}</p>
              </aside>
            </div>
          ))}
        </div>
      </section>
       )
    }
      </>
    );
};