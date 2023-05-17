import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

//import icon
import FeatherIcon from "feather-icons-react";

export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="services">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">About</h2>
                <p className="text-muted">
                  PracticeBuddy is a platform which allows learners to practice
                  speaking in English with a small group of buddies and a coach.
                  A learner is assigned to a group of 6-7 learners, who would
                  engage with a coach over 12 sessions (1 hour each) over 30-45
                  days.
                </p>
              </Col>
            </Row>

            <Row className="flex justify-content-center">
              <Col lg={6}>
                <div className="service-box text-center px-2 py-5 position-relative mb-4">
                  <div className="service-box-content p-4">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <i>
                        <FeatherIcon icon="box" />
                      </i>
                    </div>
                    <h4 className="mb-3 font-size-22">Interactive Sessions</h4>
                    <p className="text-muted mb-0">
                      Engage in lively discussions with your coach and group of
                      buddies. Through interactive sessions, you'll have the
                      opportunity to practice speaking English in a comfortable
                      and supportive environment. Enhance your conversational
                      skills, boost your confidence, and gain fluency by
                      actively participating in engaging conversations.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="service-box text-center px-2 py-5 position-relative mb-4 active">
                  <div className="service-box-content p-4">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <i>
                        <FeatherIcon icon="layers" />
                      </i>
                    </div>
                    <h4 className="mb-3 font-size-22">Personalized Coaching</h4>
                    <p className="text-muted mb-0">
                      Receive personalized guidance from experienced coaches who
                      will provide individual attention to each learner. Our
                      coaches are trained to identify your specific areas of
                      improvement and tailor the sessions to meet your needs.
                      They will provide constructive feedback, language tips,
                      and help you overcome any language barriers, ensuring your
                      progress throughout the program.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="service-box text-center px-2 py-5 position-relative mb-4">
                  <div className="service-box-content p-4">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <i>
                        <FeatherIcon icon="server" />
                      </i>
                    </div>
                    <h4 className="mb-3 font-size-22">Fun Learning Tasks</h4>
                    <p className="text-muted mb-0">
                      Experience language learning through enjoyable and
                      interactive tasks that make the process engaging and
                      entertaining. Forget about traditional homework and
                      assignments. Instead, you'll participate in fun
                      activities, role-plays, games, and real-life simulations
                      that focus on the six essential aspects of correct
                      communication. By practicing these tasks, you'll develop
                      your language skills in a relaxed and enjoyable manner.
                    </p>
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
