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
              Nice to meet U! This is Qianru (which pronuounce like tsing-ru).
          </p>
          <p>
            Lately, I have rediscovered the joy of reading, exploring fascinating stories and ideas — from emotional regulation and its connection to brain science, to reflections on historical events and their lessons. I also enjoy mystery and detective fiction, as well as classic Chinese martial arts (wuxia 武侠) novels, and would be glad to share thoughts with fellow readers. 
          </p>
          <p>
            Outside of research, I stay active through various forms of exercise. Rather than treadmill running, I prefer functional and mobility-focused training that feels more dynamic and engaging.
            {/* I enjoy the sense of fulfillment in making meaningful difference using the power of coding and other technologies, and I firmly believe that our persistent efforts pave the way for our dreams to become a reality. Therefore, I'm continually explore new topics and challenges, finding motivation in the face of adversity to propel me forward. */}
        
          </p>
          <p>
              I also love traveling and cooking. I have been fortunate to visit France, Hungary, the Czech Republic, Germany, Canada, the United Arab Emirates, Thailand, and Cambodia, and I enjoy sharing stories of the people I met and the experiences I had along the way:) 
          </p>
        </Paragraph>
      </div>
    </Container>
    
    <SocialNetwork />
  </Element>
);

export default aboutMe;
