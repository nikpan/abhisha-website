/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import ProjectInfo from '../../views/pages/ProjectInfo';

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink to='/profile-page' tag={Link}>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Home</span>
                  </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Projects</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/project-page-1" tag={Link}>
                        {ProjectInfo.getProjectTitle('1')}
                      </DropdownItem>
                      <DropdownItem to="/project-page-2" tag={Link}>
                        {ProjectInfo.getProjectTitle('2')}
                      </DropdownItem>
                      <DropdownItem to="/project-page-3" tag={Link}>
                      {ProjectInfo.getProjectTitle('3')}
                      </DropdownItem>
                      <DropdownItem to="/project-page-4" tag={Link}>
                      {ProjectInfo.getProjectTitle('4')}
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                  <NavLink to='/resume-page' tag={Link}>
                    <i className="fas fa-file-pdf"/>
                    <span className="nav-link-inner--text">Resume</span>
                  </NavLink>
                </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.linkedin.com/in/abhisha-burande/"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        LinkedIn
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Connect on LinkedIn
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/abhisha-burande"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Find me on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={"mailto:abhishaburande_AT_gmail_DOT_com"}
                      id="tooltip112445440"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        E-Mail
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445440">
                      Contact via E-Mail
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
