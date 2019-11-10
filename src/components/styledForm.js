import styled from 'styled-components';

const CForm=styled.div `
    width:600px;
    max-width:100%;
    margin:auto;
    padding:15px;
    box-sizing:border-box;
    
    .thanks{
        width:100%;
        height:380px;
        vertical-align:middle;
        display:table-cell;
        border:1px solid black;
        p{
            font-size:calc(1em + 1vw);
            font-weight:bold;
            text-align:center;
            margin:0 15px;
        }
    }
    .Form{
        width:100%;
        text-align:center;
        
        input{display:block;
            background-color:white;
            font-size:16px;
            max-width:100%;
            width:564px;
            padding:2px;
            border:none;
            border-bottom:2px solid gray;
            margin-bottom:20px;
            };
        textarea{display:block;
            background-color:white;
            font-size:16px;
            resize: none;
            width:564px;
            max-width:100%;
            height:300px;
            padding:2px;
            border:1px solid gray;
            margin-bottom:5px;
            };
        .button{
            width:50px;
            height:auto;
            border:none;
            margin-left:auto;
	        };
    }
 `
 export{CForm};