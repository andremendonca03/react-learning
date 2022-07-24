import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    window.fetch('https://ranekapi.origamid.dev/json/api/produto/')
    .then(r => r.json()).then(rJSON => setData(rJSON));
  }, []);

  function cleanData() {
    setData(null);
  }

  return (
    <GlobalContext.Provider value={{ data, cleanData }}>
      {children}
    </GlobalContext.Provider>
  );
};
