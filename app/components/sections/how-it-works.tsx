import { mainslides } from "~/assets";

const slides = [
    {
      id: "it-sees",
      number: "01",
      title: "It Sees",
      description:
        "The Path system scans and creates a 3D model of each part. Our proprietary sensors are built to see highly reflective surfaces and survive harsh manufacturing environments.",
      scrollOffset: "0%",
      icon: mainslides,
    },
    {
      id: "it-understands",
      number: "02",
      title: "It Understands",
      description:
        "The Path system is built on proprietary AI. It analyzes the sensor data on the fly to understand each part individually. There's no need for perfect, identical parts or precise positioning in the cell.",
      scrollOffset: "90%",
      icon: null,
    },
    {
      id: "it-welds",
      number: "03",
      title: "It Welds",
      description:
        "The Path system understands welding and adapts throughout the process. As it goes, it creates optimal robotic paths and part positioning to produce high quality welds.",
      scrollOffset: "180%",
      icon: null,
    },
  ];
  
  export const HowItWorksSection = () => {
    return (
      <section className="home_how-slides__ZIMoN" id="how-slides">
        <div aria-hidden="true" className="stripes_wrapper__rRsa5">
          <span className="stripes_line__0mC2c stripes_f__mnJYv"></span>
        </div>
  
        <div className="illustration_inner__K_MDy">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="illustration_slide__aNxYI"
              data-scroll="true"
              data-scroll-id={slide.id}
              data-scroll-call={slide.id}
              data-scroll-offset="50%"
              id={slide.id}
            >
              <div
                className="illustration_content__5njKj"
                data-scroll="true"
                data-scroll-sticky="true"
                data-scroll-target="#how-slides"
                data-scroll-offset={slide.scrollOffset}
              >
                <p className="text-micro text-accent">{slide.number}</p>
                <p className="h3">{slide.title}</p>
                <div className="illustration_how-illustration__BLE8s">
                  <div>
                   {slide.icon && (<img src={slide.icon} alt="" className="" />)} 
                    </div>
                </div>
              </div>
              <aside>
                <p className="s">{slide.description}</p>
              </aside>
            </div>
          ))}
        </div>
      </section>
    );
  };
  