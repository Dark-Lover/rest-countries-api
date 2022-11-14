import React from "react";
import { Nav, Mode, MyMode, ModeText, LogoLink } from "./NavbarComps";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = ({ theme, setTheme }) => {
  const changeTheme = () => {
    if (theme === "Light") setTheme("Dark");
    if (theme === "Dark") setTheme("Light");
  };
  return (
    <Nav>
      <LogoLink to={{ pathname: `/` }}>Where in the world?</LogoLink>
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
