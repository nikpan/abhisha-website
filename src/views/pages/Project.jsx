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
    let projectOrder = [5, 3, 6, 1, 4, 2]
    projectOrder.forEach(projectId => {
      projects.push(
        <Row>
        <Col>
          {this.renderSingleProject(projectId.toString())}
        </Col>
      </Row>)      
    });
    return (
      <>
        {projects}
      </>
    );
  }

  renderSingleProject(projectId) {
    return (
      <>
        <Card className="card-profile shadow mt-3">
          <div className="px-4">
            <div className="text-left mt-3">
              <h3>
                {ProjectInfo.getProjectTitle(projectId)}
                <span className="font-weight-light"></span>
              </h3>
            </div>
            <div className="mt-3 py-3 border-top text-center">
              <Row className="text-left">
                <Col lg="12">
                  {ProjectInfo.getProjectInfo(projectId)}
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </>
    );
  }

  renderProject(projectId) {
    if(projectId === "0"){
      return this.renderProjectList();
    }
    else {
      return this.renderSingleProject(projectId);
    }
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
