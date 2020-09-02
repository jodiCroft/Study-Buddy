import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, Form, Button, Grid } from "semantic-ui-react";

const CardPair = (props) => {
  return (
    <div>
      <div>
        <h3>Front:</h3>
      </div>

      <textarea
        placeholder="front card text"
        name="frontText"
        defaultValue={props.cardPair.front}
        onChange={(e) =>
          props.saveFrontText(props.cardPair.cardId, e.target.value)
        }
      ></textarea>

      <div>
        <h3>Back:</h3>
      </div>

      <textarea
        placeholder="back card text"
        name="backText"
        defaultValue={props.cardPair.back}
        onChange={(e) =>
          props.saveBackText(props.cardPair.cardId, e.target.value)
        }
      ></textarea>

      <Button
        positive
        icon="right arrow"
        onClick={() => props.saveCardPair(props.cardPair)}
      />
    </div>
  );
};

export default CardPair;
