import React,{useEffect} from 'react';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
import PortNav from 'components/PortNav';
import Content from 'components/Content';

const Article=styled.div`
margin-left:auto;
margin-right:auto;
text-align:center;
`


export default withRouteData(({ article, articlesEn}) => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[article,articlesEn]);
    return(    
        <Article>
            <Content content = {article}/>
            <hr/>
            <PortNav articles= {articlesEn} lang='en/'/>
        </Article>)
});