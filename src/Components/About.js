import React, { Component } from "react";
import { Container, Grid, List } from "semantic-ui-react";
import { getDivider, getTitle } from "./Common";

class About extends Component {
  render() {
    return (
      <section id="about">
        <Grid stackable>
          {getTitle("Summary")}
          {getDivider()}
          <Grid.Row columns={"1"}>
            <Grid.Column>
              <Container textAlign="left" style={{ fontSize: "20px" }}>
                I am a software engineer with a strong passion for Security. I
                enjoy breaking programs and then fixing them. I also enjoy
                developing tools to manage security at scale. In the past, I
                have worked on:
                <List bulleted relaxed>
                  <List.Item>
                    {" "}
                    Developing security administration tools to manage cloud
                    resources at scale. An example of a project that I worked on
                    at Netflix is{" "}
                    <a
                      href="https://github.com/Netflix/consoleme"
                      target="_blank"
                      rel={"noreferrer"}
                    >
                      {" "}
                      ConsoleMe{" "}
                    </a>{" "}
                    - Multi-Account AWS Management tool{" "}
                  </List.Item>
                  <List.Item>
                    {" "}
                    Finding security bugs and vulnerabilities within internal
                    code, using a variety of techniques such as Fuzzing, Static
                    Analysis tools, and Source code review{" "}
                  </List.Item>
                  <List.Item>
                    {" "}
                    Developing internal and external security tools to improve
                    the overall development process from a security perspective,
                    allowing developers to develop more secure services{" "}
                  </List.Item>
                  <List.Item>
                    {" "}
                    Deploying internal and external tools along with their
                    required infrastructure using TerraForm, Salt{" "}
                  </List.Item>
                </List>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </section>
    );
  }
}

export default About;
