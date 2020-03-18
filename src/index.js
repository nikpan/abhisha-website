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
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Profile from "views/pages/Profile.jsx";
import ProjectPage from "views/pages/Project.jsx";
import ResumePage from "views/pages/Resume.jsx";
import Index from "views/Index";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route 
        path="/" 
        exact 
        render={props => <Profile {...props} />} 
      />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/project-page-1"
        exact
        render={props => <ProjectPage {...props} id='1' />}
      />
      <Route
        path="/project-page-2"
        exact
        render={props => <ProjectPage {...props} id='2' />}
      />
      <Route
        path="/project-page-3"
        exact
        render={props => <ProjectPage {...props} id='3' />}
      />
      <Route
        path="/project-page-4"
        exact
        render={props => <ProjectPage {...props} id='4' />}
      />
      <Route
        path="/resume-page"
        exact
        render={props => <ResumePage {...props} />}
      />
      <Route
        path="/index-page"
        exact
        render={props => <Index {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
