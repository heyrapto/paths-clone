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
          <p className="h2 text-muted">With the Path Robotics system, you'll never have to worry about rework, part placement, perfect parts, or robot programming ever again.</p>
        </section>

        {/* <section className="home_how-slides__ZIMoN" id="how-slides">
          <div aria-hidden="true" className="stripes_wrapper__rRsa5">
            <span className="stripes_line__0mC2c stripes_f__mnJYv"></span>
          </div>
          <div className="illustration_inner__K_MDy">
            <div className="illustration_slide__aNxYI" data-scroll="true" data-scroll-id="it-sees" data-scroll-call="it-sees" data-scroll-offset="50%" id="it-sees">
              <div className="illustration_content__5njKj" data-scroll="true" data-scroll-sticky="true" data-scroll-target="#how-slides" data-scroll-offset="0%">
                <p className="text-micro text-accent">01</p>
                <p className="h3">It Sees</p>
                <div className="illustration_how-illustration__BLE8s">
                  <div></div>
                </div>
              </div>
              <aside>
                <p className="s">The Path system scans and creates a 3D model of each part. Our proprietary sensors are built to see highly reflective surfaces and survive harsh manufacturing environments.</p>
              </aside>
            </div>
            <div className="illustration_slide__aNxYI" data-scroll="true" data-scroll-id="it-understands" data-scroll-call="it-understands" data-scroll-offset="50%" id="it-understands">
              <div className="illustration_content__5njKj" data-scroll="true" data-scroll-sticky="true" data-scroll-target="#how-slides" data-scroll-offset="90%">
                <p className="text-micro text-accent">02</p>
                <p className="h3">It Understands</p>
              </div>
              <aside>
                <p className="s">The Path system is built on proprietary AI. It analyzes the sensor data on the fly to understand each part individually. There's no need for perfect, identical parts or precise positioning in the cell.</p>
              </aside>
            </div>
            <div className="illustration_slide__aNxYI" data-scroll="true" data-scroll-id="it-welds" data-scroll-call="it-welds" data-scroll-offset="50%" id="it-welds">
              <div className="illustration_content__5njKj" data-scroll="true" data-scroll-sticky="true" data-scroll-target="#how-slides" data-scroll-offset="180%">
                <p className="text-micro text-accent">03</p>
                <p className="h3">It Welds</p>
              </div>
              <aside>
                <p className="s">The Path system understands welding and adapts throughout the process. As it goes, it creates optimal robotic paths and part positioning to produce high quality welds.</p>
              </aside>
            </div>
          </div>
        </section> */}
        <HowItWorksSection />

        </>
    )
}