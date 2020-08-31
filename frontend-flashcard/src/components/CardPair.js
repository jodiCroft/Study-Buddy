import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, Form, Button } from "semantic-ui-react";
import SavedCards from "./SavedCards";

const CardPair = (props) => {
  return (
    <div>
      <Table.Row>
        <Table.Cell className="front-card">
          <Form.Field
            control="textarea"
            placeholder="front card text"
            name="frontText"
            onChange={(e) => props.setCardPairs({ front: e.target.value })}
          />
        </Table.Cell>
        <Table.Cell className="back-card">
          <Form.Field
            control="textarea"
            placeholder="back card text"
            name="backText"
            onChange={(e) => props.setCardPairs({ back: e.target.value })}
          />
        </Table.Cell>
        <Button
          negative
          icon="trash"
          onClick={() => console.log("I need this to delete this card pair")}
        />
        <Button
          positive
          icon="check"
          onClick={() => props.saveCards(props.cardPair, props.cardId)}
        />
      </Table.Row>
    </div>
  );
};

export default CardPair;
