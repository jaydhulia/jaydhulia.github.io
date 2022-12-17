import React, { Component } from "react";
import { getDivider, getTitle } from "./Common";
import { Grid, Icon } from "semantic-ui-react";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <Grid stackable>
          {getTitle("Need a Security Engineer? Let's get in touch!")}
          {getDivider()}
          <Grid.Row columns={"3"}>
            <Grid.Column textAlign={"center"}>
              <a
                href={"mailto:jaydhulia@hotmail.com"}
                target="_blank"
                rel={"noreferrer"}
              >
                <Icon link name={"mail"} size="massive" color="teal" />
              </a>
            </Grid.Column>
            <Grid.Column textAlign={"center"}>
              <a
                href={"https://github.com/jaydhulia"}
                target="_blank"
                rel={"noreferrer"}
              >
                <Icon link name={"github"} size="massive" color="teal" />
              </a>
            </Grid.Column>
            <Grid.Column textAlign={"center"}>
              <a
                href={"https://www.linkedin.com/in/jay-dhulia/"}
                target="_blank"
                rel={"noreferrer"}
              >
                <Icon link name={"linkedin"} size="massive" color="teal" />
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </section>
    );
  }
}

export default Contact;
