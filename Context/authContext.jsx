import { createContext, useContext, useState } from "react";

const authContext = createContext(undefined);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setAuth = (userData) => {
    setUser(userData);
  };

  const setUserData = (userData) => {
    setUser({ ...userData });
  };

  return (
    <authContext.Provider value={{ user, setAuth, setUserData }}>
      {children}
    </authContext.Provider>
  );
};

export const authState = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("authState must be used within a authContextProvider");
  }
  return context;
};

export default AuthContextProvider;
