import React, { useState, useEffect, Component } from "react";
import { Button, Form, Divider, Card, Grid, Icon } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import StudySet from "./StudySet";
import is from "is_js";

const MyIndex = (props) => {
  const [myCardsets, setMyCardsets] = useState([]);
  const [studyCard, setStudyCard] = useState({});
  const [index, setIndex] = useState(0);
  const flashcards = studyCard.flashcards;

  useEffect(() => {
    let isMounted = true;
    fetch(`http://localhost:3000/users/${props.currentUser.id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((user) => {
        if (isMounted) setMyCardsets(user.cardsets.reverse());
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const { push } = useHistory();

  const handleNext = () => {
    // setFront(true);
    const newIndex = index + 1;
    setIndex(
      newIndex > flashcards.length - 1 ? flashcards.length - 1 : newIndex
    );
  };

  const handleBack = () => {
    // setFront(true);
    setIndex(index === 0 ? 0 : index - 1);
  };

  return (
    <div>
      {is.empty(myCardsets) ? (
        <div>
          <h2>You have no flashcard sets yet!</h2>
          <Button
            positive
            size="massive"
            onClick={() => push("/cardset/create")}
          >
            Create a Flashcard Set
          </Button>
        </div>
      ) : (
        <div>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <h1>Click on a cardset to study it!</h1>
                {myCardsets.map((cardset) => (
                  <Card key={cardset.id} onClick={() => setStudyCard(cardset)}>
                    <Card.Content>
                      <Card.Header>{cardset.title}</Card.Header>
                      <Card.Description>{cardset.subject}</Card.Description>
                      <Card.Description>{cardset.description}</Card.Description>
                    </Card.Content>
                  </Card>
                ))}
              </Grid.Column>

              <Grid.Column>
                {is.empty(studyCard) ? null : (
                  <StudySet
                    studyCard={studyCard}
                    index={index}
                    handleBack={handleBack}
                    handleNext={handleNext}
                  />
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default MyIndex;
