import React from "react";
import { useHistory } from "react-router-dom";
import { Input, Menu, Image } from "semantic-ui-react";

const Header = (props) => {
  const { push } = useHistory();
  return (
    <div>
      <Menu secondary>
        <Menu.Item onClick={() => push("/home")}>
          <Image src="https://i.imgur.com/Om0FWJH.png" />
        </Menu.Item>

        <Menu.Item
          name="home"
          onClick={() => push("/home")}
          // active={activeItem === "home"}
          // onClick={this.handleItemClick}
        />
        <Menu.Item name="browse" onClick={() => push("/browse")} />

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search All Flashcards..." />
          </Menu.Item>
          {props.currentUser.id ? (
            <Menu.Item
              name="My Card Sets"
              onClick={() => {
                push("/my-index");
              }}
            />
          ) : null}

          <Menu.Item
            name={!props.currentUser.id ? "sign in" : "log out"}
            // active={activeItem === "logout"}
            onClick={() => {
              props.currentUser.id ? props.handleLogout() : push("/login");
            }}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Header;
