import React, { useState } from 'react';
import { Footer } from '~/components/layout/footer';
import { Navbar } from '~/components/layout/navbar';
import { HeroSection } from '~/components/sections/hero';
import { SlidesSection } from '~/components/sections/slides';

const LandingPage = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div style={{ ["--bg" as any]: "var(--black)", ["--fg" as any]: "var(--white)" }}>
      <main style={{backgroundColor:"var(--bg)",color:"var(--fg)"}}>
        <Navbar />

       <HeroSection />

        <SlidesSection />

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

        <section className="home_how-slides__ZIMoN" id="how-slides">
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
        </section>

        <section className="home_first-cta__pTCzU">
          <h3 className="home_title__svGc_ h1 or-7-col">See for Yourself</h3>
          <aside className="home_action__ojUj6">
            <a className="text-bold button_button__Q9XfT" href="/demo">Book a Demo</a>
          </aside>
        </section>

        <section className="home_pre-models__5Wvou">
          <aside>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 21" className="home_arrow-icon__g__27">
              <path stroke="currentColor" strokeMiterlimit="10" d="m1 1 20 19M5 20h16V5"></path>
            </svg>
          </aside>
          <p className="p">One size doesn't fit all, so we have options for making high-quality finish welding effortless and economical for manufacturers.</p>
        </section>

        <section className="home_model__T_6WI">
          <div aria-hidden="true" className="stripes_wrapper__rRsa5">
            <span className="stripes_line__0mC2c stripes_b__ZbuGG"></span>
          </div>
          <h3 className="h3 home_title__svGc_">AW-2</h3>
          <div className="home_content__fn2aj">
            <img src="//images.ctfassets.net/mluanev0pzgf/34Ve7t1bwSqSmzP8DkueqU/779114849e5f5078c5d26f3614407caf/Group_7765.png?q=95" alt="" className="home_img-large__12lSA"/>
            <img src="//images.ctfassets.net/mluanev0pzgf/41zv0aAtWEXL1j89pdiJzF/6be5101d48e830964b3a372f9e790bc8/Frame_7862.png?q=95" alt="" className="home_img-small__A4lAB"/>
            <p className="home_caption__D0wAC ol-3-col xs">The AW-2 brings autonomous finish welding to small and mid-size parts. The flexibility of the AW-2 eliminates the need for custom, rigid fixturing, and precise part placement.</p>
          </div>
        </section>

        <section className="home_model__T_6WI">
          <div aria-hidden="true" className="stripes_wrapper__rRsa5">
            <span className="stripes_line__0mC2c stripes_b__ZbuGG"></span>
          </div>
          <h3 className="h3 home_title__svGc_">AW-3</h3>
          <div className="home_content__fn2aj">
            <img src="//images.ctfassets.net/mluanev0pzgf/3FvOuZxZiMs9lHQHoznjWT/34cf997250b0917fbfed39839b14826a/Boom_Arm_Cell_Orthographic_Perspective__1_.png?q=95" alt="" className="home_img-large__12lSA"/>
            <img src="//images.ctfassets.net/mluanev0pzgf/2srW5MC8ACP5KRBzp6yABR/6ff91e9721e36cf9c4e3720ed71ea1b0/Boom_Arm_Cell_Orthographic_Perspective_2.png?q=95" alt="" className="home_img-small__A4lAB"/>
            <p className="home_caption__D0wAC ol-3-col xs">The AW-3 brings autonomous finish welding to longer parts that don't fit in smaller welding cells. The AW-3 can have one or two welding zones, where one side can weld while the other side loads and unloads.</p>
          </div>
        </section>

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

        <section className="home_last-cta__2_xGw">
          <div aria-hidden="true" className="stripes_wrapper__rRsa5 stripes_inverted__AS5SW">
            <span className="stripes_line__0mC2c stripes_d__TV6Zt"></span>
          </div>
          <h3 className="home_title__svGc_ h1 or-7-col">See for Yourself</h3>
          <aside className="home_action__ojUj6">
            <a className="text-bold button_button__Q9XfT" href="/demo">Book a Demo</a>
          </aside>
        </section>

        <section className="home_prefooter-img__mb9xG">
          <img src="/home-inner-2.png" alt=""/>
        </section>

        <div 
          style={{opacity: videoModalOpen ? 1 : 0, pointerEvents: videoModalOpen ? 'all' : 'none'}} 
          className="home_video-modal__KCXSH"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 36 36" 
            className="home_close__6BR66"
            onClick={() => setVideoModalOpen(false)}
          >
            <path stroke="currentColor" strokeWidth="2" d="m1 1 34 34m0-34L1 35"></path>
          </svg>
          <article
  className="yt-lite"
  data-title="Path Robotics Video"
  style={{
    backgroundImage: `url(https://i.ytimg.com/vi/${currentVideoId}/hqdefault.jpg)`,
    ['--aspect-ratio' as any]: '56.25%',
  }}
>
  <button
    type="button"
    className="lty-playbtn"
    aria-label="Watch Path Robotics Video"
  ></button>
</article>

        </div>

        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;