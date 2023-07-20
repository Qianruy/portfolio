import React from "react";
import AboutMe from "./components/aboutMe";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume/resume";
import Projects from "./components/projects/projects";
import { Switch, Route } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";

const RouteContainer = posed.div({
  enter: { opacity: 1,
          delay: 400,
          beforeChildren: true
          },
  exit: {
    opacity: 0
  }
});

const Routes = () => {
  return (
    <Route
      render={({ location }) => (
        <PoseGroup>
          <RouteContainer key={location.key}>
            <Switch location={location}>
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/aboutme" component={AboutMe} />
              <Route path="/resume" component={Resume} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </RouteContainer>
        </PoseGroup>
    )} />
  );
};


export default Routes;