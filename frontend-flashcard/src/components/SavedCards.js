import React, { Component, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";

const SavedCards = (props) => {
  const { push } = useHistory();
  const { params } = useParams();
  return (
    <div>
      <h1>Your Cards</h1>
      {props.savedPairs.map((pair) => (
        <div>
          <Card>{pair.front}</Card>
          <Card>{pair.back}</Card>
        </div>
      ))}
      <Button positive onClick={() => props.showPage()}>
        Save!
      </Button>
    </div>
  );
};

export default SavedCards;
