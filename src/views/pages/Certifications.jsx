import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  UncontrolledCarousel
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import SectionHeader from "views/IndexSections/SectionHeader.jsx";
// index page sections

const items = [
  {
    src: require("assets/img/theme/Cert1.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/Cert2.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/Cert3.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/Cert4.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/Cert5.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/Cert6.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Certifications extends React.Component {
  
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }


  renderCertification() {
    return (
      <>
        <Card className="card-profile shadow mt-3">
          <div className="px-4">
            <div className="text-left mt-3">
              <h3>
                Certifications
              </h3>
              <ul>
                <li><span className="font-weight-light"></span>Python A-Z: Python For Data Science With Real Exercises</li>
                <li><span className="font-weight-light"></span>Tableau A-Z: Hands-On Tableau Training For Data Science</li>
                <li><span className="font-weight-light"></span>SQL & Database Design A-Z: Learn MS SQL Server + PostgresSQL</li>
                <li><span className="font-weight-light"></span>Scrum Certification Pref + Scrum Master + Agile Scrum</li>
                <li><span className="font-weight-light"></span>Business Analysis: Working With Use Cases</li>
                <li><span className="font-weight-light"></span>R Level 1 - Data Analytics with R</li>
                {/* <li><span className="font-weight-light"></span></li> */}
                {/* <li><span className="font-weight-light"></span></li> */}
              </ul>
            </div>
            <div className="mt-3 py-3 border-top text-center">
              <Row className="text-left">
                <Col lg="12">
                  <UncontrolledCarousel items={items} color='blue' />
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </>
    );
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            <SectionHeader/>
            <section className="section">
              <Container className="container mt--300">
                {this.renderCertification()}
              </Container>
            </section>
          </div>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Certifications;
