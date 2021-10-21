import React, { useEffect, useState, useReducer } from "react";
//prettier-ignore
import {MainWrapper,Search,SearchInput,Filter,FilterBtn,FilterText,
  Regions,Region,FakeCheck,OpenList,Countries,Country,Flag,Infos,CountryName,Detail,Info
} from "./MainComp";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BrowserRouter as Router, Route } from "react-router-dom";

const initialState = {
  // countries: "",
  filter: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Africa":
      console.log("mama africa");
      return {
        countries: action.data,
        filter: filterData(action.type, action.data),
      };
    case "America":
      console.log("mama america");
      return {
        countries: action.data,
        filter: filterData(action.type, action.data),
      };
    case "Asia":
      console.log("mama asia");
      return {
        countries: action.data,
        filter: filterData(action.type, action.data),
      };
    case "Europe":
      console.log("mama europe");
      return {
        countries: action.data,
        filter: filterData(action.type, action.data),
      };
    case "Oceania":
      console.log("mama oceania");
      return {
        countries: action.data,
        filter: filterData(action.type, action.data),
      };
    default:
      return state;
  }
};

const filterData = (region, data) => {
  // console.log("we are filtering " + region);
  // console.log("here is the data ");
  // console.log(data);
  const myList = data.filter((el) => el.region === region);
  // console.log("after filter");
  // console.log(myList);
  // initialState.firstShow = false;
  return myList;
};

const init = (data) => {
  initialState.filter = data;
};
const MainComp = ({ data }) => {
  const [input, setInput] = useState("");
  const [showRegions, setShowRegions] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState, init(data));

  useEffect(() => {
    console.log("just tsting");
  }, [initialState.filter]);
  return (
    <MainWrapper>
      <Search>
        <BiSearchAlt2 className="SearchIcon" />
        <SearchInput
          placeholder="Search for a country.."
          onChange={(e) => setInput(e.target.value)}
        />
        <h2>{input}</h2>
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
            <Region onClick={() => dispatch({ type: "Africa", data: data })}>
              Africa
            </Region>
            <Region onClick={() => dispatch({ type: "America", data: data })}>
              America
            </Region>
            <Region onClick={() => dispatch({ type: "Asia", data: data })}>
              Asia
            </Region>
            <Region onClick={() => dispatch({ type: "Europe", data: data })}>
              Europe
            </Region>
            <Region onClick={() => dispatch({ type: "Oceania", data: data })}>
              Oceania
            </Region>
          </Regions>
        ) : (
          ""
        )}
      </Filter>
      <Countries>
        {initialState.filter.map((el) => (
          <Country key={el.name.common}>
            <Flag src={el.flags.png} />
            <Infos>
              <CountryName>{el.name.common}</CountryName>
              <Detail>
                <Info>Population:</Info> {(el.population / 1000000).toFixed(2)}{" "}
                M hab
              </Detail>
              <Detail>
                <Info>Region:</Info> {el.region}
              </Detail>
              <Detail>
                <Info>Capital:</Info> {el.capital}
              </Detail>
            </Infos>
          </Country>
        ))}
      </Countries>
    </MainWrapper>
  );
};

export default MainComp;
