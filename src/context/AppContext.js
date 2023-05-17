import React, { createContext, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  // const [data, setData] = useState([]);
  // const [Forbidden, setForbidden] = useState("");
  // const [Admin, setAdmin] = useState(false);
  const [token, setToken] = useState(null);
  // const [niz, setNiz] = useState([]);
  const values = {
    token,
    setToken,
    // niz,
    // setNiz,
    // Admin,
    // setAdmin,
    // Forbidden,
    // setForbidden,
    // data,
    // setData,
  };

  return (
    <>
      <AppContext.Provider value={values}>{children}</AppContext.Provider>
    </>
  );
}

export { AppContext, ContextProvider };
