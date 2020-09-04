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
        <Menu.Item name="browse all sets" onClick={() => push("/browse")} />

        <Menu.Menu position="right">
          {props.currentUser.id ? (
            <Menu.Item
              name="My Card Sets"
              onClick={() => {
                push("/my-index");
              }}
            />
          ) : null}

          {!props.currentUser.id ? (
            <Menu.Item
              name="Sign Up"
              onClick={() => {
                push("/sign-up");
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
