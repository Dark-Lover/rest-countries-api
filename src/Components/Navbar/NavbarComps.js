import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 12vh;
  background-color: ${(props) => props.theme.bgEls};
  color: ${(props) => props.theme.colorText};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 1px 16px 0px ${(props) => props.theme.shadow};
  z-index: 10000;
`;

export const LogoLink = styled(Link)`
  color: ${(props) => props.theme.colorText};
  text-decoration: none;
  font-weight: 800;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  cursor: pointer;
`;

export const Mode = styled.div`
  width: 6rem;
  height: 2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
`;

export const MyMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ModeText = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`;
