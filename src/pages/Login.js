import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Input, Label, Row } from "reactstrap";

//import icon
import FeatherIcon from "feather-icons-react";

// import images
import auth from "../assets/images/auth-bg.png";
import logoDark from "../assets/images/logo-dark.png";

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-account-pages vh-100 d-flex align-items-center bg-center position-relative"
          style={{ background: `url(${auth})` }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
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
                      <p className="text-muted mt-2">
                        Sign in to continue to Qexal.
                      </p>
                    </div>
                    <div className="p-3">
                      <Form method="get" className="av-invalid">
                        <div className="mb-3">
                          <Label htmlFor="username" className="form-label">
                            Username
                          </Label>
                          <Input
                            name="username"
                            required=""
                            placeholder="Enter username"
                            id="username"
                            type="text"
                            className="form-control"
                            defaultValue=""
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="userpassword" className="form-label">
                            Password
                          </Label>
                          <Input
                            name="password"
                            required=""
                            placeholder="Enter password"
                            id="userpassword"
                            type="password"
                            className="form-control"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="remember-Check"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="remember-Check"
                          >
                            Remember me
                          </Label>
                        </div>
                        <div className="d-grid mt-3">
                          <button
                            type="submit"
                            className="btn btn-primary btn-none"
                          >
                            Log In
                          </button>
                        </div>
                        <div className="mt-4 mb-0 text-center">
                          <Link className="text-dark" to="password-forget">
                            <i>
                              <FeatherIcon
                                icon="lock"
                                className="icon-xs icon me-1"
                              />
                            </i>{" "}
                            Forgot your password?
                          </Link>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p>
                    Don't have an account ?{" "}
                    <Link
                      to="sign-up"
                      className="font-weight-semibold text-primary"
                    >
                      Signup{" "}
                    </Link>{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
