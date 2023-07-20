import React, { Component } from "react";
import { Grid, Progress, Header } from "semantic-ui-react";

export default class Skills extends Component {
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row centered>
          <Grid.Column computer={16}>
            <Progress 
              percent={this.props.progress} inverted color={this.props.color}
              label={this.props.skill} size="small" active progress />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
