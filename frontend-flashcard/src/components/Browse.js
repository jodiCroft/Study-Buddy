import React, { useEffect, useState } from "react";
import is from "is_js";
import { useHistory } from "react-router-dom";
import {
  Button,
  Form,
  Divider,
  Card,
  Message,
  Grid,
  Input,
} from "semantic-ui-react";
import StudySet from "./StudySet";

const Browse = (props) => {
  const { push } = useHistory();
  const [allCardsets, setAllCardsets] = useState([]);
  const [studyCard, setStudyCard] = useState({});
  //   const [front, setFront] = useState(true);
  //   const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const flashcards = studyCard.flashcards;

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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

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
      {/* STaRt TEST */}
      <div>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <h1>Click on any cardset to study it!</h1>
              <div>
                <Input
                  onChange={(e) => handleSearch(e)}
                  size="big"
                  icon="search"
                  placeholder="subject, title or description"
                />
              </div>

              {allCardsets
                .filter((card) => {
                  return (
                    card.title.toLowerCase().includes(search) ||
                    card.description.toLowerCase().includes(search) ||
                    card.subject.toLowerCase().includes(search)
                  );
                })
                .map((cardset) => (
                  <Card
                    key={cardset.id}
                    onClick={() => {
                      setStudyCard(cardset);
                      setIndex(0);
                    }}
                  >
                    <Card.Content>
                      <Card.Header>{cardset.title}</Card.Header>
                      <Card.Description>{cardset.subject}</Card.Description>
                      <Card.Description>{cardset.description}</Card.Description>
                    </Card.Content>
                  </Card>
                ))}
            </Grid.Column>

            <Grid.Column>
              {is.empty(studyCard) ? null : is.empty(studyCard.flashcards) ? (
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

      {/* End Test */}
    </div>
  );
};

export default Browse;
