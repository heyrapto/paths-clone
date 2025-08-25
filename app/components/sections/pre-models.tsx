import React from "react";

export const PreModelsSection = () => {
  return (
    <>
      {/* Intro */}
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
        <p className="p">
          One size doesn’t fit all, so we have options for making high-quality
          finish welding effortless and economical for manufacturers.
        </p>
      </section>

      {/* Model: AW-2 */}
      <section className="home_model__T_6WI">
        <div aria-hidden="true" className="stripes_wrapper__rRsa5">
          <span className="stripes_line__0mC2c stripes_b__ZbuGG"></span>
        </div>
        <h3 className="h3 home_title__svGc_">AW-2</h3>
        <div className="home_content__fn2aj">
          <img
            src="//images.ctfassets.net/mluanev0pzgf/34Ve7t1bwSqSmzP8DkueqU/779114849e5f5078c5d26f3614407caf/Group_7765.png?q=95"
            alt="AW-2 Large"
            className="home_img-large__12lSA"
          />
          <img
            src="//images.ctfassets.net/mluanev0pzgf/41zv0aAtWEXL1j89pdiJzF/6be5101d48e830964b3a372f9e790bc8/Frame_7862.png?q=95"
            alt="AW-2 Small"
            className="home_img-small__A4lAB"
          />
          <p className="home_caption__D0wAC ol-3-col xs">
            The AW-2 brings autonomous finish welding to small and mid-size
            parts. The flexibility of the AW-2 eliminates the need for custom,
            rigid fixturing, and precise part placement.
          </p>
        </div>
      </section>

      {/* Model: AW-3 */}
      <section className="home_model__T_6WI">
        <div aria-hidden="true" className="stripes_wrapper__rRsa5">
          <span className="stripes_line__0mC2c stripes_b__ZbuGG"></span>
        </div>
        <h3 className="h3 home_title__svGc_">AW-3</h3>
        <div className="home_content__fn2aj">
          <img
            src="//images.ctfassets.net/mluanev0pzgf/3FvOuZxZiMs9lHQHoznjWT/34cf997250b0917fbfed39839b14826a/Boom_Arm_Cell_Orthographic_Perspective__1_.png?q=95"
            alt="AW-3 Large"
            className="home_img-large__12lSA"
          />
          <img
            src="//images.ctfassets.net/mluanev0pzgf/2srW5MC8ACP5KRBzp6yABR/6ff91e9721e36cf9c4e3720ed71ea1b0/Boom_Arm_Cell_Orthographic_Perspective_2.png?q=95"
            alt="AW-3 Small"
            className="home_img-small__A4lAB"
          />
          <p className="home_caption__D0wAC ol-3-col xs">
            The AW-3 brings autonomous finish welding to longer parts that don’t
            fit in smaller welding cells. The AW-3 can have one or two welding
            zones, where one side can weld while the other side loads and
            unloads.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="home_features__rVAqr">
        <div aria-hidden="true" className="stripes_wrapper__rRsa5">
          <span className="stripes_line__0mC2c stripes_b__ZbuGG"></span>
          <span className="stripes_line__0mC2c stripes_d__TV6Zt"></span>
        </div>
        <p className="home_title__svGc_ s">
          Autonomous Welding, Instant ROI
        </p>
        <div className="home_content__fn2aj ol-5-col or-4-col">
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

          {/* Features List */}
          <div className="home_feature__uVISN">
            <p className="text-micro mb-1">Lower Costs</p>
          </div>
          <p className="s">Reduced churn</p>
          <p className="s">Shorter cycle time</p>
          <p className="s">Less labor overhead</p>

          <div className="home_feature__uVISN">
            <p className="text-micro mb-1">Increased Efficiencies</p>
          </div>
          <p className="s">Greater capacity</p>
          <p className="s">Better weld quality</p>
          <p className="s">Higher first-pass yield</p>

          <div className="home_feature__uVISN">
            <p className="text-micro mb-1">More Possibilities</p>
          </div>
          <p className="s">Reshore your manufacturing</p>
          <p className="s">Offer competitive worker salaries</p>
          <p className="s">Scale capacity to do more work</p>
        </div>
      </section>
    </>
  );
};
