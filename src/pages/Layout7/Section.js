import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

// Import FeatherIcon
import FeatherIcon from "feather-icons-react";

// Import Background Image
import Background from "../../assets/images/hero-7-bg.jpg";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <section
          className="hero-7 bg-center position-relative"
          // Define Background Image
          style={{ background: `url(${Background})` }}
          id="home"
        >
          <div className="bg-overlay bg-dark"></div>
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <h1 className="font-weight-semibold mb-4 text-white hero-7-title">
                  We Help Startups Launch Their Products
                </h1>
                <p className="mb-5 text-white-70">
                  Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur
                  aut fugit sed quia consequuntur magni dolores ratione
                  voluptatem nesciunt.
                </p>
                <Link to="#" className="btn btn-light me-2">
                  Get Started{" "}
                  <i>
                    <FeatherIcon icon="arrow-right" className="icon-sm ms-1" />
                  </i>
                </Link>
              </Col>
              <Col xl={4} lg={5} className="ms-lg-auto">
                <div className="mx-auto rounded bg-white mt-5 mt-lg-0 p-4">
                  <h5 className="form-title mb-4 text-center">
                    Get 30 days FREE Trial
                  </h5>
                  <div className="mb-4"></div>
                  <Form className="registration-form">
                    <FormGroup className="mb-4">
                      <Label
                        htmlFor="exampleFormControlInput1"
                        className="text-muted font-size-15 mb-2"
                      >
                        Your Name*
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Label
                        htmlFor="exampleFormControlInput1"
                        className="text-muted font-size-15 mb-2"
                      >
                        Your email*
                      </Label>
                      <Input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder=""
                      />
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Label
                        htmlFor="exampleFormControlInput1"
                        className="text-muted font-size-15 mb-2"
                      >
                        Password*
                      </Label>
                      <Input
                        type="password"
                        className="form-control"
                        id="exampleFormControlInput3"
                        placeholder=""
                      />
                    </FormGroup>
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm text-uppercase"
                      >
                        Get Started
                      </button>
                    </div>
                  </Form>
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
