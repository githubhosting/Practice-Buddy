import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

// import images
import price2 from "../assets/images/pricing/2.png";
import price1 from "../assets/images/pricing/1.png";
import price3 from "../assets/images/pricing/3.png";
import { Link } from "react-router-dom";

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      monthlyPricingData: [
        {
          image: price1,
          title: "Basic",
          space: "50MB",
          support: "No",
          price: "$9.00",
          isPopular: false,
        },
        {
          image: price2,
          title: "Standard",
          space: "100MB",
          support: "Yes",
          price: "$39.00",
          isPopular: true,
          isPrimary: true,
        },
        {
          image: price3,
          title: "Premium",
          space: "200MB",
          support: "No",
          price: "$79.00",
          isPopular: false,
        },
      ],
      yearlyPricingData: [
        {
          image: price1,
          title: "Basic",
          space: "50MB",
          support: "No",
          price: "$29.00 ",
          isPopular: false,
        },
        {
          image: price3,
          title: "Standard",
          space: "100MB",
          support: "Yes",
          price: "$49.00",
          isPopular: false,
        },
        {
          image: price3,
          title: "Premium",
          space: "200MB",
          support: "No",
          price: "$99.00",
          isPopular: true,
        },
      ],
    };
    this.toggleTab = this.toggleTab.bind(this);
  }
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <section className="section" id="pricing">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">Pricing Plan</h2>
                <p className="text-muted">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem ab illo inventore.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="text-center mb-4 pricing-tab">
                  <ul
                    className="nav nav-pills rounded-pill justify-content-center d-inline-block shadow-sm"
                    id="pricingpills-tab"
                    role="tablist"
                  >
                    <NavItem className="d-inline-block">
                      <NavLink
                        to="#"
                        className={classnames(
                          { active: this.state.activeTab === "1" },
                          "rounded-pill"
                        )}
                        onClick={() => {
                          this.toggleTab("1");
                        }}
                      >
                        Monthly
                      </NavLink>
                    </NavItem>
                    <NavItem className="d-inline-block">
                      <NavLink
                        to="#"
                        className={classnames(
                          { active: this.state.activeTab === "2" },
                          "rounded-pill"
                        )}
                        onClick={() => {
                          this.toggleTab("2");
                        }}
                      >
                        Yearly
                      </NavLink>
                    </NavItem>
                  </ul>
                </div>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane className="fade show" tabId="1">
                    <Row>
                      {this.state.monthlyPricingData.map((monthly, key) => (
                        <Col lg={4} key={key}>
                          <Card className="plan-card mt-4 rounded text-center border-0 shadow overflow-hidden">
                            <CardBody className="px-4 py-5">
                              {monthly.isPopular && (
                                <span className="badge badge-primary pricing-badge shadow-lg">
                                  Most Popular
                                </span>
                              )}
                              <div className="icon-mono avatar-md bg-soft-primary rounded mx-auto mb-5 p-3">
                                <img
                                  src={monthly.image}
                                  alt=""
                                  className="img-fluid d-block mx-auto"
                                />
                              </div>
                              <h4 className="text-uppercase mb-4 pb-1">
                                {monthly.title}
                              </h4>
                              <p className="text-muted">
                                Onlinespace:{" "}
                                <span className="fw-bold">{monthly.space}</span>
                              </p>
                              <p className="text-muted">
                                Support:{" "}
                                <span className="fw-bold">
                                  {monthly.support}
                                </span>
                              </p>
                              <p className="text-muted mb-4 pb-1">Domain 1</p>
                              <p className="text-muted font-size-14 mb-1">
                                All Extension Included
                              </p>
                              <p className="text-dark font-size-16 font-weight-semibold mb-4">
                                {monthly.price} / Month
                              </p>
                              {monthly.isPrimary ? (
                                <Link to="#" className="btn btn-primary">
                                  Buy Now
                                </Link>
                              ) : (
                                <Link to="#" className="btn btn-soft-primary">
                                  Buy Now
                                </Link>
                              )}
                            </CardBody>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </TabPane>

                  <TabPane className="fade show" tabId="2">
                    <Row>
                      {this.state.yearlyPricingData.map((yearly, key) => (
                        <Col lg={4} key={key}>
                          <Card className="plan-card mt-4 rounded text-center border-0 shadow overflow-hidden">
                            <CardBody className="px-4 py-5">
                              {yearly.isPopular && (
                                <span className="badge badge-primary pricing-badge shadow-lg">
                                  Most Popular
                                </span>
                              )}
                              <div className="icon-mono avatar-md bg-soft-primary rounded mx-auto mb-5 p-3">
                                <img
                                  src={yearly.image}
                                  alt=""
                                  className="img-fluid d-block mx-auto"
                                />
                              </div>
                              <h4 className="text-uppercase mb-4 pb-1">
                                {yearly.title}
                              </h4>
                              <p className="text-muted">
                                Onlinespace:{" "}
                                <span className="fw-bold">{yearly.space}</span>
                              </p>
                              <p className="text-muted">
                                Support:{" "}
                                <span className="fw-bold">
                                  {yearly.support}
                                </span>
                              </p>
                              <p className="text-muted mb-4 pb-1">Domain 1</p>
                              <p className="text-muted font-size-14 mb-1">
                                All Extension Included
                              </p>
                              <p className="text-dark font-size-16 font-weight-semibold mb-4">
                                {yearly.price} / Year
                              </p>
                              <Link to="#" className="btn btn-soft-primary">
                                Buy Now
                              </Link>
                            </CardBody>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
