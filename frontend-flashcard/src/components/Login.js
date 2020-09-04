import React from "react";
import { useState, useHistory } from "react-router-dom";
import { Button, Form, Divider, Grid, Segment } from "semantic-ui-react";

const Login = (props) => {
  const { push } = useHistory();
  return (
    <div>
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form onSubmit={(e) => props.handleLogin(e)}>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                name="username"
                placeholder="Username"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
                name="password"
              />
              <Button content="Login" type="submit" primary />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Button
              content="Sign up"
              icon="signup"
              size="big"
              onClick={() => push("/sign-up")}
            />
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    </div>
  );
};
{
  /* end test */
}

// <Form size="large" onSubmit={(e) => props.handleLogin(e)}>
//   <Form.Group>
//     <Form.Field
//       label="Username"
//       name="username"
//       control="input"
//       placeholder="Username"
//     />
//     <Form.Field
//       label="Password"
//       name="password"
//       control="input"
//       type="password"
//       placeholder="password..."
//     />

//     <Button type="submit">Login</Button>

//     <Divider hidden />
//   </Form.Group>
//   Don't have an account?
//   <Button
//     onClick={() => {
//       push("/sign-up");
//     }}
//   >
//     Sign Up
//   </Button>
// </Form>

export default Login;
