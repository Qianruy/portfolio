import React from "react";
import SocialNetwork from "../socialNetwork";
import { Grid, Header, Image } from "semantic-ui-react";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import StickyElement from "./StickyElement";

const Resume = () => (
  <div style={{ position: "relative" }}>
    <Grid divided="vertically" style={{ color: "#ececec" }}>
      <Grid.Row>
        <Grid.Column
          textAlign="center" computer={4} 
          mobile={16} tablet={6} >
          <StickyElement /> 
        </Grid.Column>
        <Grid.Column
          computer={2} 
          mobile={16} tablet={2} >
        </Grid.Column>
        <Grid.Column computer={10} mobile={16} tablet={8}>
          <Header
            as="h2" textAlign="center"
            style={{
              fontSize: "32px",
              marginBottom: "10px",
              color: "#ececec" 
            }}>
            <i className="code icon"></i>
            <Header.Content>Education</Header.Content>
          </Header>
          <Education
            startYear="Jan 2022"
            endYear="Dec 2023"
            schoolName="Georgia Institute of Technology"
            schoolDescription="MS in Computational Science and Engineering; GPA: 4.0/4.0"
            addtional1="CS Courses: High Perform Computing/Arch, Computer Networking, Object Orient Programming, Algorithms, Big Data Sys & Analytics, Database System Implementation"
            addtional2="Math Courses: Numerical Linear Algebra, Machine Learning, Adv Statistical Modeling, Nonparametric Data Analysis"
          />
          <Education
            startYear="Sep 2017"
            endYear="Jun 2021"
            schoolName="Zhejiang University"
            schoolDescription="Bachelor of Science in Engineering; GPA: 3.90/4.0 overall" 
            addtional1="Honors Program: Mixed Class in Chu Kochen Honor College (Top 5% in Zhejiang University)"
            addtional2="National Scholarship: (Top 1% in Zhejiang University) - Oct 2018"
          />
          <Header
            as="h2" textAlign="center" style={{ fontSize: "32px",
              color: "#ececec" }}>
            <i className="code icon"></i>
            <Header.Content>Experience</Header.Content>
          </Header>
          <Experience
            jobName="@Teaching Assistant"
            startYear="Jan 2023"
            endYear="May 2023"
            jobDescription="Responsibility: Instructing students on modeling and simulation models and helping with implementing project ideas." />
          <Grid divided="vertically">
            <Grid.Row>
              <Grid.Column width={11}>
                <h4
                  style={{ marginTop: "0px",
                  color: "#64ffda" }}>@Research Assistant
                </h4>
                <p style={{ marginTop: "0px", color:"#ccd6f6"}}>
                  Modeling and simulation using MATLAB, including motor control model, hydraulic system and other modules.
                </p>
                <div class="ui bulleted list">
                  <div class="item" style={{ fontSize: "13px", color:"#8892b0"}}>
                    Algorithm Design: Using Deep Deterministic Policy Gradient algorithms to improve the accuracy and robustness of output motion. Design module of observation, action, and reward signal function.
                  </div>
                  <div class="item" style={{ fontSize: "13px", color:"#8892b0"}}>
                    Testing: Created input signal under different configurations and compare the results with traditional PID control.
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={5} style={{ color: "#64ffda" }}>
                <p>Jan 2021 ~ July 2021</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header
            as="h2" textAlign="center" style={{ fontSize: "32px",
              color: "#ececec" }}>
            <i className="code icon"></i>
            <Header.Content href="/projects">Projects</Header.Content>
          </Header>
          <Header
            as="h2" textAlign="center" style={{ fontSize: "32px",
              color: "#ececec" }}>
            <i className="code icon"></i>
            <Header.Content>Skills Summary</Header.Content>
          </Header>
          <Skills
            skill="Python"
            progress={90}
            color="green" />
          <Skills
            skill="C++"
            progress={80}
            color="green" />
          <Skills
            skill="SQL"
            progress={85}
            color="green" />
          <Skills
            skill="Java"
            progress={70}
            color="blue" />
          <Skills
            skill="JavaScript"
            progress={75}
            color="blue" />
          <Skills
            skill="React"
            progress={60}
            color="blue" />
          <Skills
            skill="PostgreSQL"
            progress={60}
            color="blue" />
          <Skills
            skill="Redux"
            progress={55}
            color="red" />
          <Skills
            skill="NodeJS"
            progress={50}
            color="red" />
          <Skills
            skill="MongoDB"
            progress={50}
            color="red" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <SocialNetwork />
  </div>
);

export default Resume;
