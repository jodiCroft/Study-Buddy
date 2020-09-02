import React from "react";
import { useState, useHistory } from "react-router-dom";
import { Button, Form, Divider } from "semantic-ui-react";

const Login = (props) => {
  const { push } = useHistory();
  return (
    <div>
      <Form size="large" onSubmit={(e) => props.handleLogin(e)}>
        <Form.Group>
          <Form.Field
            label="Username"
            name="username"
            control="input"
            placeholder="Username"
          />
          <Form.Field
            label="Password"
            name="password"
            control="input"
            type="password"
            placeholder="password..."
          />

          <Button type="submit">Login</Button>

          <Divider hidden />
        </Form.Group>
        Don't have an account?
        <Button
          onClick={() => {
            push("/sign-up");
          }}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Login;
