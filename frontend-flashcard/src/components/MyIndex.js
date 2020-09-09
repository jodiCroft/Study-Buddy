import React, { useState, useEffect, Component, Fragment } from "react";
import {
  Button,
  Form,
  Divider,
  Card,
  Grid,
  Icon,
  Message,
  TextArea,
} from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import StudySet from "./StudySet";
import is, { json } from "is_js";

const MyIndex = (props) => {
  const [myCardsets, setMyCardsets] = useState([]);
  const [studyCard, setStudyCard] = useState({});
  const [index, setIndex] = useState(0);
  const flashcards = studyCard.flashcards;
  const [showOptions, setShowOptions] = useState(false);
  const [currentCardset, setCurrentCardset] = useState({});

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

  const updateCardset = (e) => {
    console.log(e.target.title.value);
    fetch(`http://localhost:3000/cardsets/${currentCardset.id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        description: e.target.description.value,
        subject: e.target.subject.value,
      }),
    })
      .then((res) => res.json())

      .then((cardset) => {
        setMyCardsets(
          myCardsets.map((c) => {
            if (c.id === cardset.id) {
              return cardset;
            } else return c;
          })
        );
      })
      .then(setShowOptions(false))
      .then(setCurrentCardset({}));
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
        <div className="BrowseContainer">
          <div>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  <br></br>
                  <div align="center">
                    <h1>Click on a cardset to study it!</h1>
                  </div>
                  <br></br>
                  <div align="center">
                    <Button
                      className="EditButton"
                      onClick={() => setShowOptions(!showOptions)}
                    >
                      {showOptions === true
                        ? "Finished Editing"
                        : "Edit Cardsets"}
                    </Button>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>

                  {myCardsets.map((cardset) => (
                    <div>
                      <div align="center">
                        <Card
                          className="BrowseCard"
                          key={cardset.id}
                          onClick={() => {
                            setStudyCard(cardset);
                            window.scrollTo(0, 0);
                          }}
                        >
                          <Card.Content>
                            <Card.Header>{cardset.title}</Card.Header>
                            <Card.Description>
                              <i>{cardset.subject}</i>
                            </Card.Description>
                            <br></br>
                            <Card.Description>
                              {cardset.description}
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </div>
                      <div align="center">
                        {showOptions === true ? (
                          <Button.Group>
                            <Button onClick={() => setCurrentCardset(cardset)}>
                              Edit
                            </Button>
                            <Button.Or />
                            <Button negative>Delete</Button>
                          </Button.Group>
                        ) : null}
                      </div>
                      <br></br>
                      <br></br>
                      <br></br>
                    </div>
                  ))}
                </Grid.Column>

                <Grid.Column align="center">
                  <br></br>
                  {is.empty(currentCardset) ? null : (
                    <Form size="big" onSubmit={(e) => updateCardset(e)}>
                      <Form.Group widths="equal">
                        <Form.Field
                          label="Cardset title"
                          control="input"
                          name="title"
                          defaultValue={currentCardset.title}
                        />
                        <Form.Field
                          label="Subject"
                          control="input"
                          defaultValue={currentCardset.subject}
                          name="subject"
                        />
                        <Form.TextArea
                          className="EditTextArea"
                          label="Description"
                          defaultValue={currentCardset.description}
                          name="description"
                        />
                      </Form.Group>

                      <Button type="submit" positive size="large">
                        Save Changes
                      </Button>
                      <Divider hidden />
                      <Button
                        className="EditFlashcardsButton"
                        content="Edit Flashcards"
                        icon="right arrow"
                        labelPosition="right"
                      />
                    </Form>
                  )}

                  {is.empty(studyCard) ? null : is.empty(
                      studyCard.flashcards
                    ) ? (
                    <Message negative>
                      <Message.Header>
                        No flashcards in this set to display
                      </Message.Header>
                    </Message>
                  ) : (
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
        </div>
      )}
    </div>
  );
};

export default MyIndex;
