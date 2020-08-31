import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { Table, Form } from "semantic-ui-react";

const CardPair = () => {
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
      </Table.Row>
    </div>
  );
};

export default CardPair;
