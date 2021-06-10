import { Grid } from "semantic-ui-react";

export const getDivider = () => {
  return (
    <Grid.Row columns={"3"}>
      <Grid.Column width={"7"} />
      <Grid.Column width={"2"}>
        <hr style={{ borderWidth: "3px", borderColor: "#F05F40" }} />
      </Grid.Column>
      <Grid.Column width={"7"} />
    </Grid.Row>
  );
};

export const getTitle = (sectionName) => {
  return (
    <Grid.Row columns={"1"}>
      <Grid.Column textAlign={"center"}>
        <h1>{sectionName}</h1>
      </Grid.Column>
    </Grid.Row>
  );
};
