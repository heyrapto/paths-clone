import React, { useState } from "react";

export const Footer = () => {
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState('');

  return (
    <>
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
    <footer className="footer_footer__SH230">
      <div className="footer_inner__hdEE8">
        {/* Brand / Logo + Address */}
        <div className="footer_brand__ZrtcI">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 347 173"
            className="footer_wordmark__7TESn"
          >
            <g fill="currentColor" clipPath="url(#path-wordmark_svg__a)">
              <path d="M51 134c-11 0-20-3-27-10v49H0V86c0-26 20-48 48-48 27 0 47 22 47 48 0 27-20 48-44 48Zm-3-74c-13 0-24 12-24 26 0 15 11 27 24 27s23-12 23-27-10-26-23-26Zm150 72h-22v-9c-7 7-17 11-29 11-24 0-44-21-44-47 0-27 20-49 48-49s47 22 47 49v45Zm-47-72c-13 0-24 12-24 27 0 14 11 26 24 26s23-12 23-26c0-15-10-27-23-27Zm137-19V0h-24v41h-31V17h-24v77c0 25 15 41 42 38v-21c-12 0-18-4-18-17V62l31-1V41h24Zm21-3-21 3v20h17c16 0 18 12 18 18v53h24V79c0-24-15-40-38-41Z"></path>
              <path d="M264 132h24V61h-24v71Z"></path>
            </g>
            <defs>
              <clipPath id="path-wordmark_svg__a">
                <path fill="#fff" d="M0 0h347v173H0z"></path>
              </clipPath>
            </defs>
          </svg>

          <div className="text-micro text-muted">
            <address className="mb-1">
              528 Maier Place, <br />
              Columbus, OH 43215
            </address>
            <p className="mb-1">
              Copyright 2025 Path Robotics Inc.
              <br />
              All rights reserved.
            </p>
            <p className="footer_legals__1CgQG">
              <a className="link text-micro text-light" href="/terms-and-conditions">
                Terms
              </a>
              <a className="link text-micro text-light" href="/privacy-policy">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <ul className="footer_social__kg6c3">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/PathRobotics"
              className="link s"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/pathrobotics"
              className="link s"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/pathrobotics/"
              className="link s"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/path-robotics/"
              className="link s"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@PathRobotics"
              className="link s"
            >
              Medium
            </a>
          </li>
        </ul>

        {/* Navigation + Newsletter */}
        <div className="footer_third__eDygE">
          <div className="footer_upper__Z8V3Q">
            <nav>
              <a className="s link" href="/">
                Home
              </a>
              <a className="s link" href="/demo">
                Demo
              </a>
              <a className="s link" href="/careers">
                Careers
              </a>
              <a className="s link" href="/contact">
                Contact
              </a>
              <a className="s link" href="/about">
                About
              </a>
              <a className="s link" href="/blog">
                Blog
              </a>
            </nav>
            <button className="s text-muted footer_back-to-top__4j2uU">
              Back to Top
            </button>
          </div>

          {/* Newsletter */}
          <div className="footer_lower____CNr">
            <div className="newsletter_wrapper__lWjwE">
              <div style={{ opacity: 1, pointerEvents: "all" }}>
                <p className="text-micro newsletter_label__SwqFG">
                  Subscribe to Our Newsletter
                </p>
                <p className="text-micro text-muted newsletter_label__SwqFG">
                  By signing up, you agree to our{" "}
                  <a
                    className="newsletter_links__mKcRL text-light link text-micro decorated simple"
                    href="/terms-and-conditions"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    className="newsletter_links__mKcRL decorated simple text-light link text-micro"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
                <form className="newsletter_form__tnrQ1">
                  <input
                    type="checkbox"
                    name="BOT"
                    style={{
                      opacity: 0,
                      position: "absolute",
                      left: "-9999px",
                    }}
                  />
                  <input
                    name="EMAIL"
                    id="EMAIL"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="newsletter_input__JsNZL"
                  />
                  <button
                    className="hoverable newsletter_submit__Ity96"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="#A09F9E"
                        strokeMiterlimit="10"
                        d="M1 17L17 1M17 13.5V1H4.5"
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
              <div style={{ opacity: 0 }} className="newsletter_thanks__nngEj">
                <p className="xs">Thanks for subscribing!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative stripes */}
        <div aria-hidden="true" className="stripes_wrapper__rRsa5">
          <span className="stripes_line__0mC2c stripes_c__bKlfI"></span>
          <span className="stripes_line__0mC2c stripes_e__fTlAj"></span>
        </div>
      </div>
    </footer>
    </>
  );
};
