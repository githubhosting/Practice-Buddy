import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//import icon
import FeatherIcon from "feather-icons-react";

import Background from "../../assets/images/hero-4-bg.jpg";
import hero from "../../assets/images/hero-4-overlay.png";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        {/* <!-- Hero Start */}
        <section
          className="hero-4 position-relative bg-light"
          // Define Background Image
          style={{ background: `url(${Background})` }}
          id="home"
        >
          <div className="bg-overlay bg-dark"></div>
          <div
            className="bg-overlay-img"
            style={{ background: `url(${hero})` }}
          ></div>
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <span className="badge badge-soft-primary mb-4">
                  Creative Design
                </span>
                <h1 className="font-weight-semibold mb-4 hero-4-title">
                  We Help Startups Launch Their Products
                </h1>
                <p className="mb-5 text-muted">
                  Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur
                  aut fugit sed quia consequuntur magni dolores ratione
                  voluptatem nesciunt.
                </p>
                <Link to="#" className="btn btn-lg btn-primary me-2">
                  Get Started
                </Link>{" "}
                <Link to="#" className="btn btn-lg btn-soft-primary me-2">
                  Try for free
                </Link>
              </Col>
              <Col lg={4} className="ms-lg-auto text-center mt-lg-0 mt-5">
                <div className="d-inline-block">
                  <Link
                    to="#"
                    className="play-icon-circle video-play-icon"
                    onClick={this.openModal}
                  >
                    <i>
                      <FeatherIcon icon="play" className="icon ps-1" />
                    </i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
          <ModalVideo
            channel="vimeo"
            isOpen={this.state.isOpen}
            videoId="12022651"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>
        {/* Hero End */}
      </React.Fragment>
    );
  }
}

export default Section;
