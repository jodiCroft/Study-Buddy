import React from "react";
import { useHistory } from "react-router-dom";
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
}

export default Login;
