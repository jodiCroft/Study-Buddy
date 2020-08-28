import React from "react";
import CreateSet from "./CreateSet";
import CreateCards from "./CreateCards";
import Main from "./Main";
import Header from "./Header";
import { Route, withRouter, Link } from "react-router-dom";

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
        console.log(this.state.currentUser);
        this.props.history.push(`/main`);
      });
  }

  // handleLogin = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:3000/login", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: e.target.username.value,
  //       password: e.target.password.value,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((user) => {
  //       this.setState({ currentUser: user.user });
  //     });
  // };

  // handleLogout = () => {
  //   fetch("http://localhost:3000/logout", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then(this.setState({ currentUser: "" }));
  // };

  createCardSet = (e) => {
    e.preventDefault();

    if (this.state.currentUser.id) {
      fetch("http://localhost:3000/cardsets", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user_id: this.state.currentUser.id,
          title: e.target.title.value,
          subject: e.target.subject.value,
          description: e.target.description.value,
        }),
      })
        .then((res) => res.json())
        .then((cardset) => {
          this.setState({ cardsets: [...this.state.cardsets, cardset] });
          this.props.history.push(`/cardset/${cardset.id}/createcards`);
        });
    }
  };
  render() {
    return (
      <div>
        <h1>Flashcard Generator App</h1>
        <Route path="/main" component={() => <Main />} />

        <Route
          path="/cardset/create"
          component={() => (
            <CreateSet
              currentUser={this.state.currentUser}
              createCardSet={this.createCardSet}
            />
          )}
        />
        <Route
          path={`/cardset/:id/createcards`}
          component={() => <CreateCards />}
        />

        {/* TEST FORM FOR CREATE FLASHCARDS: */}
        {/* <div>
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
        </div> */}
      </div>
    );
  }
}

export default withRouter(App);
