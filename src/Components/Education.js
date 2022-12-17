import React, { Component } from "react";
import { Container, Grid, List } from "semantic-ui-react";
import { getDivider, getTitle } from "./Common";

class Education extends Component {
  render() {
    return (
      <section id="education">
        <Grid stackable>
          {getTitle("Education")}
          {getDivider()}
          <Grid.Row columns={"equal"}>
            <Grid.Column textAlign={"center"}>
              <h4>Bachelor of Software Engineering</h4>
              <h5>University of Waterloo, ON, Canada</h5>
              <h6>Sept 2017 - Apr 2022</h6>
              <Container textAlign="left" style={{ fontSize: "17px" }}>
                <List bulleted relaxed>
                  <List.Item>Dean's Honours List</List.Item>
                  <List.Item>CGPA of 89</List.Item>
                </List>
              </Container>
            </Grid.Column>
            <Grid.Column textAlign={"center"}>
              <h4>Bachelor of Neuroscience (Honours - First Class)</h4>
              <h5>University of Calgary, AB, Canada</h5>
              <h6>Sept 2013 - Apr 2017</h6>
              <Container textAlign="left" style={{ fontSize: "17px" }}>
                <List bulleted relaxed>
                  <List.Item>
                    Successfully defended Honours Thesis Effects of Aerobic
                    Exercise on Migraine that included an independent research
                    project with data collection, interpretation and analysis
                  </List.Item>
                  <List.Item>CGPA of 3.74</List.Item>
                </List>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </section>
    );
  }
}

export default Education;
