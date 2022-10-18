import React from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {

  return (
    <GlobalContext.Provider value={{Link, useNavigate, useParams, useLocation}}>
      {children}
    </GlobalContext.Provider>
  )
}
