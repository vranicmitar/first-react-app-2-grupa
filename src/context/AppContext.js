import React, { createContext, useState } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const values = {
    token,
    setToken,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppContext, ContextProvider };
