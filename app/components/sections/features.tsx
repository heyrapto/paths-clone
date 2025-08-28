import { useMobile } from "../../hooks/use-mobile"

export const FeaturesSection = () => {
  const { isDesktop } = useMobile()
  return (
    <>
      {isDesktop ? (
        <section className="home_features__rVAqr">
          <div aria-hidden="true" className="stripes_wrapper__rRsa5">
            <span className="stripes_line__0mC2c stripes_b__ZbuGG"></span>
            <span className="stripes_line__0mC2c stripes_d__TV6Zt"></span>
          </div>
          <p className="home_title__svGc_ s">Autonomous Welding, Instant ROI</p>
          <div className="home_content__fn2aj ol-5-col or-4-col">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 21" className="home_arrow-icon__g__27">
              <path stroke="currentColor" strokeMiterlimit="10" d="m1 1 20 19M5 20h16V5"></path>
            </svg>
            <div className="home_feature__uVISN">
              <div className="home_feature__uVISN">
                <p className="text-micro mb-1">Lower Costs</p>
              </div>
              <p className="s">Reduced churn</p>
              <p className="s">Shorter cycle time</p>
              <p className="s">Less labor overhead</p>
              <p className="s"></p>
              <div className="home_feature__uVISN">
                <p className="text-micro mb-1">Increased Efficiencies</p>
              </div>
              <p className="s">Greater capacity</p>
              <p className="s">Better weld quality</p>
              <p className="s">Higher first-pass yield</p>
              <p className="s"></p>
              <div className="home_feature__uVISN">
                <p className="text-micro mb-1">More Possibilities</p>
              </div>
              <p className="s">Reshore your manufacturing</p>
              <p className="s">Offer competitive worker salaries</p>
              <p className="s">Scale capacity to do more work</p>
            </div>
          </div>
        </section>
      ) :
        (
          <section className="home_features__rVAqr">
            {/* Section Title */}
            <p className="home_title__svGc_ p">Autonomous Welding, Instant ROI</p>

            <div className="home_content__fn2aj ol-1-col">
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
                {/* Lower Costs */}
                <div className="home_feature__uVISN">
                  <p className="text-micro mb-1">Lower Costs</p>
                </div>
                <p className="s">Reduced churn</p>
                <p className="s">Shorter cycle time</p>
                <p className="s">Less labor overhead</p>

                {/* Increased Efficiencies */}
                <div className="home_feature__uVISN">
                  <p className="text-micro mb-1">Increased Efficiencies</p>
                </div>
                <p className="s">Greater capacity</p>
                <p className="s">Better weld quality</p>
                <p className="s">Higher first-pass yield</p>

                {/* More Possibilities */}
                <div className="home_feature__uVISN">
                  <p className="text-micro mb-1">More Possibilities</p>
                </div>
                <p className="s">Reshore your manufacturing</p>
                <p className="s">Offer competitive worker salaries</p>
                <p className="s">Scale capacity to do more work</p>
              </div>
            </div>
          </section>
        )
      }
    </>
  )
}