import React, { useEffect, useState } from "react";
import is from "is_js";
import { useHistory } from "react-router-dom";
import { Button, Form, Divider, Card } from "semantic-ui-react";

const Browse = (props) => {
  const { push } = useHistory();
  const [allCardsets, setAllCardsets] = useState([]);
  const [studyCard, setStudyCard] = useState({});
  const [front, setFront] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;
    fetch("http://localhost:3000/cardsets", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((cardsets) => {
        if (isMounted) setAllCardsets(cardsets);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleNext = () => {
    setFront(true);
    const newIndex = index + 1;
    setIndex(
      newIndex > studyCard.flashcards.length - 1
        ? studyCard.flashcards.length - 1
        : newIndex
    );
  };

  const handleBack = () => {
    setFront(true);
    setIndex(index === 0 ? 0 : index - 1);
  };

  return (
    <div>
      {is.empty(studyCard) ? (
        allCardsets.map((cardset) => (
          <Card key={cardset.id} onClick={() => setStudyCard(cardset)}>
            <Card.Content>
              <Card.Header>{cardset.title}</Card.Header>
              <Card.Description>
                <i>{cardset.subject}</i>
              </Card.Description>
              <Card.Description>{cardset.description}</Card.Description>
            </Card.Content>
          </Card>
        ))
      ) : (
        <div>
          <h2>{studyCard.title}</h2>
          <i>{front === true ? "Front" : "Back"}</i>

          <Card onClick={() => setFront(!front)}>
            <Card.Content>
              <Card.Description>
                {front === true
                  ? studyCard.flashcards[index].front
                  : studyCard.flashcards[index].back}
              </Card.Description>
            </Card.Content>
          </Card>

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
      )}
    </div>
  );
};

export default Browse;
