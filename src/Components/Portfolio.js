import React, { Component } from "react";
import { getDivider, getTitle } from "./Common";
import { Card, Grid, Icon, Image, List, Modal } from "semantic-ui-react";
import { projectsData } from "./Data";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalNumber: -1,
    };
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.setState({ modalNumber: -1 });
  }
  openModal(data) {
    this.setState({ modalNumber: data });
  }
  render() {
    const modalNumber = this.state.modalNumber;
    const that = this;
    const getProjects = projectsData.map(function (project, idx) {
      return (
        <Grid.Column
          textAlign={"center"}
          key={idx}
          onClick={that.openModal.bind(that, idx)}
        >
          <Card centered fluid>
            <Image src={project.image_link} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{project.name}</Card.Header>
              <Card.Meta>{project.description}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              {project.github_link ? (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel={"noreferrer"}
                >
                  <Icon link name={"github"} size="big" color="black" />
                </a>
              ) : null}
              {project.play_link ? (
                <a href={project.play_link} target="_blank" rel={"noreferrer"}>
                  <Icon link name={"play"} size="big" color="black" />
                </a>
              ) : null}
              {project.bug_link ? (
                <a href={project.bug_link} target="_blank" rel={"noreferrer"}>
                  <Icon link name={"bug"} size="big" color="black" />
                </a>
              ) : null}
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });

    const getModals = projectsData.map(function (project, idx) {
      return (
        <Modal
          dimmer={"blurring"}
          open={modalNumber === idx}
          key={"modal" + idx}
          onClose={that.closeModal.bind(that)}
          size={"large"}
          centered={false}
          closeIcon
        >
          <Modal.Header>
            <h3 className="h3-modal-custom-jay">{project.name}</h3>
          </Modal.Header>
          <Modal.Content scrolling>
            <h6 className="h6-modal-custom-jay">{project.description}</h6>
            <Modal.Description>
              <List bulleted relaxed>
                {project.modalData.map(function (duty, idx2) {
                  const key = project.name + idx2 + "-modal-l";
                  return (
                    <List.Item key={key} style={{ fontSize: "17px" }}>
                      {duty}
                    </List.Item>
                  );
                })}
              </List>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <h3 className="h3-modal-custom-jay">
              {project.github_link ? (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel={"noreferrer"}
                >
                  <Icon link name={"github"} size="big" color="black" />
                </a>
              ) : null}
              {project.play_link ? (
                <a href={project.play_link} target="_blank" rel={"noreferrer"}>
                  <Icon link name={"play"} size="big" color="black" />
                </a>
              ) : null}
              {project.bug_link ? (
                <a href={project.bug_link} target="_blank" rel={"noreferrer"}>
                  <Icon link name={"bug"} size="big" color="black" />
                </a>
              ) : null}
            </h3>
          </Modal.Actions>
        </Modal>
      );
    });

    return (
      <section id="portfolio">
        <Grid stackable>
          {getTitle("Projects")}
          {getDivider()}
        </Grid>
        {getModals}
        <Grid stackable columns={"4"} centered stretched>
          {getProjects}
        </Grid>
      </section>
    );
  }
}

export default Portfolio;
