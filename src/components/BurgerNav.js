import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { slideInDown } from "react-animations";

import { Navigation } from "./Navigation";
import {SocialMediaNav} from "./SocialMediaNav";
import {LanguageOptions} from "./LanguageOptions";

import Logo from "../components/Logo";
import { NavContext } from "../NavContext";

const slideInAnimation = keyframes`${slideInDown}`;
const OpenNav = styled.nav`
  animation: 1s ${slideInAnimation};
  @media only screen and (min-height: 450px) and (orientation: landscape) {
    display: none;
  }
  @media only screen and (min-width: 800px) and (orientation: portrait) {
    display: none;
  }
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: +2;
  background-color: #ffff;
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(12, 8.333vw);
  grid-auto-rows: minmax(1vw, auto);
  .content{
      grid-column:1/13;
      grid-row:2/6;
  }
  .languageOptions{
      grid-column:1/3;
      grid-row:1/2;
      margin-left:15px;
  }
`;
const ClosedNav = styled.nav`
  @media only screen and (min-height: 450px) and (orientation: landscape) {
    display: none;
  }
  @media only screen and (min-width: 800px) and (orientation: portrait) {
    display: none;
  }
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: +2;
  background-color: #ffff;
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(12, 8.333vw);
  grid-auto-rows: minmax(1vw, auto);
  .Logo {
    grid-column: 1/6;
    grid-row: 1/2;
    margin-left: 15px;
  }
  
`;
const Img = styled.img`
  grid-column: 11/13;
  grid-row: 1/2;
  width: 30px;
  height: auto;
  padding: 10px;
  margin-left: auto;
  margin-right: 10px;
`;
export default function BNav() {
  const [click, setClick] = useContext(NavContext);

  if (click) {
    return (
      <OpenNav>
        <Img
          src='/icons/close.svg'
          alt='close'
          onClick={() => setClick(false)}
        />
        <span className='content'>
        <Navigation />
        <SocialMediaNav/>
        </span>
        <LanguageOptions/>
      </OpenNav>
    );
  }
  return (
    <ClosedNav>
      <Logo />
      <Img src='/icons/menu.svg' alt='open' onClick={() => setClick(true)} />
    </ClosedNav>
  );
}
