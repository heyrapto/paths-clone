import { HowItWorksSection } from "./how-it-works"

export const HowSlidesSection = () => {
    return(
        <>
        <section className="home_image__Ihy8J">
          <div aria-hidden="true" className="stripes_wrapper__rRsa5">
            <span className="stripes_line__0mC2c stripes_f__mnJYv"></span>
          </div>
          <div className="home_image-intermission__j98AZ">
            <img src="//images.ctfassets.net/mluanev0pzgf/dOUDaUXpwpJVeedDvVAaD/f134dc43358c093373273e6d7cdd36e7/Factory_Scenario_Perspective.png?q=95" alt=""/>
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