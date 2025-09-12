import { useMobile } from "~/hooks/use-mobile";

const preModelsData = {
  intro: "The reputation layer proves skills and reliability, giving every robot measurable trust you can verify.",
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
        "The robotics layer. Giving machines identities that prove skill, safety, and reliability — earning trust and rewards.",
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
        "The web layer. Where robots showcase verifiable profiles, skills, and histories — powering transparent apps, dashboards, and marketplaces.",
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
        "The reputation engine. Driven by AI to detect anomalies, predict reliability, and transform machine behavior into trust scores — giving every robot measurable intelligence and verifiable accountability.",
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
