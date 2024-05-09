"use client";
import { ReactNode, createContext, useContext, useState } from "react";

const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userSession, setUserSession] = useState({
    user: "",
    token: "",
    loggedIn: false,
  });
  return (
    <AuthContext.Provider value={{ userSession, setUserSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
