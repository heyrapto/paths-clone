import { useEffect, useRef, useState } from "react"
import { useMobile } from "../../hooks/use-mobile"
import { navItems } from "~/constants"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Navbar = () => {
  const { isDesktop } = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileNavRef = useRef(null)
  const linksRef = useRef<any>([])
  const tl = useRef<any>(null)

  const toggleMenu = () => {
    if(isMenuOpen){
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useGSAP(() => {
    gsap.set(mobileNavRef.current, { xPercent: 100 });
    gsap.set(linksRef.current, { autoAlpha: 0, x: -20 });
  
    tl.current = gsap.timeline({ paused: true })
      .to(mobileNavRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(linksRef.current, {
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out"
      }, "<");
  });  

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  
    // cleanup in case component unmounts while menu is open
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

    return (
      <>
      {isDesktop ? (
        <header className="header_header____5Dq" data-scroll-section="true">
        <div className="header_inner__eSf6j">
          <a className="header_home__MEQWY no-decoration" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 776 135" className="header_logo__y2C92">
              <g fill="currentColor" clipPath="url(#path-lockup_svg__a)">
                <path d="M95 48C95 22 75 0 47 0 20 0 0 22 0 48v87h24V85c7 8 16 11 27 11l13-2V67c-4 5-10 7-17 7-13 0-23-11-23-26 0-14 10-26 23-26 14 0 24 11 24 26 0 7-3 14-7 19h27v27h27V67H91c3-6 4-12 4-19Zm101-30h-23v76h13V67h10c17 0 31-5 31-24 0-22-15-25-31-25Zm0 38h-10V29h10c9 0 18 1 18 14 0 11-8 13-18 13Zm79 2c0-16-7-22-22-22s-23 8-24 19h11c1-6 5-9 12-9 6 0 11 2 11 10v2l-10 1c-9 1-15 2-20 6-3 2-6 6-6 12 0 10 7 18 20 18 8 0 14-3 17-8v7h12l-2-20 1-16Zm-12 12c0 11-7 15-14 15-6 0-9-3-9-8s4-8 13-9l10-1v3Zm36-49h-12v17h-8v9h8v32c0 12 2 15 14 15h9V84h-5c-5 0-6-2-6-7V47h11v-9h-11V21Zm46 15c-8 0-13 4-17 9V18h-12v76h12V65c0-11 4-18 13-18 3 0 6 1 7 3 3 2 3 6 3 12v32h13V59c0-7-2-12-4-16-3-4-8-7-15-7Zm103 4c0-17-11-22-33-22h-22v76h13V63h15l16 31h14l-17-33c10-4 14-11 14-21Zm-30 12h-12V29h11c10 0 18 1 18 11s-6 12-17 12Zm60-16c-14 0-27 10-27 30s13 29 27 29c13 0 26-9 26-29s-13-30-26-30Zm0 49c-8 0-14-6-14-19s5-19 14-19c8 0 13 6 13 19s-5 19-13 19Zm60-49c-7 0-12 3-15 8V18h-13v76h12v-6c3 4 8 7 15 7 14 0 24-11 24-29 0-19-10-30-23-30Zm-2 49c-8 0-14-7-14-19 0-13 6-19 14-19s13 7 13 19c0 11-5 19-13 19Zm56-49c-14 0-26 10-26 30s12 29 26 29s26-9 26-29-12-30-26-30Zm0 49c-8 0-14-6-14-19s6-19 14-19s14 6 14 19-6 19-14 19Zm47-64h-12v17h-8v9h8v32c0 12 2 15 14 15h9V84h-5c-5 0-6-2-6-7V47h11v-9h-11V21Zm29 17h-12v56h12V38Zm0-20h-12v12h12V18Zm33 67c-8 0-14-6-14-19s6-19 14-19c7 0 12 4 13 10l11-1c-2-12-12-20-24-20-16 0-26 13-26 30s9 29 26 29c12 0 22-7 25-19l-12-2c-2 8-7 11-13 11Zm55-25-7-1c-5-2-8-3-8-7s5-6 10-6c7 0 12 3 13 9l11-2c-2-11-12-17-23-17-12 0-22 7-22 17s7 14 17 16l7 2c5 1 10 3 10 7 0 5-4 8-11 8-8 0-12-5-13-11l-12 2c2 10 11 18 25 18 12 0 23-6 23-18 0-11-9-14-20-17Z"></path>
              </g>
              <defs>
                <clipPath id="path-lockup_svg__a">
                  <path fill="#fff" d="M0 0h776v135H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </a>
          <p className="s header_navigation-item__li5I8">
            <a className="link" href="/about">About</a>
          </p>
          <p className="s header_navigation-item__li5I8">
            <a className="link" href="/careers">Careers</a>
          </p>
          <p className="s header_navigation-item__li5I8">
            <a className="link" href="/demo">Demo</a>
          </p>
        </div>
      </header>
      ) :
      (
      <header className="header_header____5Dq" data-scroll-section="true">
      <div className="header_inner__eSf6j">
        {/* Logo / Home Link */}
        <a className="header_home__MEQWY no-decoration" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 776 135"
            className="header_logo__y2C92"
          >
            <g fill="currentColor" clipPath="url(#path-lockup_svg__a)">
              <path d="M95 48C95 22 75 0 47 0 20 0 0 22 0 48v87h24V85c7 8 16 11 27 11l13-2V67c-4 5-10 7-17 7-13 0-23-11-23-26 0-14 10-26 23-26 14 0 24 11 24 26 0 7-3 14-7 19h27v27h27V67H91c3-6 4-12 4-19Zm101-30h-23v76h13V67h10c17 0 31-5 31-24 0-22-15-25-31-25Zm0 38h-10V29h10c9 0 18 1 18 14 0 11-8 13-18 13Zm79 2c0-16-7-22-22-22s-23 8-24 19h11c1-6 5-9 12-9 6 0 11 2 11 10v2l-10 1c-9 1-15 2-20 6-3 2-6 6-6 12 0 10 7 18 20 18 8 0 14-3 17-8v7h12l-2-20 1-16Zm-12 12c0 11-7 15-14 15-6 0-9-3-9-8s4-8 13-9l10-1v3Zm36-49h-12v17h-8v9h8v32c0 12 2 15 14 15h9V84h-5c-5 0-6-2-6-7V47h11v-9h-11V21Zm46 15c-8 0-13 4-17 9V18h-12v76h12V65c0-11 4-18 13-18 3 0 6 1 7 3 3 2 3 6 3 12v32h13V59c0-7-2-12-4-16-3-4-8-7-15-7Zm103 4c0-17-11-22-33-22h-22v76h13V63h15l16 31h14l-17-33c10-4 14-11 14-21Zm-30 12h-12V29h11c10 0 18 1 18 11s-6 12-17 12Zm60-16c-14 0-27 10-27 30s13 29 27 29c13 0 26-9 26-29s-13-30-26-30Zm0 49c-8 0-14-6-14-19s5-19 14-19c8 0 13 6 13 19s-5 19-13 19Zm60-49c-7 0-12 3-15 8V18h-13v76h12v-6c3 4 8 7 15 7 14 0 24-11 24-29 0-19-10-30-23-30Zm-2 49c-8 0-14-7-14-19 0-13 6-19 14-19s13 7 13 19c0 11-5 19-13 19Zm56-49c-14 0-26 10-26 30s12 29 26 29s26-9 26-29-12-30-26-30Zm0 49c-8 0-14-6-14-19s6-19 14-19s14 6 14 19-6 19-14 19Zm47-64h-12v17h-8v9h8v32c0 12 2 15 14 15h9V84h-5c-5 0-6-2-6-7V47h11v-9h-11V21Zm29 17h-12v56h12V38Zm0-20h-12v12h12V18Zm33 67c-8 0-14-6-14-19s6-19 14-19c7 0 12 4 13 10l11-1c-2-12-12-20-24-20-16 0-26 13-26 30s9 29 26 29c12 0 22-7 25-19l-12-2c-2 8-7 11-13 11Zm55-25-7-1c-5-2-8-3-8-7s5-6 10-6c7 0 12 3 13 9l11-2c-2-11-12-17-23-17-12 0-22 7-22 17s7 14 17 16l7 2c5 1 10 3 10 7 0 5-4 8-11 8-8 0-12-5-13-11l-12 2c2 10 11 18 25 18 12 0 23-6 23-18 0-11-9-14-20-17Z"></path>
            </g>
            <defs>
              <clipPath id="path-lockup_svg__a">
                <path fill="#fff" d="M0 0h776v135H0z" />
              </clipPath>
            </defs>
          </svg>
        </a>

        {/* Menu Button & Navigation */}
        <div 
          id="menu" 
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} 
          className="menu-button_menu-button__mWYLH"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 36 36"
            className="menu-button_icon__l3ON6"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d={isMenuOpen ? "m1 1 34 34m0-34L1 35" : "M1 1h34M1 18h34M1 35h34"}
            />
          </svg>

          <nav
            className="menu-button_menu__4NK0H"
            ref={mobileNavRef}
          >
            <ul>
              {navItems.map((item, index) => (
                <li 
                key={index} 
                ref={(el) => (linksRef.current[index] = el) as any}
                >
                <a href={item.link} onClick={closeMenu}>
                  <h4 className="h4">{item.title}</h4>
                </a>
              </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
      )}
      </>
    )
}