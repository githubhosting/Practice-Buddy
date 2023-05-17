import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Import FeatherIcon
import FeatherIcon from "feather-icons-react";

// Import Feature Image
import Background from "../assets/images/demos.png";
import features_img1 from "../assets/images/features-1.jpg";
import dot_img from "../assets/images/dot-img.png";
import features_img2 from "../assets/images/features-2.jpg";

class Feature extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="features">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">Our Features</h2>
                <p className="text-muted">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem ab illo inventore.
                </p>
              </Col>
            </Row>

            <Row className="align-items-center mb-5">
              <Col md={5} className="order-2 order-md-1 mt-md-0 mt-5">
                <h2 className="mb-4">Perfect Solution For Small Businesses</h2>
                <p className="text-muted mb-5">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae ab illo inventore veritatis..
                </p>
                <Link to="#" className="btn btn-primary">
                  Find out more{" "}
                  <i>
                    <FeatherIcon icon="arrow-right" className="icon-xs ms-2" />
                  </i>
                </Link>
              </Col>
              <Col md={6} className="ms-md-auto order-1 order-md-2">
                <div className="position-relative">
                  <div className="ms-5 features-img">
                    <img
                      src={features_img1}
                      alt=""
                      className="img-fluid d-block mx-auto rounded shadow"
                    />
                  </div>
                  <img src={dot_img} alt="" className="dot-img-left" />
                </div>
              </Col>
            </Row>
            <Row className="align-items-center section pb-0">
              <Col md={6}>
                <div className="position-relative mb-md-0 mb-5">
                  <div className="me-5 features-img">
                    <img
                      src={features_img2}
                      alt=""
                      className="img-fluid d-block mx-auto rounded shadow"
                    />
                  </div>
                  <img src={dot_img} alt="" className="dot-img-right" />
                </div>
              </Col>
              <Col md={5} className="ms-md-auto">
                <h2 className="mb-4">
                  Build community & conversion with our suite of social tool
                </h2>
                <p className="text-muted mb-5">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae ab illo inventore veritatis..
                </p>
                <Link to="#" className="btn btn-primary">
                  Find out more{" "}
                  <i>
                    <FeatherIcon icon="arrow-right" className="icon-xs ms-2" />
                  </i>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section bg-gradient-primary">
          <div
            className="bg-overlay-img"
            style={{ background: `url(${Background})` }}
          ></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="text-center">
                  <h1 className="text-white mb-4">
                    Build your dream website today
                  </h1>
                  <p className="text-white mb-5 font-size-16">
                    Sed perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium totamrem aperiam eaque
                    inventore veritatis quasi.
                  </p>
                  <Link to="#" className="btn btn-lg btn-light">
                    Ask for Demonstration
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
