import React from "react";
import Header from "./Header";

import "../App.css";
import { render } from "react-dom";

class App extends React.Component {
  state = {
    cardsets: [],
    currentUser: "",
  };

  componentDidMount() {
    fetch("http://localhost:3000/cardsets")
      .then((res) => res.json())
      .then((cardsets) => this.setState({ cardsets }));
    fetch("http://localhost:3000/is_logged_in", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success === true) {
          this.setState({ currentUser: response.user });
        }
      });
  }

  handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
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
      .then((user) => this.setState({ currentUser: user }));
  };

  handleLogout = () => {
    fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this.setState({ currentUser: "" }));
  };

  handleCreate = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/cardsets", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        subject: e.target.subject.value,
        description: e.target.description.value,
        flashcards: [
          {
            front: e.target.front.value,
            back: e.target.back.value,
            hint: e.target.hint.value,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((cardset) =>
        this.setState({ cardSet: [...this.state.cardSet, cardset] })
      );
  };
  render() {
    return (
      <div>
        <h1>Flashcard Generator App</h1>
        <h3>Create a New Flashcard Set</h3>
        {/* TEST FORM FOR CREATE FLASHCARDS: */}
        <div>
          <form onSubmit={(e) => this.handleCreate(e)} className="CreateSet">
            <label>
              Set Title:
              <input type="text" name="title" />
            </label>
            <label>
              Description:
              <input type="text" name="description" />
            </label>
            <label>
              Subject:
              <input type="text" name="subject" />
            </label>
            <div>
              <h4>Front:</h4>
              <textarea name="front"></textarea>
              <h4>Back:</h4>
              <textarea name="back"></textarea>
              <h4>Hint:</h4>
              <textarea name="hint"></textarea>
            </div>

            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>Log In Form:</div>
        <div>
          <form onSubmit={(e) => this.handleLogin(e)}>
            <label>User Name</label>
            <input type="text" name="username" />
            <label>Password</label>
            <input type="password" name="password" />
            <input type="submit" value="Log In" />
          </form>
          <button onClick={this.handleLogout}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default App;
