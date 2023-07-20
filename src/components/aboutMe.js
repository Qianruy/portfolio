import React from "react";
import { Container, Header } from "semantic-ui-react";
import posed from "react-pose";
import SocialNetwork from "./socialNetwork";

const Element = posed.div({
  enter: { staggerChildren: 50 }
});
const Paragraph = posed.div({
  enter: { x: 0,
    opacity: 1 },
  exit: { x: 100,
    opacity: 0 }
});

const aboutMe = () => (
  <Element>
    <Header
      as="h2" textAlign="center" style={{ color: "#ececec",
        fontSize: "40px" }}>
      <Header.Content>About Me</Header.Content>
    </Header>
    <Container className="about-text">
      <span className="span-icon" />
      <div
        style={{ lineHeight: "1.7",
          fontSize: "23px",
          padding: "20px 0px" }}>
        <Paragraph>
          <p>
              /* -- About Me -- */
            <br />
            <br />
              Paragraph 1
          </p>
          <p>
              Paragraph 2
          </p>
          <p>
              Paragraph 3
          </p>
          <p>
              Paragraph 4
          </p>
        </Paragraph>
      </div>
    </Container>
    <SocialNetwork />
  </Element>
);

export default aboutMe;
