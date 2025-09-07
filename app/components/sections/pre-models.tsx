import { useMobile } from "~/hooks/use-mobile";

const preModelsData = {
  intro: "One network doesn’t fit all. Modulr provides specialized co-chains built for robotics, AI, web, and beyond — each designed to power real-world utility at scale.",
  models: [
    {
      name: "Robotics",
      desktop: {
        images: ["/aw2-1.png", "/aw2-2.png"],
      },
      mobile: {
        images: [
          "//images.ctfassets.net/mluanev0pzgf/34Ve7t1bwSqSmzP8DkueqU/779114849e5f5078c5d26f3614407caf/Group_7765.png?q=95",
          "//images.ctfassets.net/mluanev0pzgf/41zv0aAtWEXL1j89pdiJzF/6be5101d48e830964b3a372f9e790bc8/Frame_7862.png?q=95",
        ],
      },
      caption:
        "The robotics chain. Built to coordinate fleets, swarms, and real-world machines with trust, precision, and on-chain rewards for real output.",
    },
    {
      name: "Web",
      desktop: {
        images: ["/aw3-1.png", "/aw3-2.png"],
      },
      mobile: {
        images: [
          "//images.ctfassets.net/mluanev0pzgf/3FvOuZxZiMs9lHQHoznjWT/34cf997250b0917fbfed39839b14826a/Boom_Arm_Cell_Orthographic_Perspective__1_.png?q=95",
          "//images.ctfassets.net/mluanev0pzgf/2srW5MC8ACP5KRBzp6yABR/6ff91e9721e36cf9c4e3720ed71ea1b0/Boom_Arm_Cell_Orthographic_Perspective_2.png?q=95",
        ],
      },
      caption:
        "A Web 4.0 system replacing bulky websites with modular updates. Earn AdCoin for engagement, with built-in naming and age/content verification tools.",
    },
    {
      name: "AI",
      desktop: {
        images: ["/aw3-1.png", "/aw3-2.png"],
      },
      mobile: {
        images: [
          "//images.ctfassets.net/mluanev0pzgf/3FvOuZxZiMs9lHQHoznjWT/34cf997250b0917fbfed39839b14826a/Boom_Arm_Cell_Orthographic_Perspective__1_.png?q=95",
          "//images.ctfassets.net/mluanev0pzgf/2srW5MC8ACP5KRBzp6yABR/6ff91e9721e36cf9c4e3720ed71ea1b0/Boom_Arm_Cell_Orthographic_Perspective_2.png?q=95",
        ],
      },
      caption:
        "A flexible AI layer made of small, task-specific models. Requests are routed to the right model for faster, more efficient, and hardware-friendly execution.",
    },
  ],
};

export const PreModelsSection = () => {
  const { isDesktop } = useMobile();

  return (
    <>
      {/* Intro Section */}
      <section className="home_pre-models__5Wvou">
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
        </aside>
        <p className="p">{preModelsData.intro}</p>
      </section>

      {/* Models */}
      {preModelsData.models.map((model, idx) => (
        <section key={idx} className="home_model__T_6WI">
          {isDesktop && (
            <div aria-hidden="true" className="stripes_wrapper__rRsa5">
              <span className="stripes_line__0mC2c stripes_b__ZbuGG"></span>
            </div>
          )}

          <h3 className="h3 home_title__svGc_">{model.name}</h3>
          <div className="home_content__fn2aj">
            {isDesktop ? (
              <>
                <img
                  src={model.desktop.images[0]}
                  alt={`${model.name} large view`}
                  className="home_img-large__12lSA"
                />
                <img
                  src={model.desktop.images[1]}
                  alt={`${model.name} small view`}
                  className="home_img-small__A4lAB"
                />
              </>
            ) : (
              <>
                <img
                  src={model.mobile.images[0]}
                  alt={`${model.name} large view`}
                  className="home_img-large__12lSA"
                />
                <img
                  src={model.mobile.images[1]}
                  alt={`${model.name} small view`}
                  className="home_img-small__A4lAB"
                />
              </>
            )}

            <p
              className={`home_caption__D0wAC ${
                isDesktop ? "ol-3-col xs" : "s"
              }`}
            >
              {model.caption}
            </p>
          </div>
        </section>
      ))}
    </>
  );
};
