import React from 'react';
import {withRouteData} from 'react-static';
import PortNav from 'components/PortNav';

export default withRouteData( ({articlesEn}) =>(
    <div>
        <PortNav articles= {articlesEn} lang='en/'/>
    </div>
))