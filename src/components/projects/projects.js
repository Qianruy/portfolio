import React from "react";
import Project from "./project";
import Card from "./Card";
import SocialNetworks from "../socialNetwork";
import { Header } from "semantic-ui-react";

const Projects = () => (
  <div>
    <Header
      as="h2" textAlign="center" style={{ color: "#ececec",
        fontSize: "40px", paddingBottom:"2em"}}>
      <Header.Content>Projects</Header.Content>
    </Header>
    <div class="ui two stackable cards">
      <Card 
        rel="https://github.gatech.edu/ApartmentRecommend"
        header="Apartment Recommendation Platform"
        category="Full Stack Development"
        description="Built an interactive website for apartment recommendations with multiple factors to be taken into consideration."
      />
      <Card 
        rel="https://github.gatech.edu/coffeeChat"
        header="Coffee Chat Social Application"
        category="Web Development"
        description="Built the application for making new friends at coffee shops with responsive frontend design and robust backend functionality. Integrate location-based services to display nearby coffee shops or drink stations."
      />
    </div>
    <div class="ui two stackable cards">
      <Card 
        rel="https://github.gatech.edu/qyu87/cse6220project"
        header="Fraudulent User Detection based on Graph Neural Networks"
        category="Machine Learning"
        description="Using review datasets of 1 million sizes to construct Multi-relation Graph. Adjust the number of layers, under-sampling ratio, and scaling values in the loss function to obtain the best and most robust model."
      />
    </div>
    {/* <Project
      projectHeader="React Redux Project"
      projectSubHeader="Simple portfolio"
      projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      projectDescriptionList={[
        "Aliquam tincidunt mauris eu risus.",
        "Vestibulum auctor dapibus neque.",
        "Cras ornare tristique elit.",
        "Vestibulum commodo felis quis tortor.",
        "Ut aliquam sollicitudin leo."
      ]}
      usingTech={[ "react", "redux", "SASS", "GraphQL", "express" ]}
      projectScreenshots={[
        "http://placekitten.com/g/1105/1105",
        "http://placekitten.com/g/1144/1144",
        "http://placekitten.com/g/1199/1199"
      ]} />
    <Project
      projectHeader="Angular 6 Project"
      projectSubHeader="E-Commerce Web Site"
      projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      projectDescriptionList={[
        "Aliquam tincidunt mauris eu risus.",
        "Vestibulum auctor dapibus neque.",
        "Cras ornare tristique elit.",
        "Vestibulum commodo felis quis tortor.",
        "Ut aliquam sollicitudin leo."
      ]}
      usingTech={[ "Php", "Symfony", "Bootstrap", "Html5", "Css3", "JavaScript" ]}
      projectScreenshots={[
        "http://placekitten.com/g/4700/4700",
        "http://placekitten.com/g/2513/2513",
        "http://placekitten.com/g/2291/2291",
        "http://placekitten.com/g/2133/2133"
      ]} /> */}
    <SocialNetworks />
  </div>
);
export default Projects;
