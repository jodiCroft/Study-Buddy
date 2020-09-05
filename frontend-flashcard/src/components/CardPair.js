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

// NEED TO DISPLAY THIS MESSAGE IF THEY LEAVE FRONT AND BACK BLANK. MAYBE ADD A DISMISSABLE MESSAGE SO THEY CAN EXIT OUT OF IT.

{
  /* <div>
<Message negative>
  <Message.Header>
    Must put text in either front or back
  </Message.Header>
  <p>Cannot leave both fields blank</p>
</Message>
</div> */
}

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
          // defaultValue={props.cardPair.front}
          // onChange={(e) => props.saveFrontText(e.target.value)}
        ></TextArea>

        <div>
          <h3>Back:</h3>
        </div>

        <TextArea
          style={{ minHeight: 190 }}
          placeholder="back card text"
          name="backText"
          required="true"
          // defaultValue={props.cardPair.back}
          // onChange={(e) => props.saveBackText(e.target.value)}
        ></TextArea>

        <Button positive icon="right arrow" type="submit" />
      </Form>
    </div>
  );
};

export default CardPair;
