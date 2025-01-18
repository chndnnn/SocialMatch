import { createContext, useContext, useState } from "react";

const authContext = createContext(undefined);

const authContextProvider = ({ children }) => {
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
    throw new Error("useChatState must be used within a ChatssProvider");
  }
  return context;
};

export default authContextProvider;
