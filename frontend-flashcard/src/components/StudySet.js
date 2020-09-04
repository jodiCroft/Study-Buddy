import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, Form, Button, Card } from "semantic-ui-react";

const StudySet = (props) => {
  const params = useParams();
  const [front, setFront] = useState(true);
  // const [index, setIndex] = useState(0);
  const flashcards = props.studyCard.flashcards;
  const index = props.index;

  // const handleNext = () => {
  //   setFront(true);
  //   const newIndex = index + 1;
  //   setIndex(
  //     newIndex > flashcards.length - 1 ? flashcards.length - 1 : newIndex
  //   );
  // };

  // const handleBack = () => {
  //   setFront(true);
  //   setIndex(index === 0 ? 0 : index - 1);
  // };

  return (
    <div>
      <h2>{props.studyCard.title}</h2>
      <h5>{`Flashcard #${index + 1} of ${flashcards.length}`}</h5>
      <i>{front === true ? "Front" : "Back"}</i>

      {
        <Card onClick={() => setFront(!front)}>
          <Card.Content>
            <Card.Description>
              {front === true
                ? flashcards[index].front
                : flashcards[index].back}
            </Card.Description>
          </Card.Content>
        </Card>
      }
      <div>
        <Button.Group>
          <Button
            negative
            onClick={() => {
              setFront(true);
              props.handleBack();
            }}
          >
            Back
          </Button>
          <Button.Or />
          <Button
            positive
            onClick={() => {
              setFront(true);
              props.handleNext();
            }}
          >
            Next
          </Button>
        </Button.Group>
      </div>
    </div>
  );
};

export default StudySet;
