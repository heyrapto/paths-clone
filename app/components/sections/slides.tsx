import React from "react";

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
  return (
    <section className="home_slides__IpXtK" id="slides">
      <div className="home_inner__L8_72">
        {/* Indicators */}
        <ul
          className="indicators_indicators__ShvfX is-inview"
          data-scroll="true"
          data-scroll-sticky="true"
          data-scroll-target="#slides"
          style={{
            transform:
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
          }}
        >
          {slidesData.map((_, i) => (
            <li
              key={i}
              className={i === 0 ? "indicators_active__YPE0D" : ""}
            >
              {String(i + 1).padStart(2, "0")}
            </li>
          ))}
        </ul>

        {/* Slides */}
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            data-scroll="true"
            data-scroll-offset="100%"
            data-scroll-speed=".5"
            data-scroll-delay="0.05"
            data-scroll-id={slide.id}
            id={slide.id}
            className="full-height-slide_wrapper__eSiU7 is-inview"
            style={{
              transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${
                index * 60
              }, 0, 1)`,
              opacity: index === 0 ? 0.75 : 1,
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
  );
};
