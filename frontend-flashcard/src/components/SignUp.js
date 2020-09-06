import React from "react";
import { useState, useHistory } from "react-router-dom";
import { Button, Form, Divider } from "semantic-ui-react";

const SignUp = (props) => {
  const { push } = useHistory();
  return (
    <div>
      <Form size="big" onSubmit={(e) => props.signUp(e)}>
        <Form.Group>
          <Form.Field
            label="First Name"
            name="firstName"
            control="input"
            placeholder="Joe"
            required="true"
          />
          <Form.Field
            label="Last Name"
            name="lastName"
            control="input"
            placeholder="Smith"
            required="true"
          />
          <Form.Field
            label="Username"
            name="username"
            control="input"
            placeholder="joesmith1999"
            required="true"
          />
          <Form.Field
            label="Password"
            name="password"
            control="input"
            type="password"
            placeholder="password..."
            required="true"
          />

          <Button type="submit">Sign Up</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignUp;
