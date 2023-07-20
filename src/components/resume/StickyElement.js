import React from "react";
import { Image } from "semantic-ui-react";
import PersonImage from "../assets/person.png";

const StickyElement = () => {
  return (
    <div style={{top: "16em", position: "sticky"}}>
        <Image
            className="avatar-image" src={PersonImage} alt="avatar"
            circular style={{ 
                height: "200px",
                margin: "0 auto"
            }}
        />
        <h2>Qianru Yu</h2>
        <h4></h4>
        <hr />
        <p>Location: Atlanta</p>
        <p>Tel: (+1)470-833-3602</p>
        <p>qianruy99@gmail.com</p>
        <p>qyu87@gatech.edu</p>
        <hr />
    </div>
  );
};

export default StickyElement;