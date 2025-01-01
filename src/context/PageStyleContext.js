import React, { useContext, useState } from "react";

const PageStyleContext = React.createContext();
const PageStyleContextUpdate = React.createContext();

export const getTheme = () => {
  return useContext(PageStyleContext);
};

export const setTheme = () => {
  return useContext(PageStyleContextUpdate);
};

export const PageStyleProvider = ({ children }) => {

  const sideMargin = 6;

  const [dark, setDark] = useState(true);

  function toggleTheme() {
    setDark((darkk) => !darkk);
  }

  return (
    <PageStyleContext.Provider value={{dark,sideMargin}}>
      <PageStyleContextUpdate.Provider value={toggleTheme}>
        {children}
      </PageStyleContextUpdate.Provider>
    </PageStyleContext.Provider>
  );
};
