import React, { createContext, useState } from "react";

const UserContext = createContext({ name: "", auth: false });

const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ name: "", auth: true });

  // Login updates the user data with a name parameter
  const loginContext = (name, token) => {
    setUser((user) => ({
      name: name,
      auth: true,
    }));
    localStorage.setItem("token", token);
  };

  // Logout updates the user data to default
  const logout = () => {
    localStorage.removeItem("token");
    setUser((user) => ({
      name: "",
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
