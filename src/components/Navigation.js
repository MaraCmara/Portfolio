import React, { useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { LangContext } from "../LangContext";
import { NavContext } from "../NavContext";

const SLink = styled(Link)`
  @media only screen and (min-height: 450px) and (orientation: landscape) {
    display: inline;
    margin: 10px 5px;
  }
  @media only screen and (min-width: 800px) and (orientation: portrait) {
    display: inline;
    margin: 10px 5px;
  }
  @media only screen and (max-height: 450px) and (orientation: landscape) {
    display: block;
  }
  @media only screen and (max-width: 800px) and (orientation: portrait) {
    display: block;
  }
  
  text-decoration: none;
  text-align: center;
  font-size: 25px;
 
`;

export const Navigation =()=> {
  const [lang, setLang] = useContext(LangContext);
  const [click, setClick] = useContext(NavContext);
  switch (lang) {
    case "en":
      return (
        
          <span onClick={() => setClick(false)}>
            <SLink to='/en'>Portfolio</SLink>
            <SLink to='/en/info'>Info</SLink>
            
          </span>

      );
    case "cz":
      return (
        
          <span  onClick={() => setClick(false)}>
            <SLink to='/'>Portfolio</SLink>
            <SLink to='/info'>Info</SLink>
          </span>
      );
    default:
      return null;
  }
}