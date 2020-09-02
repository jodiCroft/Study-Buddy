import React, { Component, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";

const SavedCards = (props) => {
  const { push } = useHistory();
  const { params } = useParams();

  console.log(props.pair);
  return (
    <div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Meta>Front</Card.Meta>
            <Card.Description>{props.pair.front}</Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Meta>Back</Card.Meta>
            <Card.Description>{props.pair.back}</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default SavedCards;
