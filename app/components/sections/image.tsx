import { useMobile } from "../../hooks/use-mobile"

export const ImageSection = () => {
  const { isDesktop } = useMobile()
  return (
    <>
      {isDesktop ? (
        <section className="home_image__Ihy8J">
          {/* Stripes */}
          <div aria-hidden="true" className="stripes_wrapper__rRsa5">
            <span className="stripes_line__0mC2c stripes_f__mnJYv"></span>
          </div>

          {/* Image */}
          <div className="home_image-intermission__j98AZ">
            <img
              src="//images.ctfassets.net/mluanev0pzgf/dOUDaUXpwpJVeedDvVAaD/f134dc43358c093373273e6d7cdd36e7/Factory_Scenario_Perspective.png?q=95"
              alt="Factory Scenario Perspective"
            />
          </div>

          <section className="home_how__tz4hY">
            <p className="h2 mb-1">How It Works</p>
            <p className="h2 text-muted">With the Path Robotics system, you’ll never have to worry about rework, part placement, perfect parts, or robot programming ever again.
            </p>
          </section>
        </section>

      ) :
        (
          <>
            <section className="home_image__Ihy8J">
              <div className="home_image-intermission__j98AZ">
                <img src="//images.ctfassets.net/mluanev0pzgf/dOUDaUXpwpJVeedDvVAaD/f134dc43358c093373273e6d7cdd36e7/Factory_Scenario_Perspective.png?q=95" alt="" />
              </div>
            </section>

            <section className="home_how__tz4hY">
              <p className="h2 mb-1">How It Works</p>
              <p className="h2 text-muted">With the Path Robotics system, you’ll never have to worry about rework, part placement, perfect parts, or robot programming ever again.</p>
            </section>
          </>
        )
      }
    </>
  )
}