import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FooterLink from "../Footer/Footer_link";

// Footer Image
import footer_image from "../../assets/images/footer-bg.png";

import logolight from "../../assets/images/logo-dark.png";
// Import Logo

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          id: 1,
          title: "Customer",
          child: [
            { title: "Works", link: "/" },
            { title: "Strategy", link: "/" },
            { title: "Releases", link: "/" },
            { title: "Press", link: "/" },
            { title: "Mission", link: "/" },
          ],
        },
        {
          id: 2,
          title: "Product",
          child: [
            { title: "Tranding", link: "/" },
            { title: "Popular", link: "/" },
            { title: "Customers", link: "/" },
            { title: "Features", link: "/" },
          ],
        },
        {
          id: 3,
          title: "Information",
          child: [
            { title: "Developers", link: "/" },
            { title: "Support", link: "/" },
            { title: "Customer Service", link: "/" },
            { title: "Get Started", link: "/" },
            { title: "Guide", link: "/" },
          ],
        },
        {
          id: 3,
          title: "Support",
          child: [
            { title: "FAQ", link: "/" },
            { title: "Contact", link: "/" },
            { title: "Disscusion", link: "/" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* Footer Start */}
        <footer
          className="footer"
          style={{ backgroundImage: "url(" + footer_image + ")" }}
        >
          <Container>
            <Row>
              <Col lg={7}>
                <div className="mb-4">
                  <Link to="#">
                    <img
                      src={logolight}
                      alt=""
                      className="pt-1 px-1 bg-white rounded-2"
                      height="40"
                    />
                  </Link>
                  <p className="text-white-50 my-4">
                    On PracticeBuddy, you can practice speaking in English with
                    your Coach. No homework, no assignments, just fun
                    interactions!
                  </p>
                </div>
              </Col>
              {/* <Col lg={7} className="ms-lg-auto">
                <Row>
                  {this.state.links.map((item, key) => (
                    <Col lg={3} xs={6} key={key}>
                      <div className="mt-4 mt-lg-0">
                        <h4 className="text-white font-size-18 mb-3">
                          {item.title}
                        </h4>
                        <ul className="list-unstyled footer-sub-menu">
                          {item.child.map((linkItem, key) => (
                            <li key={key}>
                              <Link className="footer-link" to={linkItem.link}>
                                {linkItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col> */}
            </Row>
            {/* Render Footer Link End */}
            <FooterLink />
          </Container>
        </footer>
        {/* Footer End */}
      </React.Fragment>
    );
  }
}

export default Footer;
