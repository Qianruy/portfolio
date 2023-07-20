import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
class Education extends Component {
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column width={11} >
            <h4
              style={{ marginTop: "0px", color: "#64ffda" }}>
                {this.props.schoolName}
            </h4>
            <p style={{ marginTop: "0px", color:"#ccd6f6"}}>
              {this.props.schoolDescription}
            </p>
            <div class="ui bulleted list">
              <div class="item" style={{ fontSize: "13px", color:"#8892b0"}}>
                {this.props.addtional1}
              </div>
              <div class="item" style={{ fontSize: "13px", color:"#8892b0"}}>
                {this.props.addtional2}
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={5} >
            <p style={{ color: "#64ffda" }}>
              {this.props.startYear} ~ {this.props.endYear}
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      );
    }
  }

export default Education;
