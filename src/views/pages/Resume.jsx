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
// import {Document, Page} from 'react-pdf';
import ResumePdf from '../static/Abhisha_Burande_Resume.pdf'

// index page sections

class Resume extends React.Component {
  // state = {
  //     numPages: null,
  //     pageNumber: 1
  // };
  
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  // onDocumentLoadSuccess = ({ numPages }) => {
  //   this.setState({ numPages });
  // }

  // onDocumentLoadError = (e) => {
  //     console.debug(e);
  // }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            <SectionHeader/>
            <section className="section">
              <Container className="container mt--300">
                <Card className="card-profile shadow mt-3">
                  <div className="px-4">
                    <div className="text-left mt-3">
                      <h3>
                        Resume{" "}
                        <span className="font-weight-light"></span>
                      </h3>
                    </div>
                    <div className="mt-3 py-3 border-top text-center">
                      <Row className="text-left">
                        <Col lg="12">
                          <p>
                            Last updated on 3/8/2020. Download <a href={ResumePdf}>here</a>
                        </p>
                        </Col>
                      </Row>
                      <Row>
                        {/* <Document 
                            file={ResumePdf}
                            onLoadSuccess={this.onDocumentLoadSuccess}
                            onLoadError={this.onDocumentLoadError}
                        >
                            <Page pageNumber={this.state.pageNumber} />
                        </Document> */}
                      </Row>
                    </div>
                  </div>
                </Card>
              </Container>
            </section>
          </div>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Resume;
