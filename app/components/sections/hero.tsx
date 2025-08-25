export const HeroSection = () => {
    return(
        <section className="home_hero__vJLkN" id="hero">
      {/* Hero Image */}
      <img
        src="//images.ctfassets.net/mluanev0pzgf/3LNzHTEmYMN4thtInYMRU2/2ddc9cf6622954465319f81414317096/hero.png?q=95"
        alt=""
        className="home_hero-image__QFiue is-inview"
        data-scroll="true"
        data-scroll-speed="10"
        style={{
          transform:
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -58.8906, 0, 1)",
        }}
      />

      {/* Headings */}
      <div className="home_heading__56sD2">
        <h2
          className="h1 is-inview"
          data-scroll="true"
          data-scroll-sticky="true"
          data-scroll-target="#hero"
          data-scroll-offset="0, 66%"
          style={{
            transform:
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 32.1719, 0, 1)",
          }}
        >
          Truly
        </h2>
        <h1
          className="h1 ol-5-col is-inview"
          data-scroll="true"
          data-scroll-sticky="true"
          data-scroll-target="#hero"
          data-scroll-offset="16%, 50%"
          style={{
            transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
          }}
        >
          Autonomous Welding
        </h1>
      </div>

      {/* Stripes */}
      <div aria-hidden="true" className="stripes_wrapper__rRsa5">
        <span className="stripes_line__0mC2c stripes_a__dlk6e"></span>
        <span className="stripes_line__0mC2c stripes_b__ZbuGG"></span>
        <span className="stripes_line__0mC2c stripes_c__bKlfI"></span>
        <span className="stripes_line__0mC2c stripes_d__TV6Zt"></span>
        <span className="stripes_line__0mC2c stripes_e__fTlAj"></span>
        <span className="stripes_line__0mC2c stripes_f__mnJYv"></span>
        <span className="stripes_line__0mC2c stripes_g__sg_6e"></span>
      </div>

      {/* Logo Mark */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 189 214"
        className="home_mark__85LkS"
      >
        <g clipPath="url(#path-mark_svg__a)">
          <path
            fill="currentColor"
            d="M146 106c3-9 5-19 5-30 0-42-31-76-75-76C31 0 0 34 0 76v138h38v-79c11 12 26 17 43 17 7 0 15-1 21-3v-43c-6 7-16 12-26 12-21 0-38-19-38-42s17-41 38-41 38 18 38 41c0 12-5 22-12 30h44v43h43v-43h-43Z"
          />
        </g>
        <defs>
          <clipPath id="path-mark_svg__a">
            <path fill="#fff" d="M0 0h189v214H0z" />
          </clipPath>
        </defs>
      </svg>

      {/* Callout Text */}
      <p className="home_callout__haRsE s or-15-col">
        We create manufacturing robots that autonomously scan, position, and weld
        your parts without the need for skilled welders or robot programmers.
      </p>
    </section>
    )
}