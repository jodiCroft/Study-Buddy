import React from "react";
import { useHistory } from "react-router-dom";

import { Button, Segment, Statistic, Divider } from "semantic-ui-react";
const Home = (props) => {
  const { push } = useHistory();
  return (
    <div className="HomeContainer">
      <div className="HomeContent">
        <div align="center" className="HomeBackground">
          <br></br>
          <p className="StudyAnything">Study Anything!</p>
          <div className="IntroText">
            <p>
              Use Study Buddy to create your own flashcard sets. If you are
              looking for a subject to study, browse or search our extensive
              library of flashcard sets created by people just like you!
            </p>
          </div>
          <br></br>
          <br></br>

          <Button
            className="CreateButton"
            positive
            size="massive"
            onClick={() => push("/cardset/create")}
          >
            Create a Flashcard Set
          </Button>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div align="center">
          <br></br>

          <div>
            <h2>
              <i>Browse by Subject...</i>
            </h2>
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
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

      <div className="Footer" align="center">
        <br></br>
        <Statistic>
          <Statistic.Value>5,550</Statistic.Value>
          <Statistic.Label>Flashcard Sets Created!</Statistic.Label>
        </Statistic>
        <br></br>
      </div>
    </div>
  );
};

export default Home;
