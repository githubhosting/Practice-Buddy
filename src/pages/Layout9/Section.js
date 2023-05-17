import React, { Component } from "react";

import { Container, Row, Col, Form, Input} from "reactstrap";

// Import Background Image
import Background from "../../assets/images/hero-9-bg.jpg";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <section
          className="hero-9 bg-center position-relative"
          // Define Background Image
          style={{ background: `url(${Background})` }}
          id="home"
        >
          <div className="bg-overlay bg-dark"></div>
          <Container>
            <Row className="justify-content-center hero-content">
              <Col lg={9}>
                <div className="text-center">
                  <h1 className="font-weight-semibold mb-4 text-white hero-9-title">
                    We help startups launch their products with awesome website
                  </h1>
                  <p className="mb-5 text-white w-lg-75 mx-auto">
                    Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur
                    aut fugit sed quia consequuntur magni dolores ratione
                    voluptatem nesciunt.
                  </p>
                  <div className="text-center subscribe-form margin-t-30">
                    <Form className="">
                      <Input
                        type="text"
                        placeholder="Email"
                        className="form-control"
                        required=""
                      />
                      <button
                        type="submit"
                        className="btn-primary rounded-pill btn btn-none"
                      >
                        Subscribe
                      </button>
                    </Form>
                  </div>
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
