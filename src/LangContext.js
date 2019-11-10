import React, { useState } from 'react';

const LangContext = React.createContext([{}, () => {}]);

const LangProvider = (props) => {
  const [lang, setLang] = useState('cz');
  return (
    <LangContext.Provider value={[lang, setLang]}>
      {props.children}
    </LangContext.Provider>
  );
}

export { LangContext, LangProvider };