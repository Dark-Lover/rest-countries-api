import React, { useEffect, useState, useReducer } from "react";
//prettier-ignore
import {MainWrapper,FunWrap,Search,SearchInput,Filter,FilterBtn,FilterText,
  Regions,Region,FakeCheck,OpenList,Countries,Country,Flag,Infos,CountryName,Detail,Info,StyledLink
} from "./MainComp";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdKeyboardArrowUp } from "react-icons/md";

const initialState = {
  firstVisit: true,
  filter: [],
};

let temp = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "Africa":
    case "Americas":
    case "Asia":
    case "Europe":
    case "Oceania":
      temp = filterData(action.type, action.data);
      return {
        firstVisit: false,
        filter: temp,
      };
    default:
      return state;
  }
};

const filterData = (region, data) => {
  const myList = data.filter((el) => el.region === region);
  return myList;
};

const handleInput = (data, input) => {
  let toShow = data.filter((el) =>
    el.name.common.toLowerCase().includes(input)
  );
  return toShow;
};

const MainComp = ({ data }) => {
  const [input, setInput] = useState("");
  const [showRegions, setShowRegions] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  // check if its the first visit, all data or filtred data
  // let dataToShow = state.firstVisit ? data : state.filter;
  let dataToShow =
    input !== ""
      ? handleInput(data, input)
      : state.firstVisit
      ? data
      : state.filter;

  useEffect(() => {}, [dataToShow]);
  return (
    <MainWrapper>
      <FunWrap>
        <Search>
          <BiSearchAlt2 className="SearchIcon" />
          <SearchInput
            placeholder="Search for a country.."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </Search>
        <Filter>
          <FilterBtn>
            <FilterText>Filter by Region</FilterText>
            <OpenList>
              <FakeCheck
                type="checkbox"
                onClick={() => setShowRegions(!showRegions)}
              />
              <MdKeyboardArrowUp className="upDown" />
            </OpenList>
          </FilterBtn>
          {showRegions ? (
            <Regions>
              <Region
                onClick={() => {
                  setShowRegions(!showRegions);
                  dispatch({ type: "Africa", data: data });
                }}
              >
                Africa
              </Region>
              <Region
                onClick={() => {
                  setShowRegions(!showRegions);
                  dispatch({ type: "Americas", data: data });
                }}
              >
                America
              </Region>
              <Region
                onClick={() => {
                  setShowRegions(!showRegions);
                  dispatch({ type: "Asia", data: data });
                }}
              >
                Asia
              </Region>
              <Region
                onClick={() => {
                  setShowRegions(!showRegions);
                  dispatch({ type: "Europe", data: data });
                }}
              >
                Europe
              </Region>
              <Region
                onClick={() => {
                  setShowRegions(!showRegions);
                  dispatch({ type: "Oceania", data: data });
                }}
              >
                Oceania
              </Region>
            </Regions>
          ) : (
            ""
          )}
        </Filter>
      </FunWrap>

      <Countries>
        {dataToShow.map((el) => (
          <Country key={el.name.common}>
            <StyledLink
              to={{
                pathname: `/${el.name.common}`,
                state: { infos: el },
              }}
            >
              <Flag src={el.flags.png} />
              <Infos>
                <CountryName>{el.name.common}</CountryName>
                <Detail>
                  <Info>Population:</Info>{" "}
                  {(el.population / 1000000).toFixed(2)} M hab
                </Detail>
                <Detail>
                  <Info>Region:</Info> {el.region}
                </Detail>
                <Detail>
                  <Info>Capital:</Info> {el.capital}
                </Detail>
              </Infos>
            </StyledLink>
          </Country>
        ))}
      </Countries>
    </MainWrapper>
  );
};

export default MainComp;
