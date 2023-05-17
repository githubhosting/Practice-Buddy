import React, { Component } from "react";

// Import Background Image
import Background from "../../assets/images/hero-3-bg.png";
import { Container, Row, Col } from "reactstrap";

//import icon
import FeatherIcon from "feather-icons-react";

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
        <section
          className="hero-3 bg-center position-relative"
          // Define Background Image
          style={{ background: `url(${Background})` }}
          id="home"
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="text-center">
                  <span className="badge badge-soft-primary mb-4">
                    Professional Landing
                  </span>
                  <h1 className="font-weight-semibold mb-4 hero-3-title">
                    Professional, Multipurpose Landing Page
                  </h1>
                  <p className="mb-5 text-muted subtitle w-75 mx-auto">
                    Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur
                    aut fugit sed consequuntur magni dolores nesciunt.
                  </p>

                  <div>
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill me-2"
                    >
                      Sign up for free
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-light rounded-pill me-2"
                      onClick={this.openModal}
                    >
                      Play video{" "}
                      <i>
                        <FeatherIcon
                          icon="play-circle"
                          className="ms-1 icon-sm"
                        />
                      </i>
                    </button>
                  </div>
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
      </React.Fragment>
    );
  }
}

export default Section;
