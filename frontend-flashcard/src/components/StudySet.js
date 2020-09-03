import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, Form, Button, Card } from "semantic-ui-react";

const StudySet = (props) => {
  const params = useParams();
  const [front, setFront] = useState(true);
  const [index, setIndex] = useState(0);

  console.log(props.studyCard.flashcards.length);
  const flashcards = props.studyCard.flashcards;

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(
      newIndex > flashcards.length - 1 ? flashcards.length - 1 : newIndex
    );
  };

  const handleBack = () => {
    setIndex(index === 0 ? 0 : index - 1);
  };

  return (
    <div>
      <h2>{props.studyCard.title}</h2>
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
          <Button negative onClick={() => handleBack()}>
            Back
          </Button>
          <Button.Or />
          <Button positive onClick={() => handleNext()}>
            Next
          </Button>
        </Button.Group>
      </div>
    </div>
  );
};

export default StudySet;
