import React, { useState, useEffect, Component } from "react";
import { Button, Form, Divider, Card, Grid } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import StudySet from "./StudySet";

const MyIndex = (props) => {
  const [myCardsets, setMyCardsets] = useState([]);
  const [studyCard, setStudyCard] = useState();

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

  return (
    <div>
      {myCardsets === [] ? null : (
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
                {studyCard ? <StudySet studyCard={studyCard} /> : null}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default MyIndex;
