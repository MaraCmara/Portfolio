import styled from 'styled-components';

const About=styled.div `

display:grid;
grid-template-columns:repeat(12,1fr);
grid-auto-rows:minmax(1fr,auto);
.portrait{
    grid-column:span 12;
    grid-row:span 1;
    width:400px;
    border-radius:50%;
    max-width:90%;
    margin:auto;
    }
.about{
    grid-column: 3/11;
    grid-row:span 1;
};
`
export{About}