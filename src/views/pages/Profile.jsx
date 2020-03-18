import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import SectionHeader from "views/IndexSections/SectionHeader.jsx";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <SectionHeader/>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center row">
                    <Col className="order-lg-2 col" lg="3">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/AbhishaBurande.jpg")}
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-0">
                    <h3>
                      Abhisha Burande{" "}
                      <span className="font-weight-light"></span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Sunnyvale, California
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Data Analyst - Student
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      California State University, East Bay
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                        An accomplished professional with 3 years of industry
                        experience and MBA (Finance), Bachelor of Engineering graduate. 
                        Currently pursuing an MS in Business Analystics at California State 
                        University, East Bay. I am deeply passionate about data and always 
                        on the lookout for exciting projects where I can exercise my analytical
                        skills. In my free time I love to travel, watch movies and dance.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
