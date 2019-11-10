import React,{useContext} from 'react';
import styled from 'styled-components';
import {Link} from '@reach/router'
import {LangContext} from '../LangContext';
const Logo=styled.div `
    box-sizing:border-box;
    overflow:hidden;
    margin:0px;
    padding:0px;
    width:auto;
    height:40px;
`
const Img=styled.img `
    width:auto;
    height:35px;
`
export default function (){
    const [lang,] = useContext(LangContext);
    switch(lang){
      case 'en':
        return(
          <Logo className="Logo">
            <Link to='/en'>
                <Img src="/icons/logo.svg" alt="f"/>
            </Link>
          </Logo>
            );
      case 'cz' :
        return(
            <Logo className="Logo" >
            <Link to='/'>
                <Img src="/icons/logo.svg"alt="f"/>
            </Link>
          </Logo>
          );
      default:return null;}};
