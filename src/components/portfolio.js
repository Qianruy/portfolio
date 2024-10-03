import React from "react";
import { Grid, Button, Header } from "semantic-ui-react";
import SplitText from "react-pose-text";

const charPoses = {
  exit: { opacity: 0,
    y: 50 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 50
  }
};
const charSkills = {
  exit: { y: 20,
    opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: ({ charInWordIndex }) => ({
      type: "spring",
      delay: charInWordIndex,
      stiffness: 50 + charInWordIndex * 100,
      damping: 13 - Number(charInWordIndex)
    })
  }
};

const Portfolio = () => (
  <div
    style={{ color: "#ccd6f6",
      paddingTop: "2em" }}>
    <Grid divided="vertically" className="portfolio-container" centered>
      <Grid.Row computer={16} style={{ background: "#0a192f" }}>
        <Header
          as="h2" textAlign="center" style={{ fontSize: "40px",
            display: "block" }}>
          <span
            className="author-span" 
            style={{ 
              marginRight: "15px",
              fontSize: "20px", 
              color: "#64ffda" 
            }}> 
              Hi, my name is
          </span>
          <Header.Content className="author-name">Qianru Yu</Header.Content>
        </Header>
      </Grid.Row>
      <Grid.Row
        columns={1} style={{
          fontWeight: "bold",
          fontSize: "36px",
          padding: "0",
          lineHeight: "1"
        }}>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          Welcome to My Web Page!
        </SplitText>
      </Grid.Row>
      <Grid.Row
        columns={1} style={{
          fontSize: "1.2em",
          padding: "2em",
          lineHeight: "1.5",
          color: "#8892b0",
          paddingLeft: "12%", 
          paddingRight: "12%",
        }}>
        <p>
          I'm currently enrolled as a first-year Ph.D. student at <span style={{color:"#64ffda"}}>Georgia Tech</span> in Computer Science. I enjoy <span style={{color:"#64ffda"}}>exploring</span> new techniques 
          and  <span style={{color:"#64ffda"}}>stay connected</span> with new findings. My research focus on  <span style={{color:"#64ffda"}}>networking and systems</span>, especially in 
          the switching algorithms and practical channel codes which aims at improving real-time performance for communication. Aside from this, I am also interested
          in <span style={{color:"#64ffda"}}>cyber securities and cryptography</span>. Hope to find some interesting problems related to work on in the future!
        </p>
      </Grid.Row>
      <Grid.Row
        columns={1} style={{ 
          fontSize: "1.4em",
          lineHeight: "1.5",
          background: "#172a45",
          color: "#8892b0" 
        }}>
        <SplitText initialPose="exit" pose="enter" charPoses={charSkills}>
              Networking & Systems | Control System | Algorithmics | High Performance Computing
        </SplitText>
      </Grid.Row>
      <Grid.Row columns={1} style={{ background: "#0d223b" }}>
        <Button
          href="https://github.com/Qianruy" circular color="grey"
          icon="github" />
        <Button
          href="https://www.linkedin.com/in/qianru-yu-639a581ba/" circular color="blue"
          icon="linkedin" />
        <Button
          href="" circular color="purple"
          icon="instagram" />
      </Grid.Row>
    </Grid>
  </div>
);
export default Portfolio;
