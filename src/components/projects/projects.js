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
      <Header.Content>Research Projects</Header.Content>
    </Header>
    <div class="ui two stackable cards">
      <Card 
        header="PLOW: Error Correction Codes for Truly Real-time Streaming (Ongoing)"
        category="Coding Theory"
        description="Minimizing coding overhead and decoding latency has long been a critical challenge for real-time applications. Our novel coding scheme addresses this by combining digital fountain codes with a new technique proposed for data retrieval, enabling both low redundancy and fast recovery. Experiments show up to 80% lower latency and significantly reduced redundancy under both random and bursty loss, making the scheme well-suited for live video streaming and wireless communication."
      />
      <Card 
        header="SW-EDF: A Single-Iteration Algorithm for Combined Input- and Output-Queued Switching"
        category="Algorithm Development; Approximate Stable Marriage (Matching)"
        description="How to design switches (and routers) that provide quality of service (QoS) guarantees, such as low transit (through the switch) delay for packets, has been a long-standing research problem. SW-EDF overcomes challenges in the input- and output-queued (CIOQ) switch architecture: It can compute, in a single low-complexity iteration, an 'approximate stable marriage' that allows for near-perfect OQ emulation, in terms of tardy (compared to OQ) rates and distribution of tardiness."
        rel="https://ieeexplore.ieee.org/abstract/document/11038878"
      />
    </div>
    <div class="ui two stackable cards">
      <Card 
        rel="https://ieeexplore.ieee.org/document/11120557"
        header="QPS- Fit: An Efficient and Performant Parallel Algorithm for Hybrid Optical and Packet Switching"
        category="Algorithm Development; Datacenter Networks"
        description="The relentless growth of sizes and traffic volumes in data center networks (DCN) is posing a significant challenge on switching: A single giant switch in a modern flattened-topology DCN needs to direct terabits of traffic per second to hundreds of top-of-rack switches in a low latency of just a few milliseconds. Our proposed QPS-Fit overcomes the problem of expensive computation for on-demand hybrid (circuit and packet) switching schedulers, and computes high-quality on-demand schedules in a fully parallelizable way. According to our simulation, QPS-Fit achieves similar throughput utilization as BFF, the state-of-the-art on-demand hybrid switching scheduler, while being nearly 27x faster when running on 96 threads."
      />
      <Card 
        rel="https://github.gatech.edu/qyu87/cse6220project"
        header="Fraudulent User Detection based on Graph Neural Networks"
        category="Machine Learning"
        description="Developed a fraud detection framework by constructing a multi-relation graph from a dataset of 1 million reviews, capturing nuanced relationships among users and reviews. Explored and tuned hyperparameters, including network depth, under-sampling ratio, and loss scaling, to enhance robustness and generalization. Conducted a comparative study across three Graph Neural Network architectures, complemented by case analysis of easy, medium, and hard detection scenarios, which revealed model strengths, limitations, and actionable directions for future improvement."
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
