import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  console.log(GlobalContext);
  return (
    <GlobalContext.Provider value={{ nome: "Andre" }}>
      {children}
    </GlobalContext.Provider>
  );
};
