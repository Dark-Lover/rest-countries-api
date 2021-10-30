import React from "react";
import LoadImg from "../../Assets/Bar.gif";
import styled from "styled-components";

const Loading = () => {
  return <Image src={LoadImg}></Image>;
};

export default Loading;

const Image = styled.img`
  width: 100%;
  height: calc(100vh - 12vh);
`;
