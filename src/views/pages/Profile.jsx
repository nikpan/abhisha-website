import React from "react";

// reactstrap components
import { Card, Container, Row, Col, Progress } from "reactstrap";

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

  renderProgressBar(label, value, color='blue') {
    return (
      <div className="progress-wrapper">
        <div className="progress-info">
          <div className="progress-label">
            <span>{label}</span>
          </div>
          <div className="progress-percentage">
            <span>{value}%</span>
          </div>
        </div>
        <Progress max="100" value={value} color={color} />
      </div>
    )
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <SectionHeader/>
          <section className="section">
            <Container className="container mt--300">
              <Card className="card-profile shadow mt-3">
                <div className="px-4">
                  <Row className="justify-content-center row">
                    <Col className="order-lg-2 col" lg="3">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/AbhishaLinkedInPic.jfif")}
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-3">
                    <h3>
                      Abhisha Burande{" "}
                      <span className="font-weight-light"></span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bay Area, California
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
              <Row className="justify-content-center row">
                <Col>
                  <Card className="card-profile shadow mt-3" >
                    <div className="text-left mt-3 px-3">
                      <h5>Education</h5>
                      <p className="text-left">
                        <ul>
                          <li>MS in Data Analytics, California State University</li>
                          <li>MBA in Finance, ITM University</li>
                          <li>Bachelor of Engineering, Rajiv Gandhi College of Engineering and Research Technology</li>
                        </ul>
                      </p>
                    </div>
                  </Card>
                </Col>
                </Row>
                <Row>
                <Col>
                  <Card className="card-profile shadow mt-3" >
                    <div className="text-left mt-3 px-3">
                      <h5>Experience</h5>
                      <p>
                        <ul>
                          <li>Data Analyst, GoHundred.co</li>
                          <li>Data Analyst Intern, Sokrates Advisors</li>
                          <li>Sr. Business Associate, Citibank</li>
                          <li>Research Intern, Birla Sun Life Asset Management</li>
                        </ul>
                      </p>
                    </div>
                  </Card>
                </Col>
                </Row>
                <Row>
                <Col>
                  <Card className="card-profile shadow mt-3" >
                    <div className="text-left mt-3 px-3">
                      <h5>Skills</h5>
                      <Row>
                        <Col>{this.renderProgressBar('SQL', 90)}</Col>
                        <Col>{this.renderProgressBar('AWS Redshift', 60)}</Col>
                        <Col>{this.renderProgressBar('Tableau', 85)}</Col>
                      </Row>
                      <Row>
                        <Col>{this.renderProgressBar('Python', 90)}</Col>
                        <Col>{this.renderProgressBar('Talend ETL', 60)}</Col>
                        <Col>{this.renderProgressBar('Advanced Excel', 90)}</Col>
                      </Row>
                      <Row>
                        <Col>{this.renderProgressBar('R', 90)}</Col>
                        <Col>{this.renderProgressBar('Java', 70)}</Col>
                        <Col>{this.renderProgressBar('PowerBI', 85)}</Col>
                      </Row>
                    </div>
                  </Card>
                </Col>
              </Row>
              
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
