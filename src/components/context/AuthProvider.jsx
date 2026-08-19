import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const { employees,admin} = getLocalStorage();
    // console.log(employees)
    setUserData({employees,admin });
  }, []);
  

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};
