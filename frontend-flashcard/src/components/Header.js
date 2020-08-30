import React from "react";
import { useHistory } from "react-router-dom";
import { Input, Menu, Image } from "semantic-ui-react";

const Header = (props) => {
  const { push } = useHistory();
  return (
    <div>
      <Menu secondary>
        <Image src="https://i.imgur.com/Om0FWJH.png" />
        <Menu.Item
          name="home"
          // active={activeItem === "home"}
          // onClick={this.handleItemClick}
        />
        <Menu.Item
          name="browse"
          // active={activeItem === "messages"}
          // onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search Flashcards..." />
          </Menu.Item>

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
