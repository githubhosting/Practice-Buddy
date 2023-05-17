import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//import images
import user1 from "../assets/images/user/img-2.jpg";
import user2 from "../assets/images/user/img-3.jpg";
import user3 from "../assets/images/user/img-1.jpg";
import Background from "../assets/images/cta-bg.png";
import demo from "../assets/images/demos.png";

export default class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="blog">
          <Container>
            <Row className="justify-content-center mb-4">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">Our Blog</h2>
                <p className="text-muted">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem ab illo inventore.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Card className="mt-4 border-0 shadow">
                  <CardBody className="p-4">
                    <span className="badge badge-soft-primary">
                      UI & UX Design
                    </span>
                    <h4 className="font-size-22 my-4">
                      <Link to="#">
                        Step bt step to conduct usability testing
                      </Link>
                    </h4>
                    <p className="text-muted">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit.
                    </p>
                    <div className="d-flex align-items-center mt-4 pt-2">
                      <img
                        src={user1}
                        className="rounded-circle avatar-sm me-3"
                        alt="..."
                      />
                      <div className="flex-body">
                        <h5 className="font-size-17 mb-0">John Yeager</h5>
                        <p className="text-muted mb-0 font-size-14">
                          Designer, New York
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card className="mt-4 border-0 shadow">
                  <CardBody className="p-4">
                    <span className="badge badge-soft-primary">CEO</span>
                    <h4 className="font-size-22 my-4">
                      <Link to="#">
                        Increase conversion rate from ad to landing page
                      </Link>
                    </h4>
                    <p className="text-muted">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit.
                    </p>
                    <div className="d-flex align-items-center mt-4 pt-2">
                      <img
                        src={user2}
                        className="rounded-circle avatar-sm me-3"
                        alt="..."
                      />
                      <div className="flex-body">
                        <h5 className="font-size-17 mb-0">Berneice Harris</h5>
                        <p className="text-muted mb-0 font-size-14">
                          Designer, New York
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card className="mt-4 border-0 shadow">
                  <CardBody className="p-4">
                    <span className="badge badge-soft-primary">Developer</span>
                    <h4 className="font-size-22 my-4">
                      <Link to="#">
                        Why small business should start marketing
                      </Link>
                    </h4>
                    <p className="text-muted">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit.
                    </p>
                    <div className="d-flex align-items-center mt-4 pt-2">
                      <img
                        src={user3}
                        className="rounded-circle avatar-sm me-3"
                        alt="..."
                      />
                      <div className="flex-body">
                        <h5 className="font-size-17 mb-0">Sarah Pettway</h5>
                        <p className="text-muted mb-0 font-size-14">
                          Designer, New York
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section
          className="section bg-center w-100 bg-light"
          style={{ background: `url(${Background})` }}
        >
          <Container>
            <Row>
              <Col lg={12}>
                <Card className="bg-gradient-primary text-center border-0">
                  <div
                    className="bg-overlay-img"
                    style={{ background: `url(${demo})` }}
                  ></div>
                  <CardBody className="mx-auto p-sm-5 p-4">
                    <Row className="justify-content-center">
                      <Col lg={10}>
                        <div className="p-3">
                          <h2 className="text-white mb-4">
                            Join our Growing Community
                          </h2>
                          <p className="text-white-70 font-size-16 mb-4 pb-3">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                          <Link to="#" className="btn btn-light rounded-pill">
                            Sign Up for free
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
