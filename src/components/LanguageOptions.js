import React,{useContext} from 'react';
import styled from 'styled-components';
import { Link } from "@reach/router";

import { LangContext } from "../LangContext";

const SLink = styled(Link)`
display:inline;
  text-decoration: none;
  text-align: center;
  font-size: 25px;
  margin: 10px 5px;
`;

export const LanguageOptions = ()=>{
    const [lang, setLang] = useContext(LangContext);
    return (
      <span className='languageOptions'>
              <SLink onClick={() => setLang("cz")} to='/'>
                CZ
              </SLink>
              <SLink onClick={() => setLang("en")} to='/en'>
                EN
              </SLink>
            </span>
    )
  }