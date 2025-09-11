import { HowItWorksSection } from "./how-it-works"

export const HowSlidesSection = () => {
  return (
    <>
      <section className="home_image__Ihy8J">
        <div aria-hidden="true" className="stripes_wrapper__rRsa5">
          <span className="stripes_line__0mC2c stripes_f__mnJYv"></span>
        </div>
        <div className="home_image-intermission__j98AZ">
          <img src="/HIW-img.png" alt="" />
        </div>
      </section>

      <section className="home_how__tz4hY">
        <p className="h2 mb-1">How It Works</p>
        <p className="h2 text-muted">With our decentralized robotics system, you’ll never have to worry about silos, integration, or complex programming again.</p>
      </section>
      <HowItWorksSection />
    </>
  )
}