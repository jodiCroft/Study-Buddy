import React, { Component, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Table, Form, Button, Card } from "semantic-ui-react";
import EditProfile from "./EditProfile";

const Profile = (props) => {
  const params = useParams();
  const [edit, setEdit] = useState(false);
  const { push } = useHistory();
  const fullName =
    props.currentUser.first_name + " " + props.currentUser.last_name;

  const handleDelete = () => {
    fetch(`http://localhost:3000/users/${props.currentUser.id}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(props.setCurrentUser(""))
      .then(push("/home"));
  };

  return (
    <div>
      <h3>{`Welcome to your profile, ${props.currentUser.first_name}`}</h3>
      <Card size="massive">
        <Card.Content>
          <b>Name: </b>
          {fullName}
        </Card.Content>
        <Card.Content>
          <b>Username: </b>
          {props.currentUser.username}
        </Card.Content>
        <Card.Content>
          <b>Password: </b>
          {"********"}
        </Card.Content>
        <Button.Group>
          <Button positive onClick={() => setEdit(true)}>
            Edit
          </Button>
          <Button.Or />
          <Button negative onClick={() => handleDelete()}>
            Delete Account
          </Button>
        </Button.Group>
      </Card>
      {edit ? (
        <div>
          <EditProfile
            edit={edit}
            setEdit={setEdit}
            currentUser={props.currentUser}
            setCurrentUser={props.setCurrentUser}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
