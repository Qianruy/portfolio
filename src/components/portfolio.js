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
              Hi, this is
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
          paddingLeft: "20%", 
          paddingRight: "20%",
        }}>
        <p>
          I am a second-year Ph.D. student at <span style={{color:"#64ffda"}}>Georgia Tech</span> in Computer Science. My research interest expands in designing <span style={{color:"#64ffda"}}>algorithmic solutions</span> for <span style={{color:"#64ffda"}}>large-scale systems</span> - spanning switching (bipartite matching), channel coding, graph-based decoding algorithms, hashing, and probabilistic/randomized data structures - to improve <span style={{color:"#64ffda"}}>throughput, reliability, and latency</span> in modern communication and computing infrastructures.
          </p>
      </Grid.Row>
      <Grid.Row
        columns={1} style={{
          fontSize: "1.2em",
          padding: "2em",
          lineHeight: "1.5",
          color: "#8892b0",
          paddingLeft: "20%", 
          paddingRight: "20%",
        }}>
        <p>
          These algorithmic techniques power applications in <span style={{color:"#64ffda"}}>real-time streaming, datacenter networks, distributed AI training, cloud services, and wireless communication</span>. I am particularly interested in bridging the gap between theory and practice, creating solutions that are both mathematically rigorous and practically deployable in large-scale systems.
        </p>
      </Grid.Row>
      <Grid.Row
        columns={1} style={{
          fontSize: "1.2em",
          padding: "2em",
          lineHeight: "1.5",
          color: "#8892b0",
          paddingLeft: "20%", 
          paddingRight: "20%",
        }}>
        <p>
          {/* Aside from this, I am also interested in <span style={{color:"#64ffda"}}>cyber securities and cryptography</span>. Hope to discover new research problems at the intersection of algorithms, data privacy in the future!  */}
          I received my Matser's degree also at <span style={{color:"#64ffda"}}>Georgia Tech</span>, and completed my undergraduate studies at <span style={{color:"#64ffda"}}>Chu Kochen Honors College of Zhejiang University (ZJU-CKC)</span>. The background in this section is the rooftop of the old library at ZJU, a place where I spent much of my time. 
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
              Networking & Systems | Algorithmics | Channel Coding | Hashing & Probabilistic Data Structures
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
