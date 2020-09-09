import React from "react";
import { useHistory } from "react-router-dom";

import { Button, Segment, Statistic, Image } from "semantic-ui-react";
const Home = (props) => {
  const { push } = useHistory();
  return (
    <div className="HomeContainer">
      <div className="HomeContent">
        <div align="center" className="HomeBackground">
          <br></br>

          <h2 className="StudyAnything">Study Anything!</h2>

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
        <div align="center" className="BrowseButtons">
          <br></br>

          <div>
            <br></br>
            <br></br>

            <i className="BrowseText">Browse by Subject...</i>
          </div>
          <br></br>

          <Button className="SubjectButton" size="massive">
            Biology
          </Button>
          <Button className="SubjectButton" size="massive">
            Math
          </Button>
          <Button className="SubjectButton" size="massive">
            Spanish
          </Button>
          <Button className="SubjectButton" size="massive">
            Other
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
      <div align="center">
        <Image className="Testimonials" src="https://i.imgur.com/VSlSpUU.png" />
      </div>

      <div className="Footer" align="center">
        <br></br>

        <br></br>
      </div>
    </div>
  );
};

export default Home;
