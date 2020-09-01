import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "semantic-ui-react";

const SavedCards = (props) => {
  return (
    <div>
      <h1>Your Saved Cards</h1>
      {props.savedPairs.map((pair) => (
        <div>
          <Card>{pair.front}</Card>
          <Card>{pair.back}</Card>
        </div>
      ))}
    </div>
  );
};

export default SavedCards;
