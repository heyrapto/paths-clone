import { slides } from "~/constants";
import { useMobile } from "../../hooks/use-mobile";
  
  export const HowItWorksSection = () => {
    const { isDesktop } = useMobile()
    return (
      <>
      {isDesktop ? (
      <section className="home_how-slides__ZIMoN" id="how-slides">
        <div aria-hidden="true" className="stripes_wrapper__rRsa5">
          <span className="stripes_line__0mC2c stripes_f__mnJYv"></span>
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
                style={isDesktop ? {
                    position: 'sticky',
                    top: `calc(10vh + ${index * 2}rem)`,
                    zIndex: slides.length - index
                  } : {}}
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