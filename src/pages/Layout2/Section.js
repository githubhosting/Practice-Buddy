import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// Import Background Image
import Background from "../../assets/images/hero-2-bg.png";
import hero2 from "../../assets/images/hero-2-img.png";

import FeatherIcon from "feather-icons-react";

class Section extends Component {
  render() {
    return (
      <>
        {/* Hero Start */}
        <section
          className="hero-2 position-relative overflow-hidden"
          // Define Background Image
          style={{ background: `url(${Background})` }}
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <span className="badge badge-soft-primary mb-4">
                  Creative Design
                </span>
                <h1 className="font-weight-semibold mb-4 hero-2-title">
                  We Help Startups Launch Their Products
                </h1>
                <p className="mb-5 text-muted">
                  Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur
                  aut fugit sed quia consequuntur magni dolores ratione
                  voluptatem nesciunt.
                </p>
                <div className="custom-search">
                  <div className="input-group mb-lg-0 mb-4">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      placeholder="Write to us"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-sm btn-primary rounded-pill px-2"
                        type="button"
                        id="button-addon2"
                      >
                        <i>
                          <FeatherIcon icon="chevron-right" />
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} sm={10} className="mx-auto ms-lg-auto me-lg-0">
                <div className="mt-lg-0 mt-4">
                  <img src={hero2} alt="" className="img-xl-responsive" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Hero End */}
      </>
    );
  }
}

export default Section;
