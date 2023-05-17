import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Footer_link extends Component {
  render() {
    return (
      <Row>
        <Col lg={12}>
          <div className="text-center mt-5">
            <p className="text-white-50 f-15 mb-0">
              {new Date().getFullYear()} © Practice Buddy. Website Developed by
              Shravan
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Footer_link;
