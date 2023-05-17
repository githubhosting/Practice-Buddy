import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import Particles from "react-tsparticles";

//Import Background Image
import Background from "../../assets/images/hero-8-bg.jpg";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <section
          className="hero-8 bg-center position-relative"
          // Define Background Image
          style={{ background: `url(${Background})` }}
          id="home"
        >
          <Particles
            params={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#ffffff",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 6,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 2,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
              config_demo: {
                hide_card: false,
                background_color: "#b61924",
                background_image: "",
                background_position: "50% 50%",
                background_repeat: "no-repeat",
                background_size: "cover",
              },
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0px",
            }}
          />
          <div className="bg-overlay bg-dark"></div>
          <Container>
            <Row className="justify-content-center hero-content">
              <Col lg={9}>
                <div className="text-center">
                  <i
                    className="text-white sw-1_5 icon-lg icon-spin mb-4"
                    data-feather="star"
                  ></i>
                  <h1 className="font-weight-semibold mb-4 text-white hero-8-title">
                    We help startups launch their products with awesome website
                  </h1>
                  <p className="mb-5 text-white-70 w-lg-75 mx-auto">
                    Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur
                    aut fugit sed quia consequuntur magni dolores ratione
                    voluptatem nesciunt.
                  </p>
                  <Link to="#" className="btn btn-light">
                    Get Started{" "}
                    <i className="icon-sm ms-1" data-feather="arrow-right"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Hero End */}
      </React.Fragment>
    );
  }
}

export default Section;
