import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  padding: 0 1rem;
  transition: all 0.5s ease;
`;
// Search Styling
export const Search = styled.div`
  background-color: ${(props) => props.theme.bgEls};
  height: 3rem;
  margin: 5.5rem 0 0 0;
  width: 100%;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0px 1px 16px 0px ${(props) => props.theme.shadow};
  transition: all 0.5s ease;
  .SearchIcon {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colorSec};
    font-weight: 400;
  }
`;

export const SearchInput = styled.input`
  width: 90%;
  /* background-color: ${(props) => props.theme.bgEls}; */
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colorSec};
  padding: 0.5rem 0.6rem;
  outline: none;
  ::placeholder {
    font-size: 0.75rem;
    letter-spacing: 0.02rem;
    font-weight: 300;
    color: ${(props) => props.theme.colorSec};
  }
`;

// Filter Styling
export const Filter = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.bgEls};
  height: 3rem;
  margin: 1rem 0;
  width: 60%;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-shadow: 0px 1px 16px 0px ${(props) => props.theme.shadow};
  transition: all 0.5s ease;
`;
export const FilterBtn = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: ${(props) => props.theme.colorText};
  cursor: pointer;
`;

export const OpenList = styled.div`
  position: relative;
  display: flex;
  .upDown {
    transition: 0.3s ease-in-out;
    font-size: 1.2rem;
    transform: rotateX(0);
  }
`;

export const FakeCheck = styled.input`
  position: absolute;
  right: 0;
  width: 1.3rem;
  height: 1.3rem;
  opacity: 0;
  z-index: 1000;
  cursor: pointer;
  &:checked + .upDown {
    transform: rotateX(180deg);
  }
`;
export const FilterText = styled.div``;
export const Regions = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bgEls};
  position: absolute;
  top: 4rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  box-shadow: 0px 1px 16px 0px ${(props) => props.theme.shadow};
`;
export const Region = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  padding: 0 0 0 2rem;
  color: ${(props) => props.theme.colorSec};
  cursor: pointer;
  transition: all 0.5s ease;
  font-weight: 600;
  :hover {
    background-color: #eee;
    color: #111;
  }
`;

// Countries Styling

export const Countries = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  padding: 1rem 2rem;
  flex-wrap: wrap;
`;
export const Country = styled.div`
  max-width: 300px;
  background-color: ${(props) => props.theme.bgEls};
  width: 100%;
  box-shadow: 0px 1px 16px 0px ${(props) => props.theme.shadow};
  margin: 1rem;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Flag = styled.img`
  width: 100%;
  height: 150px;
  color: ${(props) => props.theme.colorText};
`;
export const Infos = styled.div`
  padding: 1.3rem 1rem;
  color: ${(props) => props.theme.colorText};
`;
export const CountryName = styled.h2`
  font-size: 1rem;
  letter-spacing: 0.02rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colorText};
`;
export const Detail = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  padding: 0.1rem 0 0.1rem 0;
  color: ${(props) => props.theme.colorSec};
  letter-spacing: 0.02rem;
`;

export const Info = styled.span`
  font-weight: 600;
`;
