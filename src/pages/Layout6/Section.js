import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

// Import FeatherIcon
import FeatherIcon from "feather-icons-react";

// Import Background Image
import Background from "../../assets/images/hero-6-bg.png";
import hero from "../../assets/images/hero-6-img.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <section
          className="hero-6 bg-center position-relative overflow-hidden"
          // Define Background Image
          style={{ background: `url(${Background})` }}
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <i>
                  <FeatherIcon
                    icon="sunrise"
                    className="mb-4 icon-lg sw-1_5 text-primary"
                  />
                </i>
                <h1 className="font-weight-semibold mb-4 hero-6-title">
                  Get Your Professional Website Done With{" "}
                  <b>Qexal</b>
                </h1>
                <p className="mb-5 text-muted">
                  Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur
                  aut fugit sed quia consequuntur magni dolores ratione
                  voluptatem nesciunt.
                </p>
                <Link to="#" className="btn btn-primary me-2">
                  Get Started{" "}
                  <i>
                    <FeatherIcon icon="arrow-right" className="icon-sm ms-1" />
                  </i>
                </Link>
              </Col>
              <Col lg={6} sm={10} className="mx-auto ms-lg-auto me-lg-0">
                <div className="mt-lg-0 mt-5">
                  <img src={hero} alt="" className="img-xl-responsive" />
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
