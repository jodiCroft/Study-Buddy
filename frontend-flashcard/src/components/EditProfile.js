import React from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";

const EditProfile = (props) => {
  const params = useParams();

  const updateProfile = (e) => {
    e.preventDefault();
    console.log(e.target.username.value, e.target.password.value);
    fetch(`http://localhost:3000/users/${props.currentUser.id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    })
      .then((res) => res.json())
      .then((user) => props.setCurrentUser(user))
      .then(props.setEdit(false));
  };

  return (
    <div align="left">
      <h1>Edit your username or password:</h1>
      <Form align="left" size="big" onSubmit={(e) => updateProfile(e)}>
        <Form.Group align="left">
          <Form.Field
            label="Username"
            name="username"
            defaultValue={props.currentUser.username}
            control="input"
          />
          <Form.Field
            label="Password"
            name="password"
            control="input"
            type="password"
            placeholder="New password"
          />
        </Form.Group>
        <Button positive type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default EditProfile;
