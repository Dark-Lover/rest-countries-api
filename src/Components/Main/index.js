import React, { useEffect, useState } from "react";
//prettier-ignore
import {MainWrapper,Search,SearchInput,Filter,FilterBtn,FilterText,
  Regions,Region,FakeCheck,OpenList,Countries,Country,Flag,Infos,CountryName,Detail,Info
} from "./MainComp";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdDescription, MdKeyboardArrowUp } from "react-icons/md";
const MainComp = ({ data }) => {
  const [input, setInput] = useState("");
  const [showRegions, setShowRegions] = useState(false);
  useEffect(() => {
    console.log("Main comp");
  }, []);
  console.log(data);
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
            <Region>Africa</Region>
            <Region>America</Region>
            <Region>Asia</Region>
            <Region>Europe</Region>
            <Region>Oceania</Region>
          </Regions>
        ) : (
          ""
        )}
      </Filter>
      <Countries>
        {data.map((el) => (
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
