import React from 'react';
import {withRouteData} from 'react-static';
import PortNav from 'components/PortNav';

export default withRouteData (({articles}) => (

  <div>
    <PortNav articles= {articles} lang=''/>
  </div>
));