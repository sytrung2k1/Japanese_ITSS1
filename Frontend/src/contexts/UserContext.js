import React, { createContext, useState } from "react";

const UserContext = createContext({
  username: "",
  auth: false,
  role: 0,
  userId: 0,
});

const UserProvider = ({ children }) => {
  // User is the username of the "data" that gets stored in context
  const [user, setUser] = useState({
    username: "",
    auth: false,
    role: 0,
    userId: 0,
  });

  // Login updates the user data with a username parameter
  const loginContext = (username, token, role, id) => {
    setUser((user) => ({
      username: username,
      auth: true,
      role: role,
      userId: id,
    }));
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
    localStorage.setItem("id", id);
  };

  // Logout updates the user data to default
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    setUser((user) => ({
      username: "",
      auth: false,
      role: 0,
      userId: 0,
    }));
  };

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
