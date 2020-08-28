import React, { useState, Component } from "react";
import { Route, withRouter, Link } from "react-router-dom";
const Main = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/cardset/create">Create a New Flashcard Set</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
