export const HowItWorksSection = () => {
    const howItWorksData = [
    {
      id: "it-sees",
      step: "01",
      title: "It Sees",
      offset: "0%",
      description:
        "The Path system scans and creates a 3D model of each part. Our proprietary sensors are built to see highly reflective surfaces and survive harsh manufacturing environments.",
      svg: (
        <svg viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="svg-content">
            {/* Example placeholder content */}
            <circle cx="540" cy="540" r="200" stroke="currentColor" strokeWidth="4" />
          </g>
        </svg>
      ),
    },
    {
      id: "it-understands",
      step: "02",
      title: "It Understands",
      offset: "90%",
      description:
        "The Path system is built on proprietary AI. It analyzes the sensor data on the fly to understand each part individually. There's no need for perfect, identical parts or precise positioning in the cell.",
      svg: null, // if no SVG
    },
    {
      id: "it-welds",
      step: "03",
      title: "It Welds",
      offset: "180%",
      description:
        "The Path system understands welding and adapts throughout the process. As it goes, it creates optimal robotic paths and part positioning to produce high quality welds.",
      svg: null,
    },
  ];
  
  return (
    <section className="home_how-slides__ZIMoN" id="how-slides">
      {/* Stripes wrapper */}
      <div aria-hidden="true" className="stripes_wrapper__rRsa5">
        <span className="stripes_line__0mC2c stripes_f__mnJYv"></span>
      </div>

      {/* Illustration inner container */}
      <div className="illustration_inner__K_MDy">
        {howItWorksData.map((slide, i) => (
          <div
            key={slide.id}
            className="illustration_slide__aNxYI is-inview"
            data-scroll="true"
            data-scroll-id={slide.id}
            data-scroll-call={slide.id}
            data-scroll-offset="50%"
            id={slide.id}
          >
            <div
              className="illustration_content__5njKj is-inview"
              data-scroll="true"
              data-scroll-sticky="true"
              data-scroll-target="#how-slides"
              data-scroll-offset={slide.offset}
            >
              <p className="text-micro text-accent">{slide.step}</p>
              <p className="h3">{slide.title}</p>
            </div>

            {/* Optional SVG */}
            {slide.svg && <div className="illustration_svg__K_MDy">{slide.svg}</div>}

            <aside>
              <p className="s">{slide.description}</p>
            </aside>
          </div>
        ))}
      </div>
    </section>
  );
};