import React, { useState, useEffect, Component } from "react";

const MyIndex = (props) => {
  console.log(props.currentUser);

  const getCardsets = (props) => {
    fetch(`http://localhost:3000/users/${props.currentUser.id}`)
      .then((res) => res.json())
      .then(console.log);
  };
  return <div></div>;
};

export default MyIndex;
