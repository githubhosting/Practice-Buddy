/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Input, Label, Row } from "reactstrap";

//import icon
import FeatherIcon from "feather-icons-react";

// import images
import auth from "../assets/images/auth-bg.png";
import logoDark from "../assets/images/logo-dark.png";

export default class Apply extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-account-pages d-flex align-items-center bg-center position-relative"
          style={{ background: `url(${auth})` }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={8}>
                <div className="card shadow rounded border-0">
                  <iframe
                    title="Submit form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfWtAsJq1mqvetf7guJdlUCVxOy4DV6b6QWkthrrQd5YNddYg/viewform?embedded=true"
                    height="1024"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    className="mt-10 w-full"
                  >
                    Loading…
                  </iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
