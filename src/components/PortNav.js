import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const Nav = styled.div`
  width:100%;
  margin:auto;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
  h1 {
    display: none;
  }
`;
const Box = styled.div`
  @media only screen and (max-width: 830px) {
    width: 100%;
    height: auto;
  }
  @media only screen and (min-width: 830px) and (max-width: 1100px) {
    width: auto;
    height: 280px;
  }
  position: relative;
  box-sizing: border-box;
  width: auto;
  height: 370px;
  overflow: hidden;
  margin-bottom: 20px;
  text-align: center;

`;
const PortImg = styled.img`
  @media only screen and (max-width: 830px) {
    width: 100%;
    height: auto;
  }
  @media only screen and (min-width: 830px) and (max-width: 1100px) {
    width: auto;
    height: 280px;
  }
  height: 370px;
  max-width: 100%;
  width: auto;
  opacity: 1;
  ${Box}:hover & {
    opacity: 0.2;
  }
`;
const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  ${Box}:hover & {
    opacity: 1;
  }
  color:gray;
`;
export default function PortNav(props) {
  const lang = props.lang;
  const Articles = props.articles;
  const items = Articles.map((article, i) => (
    <Box key={i}>
      <Link  to={`/${lang}portfolio/${article.name.toLowerCase()}`}>
        <PortImg src={article.image} alt={article.name} />
        <Overlay>
          <h2>{article.name}</h2>
        </Overlay>
      </Link>
    </Box>
  ));
  return (
    <Nav>
      <h1>Portfolio</h1>

      {items}
    </Nav>
  );
}
