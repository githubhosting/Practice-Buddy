import React, { Component } from "react";
import hero1 from "../../assets/images/hero-1-img.png";
import { Container, Row, Col } from "reactstrap";

// Import Background Image
import Background from "../../assets/images/hero-1-bg.png";
import hero2 from "../../assets/images/hero-1-bottom-shape.png";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import FeatherIcon from "feather-icons-react";

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
      <>
        {/* Hero Start */}
        <section
          className="hero-1 bg-center bg-primary position-relative"
          // Define Background Image
          style={{ background: `url(${Background})` }}
          id="home"
        >
          <Container>
            <Row className="align-items-center hero-content">
              <Col lg={5}>
                <h1 className="text-white display-4 font-weight-semibold mb-4 hero-1-title">
                  Optimize Your Service Business
                </h1>
                <p className="text-white-70 mb-4  mb-lg-5">
                  Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur
                  aut fugit sed quia consequuntur magni dolores ratione
                  voluptatem nesciunt.
                </p>
                <Link to="#" className="btn btn-lg btn-light rounded-pill me-2">
                  Get Started
                </Link>
                <div className="d-inline-block" onClick={this.openModal}>
                  <Link to="#" className="video-play-icon text-white">
                    <span className="play-icon-circle me-2">
                      <i>
                        <FeatherIcon icon="play" className="icon-sm icon" />{" "}
                      </i>
                    </span>
                    <span className="">Watch The Video!</span>
                  </Link>
                </div>
              </Col>
              <Col lg={6} sm={10} className="mx-auto ms-lg-auto me-lg-0">
                <div className="mt-lg-0 mt-4">
                  <img src={hero1} alt="" className="img-md-responsive" />
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
          <div className="hero-bottom-shape">
            <img src={hero2} alt="" className="img-fluid d-block mx-auto" />
          </div>
        </section>
        {/* Hero End */}
      </>
    );
  }
}

export default Section;
