import React from "react";
import {Container, Icon, Button, Divider, Grid } from "semantic-ui-react";

const socialNetwork = () => (
  <div>
    <Container textAlign="center" style={{ paddingTop: "7em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column columns={1}>
            <Divider
              horizontal style={{ "fontSize": "24px",
                "color": "#8892b0" }}>Contact Me</Divider>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column only="computer">
            <Button color="grey" href="https://github.com/Qianruy" >
              <Icon name="github" /> GitHub
            </Button>
            <Button color="linkedin" href="https://www.linkedin.com/in/qianru-yu-639a581ba/" >
              <Icon name="linkedin" /> LinkedIn
            </Button>
            <Button color="purple" href="https://www.instagram.com/chloe_qianru/" >
              <Icon name="instagram" /> Instagram
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column only="tablet mobile"><Button
              href="https://github.com/Qianruy" circular color="grey"
              icon="github" />
            <Button
              href="https://www.linkedin.com/in/qianru-yu-639a581ba/" circular color="blue"
              icon="linkedin" />
            <Button
              href="https://www.instagram.com/chloe_qianru/" circular color="purple"
              icon="instagram" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default socialNetwork;
