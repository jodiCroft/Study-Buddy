import React, { useState, useEffect } from "react";
import CreateSet from "./CreateSet";
import CardsContainer from "./CardsContainer";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import MyIndex from "./MyIndex";
import SignUp from "./SignUp";
import Browse from "./Browse";
import Profile from "./Profile";
import { Route, withRouter, useHistory } from "react-router-dom";

import "../App.css";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState("");
  const { push } = useHistory();

  useEffect(() => {
    let isMounted = true;
    fetch("http://localhost:3000/is_logged_in", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success === true) setCurrentUser(response.user);
      });
    return (
      () => {
        isMounted = false;
      },
      push("/home")
    );
  }, []);

  const handleLogin = (e) => {
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
      .then((user) => {
        setCurrentUser(user.user);
      })
      .then(push("/home"));
  };

  const handleLogout = () => {
    fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(setCurrentUser(""))
      .then(push("/home"));
  };

  const createCardSet = (e) => {
    e.preventDefault();

    if (currentUser.id) {
      fetch("http://localhost:3000/cardsets", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user_id: currentUser.id,
          title: e.target.title.value,
          subject: e.target.subject.value,
          description: e.target.description.value,
        }),
      })
        .then((res) => res.json())
        .then((cardset) => {
          push(`/cardset/${cardset.id}/createcards`);
        });
    } else push("/login");
  };

  const signUp = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        first_name: e.target.firstName.value,
        last_name: e.target.lastName.value,
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    })
      .then((res) => res.json())
      .then((user) => setCurrentUser(user))
      .then(push("/cardset/create"));
  };

  return (
    <div className="App">
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <Route
        path="/home"
        component={() => <Home currentUser={currentUser} />}
      />

      <Route
        path="/sign-up"
        component={() => <SignUp currentUser={currentUser} signUp={signUp} />}
      />

      <Route
        path="/login"
        component={() => <Login handleLogin={handleLogin} />}
      />

      <Route
        path="/my-index"
        component={() => <MyIndex currentUser={currentUser} />}
      />

      <Route path="/browse" component={() => <Browse />} />

      <Route
        path="/cardset/create"
        component={() => <CreateSet createCardSet={createCardSet} />}
      />
      <Route
        path={`/cardset/:id/createcards`}
        component={() => <CardsContainer />}
      />
      <Route
        path={`/user/:id/profile`}
        component={() => (
          <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />
        )}
      />
    </div>
  );
};

export default withRouter(App);
