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
      gsap.utils.toArray(".slide-aside").forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: -400, // how much you want them to move up
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom", // when the top of aside hits bottom of viewport
              end: "bottom top",   // until it leaves the viewport
              scrub: true,         // ties animation progress to scroll
            },
          }
        );
      });
  
      const ctx = gsap.context(() => {
        
  
      if (sectionRef.current && stripesRef.current) {
          const thirdSlide = slidesRef.current[2];
          if (thirdSlide) {
            gsap.to(stripesRef.current, {
              yPercent: -10,
              ease: "none",
              scrollTrigger: {
                trigger: thirdSlide,
                start: "top center",
                endTrigger: sectionRef.current,
                end: "bottom top",
                scrub: true
              }
            });
          }
        }
  
  
      }, sectionRef);
  
      return () => ctx.revert();
    }, [isDesktop]);
    return (
      <>
      {isDesktop ? (
      <section className="home_how-slides__ZIMoN" id="how-slides">
        <div aria-hidden="true" className="stripes_wrapper__rRsa5">
          <span className="stripes_line__0mC2c stripes_f__mnJYv" ref={stripesRef}></span>
        </div>
  
        <div className="illustration_inner__K_MDy">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="illustration_slide__aNxYI"
              style={isDesktop ? {top: `calc(10vh + ${index*5}em)`, marginBottom: `${(slides.length - index - 1)*5}rem`} : {top:0}}
              id={slide.id}
            >
              <div
                className="illustration_content__5njKj"
                style={isDesktop ? {
                    position: 'sticky',
                    top: `calc(10vh + ${index * 2}rem)`,
                    zIndex: slides.length - index
                  } : {}}
              >
                <p className="text-micro text-accent">{slide.number}</p>
                <p className="h3">{slide.title}</p>
                <div className="illustration_how-illustration__BLE8s">
                  <div>
                   {slide.icon && (<img src={slide.icon} alt="" className="" />)} 
                    </div>
                </div>
              </div>
              <aside
                style={{
                    position: 'static',
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