import React, { useState, useEffect, Component } from "react";
import { Button, Form, Divider, Card, Grid } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";

const MyIndex = (props) => {
  console.log(props.currentUser.id);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${props.currentUser.id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((user) => setMyCardsets(user.cardsets));
  }, []);

  const [myCardsets, setMyCardsets] = useState([]);
  const [studyCards, setStudyCards] = useState([]);

  const { push } = useHistory();

  return (
    <div>
      {myCardsets === [] ? null : (
        <div>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <h1>Click on a cardset to study it!</h1>
                {myCardsets.map((cardset) => (
                  <Card
                    key={cardset.id}
                    onClick={() =>
                      setStudyCards((prevSavedPairs) => [
                        ...studyCards,
                        cardset,
                      ])
                    }
                  >
                    <Card.Content>
                      <Card.Header>{cardset.title}</Card.Header>
                      <Card.Description>{cardset.subject}</Card.Description>
                      <Card.Description>{cardset.description}</Card.Description>
                    </Card.Content>
                  </Card>
                ))}
              </Grid.Column>
              {/* IF STUDYCARDS HAS ANYTHING IN IT, THEN SHOW THIS, OTHERWISE NULL: */}
              <Grid.Column>
                {studyCards.map((card) => (
                  <h1>{card.title}</h1>
                ))}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default MyIndex;
