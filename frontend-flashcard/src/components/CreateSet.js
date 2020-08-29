import React, { useState, Component } from "react";
import { Form, Button, Divider } from "semantic-ui-react";
const CreateSet = (props) => {
  return (
    <div>
      <div>
        <Form
          size="massive"
          onSubmit={(e) => props.createCardSet(e)}
          className="CreateSet"
        >
          <Form.Group widths="equal">
            <Form.Field
              label="Cardset title"
              control="input"
              placeholder="title..."
            />
            <Form.Field label="Subject" control="input" placeholder="biology" />
            <Form.Field
              label="Description"
              control="input"
              placeholder="description..."
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
          <Divider hidden />
        </Form>
      </div>
    </div>
  );
};

export default CreateSet;
