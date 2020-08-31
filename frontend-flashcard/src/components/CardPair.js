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
          />
        </Table.Cell>
        <Table.Cell className="back-card">
          <Form.Field
            control="textarea"
            placeholder="back card text"
            name="backText"
          />
        </Table.Cell>
        <Button
          icon="trash"
          onClick={() => console.log("I need this to delete this card pair")}
        />
      </Table.Row>
    </div>
  );
};

export default CardPair;
