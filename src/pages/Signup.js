import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Input, Label, Row } from "reactstrap";

//import images
import authBg from "../assets/images/auth-bg.png";
import logoDark from "../assets/images/logo-dark.png";

export default class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-account-pages vh-100 d-flex align-items-center bg-center position-relative"
          style={{ background: `url(${authBg})` }}
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
                      <p className="text-muted mt-2">
                        Sign up for a new Account
                      </p>
                    </div>
                    <div className="p-3">
                      <Form action="#" method="get" className="av-invalid">
                        <div className="mb-3">
                          <Label for="firstname" className="form-label">
                            First Name
                          </Label>
                          <Input
                            name="firstname"
                            required=""
                            placeholder="First Name"
                            id="firstname"
                            type="text"
                            className="form-control"
                            defaultValue=""
                          />
                        </div>
                        <div className="mb-3">
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
                            defaultValue=""
                          />
                        </div>
                        <div className="mb-3">
                          <Label for="userpassword" className="form-label">
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
                            id="termcondition-Check"
                          />
                          <Label
                            className="form-check-label"
                            for="termcondition-Check"
                          >
                            I accept{" "}
                            <Link
                              to="#"
                              className="text-dark font-weight-semibold"
                            >
                              Terms and Conditions
                            </Link>
                          </Label>
                        </div>
                        <div className="d-grid mt-3">
                          <button
                            type="submit"
                            className="btn-primary btn btn-none"
                          >
                            Register
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p>
                    Already have an account ?{" "}
                    <Link
                      to="login"
                      className="font-weight-semibold text-primary"
                    >
                      Signin{" "}
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
