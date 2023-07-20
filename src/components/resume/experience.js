import React, { Component } from "react";
import {
  Grid
} from "semantic-ui-react";
class Experience extends Component {
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column width={11}>
            <h4
              style={{ marginTop: "0px",
              color: "#64ffda" }}>{this.props.jobName}</h4>
            <p style={{ color: "#ccd6f6" }}>{this.props.jobDescription}</p>
          </Grid.Column>
          <Grid.Column width={5} style={{ color: "#64ffda" }}>
            <p>{this.props.startYear} ~ {this.props.endYear}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Experience;
