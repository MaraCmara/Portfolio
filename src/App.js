import React from 'react';
import {Root, Routes} from 'react-static';
import styled, {createGlobalStyle} from 'styled-components';
import BurgerNav from './components/BurgerNav'
import NavBar from './components/NavBar';
import {LangProvider} from './LangContext';
import {NavProvider} from './NavContext';
import {ContactBar} from './components/ContactBar';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Big+Shoulders+Display&display=swap');
  html{
    position:relative;
    max-width:1200px;
  margin:auto;}
  body {
   color:gray;
    background-color:white;
    h1{font-size:30px;}
    h2{font-size:25px;}
    p{font-size:16px;
      font-family:'Roboto', sans-serif;}
      font-family:'Big Shoulders Display',sans-serif;
    font-weight:thin;
    margin:0;
    margin-bottom:100px;
    padding: 0;
    width:100%;
    height:100%;
    box-sizing:border-box;
    
  }
  a {
    text-decoration: none;
    color: gray;
  }
  img {
    max-width: 100%;
  }
`

const Body=styled.div `
            margin-top:60px;
            margin-bottom:20px;
            width:1200px;
            max-width:100%;
`
function App() {
  return (
        <Root>
          <React.Suspense fallback={<em>Loading...</em>}>
            <GlobalStyle/>
            <LangProvider>
              <NavProvider>
            <BurgerNav/>
            <NavBar/>
              </NavProvider>
            <Body>
              <Routes path="*"/>
            </Body>
            <ContactBar/>
            </LangProvider>
          </React.Suspense>
        </Root>
  )};
  export default App
  