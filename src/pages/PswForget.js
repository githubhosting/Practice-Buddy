import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Input, Label, Row } from "reactstrap";

//import images
import auth from "../assets/images/auth-bg.png";
import logoDark from "../assets/images/logo-dark.png";

export default class PswForget extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-account-pages vh-100 d-flex align-items-center bg-center position-relative"
          style={{ background: `url(${auth})` }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg={5}>
                <div className="bg-white shadow">
                  <div className="p-4">
                    <div className="text-center mt-3">
                      <Link to="/">
                        <img
                          src={logoDark}
                          alt=""
                          className="logo-dark"
                          height="30"
                        />
                      </Link>
                      <p className="text-muted mt-2">Reset Password</p>
                    </div>
                    <div className="p-3">
                      <div
                        className="alert alert-warning  text-center"
                        role="alert"
                      >
                        Enter your email address and we'll send you an email
                        with instructions to reset your password.
                      </div>
                      <form action="#" method="get" className="av-invalid">
                        <div>
                          <Label for="email" className="form-label">
                            Email
                          </Label>
                          <Input
                            name="email"
                            required=""
                            placeholder="Enter Email"
                            id="email"
                            type="email"
                            className="form-control"
                            value=""
                          />
                        </div>
                        <div className="d-grid mt-3">
                          <button
                            type="submit"
                            className="btn btn-primary btn-none"
                          >
                            Reset your Password
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
