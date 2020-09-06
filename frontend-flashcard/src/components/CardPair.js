import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  Form,
  Button,
  Grid,
  Message,
  TextArea,
} from "semantic-ui-react";

const CardPair = (props) => {
  return (
    <div>
      <div>
        <h3>Front:</h3>
      </div>
      <Form onSubmit={(e) => props.saveCardPair(e)}>
        <TextArea
          style={{ minHeight: 190 }}
          placeholder="front card text"
          name="frontText"
          required="true"
        ></TextArea>

        <div>
          <h3>Back:</h3>
        </div>

        <TextArea
          style={{ minHeight: 190 }}
          placeholder="back card text"
          name="backText"
          required="true"
        ></TextArea>

        <Button positive icon="right arrow" type="submit" />
      </Form>
    </div>
  );
};

export default CardPair;
