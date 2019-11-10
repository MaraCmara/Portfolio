import React, { useState } from 'react';

const NavContext = React.createContext([{}, () => {}]);

const NavProvider = (props) => {
    const [click, setClick] =useState(false);
  return (
    <NavContext.Provider value={[click, setClick]}>
      {props.children}
    </NavContext.Provider>
  );
}

export { NavContext, NavProvider };