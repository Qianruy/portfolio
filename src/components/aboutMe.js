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
              Nice to meet U!
          </p>
          <p>
              My name is Qianru (which pronuounce like tsing-ru). I enjoy the sense of fulfillment in making meaningful difference using the 
              power of coding and other technologies. In my leisure time, I like to play puzzle games which help alleviate stress and get me relaxed.

          </p>
          <p>
              I firmly believe that our persistent efforts pave the way for our dreams to become a reality. Therefore, I'm continually eager to 
              explore new topics and challenges, finding motivation in the face of adversity to propel me forward.
        
          </p>
          <p>
              Besides continuous learning, I love travelling! I have been to France, Hungary, Czech, Germany, Canada...
              I would like to share interesting people and things I met during the trip :) 
          </p>
        </Paragraph>
      </div>
    </Container>
    <SocialNetwork />
  </Element>
);

export default aboutMe;
