import React, { Component } from "react";
import { Grid, Icon, List } from "semantic-ui-react";
import { getDivider, getTitle } from "./Common";
import { workExperienceData } from "./Data";

class Resume extends Component {
  render() {
    const getWorkExperience = workExperienceData.map(function (work, idx) {
      return (
        <Grid.Row key={work.company + idx}>
          <Grid.Column width={"4"} textAlign={"center"} verticalAlign={"top"}>
            <h3>{work.company}</h3>
            {work.link ? (
              <a
                href="https://github.com/Netflix/consoleme"
                target="_blank"
                rel={"noreferrer"}
              >
                <Icon link name={"github"} size="big" color="black" />
              </a>
            ) : null}
          </Grid.Column>
          <Grid.Column width={"12"}>
            <h4>{work.title}</h4>
            <h5>{work.date_location}</h5>
            <List bulleted relaxed>
              {work.responsibilities.map(function (responsibility, idx) {
                const key = work.title + idx;
                return (
                  <List.Item key={key} style={{ fontSize: "17px" }}>
                    {responsibility}
                  </List.Item>
                );
              })}
            </List>
          </Grid.Column>
        </Grid.Row>
      );
    });

    return (
      <section id="resume">
        <Grid stackable>
          {getTitle("Work Experience")}
          {getDivider()}
          {getWorkExperience}
        </Grid>
      </section>
    );
  }
}

export default Resume;
