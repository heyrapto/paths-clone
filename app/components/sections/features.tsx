import { useMobile } from "../../hooks/use-mobile"

const featuresData = {
  title: "Decentralized Robotics. Infinite Scale.",
  groups: [
    {
      heading: "Identity Layer",
      items: [
        "Secure digital identities",
        "Cryptographic credentials",
        "Accountability everywhere",
      ],
    },
    {
      heading: "Reputation Engine",
      items: [
        "Scores performance & safety",
        "Measures reliability & trust",
        "Drives access & opportunity",
      ],
    },
    {
      heading: "Adaptive Networks",
      items: [
        "Specialized co-chains",
        "Shared verified knowledge",
        "Stronger through collaboration",
      ],
    },
  ],  
}

export const FeaturesSection = () => {
  const { isDesktop } = useMobile()

  return (
    <section className="home_features__rVAqr">
      {/* Stripes only on desktop */}
      {isDesktop && (
        <div aria-hidden="true" className="stripes_wrapper__rRsa5">
          <span className="stripes_line__0mC2c stripes_b__ZbuGG"></span>
          <span className="stripes_line__0mC2c stripes_d__TV6Zt"></span>
        </div>
      )}

      {/* Section Title */}
      <p className={`home_title__svGc_ ${isDesktop ? "s" : "p"}`}>
        {featuresData.title}
      </p>

      <div
        className={`home_content__fn2aj ${
          isDesktop ? "ol-5-col or-4-col" : "ol-1-col"
        }`}
      >
        {/* Arrow Icon */}
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

        {/* Features */}
        <div className="home_feature__uVISN">
          {featuresData.groups.map((group, idx) => (
            <div key={idx} className="home_feature__uVISN">
              <p className="text-micro mb-1">{group.heading}</p>
              {group.items.map((item, i) => (
                <p key={i} className="s">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
