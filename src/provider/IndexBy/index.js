import { createContext, useState, useContext } from "react";


const IndexByContext = createContext();

export const IndexByProvider = ({ children }) => {

  const array = ["assinc", "mascara", "ava", "wifi"]

  

  return (
    <IndexByContext.Provider value={{  }}>
      {children}
    </IndexByContext.Provider>
  );
};

export const useIndexBy = () => useContext(IndexByContext);