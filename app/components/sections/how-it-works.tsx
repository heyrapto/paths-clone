export const HowItWorksSection = () => {
    return(
              <section className="home_how-slides__ZIMoN" id="how-slides">
                {/* Stripes wrapper */}
                <div aria-hidden="true" className="stripes_wrapper__rRsa5">
                  <span className="stripes_line__0mC2c stripes_f__mnJYv"></span>
                </div>
          
                {/* Illustration inner container */}
                <div className="illustration_inner__K_MDy">
                  {/* First slide - It Sees */}
                  <div 
                    className="illustration_slide__aNxYI is-inview" 
                    data-scroll="true" 
                    data-scroll-id="it-sees" 
                    data-scroll-call="it-sees" 
                    data-scroll-offset="50%" 
                    id="it-sees"
                  >
                    <div 
                      className="illustration_content__5njKj is-inview" 
                      data-scroll="true" 
                      data-scroll-sticky="true" 
                      data-scroll-target="#how-slides" 
                      data-scroll-offset="0%"
                    >
                      <p className="text-micro text-accent">01</p>
                      <p className="h3">It Sees</p>
                    </div>
                    
                    {/* SVG Content */}
                    <div className="illustration_svg__K_MDy">
                      <svg 
                        viewBox="0 0 1080 1080" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG content would go here - this is a placeholder for the massive SVG */}
                        <g className="svg-content">
                          {/* The actual SVG content would be properly formatted here */}
                        </g>
                      </svg>
                    </div>
                    
                    <aside>
                      <p className="s">
                        The Path system scans and creates a 3D model of each part. Our proprietary sensors are built to see highly reflective surfaces and survive harsh manufacturing environments.
                      </p>
                    </aside>
                  </div>
          
                  {/* Second slide - It Understands */}
                  <div 
                    className="illustration_slide__aNxYI is-inview" 
                    data-scroll="true" 
                    data-scroll-id="it-understands" 
                    data-scroll-call="it-understands" 
                    data-scroll-offset="50%" 
                    id="it-understands"
                  >
                    <div 
                      className="illustration_content__5njKj is-inview" 
                      data-scroll="true" 
                      data-scroll-sticky="true" 
                      data-scroll-target="#how-slides" 
                      data-scroll-offset="90%"
                    >
                      <p className="text-micro text-accent">02</p>
                      <p className="h3">It Understands</p>
                    </div>
                    
                    <aside>
                      <p className="s">
                        The Path system is built on proprietary AI. It analyzes the sensor data on the fly to understand each part individually. There's no need for perfect, identical parts or precise positioning in the cell.
                      </p>
                    </aside>
                  </div>
          
                  {/* Third slide - It Welds */}
                  <div 
                    className="illustration_slide__aNxYI is-inview" 
                    data-scroll="true" 
                    data-scroll-id="it-welds" 
                    data-scroll-call="it-welds" 
                    data-scroll-offset="50%" 
                    id="it-welds"
                  >
                    <div 
                      className="illustration_content__5njKj is-inview" 
                      data-scroll="true" 
                      data-scroll-sticky="true" 
                      data-scroll-target="#how-slides" 
                      data-scroll-offset="180%"
                    >
                      <p className="text-micro text-accent">03</p>
                      <p className="h3">It Welds</p>
                    </div>
                    
                    <aside>
                      <p className="s">
                        The Path system understands welding and adapts throughout the process. As it goes, it creates optimal robotic paths and part positioning to produce high quality welds.
                      </p>
                    </aside>
                  </div>
                </div>
              </section>
    )
}