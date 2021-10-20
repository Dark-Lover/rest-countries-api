import React from "react";
import { Nav, Logo, Mode, MyMode, ModeText } from "./NavbarComps";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = ({ theme, setTheme }) => {
  const changeTheme = () => {
    if (theme === "Light") setTheme("Dark");
    if (theme === "Dark") setTheme("Light");
  };
  return (
    <Nav>
      <Logo>Where in the world?</Logo>
      <Mode onClick={changeTheme}>
        {theme === "Light" ? (
          <MyMode>
            <BsFillMoonFill /> <ModeText>Dark Mode</ModeText>
          </MyMode>
        ) : (
          <MyMode>
            <BsFillSunFill /> <ModeText>Light Mode</ModeText>
          </MyMode>
        )}
      </Mode>
    </Nav>
  );
};

export default Navbar;
