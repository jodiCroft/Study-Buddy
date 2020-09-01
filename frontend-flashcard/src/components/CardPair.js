import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, Form, Button } from "semantic-ui-react";

const CardPair = (props) => {
  return (
    <div>
      <Table.Row>
        <Table.Cell className="front-card">
          <Form.Field
            control="textarea"
            placeholder="front card text"
            name="frontText"
            defaultValue={props.cardPair.front}
            onChange={(e) =>
              props.saveFrontText(props.cardPair.cardId, e.target.value)
            }
          />
        </Table.Cell>
        <Table.Cell className="back-card">
          <Form.Field
            control="textarea"
            placeholder="back card text"
            name="backText"
            defaultValue={props.cardPair.back}
            onChange={(e) =>
              props.saveBackText(props.cardPair.cardId, e.target.value)
            }
          />
        </Table.Cell>
        <Table.Cell>
          <Button
            negative
            icon="trash"
            onClick={() => console.log("I need this to delete this card pair")}
          />
          <Button
            positive
            icon="thumbs up"
            onClick={() => props.saveCardPair(props.cardPair)}
          />
        </Table.Cell>
      </Table.Row>
    </div>
  );
};

export default CardPair;
