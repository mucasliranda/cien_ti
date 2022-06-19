import { createContext, useState, useContext } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const IndexByContext = createContext();

export const IndexByProvider = ({ children }) => {

  function FindIndex(value){

    if(value === "0"){
      return <KeyboardArrowDownIcon />
    }
    else{
      return value
    }

  }

  return (
    <IndexByContext.Provider value={{ FindIndex }}>
      {children}
    </IndexByContext.Provider>
  );
};

export const useIndexBy = () => useContext(IndexByContext);