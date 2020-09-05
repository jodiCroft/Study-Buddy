import React, { useState, Component } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  Button,
  Message,
  Segment,
  Header,
  Divider,
  Image,
  Statistic,
} from "semantic-ui-react";
const Home = (props) => {
  const { push } = useHistory();
  return (
    <div>
      <Segment align="center">
        <Header as="h1">Study Anything!</Header>
        <h5>
          Use Study Buddy to create your own flashcard sets. If you are looking
          for a subject to study, browse or search our extensive library of
          flashcard sets created by people just like you!
        </h5>
        <Divider section />

        <Button positive size="massive" onClick={() => push("/cardset/create")}>
          Create a Flashcard Set
        </Button>
      </Segment>

      {/* <Container textAlign="center">
        <Message floating>
          <h1>Study Anything!</h1>
          Use Study Buddy to create your own flashcard sets. If you are looking
          for a subject to study, browse or search our extensive library of
          flashcard sets created by people just like you!
        </Message>
        <Button positive size="massive" onClick={() => push("/cardset/create")}>
          Create a Flashcard Set
        </Button>
      </Container> */}
    </div>
  );
};

export default Home;
