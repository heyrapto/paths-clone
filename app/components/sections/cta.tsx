import { useMobile } from "../../hooks/use-mobile"

export const FirstCTASection = () => {
  const { isDesktop } = useMobile()

  return (
    <>
      {isDesktop ? (
        <section className="home_first-cta__pTCzU">
          <h3 className="home_title__svGc_ h1 or-7-col">See for Yourself</h3>
          <aside className="home_action__ojUj6">
            <a className="text-bold button_button__Q9XfT" href="/demo">Learn More</a>
          </aside>
        </section>
      ) :
        (
          <section className="home_first-cta__pTCzU">
            <h3 className="home_title__svGc_ h1">
              See for Yourself
            </h3>
            <aside className="home_action__ojUj6">
              <a href="" className="text-bold button_button__Q9XfT">
                Learn More
              </a>
            </aside>
          </section>
        )
      }
    </>
  )
}

export const SecondCTASection = () => {
  const { isDesktop } = useMobile()

  return (
    <>
      {isDesktop ? (
        <section className="home_last-cta__2_xGw">
          <div aria-hidden="true" className="stripes_wrapper__rRsa5 stripes_inverted__AS5SW">
            <span className="stripes_line__0mC2c stripes_d__TV6Zt"></span>
          </div>
          <h3 className="home_title__svGc_ h1 or-7-col">See for Yourself</h3>
          <aside className="home_action__ojUj6">
            <a className="text-bold button_button__Q9XfT" href="/demo">Learn More</a>
          </aside>
        </section>
      ) :
        (
          <section className="home_last-cta__2_xGw ol-1-col">
            <h3 className="home_title__svGc_ h1">
              See for Yourself
            </h3>
            <aside className="home_action__ojUj6">
              <a href="" className="text-bold button_button__Q9XfT">
                Learn More
              </a>
            </aside>
          </section>
        )
      }
    </>
  )
}