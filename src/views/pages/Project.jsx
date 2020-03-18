import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import SectionHeader from "views/IndexSections/SectionHeader.jsx";
import ProjectInfo from './ProjectInfo';

// index page sections

class Project extends React.Component {
  
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  renderProjectList() {
    let projects = []
    for (let i = 1; i <= 4; i++) {
      projects.push(this.renderProject(i.toString()))      
    }
    return (
      <>
        {projects}
      </>
    );
  }

  renderProject(projectId) {
    return (
      <>
        <Card className="card-profile shadow mt--300">
          <div className="px-4">
            <div className="text-left mt-0">
              <h3>
                {ProjectInfo.getProjectTitle(projectId)}
                <span className="font-weight-light"></span>
              </h3>
            </div>
            <div className="mt-4 py-5 border-top text-center">
              <Row className="text-left">
                <Col lg="14">
                  {ProjectInfo.getProjectInfo(projectId)}
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
              <Container>
                {this.renderProject(this.props.id)}
              </Container>
            </section>
          </div>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Project;
