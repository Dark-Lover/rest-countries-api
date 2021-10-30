import React from "react";
import { useLocation } from "react-router";
import { BsArrowLeft } from "react-icons/bs";
//prettier-ignore
import {
  MainWrapper,CountryName,Detail,Info, StyledLink,
} from "../Components/Main/MainComp";
//prettier-ignore
import {BackBtn,CouInfos,DeInfos,DeContainer,DeBorders,Borders,Border,DeFlag,PartOne,PartTwo,DataSep
} from "./DetailStyled";

export const DetailCountry = () => {
  const location = useLocation();
  const { infos } = location.state;

  return (
    <MainWrapper>
      <StyledLink to={`/`}>
        <BackBtn>
          <BsArrowLeft />
          Back
        </BackBtn>
      </StyledLink>

      <CouInfos>
        <DeFlag src={infos.flags.png}></DeFlag>
        <DataSep>
          <DeInfos>
            <CountryName>{infos.name.common}</CountryName>
            <DeContainer>
              <PartOne>
                <Detail>
                  <Info>Native Name:</Info>{" "}
                  {Object.values(infos.name.nativeName)
                    .map((val) => val.official)
                    .join(" ")}
                </Detail>
                <Detail>
                  <Info>Population:</Info>{" "}
                  {(infos.population / 1000000).toFixed(2)} M hab
                </Detail>
                <Detail>
                  <Info>Region:</Info> {infos.region}
                </Detail>
                <Detail>
                  <Info>Sub Region:</Info> {infos.subregion}
                </Detail>
                <Detail>
                  <Info>Capital: </Info> {infos.capital}
                </Detail>
              </PartOne>
              <PartTwo>
                <Detail>
                  <Info>Top Level Domain: </Info> {infos.tld}
                </Detail>
                <Detail>
                  <Info>Currencies: </Info>
                  {Object.values(infos.currencies).map((val) => val.name)}
                </Detail>
                <Detail>
                  <Info>Languages: </Info>
                  {Object.values(infos.languages).join(", ")}
                </Detail>
              </PartTwo>
            </DeContainer>
          </DeInfos>
          <DeBorders>
            <Info>Border Countries:</Info>
            <Borders>
              {infos.borders ? (
                infos.borders.map((bor) => <Border key={bor}>{bor}</Border>)
              ) : (
                <Border>No Borders</Border>
              )}
            </Borders>
          </DeBorders>
        </DataSep>
      </CouInfos>
    </MainWrapper>
  );
};
