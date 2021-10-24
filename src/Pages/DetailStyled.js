import styled from "styled-components";
import { Detail, Info } from "../Components/Main/MainComp";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  padding: 0 1rem;
  transition: all 0.5s ease;
`;
export const BackBtn = styled.div`
  background-color: ${(props) => props.theme.bgEls};
  color: ${(props) => props.theme.colorText};
  font-size: 0.7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 5rem;
  height: 1.7rem;
  margin: 6.5rem 0 2rem 0;
  padding: 0 0.8rem;
  box-shadow: 0px 1px 16px 0px ${(props) => props.theme.shadow};
  transition: all 0.5s ease;
  cursor: pointer;
`;
export const CouInfos = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: center;
    max-width: 70vw;
    margin: auto;
  }
`;
export const DeFlag = styled.img`
  flex: 0.3;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
  @media (min-width: 700px) {
    width: 100%;
    height: 100%;
    max-width: 400px;
    margin-right: 4rem;
  }
`;

export const DataSep = styled.div`
  flex: 0.7;
  min-width: 300px;
`;

export const DeInfos = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colorText};
  @media (min-width: 700px) {
  }
`;
export const DeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PartOne = styled(Detail)`
  ${Detail} {
    margin-bottom: 0.5rem;
  }
`;
export const PartTwo = styled(Detail)`
  ${Detail} {
    margin-bottom: 0.5rem;
  }
`;

export const DeBorders = styled(Info)`
  color: ${(props) => props.theme.colorText};
  display: flex;
  flex-direction: column;
  margin: 1.3rem 0;
  ${Info} {
    font-size: 0.9rem;
  }
`;
export const Borders = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Border = styled.div`
  background-color: ${(props) => props.theme.bgEls};
  color: ${(props) => props.theme.colorText};
  font-size: 0.7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 5rem;
  height: 1.7rem;
  margin: 1rem 1rem 2rem 0;
  padding: 0 0.8rem;
  box-shadow: 0px 1px 16px 0px ${(props) => props.theme.shadow};
  transition: all 0.5s ease;
`;
