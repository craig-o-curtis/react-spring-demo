import { Navbar, Alignment } from "@blueprintjs/core";
import CustomNavLink from "./CustomNavLink";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Blueprint + React Spring</Navbar.Heading>
        <Navbar.Divider />

        <CustomNavLink exact to="/" icon="home" text="Home" />
        <CustomNavLink to="/panner" icon="camera" text="Image Panner" />
        <CustomNavLink to="/todos" icon="list" text="Animated Todos" />
      </Navbar.Group>
    </Navbar>
  );
};

export default Header;
