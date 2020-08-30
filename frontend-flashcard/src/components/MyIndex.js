import React, { useState, useEffect, Component } from "react";

const MyIndex = (props) => {
  console.log(props.cardsets);
  return (
    <div>
      {props.cardsets.map((cardset) => (
        <ul>
          {cardset.title}
          <li>{cardset.subject}</li>
          <li>{cardset.description}</li>
          {/* Need to render the username of the user who made the cardset - can't figure out how. */}
        </ul>
      ))}
    </div>
  );
};

export default MyIndex;
