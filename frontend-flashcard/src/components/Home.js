import React from "react";
import { useHistory } from "react-router-dom";

import { Button, Segment, Header, Divider } from "semantic-ui-react";
const Home = (props) => {
  const { push } = useHistory();
  return (
    <div className="HomeContainer">
      <div className="HomeContent">
        <Segment align="center">
          <p className="StudyAnything">
            <i>Study Anything!</i>
          </p>
          <div className="IntroText">
            <p>
              Use Study Buddy to create your own flashcard sets. If you are
              looking for a subject to study, browse or search our extensive
              library of flashcard sets created by people just like you!
            </p>
          </div>
          <Divider section />

          <Button
            className="CreateButton"
            positive
            size="massive"
            onClick={() => push("/cardset/create")}
          >
            Create a Flashcard Set
          </Button>
        </Segment>
        <Segment align="center">
          <br></br>
          <br></br>

          <div>
            <h3>
              <i>Browse by Subject...</i>
            </h3>
          </div>
          <br></br>

          <Button color="violet" size="massive">
            Biology
          </Button>
          <Button color="violet" size="massive">
            Math
          </Button>
          <Button color="violet" size="massive">
            Spanish
          </Button>
          <Button color="violet" size="massive">
            Other
          </Button>
        </Segment>
      </div>
    </div>
  );
};

export default Home;
